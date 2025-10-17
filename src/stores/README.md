# Store Zustand pour la gestion des langues

## Utilisation

### Import du hook de traduction

```tsx
import { useTranslation } from "@/hooks/useTranslation";

// Dans votre composant
const { t, lang } = useTranslation();
```

### Import des actions de langue

```tsx
import { useLanguageActions } from "@/hooks/useTranslation";

// Dans votre composant
const { setLang, toggleLang } = useLanguageActions();
```

### Import direct du store (si nécessaire)

```tsx
import { useLanguageStore } from "@/stores/useLanguageStore";

// Dans votre composant
const { lang, translation, setLang, toggleLang } = useLanguageStore();
```

## Exemples d'utilisation

### Afficher du texte traduit

```tsx
const MyComponent = () => {
  const { t } = useTranslation();

  return <h1>{t.navbar.home}</h1>;
};
```

### Changer de langue

```tsx
const LanguageSwitcher = () => {
  const { lang } = useTranslation();
  const { setLang, toggleLang } = useLanguageActions();

  return (
    <div>
      <p>Langue actuelle : {lang}</p>
      <button onClick={toggleLang}>Basculer</button>
      <button onClick={() => setLang("fr")}>Français</button>
      <button onClick={() => setLang("en")}>English</button>
    </div>
  );
};
```

## Fonctionnalités

- ✅ Persistance automatique dans localStorage
- ✅ Synchronisation des traductions avec la langue
- ✅ Hooks personnalisés pour une utilisation facile
- ✅ Support TypeScript complet
- ✅ Réhydratation automatique au chargement de la page
