// src/subscription/subscription.ts

import AsyncStorage from "@react-native-async-storage/async-storage";
import Purchases, { LOG_LEVEL } from "react-native-purchases";

const IS_PRO_KEY = "discipol.isPro";

// MUST match the Entitlement ID in RevenueCat
const ENTITLEMENT_ID = "pro";

// Set EXPO_PUBLIC_PAYMENTS_MODE=test to bypass RevenueCat (e.g. on Vercel)
const PAYMENTS_MODE = process.env.EXPO_PUBLIC_PAYMENTS_MODE ?? "revenuecat";

let configured = false;

async function configure() {
  if (configured) return;

  Purchases.setLogLevel(LOG_LEVEL.VERBOSE);

  const apiKey = process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_API_KEY;
  if (!apiKey) {
    throw new Error("Missing EXPO_PUBLIC_REVENUECAT_ANDROID_API_KEY");
  }

  Purchases.configure({ apiKey });

  // 🔑 Force-refresh cached customer + offerings (safe, one-time)
  await Purchases.invalidateCustomerInfoCache();
  await Purchases.getOfferings();

  Purchases.addCustomerInfoUpdateListener(async (info) => {
    const isPro = Boolean(info.entitlements.active[ENTITLEMENT_ID]);
    await AsyncStorage.setItem(IS_PRO_KEY, isPro ? "true" : "false");
  });

  configured = true;
}

export async function getIsPro(): Promise<boolean> {
  const raw = await AsyncStorage.getItem(IS_PRO_KEY);
  return raw === "true";
}

export async function setIsPro(value: boolean): Promise<void> {
  await AsyncStorage.setItem(IS_PRO_KEY, value ? "true" : "false");
}

export async function restoreProFromGooglePlay(): Promise<boolean> {
  if (PAYMENTS_MODE === "test") {
    // In test mode, just re-read the locally stored value — no RevenueCat call
    return getIsPro();
  }

  await configure();

  const info = await Purchases.restorePurchases();
  const isPro = Boolean(info.entitlements.active[ENTITLEMENT_ID]);

  await setIsPro(isPro);
  return isPro;
}

export async function purchaseProMonthly(): Promise<void> {
  if (PAYMENTS_MODE === "test") {
    // In test mode, immediately unlock Pro without hitting RevenueCat
    await setIsPro(true);
    return;
  }

  await configure();

  const offerings = await Purchases.getOfferings();
  const monthlyPkg = offerings.current?.monthly;

  if (!monthlyPkg) {
    throw new Error("Monthly package not found in current RevenueCat offering");
  }

  const result = await Purchases.purchasePackage(monthlyPkg);

  const isPro = Boolean(
    result.customerInfo.entitlements.active[ENTITLEMENT_ID]
  );

  await setIsPro(isPro);
}
