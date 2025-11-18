import { useTranslation } from "@/hooks/useTranslation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import LangToggle from "./ui/LangToggle.tsx";
import { AnimatedThemeToggler } from "./ui/ThemeToggle.tsx";
import TypewriterText from "./ui/TypewriterText.tsx";

export default function Header() {
  const { t } = useTranslation();
  return (
    <header className="sticky top-0 z-20 w-full px-4 md:px-6 xl:px-20 py-3 md:py-4 xl:py-5 flex items-center justify-between bg-zinc-100/80 dark:bg-zinc-800/80 shadow-lg backdrop-blur-sm">
      <div className="flex items-center gap-2 lg:gap-4">
        <a
          href="/#home"
          className="text-lg md:text-xl xl:text-3xl font-bold flex gap-2 lg:gap-3 items-center"
        >
          <img
            src="/me.png"
            alt="andrea duhamel"
            className="size-10 md:size-11 xl:size-15 rounded-full object-cover"
          />

          <span className="hidden sm:block">
            <TypewriterText>Andréa DUHAMEL</TypewriterText>
          </span>
        </a>

        {/* Séparation verticale */}
        <div className="hidden lg:block h-8 w-px bg-zinc-400 dark:bg-zinc-600"></div>

        {/* Liens sociaux */}
        <div className="hidden lg:flex gap-2 xl:gap-3">
          <a
            href="https://github.com/Sydywiizox"
            className="text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-lg xl:text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/andr%C3%A9a-duhamel-9538ab35b/"
            className="text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-lg xl:text-2xl" />
          </a>
        </div>
      </div>

      <div className="flex gap-2 md:gap-3 xl:gap-6 items-center text-xs md:text-sm xl:text-xl whitespace-nowrap">
        <a
          className="hidden lg:block uppercase font-bold hover:text-blue-600 dark:hover:text-blue-400"
          href="/#home"
        >
          <TypewriterText>{t.navbar.home}</TypewriterText>
        </a>
        <a
          className="hidden md:block uppercase font-bold hover:text-blue-600 dark:hover:text-blue-400"
          href="/#about"
        >
          <TypewriterText>{t.navbar.about}</TypewriterText>
        </a>
        {/*<a className="uppercase font-bold hover:text-blue-600 dark:hover:text-blue-400" href="/#skills">
          <TypewriterText>{t.navbar.skills}</TypewriterText>
        </a>*/}
        <a
          className="uppercase font-bold hover:text-blue-600 dark:hover:text-blue-400"
          href="/#projects"
        >
          <TypewriterText>{t.navbar.projects}</TypewriterText>
        </a>
        <a
          className="uppercase font-bold hover:text-blue-600 dark:hover:text-blue-400"
          href="/#contact"
        >
          <TypewriterText>{t.navbar.contact}</TypewriterText>
        </a>
        <AnimatedThemeToggler className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 shrink-0" />

        {/* Toggle langue */}
        <LangToggle />
      </div>
    </header>
  );
}
