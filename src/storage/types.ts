export type DayState = {
  day: number;
  tasksChecked: boolean[];
  completedAt?: string;

  // ✅ NEW: one-sentence reflection per task index
  notesByTaskIndex?: Record<number, string>;
};

export type ActivePlanState = {
  planId: string;
  startedAt: string;
  currentDay: number;
  dayActivatedOn: string; // YYYY-MM-DD
  days: Record<number, DayState>;
  isCompleted: boolean;
};
