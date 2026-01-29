import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS } from "./storageKeys";
import type { ActivePlanState, DayState } from "./types";

/**
 * Calendar date key used to enforce:
 * - one "plan day" per real calendar day
 * - no skipping ahead
 */
export const todayKey = () => {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

export async function loadActivePlans(): Promise<ActivePlanState[]> {
  const raw = await AsyncStorage.getItem(STORAGE_KEYS.ACTIVE_PLANS);
  return raw ? (JSON.parse(raw) as ActivePlanState[]) : [];
}

export async function saveActivePlans(plans: ActivePlanState[]): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEYS.ACTIVE_PLANS, JSON.stringify(plans));
}

/**
 * Your rules:
 * - User works on one day at a time
 * - Cannot move forward until day is complete
 * - Cannot do multiple days in the same calendar day
 * - If day incomplete, it stays same day even tomorrow
 * - If day complete and a new calendar day begins, next day unlocks automatically
 */
export function rolloverPlan(plan: ActivePlanState): ActivePlanState {
  if (plan.isCompleted) return plan;

  const today = todayKey();
  const dayState = plan.days?.[plan.currentDay];
  const isDayComplete = !!dayState?.completedAt;
  const isNewCalendarDay = today !== plan.dayActivatedOn;

  // If not complete, stay on same day forever (even across calendar days)
  if (!isDayComplete) {
    return { ...plan, dayActivatedOn: today };
  }

  // If complete but still same calendar day, do NOT advance early
  if (!isNewCalendarDay) return plan;

  // If complete and it is a new calendar day, advance
  const nextDay = plan.currentDay + 1;
  if (nextDay > 30) return { ...plan, isCompleted: true };

  return {
    ...plan,
    currentDay: nextDay,
    dayActivatedOn: today,
  };
}

/**
 * ✅ Toggle a task checkbox and attach a 1-sentence note when checking ON.
 *
 * Behavior:
 * - Checking ON: stores note if provided (trimmed)
 * - Unchecking: removes the note for that task
 * - Day completion: sets completedAt when all tasks are checked
 */
export function toggleTask(
  plan: ActivePlanState,
  day: number,
  taskIndex: number,
  totalTasksForDay: number,
  noteIfCheckingOn?: string
): ActivePlanState {
  const existing = plan.days?.[day];

  const base: DayState = existing ?? {
    day,
    tasksChecked: Array(totalTasksForDay).fill(false),
    notesByTaskIndex: {},
  };

  // Ensure tasksChecked exists and has correct length
  const tasksChecked = (base.tasksChecked ?? []).slice();
  while (tasksChecked.length < totalTasksForDay) tasksChecked.push(false);
  tasksChecked.length = totalTasksForDay;

  const wasChecked = !!tasksChecked[taskIndex];
  const nextChecked = !wasChecked;
  tasksChecked[taskIndex] = nextChecked;

  // Notes map
  const notes: Record<number, string> = { ...(base.notesByTaskIndex ?? {}) };

  if (nextChecked) {
    const clean = (noteIfCheckingOn ?? "").trim();
    if (clean) notes[taskIndex] = clean;
  } else {
    delete notes[taskIndex];
  }

  const allDone =
    tasksChecked.length === totalTasksForDay && tasksChecked.every(Boolean);

  const updatedDay: DayState = {
    ...base,
    tasksChecked,
    notesByTaskIndex: notes,
    completedAt: allDone
      ? base.completedAt ?? new Date().toISOString()
      : undefined,
  };

  return {
    ...plan,
    days: {
      ...plan.days,
      [day]: updatedDay,
    },
  };
}

/**
 * ✅ Add/edit/delete a note without toggling the checkbox.
 * Useful when the user taps a checked task to edit their sentence.
 */
export function upsertTaskNote(
  plan: ActivePlanState,
  day: number,
  taskIndex: number,
  note: string
): ActivePlanState {
  const existing = plan.days?.[day];
  if (!existing) return plan;

  const notes: Record<number, string> = {
    ...(existing.notesByTaskIndex ?? {}),
  };

  const clean = note.trim();
  if (!clean) delete notes[taskIndex];
  else notes[taskIndex] = clean;

  const updatedDay: DayState = {
    ...existing,
    notesByTaskIndex: notes,
  };

  return {
    ...plan,
    days: {
      ...plan.days,
      [day]: updatedDay,
    },
  };
}
