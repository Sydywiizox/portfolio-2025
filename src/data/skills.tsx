import type { JSX } from "react";
import {
  FaCss3Alt,
  FaDatabase,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiFirebase,
  SiMongodb,
  SiPrisma,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export type Skill = {
  id: string;
  name: string;
  icon: JSX.Element;
  colorClass: string; // ex: "text-orange-500"
};

// Liste des compétences
export const skills: Skill[] = [
  {
    id: "html",
    name: "HTML",
    icon: <FaHtml5 className="text-4xl" />,
    colorClass: "text-orange-500",
  },
  {
    id: "css",
    name: "CSS",
    icon: <FaCss3Alt className="text-4xl" />,
    colorClass: "text-blue-500",
  },
  {
    id: "js",
    name: "JavaScript",
    icon: <FaJs className="text-4xl" />,
    colorClass: "text-yellow-400",
  },
  {
    id: "ts",
    name: "TypeScript",
    icon: <SiTypescript className="text-4xl" />,
    colorClass: "text-blue-600",
  },
  {
    id: "react",
    name: "React",
    icon: <FaReact className="text-4xl" />,
    colorClass: "text-cyan-400",
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: <RiNextjsFill className="text-4xl" />,
    colorClass: "text-zinc-800 dark:text-zinc-100",
  },

  {
    id: "tailwind",
    name: "Tailwind",
    icon: <SiTailwindcss className="text-4xl" />,
    colorClass: "text-sky-400",
  },

  {
    id: "git",
    name: "Git",
    icon: <FaGitAlt className="text-4xl" />,
    colorClass: "text-orange-600",
  },
  {
    id: "prisma",
    name: "Prisma",
    icon: <SiPrisma className="text-4xl" />,
    colorClass: "text-cyan-800 dark:text-cyan-700",
  },
  {
    id: "zustand",
    name: "Zustand",
    icon: <img src="/zustand.png" alt="Zustand" />,
    colorClass: "text-cyan-800 dark:text-cyan-700 w-15",
  },
  {
    id: "responsive",
    name: "Responsive",
    icon: <MdDevices className="text-4xl" />,
    colorClass: "text-zinc-800 dark:text-zinc-100",
  },
  {
    id: "figma",
    name: "Figma",
    icon: <FaFigma className="text-4xl" />,
    colorClass: "text-fuchsia-600",
  },
  {
    id: "node",
    name: "Node.js",
    icon: <FaNodeJs className="text-4xl" />,
    colorClass: "text-green-500",
  },
  {
    id: "sql",
    name: "SQL",
    icon: <FaDatabase className="text-4xl" />,
    colorClass: "text-orange-500",
  },
  {
    id: "seo",
    name: "SEO",
    icon: <span className="text-4xl font-extrabold">SEO</span>,
    colorClass: "text-emerald-500",
  },

  {
    id: "back4app",
    name: "Back4App",
    icon: <span className="text-4xl font-extrabold">B4A</span>,
    colorClass: "text-slate-800 dark:text-slate-400",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: <SiMongodb className="text-4xl" />,
    colorClass: "text-green-600",
  },

  {
    id: "supabase",
    name: "Supabase",
    icon: <SiSupabase className="text-4xl" />,
    colorClass: "text-emerald-400",
  },
  {
    id: "firebase",
    name: "Firebase",
    icon: <SiFirebase className="text-4xl" />,
    colorClass: "text-orange-500",
  },
  {
    id: "vercel",
    name: "Vercel",
    icon: <SiVercel className="text-4xl" />,
    colorClass: "text-zinc-800 dark:text-zinc-100",
  },
  /*
  {
    id: "cpp",
    name: "C++",
    icon: <SiCplusplus className="text-4xl" />,
    colorClass: "text-blue-600",
  },
  {
    id: "php",
    name: "PHP",
    icon: <SiPhp className="text-4xl" />,
    colorClass: "text-indigo-400",
  },
  {
    id: "java",
    name: "Java",
    icon: <FaJava className="text-4xl" />,
    colorClass: "text-red-500",
  },*/
];
