import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import AppHeader from "../../src/components/AppHeader";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
      <AppHeader belowHeaderText={"One day at a time • No skipping ahead"} />

      <Text style={{ fontSize: 22, fontWeight: "900" }}>How it works ✨</Text>

      <View
        style={{
          padding: 16,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#f2c6b6",
          backgroundColor: "#fff3ee",
          gap: 10,
        }}
      >
        <Text style={{ fontSize: 16 }}>
          🌱 Every day you’ll have{" "}
          <Text style={{ fontWeight: "900" }}>5 small tasks</Text> to complete.
        </Text>
        <Text style={{ fontSize: 16 }}>
          🧩 These are <Text style={{ fontWeight: "900" }}>tiny steps</Text> that
          create big change over time.
        </Text>
        <Text style={{ fontSize: 16 }}>
          🔒 You <Text style={{ fontWeight: "900" }}>cannot go to the next day</Text>{" "}
          without completing the current day.
        </Text>
        <Text style={{ fontSize: 16 }}>
          ⏳ You can stay on the same day{" "}
          <Text style={{ fontWeight: "900" }}>as long as it takes</Text> — no pressure.
        </Text>
      </View>

      <Pressable
        onPress={() => router.push("/(tabs)/explore")}
        style={{
          paddingVertical: 14,
          paddingHorizontal: 14,
          borderRadius: 18,
          borderWidth: 2,
          borderColor: "#e7b8a5",
          backgroundColor: "#fff7f2",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "900", fontSize: 16 }}>
          Choose your first area →
        </Text>
      </Pressable>

      <View
        style={{
          padding: 16,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#c8d9f0",
          backgroundColor: "#f2f7ff",
          gap: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "900" }}>
          Mindset for success 🌱
        </Text>
        <Text style={{ color: "#334", fontSize: 16 }}>
          Be honest with yourself. You’re your own boss.
        </Text>
        <Text style={{ color: "#334", fontSize: 16 }}>
          Small wins count. Consistency beats intensity.
        </Text>
        <Text style={{ color: "#334", fontSize: 16 }}>
          If you miss a task: no shame — reset and continue.
        </Text>
      </View>

      <View
        style={{
          padding: 16,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#cde6d3",
          backgroundColor: "#f3fbf5",
          gap: 8,
        }}
      >
        <Text style={{ fontWeight: "900", fontSize: 16 }}>Pro tip 🚀</Text>
        <Text style={{ color: "#234", fontSize: 16 }}>
          Start with 1–2 areas. Once the rhythm is easy, add more.
        </Text>
      </View>
    </ScrollView>
  );
}
