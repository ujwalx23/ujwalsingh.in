import React, { useState, useEffect } from "react";
import { 
  Download, MapPin, GraduationCap, Briefcase, Code2, Gamepad2, 
  CloudRain, Music, ChevronDown, ChevronUp, Database, Sparkles, Layout, ShieldAlert
} from "lucide-react";
import ujwalPhoto from "@/assets/ujwal-photo-3.jpg";
import PageSEO from "@/components/PageSEO";
import { useLanguage } from "@/hooks/useLanguage";

interface Skill {
  name: string;
  percentage: number;
  level: string;
}

interface SkillCategory {
  id: string;
  nameKey: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: Skill[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    nameKey: "nav.overview", // we can map keys dynamically
    icon: Layout,
    skills: [
      { name: "React / Vite", percentage: 95, level: "Advanced" },
      { name: "TypeScript", percentage: 90, level: "Advanced" },
      { name: "Next.js", percentage: 80, level: "Intermediate" },
      { name: "Tailwind CSS", percentage: 95, level: "Advanced" },
      { name: "Figma UI Design", percentage: 75, level: "Intermediate" },
    ]
  },
  {
    id: "backend",
    nameKey: "nav.bio",
    icon: Database,
    skills: [
      { name: "Node.js / Express", percentage: 85, level: "Intermediate" },
      { name: "Supabase Backend", percentage: 88, level: "Advanced" },
      { name: "Python Automation", percentage: 78, level: "Intermediate" },
      { name: "SQL & Databases", percentage: 75, level: "Intermediate" },
    ]
  },
  {
    id: "ai_tools",
    nameKey: "nav.works",
    icon: Sparkles,
    skills: [
      { name: "AI API Integrations", percentage: 82, level: "Intermediate" },
      { name: "PWA Offline Caching", percentage: 85, level: "Advanced" },
      { name: "Git Version Control", percentage: 90, level: "Advanced" },
    ]
  }
];

const timelineIcons = [GraduationCap, Code2, Briefcase];
const funFactIcons = [CloudRain, Gamepad2, Music];

