import { useFocusEffect } from "@react-navigation/native";
import { router } from "expo-router";
import React, { useCallback, useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import AppHeader from "../../src/components/AppHeader";
import { planById } from "../../src/data/selfImprovementPlans.v1";
import {
  loadActivePlans,
  rolloverPlan,
  saveActivePlans,
} from "../../src/storage/activePlans";
import { loadCustomPlans, type CustomPlan } from "../../src/storage/customPlans";
import type { ActivePlanState } from "../../src/storage/types";

export default function SummaryScreen() {
  const [activePlans, setActivePlans] = useState<ActivePlanState[] | null>(null);
  const [customMap, setCustomMap] = useState<Record<string, CustomPlan>>({});

  const refresh = useCallback(async () => {
    const loaded = await loadActivePlans();
    const rolled = loaded.map(rolloverPlan);

    if (JSON.stringify(loaded) !== JSON.stringify(rolled)) {
      await saveActivePlans(rolled);
    }
    setActivePlans(rolled);

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

  const goToPlan = (planId: string) => {
    router.push({ pathname: "/(tabs)/today", params: { focus: planId } });
  };

  const titleFor = (planId: string) => {
    const builtIn = planById(planId);
    if (builtIn?.title) return builtIn.title;

    const custom = customMap[planId];
    if (custom?.title) return custom.title;

    return planId;
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
    // Custom or unknown
    return { bg: "#fff7f2", border: "#e7b8a5" };
  };

  if (activePlans === null) {
    return (
      <View style={{ padding: 16 }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
      <AppHeader />

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

      {/* ACTIVE */}
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
                <Text style={{ fontSize: 12, fontWeight: "700", color: "#555" }}>
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

      {/* COMPLETED */}
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
                <Text style={{ fontSize: 12, fontWeight: "700", color: "#555" }}>
                  {category}
                </Text>
                <Text style={{ color: "#444" }}>Completed ✅</Text>
              </View>
            );
          })
        )}
      </View>

      {/* Legal */}
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
  );
}
