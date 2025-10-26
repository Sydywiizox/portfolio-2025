export type Project = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  skillIds: string[]; // IDs des compétences utilisées
  demoLink?: string;
  githubLink?: string;
};

// Liste des projets (exemple)
export const projects: Project[] = [
  {
    id: "project-1",
    title: "Mon Premier Projet",
    description:
      "Une application web moderne construite avec React et TypeScript. Ce projet démontre mes compétences en développement frontend avec une interface utilisateur élégante et responsive.",
    imageSrc: "https://pbs.twimg.com/media/G3Ti-_pWwAED-Rh.jpg",
    skillIds: ["react", "ts", "tailwind", "firebase"],
    demoLink: "https://demo-projet-1.com",
    githubLink: "https://github.com/username/project-1",
  },
  {
    id: "project-2",
    title: "Application E-commerce",
    description:
      "Une plateforme e-commerce complète avec gestion des produits, panier d'achat et système de paiement. Utilise Next.js pour l'optimisation SEO et les performances.",
    imageSrc: "https://pbs.twimg.com/media/G3Ti-_pWwAED-Rh.jpg",
    skillIds: ["nextjs", "ts", "tailwind", "prisma", "supabase"],
    demoLink: "https://demo-projet-2.com",
    githubLink: "https://github.com/username/project-2",
  },
  {
    id: "project-3",
    title: "Dashboard Analytics",
    description:
      "Un tableau de bord interactif pour visualiser des données analytiques en temps réel. Intégration de graphiques et statistiques avec une interface intuitive.",
    imageSrc: "https://pbs.twimg.com/media/G3Ti-_pWwAED-Rh.jpg",
    skillIds: ["react", "ts", "tailwind", "node", "mongodb"],
    githubLink: "https://github.com/username/project-3",
  },
];
