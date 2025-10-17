import { useTranslation } from "@/hooks/useTranslation";
import { Link } from "react-router-dom";
import LangToggle from "./ui/LangToggle.tsx";
import { AnimatedThemeToggler } from "./ui/ThemeToggle.tsx";
import TypewriterText from "./ui/TypewriterText.tsx";

export default function Header() {
  const { t } = useTranslation();
  return (
    <div className="sticky top-0 z-10 w-full px-20 py-8 flex items-center justify-between bg-zinc-100 dark:bg-zinc-800 shadow-lg">
      <Link to="/" className="text-3xl font-bold">
        <TypewriterText>Andréa DUHAMEL</TypewriterText>
      </Link>

      <div className="flex gap-6 items-center">
        <Link className="uppercase font-bold text-xl" to="/#home">
          <TypewriterText>{t.navbar.home}</TypewriterText>
        </Link>
        <Link className="uppercase font-bold text-xl" to="/#about">
          <TypewriterText>{t.navbar.about}</TypewriterText>
        </Link>
        <Link className="uppercase font-bold text-xl" to="/#projects">
          <TypewriterText>{t.navbar.projects}</TypewriterText>
        </Link>
        <Link className="uppercase font-bold text-xl" to="/#skills">
          <TypewriterText>{t.navbar.skills}</TypewriterText>
        </Link>
        <AnimatedThemeToggler className="cursor-pointer" />

        {/* Toggle langue */}
        <LangToggle />
      </div>
    </div>
  );
}
