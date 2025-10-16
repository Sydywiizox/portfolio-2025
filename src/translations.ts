// src/i18n.ts
export type Language = "fr" | "en";

type Translations = {
  [key in Language]: Record<string, string>;
};

export const translations: Translations = {
  fr: {
    language: "Français",
    texte: `Bonjour ! Je m'appelle Alex Dupont, passionné par le développement web et les nouvelles technologies.
Depuis plus de 5 ans, je crée des sites et applications performants, alliant design moderne et expérience utilisateur fluide.
Curieux et autonome, j’aime relever de nouveaux défis et apprendre constamment pour améliorer mes compétences.
Quand je ne code pas, je me consacre à la photographie et aux voyages.`
  },
  en: {
    language: "English",
    texte: `Hello! My name is Alex Dupont, passionate about web development and emerging technologies.
For over 5 years, I have been building high-performance websites and applications, combining modern design with smooth user experiences.
Curious and self-motivated, I enjoy tackling new challenges and constantly learning to improve my skills.
When I'm not coding, I spend my time on photography and traveling.`
  },
};
