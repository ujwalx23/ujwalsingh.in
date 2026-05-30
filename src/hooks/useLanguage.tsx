import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations, TranslationDict } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (keyPath: string) => any;
  dict: TranslationDict;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    const saved = localStorage.getItem("ujwal_language");
    return (saved as Language) || "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("ujwal_language", lang);
  };

  const t = (keyPath: string): any => {
    const parts = keyPath.split(".");
    let current: any = translations[language];
    for (const part of parts) {
      if (current && current[part] !== undefined) {
        current = current[part];
      } else {
        // Fallback to English dictionary if key is missing in active language
        let englishFallback: any = translations["en"];
        for (const fPart of parts) {
          if (englishFallback && englishFallback[fPart] !== undefined) {
            englishFallback = englishFallback[fPart];
          } else {
            return keyPath;
          }
        }
        return englishFallback;
      }
    }
    return current;
  };

  const dict = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dict }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
