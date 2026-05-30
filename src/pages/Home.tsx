import React, { useState, useEffect } from "react";
import { ExternalLink, ArrowRight, Sparkles, Monitor, Cpu, Palette, Quote, User, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import ContactSection from "@/components/ContactSection";
import PageSEO from "@/components/PageSEO";
import { useLanguage } from "@/hooks/useLanguage";
import ujwalPhoto from "@/assets/ujwal-photo-3.jpg";

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
    <span className="font-semibold text-primary font-mono">
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
  const [featuredThoughts, setFeaturedThoughts] = useState<any[]>([]);

  useEffect(() => {
    // 1. Fetch custom thoughts
    const savedCustom = localStorage.getItem("ujwal_custom_thoughts");
    let custom = [];
    if (savedCustom) {
      try {
        custom = JSON.parse(savedCustom);
      } catch (e) {
        console.error(e);
      }
    }

    // 2. Fetch blacklist
    const savedBlacklist = localStorage.getItem("ujwal_deleted_thoughts");
    let blacklist: any[] = [];
    if (savedBlacklist) {
      try {
        blacklist = JSON.parse(savedBlacklist);
      } catch (e) {
        console.error(e);
      }
    }

    // Static fallback quotes
    const staticThoughts = [
      { id: 1, quote: "Be kind. It’s okay if someone doesn’t meet your expectations.", author: "Ujwal Singh" },
      { id: 2, quote: "What if there is no other universe and this is the only one you get!?", author: "Ujwal Singh" },
      { id: 3, quote: "Pain is certain. Pain will go, but success will remain.", author: "Anonymous" },
      { id: 4, quote: "Khud ko akela hokar kiske paas dekhte ho?", author: "Anonymous" },
      { id: 5, quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
      { id: 6, quote: "Just keep going, even on days you feel low!", author: "Ujwal Singh" },
    ];

    const activeStatic = staticThoughts.filter(t => !blacklist.includes(t.id));
    const activeCustom = custom.filter((t: any) => !blacklist.includes(t.id));

    // Combine and extract first 3 thoughts
    const combined = [...activeCustom, ...activeStatic].slice(0, 3);
    setFeaturedThoughts(combined);
  }, []);

  const projects = [
    {
      name: "Namami Vindhyavasini",
      description: language === "en" ? "Spiritual temple portal for bookings and virtual darshans." :
                   language === "fr" ? "Portail de temple spirituel pour les réservations et darshans." :
                   language === "es" ? "Portal de templo espiritual para reservas y darshans." :
                   language === "zh" ? "寺庙在线预约和虚拟拜访的灵性门户网站。" :
                   "ऑनलाइन बुकिंग और आभासी दर्शन के लिए आध्यात्मिक मंदिर पोर्टल।",
      img: "/images/namami.png",
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
      name: "MediSoul",
      description: language === "en" ? "AI-powered medical assistant for instant health insights and symptom checking." :
                   language === "fr" ? "Assistant médical alimenté par l'IA pour des informations de santé instantanées." :
                   language === "es" ? "Asistente médico impulsado por IA para información de salud instantánea." :
                   language === "zh" ? "AI 驱动的医疗助手，提供即时健康 analysis 与症状评估。" :
                   "त्वरित स्वास्थ्य अंतर्दृष्टि के लिए एआई-संचालित चिकित्सा सहायक।",
      img: "/images/medisoul.png",
      url: "https://cure23.vercel.app/",
    },
  ];

  const capabilities = [
    {
      title: language === "en" ? "Full-Stack Development" :
             language === "fr" ? "Développement Full-Stack" :
             language === "es" ? "Desarrollo Full-Stack" :
             language === "zh" ? "全栈开发" :
             "फुल-स्टैक डेवलपमेंट",
      desc: language === "en" ? "Designing clean, strictly-typed React and TypeScript ecosystems that scale efficiently." :
            language === "fr" ? "Conception d'écosystèmes React et TypeScript propres et strictement typés." :
            language === "es" ? "Diseño de ecosistemas React y TypeScript limpios y estrictamente tipados." :
            language === "zh" ? "设计清晰、严格类型的 React 和 TypeScript 生态系统，以实现高效的系统扩展。" :
            "स्वच्छ, स्पष्ट रूप से टाइप किए गए रिएक्ट और टाइपस्क्रिप्ट पारिस्थितिकी तंत्र का निर्माण।",
      icon: Monitor
    },
    {
      title: language === "en" ? "AI & Intelligent Systems" :
             language === "fr" ? "IA et Systèmes Intelligents" :
             language === "es" ? "IA y Sistemas Inteligentes" :
             language === "zh" ? "人工智能与智能系统" :
             "एआई और इंटेलिजेंट सिस्टम",
      desc: language === "en" ? "Integrating client-side LLM completions, natural language bots, and smart features." :
            language === "fr" ? "Intégration de complétions LLM côté client et de bots en langage naturel." :
            language === "es" ? "Integración de finalizaciones de LLM en el cliente y bots de lenguaje natural." :
            language === "zh" ? "集成客户端大语言模型(LLM)接口、自然语言处理机器人和智能化日常应用。" :
            "क्लाइंट-साइड एआई, प्राकृतिक भाषा बॉट और स्मार्ट सुविधाओं का एकीकरण।",
      icon: Cpu
    },
    {
      title: language === "en" ? "Premium UI Design" :
             language === "fr" ? "Design UI de Premium" :
             language === "es" ? "Diseño UI de Premium" :
             language === "zh" ? "高保真界面设计" :
             "प्रीमियम यूआई डिजाइन",
      desc: language === "en" ? "Crafting gorgeous glassmorphism panels, fluid keyframe animations, and micro-interactions." :
            language === "fr" ? "Création de magnifiques panneaux de glassmorphisme et d'animations fluides." :
            language === "es" ? "Creación de hermosos paneles de glassmorphism y animaciones fluidas." :
            language === "zh" ? "精心制作精美毛玻璃效果、流畅的关键帧动画与极具质感的交互微动效。" :
            "सुंदर ग्लासमोर्फिज्म पैनल, सहज कीफ़्रेम एनिमेशन और सूक्ष्म-संवाद डिजाइन।",
      icon: Palette
    }
  ];

  // Localized preview section headers
  const aboutMeTitle = language === "en" ? "About Me" :
                       language === "fr" ? "À propos de moi" :
                       language === "es" ? "Sobre mí" :
                       language === "zh" ? "关于我" :
                       "मेरे बारे में";

  const readFullBio = language === "en" ? "Read Full Bio" :
                      language === "fr" ? "Lire la bio complète" :
                      language === "es" ? "Ver biografía completa" :
                      language === "zh" ? "阅读完整个人简介" :
                      "बायो देखें";

  const thoughtsWallTitle = language === "en" ? "Recent Reflections" :
                            language === "fr" ? "Réflexions récentes" :
                            language === "es" ? "Reflexiones recientes" :
                            language === "zh" ? "近期感悟" :
                            "हाल के विचार";

  const writeThoughtBtn = language === "en" ? "Write a Reflection" :
                          language === "fr" ? "Écrire une réflexion" :
                          language === "es" ? "Escribir una reflexión" :
                          language === "zh" ? "发布感悟" :
                          "विचार साझा करें";

  const focusTitle = language === "en" ? "Core Specializations" :
                     language === "fr" ? "Spécialisations de base" :
                     language === "es" ? "Especialidades principales" :
                     language === "zh" ? "核心技术领域" :
                     "मुख्य विशेषज्ञता";

  const focusDesc = language === "en" ? "Modern engineering patterns used to craft scalable applications." :
                    language === "fr" ? "Modèles d'ingénierie modernes utilisés pour créer des applications évolutives." :
                    language === "es" ? "Patrones de ingeniería modernos utilizados para crear aplicaciones escalables." :
                    language === "zh" ? "用于构建可扩展应用程序的现代工程设计模式。" :
                    "स्केलेबल एप्लिकेशन बनाने के लिए उपयोग किए जाने वाले आधुनिक...।";

  return (
    <div className="w-full max-w-6xl mx-auto space-y-16 px-1 sm:px-0 animate-in fade-in duration-300">
      <PageSEO
        title="Ujwal Singh | Software Developer, Creator & AI Enthusiast"
        description="Official website of Ujwal Singh. Explore projects, connect on social media, and discover work in web development and artificial intelligence."
        path="/"
        keywords="Ujwal Singh, software developer, AI enthusiast, web developer, portfolio"
      />

      {/* Hero Section */}
      <section className="text-center pt-10 pb-2 md:pt-16 md:pb-4 fade-in-up flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-5 animate-pulse-glow">
          <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "3s" }} />
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

      {/* About Me Preview Card Section */}
      <section className="fade-in-up stagger-1">
        <div className="glass-card p-6 md:p-8 border border-primary/10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="shrink-0 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary via-secondary to-accent opacity-20 blur-xl rounded-2xl group-hover:opacity-30 transition-opacity duration-500" />
            <img
              src={ujwalPhoto}
              alt="Ujwal Singh"
              className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover object-top border border-primary/15"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80";
              }}
            />
            <div className="absolute -bottom-1 -right-1 z-20 glass-card px-2 py-0.5 rounded-lg flex items-center gap-1 text-[10px] font-semibold border-primary/10">
              <MapPin className="w-2.5 h-2.5 text-primary" />
              <span>India</span>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left space-y-3">
            <div>
              <h2 className="text-lg sm:text-xl font-bold font-display flex items-center justify-center md:justify-start gap-1.5">
                <User className="w-4.5 h-4.5 text-primary" /> {aboutMeTitle}
              </h2>
              <p className="text-muted-foreground text-[11px] font-semibold mt-0.5">{t("about.subtitle")}</p>
            </div>
            <p className="text-xs text-foreground/80 leading-relaxed max-w-xl">
              {t("about.bioText")}
            </p>
            <div className="flex justify-center md:justify-start pt-1.5">
              <Link
                to="/about"
                className="inline-flex items-center gap-1 text-primary hover:underline text-xs font-semibold"
              >
                <span>{readFullBio}</span> <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="fade-in-up stagger-2">
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

      {/* Capabilities/Focus Section */}
      <section className="fade-in-up stagger-3">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold">{focusTitle}</h2>
          <p className="text-xs text-muted-foreground mt-0.5">{focusDesc}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div key={cap.title} className="glass-card p-5 border border-primary/10 flex flex-col space-y-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base">{cap.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">{cap.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="fade-in-up stagger-4">
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

      {/* Reflections Preview Section */}
      <section className="fade-in-up stagger-5">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">{thoughtsWallTitle}</h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              {language === "en" ? "Latest thoughts and greetings left by board visitors." :
               language === "fr" ? "Dernières pensées et salutations laissées par les visiteurs." :
               language === "es" ? "Últimos pensamientos y saludos dejados por los visitantes." :
               language === "zh" ? "留言板访客留下的最新想法和问候。" :
               "बोर्ड पर छोड़े गए नवीनतम विचार और शुभकामनाएं।"}
            </p>
          </div>
          <Link to="/reflections" className="flex items-center gap-1 text-primary hover:underline text-xs sm:text-sm font-semibold">
            <span>{writeThoughtBtn}</span> <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredThoughts.map((t, idx) => (
            <div
              key={t.id}
              className={`glass-card p-5 border border-primary/10 hover-lift relative overflow-hidden flex flex-col justify-between ${
                t.gradient || "bg-card/60"
              }`}
            >
              <div className="absolute top-2 right-2 text-primary/10">
                <Quote className="w-12 h-12" />
              </div>
              <p className="text-xs text-foreground/90 italic leading-relaxed relative z-10 font-medium">
                “{t.quote}”
              </p>
              <span className="block text-[10px] font-bold text-primary mt-4 self-end relative z-10">
                — {t.author}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Simplified Contact Me Wrapper */}
      <section className="max-w-xl mx-auto py-4 fade-in-up stagger-6">
        <ContactSection />
      </section>
    </div>
  );
};

export default Home;