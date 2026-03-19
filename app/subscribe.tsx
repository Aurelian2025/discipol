// app/subscribe.tsx
import { router } from "expo-router";
import { useEffect, useState } from "react";
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
import { getIsPro } from "../src/subscription/subscription";

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? "";

export default function SubscribeScreen() {
  const [isPro, setPro] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setPro(await getIsPro());
      } catch (e) {
        console.warn("init error", e);
      }
    })();
  }, []);

  async function onSubscribe() {
    if (busy) return;

    if (Platform.OS === "web") {
      Alert.alert(
        "Not available on web",
        "Subscriptions are only available in the mobile app."
      );
      return;
    }

    setBusy(true);

    try {
      // Get current user session (if any) to pass email to PayPal
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const email = user?.email;

      // Call Supabase Edge Function to create a PayPal subscription
      const res = await fetch(
        `${SUPABASE_URL}/functions/v1/paypal-create-subscription`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            return_url: "discipol://paypal-return",
            cancel_url: "discipol://paypal-cancel",
            ...(email ? { email } : {}),
          }),
        }
      );

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: res.statusText }));
        throw new Error(err.error ?? "Failed to start checkout");
      }

      const { approval_url } = await res.json();

      if (!approval_url) {
        throw new Error("No approval URL returned");
      }

      // Open PayPal checkout in the device browser
      await Linking.openURL(approval_url);

      // After the browser opens, inform the user of next steps
      if (email) {
        // User is already signed in — just let them know Pro will activate
        Alert.alert(
          "PayPal checkout opened",
          "After completing payment, Pro will be activated on your account automatically.",
          [{ text: "OK", style: "default" }]
        );
      } else {
        // User is not signed in — they need to create an account with the same email
        Alert.alert(
          "PayPal checkout opened",
          "After completing payment, create an account using the same email you used with PayPal to activate Pro.",
          [
            {
              text: "Create account",
              onPress: () => router.push("/signup"),
            },
            { text: "I already have an account", onPress: () => router.push("/login") },
            { text: "Later", style: "cancel" },
          ]
        );
      }
    } catch (e: any) {
      console.warn("subscribe error", e);
      Alert.alert("Checkout error", e?.message || "Could not start checkout");
    } finally {
      setBusy(false);
    }
  }

  const subscribeLabel = busy ? "Please wait…" : "Subscribe";

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

        {Platform.OS === "web" ? (
          <Text style={{ color: "#444", fontSize: 14 }}>
            Subscriptions are only available in the mobile app.
          </Text>
        ) : null}

        <Pressable
          onPress={onSubscribe}
          disabled={busy}
          style={{
            paddingVertical: 12,
            borderRadius: 12,
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#111",
            opacity: busy ? 0.6 : 1,
          }}
        >
          <Text style={{ fontWeight: "900", fontSize: 16 }}>
            {subscribeLabel}
          </Text>
        </Pressable>

        {isPro && <Text style={{ fontWeight: "900" }}>Pro is active ✅</Text>}
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
