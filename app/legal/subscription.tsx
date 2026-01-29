import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function SubscriptionInfoScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 14 }}>
      <Text style={{ fontSize: 26, fontWeight: "900" }}>
        Subscription Information
      </Text>

      <View
        style={{
          padding: 16,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: "#ddd",
          backgroundColor: "white",
          gap: 12,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "900" }}>Free Version</Text>
        <Text style={{ fontSize: 16, lineHeight: 22, color: "#111" }}>
          With the free version of Discipol, you can try each category and any areas for the first
          2 days. You can explore the app, complete the tasks, and see how the
          system works. Access beyond Day 2 requires a subscription. Enjoy!
        </Text>

        <Text style={{ fontSize: 18, fontWeight: "900" }}>
          Premium Subscription
        </Text>
        <Text style={{ fontSize: 16, lineHeight: 22, color: "#111" }}>
          A monthly subscription unlocks full access to all 30 days of every
          area, “Build your own” custom plans, multiple active areas at the same
          time, and future advanced features.
        </Text>

        <Text style={{ fontSize: 18, fontWeight: "900" }}>Billing Details</Text>
        <Text style={{ fontSize: 16, lineHeight: 22, color: "#111" }}>
          • Payment is charged to your Google Play account{"\n"}
          • Subscription automatically renews unless canceled{"\n"}
          • You can cancel anytime in Google Play settings{"\n"}
          • No commitment — cancel when you choose
        </Text>

        <Text style={{ fontSize: 18, fontWeight: "900" }}>
          Restore Purchases
        </Text>
        <Text style={{ fontSize: 16, lineHeight: 22, color: "#111" }}>
          If you reinstall the app or change devices, your active subscription
          will be automatically restored using your Google Play account.
        </Text>
      </View>
    </ScrollView>
  );
}
