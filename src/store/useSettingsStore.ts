import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SettingsState {
  showPartylistPhoto: boolean;
  setShowPartylistPhoto: (value: boolean) => void;

  showSenatorPhoto: boolean;
  setShowSenatorPhoto: (value: boolean) => void;
}

export const useSettingsStore = create(
  persist<SettingsState>(
    (set) => ({
      showPartylistPhoto: false,
      setShowPartylistPhoto: (value) => set({ showPartylistPhoto: value }),

      showSenatorPhoto: true,
      setShowSenatorPhoto: (value) => set({ showSenatorPhoto: value }),
    }),
    {
      name: "settings-session",
      storage: {
        getItem: (name) => {
          const item = sessionStorage.getItem(name);
          return item ? JSON.parse(item) : null;
        },
        setItem: (name, value) => {
          sessionStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          sessionStorage.removeItem(name);
        },
      },
    }
  )
);
