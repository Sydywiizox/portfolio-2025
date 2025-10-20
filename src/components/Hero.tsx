import { useTranslation } from "@/hooks/useTranslation.ts";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button.tsx";
import { Highlighter } from "./ui/highlighter.tsx";

export default function Hero() {
  const { t, lang } = useTranslation();

  return (
    <div
      id="home"
      className="scroll-mt-25 w-full h-[calc(100vh-100px)]  bg-white dark:bg-zinc-900 shadow-lg flex flex-col gap-6 items-center justify-center"
    >
      <div className="max-w-[80rem] flex flex-col gap-12 items-center justify-center">
        <h1 className="font-bold text-center">
          {t.hero.h1.split("portfolio")[0]}
          <Highlighter key={lang} action="highlight" color="#FD6C9E ">
            <span className="text-black p-2">Portfolio</span>
          </Highlighter>
        </h1>
        <span className="text-zinc-800 text-3xl dark:text-zinc-400 font-bold text-center max-w-260">
          {t.hero.h2.split("Andréa DUHAMEL")[0]}{" "}
          <Highlighter key={lang} action="highlight" color="#87CEFA">
            <span className="text-black p-2">Andréa DUHAMEL</span>
          </Highlighter>{" "}
          {t.hero.h2.split("Andréa DUHAMEL")[1]}
        </span>
        <Button
          size="lg"
          className="uppercase shadow-lg cursor-pointer text-xl px-10 py-6 flex items-center gap-4"
        >
          <a href="#projects" className="">
            {t.hero.button}
          </a>{" "}
          <ArrowDown className="animate-bounce size-6" strokeWidth={3} />
        </Button>
      </div>
    </div>
  );
}
