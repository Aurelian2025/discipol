// src/subscription/subscription.ts

import AsyncStorage from "@react-native-async-storage/async-storage";
import Purchases, { LOG_LEVEL } from "react-native-purchases";

const IS_PRO_KEY = "discipol.isPro";

// MUST match the Entitlement ID in RevenueCat
const ENTITLEMENT_ID = "pro";

// MUST match the Package Identifier in the Offering
const MONTHLY_PACKAGE_ID = "monthly";

let configured = false;

async function configure() {
  if (configured) return;

  Purchases.setLogLevel(LOG_LEVEL.VERBOSE);

  const apiKey = process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_API_KEY;
  if (!apiKey) {
    throw new Error("Missing EXPO_PUBLIC_REVENUECAT_ANDROID_API_KEY");
  }

  Purchases.configure({ apiKey });

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
  await configure();

  const info = await Purchases.restorePurchases();
  const isPro = Boolean(info.entitlements.active[ENTITLEMENT_ID]);

  await setIsPro(isPro);
  return isPro;
}

export async function purchaseProMonthly(): Promise<void> {
  await configure();

  const offerings = await Purchases.getOfferings();
  const offering = offerings.current;

  if (!offering) {
    throw new Error("No offerings configured in RevenueCat");
  }

  // ✅ Explicit lookup by Package Identifier
  const pkg = offering.availablePackages.find(
    (p) => p.identifier === MONTHLY_PACKAGE_ID
  );

  if (!pkg) {
    throw new Error(
      `Monthly package (${MONTHLY_PACKAGE_ID}) not found in RevenueCat offering`
    );
  }

  const result = await Purchases.purchasePackage(pkg);

  const isPro = Boolean(
    result.customerInfo.entitlements.active[ENTITLEMENT_ID]
  );

  await setIsPro(isPro);
}
