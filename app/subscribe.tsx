// app/subscribe.tsx
//
// ✅ PayPal flow (pay first → then signup/signin to activate Pro)
// - Starts PayPal checkout via Supabase Edge Function
// - After payment, user must create an account with the same email to activate Pro
// - Pro entitlement is checked from Supabase (see src/subscription/subscription.ts)
// - Admin unlock remains independent elsewhere (Today screen uses adminUnlocked override)

import { router } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import {
  Alert,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

import { getIsPro } from "../src/subscription/subscription";
import { getCurrentUser } from "../src/supabase/auth";
import { supabase } from "../src/supabase/client";

type CreateCheckoutResponse = {
  approval_url?: string;
  checkout_id?: string;
  error?: string;
};

function isValidEmail(email: string) {
  const e = (email ?? "").trim();
  // simple practical check
  return e.includes("@") && e.includes(".");
}

export default function SubscribeScreen() {
  const [isPro, setPro] = useState(false);
  const [busy, setBusy] = useState(false);

  // For pay-then-signup flow we ask for email if not logged in.
  const [email, setEmail] = useState("");
  const [prefilledEmail, setPrefilledEmail] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setPro(await getIsPro());

        // Prefill email if user is already logged in
        const { data } = await getCurrentUser();
        const userEmail = data?.user?.email ?? null;

        if (userEmail) {
          setEmail(userEmail);
          setPrefilledEmail(userEmail);
        }
      } catch (e) {
        console.warn("subscribe init error", e);
      }
    })();
  }, []);

  const subscribeLabel = useMemo(() => {
    if (busy) return "Please wait…";
    return "Subscribe with PayPal";
  }, [busy]);

  async function openSignupPrompt(afterMessage?: string) {
    Alert.alert(
      "Create account to activate Pro",
      afterMessage ||
        "After paying with PayPal, create an account using the same email to activate Pro.",
      [
        { text: "Create account", onPress: () => router.push("/signup") },
        { text: "Sign in", onPress: () => router.push("/login") },
        { text: "Cancel", style: "cancel" },
      ]
    );
  }

  async function startPaypalCheckout() {
    if (busy) return;

    const trimmedEmail = email.trim().toLowerCase();

    if (!isValidEmail(trimmedEmail)) {
      Alert.alert("Email required", "Please enter a valid email for PayPal checkout.");
      return;
    }

    // Web safety (you can remove this later if you support web checkout)
    if (Platform.OS === "web") {
      Alert.alert(
        "Not available on web",
        "Subscriptions are only available in the mobile app."
      );
      return;
    }

    setBusy(true);

    try {
      // Call Supabase Edge Function
      // Function name: paypal-create-subscription
      // Expected response: { approval_url, checkout_id }
      const { data, error } = await supabase.functions.invoke<CreateCheckoutResponse>(
        "paypal-create-subscription",
        {
          body: {
            email: trimmedEmail,
            // optional: app identifiers / deep links can be configured server-side too
          },
        }
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

      const canOpen = await Linking.canOpenURL(data.approval_url);
      if (!canOpen) {
        Alert.alert("Error", "Could not open PayPal checkout link.");
        return;
      }

      await Linking.openURL(data.approval_url);

      // After the user finishes in PayPal, they will come back to the app manually.
      // We guide them to create an account / sign in to activate Pro.
      // (If you later add deep-link return handling, we can auto-navigate.)
      await openSignupPrompt(
        "After finishing payment in PayPal, come back here and create an account (same email) to activate Pro."
      );
    } catch (e: any) {
      console.warn("startPaypalCheckout error", e);
      Alert.alert("Error", e?.message || "Could not start checkout.");
    } finally {
      setBusy(false);
    }
  }

  async function refreshStatus() {
    try {
      const pro = await getIsPro();
      setPro(pro);

      if (pro) {
        Alert.alert("Pro active ✅", "Your Pro access is now active.");
        router.back();
      } else {
        Alert.alert(
          "Not active yet",
          "If you paid, please sign up / sign in with the same email you used for PayPal, then tap Refresh."
        );
      }
    } catch (e) {
      console.warn("refreshStatus error", e);
      Alert.alert("Error", "Could not refresh status.");
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

        <View style={{ gap: 8, marginTop: 6 }}>
          <Text style={{ fontWeight: "800" }}>Email for Pro activation</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="you@example.com"
            autoCapitalize="none"
            keyboardType="email-address"
            editable={!busy && !prefilledEmail} // if logged in, don't let them mismatch
            style={{
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 12,
              padding: 12,
              backgroundColor: "white",
              opacity: !busy && !prefilledEmail ? 1 : 0.7,
            }}
          />
          <Text style={{ color: "#666", fontSize: 12 }}>
            Use the same email when you create your Discipol account after paying.
          </Text>
        </View>

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

        <Pressable
          onPress={refreshStatus}
          disabled={busy}
          style={{
            paddingVertical: 10,
            borderRadius: 12,
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#999",
            opacity: busy ? 0.6 : 1,
          }}
        >
          <Text style={{ fontWeight: "900" }}>Refresh status</Text>
        </Pressable>

        {isPro && <Text style={{ fontWeight: "900" }}>Pro is active ✅</Text>}

        <Pressable
          onPress={() => openSignupPrompt()}
          style={{ alignSelf: "flex-start", marginTop: 4 }}
        >
          <Text style={{ color: "#1E88E5", fontWeight: "800" }}>
            Create account / Sign in
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
