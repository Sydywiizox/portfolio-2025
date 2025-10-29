export type Project = {
  id: string;
  url: string;
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
    url: "https://ffleague.fr",
    title: {
      fr: "FFLeague",
      en: "FFLeague",
    },
    description: {
      fr: "Plateforme web pour une ligue e-sport (League of Legends) gérant joueurs, équipes, tournois et planning. Construction côté serveur avec Next.js (App Router) pour les performances, TypeScript pour la typage, Tailwind CSS pour le responsive et l’interface, Prisma (PostgreSQL) pour la gestion des données utilisateurs/équipes/matchs/tournois. Déploiement sur Vercel. Utilisation de NextAuth pour l’authentification Discord et de Shadcn UI pour les composants.",
      en: "Web platform for an esports league (League of Legends) managing players, teams, tournaments, and schedules. Built with Next.js (App Router) for performance, TypeScript for strong typing, Tailwind CSS for responsive UI, and Prisma (PostgreSQL) for data management across users/teams/matches/tournaments. Deployed on Vercel. Uses NextAuth for Discord authentication and Shadcn UI for accessible components.",
    },
    imageSrc: "/ffl.png",
    skillIds: ["nextjs", "ts", "tailwind", "prisma", "vercel", "shadcn"],
    demoLink: "https://ffleague.fr",
  },
  {
    id: "project-2",
    url: "https://crazeeburger.fr",
    title: {
      fr: "Crazee Burger",
      en: "Crazee Burger",
    },
    description: {
      fr: "Un site de commande de burger avec gestion des produits, panier d'achat et système de paiement. Utilise React pour l'interface utilisateur et Node.js pour le backend.",
      en: "A burger ordering site with product management, shopping cart, and payment system. Uses React for the user interface and Node.js for the backend.",
    },
    imageSrc: "/crazee.png",
    skillIds: [
      "react",
      "ts",
      "tailwind",
      "vercel",
      "firebase",
      "zustand",
      "figma",
    ],
    demoLink: "https://crazee-burger-silk.vercel.app",
    githubLink: "https://github.com/Sydywiizox/crazee-burger",
  },
  {
    id: "project-3",
    url: "https://mon-vieux-grimoire.fr",
    title: {
      fr: "Mon vieux grimoire",
      en: "My old grimoire",
    },
    description: {
      fr: "Un site de gestion de grimoire avec gestion des produits, panier d'achat et système de paiement. Utilise MongoDB pour la base de données et Node.js pour le backend.",
      en: "A grimoire management site with product management, shopping cart, and payment system. Uses MongoDB for the database and Node.js for the backend.",
    },
    imageSrc: "/mvg.png",
    skillIds: ["mongodb", "node"],
    demoLink: "https://mon-vieux-grimoire-oc.vercel.app/",
    githubLink:
      "https://github.com/Sydywiizox/mon-vieux-grimoire/tree/cloudinary",
  },
];
