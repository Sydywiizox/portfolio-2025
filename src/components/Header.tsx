import { useTranslation } from "@/hooks/useTranslation";
import { Link } from "react-router-dom";
import LangToggle from "./ui/LangToggle.tsx";
import { AnimatedThemeToggler } from "./ui/ThemeToggle.tsx";
import TypewriterText from "./ui/TypewriterText.tsx";

export default function Header() {
  const { t } = useTranslation();
  return (
    <header className="sticky top-0 z-10 w-full px-20 py-8 flex items-center justify-between bg-zinc-100/80 dark:bg-zinc-800/80 shadow-lg backdrop-blur-sm">
      <Link to="/" className="text-3xl font-bold">
        <TypewriterText>Andréa DUHAMEL</TypewriterText>
      </Link>

      <div className="flex gap-6 items-center">
        <a className="uppercase font-bold text-xl" href="/#home">
          <TypewriterText>{t.navbar.home}</TypewriterText>
        </a>
        <a className="uppercase font-bold text-xl" href="/#about">
          <TypewriterText>{t.navbar.about}</TypewriterText>
        </a>
        {/*<a className="uppercase font-bold text-xl" href="/#skills">
          <TypewriterText>{t.navbar.skills}</TypewriterText>
        </a>*/}
        <a className="uppercase font-bold text-xl" href="/#projects">
          <TypewriterText>{t.navbar.projects}</TypewriterText>
        </a>
        <a className="uppercase font-bold text-xl" href="/#contact">
          <TypewriterText>{t.navbar.contact}</TypewriterText>
        </a>
        <AnimatedThemeToggler className="cursor-pointer" />

        {/* Toggle langue */}
        <LangToggle />
      </div>
    </header>
  );
}
