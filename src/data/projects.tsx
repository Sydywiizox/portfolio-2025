export type Project = {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  imageSrc: string;
  skillIds: string[]; // IDs des compétences utilisées
  demoLink?: string;
  githubLink?: string;
};

// Liste des projets
export const projects: Project[] = [
  {
    id: "project-1",
    title: {
      fr: "Mon Premier Projet",
      en: "My First Project",
    },
    description: {
      fr: "Une application web moderne construite avec React et TypeScript. Ce projet démontre mes compétences en développement frontend avec une interface utilisateur élégante et responsive.",
      en: "A modern web application built with React and TypeScript. This project demonstrates my frontend development skills with an elegant and responsive user interface.",
    },
    imageSrc: "https://pbs.twimg.com/media/G3Ti-_pWwAED-Rh.jpg",
    skillIds: ["react", "ts", "tailwind", "firebase"],
    demoLink: "https://demo-projet-1.com",
    githubLink: "https://github.com/username/project-1",
  },
  {
    id: "project-2",
    title: {
      fr: "Application E-commerce",
      en: "E-commerce Application",
    },
    description: {
      fr: "Une plateforme e-commerce complète avec gestion des produits, panier d'achat et système de paiement. Utilise Next.js pour l'optimisation SEO et les performances.",
      en: "A complete e-commerce platform with product management, shopping cart, and payment system. Uses Next.js for SEO optimization and performance.",
    },
    imageSrc: "https://pbs.twimg.com/media/G3Ti-_pWwAED-Rh.jpg",
    skillIds: ["nextjs", "ts", "tailwind", "prisma", "supabase"],
    demoLink: "https://demo-projet-2.com",
    githubLink: "https://github.com/username/project-2",
  },
  {
    id: "project-3",
    title: {
      fr: "Dashboard Analytics",
      en: "Analytics Dashboard",
    },
    description: {
      fr: "Un tableau de bord interactif pour visualiser des données analytiques en temps réel. Intégration de graphiques et statistiques avec une interface intuitive.",
      en: "An interactive dashboard for visualizing real-time analytics data. Integration of charts and statistics with an intuitive interface.",
    },
    imageSrc: "https://pbs.twimg.com/media/G3Ti-_pWwAED-Rh.jpg",
    skillIds: ["react", "ts", "tailwind", "node", "mongodb"],
    githubLink: "https://github.com/username/project-3",
  },
];
