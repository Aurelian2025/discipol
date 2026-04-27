import { useFocusEffect } from "@react-navigation/native";
import * as Notifications from "expo-notifications";
import { router } from "expo-router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import AppHeader from "../../src/components/AppHeader";
import TodayTaskReminderPopup from "../../src/components/TodayTaskReminderPopup";
import { planById } from "../../src/data/selfImprovementPlans.v1";
import {
  cancelTodayTaskNotifications,
  getTodayTaskNotificationsEnabled,
  scheduleTodayTaskNotifications,
  setTodayTaskNotificationsEnabled,
} from "../../src/notifications/todayTaskNotifications";
import {
  loadActivePlans,
  rolloverPlan,
  saveActivePlans,
} from "../../src/storage/activePlans";
import { loadCustomPlans, type CustomPlan } from "../../src/storage/customPlans";
import type { ActivePlanState } from "../../src/storage/types";

type ReminderPopupState = {
  visible: boolean;
  taskTitle: string;
  taskText: string;
};

export default function SummaryScreen() {
  const [activePlans, setActivePlans] = useState<ActivePlanState[] | null>(null);
  const [customMap, setCustomMap] = useState<Record<string, CustomPlan>>({});
  const [notificationsEnabled, setNotificationsEnabledState] = useState(false);
  const [popup, setPopup] = useState<ReminderPopupState>({
    visible: false,
    taskTitle: "",
    taskText: "",
  });

  const refresh = useCallback(async () => {
    const loaded = await loadActivePlans();
    const rolled = loaded.map(rolloverPlan);

    if (JSON.stringify(loaded) !== JSON.stringify(rolled)) {
      await saveActivePlans(rolled);
    }

    setActivePlans(rolled);

    const enabled = await getTodayTaskNotificationsEnabled();
    setNotificationsEnabledState(enabled);

    if (enabled) {
      await scheduleTodayTaskNotifications();
    }

    const customs = await loadCustomPlans();
    const map: Record<string, CustomPlan> = {};
    for (const c of customs) map[c.id] = c;
    setCustomMap(map);
  }, []);

  useFocusEffect(
    useCallback(() => {
      refresh();
    }, [refresh])
  );

  const { active, completed } = useMemo(() => {
    const list = activePlans ?? [];
    const active = list.filter((p) => !p.isCompleted);
    const completed = list.filter((p) => !!p.isCompleted);

    active.sort((a, b) => (b.startedAt > a.startedAt ? 1 : -1));
    completed.sort((a, b) => (b.startedAt > a.startedAt ? 1 : -1));

    return { active, completed };
  }, [activePlans]);

  const titleFor = useCallback(
    (planId: string) => {
      const builtIn = planById(planId);
      if (builtIn?.title) return builtIn.title;

      const custom = customMap[planId];
      if (custom?.title) return custom.title;

      return planId;
    },
    [customMap]
  );

  const taskTextFor = useCallback(
    (planId: string, currentDay: number, taskIndex: number) => {
      const builtIn = planById(planId);
      const builtInTask = builtIn?.days?.find((d) => d.day === currentDay)?.tasks?.[
        taskIndex
      ];

      if (builtInTask?.text) return builtInTask.text;

      const custom = customMap[planId];
      const customTask = custom?.days?.find((d) => d.day === currentDay)?.tasks?.[
        taskIndex
      ];

      if (customTask?.text) return customTask.text;

      return `Task ${taskIndex + 1}`;
    },
    [customMap]
  );

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        const data = notification.request.content.data;

        if (data?.type !== "today-task-reminder") return;

        const taskIndex =
          typeof data.taskIndex === "number" ? data.taskIndex : undefined;

        if (taskIndex === undefined) return;

        const unfinishedPlan = active.find((plan) => {
          const dayState = plan.days?.[plan.currentDay];
          return dayState?.tasksChecked?.[taskIndex] !== true;
        });

        if (!unfinishedPlan) return;

        setPopup({
          visible: true,
          taskTitle: `Task ${taskIndex + 1} reminder`,
          taskText: taskTextFor(
            unfinishedPlan.planId,
            unfinishedPlan.currentDay,
            taskIndex
          ),
        });
      }
    );

    return () => {
      subscription.remove();
    };
  }, [active, taskTextFor]);

  const goToPlan = (planId: string) => {
    router.push({ pathname: "/(tabs)/today", params: { focus: planId } });
  };

  const categoryFor = (planId: string) => {
    const builtIn = planById(planId);
    if (builtIn?.category) return builtIn.category;

    const custom = customMap[planId];
    if (custom) return "Custom";

    return "Unknown";
  };

  const colorsForCategory = (category: string) => {
    if (category === "Mental Well-Being") {
      return { bg: "#fff3ee", border: "#f2c6b6" };
    }
    if (category === "Physical Well-Being") {
      return { bg: "#f2f7ff", border: "#c8d9f0" };
    }
    if (category === "Spiritual Well-Being") {
      return { bg: "#f3fbf5", border: "#cde6d3" };
    }

    return { bg: "#fff7f2", border: "#e7b8a5" };
  };

  const toggleNotifications = async () => {
    const nextValue = !notificationsEnabled;

    await setTodayTaskNotificationsEnabled(nextValue);
    setNotificationsEnabledState(nextValue);

    if (nextValue) {
      await scheduleTodayTaskNotifications();
    } else {
      await cancelTodayTaskNotifications();
    }
  };

  const turnOffNotifications = async () => {
    await setTodayTaskNotificationsEnabled(false);
    await cancelTodayTaskNotifications();
    setNotificationsEnabledState(false);
    setPopup({ visible: false, taskTitle: "", taskText: "" });
  };

  if (activePlans === null) {
    return (
      <View style={{ padding: 16 }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
        <AppHeader />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <Pressable
            onPress={() => router.push("/review")}
            style={{
              alignSelf: "flex-start",
              paddingVertical: 10,
              paddingHorizontal: 12,
              borderRadius: 12,
              borderWidth: 2,
              borderColor: "#e7b8a5",
              backgroundColor: "#fff7f2",
            }}
          >
            <Text style={{ fontWeight: "900" }}>View your progress →</Text>
          </Pressable>

          <Pressable
            onPress={() => router.push("/subscribe")}
            style={{
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 999,
              borderWidth: 1,
              borderColor: "#ddd",
              backgroundColor: "white",
            }}
          >
            <Text style={{ fontWeight: "900" }}>Subscribe</Text>
          </Pressable>
        </View>

        <Pressable
          onPress={toggleNotifications}
          style={{
            padding: 14,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: notificationsEnabled ? "#9cc89c" : "#ddd",
            backgroundColor: notificationsEnabled ? "#f1fff1" : "white",
          }}
        >
          <Text style={{ fontWeight: "900" }}>
            Notifications: {notificationsEnabled ? "On" : "Off"}
          </Text>
          <Text style={{ color: "#555", marginTop: 4 }}>
            Reminders at 7:30 AM, 11:00 AM, 2:30 PM, 5:30 PM, and 8:00 PM.
          </Text>
        </Pressable>

        <View style={{ flexDirection: "row", gap: 10 }}>
          <View
            style={{
              flex: 1,
              padding: 12,
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 12,
              backgroundColor: "white",
            }}
          >
            <Text style={{ fontWeight: "900", fontSize: 16 }}>{active.length}</Text>
            <Text style={{ color: "#444" }}>Active</Text>
          </View>

          <View
            style={{
              flex: 1,
              padding: 12,
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 12,
              backgroundColor: "white",
            }}
          >
            <Text style={{ fontWeight: "900", fontSize: 16 }}>
              {completed.length}
            </Text>
            <Text style={{ color: "#444" }}>Completed</Text>
          </View>
        </View>

        <View style={{ gap: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "900" }}>Active areas</Text>

          {active.length === 0 ? (
            <Text style={{ color: "#444" }}>
              No active areas. Start one in Explore.
            </Text>
          ) : (
            active.map((p) => {
              const title = titleFor(p.planId);
              const category = categoryFor(p.planId);
              const colors = colorsForCategory(category);

              const dayState = p.days?.[p.currentDay];
              const done = dayState?.tasksChecked?.filter(Boolean).length ?? 0;
              const total = dayState?.tasksChecked?.length ?? 0;

              return (
                <Pressable
                  key={p.planId}
                  onPress={() => goToPlan(p.planId)}
                  style={{
                    padding: 14,
                    borderRadius: 16,
                    borderWidth: 1,
                    borderColor: colors.border,
                    backgroundColor: colors.bg,
                    gap: 6,
                  }}
                >
                  <Text style={{ fontWeight: "900" }}>{title}</Text>
                  <Text
                    style={{ fontSize: 12, fontWeight: "700", color: "#555" }}
                  >
                    {category}
                  </Text>
                  <Text style={{ color: "#444" }}>
                    Day {p.currentDay} • Today: {done}/{total || "?"}
                  </Text>
                  <Text style={{ fontWeight: "900" }}>Continue →</Text>
                </Pressable>
              );
            })
          )}
        </View>

        <View style={{ gap: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "900" }}>Completed areas</Text>

          {completed.length === 0 ? (
            <Text style={{ color: "#444" }}>No completed areas yet.</Text>
          ) : (
            completed.map((p) => {
              const title = titleFor(p.planId);
              const category = categoryFor(p.planId);
              const colors = colorsForCategory(category);

              return (
                <View
                  key={p.planId}
                  style={{
                    padding: 14,
                    borderRadius: 16,
                    borderWidth: 1,
                    borderColor: colors.border,
                    backgroundColor: colors.bg,
                    gap: 6,
                    opacity: 0.75,
                  }}
                >
                  <Text style={{ fontWeight: "900" }}>{title}</Text>
                  <Text
                    style={{ fontSize: 12, fontWeight: "700", color: "#555" }}
                  >
                    {category}
                  </Text>
                  <Text style={{ color: "#444" }}>Completed ✅</Text>
                </View>
              );
            })
          )}
        </View>

        <View
          style={{
            marginTop: 18,
            paddingTop: 16,
            borderTopWidth: 1,
            borderColor: "#ddd",
            gap: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "900" }}>Legal</Text>

          <Pressable onPress={() => router.push("/legal/privacy")}>
            <Text style={{ color: "#1E88E5", fontWeight: "700" }}>
              Privacy Policy
            </Text>
          </Pressable>

          <Pressable onPress={() => router.push("/legal/terms")}>
            <Text style={{ color: "#1E88E5", fontWeight: "700" }}>
              Terms of Service
            </Text>
          </Pressable>

          <Pressable onPress={() => router.push("/legal/subscription")}>
            <Text style={{ color: "#1E88E5", fontWeight: "700" }}>
              Subscription Information
            </Text>
          </Pressable>
        </View>
      </ScrollView>

      <TodayTaskReminderPopup
        visible={popup.visible}
        taskTitle={popup.taskTitle}
        taskText={popup.taskText}
        onClose={() => setPopup({ visible: false, taskTitle: "", taskText: "" })}
        onTurnOff={turnOffNotifications}
      />
    </View>
  );
}
