import SkillsList from "@/components/Skills.tsx";
import { useTranslation } from "@/hooks/useTranslation.ts";
import { Mail } from "lucide-react";
import { Button } from "./ui/button.tsx";

export default function About() {
  const { t } = useTranslation();
  return (
    <div
      id="about"
      className="scroll-mt-10 flex mx-auto max-w-6xl flex-col gap-12 md:gap-20 pt-16 md:pt-30 pb-12 md:pb-20 px-4 md:px-6"
    >
      <div className="flex flex-col gap-3 md:gap-5 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl">{t.about.h3}</h2>
        <hr className="w-8 mx-auto h-1 rounded-2xl border-0 bg-zinc-800 dark:bg-zinc-400" />
        <p className="text-lg md:text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400">{t.about.p}</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 md:gap-20 justify-center">
        <div className="flex flex-col gap-6 md:gap-8 w-full lg:w-1/2">
          <h3 className="text-2xl md:text-3xl">{t.about.h4}</h3>
          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">{t.about.p2}</p>
          <Button
            size="lg"
            className="uppercase shadow-lg cursor-pointer text-sm md:text-base lg:text-xl px-6 md:px-10 py-4 md:py-6 flex items-center gap-2 md:gap-4 w-fit"
          >
            <a href="#contact" className="">
              {t.about.button}
            </a>{" "}
            <Mail className="animate-pulse size-4 md:size-6" strokeWidth={3} />
          </Button>
        </div>
        <div id="skills" className="scroll-mt-40 flex flex-col gap-6 md:gap-8 w-full lg:w-1/2">
          <h3 className="text-2xl md:text-3xl">{t.about.skills}</h3>
          <SkillsList />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 md:gap-20 justify-center">
        <div className="flex flex-col gap-6 md:gap-8 w-full lg:w-1/2">
          <h3 className="text-2xl md:text-3xl">{t.about.education.title}</h3>
          <div className="flex flex-col gap-4 md:gap-6">
            {t.about.education.items.map((item, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-3 md:pl-4">
                <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400">
                  {item.year}
                </p>
                <h4 className="text-lg md:text-xl font-semibold text-blue-600 dark:text-blue-400">
                  {item.degree}
                </h4>
                <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
                  {item.school}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-8 w-full lg:w-1/2">
          <h3 className="text-2xl md:text-3xl">{t.about.experience.title}</h3>
          <div className="flex flex-col gap-4 md:gap-6">
            {t.about.experience.items.map((item, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-3 md:pl-4">
                <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400">
                  {item.year}
                </p>
                <h4 className="text-lg md:text-xl font-semibold text-blue-600 dark:text-blue-400">
                  {item.position}
                </h4>
                <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
                  {item.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
