import React from "react";
import { ScrollView, Text, View } from "react-native";

function formatDate(d: Date) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export default function PrivacyPolicyScreen() {
  const lastUpdated = formatDate(new Date());

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 14 }}>
      <Text style={{ fontSize: 26, fontWeight: "900" }}>Privacy Policy</Text>
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
          Discipol respects your privacy. This Privacy Policy explains how your information is handled when you use the
          Discipol mobile application.
        </Text>

        <Text style={{ fontSize: 18, fontWeight: "900" }}>Information We Collect</Text>
        <Text style={{ fontSize: 16, lineHeight: 22, color: "#111" }}>
          Discipol does not collect, store, or transmit personal data to external servers.
        </Text>
        <Text style={{ fontSize: 16, lineHeight: 22, color: "#111" }}>
          All information you enter in the app — including selected areas of improvement, daily tasks, custom plans, and
          progress/completion status — is stored locally on your device only.
        </Text>

        <Text style={{ fontSize: 18, fontWeight: "900" }}>Subscription Information</Text>
        <Text style={{ fontSize: 16, lineHeight: 22, color: "#111" }}>
          Subscriptions are handled securely by Google Play Billing. Discipol does not receive or store your payment
          details. Google may collect information required to process subscriptions according to their own policies.
        </Text>

        <Text style={{ fontSize: 18, fontWeight: "900" }}>Data Sharing</Text>
        <Text style={{ fontSize: 16, lineHeight: 22, color: "#111" }}>
          Discipol does not sell, share, or transfer your personal data to third parties.
        </Text>

        <Text style={{ fontSize: 18, fontWeight: "900" }}>Data Security</Text>
        <Text style={{ fontSize: 16, lineHeight: 22, color: "#111" }}>
          All data remains on your device. If you uninstall the app, your data is removed.
        </Text>

        <Text style={{ fontSize: 18, fontWeight: "900" }}>Children’s Privacy</Text>
        <Text style={{ fontSize: 16, lineHeight: 22, color: "#111" }}>
          Discipol is not intended for children under the age of 13.
        </Text>

        <Text style={{ fontSize: 18, fontWeight: "900" }}>Changes to This Policy</Text>
        <Text style={{ fontSize: 16, lineHeight: 22, color: "#111" }}>
          This policy may be updated in the future. Updates will be reflected inside the app.
        </Text>

        <Text style={{ fontSize: 18, fontWeight: "900" }}>Contact</Text>
        <Text style={{ fontSize: 16, lineHeight: 22, color: "#111" }}>
          If you have questions about this Privacy Policy, contact:{"\n"}
          support@discipol.app
        </Text>
      </View>
    </ScrollView>
  );
}
