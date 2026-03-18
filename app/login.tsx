import React, { useState } from "react";
import { router } from "expo-router";
import { Alert, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { signInWithPassword } from "../src/supabase/auth";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSignIn() {
    if (busy) return;

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !password) {
      Alert.alert("Missing info", "Please enter email and password.");
      return;
    }

    setBusy(true);
    try {
      const { error } = await signInWithPassword(trimmedEmail, password);

      if (error) {
        Alert.alert("Sign in failed", error.message);
        return;
      }

      // Home screen (instructions)
      router.replace("/(tabs)");
    } catch (e: any) {
      Alert.alert("Sign in failed", e?.message || "Unknown error");
    } finally {
      setBusy(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 26, fontWeight: "900" }}>Sign in</Text>

      <View style={{ gap: 10 }}>
        <Text style={{ fontWeight: "800" }}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="you@example.com"
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 12,
            padding: 12,
            backgroundColor: "white",
          }}
        />

        <Text style={{ fontWeight: "800" }}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="••••••••"
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 12,
            padding: 12,
            backgroundColor: "white",
          }}
        />
      </View>

      <Pressable
        onPress={onSignIn}
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
          {busy ? "Please wait…" : "Sign in"}
        </Text>
      </Pressable>

      <Pressable onPress={() => router.push("/signup")} style={{ alignSelf: "flex-start" }}>
        <Text style={{ color: "#1E88E5", fontWeight: "800" }}>
          New here? Create account
        </Text>
      </Pressable>
    </ScrollView>
  );
}
