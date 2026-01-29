import AsyncStorage from "@react-native-async-storage/async-storage";

import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useMemo, useRef, useState } from "react";

import {
  Alert,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import AppHeader from "../../src/components/AppHeader";
import { planById } from "../../src/data/selfImprovementPlans.v1";
import {
  loadActivePlans,
  rolloverPlan,
  saveActivePlans,
  todayKey,
  toggleTask,
  upsertTaskNote,
} from "../../src/storage/activePlans";
import type { ActivePlanState } from "../../src/storage/types";

import {
  loadCustomPlans,
  upsertCustomDayTasks,
  type CustomPlan,
} from "../../src/storage/customPlans";

import { getIsPro } from "../../src/subscription/subscription";

const CUSTOM_AFFIRMATION =
  "Write your own tasks for today! Once completed, you will go tomorrow to brand new tasks you will choose.";

// ✅ Free days = 2 (Day 1–2 free, Day 3+ requires subscription)
const FREE_TRIAL_DAYS = 2;

const REQUIRED_CUSTOM_TASKS_PER_DAY = 5;

// ✅ Admin auth (fixed + clean)
const ADMIN_PASSWORD = "Lucas2";
const ADMIN_KEY = "discipol.admin.unlocked";

// ✅ Safe helper (keeps behavior consistent)
async function notify(title: string, message: string) {
  Alert.alert(title, message);
}

function countCompletedTasks(plan: ActivePlanState, totalTasksForDay: number) {
  const safeTotal = Math.max(0, totalTasksForDay || 0);
  const dayState = plan.days?.[plan.currentDay];
  const checked = dayState?.tasksChecked ?? Array(safeTotal).fill(false);
  const done = checked.filter(Boolean).length;
  return {
    done,
    total: safeTotal,
    allDone: safeTotal > 0 && done === safeTotal,
  };
}

function padToFive(arr: string[]) {
  const next = arr.slice(0);
  while (next.length < REQUIRED_CUSTOM_TASKS_PER_DAY) next.push("");
  return next.slice(0, REQUIRED_CUSTOM_TASKS_PER_DAY);
}

export default function TodayScreen() {
  const params = useLocalSearchParams();
  const focus = typeof params.focus === "string" ? params.focus : null;

  const scrollRef = useRef<ScrollView>(null);

  const [activePlans, setActivePlans] = useState<ActivePlanState[] | null>(null);
  const [customPlans, setCustomPlans] = useState<Record<string, CustomPlan>>({});
  const [showOthers, setShowOthers] = useState(false);

  const [isPro, setIsPro] = useState(false);
  const [adminUnlocked, setAdminUnlocked] = useState(false);

  // ✅ Custom tasks draft per plan (always 5 inputs for custom plans)
  const [draftByPlanId, setDraftByPlanId] = useState<Record<string, string[]>>(
    {}
  );

  // ✅ Admin unlock modal
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [adminPasswordDraft, setAdminPasswordDraft] = useState("");

  // ✅ Feedback modal state
  const [noteOpen, setNoteOpen] = useState(false);
  const [notePlanId, setNotePlanId] = useState<string | null>(null);
  const [noteTaskIndex, setNoteTaskIndex] = useState<number>(-1);
  const [noteDraft, setNoteDraft] = useState("");
  const [noteEditing, setNoteEditing] = useState(false);
  const [noteTaskText, setNoteTaskText] = useState("");

  async function refreshEntitlements() {
    const [pro, admin] = await Promise.all([
      getIsPro(),
      AsyncStorage.getItem(ADMIN_KEY),
    ]);
    setIsPro(!!pro);
    setAdminUnlocked(admin === "true");
  }

  useEffect(() => {
    (async () => {
      await refreshEntitlements();

      const loaded = await loadActivePlans();
      const rolled = (loaded ?? []).map(rolloverPlan);

      if (JSON.stringify(loaded) !== JSON.stringify(rolled)) {
        await saveActivePlans(rolled);
      }
      setActivePlans(rolled);

      const customs = await loadCustomPlans();
      const map: Record<string, CustomPlan> = {};
      for (const c of customs) map[c.id] = c;
      setCustomPlans(map);

      if (focus) setShowOthers(false);
    })();
  }, [focus]);

  const effectivePro = isPro || adminUnlocked;

  const workingPlans = useMemo(() => {
    const list = (activePlans ?? []).filter((p) => !p.isCompleted);
    const sorted = list
      .slice()
      .sort((a, b) => (b.startedAt > a.startedAt ? 1 : -1));

    if (!focus) return sorted;

    const focused = sorted.filter((p) => p.planId === focus);
    const others = sorted.filter((p) => p.planId !== focus);

    return showOthers ? [...focused, ...others] : focused;
  }, [activePlans, focus, showOthers]);

  // ✅ Seed 5-line drafts for custom plans that don't yet have 5 tasks saved for the day
  useEffect(() => {
    if (!workingPlans.length) return;

    setDraftByPlanId((prev) => {
      let changed = false;
      const next = { ...prev };

      for (const p of workingPlans) {
        const builtIn = planById(p.planId);
        if (builtIn) continue; // only custom
        const custom = customPlans[p.planId];
        const saved = custom?.dayTasks?.[p.currentDay] ?? [];
        const needsEditor = saved.length < REQUIRED_CUSTOM_TASKS_PER_DAY;

        if (needsEditor && !next[p.planId]) {
          next[p.planId] = padToFive(saved);
          changed = true;
        }
      }

      return changed ? next : prev;
    });
  }, [workingPlans, customPlans]);

  useEffect(() => {
    if (focus) {
      setTimeout(
        () => scrollRef.current?.scrollTo({ y: 0, animated: true }),
        150
      );
    }
  }, [focus, showOthers]);

  async function persist(updated: ActivePlanState[]) {
    setActivePlans(updated);
    await saveActivePlans(updated);
  }

  async function onDoneForToday(plan: ActivePlanState, total: number) {
    const { done, allDone } = countCompletedTasks(plan, total);

    if (total === 0) {
      Alert.alert("No tasks found", "There are no tasks for today.");
      return;
    }

    Alert.alert(
      allDone ? "Amazing work 🎉" : "No worries ❤️",
      allDone
        ? "You completed all tasks for today. Tomorrow will unlock the next day."
        : `You completed ${done} tasks. You’ll stay on this day until all are done.`
    );
  }

  function closeNoteModal() {
    setNoteOpen(false);
    setNotePlanId(null);
    setNoteTaskIndex(-1);
    setNoteDraft("");
    setNoteEditing(false);
    setNoteTaskText("");
    Keyboard.dismiss();
  }

  function setDraftLine(planId: string, index: number, value: string) {
    const cur = padToFive(draftByPlanId[planId] ?? []);
    const next = cur.slice();
    next[index] = value;
    setDraftByPlanId((prev) => ({ ...prev, [planId]: next }));
  }

  async function saveCustomTasksForToday(planId: string, day: number) {
    const five = padToFive(draftByPlanId[planId] ?? []);
    const trimmed = five.map((s) => s.trim());

    const missing = trimmed.filter((t) => !t).length;
    if (missing > 0) {
      Alert.alert(
        "Please add 5 tasks",
        "This custom area requires 5 tasks every day. Fill all 5 lines, then Save."
      );
      return;
    }

    const updated = await upsertCustomDayTasks(planId, day, trimmed);

    setCustomPlans((prev) => ({
      ...prev,
      [updated.id]: updated,
    }));

    Alert.alert("Saved ✅", "Your 5 tasks for today are ready.");
  }

  async function saveNoteAndMaybeToggle() {
    const note = noteDraft.trim();

    // ✅ Keep your rule: must write feedback
    if (note.length < 3) {
      Alert.alert("Too short", "Please write 1 short sentence.");
      return;
    }

    if (!activePlans || !notePlanId || noteTaskIndex < 0) return;

    const plan = activePlans.find((p) => p.planId === notePlanId);
    if (!plan) return;

    const builtIn = planById(plan.planId);
    const custom = customPlans[plan.planId];

    const builtDay = builtIn?.days?.find((d) => d.day === plan.currentDay);
    const tasksText = builtIn
      ? (builtDay?.tasks?.map((t) => t.text) ?? [])
      : (custom?.dayTasks?.[plan.currentDay] ?? []);

    const totalTasksForDay = tasksText.length;

    if (totalTasksForDay === 0) {
      Alert.alert("No tasks found", "There are no tasks to save feedback for.");
      return;
    }

    const updated = activePlans.map((p) => {
      if (p.planId !== notePlanId) return p;

      if (noteEditing) {
        return upsertTaskNote(p, p.currentDay, noteTaskIndex, note);
      }

      return toggleTask(p, p.currentDay, noteTaskIndex, totalTasksForDay, note);
    });

    await persist(updated);

    // ✅ Show feedback about next task
    try {
      const newPlan = updated.find((p) => p.planId === notePlanId);
      if (newPlan) {
        const builtIn = planById(newPlan.planId);
        const custom = customPlans[newPlan.planId];

        const builtDay = builtIn?.days?.find(
          (d) => d.day === newPlan.currentDay
        );
        const tasksText = builtIn
          ? (builtDay?.tasks?.map((t) => t.text) ?? [])
          : (custom?.dayTasks?.[newPlan.currentDay] ?? []);

        const dayState = newPlan.days?.[newPlan.currentDay];
        const checked = dayState?.tasksChecked ?? [];

        const nextIndex = checked.findIndex((v) => !v);

        if (nextIndex === -1) {
          Alert.alert("Amazing! 🎉", "You finished all tasks for today!");
        } else {
          const nextTask = tasksText[nextIndex] ?? "Next task";
          Alert.alert("Nice work! ✅", "Task completed!");
          await notify("Next task ➡️", nextTask);
        }
      }
    } catch {}

    closeNoteModal();
  }

  async function tryAdminUnlock() {
    const entered = adminPasswordDraft.trim();
    if (entered !== ADMIN_PASSWORD) {
      Alert.alert("Wrong password", "Try again.");
      return;
    }

    await AsyncStorage.setItem(ADMIN_KEY, "true");
    setAdminUnlocked(true);
    setAdminPasswordDraft("");
    setAdminModalOpen(false);
    Alert.alert("Admin unlocked", "All content unlocked on this device.");
  }

  if (activePlans === null) {
    return (
      <View style={{ padding: 16 }}>
        <Text>Loading…</Text>
      </View>
    );
  }

  if (workingPlans.length === 0) {
    return (
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
        <AppHeader belowHeaderText={"One day at a time • No skipping ahead"} />
        <Text style={{ fontSize: 22, fontWeight: "900" }}>Today</Text>
        <Text style={{ color: "#444" }}>
          You haven’t started any areas yet. Go to Explore and choose an area.
        </Text>
      </ScrollView>
    );
  }

  const bannerPlan = workingPlans[0];

  // ✅ Locked only after Day 2
  const bannerLocked = !effectivePro && bannerPlan.currentDay > FREE_TRIAL_DAYS;

  const windowH = Dimensions.get("window").height;
  const modalMaxH = Math.min(windowH * 0.72, 520);

  const canSaveFeedback = noteDraft.trim().length >= 3;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{ padding: 16, gap: 14 }}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      >
        <AppHeader belowHeaderText={"One day at a time • No skipping ahead"} />

        <Text style={{ fontSize: 22, fontWeight: "900" }}>Today</Text>
        <Text style={{ color: "#444" }}>
          Calendar date: {todayKey()} • One day at a time • No skipping ahead
        </Text>

        {!effectivePro && (
          <Pressable
            onPress={() => router.push("/subscribe")}
            style={{
              padding: 12,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: "#111",
              backgroundColor: "white",
            }}
          >
            <Text style={{ fontWeight: "900" }}>
              {bannerLocked
                ? "Free trial completed — Subscribe to continue ⭐"
                : `Free Trial: Day ${bannerPlan.currentDay}/${FREE_TRIAL_DAYS} ⭐`}
            </Text>
            <Text style={{ color: "#444", marginTop: 6 }}>
              Subscribe unlocks all 30 days + Build your own plans.
            </Text>
          </Pressable>
        )}

        {/* ✅ ADMIN BUTTON */}
        <Pressable
          onPress={() => setAdminModalOpen(true)}
          style={{ alignSelf: "flex-start" }}
        >
          <Text style={{ color: "#1E88E5", fontWeight: "900" }}>
            Admin {adminUnlocked ? "(Unlocked)" : ""}
          </Text>
        </Pressable>

        {focus && (
          <Pressable
            onPress={() => setShowOthers((v) => !v)}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 12,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#111",
              alignSelf: "flex-start",
            }}
          >
            <Text style={{ fontWeight: "900" }}>
              {showOthers ? "Hide other active areas" : "Show other active areas"}
            </Text>
          </Pressable>
        )}

        {workingPlans.map((p) => {
          const builtIn = planById(p.planId);
          const custom = customPlans[p.planId];

          const title = builtIn?.title ?? custom?.title ?? p.planId;
          const builtDay = builtIn?.days?.find((d) => d.day === p.currentDay);

          const isCustom = !builtIn;

          // ✅ Locked only after Day 2 (custom and built-in)
          const isLocked = !effectivePro && p.currentDay > FREE_TRIAL_DAYS;

          const customTasksForDay = custom?.dayTasks?.[p.currentDay] ?? [];
          const needsCustomTasks =
            isCustom && customTasksForDay.length < REQUIRED_CUSTOM_TASKS_PER_DAY;

          const tasksText = builtIn
            ? (builtDay?.tasks?.map((t) => t.text) ?? [])
            : customTasksForDay;

          const affirmation = builtIn
            ? (builtDay?.affirmation ?? "")
            : CUSTOM_AFFIRMATION;

          const totalTasksForDay = tasksText.length;

          const dayState = p.days?.[p.currentDay];
          const checked =
            dayState?.tasksChecked ?? Array(totalTasksForDay).fill(false);
          const notes = dayState?.notesByTaskIndex ?? {};

          const { done, total, allDone } = countCompletedTasks(p, totalTasksForDay);
          const isFocused = focus === p.planId;

          return (
            <View
              key={p.planId}
              style={{
                padding: 14,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: isFocused ? "#111" : "#ddd",
                backgroundColor: "white",
                gap: 10,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "900" }}>
                {title} — Day {p.currentDay}
              </Text>

              {isLocked ? (
                <View style={{ gap: 10 }}>
                  <Text style={{ fontStyle: "italic", color: "#333" }}>
                    You are doing great! 🌟
                  </Text>

                  <Text style={{ color: "#444", lineHeight: 20 }}>
                    You’ve completed the free {FREE_TRIAL_DAYS}-day trial for this area. Subscribe
                    to unlock all 30 days — and Build your own.
                  </Text>

                  <Pressable
                    onPress={() => router.push("/subscribe")}
                    style={{
                      paddingVertical: 12,
                      borderRadius: 10,
                      alignItems: "center",
                      borderWidth: 1,
                      borderColor: "#111",
                    }}
                  >
                    <Text style={{ fontWeight: "900" }}>Subscribe & Continue ⭐</Text>
                  </Pressable>
                </View>
              ) : (
                <>
                  <Text style={{ fontStyle: "italic", color: "#333" }}>
                    {affirmation}
                  </Text>

                  {needsCustomTasks && (
                    <View style={{ gap: 10 }}>
                      <Text style={{ color: "#444" }}>
                        Write your 5 tasks for today (required):
                      </Text>

                      {padToFive(draftByPlanId[p.planId] ?? customTasksForDay).map(
                        (val, idx) => (
                          <TextInput
                            key={`${p.planId}-${idx}`}
                            value={val}
                            onChangeText={(t) => setDraftLine(p.planId, idx, t)}
                            placeholder={`Task ${idx + 1}`}
                            style={{
                              borderWidth: 1,
                              borderColor: "#ccc",
                              borderRadius: 12,
                              paddingHorizontal: 12,
                              paddingVertical: 10,
                              fontSize: 16,
                              backgroundColor: "white",
                            }}
                          />
                        )
                      )}

                      <Pressable
                        onPress={() => saveCustomTasksForToday(p.planId, p.currentDay)}
                        style={{
                          paddingVertical: 10,
                          paddingHorizontal: 12,
                          borderRadius: 12,
                          borderWidth: 1,
                          borderColor: "#111",
                          alignSelf: "flex-start",
                        }}
                      >
                        <Text style={{ fontWeight: "900" }}>Save 5 tasks</Text>
                      </Pressable>

                      <Text style={{ color: "#444" }}>
                        Fill all 5 lines, then Save to begin checking tasks.
                      </Text>
                    </View>
                  )}

                  {!needsCustomTasks && totalTasksForDay === 0 ? (
                    <Text style={{ color: "#444" }}>No tasks found for today.</Text>
                  ) : null}

                  {totalTasksForDay > 0 && (
                    <>
                      <View style={{ gap: 10 }}>
                        {tasksText.map((text, idx) => {
                          const isChecked = !!checked[idx];
                          const note = notes[idx];

                          return (
                            <Pressable
                              key={`${p.planId}-d${p.currentDay}-t${idx}`}
                              onPress={() => {
                                setNotePlanId(p.planId);
                                setNoteTaskIndex(idx);
                                setNoteTaskText(text);

                                if (isChecked) {
                                  setNoteDraft(note ?? "");
                                  setNoteEditing(true);
                                } else {
                                  setNoteDraft("");
                                  setNoteEditing(false);
                                }

                                setNoteOpen(true);
                              }}
                              style={{
                                padding: 14,
                                borderRadius: 12,
                                borderWidth: 2,
                                borderColor: isChecked ? "#B0BEC5" : "#E57373",
                                backgroundColor: isChecked ? "#F6F8FA" : "#FFF5F5",
                                gap: 6,
                              }}
                            >
                              <View
                                style={{
                                  flexDirection: "row",
                                  gap: 12,
                                  alignItems: "center",
                                }}
                              >
                                <View style={{ flex: 1, gap: 4 }}>
                                  <Text>{text}</Text>

                                  {!!note && (
                                    <Text style={{ color: "#444", fontStyle: "italic" }}>
                                      “{note}”
                                    </Text>
                                  )}
                                </View>

                                {isChecked && (
                                  <Text
                                    style={{
                                      fontWeight: "900",
                                      color: "#1E88E5",
                                      fontSize: 18,
                                    }}
                                  >
                                    ✓
                                  </Text>
                                )}
                              </View>
                            </Pressable>
                          );
                        })}
                      </View>

                      <Text style={{ color: "#444" }}>
                        Progress: {done}/{total} tasks completed
                      </Text>

                      <Pressable
                        onPress={() => onDoneForToday(p, totalTasksForDay)}
                        style={{
                          marginTop: 2,
                          paddingVertical: 12,
                          borderRadius: 10,
                          alignItems: "center",
                          borderWidth: 1,
                          borderColor: "#111",
                        }}
                      >
                        <Text style={{ fontWeight: "900" }}>
                          {allDone ? "Completed for today" : "End of day / Save progress"}
                        </Text>
                      </Pressable>
                    </>
                  )}
                </>
              )}
            </View>
          );
        })}

        {/* ✅ ADMIN MODAL */}
        <Modal
          visible={adminModalOpen}
          transparent
          animationType="fade"
          onRequestClose={() => setAdminModalOpen(false)}
        >
          <TouchableWithoutFeedback
            onPress={() => setAdminModalOpen(false)}
            accessible={false}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "rgba(0,0,0,0.4)",
                justifyContent: "center",
                padding: 18,
              }}
            >
              <TouchableWithoutFeedback onPress={() => {}} accessible={false}>
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 16,
                    padding: 16,
                    gap: 10,
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "900" }}>Admin</Text>

                  <Text style={{ color: "#444" }}>
                    Enter password to unlock everything on this device.
                  </Text>

                  <TextInput
                    value={adminPasswordDraft}
                    onChangeText={setAdminPasswordDraft}
                    placeholder="Password"
                    secureTextEntry
                    autoCapitalize="none"
                    style={{
                      borderWidth: 1,
                      borderColor: "#ddd",
                      borderRadius: 12,
                      paddingHorizontal: 12,
                      paddingVertical: 10,
                      fontSize: 16,
                      backgroundColor: "white",
                    }}
                  />

                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                      justifyContent: "flex-end",
                    }}
                  >
                    <Pressable
                      onPress={() => {
                        setAdminPasswordDraft("");
                        setAdminModalOpen(false);
                      }}
                      style={{
                        paddingVertical: 10,
                        paddingHorizontal: 14,
                        borderRadius: 12,
                        borderWidth: 1,
                        borderColor: "#999",
                      }}
                    >
                      <Text style={{ fontWeight: "900" }}>Cancel</Text>
                    </Pressable>

                    <Pressable
                      onPress={tryAdminUnlock}
                      style={{
                        paddingVertical: 10,
                        paddingHorizontal: 14,
                        borderRadius: 12,
                        borderWidth: 1,
                        borderColor: "#111",
                      }}
                    >
                      <Text style={{ fontWeight: "900" }}>Unlock</Text>
                    </Pressable>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        {/* ✅ TASK FEEDBACK MODAL */}
        <Modal
          visible={noteOpen}
          transparent
          animationType="fade"
          onRequestClose={closeNoteModal}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.4)" }}>
              <KeyboardAvoidingView
                style={{ flex: 1, justifyContent: "flex-start" }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
              >
                <TouchableWithoutFeedback onPress={() => {}} accessible={false}>
                  <View style={{ marginTop: 24, paddingHorizontal: 16, width: "100%" }}>
                    <View
                      style={{
                        backgroundColor: "#fffdfb",
                        borderRadius: 18,
                        overflow: "hidden",
                        maxHeight: modalMaxH,
                        borderWidth: 1,
                        borderColor: "#f2c6b6",
                      }}
                    >
                      <ScrollView
                        contentContainerStyle={{
                          gap: 12,
                          padding: 16,
                          paddingBottom: 14,
                        }}
                        keyboardShouldPersistTaps="handled"
                      >
                        <Text style={{ fontSize: 18, fontWeight: "900" }}>
                          {noteEditing ? "Edit your feedback ✍️" : "Task feedback ✍️"}
                        </Text>

                        <View
                          style={{
                            padding: 12,
                            borderRadius: 12,
                            borderWidth: 1,
                            borderColor: "#c8d9f0",
                            backgroundColor: "#f2f7ff",
                          }}
                        >
                          <Text style={{ fontWeight: "900" }}>Task:</Text>
                          <Text style={{ marginTop: 6 }}>{noteTaskText}</Text>
                        </View>

                        <Text style={{ color: "#444" }}>
                          Write one short sentence about how you completed this task:
                        </Text>

                        <Text style={{ color: "#777" }}>
                          Minimum 3 characters required.
                        </Text>

                        <TextInput
                          value={noteDraft}
                          onChangeText={setNoteDraft}
                          placeholder="Example: I walked 15 minutes after dinner."
                          multiline
                          numberOfLines={2}
                          style={{
                            borderWidth: 1,
                            borderColor: "#e7b8a5",
                            borderRadius: 12,
                            paddingHorizontal: 12,
                            paddingVertical: 10,
                            fontSize: 16,
                            backgroundColor: "#fff7f2",
                            minHeight: 56,
                            textAlignVertical: "top",
                          }}
                        />
                      </ScrollView>

                      <View
                        style={{
                          flexDirection: "row",
                          gap: 10,
                          justifyContent: "flex-end",
                          padding: 12,
                          borderTopWidth: 1,
                          borderTopColor: "#eee",
                          backgroundColor: "white",
                        }}
                      >
                        <Pressable
                          onPress={closeNoteModal}
                          style={{
                            paddingVertical: 10,
                            paddingHorizontal: 14,
                            borderRadius: 12,
                            borderWidth: 1,
                            borderColor: "#999",
                          }}
                        >
                          <Text style={{ fontWeight: "900" }}>Cancel</Text>
                        </Pressable>

                        <Pressable
                          onPress={() => {
                            if (!canSaveFeedback) {
                              Alert.alert("Too short", "Please write 1 short sentence.");
                              return;
                            }
                            saveNoteAndMaybeToggle();
                          }}
                          style={{
                            paddingVertical: 10,
                            paddingHorizontal: 14,
                            borderRadius: 12,
                            borderWidth: 1,
                            borderColor: canSaveFeedback ? "#111" : "#bbb",
                            opacity: canSaveFeedback ? 1 : 0.5,
                          }}
                        >
                          <Text style={{ fontWeight: "900" }}>Save</Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </KeyboardAvoidingView>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
