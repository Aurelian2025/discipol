// app/subscribe.tsx
//
// PayPal flow (pay first → then signup to activate Pro)
// - Only a "Subscribe with PayPal" button
// - No email field, no Pro status, no Create/Sign in, no Refresh status
// - After successful PayPal checkout, redirect to signup

import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

import { supabase } from "../src/supabase/client";

type CreateCheckoutResponse = {
  approval_url?: string;
  checkout_id?: string;
  error?: string;
};

export default function SubscribeScreen() {
  const [busy, setBusy] = useState(false);

  const subscribeLabel = busy ? "Please wait…" : "Subscribe with PayPal";

  async function startPaypalCheckout() {
    if (busy) return;
    setBusy(true);

    try {
      // Call Supabase Edge Function (no email/body)
      const { data, error } = await supabase.functions.invoke<CreateCheckoutResponse>(
        "paypal-create-subscription"
      );

      if (error) {
        console.warn("paypal-create-subscription invoke error", error);
        Alert.alert("Error", "Could not start PayPal checkout. Please try again.");
        return;
      }

      if (!data?.approval_url) {
        console.warn("paypal-create-subscription bad response", data);
        Alert.alert(
          "Error",
          data?.error || "Missing approval URL from PayPal."
        );
        return;
      }

      // On web, redirect directly to the PayPal approval URL
      if (Platform.OS === "web") {
        if (typeof window !== "undefined") {
          window.location.href = data.approval_url;
        }
        // Set PayPal return url (in PayPal dashboard) to /signup so user lands at signup after payment.
        return;
      }

      // On native, open via system browser / deep link
      const canOpen = await Linking.canOpenURL(data.approval_url);
      if (!canOpen) {
        Alert.alert("Error", "Could not open PayPal checkout link.");
        return;
      }

      await Linking.openURL(data.approval_url);

      // After PayPal, direct the user to Sign Up screen (user returns manually)
      router.push("/signup");
    } catch (e: any) {
      console.warn("startPaypalCheckout error", e);
      Alert.alert("Error", e?.message || "Could not start checkout.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 14 }}>
      <Text style={{ fontSize: 26, fontWeight: "900" }}>Discipol Pro ⭐</Text>

      <View
        style={{
          padding: 16,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: "#ddd",
          backgroundColor: "white",
          gap: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "900" }}>Unlock Pro</Text>

        <Text style={{ color: "#444", fontSize: 16 }}>
          • Unlimited active areas{"\n"}
          • Build your own custom plans{"\n"}
          • Work on multiple habits at once
        </Text>

        <Text style={{ color: "#444", fontSize: 16 }}>
          Subscription billed monthly via PayPal. Cancel anytime.
        </Text>

        <Pressable
          onPress={startPaypalCheckout}
          disabled={busy}
          style={{
            paddingVertical: 12,
            borderRadius: 12,
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#111",
            opacity: busy ? 0.6 : 1,
            marginTop: 6,
          }}
        >
          <Text style={{ fontWeight: "900", fontSize: 16 }}>
            {subscribeLabel}
          </Text>
        </Pressable>
      </View>

      <Pressable
        onPress={() => router.push("/legal/subscription")}
        style={{ alignSelf: "flex-start" }}
      >
        <Text style={{ color: "#1E88E5", fontWeight: "800" }}>
          Subscription Information
        </Text>
      </Pressable>
    </ScrollView>
  );
}
