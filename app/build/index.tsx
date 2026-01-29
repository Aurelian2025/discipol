import { router } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import { Alert, Pressable, ScrollView, Text, TextInput, View } from "react-native";

import { loadActivePlans, saveActivePlans, todayKey } from "../../src/storage/activePlans";
import {
    createCustomPlan,
    loadCustomPlans,
    saveCustomPlans,
    type CustomPlan,
} from "../../src/storage/customPlans";
import type { ActivePlanState } from "../../src/storage/types";

export default function BuildYourOwnScreen() {
  const [plans, setPlans] = useState<CustomPlan[]>([]);
  const [title, setTitle] = useState("");
  const [activePlans, setActivePlans] = useState<ActivePlanState[]>([]);

  async function refresh() {
    const [customs, actives] = await Promise.all([loadCustomPlans(), loadActivePlans()]);
    setPlans(customs);
    setActivePlans(actives ?? []);
  }

  useEffect(() => {
    refresh();
  }, []);

  const canCreate = useMemo(() => title.trim().length >= 3, [title]);

  function statusFor(planId: string): "Active" | "Completed" | "Not started" {
    const match = activePlans.find((p) => p.planId === planId);
    if (!match) return "Not started";
    return match.isCompleted ? "Completed" : "Active";
  }

  async function startCustomPlan(planId: string) {
    const active = await loadActivePlans();

    const already = active.find((p) => p.planId === planId && !p.isCompleted);
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

    await saveActivePlans([newPlan, ...(active ?? [])]);
    await refresh();
    router.push({ pathname: "/(tabs)/today", params: { focus: planId } });
  }

  async function onCreate() {
    const t = title.trim();
    if (t.length < 3) return;

    const existing = plans.find((p) => p.title.toLowerCase() === t.toLowerCase());
    if (existing) {
      Alert.alert(
        "Already exists",
        "You already have a custom area with that name. Want to open it?",
        [
          { text: "Cancel", style: "cancel" },
          { text: "Open", onPress: () => startCustomPlan(existing.id) },
        ]
      );
      return;
    }

    try {
      const plan = await createCustomPlan(t);
      setTitle("");
      await refresh();
      await startCustomPlan(plan.id);
    } catch (e: any) {
      Alert.alert("Error", e?.message ?? "Could not create plan.");
    }
  }

  async function onDelete(planId: string) {
    Alert.alert(
      "Delete this custom area?",
      "This will remove the custom area from your device. (Built-in plans are not affected.)",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            const next = plans.filter((p) => p.id !== planId);
            await saveCustomPlans(next);
            await refresh();
          },
        },
      ]
    );
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 14 }}>
      <Text style={{ fontSize: 24, fontWeight: "900" }}>Build your own ✍️</Text>
      <Text style={{ color: "#444", fontSize: 16, lineHeight: 22 }}>
        Create your own area of improvement. Each day you will write up to 5 tasks.
        Complete today’s tasks to unlock tomorrow.
      </Text>

      {/* Create */}
      <View
        style={{
          padding: 14,
          borderRadius: 14,
          borderWidth: 1,
          borderColor: "#ddd",
          backgroundColor: "white",
          gap: 10,
        }}
      >
        <Text style={{ fontWeight: "900", fontSize: 16 }}>Create a new area</Text>

        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Example: Quit sugar, Daily stretching, Read more..."
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 12,
            padding: 12,
            fontSize: 16,
            backgroundColor: "white",
          }}
        />

        <Pressable
          onPress={onCreate}
          disabled={!canCreate}
          style={{
            paddingVertical: 12,
            borderRadius: 12,
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#111",
            opacity: canCreate ? 1 : 0.4,
          }}
        >
          <Text style={{ fontWeight: "900", fontSize: 16 }}>Create & Start →</Text>
        </Pressable>
      </View>

      {/* Existing */}
      <View style={{ gap: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "900" }}>Your areas</Text>

        {plans.length === 0 ? (
          <Text style={{ color: "#444" }}>No custom areas yet. Create one above.</Text>
        ) : (
          plans.map((p) => {
            const status = statusFor(p.id);
            return (
              <View
                key={p.id}
                style={{
                  padding: 14,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: "#ddd",
                  backgroundColor: "white",
                  gap: 8,
                }}
              >
                <Pressable onPress={() => startCustomPlan(p.id)} style={{ gap: 6 }}>
                  <Text style={{ fontWeight: "900" }}>{p.title}</Text>
                  <Text style={{ color: "#666" }}>
                    Status: {status} • Tap to open →
                  </Text>
                </Pressable>

                <Pressable onPress={() => onDelete(p.id)} style={{ alignSelf: "flex-start" }}>
                  <Text style={{ color: "#D32F2F", fontWeight: "900" }}>Delete</Text>
                </Pressable>
              </View>
            );
          })
        )}
      </View>
    </ScrollView>
  );
}
