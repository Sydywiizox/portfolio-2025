import { useTranslation } from "@/hooks/useTranslation";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-white dark:bg-zinc-900 shadow-lg py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Liens sociaux */}
          <div className="flex gap-6 items-center">
            <a
              href="https://github.com/Sydywiizox"
              className="text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/andr%C3%A9a-duhamel-9538ab35b/"
              className="text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="mailto:andrea_duhamel@outlook.fr"
              className="text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="Email"
            >
              <FaEnvelope className="text-3xl" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} Andréa DUHAMEL. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
