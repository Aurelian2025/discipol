import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Pressable, ScrollView, Text, TextInput, View } from "react-native";

import { loadActivePlans, saveActivePlans } from "../src/storage/activePlans";
import { createCustomPlan } from "../src/storage/customPlans";
import type { ActivePlanState } from "../src/storage/types";

function todayKey() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export default function BuildYourOwnScreen() {
  const [title, setTitle] = useState("");

  async function onCreate() {
    const trimmed = title.trim();
    if (!trimmed) {
      Alert.alert("Missing name", "Give your area a name (example: Confidence).");
      return;
    }

    const customPlan = await createCustomPlan(trimmed);

    // Start it as an active plan immediately (Day 1)
    const active = await loadActivePlans();
    const already = active.find((p) => p.planId === customPlan.id && !p.isCompleted);

    if (!already) {
      const newPlan: ActivePlanState = {
        planId: customPlan.id,
        startedAt: new Date().toISOString(),
        currentDay: 1,
        dayActivatedOn: todayKey(),
        days: {},
        isCompleted: false,
      };
      await saveActivePlans([newPlan, ...active]);
    }

    router.push({ pathname: "/(tabs)/today", params: { focus: customPlan.id } });
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 14 }}>
      <Text style={{ fontSize: 26, fontWeight: "900" }}>Build your own ✍️</Text>
      <Text style={{ color: "#444", fontSize: 16 }}>
        Create your own area of improvement and write tasks day-by-day.
      </Text>

      <View style={{ padding: 14, borderRadius: 14, borderWidth: 1, borderColor: "#ddd", backgroundColor: "white", gap: 10 }}>
        <Text style={{ fontWeight: "900", fontSize: 16 }}>Choose your own area of improvement</Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Example: Confidence, Patience, Public speaking…"
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 12,
            paddingHorizontal: 12,
            paddingVertical: 10,
            fontSize: 16,
          }}
        />

        <Pressable
          onPress={onCreate}
          style={{
            paddingVertical: 12,
            borderRadius: 12,
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#111",
          }}
        >
          <Text style={{ fontWeight: "900", fontSize: 16 }}>Start Day 1 →</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
