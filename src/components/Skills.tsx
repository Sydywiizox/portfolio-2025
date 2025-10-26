import { skills } from "@/data/skills.tsx";

export default function SkillsList() {
  return (
    <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="flex flex-col items-center justify-center gap-2 p-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200"
        >
          <div className={skill.colorClass}>{skill.icon}</div>
          <span className="font-semibold text-lg">{skill.name}</span>
        </div>
      ))}
    </div>
  );
}
