// src/i18n.ts
export type Language = "fr" | "en";

type Navbar = {
  home: string;
  about: string;
  projects: string;
  skills: string;
};

type Translation = {
  language: string;
  h1: string;
  h2: string;
  navbar: Navbar;
};

type Translations = {
  [key in Language]: Translation;
};

export const translations: Translations = {
  fr: {
    language: "Français",
    h1: `Bienvenue sur mon portfolio`,
    h2: `Je suis Andréa DUHAMEL, développeur web passionné par la création de sites et d'applications web.`,
    navbar: {
      home: "Accueil",
      about: "A propos",
      projects: "Projets",
      skills: "Competences",
    },
  },
  en: {
    language: "English",
    h1: `Welcome to my portfolio`,
    h2: `I'm Andréa DUHAMEL, a passionate web developer who creates websites and applications.`,
    navbar: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
    },
  },
};
