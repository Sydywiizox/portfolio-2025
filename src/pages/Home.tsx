import About from "@/components/About.tsx";
import Contact from "@/components/Contact.tsx";
import Footer from "@/components/Footer.tsx";
import Hero from "@/components/Hero.tsx";
import ProjectsList from "@/components/Projects.tsx";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white transition-colors duration-300">
      <Hero />
      <About />
      <ProjectsList />
      <Contact />
      <Footer />
    </div>
  );
}
