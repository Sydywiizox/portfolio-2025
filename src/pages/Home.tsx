import About from "@/components/About.tsx";
import Hero from "@/components/Hero.tsx";
import { Safari } from "@/components/ui/safari";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white transition-colors duration-300">
      <Hero />
      <About />

      <div className="w-full  max-w-md mt-40">
        <Safari
          imageSrc="https://pbs.twimg.com/media/G3Ti-_pWwAED-Rh.jpg"
          url="https://dpm.lol/CG%20Sparkbringer-FFL"
        />
      </div>
    </div>
  );
}
