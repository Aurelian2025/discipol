import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";

import AppHeader from "../../src/components/AppHeader";
import { planById, plansByCategory } from "../../src/data/selfImprovementPlans.v1";
import {
  loadActivePlans,
  saveActivePlans,
  todayKey,
} from "../../src/storage/activePlans";
import type { ActivePlanState } from "../../src/storage/types";

import { getIsPro } from "../../src/subscription/subscription";

const ADMIN_KEY = "discipol.admin.unlocked";

export default function PlansScreen() {
  const params = useLocalSearchParams();
  const category =
    typeof params.category === "string" ? params.category : null;

  const [isPro, setIsPro] = useState(false);
  const [adminUnlocked, setAdminUnlocked] = useState(false);

  useEffect(() => {
    (async () => {
      const [pro, admin] = await Promise.all([
        getIsPro(),
        AsyncStorage.getItem(ADMIN_KEY),
      ]);
      setIsPro(!!pro);
      setAdminUnlocked(admin === "true");
    })();
  }, []);

  const effectivePro = isPro || adminUnlocked;

  const areas = useMemo(() => {
    if (!category) return [];
    return plansByCategory(category);
  }, [category]);

  const getAreaCardColors = () => {
    if (category === "Mental Well-Being") {
      return { bg: "#fff3ee", border: "#f2c6b6" };
    }
    if (category === "Physical Well-Being") {
      return { bg: "#f2f7ff", border: "#c8d9f0" };
    }
    if (category === "Spiritual Well-Being") {
      return { bg: "#f3fbf5", border: "#cde6d3" };
    }
    return { bg: "#f7f7f7", border: "#ddd" };
  };

  async function startOrOpenPlan(planId: string) {
    const plan = planById(planId);
    if (!plan) {
      Alert.alert("Not found", "This area could not be loaded.");
      return;
    }

    const active = await loadActivePlans();
    const already = active.find(
      (p) => p.planId === planId && !p.isCompleted
    );

    if (already) {
      router.push({ pathname: "/(tabs)/today", params: { focus: planId } });
      return;
    }

    const now = new Date().toISOString();
    const newPlan: ActivePlanState = {
      planId,
      startedAt: now,
      currentDay: 1,
      dayActivatedOn: todayKey(),
      days: {},
      isCompleted: false,
    };

    await saveActivePlans([newPlan, ...active]);
    router.push({ pathname: "/(tabs)/today", params: { focus: planId } });
  }

  function onPressBuildYourOwn() {
    if (!effectivePro) {
      Alert.alert(
        "Locked 🔒",
        "Build Your Own is available with a subscription. Subscribe to unlock all 30 days and custom plans.",
        [
          { text: "Cancel", style: "cancel" },
          { text: "Subscribe", onPress: () => router.push("/subscribe") },
        ]
      );
      return;
    }

    router.push("/build");
  }

  const areaColors = getAreaCardColors();

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
      <AppHeader />

      {/* Top navigation buttons */}
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
        {[
          { label: "Explore", path: "/(tabs)/explore" },
          { label: "Today", path: "/(tabs)/today" },
          { label: "Summary", path: "/(tabs)/summary" },
        ].map((btn) => (
          <Pressable
            key={btn.label}
            onPress={() => router.push(btn.path as any)}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 12,
              borderRadius: 14,
              borderWidth: 1,
              borderColor: areaColors.border,
              backgroundColor: areaColors.bg,
            }}
          >
            <Text style={{ fontWeight: "900" }}>{btn.label}</Text>
          </Pressable>
        ))}

        {!effectivePro && (
          <Pressable
            onPress={() => router.push("/subscribe")}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 12,
              borderRadius: 14,
              borderWidth: 1,
              borderColor: "#e7b8a5",
              backgroundColor: "#fff7f2",
            }}
          >
            <Text style={{ fontWeight: "900" }}>Subscribe</Text>
          </Pressable>
        )}

        {effectivePro && (
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 12,
              borderRadius: 14,
              borderWidth: 1,
              borderColor: "#cde6d3",
              backgroundColor: "#f3fbf5",
            }}
          >
            <Text style={{ fontWeight: "900" }}>
              {adminUnlocked ? "Unlocked (Admin)" : "Pro Active ✅"}
            </Text>
          </View>
        )}
      </View>

      {/* Title */}
      <Text style={{ fontSize: 22, fontWeight: "900" }}>
        {category ? category : "Choose a category first"}
      </Text>

      {!category ? (
        <View style={{ gap: 10 }}>
          <Text style={{ color: "#444" }}>
            Go to Explore and pick a category.
          </Text>

          <Pressable
            onPress={() => router.push("/(tabs)/explore")}
            style={{
              paddingVertical: 12,
              borderRadius: 16,
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#e7b8a5",
              backgroundColor: "#fff7f2",
            }}
          >
            <Text style={{ fontWeight: "900" }}>Go to Explore →</Text>
          </Pressable>
        </View>
      ) : (
        <View style={{ gap: 12 }}>
          {areas.map((area) => (
            <Pressable
              key={area.id}
              onPress={() => startOrOpenPlan(area.id)}
              style={{
                padding: 16,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: areaColors.border,
                backgroundColor: areaColors.bg,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "900" }}>
                {area.title}
              </Text>
              <Text style={{ marginTop: 8, fontWeight: "900" }}>
                Start this area →
              </Text>
            </Pressable>
          ))}

          <Pressable
            onPress={onPressBuildYourOwn}
            style={{
              padding: 16,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: effectivePro ? "#e7b8a5" : "#ddd",
              backgroundColor: effectivePro ? "#fff7f2" : "#f7f7f7",
              gap: 6,
              opacity: effectivePro ? 1 : 0.75,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "900" }}>
              Build your own ✍️ {effectivePro ? "" : " (Locked)"}
            </Text>

            <Text style={{ color: "#444" }}>
              Create your own area and write daily tasks.
            </Text>

            {!effectivePro ? (
              <Text style={{ fontWeight: "900" }}>
                Requires subscription — Tap to subscribe →
              </Text>
            ) : (
              <Text style={{ fontWeight: "900" }}>Start →</Text>
            )}
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
}
