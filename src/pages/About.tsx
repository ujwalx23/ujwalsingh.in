import React, { useState, useEffect } from "react";
import { 
  Download, MapPin, GraduationCap, Briefcase, Code2, Gamepad2, 
  CloudRain, Music, ChevronDown, ChevronUp, Database, Sparkles, Layout,
  Award, BarChart3, HelpCircle
} from "lucide-react";
import { Link } from "react-router-dom";
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
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: Skill[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "web_fullstack",
    name: "Web & Full-Stack",
    icon: Layout,
    skills: [
      { name: "React.js / Vite", percentage: 95, level: "Advanced" },
      { name: "TypeScript", percentage: 90, level: "Advanced" },
      { name: "Tailwind CSS & Modern UI", percentage: 95, level: "Advanced" },
      { name: "Git, GitHub & Vercel Deployment", percentage: 92, level: "Advanced" },
      { name: "Botpress & Client AI Integration", percentage: 85, level: "Intermediate" },
    ]
  },
  {
    id: "sap_analytics",
    name: "SAP Analytics & BI",
    icon: BarChart3,
    skills: [
      { name: "Story Design & Dashboarding", percentage: 95, level: "Advanced" },
      { name: "Data Modelling (Dimensions & Measures)", percentage: 92, level: "Advanced" },
      { name: "Data Blending & Planning Models", percentage: 88, level: "Advanced" },
      { name: "Smart Predict & Live/Import Connections", percentage: 86, level: "Advanced" },
      { name: "Data Actions & Allocations", percentage: 85, level: "Intermediate" },
      { name: "SAP S/4HANA & BTP Integration", percentage: 80, level: "Intermediate" },
    ]
  },
  {
    id: "databases_programming",
    name: "Databases & Backend",
    icon: Database,
    skills: [
      { name: "SQL (PostgreSQL & Relational Queries)", percentage: 92, level: "Advanced" },
      { name: "Python (Data Analysis & Automation)", percentage: 88, level: "Advanced" },
      { name: "Supabase Backend & Auth", percentage: 90, level: "Advanced" },
      { name: "PostgreSQL Database Schema Design", percentage: 88, level: "Advanced" },
      { name: "MongoDB", percentage: 78, level: "Intermediate" },
    ]
  }
];

const timelineIcons = [Briefcase, Code2, Award, GraduationCap];
const funFactIcons = [CloudRain, Gamepad2, Music];

const FAQS = [
  {
    q: "What roles and opportunities are you currently open to?",
    a: "I am actively seeking roles as a Full-Stack Developer, Frontend Engineer, or Software Engineer. I am also open to enterprise data analysis / SAP BI projects and selective freelance web development."
  },
  {
    q: "What tech stack do you specialize in?",
    a: "My core stack centers around React, TypeScript, Next.js, and modern styling on the frontend, combined with PostgreSQL, Supabase, Python, and REST APIs on the backend. I also hold an official SAP Certified – Data Analyst (SAC) credential."
  },
  {
    q: "How do you approach real-world client projects?",
    a: "I lead projects end-to-end: starting from client requirement discovery, designing normalized PostgreSQL schemas, structuring backend APIs in Supabase, and delivering responsive, SEO-optimized React interfaces (such as the Namami Vindhyavasini portal)."
  },
  {
    q: "How fast do you respond to project inquiries?",
    a: "I typically respond within 24 to 48 hours. For urgent inquiries or recruiter discussions, feel free to reach out directly via email at ujwalsingh426@gmail.com or connect with me on LinkedIn."
  }
];

const About = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState("web_fullstack");
  const [expandedTimeline, setExpandedTimeline] = useState<number | null>(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
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
        title="About Ujwal Singh | Full-Stack Developer & Software Engineer"
        description="Learn about Ujwal Singh: Full-Stack Developer, Computer Engineering student at Mumbai University (CGPA 8.13), and SAP Certified (SAC)."
        path="/about"
        keywords="Ujwal Singh bio, Full-Stack Developer, Software Engineer, React, TypeScript, PostgreSQL, SAP Certified, SAC, Mumbai University, resume"
      />

      {/* Hero Header */}
      <section className="glass-card p-6 md:p-8 border border-primary/10">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          
          {/* Profile image with visual glowing aura */}
          <div className="shrink-0 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary via-secondary to-accent opacity-25 blur-xl rounded-2xl group-hover:opacity-40 transition-opacity duration-500 animate-pulse-glow" />
            <img
              src={ujwalPhoto}
              alt="Ujwal Singh - Full-Stack Developer and Software Engineer"
              className="relative z-10 w-40 h-40 sm:w-56 sm:h-56 rounded-2xl object-cover object-top shadow-lg border-2 border-primary/20"
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
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                  Full-Stack Developer
                </span>
                <span className="text-[10px] font-semibold text-foreground/80 px-2.5 py-0.5 rounded-full bg-primary/5 border border-primary/15">
                  SAP Certified (SAC)
                </span>
                <span className="text-[10px] font-semibold text-muted-foreground px-2 py-0.5 rounded-full bg-foreground/5 border border-foreground/10">
                  CGPA: 8.13 / 10
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold gradient-text">
                {t("about.title")}
              </h1>
              <p className="text-muted-foreground text-xs sm:text-sm font-semibold mt-0.5">
                {t("about.subtitle")}
              </p>
            </div>
            <p className="text-foreground/90 text-sm leading-relaxed max-w-xl">
              {t("about.bioText")}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href={`${import.meta.env.BASE_URL}Ujwal_Resume.pdf`}
                download="Ujwal_Resume.pdf"
                className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground hover:opacity-90 font-semibold px-4 py-2 rounded-xl text-xs transition-all hover:scale-102 shadow-md shadow-primary/10"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{t("about.resumePdf")}</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 glass-button text-foreground hover:text-primary font-semibold px-4 py-2 rounded-xl text-xs transition-all border border-primary/20"
              >
                <span>Hire / Get in Touch</span>
              </Link>
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
                <span>{cat.name}</span>
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

      {/* Expandable Journey & Experience Timeline */}
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

      {/* Interactive FAQ Section (Launch Checklist Item 4) */}
      <section className="glass-card p-6 md:p-8 border border-primary/10 fade-in-up stagger-3 space-y-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" />
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-muted-foreground">Quick answers regarding recruitment, technical stack, and client delivery.</p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="border border-primary/10 rounded-xl overflow-hidden bg-card/30 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  className="w-full text-left p-4 flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-primary shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="p-4 pt-0 text-xs text-muted-foreground leading-relaxed border-t border-primary/5 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Simplified Personal Fun Facts */}
      <section className="glass-card p-6 md:p-8 border border-primary/10 fade-in-up stagger-4">
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
