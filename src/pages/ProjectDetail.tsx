import { Safari } from "@/components/ui/safari";
import { projects } from "@/data/projects.tsx";
import { skills, type Skill } from "@/data/skills.tsx";
import { useTranslation } from "@/hooks/useTranslation";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

// Fonction pour récupérer les compétences d'un projet
function getProjectSkills(skillIds: string[]): Skill[] {
  return skillIds
    .map((id) => skills.find((skill) => skill.id === id))
    .filter((skill): skill is Skill => skill !== undefined);
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const { t, lang } = useTranslation();

  // Trouver le projet correspondant
  const project = projects.find((p) => p.id === id);

  // Si le projet n'existe pas, afficher un message d'erreur
  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-zinc-900 flex items-center justify-center px-4 md:px-6">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {t.projectDetail.notFound}
          </h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 text-sm md:text-base"
          >
            <FaArrowLeft />
            {t.projectDetail.backToHome}
          </Link>
        </div>
      </div>
    );
  }

  const projectSkills = getProjectSkills(project.skillIds);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Bouton retour */}
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 mb-6 md:mb-8 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200 text-sm md:text-base"
        >
          <FaArrowLeft />
          {t.projectDetail.backToProjects}
        </Link>

        {/* Titre du projet */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">{project.title[lang]}</h1>

        {/* Image principale */}
        <div className="mb-8 md:mb-12">
          <Safari imageSrc={project.imageSrc} url={project.url} />
        </div>

        {/* Description complète */}
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl md:rounded-3xl shadow-lg p-4 md:p-6 lg:p-8 mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            {t.projectDetail.description}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base lg:text-lg">
            {project.description[lang]}
          </p>
        </div>

        {/* Technologies utilisées */}
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl md:rounded-3xl shadow-lg p-4 md:p-6 lg:p-8 mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            {t.projects.technologiesUsed}
          </h2>
          <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-4">
            {projectSkills.map((skill) => (
              <div
                key={skill.id}
                className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 bg-white dark:bg-zinc-700 rounded-lg shadow"
              >
                <div className={`${skill.colorClass} text-2xl md:text-3xl`}>
                  {skill.icon}
                </div>
                <span className="text-sm md:text-base lg:text-lg font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Liens */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 text-sm md:text-base lg:text-lg"
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
              className="flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-zinc-800 hover:bg-zinc-900 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-white font-semibold rounded-lg transition-colors duration-200 text-sm md:text-base lg:text-lg"
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
