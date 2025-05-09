import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SettingsState {
  showPartylistPhoto: boolean;
  setShowPartylistPhoto: (value: boolean) => void;

  showSenatorPhoto: boolean;
  setShowSenatorPhoto: (value: boolean) => void;

  showGovernorPhoto: boolean;
  setShowGovernorPhoto: (value: boolean) => void;

  showViceGovernorPhoto: boolean;
  setShowViceGovernorPhoto: (value: boolean) => void;

  showHouseOfRepresentativeMemberPhoto: boolean;
  setShowHouseOfRepresentativeMemberPhoto: (value: boolean) => void;

  showSangguaniangPanlalawiganPhoto: boolean;
  setShowSangguaniangPanlalawiganPhoto: (value: boolean) => void;

  toggleAllPhotos: (value: boolean) => void;
}

export const useSettingsStore = create(
  persist<SettingsState>(
    (set) => ({
      showPartylistPhoto: false,
      setShowPartylistPhoto: (value) => set({ showPartylistPhoto: value }),

      showSenatorPhoto: true,
      setShowSenatorPhoto: (value) => set({ showSenatorPhoto: value }),

      showGovernorPhoto: true,
      setShowGovernorPhoto: (value) => set({ showGovernorPhoto: value }),

      showViceGovernorPhoto: true,
      setShowViceGovernorPhoto: (value) =>
        set({ showViceGovernorPhoto: value }),

      showHouseOfRepresentativeMemberPhoto: true,
      setShowHouseOfRepresentativeMemberPhoto: (value) =>
        set({ showHouseOfRepresentativeMemberPhoto: value }),

      showSangguaniangPanlalawiganPhoto: true,
      setShowSangguaniangPanlalawiganPhoto: (value) =>
        set({ showSangguaniangPanlalawiganPhoto: value }),

      toggleAllPhotos: (value: boolean) =>
        set({
          showPartylistPhoto: value,
          showSenatorPhoto: value,
          showGovernorPhoto: value,
          showViceGovernorPhoto: value,
          showHouseOfRepresentativeMemberPhoto: value,
          showSangguaniangPanlalawiganPhoto: value,
        }),
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
