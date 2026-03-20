import { Platform } from "react-native";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase URL or Anon Key");
}

type StorageLike = {
  getItem: (key: string) => Promise<string | null>;
  setItem: (key: string, value: string) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
};

// SSR/build-safe (Node): no window usage
const memoryStorage: StorageLike = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: async (key) => store[key] ?? null,
    setItem: async (key, value) => {
      store[key] = value;
    },
    removeItem: async (key) => {
      delete store[key];
    },
  };
})();

// Web runtime: localStorage
const webStorage: StorageLike = {
  getItem: async (key) =>
    typeof window === "undefined" ? null : window.localStorage.getItem(key),
  setItem: async (key, value) => {
    if (typeof window !== "undefined") window.localStorage.setItem(key, value);
  },
  removeItem: async (key) => {
    if (typeof window !== "undefined") window.localStorage.removeItem(key);
  },
};

// IMPORTANT: do not import AsyncStorage at top-level (breaks Node export)
let storage: StorageLike = memoryStorage;

if (Platform.OS === "web") {
  storage = webStorage;
} else {
  // Native runtime: try AsyncStorage, but don't crash builds if it isn't available
  // (in practice it will be available on device)
  import("@react-native-async-storage/async-storage")
    .then((m) => {
      storage = (m.default ?? m) as unknown as StorageLike;
    })
    .catch(() => {
      storage = memoryStorage;
    });
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage,
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false,
  },
});