const About = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState("frontend");
  const [expandedTimeline, setExpandedTimeline] = useState<number | null>(null);
  const [progressTrigger, setProgressTrigger] = useState(false);

  useEffect(() => {
    setProgressTrigger(false);
    const timer = setTimeout(() => setProgressTrigger(true), 50);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const activeCategory = SKILL_CATEGORIES.find(cat => cat.id === activeTab);
  const timelineItems = t("about.timelineItems") as any[];

  // Localized interest labels
  const interestLabels = {
    en: ["Rain & lo-fi coding", "Gaming to reset focus", "Music is my safe space"],
    fr: ["Pluie et codage lo-fi", "Jeux pour réinitialiser", "La musique est mon refuge"],
    es: ["Lluvia y código lo-fi", "Juegos para reiniciar", "La música es mi refugio"],
    zh: ["下雨天与低保真音乐", "打游戏释放压力", "音乐是我的安全屋"],
    hi: ["बारिश और लो-फाई कोडिंग", "फोकस रीसेट करने के लिए गेमिंग", "संगीत मेरा सुरक्षित स्थान है"]
  };

  const currentInterests = interestLabels[language] || interestLabels["en"];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12 px-1 sm:px-0 animate-in fade-in duration-300">
      <PageSEO
        title={t("about.title")}
        description={t("about.bioText")}
        path="/about"
        keywords="Ujwal Singh about, developer bio, AI enthusiast, resume"
      />

      {/* Hero Header */}
      <section className="glass-card p-6 md:p-8 border border-primary/10">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          
          {/* Profile image with visual glowing aura */}
          <div className="shrink-0 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary via-secondary to-accent opacity-25 blur-xl rounded-2xl group-hover:opacity-40 transition-opacity duration-500 animate-pulse-glow" />
            <img
              src={ujwalPhoto}
              alt="Ujwal Singh"
              className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover object-top shadow-lg border-2 border-primary/20"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80";
              }}
            />
            <div className="absolute -bottom-2 -right-2 z-20 glass-card px-2.5 py-0.5 rounded-lg flex items-center gap-1.5 text-xs font-semibold">
              <MapPin className="w-3 h-3 text-primary" />
              <span>India</span>
            </div>
          </div>

          <div className="text-center md:text-left flex-1 space-y-3">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold gradient-text">
                {t("about.title")}
              </h1>
              <p className="text-muted-foreground text-xs sm:text-sm font-semibold">
                {t("about.subtitle")}
              </p>
            </div>
            <p className="text-foreground/90 text-sm leading-relaxed max-w-xl">
              {t("about.bioText")}
            </p>

            <div className="flex justify-center md:justify-start pt-2">
              <a
                href={`${import.meta.env.BASE_URL}Ujwal_Resume.pdf`}
                download="Ujwal_Resume.pdf"
                className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground hover:opacity-90 font-semibold px-4 py-2 rounded-xl text-xs transition-all hover:scale-102 shadow-md shadow-primary/10"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{t("about.resumePdf")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Philosophy Cards Grid */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold font-display">{t("about.philosophyTitle")}</h2>
          <p className="text-xs text-muted-foreground">{t("about.philosophyDesc")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="glass-card p-5 border border-primary/10 hover-lift space-y-2">
            <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center text-primary">
              <Code2 className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-xs sm:text-sm">{t("about.philosophyCleanTitle")}</h3>
            <p className="text-[11px] text-muted-foreground leading-relaxed">{t("about.philosophyCleanDesc")}</p>
          </div>
          <div className="glass-card p-5 border border-primary/10 hover-lift space-y-2">
            <div className="w-8 h-8 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary">
              <Layout className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-xs sm:text-sm">{t("about.philosophyUXTitle")}</h3>
            <p className="text-[11px] text-muted-foreground leading-relaxed">{t("about.philosophyUXDesc")}</p>
          </div>
          <div className="glass-card p-5 border border-primary/10 hover-lift space-y-2">
            <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center text-accent">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-xs sm:text-sm">{t("about.philosophyAITitle")}</h3>
            <p className="text-[11px] text-muted-foreground leading-relaxed">{t("about.philosophyAIDesc")}</p>
          </div>
        </div>
      </section>

      {/* Interactive Tech Skill Meters */}
      <section className="glass-card p-6 md:p-8 border border-primary/10 fade-in-up stagger-1">
        <h2 className="text-lg sm:text-xl font-bold mb-1">{t("about.skillsTitle")}</h2>
        <p className="text-xs text-muted-foreground mb-4">{t("about.skillsDesc")}</p>

        {/* Tab Buttons */}
        <div className="flex border-b border-primary/10 gap-3 overflow-x-auto pb-1 mb-5">
          {SKILL_CATEGORIES.map(cat => {
            const Icon = cat.icon;
            // Map name keys to navigation terms
            const label = cat.id === "frontend" ? t("websites.all") :
                          cat.id === "backend" ? t("websites.webApps") :
                          t("websites.aiTools");
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-1.5 pb-2 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === cat.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Meter List */}
        <div className="space-y-4">
          {activeCategory?.skills.map((skill) => (
            <div key={skill.name} className="space-y-1">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-foreground/90">{skill.name}</span>
                <span className="text-primary">{skill.percentage}% ({skill.level})</span>
              </div>
              <div className="w-full h-2 rounded-full bg-primary/5 border border-primary/10 overflow-hidden relative">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-premium rounded-full"
                  style={{
                    width: progressTrigger ? `${skill.percentage}%` : "0%"
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expandable Journey Timeline */}
      <section className="glass-card p-6 md:p-8 border border-primary/10 fade-in-up stagger-2">
        <h2 className="text-lg sm:text-xl font-bold mb-1">{t("about.timelineTitle")}</h2>
        <p className="text-xs text-muted-foreground mb-5">{t("about.timelineDesc")}</p>
        <div className="relative">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-primary/20" />
          <div className="space-y-5">
            {timelineItems.map((item, i) => {
              const Icon = timelineIcons[i] || Code2;
              const isExpanded = expandedTimeline === i;
              return (
                <div key={i} className="flex gap-3 relative">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center z-10">
                    <Icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  
                  <div 
                    onClick={() => setExpandedTimeline(isExpanded ? null : i)}
                    className={`flex-1 p-3.5 rounded-xl border transition-all duration-300 hover:bg-primary/5 cursor-pointer ${
                      isExpanded 
                        ? "bg-primary/5 border-primary/20 shadow-sm" 
                        : "bg-card/40 border-primary/10"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                      <h3 className="font-semibold text-xs sm:text-sm text-foreground flex items-center gap-1">
                        {item.title}
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5 text-muted-foreground inline" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-muted-foreground inline" />
                        )}
                      </h3>
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-primary/15 text-primary font-bold uppercase">
                        {item.period}
                      </span>
                    </div>
                    
                    <p className="text-xs text-muted-foreground">
                      {item.summary}
                    </p>

                    {isExpanded && (
                      <div className="mt-2.5 pt-2.5 border-t border-primary/10 text-xs text-foreground/80 leading-relaxed animate-in fade-in duration-200">
                        {item.details}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Simplified Personal Fun Facts */}
      <section className="glass-card p-6 md:p-8 border border-primary/10 fade-in-up stagger-3">
        <h2 className="text-lg sm:text-xl font-bold mb-4">{t("about.factsTitle")}</h2>
        <div className="grid grid-cols-3 gap-3">
          {currentInterests.map((text, i) => {
            const Icon = funFactIcons[i] || Sparkles;
            return (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-primary/5 border border-primary/10 text-center hover:scale-105 transition-transform"
              >
                <Icon className="w-5 h-5 text-primary mb-1.5 animate-bounce-slow" />
                <span className="text-[9px] sm:text-xs text-foreground/90 font-semibold leading-snug">{text}</span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default About;
