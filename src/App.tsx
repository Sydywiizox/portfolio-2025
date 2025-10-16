import { useState } from "react";
import { translations } from "./translations";
import { AnimatedThemeToggler } from "./components/ui/ThemeToggle";
import LangToggle from "./components/ui/LangToggle";
import TypewriterText from "./components/ui/TypewriterText";
import { Safari } from "./components/ui/safari";
import { motion } from "framer-motion";

export default function App() {
  const [lang, setLang] = useState<"fr" | "en">(
    (localStorage.getItem("lang") as "fr" | "en") || "fr"
  );
  const toggleLang = () => {
    setLang(lang === "fr" ? "en" : "fr");
    localStorage.setItem("lang", lang === "fr" ? "en" : "fr");
  };
  const t = translations[lang];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <div className="sticky top-0 z-10 w-full max-w-3xl p-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">
          <TypewriterText>{t.language}</TypewriterText>
        </h1>

        <div className="mt-4 flex gap-2">
          <AnimatedThemeToggler />

          {/* Toggle langue */}
          <LangToggle lang={lang} toggleLang={toggleLang} />
        </div>
      </div>

      <motion.p
        className="mt-6 max-w-xl text-center whitespace-pre-line"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {t.texte}
      </motion.p>

      <div className="w-full  max-w-md mt-40">
        <Safari
          imageSrc="https://pbs.twimg.com/media/G3Ti-_pWwAED-Rh.jpg"
          url="https://dpm.lol/CG%20Sparkbringer-FFL"
        />
      </div>
    </div>
  );
}
