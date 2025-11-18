import { useTranslation } from "@/hooks/useTranslation";
import { Home, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 flex items-center justify-center px-4 md:px-6">
      <div className="max-w-2xl w-full text-center">
        {/* Grande icône 404 */}
        <div className="mb-8 md:mb-12">
          <div className="relative inline-block">
            <h1 className="text-[120px] md:text-[180px] lg:text-[220px] font-black text-zinc-200 dark:text-zinc-800 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="size-20 md:size-32 text-zinc-400 dark:text-zinc-600 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Message d'erreur */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            {t.notFound.title}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400 px-4">
            {t.notFound.message}
          </p>
        </div>

        {/* Bouton retour */}
        <Link
          to="/"
          className="inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-base md:text-lg"
        >
          <Home className="size-5 md:size-6" />
          {t.notFound.button}
        </Link>

        {/* Décoration */}
        <div className="mt-12 md:mt-16 flex justify-center gap-2">
          <div className="size-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: "0s" }}></div>
          <div className="size-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          <div className="size-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
    </div>
  );
}
