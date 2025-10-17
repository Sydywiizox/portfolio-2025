import { translations, type Language } from "@/translations";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LanguageStore {
  lang: Language;
  translation: typeof translations.fr;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set, get) => ({
      lang: "fr",
      translation: translations.fr,
      setLang: (lang: Language) =>
        set({
          lang,
          translation: translations[lang],
        }),
      toggleLang: () => {
        const currentLang = get().lang;
        const newLang = currentLang === "fr" ? "en" : "fr";
        set({
          lang: newLang,
          translation: translations[newLang],
        });
      },
    }),
    {
      name: "language-storage", // nom de la clé dans localStorage
      partialize: (state) => ({ lang: state.lang }), // ne persiste que la langue
      onRehydrateStorage: () => (state) => {
        // Met à jour la translation après la réhydratation
        if (state) {
          state.translation = translations[state.lang];
        }
      },
    }
  )
);
