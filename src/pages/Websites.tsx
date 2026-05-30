import React, { useState } from "react";
import { ExternalLink, Search, SlidersHorizontal, Code, Globe, Sparkles } from "lucide-react";
import PageSEO from "@/components/PageSEO";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface Project {
  name: string;
  img: string;
  url: string;
  category: "web" | "game" | "ai";
  tech: string[];
  // Translatable content
  translations: Record<string, {
    description: string;
    longDescription: string;
    categoryLabel: string;
    features: string[];
  }>;
}

const Websites = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const websites: Project[] = [
    {
      name: "Namami Vindhyavasini",
      img: "https://images.unsplash.com/photo-1608976478516-e57a3e811124?auto=format&fit=crop&w=400&q=80",
      url: "https://vnamami.vercel.app/",
      category: "web",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      translations: {
        en: {
          categoryLabel: "Web App",
          description: "Spiritual temple portal for bookings and virtual darshans.",
          longDescription: "A modern, highly optimized spiritual portal built for the Vindhyavasini temple. It streamlines darshan reservations, event schedules, devotional media content, and donations entirely client-side.",
          features: ["Online Darshan scheduling", "Devotional audio player", "Interactive heritage guide"]
        },
        fr: {
          categoryLabel: "App Web",
          description: "Portail de temple spirituel pour les réservations et darshans.",
          longDescription: "Un portail spirituel moderne et hautement optimisé conçu pour le temple Vindhyavasini. Il rationalise les réservations de darshan, les horaires et les médias.",
          features: ["Réservation de darshan en ligne", "Lecteur audio dévotionnel", "Guide patrimonial interactif"]
        },
        es: {
          categoryLabel: "App Web",
          description: "Portal de templo espiritual para reservas y darshans.",
          longDescription: "Un portal espiritual moderno y optimizado construido para el templo Vindhyavasini. Agiliza las reservas de darshan, horarios y donaciones.",
          features: ["Reserva de darshan en línea", "Reproductor de audio devocional", "Guía patrimonial interactiva"]
        },
        zh: {
          categoryLabel: "网页应用",
          description: "寺庙在线预约和虚拟拜访的灵性门户网站。",
          longDescription: "为 Vindhyavasini 寺庙构建的现代化、高度优化的灵性门户网站。支持在线预约、祈祷仪式安排和音视频多媒体播放。",
          features: ["在线拜访安排", "祈祷音乐播放器", "交互式历史文化指南"]
        },
        hi: {
          categoryLabel: "वेब ऐप",
          description: "ऑनलाइन बुकिंग और आभासी दर्शन के लिए आध्यात्मिक मंदिर पोर्टल।",
          longDescription: "विंध्यवासिनी मंदिर के लिए निर्मित एक आधुनिक, अत्यधिक अनुकूलित आध्यात्मिक पोर्टल। यह दर्शन बुकिंग, आरती समय सारणी, और दान सेवाओं को सुव्यवस्थित करता है।",
          features: ["ऑनलाइन दर्शन बुकिंग", "भक्ति ऑडियो प्लेयर", "इंटरैक्टिव विरासत गाइड"]
        }
      }
    },
    {
      name: "Wanderlust Adventures",
      img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766827943351.png",
      url: "https://wanderlustadventures23.vercel.app/",
      category: "web",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      translations: {
        en: {
          categoryLabel: "Web App",
          description: "Travel portal highlighting India's heritage landmarks.",
          longDescription: "An immersive travel guide platform designed to showcase heritage landscapes across India. Built completely client-side for fast response.",
          features: ["Curated itineraries", "Interactive guides", "Responsive maps"]
        },
        fr: {
          categoryLabel: "App Web",
          description: "Portail de voyage pour explorer le patrimoine de l'Inde.",
          longDescription: "Une plateforme de voyage immersive conçue pour présenter les paysages patrimoniaux de l'Inde. Construite côté client.",
          features: ["Itinéraires organisés", "Guides interactifs", "Cartographie réactive"]
        },
        es: {
          categoryLabel: "App Web",
          description: "Plataforma de viajes para explorar el patrimonio de la India.",
          longDescription: "Una plataforma de guía de viajes inmersiva diseñada para mostrar paisajes patrimoniales en la India. Construida en el cliente.",
          features: ["Itinerarios seleccionados", "Guías interactivas", "Mapas responsivos"]
        },
        zh: {
          categoryLabel: "网页应用",
          description: "用于探索印度文化遗产的旅游分享平台。",
          longDescription: "一个旨在展示印度各地文化遗产和自然风光的旅游指南平台。采用客户端渲染实现极速响应。",
          features: ["策划旅行路线", "交互式景点导览", "响应式地图缩放"]
        },
        hi: {
          categoryLabel: "वेब ऐप",
          description: "भारत की सांस्कृतिक विरासत की खोज के लिए एक यात्रा मंच।",
          longDescription: "भारत भर में सांस्कृतिक और प्राकृतिक स्थलों को प्रदर्शित करने के लिए डिज़ाइन किया गया एक यात्रा गाइड मंच।",
          features: ["विशेष यात्रा कार्यक्रम", "इंटरैक्टिव गाइड", "रिस्पॉन्सिव मानचित्र"]
        }
      }
    },
    {
      name: "Delve Together",
      img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766828003355.png",
      url: "https://delvetogether.vercel.app",
      category: "web",
      tech: ["Next.js", "Socket.io", "Supabase"],
      translations: {
        en: {
          categoryLabel: "Web App",
          description: "Collaborative rooms and panels for quiet world discussions.",
          longDescription: "A focused discussion alternative space built to escape the noise of mainstream feeds. Provides live chat rooms and document boards.",
          features: ["Live discussion rooms", "Shared notes dashboard", "Filtered categories"]
        },
        fr: {
          categoryLabel: "App Web",
          description: "Salons collaboratifs pour des discussions mondiales calmes.",
          longDescription: "Un espace alternatif de discussion conçu pour échapper au bruit des réseaux sociaux. Offre des salons de chat en direct.",
          features: ["Salons de discussion en direct", "Tableau de notes partagé", "Filtrage par catégories"]
        },
        es: {
          categoryLabel: "App Web",
          description: "Salas colaborativas para debates tranquilos del mundo.",
          longDescription: "Un espacio alternativo para debates estructurados lejos del ruido de las redes sociales. Proporciona salas de chat en vivo.",
          features: ["Salas de discusión en vivo", "Tablero de notas compartido", "Filtros por categorías"]
        },
        zh: {
          categoryLabel: "网页应用",
          description: "用于对全球性事务进行理性探讨的协作室与论坛。",
          longDescription: "一个旨在过滤社交媒体噪音的深度讨论平台。提供实时的文字交流讨论房间和协作看板。",
          features: ["实时协作讨论室", "共享看板仪表盘", "按兴趣过滤板块"]
        },
        hi: {
          categoryLabel: "वेब ऐप",
          description: "शांत चर्चाओं के लिए सहयोगी कमरे और पैनल।",
          longDescription: "सोशल मीडिया के शोर से दूर, सार्थक चर्चाओं के लिए बनाया गया एक मंच। यह लाइव चैट रूम और दस्तावेज़ बोर्ड प्रदान करता है।",
          features: ["लाइव चर्चा कक्ष", "साझा नोट्स डैशबोर्ड", "वर्गीकृत फ़िल्टर"]
        }
      }
    },
    {
      name: "CuteList",
      img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766827964162.png",
      url: "https://cute23.vercel.app/",
      category: "web",
      tech: ["React", "LocalStorage", "Tailwind"],
      translations: {
        en: {
          categoryLabel: "Web App",
          description: "Delightful task manager app with custom themes.",
          longDescription: "A gamified task board featuring custom pastel layouts, positive audio feedback triggers, and smooth list transition cards.",
          features: ["Audio feedback system", "Pastel layout selector", "Persistence state"]
        },
        fr: {
          categoryLabel: "App Web",
          description: "Gestionnaire de tâches avec des thèmes pastels.",
          longDescription: "Un tableau de tâches ludique comprenant des mises en page pastel personnalisées et des animations fluides.",
          features: ["Retour audio positif", "Sélecteur de thèmes pastels", "Sauvegarde locale"]
        },
        es: {
          categoryLabel: "App Web",
          description: "Gestor de tareas con temas de colores pastel.",
          longDescription: "Un tablero de tareas gamificado con temas pastel personalizados y retroalimentación de audio al completar tareas.",
          features: ["Sistema de sonidos positivos", "Selector de temas pastel", "Persistencia local"]
        },
        zh: {
          categoryLabel: "网页应用",
          description: "带有柔和马卡龙色调的趣味任务管理板。",
          longDescription: "一个将任务管理趣味化的待办事项清单。配有粉嫩的配色主题、微交互动画和清脆的任务完成音效。",
          features: ["任务完成音效反馈", "粉粉的主题切换", "本地数据持久化"]
        },
        hi: {
          categoryLabel: "वेब ऐप",
          description: "पेस्टल थीम के साथ डिज़ाइन किया गया प्यारा कार्य प्रबंधक बोर्ड।",
          longDescription: "एक मजेदार कार्य बोर्ड जिसमें कस्टम पेस्टल लेआउट, सकारात्मक ऑडियो प्रतिक्रिया, और चिकने चेकलिस्ट कार्ड शामिल हैं।",
          features: ["ऑडियो प्रतिक्रिया प्रणाली", "पेस्टल थीम चयनकर्ता", "स्थानीय डेटा भंडारण"]
        }
      }
    },
    {
      name: "Newsnap",
      img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766828023996.png",
      url: "https://newsnapglobal.vercel.app",
      category: "web",
      tech: ["React", "News API", "Vercel"],
      translations: {
        en: {
          categoryLabel: "Web App",
          description: "Credibility-driven global short news snapshots.",
          longDescription: "Aggregates global world events into short summaries with citation ranks to ensure factual, objective info representation.",
          features: ["AI objective summaries", "Source verification index", "Bookmarks support"]
        },
        fr: {
          categoryLabel: "App Web",
          description: "Actualités mondiales courtes basées sur la crédibilité.",
          longDescription: "Agrège les événements mondiaux en résumés courts avec des indices de crédibilité des sources pour des informations fiables.",
          features: ["Résumés objectifs IA", "Index de vérification de source", "Favoris et signets"]
        },
        es: {
          categoryLabel: "App Web",
          description: "Noticias globales resumidas impulsadas por credibilidad.",
          longDescription: "Agrupa eventos mundiales en resúmenes cortos con clasificación de credibilidad para asegurar información objetiva.",
          features: ["Resúmenes objetivos de IA", "Índice de fuentes verificadas", "Soporte de marcadores"]
        },
        zh: {
          categoryLabel: "网页应用",
          description: "以可信度为核心的全球短新闻简报。",
          longDescription: "将全球发生的事件聚合成简短的新闻快报，并附带信誉度评级以确保信息的真实和客观性。",
          features: ["AI 客观事实总结", "信息源信誉度评级", "新闻收藏夹功能"]
        },
        hi: {
          categoryLabel: "वेब ऐप",
          description: "विश्वसनीयता-संचालित वैश्विक लघु समाचार स्नैपशॉट।",
          longDescription: "वैश्विक घटनाओं को संक्षिप्त सारांशों में संकलित करता है और समाचार की विश्वसनीयता रैंकिंग प्रदान करता है।",
          features: ["एआई संक्षिप्त सारांश", "स्रोत सत्यापन सूचकांक", "बुकमार्क सुविधा"]
        }
      }
    },
    {
      name: "LoopPlay",
      img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766828043282.png",
      url: "https://loopplay23.vercel.app/",
      category: "game",
      tech: ["HTML5 Canvas", "React", "AudioSynth"],
      translations: {
        en: {
          categoryLabel: "Game Arcade",
          description: "Retro game arcade bundling 23 lightweight mini-games.",
          longDescription: "Featuring canvas physics calculations, retro graphics, and chiptune audio playbacks compiled in a responsive mobile-friendly dashboard.",
          features: ["23 playable retro titles", "Local leaderboard storage", "Touch layout support"]
        },
        fr: {
          categoryLabel: "Arcade de Jeux",
          description: "Arcade rétro regroupant 23 mini-jeux légers.",
          longDescription: "Avec des calculs physiques sur canvas et des graphismes rétro compilés dans un tableau de bord réactif et adapté aux mobiles.",
          features: ["23 mini-jeux rétro jouables", "Classement local sauvegardé", "Support des commandes tactiles"]
        },
        es: {
          categoryLabel: "Salón de Juegos",
          description: "Arcade de juegos retro con 23 minijuegos ligeros.",
          longDescription: "Con física de Canvas, gráficos retro y sonidos chiptune de 8 bits compilados en una interfaz responsiva móvil.",
          features: ["23 juegos retro jugables", "Puntuaciones guardadas localmente", "Controles táctiles responsivos"]
        },
        zh: {
          categoryLabel: "游戏大厅",
          description: "包含 23 款轻量级像素小游戏的游戏中心。",
          longDescription: "集成了基于 Canvas 渲染的像素小游戏，包括打砖块、跑酷等，支持移动端自适应触控布局。",
          features: ["23 款即开即玩像素游戏", "本地排行榜高分榜", "移动端触控优化"]
        },
        hi: {
          categoryLabel: "गेम आर्केड",
          description: "रेट्रो गेम आर्केड जिसमें 23 हल्के मिनी-गेम शामिल हैं।",
          longDescription: "कैनवास भौतिकी गणना, रेट्रो ग्राफिक्स और चिप्यून संगीत से सुसज्जित एक मोबाइल-अनुकूल गेमिंग डैशबोर्ड।",
          features: ["23 खेलने योग्य रेट्रो गेम", "स्थानीय स्कोरबोर्ड भंडारण", "टच लेआउट समर्थन"]
        }
      }
    },
  ];

  const CATEGORIES = [
    { value: "all", label: t("websites.all") },
    { value: "web", label: t("websites.webApps") },
    { value: "ai", label: t("websites.aiTools") },
    { value: "game", label: t("websites.games") },
  ];

  const filteredWebsites = websites.filter((site) => {
    const matchesCategory = activeCategory === "all" || site.category === activeCategory;
    const matchesSearch =
      site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      site.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 px-1 sm:px-0 animate-in fade-in duration-300">
      <PageSEO
        title={t("websites.title")}
        description={t("websites.subtitle")}
        path="/websites"
        keywords="Ujwal Singh projects, web apps, Wanderlust Adventures, CuteList, Newsnap"
      />
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-primary/10">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold gradient-text">
            {t("websites.title")}
          </h1>
          <p className="text-muted-foreground text-xs mt-0.5">
            {t("websites.subtitle")}
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("websites.searchPlaceholder")}
            className="w-full bg-background/50 border border-primary/10 rounded-xl pl-8 pr-4 py-2 text-xs focus:outline-none focus:border-primary/40 transition-all"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
        <SlidersHorizontal className="w-3.5 h-3.5 text-muted-foreground shrink-0 hidden sm:inline" />
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
              activeCategory === cat.value
                ? "bg-primary border-primary text-primary-foreground shadow-sm shadow-primary/15 scale-102"
                : "bg-card/40 border-primary/10 hover:border-primary/25 text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {filteredWebsites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {filteredWebsites.map((site, index) => {
            const detail = site.translations[language] || site.translations["en"];
            return (
              <div
                key={site.name}
                onClick={() => setSelectedProject(site)}
                className="hover-lift glass-card overflow-hidden group cursor-pointer flex flex-col h-full hover:border-primary/25 border border-primary/10"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-full h-36 bg-muted overflow-hidden relative border-b border-primary/5">
                  <img
                    src={site.img}
                    alt={site.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80`;
                    }}
                  />
                  <Badge className="absolute top-2.5 right-2.5 bg-background/80 text-foreground border border-primary/15 backdrop-blur-md text-[9px] hover:bg-background/90 px-1.5 py-0.5">
                    {detail.categoryLabel}
                  </Badge>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm sm:text-base flex items-center justify-between group-hover:text-primary transition-colors">
                      {site.name}
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-0.5 transition-transform shrink-0" />
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {detail.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-2 border-t border-primary/5">
                    {site.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-semibold bg-primary/5 border border-primary/10 text-primary px-1.5 py-0.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 glass-card">
          <p className="text-xs text-muted-foreground font-medium">{t("websites.noProjects")}</p>
        </div>
      )}

      {/* Detail Dialog */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-md bg-card/95 backdrop-blur-xl border border-primary/20 shadow-2xl p-5 rounded-2xl animate-in fade-in duration-300">
          {selectedProject && (() => {
            const detail = selectedProject.translations[language] || selectedProject.translations["en"];
            return (
              <>
                <DialogHeader className="mb-2">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Badge className="bg-primary/20 text-primary border border-primary/20 text-[10px] px-2 py-0.5 rounded-full font-semibold">
                      {detail.categoryLabel}
                    </Badge>
                  </div>
                  <DialogTitle className="text-xl font-bold flex items-center justify-between">
                    {selectedProject.name}
                  </DialogTitle>
                  <DialogDescription className="text-xs text-muted-foreground">
                    Project specifications.
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                  <div className="w-full h-36 rounded-xl overflow-hidden bg-muted border border-primary/10">
                    <img
                      src={selectedProject.img}
                      alt={selectedProject.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80`;
                      }}
                    />
                  </div>

                  <div>
                    <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-1">
                      <Globe className="w-3 h-3 text-primary" /> {t("websites.overview")}
                    </h4>
                    <p className="text-xs text-foreground/90 leading-relaxed">
                      {detail.longDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-primary" /> {t("websites.highlights")}
                    </h4>
                    <ul className="grid grid-cols-1 gap-1.5 text-xs text-foreground/80 pl-1">
                      {detail.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 flex items-center gap-1">
                      <Code className="w-3 h-3 text-primary" /> {t("websites.techStack")}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tech.map((t) => (
                        <Badge
                          key={t}
                          variant="secondary"
                          className="bg-muted text-foreground border border-border/80 text-[10px] px-2 py-0.5"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2 mt-5 pt-3 border-t border-primary/10">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-3.5 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-all cursor-pointer"
                  >
                    {t("websites.close")}
                  </button>
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 rounded-xl flex items-center gap-1 shadow-md shadow-primary/15 transition-all hover:scale-102"
                  >
                    <span>{t("websites.visitLive")}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </>
            );
          })()}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Websites;