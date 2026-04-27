import React from "react";
import { Modal, Pressable, Text, View } from "react-native";

type Props = {
  visible: boolean;
  taskTitle: string;
  taskText: string;
  onClose: () => void;
  onTurnOff: () => void;
};

export default function TodayTaskReminderPopup({
  visible,
  taskTitle,
  taskText,
  onClose,
  onTurnOff,
}: Props) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.35)",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <View
          style={{
            width: "100%",
            maxWidth: 420,
            borderRadius: 20,
            backgroundColor: "white",
            padding: 18,
            gap: 12,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "900" }}>
            {taskTitle}
          </Text>

          <Text style={{ fontSize: 16, color: "#333" }}>{taskText}</Text>

          <Pressable
            onPress={onClose}
            style={{
              paddingVertical: 12,
              borderRadius: 14,
              backgroundColor: "#111",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "900" }}>Close</Text>
          </Pressable>

          <Pressable
            onPress={onTurnOff}
            style={{
              paddingVertical: 12,
              borderRadius: 14,
              borderWidth: 1,
              borderColor: "#ddd",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <Text style={{ fontWeight: "900" }}>Turn off notifications</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
