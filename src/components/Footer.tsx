import React from "react";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Simple locale footer notes
  const footerNotes = {
    en: "Explore projects, socials, and reflections. Built with React & TypeScript.",
    fr: "Explorez les projets, les réseaux sociaux et les réflexions. Construit avec React et TypeScript.",
    es: "Explora proyectos, redes sociales y reflexiones. Creado con React y TypeScript.",
    zh: "探索项目、社交和思考。使用 React 和 TypeScript 构建。",
    hi: "परियोजनाओं, सामाजिक गतिविधियों और विचारों का अन्वेषण करें। रिएक्ट और टाइपस्क्रिप्ट के साथ निर्मित।"
  };

  const note = footerNotes[language] || footerNotes["en"];

  return (
    <footer className="w-full py-6 mt-12 border-t border-primary/10 bg-card/10 backdrop-blur-md text-center space-y-2">
      <p className="text-xs sm:text-sm font-semibold gradient-text">
        © {currentYear} Ujwal Singh • ✨ Portfolio Assistant Enabled
      </p>
      <p className="text-[10px] sm:text-xs text-muted-foreground max-w-md mx-auto px-4">
        {note}
      </p>
    </footer>
  );
};

export default Footer;
