import { useLanguageStore } from "@/stores/useLanguageStore";

// Hook personnalisé pour accéder facilement aux traductions
export const useTranslation = () => {
  const { translation, lang } = useLanguageStore();
  return { t: translation, lang };
};

// Hook personnalisé pour les actions de langue
export const useLanguageActions = () => {
  const { setLang, toggleLang } = useLanguageStore();
  return { setLang, toggleLang };
};
