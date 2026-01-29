import { router } from "expo-router";
import React, { useMemo } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import AppHeader from "../../src/components/AppHeader";
import { CATEGORIES, plansByCategory } from "../../src/data/selfImprovementPlans.v1";

export default function ExploreScreen() {
  const safeCategories = useMemo(
    () => (Array.isArray(CATEGORIES) ? CATEGORIES : []),
    []
  );

  const getCardStyle = (cat: string) => {
    if (cat === "Mental Well-Being") {
      return { bg: "#fff3ee", border: "#f2c6b6" };
    }
    if (cat === "Physical Well-Being") {
      return { bg: "#f2f7ff", border: "#c8d9f0" };
    }
    if (cat === "Spiritual Well-Being") {
      return { bg: "#f3fbf5", border: "#cde6d3" };
    }
    return { bg: "#f7f7f7", border: "#ddd" };
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 14 }}>
      <AppHeader />

      <Text style={{ fontSize: 22, fontWeight: "900" }}>Categories</Text>

      <View style={{ gap: 12 }}>
        {safeCategories.map((cat) => {
          const colors = getCardStyle(cat);

          return (
            <React.Fragment key={cat}>
              <Pressable
                onPress={() =>
                  router.push({
                    pathname: "/(tabs)/plans",
                    params: { category: cat },
                  })
                }
                style={{
                  padding: 16,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: colors.border,
                  backgroundColor: colors.bg,
                  gap: 6,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "900" }}>{cat}</Text>
                <Text style={{ color: "#444" }}>
                  {plansByCategory(cat).length} areas
                </Text>
                <Text style={{ fontWeight: "900" }}>Explore →</Text>
              </Pressable>

              {/* Build your own */}
              {cat === "Spiritual Well-Being" && (
                <Pressable
                  onPress={() => router.push("/build")}
                  style={{
                    padding: 16,
                    borderRadius: 20,
                    borderWidth: 2,
                    borderColor: "#e7b8a5",
                    backgroundColor: "#fff7f2",
                    gap: 6,
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "900" }}>
                    Build your own ✍️
                  </Text>
                  <Text style={{ color: "#444" }}>
                    Create your own area and write daily tasks (up to 5).
                  </Text>
                  <Text style={{ fontWeight: "900" }}>Start →</Text>
                </Pressable>
              )}
            </React.Fragment>
          );
        })}
      </View>
    </ScrollView>
  );
}
