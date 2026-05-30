import React, { useState, useEffect } from "react";
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ContactSection from "@/components/ContactSection";
import PageSEO from "@/components/PageSEO";
import { useLanguage } from "@/hooks/useLanguage";

const Typewriter = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      const timer = setTimeout(() => {}, 1200);
      return () => clearTimeout(timer);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="font-semibold text-primary">
      {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </span>
  );
};

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const socialLinks = [
  { name: "LinkedIn", icon: LinkedInIcon, url: "https://www.linkedin.com/in/ujwalsingh23/" },
  { name: "GitHub", icon: GitHubIcon, url: "https://github.com/ujwalx23" },
  { name: "X (Twitter)", icon: XIcon, url: "https://x.com/UJWALSINGH23" },
];

const Home = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      name: "Namami Vindhyavasini",
      description: language === "en" ? "Spiritual temple portal for bookings and virtual darshans." :
                   language === "fr" ? "Portail de temple spirituel pour les réservations et darshans." :
                   language === "es" ? "Portal de templo espiritual para reservas y darshans." :
                   language === "zh" ? "寺庙在线预约和虚拟拜访的灵性门户网站。" :
                   "ऑनलाइन बुकिंग और आभासी दर्शन के लिए आध्यात्मिक मंदिर पोर्टल।",
      img: "https://images.unsplash.com/photo-1608976478516-e57a3e811124?auto=format&fit=crop&w=400&q=80",
      url: "https://vnamami.vercel.app/",
    },
    {
      name: "Wanderlust Adventures",
      description: language === "en" ? "A travel platform for exploring India's cultural heritage." :
                   language === "fr" ? "Plateforme de voyage pour explorer le patrimoine de l'Inde." :
                   language === "es" ? "Plataforma de viajes para explorar el patrimonio de la India." :
                   language === "zh" ? "用于探索印度文化遗产的旅游分享平台。" :
                   "भारत की सांस्कृतिक विरासत की खोज के लिए एक यात्रा मंच।",
      img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766827943351.png",
      url: "https://wanderlustadventures23.vercel.app/",
    },
    {
      name: "CuteList",
      description: language === "en" ? "Delightful task management board styled with pastel themes." :
                   language === "fr" ? "Tableau de tâches avec des thèmes pastels." :
                   language === "es" ? "Tablero de tareas con temas de colores pastel." :
                   language === "zh" ? "带有柔和马卡龙色调的趣味任务管理板。" :
                   "पेस्टल थीम के साथ डिज़ाइन किया गया प्यारा कार्य प्रबंधक बोर्ड।",
      img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766827964162.png",
      url: "https://cute23.vercel.app/",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-16 px-1 sm:px-0 animate-in fade-in duration-300">
      <PageSEO
        title="Ujwal Singh | Software Developer, Creator & AI Enthusiast"
        description="Official website of Ujwal Singh. Explore projects, connect on social media, and discover work in web development and artificial intelligence."
        path="/"
        keywords="Ujwal Singh, software developer, AI enthusiast, web developer, portfolio"
      />

      {/* Hero Section */}
      <section className="text-center py-10 md:py-16 fade-in-up flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-5 animate-pulse-glow">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t("home.available")}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-2 animate-gradient-shift">
          {t("home.title")}
        </h1>
        <div className="text-muted-foreground text-sm sm:text-base md:text-lg font-medium min-h-[30px] flex items-center justify-center gap-1.5">
          <span>{t("home.builds")}</span>
          <Typewriter words={t("home.roles")} />
        </div>
      </section>

      {/* Social Links */}
      <section className="fade-in-up stagger-1">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">{t("home.connectTitle")}</h2>
            <p className="text-xs text-muted-foreground mt-0.5">{t("home.connectDesc")}</p>
          </div>
          <Link to="/social" className="flex items-center gap-1 text-primary hover:underline text-xs sm:text-sm font-semibold">
            <span>{t("home.viewAll")}</span> <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift glass-card flex items-center justify-center gap-3 p-5 border-primary/15"
            >
              <link.icon />
              <span className="font-semibold text-sm sm:text-base">{link.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="fade-in-up stagger-2">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">{t("home.projectsTitle")}</h2>
            <p className="text-xs text-muted-foreground mt-0.5">{t("home.projectsDesc")}</p>
          </div>
          <Link to="/websites" className="flex items-center gap-1 text-primary hover:underline text-xs sm:text-sm font-semibold">
            <span>{t("home.exploreAll")}</span> <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift glass-card overflow-hidden group flex flex-col h-full border-primary/10 hover:border-primary/25"
            >
              <div className="w-full h-40 bg-muted overflow-hidden relative border-b border-primary/5">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80";
                  }}
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base mb-1.5 flex items-center gap-1.5 group-hover:text-primary transition-colors">
                    {project.name}
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Simplified Contact Me Wrapper */}
      <section className="max-w-xl mx-auto py-4 fade-in-up stagger-3">
        <ContactSection />
      </section>
    </div>
  );
};

export default Home;