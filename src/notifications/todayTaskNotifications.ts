import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

export async function setupTodayTaskNotifications() {
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("today-tasks", {
      name: "Today Task Reminders",
      importance: Notifications.AndroidImportance.DEFAULT,
    });
  }

  const existingPermission = await Notifications.getPermissionsAsync();

  if (!existingPermission.granted) {
    const requestedPermission = await Notifications.requestPermissionsAsync();
    return requestedPermission.granted;
  }

  return true;
}
