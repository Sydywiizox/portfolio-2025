import { skills } from "@/data/skills.tsx";
import { useTranslation } from "@/hooks/useTranslation";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function SkillsList() {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const displayedSkills = showAll ? skills : skills.slice(0, 8);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {displayedSkills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center justify-center gap-2 p-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200"
          >
            <div className={skill.colorClass}>{skill.icon}</div>
            <span className="font-semibold text-lg">{skill.name}</span>
          </div>
        ))}
      </div>

      {skills.length > 8 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mx-auto flex items-center gap-2 px-6 py-3 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-zinc-900 dark:text-zinc-100 font-semibold rounded-lg transition-colors duration-200"
        >
          {showAll ? (
            <>
              <Minus className="size-5" />
              {t.about.showLess}
            </>
          ) : (
            <>
              <Plus className="size-5" />
              {t.about.showMore}
            </>
          )}
        </button>
      )}
    </div>
  );
}
