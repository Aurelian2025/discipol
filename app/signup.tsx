import React, { useState } from "react";
import { router } from "expo-router";
import { Alert, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { signUp } from "../src/supabase/auth";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  async function onCreateAccount() {
    if (busy) return;

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !password) {
      Alert.alert("Missing info", "Please enter email and password.");
      return;
    }

    setBusy(true);
    try {
      const { error } = await signUp(trimmedEmail, password);

      if (error) {
        Alert.alert("Sign up failed", error.message);
        return;
      }

      Alert.alert("Account created", "Please sign in to continue.", [
        { text: "OK", onPress: () => router.replace("/login") },
      ]);
    } catch (e: any) {
      Alert.alert("Sign up failed", e?.message || "Unknown error");
    } finally {
      setBusy(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 26, fontWeight: "900" }}>Create account</Text>

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
        onPress={onCreateAccount}
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
          {busy ? "Please wait…" : "Create account"}
        </Text>
      </Pressable>

      <Pressable onPress={() => router.replace("/login")} style={{ alignSelf: "flex-start" }}>
        <Text style={{ color: "#1E88E5", fontWeight: "800" }}>
          Already have an account? Sign in
        </Text>
      </Pressable>
    </ScrollView>
  );
}
