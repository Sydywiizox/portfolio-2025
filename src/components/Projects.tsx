import { Safari } from "@/components/ui/safari";
import { projects, type Project } from "@/data/projects.tsx";
import { skills, type Skill } from "@/data/skills.tsx";
import { useTranslation } from "@/hooks/useTranslation";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

// Fonction pour récupérer les compétences d'un projet
function getProjectSkills(skillIds: string[]): Skill[] {
  return skillIds
    .map((id) => skills.find((skill) => skill.id === id))
    .filter((skill): skill is Skill => skill !== undefined);
}

// Composant Project individuel
function Project({ project }: { project: Project }) {
  const { t, lang } = useTranslation();
  const projectSkills = getProjectSkills(project.skillIds);

  return (
    <div className="bg-zinc-100 dark:bg-zinc-800 flex flex-col lg:flex-row gap-5 rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
      {/* Image avec Safari */}
      <div className="w-full lg:max-w-1/2 mx-auto p-4 md:p-6 flex items-center justify-center">
        <Safari imageSrc={project.imageSrc} url={project.url} />
      </div>

      {/* Contenu */}
      <div className="p-4 md:p-6 lg:p-8 w-full lg:w-1/2 flex flex-col">
        <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{project.title[lang]}</h4>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4 md:mb-6 leading-relaxed line-clamp-3 text-sm md:text-base">
          {project.description[lang]}
        </p>

        {/* Compétences utilisées */}
        <div className="mb-4 md:mb-6 flex-1">
          <h5 className="text-xs md:text-sm font-semibold uppercase text-zinc-500 dark:text-zinc-400 mb-2 md:mb-3">
            {t.projects.technologiesUsed}
          </h5>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {projectSkills.map((skill) => (
              <div
                key={skill.id}
                className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1.5 md:py-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg"
              >
                <div className={`${skill.colorClass} text-lg md:text-2xl`}>
                  {skill.icon}
                </div>
                <span className="text-xs md:text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Liens */}
        <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
          <Link
            to={`/project/${project.id}`}
            className="flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-black dark:text-white font-semibold rounded-lg transition-colors duration-200 text-sm md:text-base"
          >
            {t.projects.viewMore}
          </Link>
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 text-sm md:text-base"
            >
              <FaExternalLinkAlt />
              {t.projects.viewSite}
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-zinc-800 hover:bg-zinc-900 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-white font-semibold rounded-lg transition-colors duration-200 text-sm md:text-base"
            >
              <FaGithub />
              {t.projects.sourceCode}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Composant ProjectsList
export default function ProjectsList() {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="scroll-mt-25 w-full bg-white dark:bg-zinc-900 shadow-lg px-4 md:px-6 py-12 md:py-20"
    >
      {/* En-tête */}
      <div className="flex flex-col gap-3 md:gap-5 text-center mb-8 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl">{t.projects.h3}</h2>
        <hr className="w-8 mx-auto h-1 rounded-2xl border-0 bg-zinc-800 dark:bg-zinc-400" />
        <p className="text-lg md:text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400 px-4">
          {t.projects.p}
        </p>
      </div>

      {/* Grille de projets */}
      <div className="grid grid-cols-1 gap-6 md:gap-12 max-w-7xl mx-auto">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
