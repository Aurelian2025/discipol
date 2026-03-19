// app/paypal-return.tsx
// Handles the deep link after a user completes (or cancels) PayPal checkout.
// PayPal redirects to discipol://paypal-return?subscription_id=...&ba_token=...&token=...
// The user is then prompted to create an account or sign in to activate Pro.

import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { ScrollView, Text, View, Pressable } from "react-native";

export default function PayPalReturnScreen() {
  const params = useLocalSearchParams<{
    subscription_id?: string;
    ba_token?: string;
    token?: string;
  }>();

  const subscriptionId =
    params.subscription_id ?? params.ba_token ?? params.token ?? null;

  useEffect(() => {
    if (!subscriptionId) return;
    // Nothing to do server-side here; the webhook will activate the entitlement.
    // We just need the user to create an account / sign in with the same email.
  }, [subscriptionId]);

  function goSignup() {
    router.replace("/signup");
  }

  function goLogin() {
    router.replace("/login");
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
      <Text style={{ fontSize: 26, fontWeight: "900" }}>Payment received 🎉</Text>

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
        <Text style={{ fontSize: 16, color: "#333", lineHeight: 24 }}>
          Thank you! Your PayPal payment is being processed.
        </Text>

        <Text style={{ fontSize: 16, color: "#333", lineHeight: 24 }}>
          To activate Pro, please create an account (or sign in) using the{" "}
          <Text style={{ fontWeight: "900" }}>same email</Text> you used with
          PayPal.
        </Text>

        <Pressable
          onPress={goSignup}
          style={{
            paddingVertical: 12,
            borderRadius: 12,
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#111",
          }}
        >
          <Text style={{ fontWeight: "900", fontSize: 16 }}>
            Create account
          </Text>
        </Pressable>

        <Pressable
          onPress={goLogin}
          style={{ alignSelf: "center" }}
        >
          <Text style={{ color: "#1E88E5", fontWeight: "800" }}>
            Already have an account? Sign in
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
