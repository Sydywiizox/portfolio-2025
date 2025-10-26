import { useTranslation } from "@/hooks/useTranslation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import LangToggle from "./ui/LangToggle.tsx";
import { AnimatedThemeToggler } from "./ui/ThemeToggle.tsx";
import TypewriterText from "./ui/TypewriterText.tsx";

export default function Header() {
  const { t } = useTranslation();
  return (
    <header className="sticky top-0 z-10 w-full px-20 py-8 flex items-center justify-between bg-zinc-100/80 dark:bg-zinc-800/80 shadow-lg backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <Link to="/" className="text-3xl font-bold">
          <TypewriterText>Andréa DUHAMEL</TypewriterText>
        </Link>

        {/* Séparation verticale */}
        <div className="h-8 w-px bg-zinc-400 dark:bg-zinc-600"></div>

        {/* Liens sociaux */}
        <div className="flex gap-3">
          <a
            href="https://github.com/Sydywiizox"
            className="text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/andr%C3%A9a-duhamel-9538ab35b/"
            className="text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>

      <div className="flex gap-6 items-center">
        <a
          className="uppercase font-bold text-xl hover:text-blue-600 dark:hover:text-blue-400"
          href="/#home"
        >
          <TypewriterText>{t.navbar.home}</TypewriterText>
        </a>
        <a
          className="uppercase font-bold text-xl hover:text-blue-600 dark:hover:text-blue-400"
          href="/#about"
        >
          <TypewriterText>{t.navbar.about}</TypewriterText>
        </a>
        {/*<a className="uppercase font-bold text-xl hover:text-blue-600 dark:hover:text-blue-400" href="/#skills">
          <TypewriterText>{t.navbar.skills}</TypewriterText>
        </a>*/}
        <a
          className="uppercase font-bold text-xl hover:text-blue-600 dark:hover:text-blue-400"
          href="/#projects"
        >
          <TypewriterText>{t.navbar.projects}</TypewriterText>
        </a>
        <a
          className="uppercase font-bold text-xl hover:text-blue-600 dark:hover:text-blue-400"
          href="/#contact"
        >
          <TypewriterText>{t.navbar.contact}</TypewriterText>
        </a>
        <AnimatedThemeToggler className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400" />

        {/* Toggle langue */}
        <LangToggle />
      </div>
    </header>
  );
}
