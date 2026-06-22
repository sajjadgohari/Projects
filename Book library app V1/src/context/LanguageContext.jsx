// src/context/LanguageContext.jsx
import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    title: "Digital Library React",
    subtitle: "Book management and search project with React",
    searchPlaceholder: "Search book title...",
    favorites: "Favorites",
    noFavorites: "No books added yet.",
    noResults: "No books found.",
    moreInfo: "More Info",
    pages: "pages",
    footer: "Developed with ❤️ by Sajjad"
  },
  fr: {
    title: "Bibliothèque Numérique",
    subtitle: "Projet de gestion et de recherche de livres با React",
    searchPlaceholder: "Rechercher un titre de livre...",
    favorites: "Favoris",
    noFavorites: "Aucun livre ajouté pour le moment.",
    noResults: "Aucun livre trouvé.",
    moreInfo: "Plus d'infos",
    pages: "pages",
    footer: "Développé par Sajjad"
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en'); // پیش‌فرض انگلیسی

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div style={{ direction: 'ltr' }}> {/* هر دو زبان چپ‌چین هستند */}
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);