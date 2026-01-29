import React from "react";
import { Image, Text, View } from "react-native";

type Props = {
  // Optional: show the “How it works …” line under the header (Home page uses this)
  belowHeaderText?: string;
};

export default function AppHeader({ belowHeaderText }: Props) {
  return (
    <View style={{ gap: 10 }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginBottom: 4,
        }}
      >
        <Image
          source={require("../../assets/images/discipol-logo.png")}
          style={{ width: 34, height: 34, borderRadius: 8 }}
          resizeMode="contain"
        />

        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 28, fontWeight: "900" }}>Discipol</Text>

          {/* Subtitle: slightly smaller + forced single line */}
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              fontSize: 16, // was 18
              fontWeight: "900",
              color: "#D32F2F",
              marginTop: 2,
            }}
          >
            Build New Habits in 30 days
          </Text>
        </View>
      </View>

      {/* Optional line under header */}
      {belowHeaderText ? (
        <Text style={{ color: "#444" }}>{belowHeaderText}</Text>
      ) : null}
    </View>
  );
}
