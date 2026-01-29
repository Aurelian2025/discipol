import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS } from "./storageKeys";

export type CustomPlan = {
  id: string; // custom-xxxx
  title: string;
  category: "Build your own";
  createdAt: string; // ISO
  // day -> tasks text array (1..5)
  dayTasks: Record<number, string[]>;
};

export async function loadCustomPlans(): Promise<CustomPlan[]> {
  const raw = await AsyncStorage.getItem(STORAGE_KEYS.CUSTOM_PLANS);
  return raw ? (JSON.parse(raw) as CustomPlan[]) : [];
}

export async function saveCustomPlans(plans: CustomPlan[]) {
  await AsyncStorage.setItem(STORAGE_KEYS.CUSTOM_PLANS, JSON.stringify(plans));
}

export async function createCustomPlan(title: string): Promise<CustomPlan> {
  const plans = await loadCustomPlans();
  const id = `custom-${Math.random().toString(16).slice(2, 10)}`;
  const plan: CustomPlan = {
    id,
    title,
    category: "Build your own",
    createdAt: new Date().toISOString(),
    dayTasks: {},
  };
  await saveCustomPlans([plan, ...plans]);
  return plan;
}

export async function upsertCustomDayTasks(planId: string, day: number, tasks: string[]) {
  const plans = await loadCustomPlans();
  const idx = plans.findIndex((p) => p.id === planId);
  if (idx === -1) throw new Error("Custom plan not found");
  const updated = { ...plans[idx], dayTasks: { ...plans[idx].dayTasks, [day]: tasks } };
  const next = plans.slice();
  next[idx] = updated;
  await saveCustomPlans(next);
  return updated;
}
