import { useTranslation } from "@/hooks/useTranslation.ts";
import { ArrowDown } from "lucide-react";
import StickerPeel from "./StickerPeel.tsx";
import { Button } from "./ui/button.tsx";
import { Highlighter } from "./ui/highlighter.tsx";

export default function Hero() {
  const { t, lang } = useTranslation();
  return (
    <div
      id="home"
      className="scroll-mt-25 w-full h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] bg-white dark:bg-zinc-900 shadow-lg flex flex-col gap-4 md:gap-6 items-center justify-center px-4"
    >
      <div className="max-w-[80rem] flex flex-col gap-6 md:gap-12 items-center justify-center">
        <StickerPeel
          imageSrc={"/react.png"}
          width={150}
          rotate={0}
          peelBackHoverPct={20}
          peelBackActivePct={40}
          shadowIntensity={0}
          lightingIntensity={0.1}
          initialPosition={{ x: 200, y: -120 }}
          className="z-15! hidden md:block"
        />
        <img
          src="/me.png"
          alt=""
          className="size-32 md:size-40 lg:size-50 rounded-full object-cover"
        />
        <h1 className="font-bold text-center text-3xl md:text-4xl lg:text-5xl">
          {t.hero.h1.split("portfolio")[0]}
          <Highlighter key={lang} action="highlight" color="#FD6C9E ">
            <span className="text-black p-1 md:p-2">Portfolio</span>
          </Highlighter>
        </h1>
        <span className="text-zinc-800 text-lg md:text-2xl lg:text-3xl dark:text-zinc-400 font-bold text-center max-w-full md:max-w-260 px-4">
          {t.hero.h2.split("Andréa DUHAMEL")[0]}{" "}
          <Highlighter key={lang} action="highlight" color="#87CEFA">
            <span className="text-black p-1 md:p-2">Andréa DUHAMEL</span>
          </Highlighter>{" "}
          {t.hero.h2.split("Andréa DUHAMEL")[1]}
        </span>
        <Button
          size="lg"
          className="uppercase shadow-lg cursor-pointer text-sm md:text-base lg:text-xl px-6 md:px-10 py-4 md:py-6 flex items-center gap-2 md:gap-4"
        >
          <a href="#about" className="">
            {t.hero.button}
          </a>{" "}
          <ArrowDown className="animate-bounce size-4 md:size-6" strokeWidth={3} />
        </Button>
      </div>
    </div>
  );
}
