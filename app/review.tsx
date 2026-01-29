import * as Print from "expo-print";
import { router } from "expo-router";
import { shareAsync } from "expo-sharing";
import React, { useEffect, useMemo, useState } from "react";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";

import AppHeader from "../src/components/AppHeader";
import { planById } from "../src/data/selfImprovementPlans.v1";
import { loadActivePlans } from "../src/storage/activePlans";
import { loadCustomPlans, type CustomPlan } from "../src/storage/customPlans";
import type { ActivePlanState } from "../src/storage/types";

function escapeHtml(s: string) {
  return (s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function titleFor(planId: string, customMap: Record<string, CustomPlan>) {
  const built = planById(planId);
  if (built?.title) return built.title;
  const custom = customMap[planId];
  if (custom?.title) return custom.title;
  return planId;
}

function getTasksForDay(
  planId: string,
  day: number,
  customMap: Record<string, CustomPlan>
): string[] {
  const built = planById(planId);
  if (built) {
    const builtDay = built.days?.find((d) => d.day === day);
    return (builtDay?.tasks ?? []).map((t) => t.text);
  }
  const custom = customMap[planId];
  return custom?.dayTasks?.[day] ?? [];
}

function getAffirmationForDay(
  planId: string,
  day: number,
  customMap: Record<string, CustomPlan>
) {
  const built = planById(planId);
  if (built) {
    const builtDay = built.days?.find((d) => d.day === day);
    return builtDay?.affirmation ?? "";
  }
  return "Custom plan — your own tasks and notes.";
}

function noteForIndex(
  notesByTaskIndex: Record<number, string> | undefined,
  idx: number
) {
  if (!notesByTaskIndex) return "";
  const v = notesByTaskIndex[idx];
  return (v ?? "").trim();
}

function computeStats(plan: ActivePlanState, customMap: Record<string, CustomPlan>) {
  const maxDay = plan.isCompleted ? 30 : Math.min(30, plan.currentDay);

  let daysCompleted = 0;
  let tasksTotal = 0;
  let tasksDone = 0;
  let notesCount = 0;

  for (let day = 1; day <= maxDay; day++) {
    const tasks = getTasksForDay(plan.planId, day, customMap);
    const ds = plan.days?.[day];

    const checked = ds?.tasksChecked ?? [];
    const notesMap = ds?.notesByTaskIndex;

    if (ds?.completedAt) daysCompleted++;

    tasksTotal += tasks.length;
    tasksDone += checked.filter(Boolean).length;

    for (let i = 0; i < tasks.length; i++) {
      if (noteForIndex(notesMap, i)) notesCount++;
    }
  }

  return { maxDay, daysCompleted, tasksTotal, tasksDone, notesCount };
}

function buildAllPlansHtml(
  plans: ActivePlanState[],
  customMap: Record<string, CustomPlan>
) {
  const sections = plans.map((p) => {
    const title = titleFor(p.planId, customMap);
    const stats = computeStats(p, customMap);
    const maxDay = stats.maxDay;

    let daysHtml = "";
    for (let day = 1; day <= maxDay; day++) {
      const tasks = getTasksForDay(p.planId, day, customMap);
      const affirmation = getAffirmationForDay(p.planId, day, customMap);

      const ds = p.days?.[day];
      const checked: boolean[] = ds?.tasksChecked ?? [];
      const notesMap = ds?.notesByTaskIndex;
      const completedAt: string | undefined = ds?.completedAt;

      const rows = tasks.map((t, idx) => {
        const done = !!checked[idx];
        const note = noteForIndex(notesMap, idx);
        return `
          <tr>
            <td style="width:42px; text-align:center;">${done ? "✓" : ""}</td>
            <td>${escapeHtml(t)}</td>
            <td>${escapeHtml(note)}</td>
          </tr>
        `;
      });

      daysHtml += `
        <div style="margin-top:14px;">
          <div style="font-weight:700; margin-bottom:6px;">Day ${day}</div>
          <div style="color:#444; font-style:italic; margin-bottom:8px;">${escapeHtml(
            affirmation
          )}</div>
          <div style="color:#666; margin-bottom:8px;">
            ${completedAt ? `Completed: ${escapeHtml(completedAt)}` : "Not completed yet"}
          </div>
          <table style="width:100%; border-collapse:collapse;" border="1" cellspacing="0" cellpadding="6">
            <thead>
              <tr>
                <th style="width:42px;">Done</th>
                <th>Task</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              ${rows.join("") || `<tr><td></td><td>(No tasks)</td><td></td></tr>`}
            </tbody>
          </table>
        </div>
      `;
    }

    return `
      <div style="margin-bottom:28px; page-break-inside:avoid;">
        <h2 style="margin:0 0 6px 0;">${escapeHtml(title)}</h2>
        <div style="color:#444; margin-bottom:10px;">
          Status: ${p.isCompleted ? "Completed" : "In progress"} • Current day: ${
      p.currentDay
    } • Days completed: ${stats.daysCompleted}/${maxDay} • Tasks done: ${
      stats.tasksDone
    }/${stats.tasksTotal} • Feedback notes: ${stats.notesCount}
        </div>
        ${daysHtml}
      </div>
    `;
  });

  return `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style="font-family: Arial, sans-serif; padding: 24px;">
        <h1 style="margin-top:0;">Discipol — Progress Report</h1>
        <p style="color:#444; margin-top:0;">
          Tasks and feedback grouped by day for all started areas.
        </p>
        ${sections.join("") || "<p>No plans yet.</p>"}
      </body>
    </html>
  `;
}

export default function ReviewScreen() {
  const [activePlans, setActivePlans] = useState<ActivePlanState[] | null>(null);
  const [customMap, setCustomMap] = useState<Record<string, CustomPlan>>({});

  useEffect(() => {
    (async () => {
      const plans = await loadActivePlans();
      setActivePlans(plans);

      const customs = await loadCustomPlans();
      const map: Record<string, CustomPlan> = {};
      for (const c of customs) map[c.id] = c;
      setCustomMap(map);
    })();
  }, []);

  const sortedPlans = useMemo(() => {
    const list = activePlans ?? [];
    return list.slice().sort((a, b) => (b.startedAt > a.startedAt ? 1 : -1));
  }, [activePlans]);

  async function downloadPdfAll() {
    if (!activePlans) return;

    if (sortedPlans.length === 0) {
      Alert.alert("Nothing to export", "Start an area first, then come back here.");
      return;
    }

    try {
      const html = buildAllPlansHtml(sortedPlans, customMap);
      const { uri } = await Print.printToFileAsync({ html });
      await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
    } catch (e: any) {
      Alert.alert("PDF Error", e?.message ?? "Could not create PDF.");
    }
  }

  if (activePlans === null) {
    return (
      <View style={{ padding: 16 }}>
        <Text>Loading…</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 14 }}>
      <AppHeader />

      <Text style={{ fontSize: 22, fontWeight: "900" }}>View your progress</Text>
      <Text style={{ color: "#444" }}>
        All areas • Day-by-day tasks • Feedback notes • Downloadable PDF
      </Text>

      <Pressable
        onPress={downloadPdfAll}
        style={{
          alignSelf: "flex-start",
          paddingVertical: 10,
          paddingHorizontal: 12,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: "#111",
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontWeight: "900" }}>Download PDF (all areas)</Text>
      </Pressable>

      {sortedPlans.length === 0 ? (
        <Text style={{ color: "#444" }}>No areas started yet.</Text>
      ) : (
        sortedPlans.map((p) => {
          const title = titleFor(p.planId, customMap);
          const stats = computeStats(p, customMap);

          return (
            <View
              key={p.planId}
              style={{
                padding: 14,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: "#ddd",
                backgroundColor: "white",
                gap: 8,
              }}
            >
              <Text style={{ fontWeight: "900", fontSize: 16 }}>{title}</Text>

              <Text style={{ color: "#444" }}>
                Status: {p.isCompleted ? "Completed ✅" : "In progress"} • Current day:{" "}
                {p.currentDay}
              </Text>

              <View style={{ flexDirection: "row", gap: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: "900" }}>
                    Days completed: {stats.daysCompleted}/{stats.maxDay}
                  </Text>
                  <Text style={{ color: "#444" }}>Up to Day {stats.maxDay}</Text>
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: "900" }}>
                    Tasks done: {stats.tasksDone}/{stats.tasksTotal}
                  </Text>
                  <Text style={{ color: "#444" }}>
                    Feedback notes: {stats.notesCount}
                  </Text>
                </View>
              </View>

              {/* Day-by-day breakdown */}
              <View style={{ gap: 8, marginTop: 6 }}>
                {Array.from({ length: stats.maxDay }, (_, i) => i + 1).map((day) => {
                  const tasks = getTasksForDay(p.planId, day, customMap);
                  const ds = p.days?.[day];
                  const checked: boolean[] = ds?.tasksChecked ?? [];
                  const notesMap = ds?.notesByTaskIndex;
                  const doneCount = checked.filter(Boolean).length;
                  const dayDone = !!ds?.completedAt;

                  let dayNotesCount = 0;
                  for (let i = 0; i < tasks.length; i++) {
                    if (noteForIndex(notesMap, i)) dayNotesCount++;
                  }

                  return (
                    <View
                      key={`${p.planId}-day-${day}`}
                      style={{
                        padding: 10,
                        borderRadius: 12,
                        borderWidth: 1,
                        borderColor: "#eee",
                        backgroundColor: "white",
                        gap: 6,
                      }}
                    >
                      <Text style={{ fontWeight: "900" }}>
                        Day {day} {dayDone ? "✅" : ""}
                      </Text>

                      <Text style={{ color: "#444" }}>
                        Tasks: {doneCount}/{tasks.length} • Notes: {dayNotesCount}
                      </Text>

                      {tasks.map((t, idx) => {
                        const isDone = !!checked[idx];
                        const note = noteForIndex(notesMap, idx);

                        return (
                          <Pressable
                            key={`${p.planId}-${day}-${idx}`}
                            onPress={() => {
                              if (!isDone) {
                                router.push({
                                  pathname: "/(tabs)/today",
                                  params: { focus: p.planId },
                                });
                              }
                            }}
                            style={{
                              gap: 2,
                              padding: 6,
                              borderRadius: 8,
                              backgroundColor: isDone ? "transparent" : "#fff7f2",
                            }}
                          >
                            <Text style={{ color: "#222" }}>
                              {isDone ? "✓" : "⬜"} {t}
                            </Text>

                            {note ? (
                              <Text style={{ color: "#555", fontStyle: "italic" }}>
                                Feedback: {note}
                              </Text>
                            ) : null}

                            {!isDone && (
                              <Text
                                style={{
                                  fontSize: 11,
                                  fontWeight: "700",
                                  color: "#E57373",
                                }}
                              >
                                Tap to finish this task →
                              </Text>
                            )}
                          </Pressable>
                        );
                      })}
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })
      )}
    </ScrollView>
  );
}
