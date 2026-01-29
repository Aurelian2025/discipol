import React from "react";
import { ScrollView, Text, View } from "react-native";

function formatDate(d: Date) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export default function TermsOfServiceScreen() {
  const lastUpdated = formatDate(new Date());

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 14 }}>
      <Text style={{ fontSize: 26, fontWeight: "900" }}>Terms of Service</Text>
      <Text style={{ color: "#444" }}>Last updated: {lastUpdated}</Text>

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
        <Text style={{ fontSize: 16, lineHeight: 22, color: "#111" }}>
          By using Discipol, you agree to the following terms.
        </Text>

        <Text style={{ fontSize: 18, fontWeight: "900" }}>Use of the App</Text>
        <Text style={{ fontSize: 16, lineHeight: 22, color: "#111" }}>
          Discipol is a self-improvement and habit-building application designed to help users build positive routines
          through daily tasks.
        </Text>

        <Text style={{ fontSize: 18, fontWeight: "900" }}>No Professional Advice</Text>
        <Text style={{ fontSize: 16, lineHeight: 22, color: "#111" }}>
          Discipol does not provide medical advice, mental health treatment, professional counseling, or financial/legal
          advice. You use the app at your own discretion.
        </Text>

        <Text style={{ fontSize: 18, fontWeight: "900" }}>User Responsibility</Text>
        <Text style={{ fontSize: 16, lineHeight: 22, color: "#111" }}>
          You are responsible for the tasks you create, how you interpret the content, and your own health, safety, and
          decisions. Discipol encourages honesty and self-awareness but cannot guarantee outcomes.
        </Text>

        <Text style={{ fontSize: 18, fontWeight: "900" }}>Subscriptions</Text>
        <Text style={{ fontSize: 16, lineHeight: 22, color: "#111" }}>
          Some features require a paid subscription.
          {"\n\n"}
          Subscriptions are billed monthly through Google Play, automatically renew unless canceled, and can be canceled at
          any time through your Google Play account settings.
          {"\n\n"}
          No refunds are provided for unused subscription periods, except where required by law.
        </Text>

        <Text style={{ fontSize: 18, fontWeight: "900" }}>Availability</Text>
        <Text style={{ fontSize: 16, lineHeight: 22, color: "#111" }}>
          Discipol may change or discontinue features at any time without notice.
        </Text>

        <Text style={{ fontSize: 18, fontWeight: "900" }}>Limitation of Liability</Text>
        <Text style={{ fontSize: 16, lineHeight: 22, color: "#111" }}>
          Discipol is provided “as is” without warranties of any kind. To the maximum extent permitted by law, Discipol is
          not liable for any damages resulting from the use of the app.
        </Text>
      </View>
    </ScrollView>
  );
}
