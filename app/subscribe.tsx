// app/subscribe.tsx
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";

import Purchases from "react-native-purchases";

import {
  getIsPro,
  purchaseProMonthly,
  restoreProFromGooglePlay,
} from "../src/subscription/subscription";
import { getCurrentUser } from "../src/supabase/auth";

export default function SubscribeScreen() {
  const [isPro, setPro] = useState(false);
  const [busy, setBusy] = useState(false);
  const [priceText, setPriceText] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        setPro(await getIsPro());

        const restored = await restoreProFromGooglePlay();
        setPro(restored);

        // 🔑 Correct way: use offerings.current.monthly
        const offerings = await Purchases.getOfferings();
        const monthlyPkg = offerings.current?.monthly;

        if (monthlyPkg) {
          setPriceText(monthlyPkg.product.priceString);
        }
      } catch (e) {
        console.warn("init error", e);
      }
    })();
  }, []);

  async function onSubscribe() {
    if (busy) return;

    // ✅ Require account creation before subscribing
    try {
      const { data, error } = await getCurrentUser();
      if (error) {
        console.warn("getCurrentUser error", error);
      }

      if (!data?.user) {
        Alert.alert(
          "Account needed",
          "After paying with PayPal, you must create an account (same email) to activate Pro.",
          [
            { text: "Create account", onPress: () => router.push("/signup") },
            { text: "Cancel", style: "cancel" },
          ]
        );
        return;
      }
    } catch (e) {
      console.warn("getCurrentUser unexpected error", e);
      Alert.alert("Error", "Could not check account status. Please try again.");
      return;
    }

    setBusy(true);

    try {
      await purchaseProMonthly();

      const pro = await getIsPro();
      setPro(pro);

      if (pro) {
        Alert.alert("Success 🎉", "Pro unlocked!");
        router.back();
      } else {
        Alert.alert(
          "Purchase incomplete",
          "Purchase finished but Pro was not unlocked."
        );
      }
    } catch (e: any) {
      console.warn("purchase error", e);
      Alert.alert("Purchase error", e?.message || "Purchase failed");
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
          Subscription billed monthly via Google Play. Cancel anytime.
        </Text>

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
            {busy
              ? "Please wait…"
              : priceText
              ? `Subscribe — ${priceText} / month`
              : "Subscribe"}
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
