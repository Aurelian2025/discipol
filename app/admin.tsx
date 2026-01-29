import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Alert, Pressable, ScrollView, Text, TextInput, View } from "react-native";

// ✅ Must match Today screen
const ADMIN_KEY_STORAGE = "discipol.admin.unlocked";
const ADMIN_PASSWORD = "Lucas2";

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

      <Text style={{ color: "#666" }}>
        Key is: Lucas2
      </Text>
    </ScrollView>
  );
}
