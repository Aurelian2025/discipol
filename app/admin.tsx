import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Alert, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { signOut } from "../src/supabase/auth";

// ✅ Must match Today screen
const ADMIN_KEY_STORAGE = "discipol.admin.unlocked";
const ADMIN_PASSWORD = "Lucas2";

// Pro key used by legacy AsyncStorage (belt-and-suspenders clear on logout)
const IS_PRO_KEY = "discipol.isPro";

export default function AdminScreen() {
  const [value, setValue] = useState("");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    (async () => {
      const cur = await AsyncStorage.getItem(ADMIN_KEY_STORAGE);
      setEnabled(cur === "true");
    })();
  }, []);

  async function enable() {
    if (value.trim() !== ADMIN_PASSWORD) {
      Alert.alert("Wrong key", "Key is incorrect.");
      return;
    }

    await AsyncStorage.setItem(ADMIN_KEY_STORAGE, "true");
    setEnabled(true);
    setValue("");
    Alert.alert("Admin enabled ✅", "Admin mode is now ON.");
  }

  async function disable() {
    await AsyncStorage.removeItem(ADMIN_KEY_STORAGE);
    setEnabled(false);
    Alert.alert("Admin disabled", "Admin mode is now OFF.");
  }

  async function logout() {
    // Clear admin unlock so it doesn't stay active after signing out
    await AsyncStorage.removeItem(ADMIN_KEY_STORAGE);
    // Clear any locally cached Pro flag
    await AsyncStorage.removeItem(IS_PRO_KEY);
    setEnabled(false);

    const { error } = await signOut();
    if (error) {
      console.warn("logout signOut error", error);
      Alert.alert("Logout error", error.message || "Could not sign out.");
    } else {
      Alert.alert("Session cleared", "Signed out and admin mode reset.");
    }
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 14 }}>
      <Text style={{ fontSize: 26, fontWeight: "900" }}>Admin</Text>

      <View
        style={{
          padding: 14,
          borderRadius: 14,
          borderWidth: 1,
          borderColor: "#ddd",
          backgroundColor: "white",
          gap: 10,
        }}
      >
        <Text style={{ fontWeight: "900" }}>
          Status: {enabled ? "ON ✅" : "OFF"}
        </Text>

        <Text style={{ color: "#444" }}>
          Enter your admin key to unlock testing tools (day jump + unlock).
        </Text>

        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder="Enter admin key"
          autoCapitalize="none"
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 12,
            padding: 12,
            fontSize: 16,
            backgroundColor: "white",
          }}
        />

        <View style={{ flexDirection: "row", gap: 10 }}>
          <Pressable
            onPress={enable}
            style={{
              paddingVertical: 12,
              paddingHorizontal: 14,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: "#111",
              flex: 1,
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "900" }}>Enable</Text>
          </Pressable>

          <Pressable
            onPress={disable}
            style={{
              paddingVertical: 12,
              paddingHorizontal: 14,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: "#999",
              flex: 1,
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "900" }}>Disable</Text>
          </Pressable>
        </View>
      </View>

      <View
        style={{
          padding: 14,
          borderRadius: 14,
          borderWidth: 1,
          borderColor: "#fcc",
          backgroundColor: "#fff8f8",
          gap: 10,
        }}
      >
        <Text style={{ fontWeight: "900" }}>Account</Text>

        <Text style={{ color: "#444" }}>
          Sign out of your Supabase account and reset admin + Pro state on this
          device.
        </Text>

        <Pressable
          onPress={logout}
          style={{
            paddingVertical: 12,
            paddingHorizontal: 14,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#c00",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "900", color: "#c00" }}>Logout</Text>
        </Pressable>
      </View>

      <Text style={{ color: "#666" }}>
        Key is: Lucas2
      </Text>
    </ScrollView>
  );
}
