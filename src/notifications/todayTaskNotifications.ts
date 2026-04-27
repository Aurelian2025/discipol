import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

const NOTIFICATIONS_ENABLED_KEY = "todayTaskNotificationsEnabled";
const CHANNEL_ID = "today-tasks";

export const TODAY_TASK_REMINDER_TIMES = [
  { taskIndex: 0, hour: 7, minute: 30 },
  { taskIndex: 1, hour: 11, minute: 0 },
  { taskIndex: 2, hour: 14, minute: 30 },
  { taskIndex: 3, hour: 17, minute: 30 },
  { taskIndex: 4, hour: 20, minute: 0 },
];

export async function getTodayTaskNotificationsEnabled() {
  const value = await AsyncStorage.getItem(NOTIFICATIONS_ENABLED_KEY);
  return value === "true";
}

export async function setTodayTaskNotificationsEnabled(enabled: boolean) {
  await AsyncStorage.setItem(
    NOTIFICATIONS_ENABLED_KEY,
    enabled ? "true" : "false"
  );

  if (!enabled) {
    await cancelTodayTaskNotifications();
  }
}

export async function setupTodayTaskNotifications() {
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync(CHANNEL_ID, {
      name: "Today Task Reminders",
      importance: Notifications.AndroidImportance.DEFAULT,
      sound: "default",
    });
  }

  const existingPermission = await Notifications.getPermissionsAsync();

  if (!existingPermission.granted) {
    const requestedPermission = await Notifications.requestPermissionsAsync();
    return requestedPermission.granted;
  }

  return true;
}

export async function cancelTodayTaskNotifications() {
  const scheduled = await Notifications.getAllScheduledNotificationsAsync();

  for (const item of scheduled) {
    if (item.content.data?.type === "today-task-reminder") {
      await Notifications.cancelScheduledNotificationAsync(item.identifier);
    }
  }
}

export async function scheduleTodayTaskNotifications() {
  const enabled = await getTodayTaskNotificationsEnabled();

  if (!enabled) {
    await cancelTodayTaskNotifications();
    return;
  }

  const granted = await setupTodayTaskNotifications();

  if (!granted) {
    await setTodayTaskNotificationsEnabled(false);
    return;
  }

  await cancelTodayTaskNotifications();

  for (const reminder of TODAY_TASK_REMINDER_TIMES) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: `Task ${reminder.taskIndex + 1} reminder`,
        body: "Open Summary to review today's task.",
        sound: "default",
        data: {
          type: "today-task-reminder",
          taskIndex: reminder.taskIndex,
        },
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DAILY,
        hour: reminder.hour,
        minute: reminder.minute,
        channelId: CHANNEL_ID,
      },
    });
  }
}
