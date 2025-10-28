export type Language = "fr" | "en";

type Navbar = {
  home: string;
  about: string;
  projects: string;
  skills: string;
  contact: string;
};

type Hero = {
  h1: string;
  h2: string;
  button: string;
};

type About = {
  h3: string;
  p: string;
  h4: string;
  p2: string;
  button: string;
  skills: string;
  education: {
    title: string;
    items: {
      year: string;
      degree: string;
      school: string;
    }[];
  };
  experience: {
    title: string;
    items: {
      year: string;
      position: string;
      company: string;
    }[];
  };
};

type Projects = {
  h3: string;
  p: string;
  technologiesUsed: string;
  viewSite: string;
  sourceCode: string;
};

type Contact = {
  h3: string;
  p: string;
  form: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    requiredMessage: string;
  };
  toast: {
    loading: string;
    success: string;
    error: string;
  };
};

type Footer = {
  rights: string;
};

type Translation = {
  navbar: Navbar;
  hero: Hero;
  about: About;
  projects: Projects;
  contact: Contact;
  footer: Footer;
};

type Translations = Record<Language, Translation>;

export const translations: Translations = {
  fr: {
    navbar: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
    },
    hero: {
      h1: "Bienvenue sur mon portfolio",
      h2: "Je suis Andréa DUHAMEL, développeur web passionné par la création de sites et d'applications web.",
      button: "En savoir plus",
    },
    about: {
      h3: "À propos de moi",
      p: "Ici vous trouverez un peu de moi, un developpeur web passionné par la création de sites et d'applications web.",
      h4: "Apprenez à me connaître !",
      p2: `Je suis un développeur web spécialisé dans le Frontend, construisant et gérant la partie visible des sites et applications web pour garantir la réussite du produit final.  
Découvrez certains de mes travaux dans la section Projets.  
J'aime aussi partager du contenu lié au développement web afin d'aider d'autres personnes de la communauté.  
N'hésitez pas à me suivre sur LinkedIn et Instagram, où je publie du contenu utile sur le développement et la programmation.  
Je suis ouvert à de nouvelles opportunités professionnelles où je peux contribuer, apprendre et évoluer.  
Si vous avez une opportunité correspondant à mes compétences et mon expérience, n'hésitez pas à me contacter.`,
      button: "Me contacter",
      skills: "Mes compétences",
      education: {
        title: "Mes formations",
        items: [
          {
            year: "2025 (2 mois)",
            degree: "React en Entreprise",
            school: "ViDev",
          },
          {
            year: "2025 (2 semaines)",
            degree: "Tailwind CSS v4",
            school: "Ecole du Web",
          },
          {
            year: "2024 - 2025",
            degree: "Développeur Web",
            school: "OpenClassrooms",
          },
          {
            year: "2019 - 2021",
            degree: "DUT Informatique",
            school: "IUT d'Arles (Académie Aix-Marseille)",
          },
        ],
      },
      experience: {
        title: "Mes expériences",
        items: [
          {
            year: "2021 (3 mois)",
            position: "Développeur web (Stage fin de DUT)",
            company: "Agence Easy - ELS Conseil",
          },
        ],
      },
    },
    projects: {
      h3: "Mes projets",
      p: "Ici sont affichés mes projets. Vous pouvez cliquer sur un projet pour en savoir plus.",
      technologiesUsed: "Technologies utilisées",
      viewSite: "Voir le site",
      sourceCode: "Code source",
    },
    contact: {
      h3: "Me contacter",
      p: "N'hésitez pas à me contacter pour toute question ou opportunité professionnelle.",
      form: {
        name: "Nom",
        namePlaceholder: "Votre nom",
        email: "Email",
        emailPlaceholder: "votre@email.com",
        subject: "Sujet",
        subjectPlaceholder: "Sujet de votre message",
        message: "Message",
        messagePlaceholder: "Votre message...",
        submit: "Envoyer",
        requiredMessage: "Champs obligatoires",
      },
      toast: {
        loading: "Envoi en cours...",
        success: "Message envoyé avec succès !",
        error: "Erreur lors de l'envoi du message.",
      },
    },
    footer: {
      rights: "Tous droits réservés.",
    },
  },

  en: {
    navbar: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      h1: "Welcome to my portfolio",
      h2: "I'm Andréa DUHAMEL, a passionate web developer who creates websites and applications.",
      button: "Learn more",
    },
    about: {
      h3: "About me",
      p: "I'm Andréa DUHAMEL, a passionate web developer who loves creating websites and web applications.",
      h4: "Get to know me!",
      p2: `I'm a Frontend-focused web developer building and managing the front end of websites and web applications that contribute to the overall success of the product.  
Check out some of my work in the Projects section.  
I also enjoy sharing content related to what I've learned over the years in web development to help others in the dev community.  
Feel free to connect or follow me on LinkedIn and Instagram, where I post useful content about web development and programming.  
I'm open to job opportunities where I can contribute, learn, and grow.  
If you have a good opportunity that matches my skills and experience, don't hesitate to contact me.`,
      button: "Contact me",
      skills: "My skills",
      education: {
        title: "My education",
        items: [
          {
            year: "2025 (2 months)",
            degree: "React in Company",
            school: "ViDev",
          },
          {
            year: "2025 (2 weeks)",
            degree: "Tailwind CSS v4",
            school: "Ecole du Web",
          },
          {
            year: "2024 - 2025",
            degree: "Web Developer",
            school: "OpenClassrooms",
          },
          {
            year: "2019 - 2021",
            degree: "DUT Computer Science",
            school: "IUT of Arles (Aix-Marseille Academy)",
          },
        ],
      },
      experience: {
        title: "My experiences",
        items: [
          {
            year: "2021 (3 months)",
            position: "Web Developer (DUT Internship)",
            company: "Agence Easy - ELS Conseil",
          },
        ],
      },
    },
    projects: {
      h3: "My projects",
      p: "Here are my projects. You can click on one to learn more.",
      technologiesUsed: "Technologies used",
      viewSite: "View site",
      sourceCode: "Source code",
    },
    contact: {
      h3: "Contact me",
      p: "Feel free to contact me for any questions or professional opportunities.",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        subject: "Subject",
        subjectPlaceholder: "Subject of your message",
        message: "Message",
        messagePlaceholder: "Your message...",
        submit: "Send",
        requiredMessage: "Required fields",
      },
      toast: {
        loading: "Sending...",
        success: "Message sent successfully!",
        error: "Error sending message.",
      },
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};
