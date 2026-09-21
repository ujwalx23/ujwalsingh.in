import React, { useState, useEffect } from "react";
import { 
  ExternalLink, ArrowRight, Sparkles, Monitor, Cpu, 
  User, MapPin, Award, BarChart3, Database,
  FileText, BookOpen, GraduationCap, Briefcase, Code2, Layers,
  Instagram, Youtube, Code, Share2, Copy, Check, Terminal,
  SlidersHorizontal, Mail, CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";
import ContactSection from "@/components/ContactSection";
import PageSEO from "@/components/PageSEO";
import { LiveStatusWidget } from "@/components/LiveStatusWidget";
import { DeveloperTerminal } from "@/components/DeveloperTerminal";
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
    <span className="font-semibold text-primary font-mono">
      {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </span>
  );
};

// Platform Icons
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

const OrcidIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor">
    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-1.847-1.238-3.722-3.806-3.722h-2.513z"/>
  </svg>
);

const QuoraIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor">
    <path d="M12.738 21.989c-1.2 0-2.357-.18-3.421-.516-.478.809-1.108 1.414-1.927 1.806-.819.392-1.691.588-2.619.588-.145 0-.326-.008-.541-.024l-.361-.036v-2.035l.24-.012c.687-.036 1.24-.305 1.662-.805.421-.501.632-1.206.632-2.116 0-.096-.004-.198-.012-.307a8.8 8.8 0 01-2.365-2.845C2.942 14.153 2.5 12.489 2.5 10.662c0-1.819.442-3.48 1.326-4.986.885-1.505 2.092-2.692 3.621-3.559C8.976 1.251 10.681.817 12.54.817c1.88 0 3.592.434 5.137 1.3 1.546.867 2.76 2.054 3.644 3.559.884 1.506 1.326 3.167 1.326 4.986 0 1.827-.442 3.491-1.326 4.992-.884 1.501-2.098 2.684-3.644 3.547-1.545.864-3.258 1.295-5.137 1.295-.604 0-1.188-.056-1.752-.168.192.72.529 1.277 1.012 1.67.482.392 1.092.589 1.83.589a4.9 4.9 0 001.092-.12c.355-.08.727-.2 1.116-.361l.264-.108.721 1.651-.216.096a7.074 7.074 0 01-1.332.409c-.478.111-.999.167-1.561.167zm-.006-3.623c1.447 0 2.764-.327 3.953-.981 1.189-.654 2.123-1.558 2.804-2.711.68-1.154 1.02-2.463 1.02-3.927 0-1.464-.34-2.773-1.02-3.927-.681-1.154-1.615-2.058-2.804-2.711-1.189-.654-2.506-.981-3.953-.981-1.431 0-2.736.327-3.917.981-1.181.653-2.108 1.557-2.78 2.711-.673 1.154-1.009 2.463-1.009 3.927 0 1.464.336 2.773 1.009 3.927.672 1.153 1.599 2.057 2.78 2.711 1.181.654 2.486.981 3.917.981z"/>
  </svg>
);

const RedditIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701z"/>
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const ThreadsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.88-.73 2.087-1.146 3.497-1.212.982-.046 1.898.04 2.738.259-.082-.783-.319-1.408-.713-1.876-.505-.6-1.286-.91-2.32-.921h-.048c-.795.003-1.81.222-2.508.917l-1.417-1.428c1.043-1.038 2.457-1.587 4.09-1.587h.075c1.6.018 2.905.545 3.88 1.566.945.99 1.475 2.378 1.575 4.129.168.053.335.111.499.174 1.326.503 2.394 1.329 3.09 2.39.87 1.326 1.086 2.977.607 4.647-.732 2.556-2.882 4.387-6.063 5.163-1.202.293-2.49.429-3.834.386zm1.106-10.553c-.781.036-1.442.217-1.906.52-.392.254-.625.58-.658.918-.04.432.156.838.553 1.143.488.374 1.192.545 1.981.482 1.076-.086 1.9-.466 2.45-1.131.392-.474.64-1.086.747-1.833-.928-.195-1.995-.236-3.167-.099z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
  </svg>
);

const allSocialPlatforms = [
  { name: "GitHub", handle: "ujwalx23", url: "https://github.com/ujwalx23", category: "Open Source Code", icon: GitHubIcon, badge: "Primary" },
  { name: "LinkedIn", handle: "ujwalsingh23", url: "https://www.linkedin.com/in/ujwalsingh23/", category: "Professional Network", icon: LinkedInIcon, badge: "Verified" },
  { name: "ORCID", handle: "0009-0004-0490-010X", url: "https://orcid.org/0009-0004-0490-010X", category: "Research & Academia", icon: OrcidIcon, badge: "Researcher" },
  { name: "X (Twitter)", handle: "@UJWALSINGH23", url: "https://x.com/UJWALSINGH23", category: "Tech & Updates", icon: XIcon, badge: "Creator" },
  { name: "LeetCode", handle: "UjwalSingh23", url: "https://leetcode.com/u/UjwalSingh23/", category: "Algorithms & DSA", icon: Code, badge: "Coding" },
  { name: "TakeUforward", handle: "Ujwal Singh", url: "https://takeuforward.org/profile/Ujwal%20Singh", category: "DSA Mastery", icon: BookOpen, badge: "Coding" },
  { name: "YouTube", handle: "@UjwalSingh", url: "https://www.youtube.com/channel/UCbtH84Ir66Tkc--d7eG5p8g", category: "Video Platform", icon: Youtube, badge: "Channel" },
  { name: "Quora", handle: "UJWAL-SINGH-85", url: "https://www.quora.com/profile/UJWAL-SINGH-85", category: "Q&A & Discussion", icon: QuoraIcon, badge: "Discourse" },
  { name: "Reddit", handle: "u/UjwalSingh45", url: "https://www.reddit.com/user/UjwalSingh45/", category: "Tech Discussions", icon: RedditIcon, badge: "Community" },
  { name: "Discord", handle: "ujwalx23", url: "https://discord.com/users/1243952128272371764", category: "Developer Chat", icon: DiscordIcon, badge: "Chat" },
  { name: "Threads", handle: "@ujwalx23", url: "https://www.threads.com/@ujwalx23", category: "Microblogging", icon: ThreadsIcon, badge: "Social" },
  { name: "Instagram", handle: "@ujwalx23", url: "https://www.instagram.com/ujwalx23/", category: "Visual & Life", icon: Instagram, badge: "Social" },
  { name: "Pinterest", handle: "@UjwalSingh23", url: "https://in.pinterest.com/UjwalSingh23/", category: "Design Inspiration", icon: PinterestIcon, badge: "Design" }
];

const Home = () => {
  const { t, language } = useLanguage();
  const [projectCategory, setProjectCategory] = useState<"all" | "client" | "ai" | "web">("all");
  const [copiedCitation, setCopiedCitation] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const citations = {
    ieee: `U. Singh, "Exploring the Role of Artificial Intelligence in Convenient and Accessible Healthcare Support Systems," TechRxiv, Feb. 2026. doi: 10.36227/techrxiv.177006061.17458864/v1.`,
    bibtex: `@article{singh2026exploring,
  author = {Singh, Ujwal},
  title = {Exploring the Role of Artificial Intelligence in Convenient and Accessible Healthcare Support Systems},
  journal = {TechRxiv},
  year = {2026},
  doi = {10.36227/techrxiv.177006061.17458864/v1}
}`,
    apa: `Singh, U. (2026). Exploring the Role of Artificial Intelligence in Convenient and Accessible Healthcare Support Systems. TechRxiv. https://doi.org/10.36227/techrxiv.177006061.17458864/v1`
  };

  const copyCitation = (format: "ieee" | "bibtex" | "apa") => {
    navigator.clipboard.writeText(citations[format]);
    setCopiedCitation(format);
    setTimeout(() => setCopiedCitation(null), 2500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("ujwalsingh426@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const allProjects = [
    {
      name: "Namami Vindhyavasini",
      category: "client",
      badge: "Production Client",
      tags: ["React", "TypeScript", "PostgreSQL", "Supabase"],
      description: language === "en" ? "Production client temple portal with dynamic blogs, event management, and custom admin dashboard using React, TypeScript, and Supabase." :
                   language === "fr" ? "Portail client en production avec blog dynamique, gestion d'événements et tableau de bord admin avec React, Supabase et PostgreSQL." :
                   language === "es" ? "Portal de templo en producción con gestión de eventos, blogs dinámicos y panel de administración con React, Supabase y PostgreSQL." :
                   language === "zh" ? "基于 React、TypeScript、Supabase 与 PostgreSQL 开发的生产级客户商业门户，配备动态内容与管理后台。" :
                   "रिएक्ट, टाइपस्क्रिप्ट, पोस्टग्रेएसक्यूएल और सुपरबेस के साथ वास्तविक क्लाइंट के लिए संपूर्ण प्रोडक्शन मंदिर पोर्टल।",
      img: `${import.meta.env.BASE_URL}images/namami.png`,
      url: "https://namamivindhyavasini.in",
    },
    {
      name: "MediSoul",
      category: "ai",
      badge: "AI Research Implementation",
      tags: ["AI Chatbot", "TypeScript", "React", "Clinical Triage"],
      description: language === "en" ? "AI medical companion providing symptom analysis, health tracking, and custom fine-tuned client-side AI chatbot. Grounded in TechRxiv research (DOI: 10.36227/techrxiv.177006061.17458864/v1)." :
                   language === "fr" ? "Compagnon médical IA avec analyse des symptômes, suivi de santé et chatbot IA client affiné sur jeux de données." :
                   language === "es" ? "Compañero médico con IA para análisis de síntomas, seguimiento de salud y chatbot afinado con datos médicos." :
                   language === "zh" ? "AI 智能医疗助手，提供症状分析、个性化健康洞察与基于专属健康数据集微调的客户端对话模型。" :
                   "एआई-संचालित चिकित्सा साथी जो लक्षण विश्लेषण, स्वास्थ्य इतिहास और विशेष फाइन-ट्यून एआई चैटबॉट प्रदान करता है।",
      img: `${import.meta.env.BASE_URL}images/medisoul.png`,
      url: "https://cure23.vercel.app/",
    },
    {
      name: "Wanderlust Adventures",
      category: "web",
      badge: "Web Platform",
      tags: ["React", "Interactive Maps", "Tailwind CSS"],
      description: language === "en" ? "Modern immersive travel platform showcasing India's cultural heritage landmarks and scenic landscapes." :
                   language === "fr" ? "Plateforme de voyage moderne pour explorer le patrimoine culturel et les paysages emblématiques de l'Inde." :
                   language === "es" ? "Plataforma de viajes moderna para descubrir el patrimonio cultural y paisajes de la India." :
                   language === "zh" ? "用于探索印度丰富历史文化遗产与壮丽自然景观的现代化旅游导览应用。" :
                   "भारत की समृद्ध सांस्कृतिक विरासत और दर्शनीय स्थलों की खोज के लिए एक आधुनिक यात्रा मंच।",
      img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766827943351.png",
      url: "https://wanderlustadventures23.vercel.app/",
    },
    {
      name: "CuteList",
      category: "web",
      badge: "Gamified Web App",
      tags: ["React", "LocalStorage", "Audio UI Feedback"],
      description: language === "en" ? "Delightful task manager board featuring custom pastel layouts, positive audio feedback triggers, and smooth list transitions." :
                   language === "fr" ? "Gestionnaire de tâches avec thèmes pastels et retour audio interactif." :
                   language === "es" ? "Tablero de tareas lúdico con temas pastel y retroalimentación de audio." :
                   language === "zh" ? "带有柔和马卡龙色调的趣味任务管理板，配备完成音效与状态持久化。" :
                   "पेस्टल थीम और सकारात्मक ऑडियो प्रतिक्रिया के साथ डिज़ाइन किया गया प्यारा कार्य प्रबंधक बोर्ड।",
      img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766827964162.png",
      url: "https://cute23.vercel.app/",
    },
    {
      name: "Newsnap",
      category: "web",
      badge: "News Platform",
      tags: ["React", "News API", "Source Verification"],
      description: language === "en" ? "Credibility-driven global short news platform aggregating world events with source citation rankings." :
                   language === "fr" ? "Actualités mondiales courtes avec indices de crédibilité des sources pour informations fiables." :
                   language === "es" ? "Noticias globales resumidas con clasificación de credibilidad para asegurar objetividad." :
                   language === "zh" ? "以可信度为核心的全球短新闻简报，附带信誉评级以确保事实客观性。" :
                   "विश्वसनीयता-संचालित वैश्विक लघु समाचार स्नैपशॉट और स्रोत सत्यापन सूचकांक।",
      img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766828023996.png",
      url: "https://newsnapglobal.vercel.app",
    },
    {
      name: "Delve Together",
      category: "web",
      badge: "Collaborative Space",
      tags: ["Next.js", "Socket.io", "Real-Time Rooms"],
      description: language === "en" ? "Focused discussion alternative space with live chat rooms and shared notes document boards." :
                   language === "fr" ? "Salons collaboratifs pour des discussions mondiales calmes avec notes partagées." :
                   language === "es" ? "Salas de debate colaborativas con tableros de notas compartidos en tiempo real." :
                   language === "zh" ? "用于对全球事务进行理性探讨的实时协作交流室与共享看板平台。" :
                   "सार्थक चर्चाओं के लिए सहयोगी कमरे, दस्तावेज़ बोर्ड और लाइव चैट रूम।",
      img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766828003355.png",
      url: "https://delvetogether.vercel.app",
    }
  ];

  const displayedProjects = allProjects.filter(p => {
    if (projectCategory === "all") return true;
    return p.category === projectCategory;
  });

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
      title: language === "en" ? "SAP Analytics Cloud (SAC)" :
             language === "fr" ? "SAP Analytics Cloud (SAC)" :
             language === "es" ? "SAP Analytics Cloud (SAC)" :
             language === "zh" ? "SAP 分析云 (SAC)" :
             "एसएपी एनालिटिक्स क्लाउड (SAC)",
      desc: language === "en" ? "Certified analytical data modelling, interactive story dashboards, and enterprise BI reporting." :
            language === "fr" ? "Modélisation de données analytiques certifiée, tableaux de bord interactifs et reporting décisionnel d'entreprise." :
            language === "es" ? "Modelado analítico de datos certificado, paneles de control interactivos e informes de BI empresarial." :
            language === "zh" ? "官方认证数据建模、交互式故事仪表板呈现与企业级商务智能(BI)报表分析。" :
            "प्रमाणित एनालिटिकल डेटा मॉडलिंग, इंटरैक्टिव स्टोरी डैशबोर्ड और एंटरप्राइज बीआई रिपोर्टिंग।",
      icon: BarChart3
    },
    {
      title: language === "en" ? "AI & Intelligent Systems" :
             language === "fr" ? "IA et Systèmes Intelligents" :
             language === "es" ? "IA y Systèmes Intelligentes" :
             language === "zh" ? "人工智能与智能系统" :
             "एआई और इंटेलिजेंट सिस्टम",
      desc: language === "en" ? "Integrating client-side LLM completions, natural language bots, and smart assistive features." :
            language === "fr" ? "Intégration de complétions LLM côté client et de bots en langage naturel." :
            language === "es" ? "Integración de finalizaciones de LLM en el cliente y bots de lenguaje natural." :
            language === "zh" ? "集成客户端大语言模型(LLM)接口、自然语言处理机器人和智能化日常应用。" :
            "क्लाइंट-साइड एआई, प्राकृतिक भाषा बॉट और स्मार्ट सुविधाओं का एकीकरण।",
      icon: Cpu
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

  const connectSectionTitle = language === "en" ? "Connect With Ujwal Singh" :
                              language === "fr" ? "Se connecter avec Ujwal Singh" :
                              language === "es" ? "Conectar con Ujwal Singh" :
                              language === "zh" ? "与 Ujwal Singh 建立连接" :
                              "उज्वल सिंह से जुड़ें";

  const connectSectionSubtitle = language === "en" ? "Official developer profiles, research identity, coding handles, and verified networks across the web." :
                                 language === "fr" ? "Profils officiels de développeur, identité de recherche et réseaux vérifiés." :
                                 language === "es" ? "Perfiles oficiales de desarrollador, identidad investigadora y redes verificadas." :
                                 language === "zh" ? "官方开发者主页、学术科研身份认证、算法编程账号与全网社交网络。" :
                                 "आधिकारिक डेवलपर प्रोफाइल, शोध पहचान, कोडिंग हैंडल और सत्यापित नेटवर्क।";

  const focusTitle = language === "en" ? "Core Specializations" :
                     language === "fr" ? "Spécialisations de base" :
                     language === "es" ? "Especialidades principales" :
                     language === "zh" ? "核心技术领域" :
                     "मुख्य विशेषज्ञता";

  const focusDesc = language === "en" ? "Modern engineering patterns used to craft scalable applications." :
                    language === "fr" ? "Modèles d'ingénierie modernes utilisés pour créer des applications évolutives." :
                    language === "es" ? "Patrones de ingeniería modernos utilizados para crear aplicaciones escalables." :
                    language === "zh" ? "用于构建可扩展应用程序的现代工程设计模式。" :
                    "स्केलेबल एप्लिकेशन बनाने के लिए उपयोग किए जाने वाले आधुनिक तरीके।";

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 md:space-y-16 px-1 sm:px-0 animate-in fade-in duration-300">
      <PageSEO
        title="Ujwal Singh | Full-Stack Developer & Software Engineer (Official Website)"
        description="Official personal website of Ujwal Singh: Full-Stack Developer, Computer Engineering student at Mumbai University (CGPA 8.13), and SAP Certified Data Analyst (SAC). Explore real projects, TechRxiv AI research, and engineering work."
        path="/"
        keywords="Ujwal Singh, official website, Full-Stack Developer, Software Engineer, React, TypeScript, PostgreSQL, Supabase, SAP Certified, SAC, TechRxiv AI research, Mumbai University"
        breadcrumbs={[{ name: "Home", path: "/" }]}
      />

      {/* Hero Section */}
      <section className="text-center pt-6 pb-0 md:pt-14 md:pb-4 fade-in-up flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-4 animate-pulse-glow">
          <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "3s" }} />
          <span>{t("home.available")}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-2 animate-gradient-shift">
          {t("home.title")}
        </h1>
        <p className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Full-Stack Developer • Computer Engineering at Mumbai University • SAP Certified (SAC)
        </p>
        <div className="text-muted-foreground text-sm sm:text-base md:text-lg font-medium min-h-[30px] flex items-center justify-center gap-1.5">
          <span>{t("home.builds")}</span>
          <Typewriter words={t("home.roles")} />
        </div>

        {/* Primary Entity Navigation Hub */}
        <nav aria-label="Quick Site Directory" className="w-full max-w-4xl mt-6 p-2 rounded-2xl glass-card border border-primary/10">
          <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-1.5 text-[11px] font-semibold text-muted-foreground">
            <Link to="/about" className="p-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-all flex flex-col items-center gap-1">
              <User className="w-4 h-4 text-primary" />
              <span>About</span>
            </Link>
            <Link to="/projects" className="p-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-all flex flex-col items-center gap-1">
              <Layers className="w-4 h-4 text-primary" />
              <span>Projects</span>
            </Link>
            <Link to="/research" className="p-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-all flex flex-col items-center gap-1">
              <FileText className="w-4 h-4 text-primary" />
              <span>Research</span>
            </Link>
            <Link to="/certifications" className="p-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-all flex flex-col items-center gap-1">
              <Award className="w-4 h-4 text-primary" />
              <span>Certifications</span>
            </Link>
            <Link to="/skills" className="p-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-all flex flex-col items-center gap-1">
              <Code2 className="w-4 h-4 text-primary" />
              <span>Skills</span>
            </Link>
            <Link to="/experience" className="p-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-all flex flex-col items-center gap-1">
              <Briefcase className="w-4 h-4 text-primary" />
              <span>Experience</span>
            </Link>
            <Link to="/blog" className="p-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-all flex flex-col items-center gap-1">
              <BookOpen className="w-4 h-4 text-primary" />
              <span>Blog</span>
            </Link>
            <Link to="/social" className="p-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-all flex flex-col items-center gap-1">
              <Share2 className="w-4 h-4 text-primary" />
              <span>Connect</span>
            </Link>
            <Link to="/resume" className="p-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-all flex flex-col items-center gap-1">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span>Resume</span>
            </Link>
            <Link to="/contact" className="p-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-all flex flex-col items-center gap-1">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Contact</span>
            </Link>
          </div>
        </nav>

        {/* Live Radar Availability & Mumbai Time Widget */}
        <div className="w-full max-w-4xl mt-3">
          <LiveStatusWidget />
        </div>
      </section>

      {/* Key Metrics & Authority At A Glance */}
      <section className="fade-in-up stagger-1">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
          <div className="glass-card p-4 rounded-2xl border border-primary/10 flex flex-col items-center text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-primary font-mono">8.13</span>
            <span className="text-[11px] font-semibold text-foreground mt-0.5">CGPA (out of 10)</span>
            <span className="text-[10px] text-muted-foreground">Mumbai University B.E.</span>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-primary/10 flex flex-col items-center text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-primary font-mono">1</span>
            <span className="text-[11px] font-semibold text-foreground mt-0.5">Published Research</span>
            <span className="text-[10px] text-muted-foreground">TechRxiv AI Healthcare</span>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-primary/10 flex flex-col items-center text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-primary font-mono">SAP</span>
            <span className="text-[11px] font-semibold text-foreground mt-0.5">Certified Analyst</span>
            <span className="text-[10px] text-muted-foreground">SAC (C_SAC_2601)</span>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-primary/10 flex flex-col items-center text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-primary font-mono">13</span>
            <span className="text-[11px] font-semibold text-foreground mt-0.5">Connected Networks</span>
            <span className="text-[10px] text-muted-foreground">Verified Developer Identity</span>
          </div>
        </div>
      </section>

      {/* Interactive Developer CLI Terminal */}
      <section className="fade-in-up stagger-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 flex items-center gap-1">
              <Terminal className="w-3 h-3" />
              Interactive Console
            </span>
            <span className="text-xs text-muted-foreground">Type commands or click quick pills</span>
          </div>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-semibold self-start sm:self-auto cursor-pointer"
          >
            {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Mail className="w-3.5 h-3.5" />}
            <span>{copiedEmail ? "Email Copied (ujwalsingh426@gmail.com)" : "Copy Contact Email"}</span>
          </button>
        </div>
        <DeveloperTerminal />
      </section>

      {/* About Me Preview Card Section */}
      <section className="fade-in-up stagger-2">
        <div className="glass-card p-6 md:p-8 border border-primary/10">
          <div className="text-center md:text-left space-y-3">
            <div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
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
              <h2 className="text-lg sm:text-xl font-bold font-display flex items-center justify-center md:justify-start gap-1.5">
                <User className="w-4.5 h-4.5 text-primary" /> {aboutMeTitle}
              </h2>
              <p className="text-muted-foreground text-[11px] font-semibold mt-0.5">{t("about.subtitle")}</p>
            </div>
            <p className="text-xs text-foreground/80 leading-relaxed max-w-3xl">
              {t("about.bioText")}
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1.5">
              <Link
                to="/about"
                className="inline-flex items-center gap-1 text-primary hover:underline text-xs font-semibold"
              >
                <span>{readFullBio}</span> <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-muted-foreground text-xs">•</span>
              <Link
                to="/research"
                className="inline-flex items-center gap-1 text-foreground hover:text-primary text-xs font-semibold transition-colors"
              >
                <span>TechRxiv Research</span>
              </Link>
              <span className="text-muted-foreground text-xs">•</span>
              <Link
                to="/certifications"
                className="inline-flex items-center gap-1 text-foreground hover:text-primary text-xs font-semibold transition-colors"
              >
                <span>SAP Credentials</span>
              </Link>
            </div>
          </div>
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

      {/* Featured Projects with Interactive Category Filters */}
      <section className="fade-in-up stagger-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">{t("home.projectsTitle")}</h2>
            <p className="text-xs text-muted-foreground mt-0.5">{t("home.projectsDesc")}</p>
          </div>
          <Link to="/projects" className="flex items-center gap-1 text-primary hover:underline text-xs sm:text-sm font-semibold shrink-0">
            <span>{t("home.exploreAll")}</span> <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="flex items-center gap-1 text-xs text-muted-foreground mr-1">
            <SlidersHorizontal className="w-3.5 h-3.5 text-primary" />
            <span>Filter:</span>
          </div>
          <button
            type="button"
            onClick={() => setProjectCategory("all")}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              projectCategory === "all"
                ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                : "bg-card/60 text-muted-foreground hover:text-foreground border border-primary/10"
            }`}
          >
            All ({allProjects.length})
          </button>
          <button
            type="button"
            onClick={() => setProjectCategory("client")}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              projectCategory === "client"
                ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                : "bg-card/60 text-muted-foreground hover:text-foreground border border-primary/10"
            }`}
          >
            Production Client (1)
          </button>
          <button
            type="button"
            onClick={() => setProjectCategory("ai")}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              projectCategory === "ai"
                ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                : "bg-card/60 text-muted-foreground hover:text-foreground border border-primary/10"
            }`}
          >
            AI & Healthcare (1)
          </button>
          <button
            type="button"
            onClick={() => setProjectCategory("web")}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              projectCategory === "web"
                ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                : "bg-card/60 text-muted-foreground hover:text-foreground border border-primary/10"
            }`}
          >
            Web Apps (4)
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => {
            return (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card overflow-hidden group flex flex-col h-full border border-primary/10 hover-lift hover:border-primary/30 transition-all cursor-pointer"
              >
                <div className="w-full h-44 bg-muted overflow-hidden relative border-b border-primary/10">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-contain bg-muted/20 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80";
                    }}
                  />
                  <span className="absolute top-2.5 right-2.5 bg-background/80 text-primary border border-primary/20 backdrop-blur-md text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">
                    {project.badge}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-bold text-base mb-1.5 flex items-center justify-between group-hover:text-primary transition-colors">
                      <span>{project.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-0.5 group-hover:text-primary transition-transform" />
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-primary/10">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/5 text-primary/90 border border-primary/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Research & Publications Spotlight with 1-Click Interactive Citations */}
      <section className="fade-in-up">
        <div className="glass-card p-6 md:p-8 border border-primary/20 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                Published Research
              </span>
              <span className="text-[10px] font-semibold text-muted-foreground px-2 py-0.5 rounded-full bg-foreground/5">
                TechRxiv · Feb 2026
              </span>
            </div>
            <Link to="/research" className="flex items-center gap-1 text-primary hover:underline text-xs font-semibold self-start sm:self-auto">
              <span>View Full Paper & Abstract</span> <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div>
            <h3 className="text-base sm:text-xl font-bold text-foreground">
              "Exploring the Role of Artificial Intelligence in Convenient and Accessible Healthcare Support Systems"
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              Author: <strong>Ujwal Singh</strong> · Affiliation: Department of Computer Engineering, Shree L. R. Tiwari College of Engineering (University of Mumbai)
            </p>
          </div>

          <p className="text-xs text-foreground/80 leading-relaxed max-w-3xl">
            This research examines how artificial intelligence and modern software architectures can be deployed to establish accessible, user-friendly healthcare support systems. Crucially, the paper establishes that AI must operate as an assistive decision-support companion rather than an autonomous diagnostic replacement for clinical doctors.
          </p>

          {/* Interactive 1-Click Citation Quick Copier */}
          <div className="p-3.5 rounded-xl bg-card/40 border border-primary/15 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-[11px] font-bold text-foreground flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5 text-primary" />
                <span>1-Click Academic Citation:</span>
              </span>
              <div className="flex items-center gap-1.5">
                {(["ieee", "bibtex", "apa"] as const).map((fmt) => (
                  <button
                    key={fmt}
                    type="button"
                    onClick={() => copyCitation(fmt)}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer ${
                      copiedCitation === fmt
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-primary/10 hover:bg-primary/20 text-primary border border-primary/15"
                    }`}
                  >
                    {copiedCitation === fmt ? <Check className="w-3 h-3 text-green-300" /> : <Copy className="w-3 h-3" />}
                    <span>{fmt}</span>
                  </button>
                ))}
              </div>
            </div>
            {copiedCitation && (
              <p className="text-[11px] font-mono text-green-500 flex items-center gap-1 pt-1 animate-in fade-in">
                <CheckCircle2 className="w-3 h-3" />
                <span>Copied {copiedCitation.toUpperCase()} citation to clipboard!</span>
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-primary/10 text-xs">
            <div className="flex items-center gap-1 text-muted-foreground">
              <span className="font-semibold text-foreground">Publication:</span>
              <a href="https://www.techrxiv.org/doi/full/10.36227/techrxiv.177006061.17458864/v1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-mono text-[11px] inline-flex items-center gap-0.5">
                TechRxiv Article <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <span className="font-semibold text-foreground">DOI:</span>
              <a href="https://doi.org/10.36227/techrxiv.177006061.17458864/v1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-mono text-[11px]">
                10.36227/techrxiv.177006061.17458864/v1
              </a>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <span className="font-semibold text-foreground">ORCID:</span>
              <a href="https://orcid.org/0009-0004-0490-010X" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-mono text-[11px]">
                0009-0004-0490-010X
              </a>
            </div>
            <Link to="/research" className="inline-flex items-center gap-1 text-primary font-semibold hover:underline">
              <span>Read Abstract & Findings</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enterprise Certifications & Credentials Spotlight */}
      <section className="fade-in-up">
        <div className="glass-card p-6 md:p-8 border border-primary/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                Official Credential
              </span>
              <span className="text-[10px] font-semibold text-muted-foreground px-2 py-0.5 rounded-full bg-foreground/5">
                Verified by SAP
              </span>
            </div>
            <h3 className="text-base sm:text-xl font-bold text-foreground">
              SAP Certified - Data Analyst (SAP Analytics Cloud / C_SAC_2601)
            </h3>
            <p className="text-xs text-foreground/80 leading-relaxed">
              Certified in enterprise business intelligence, analytical data modelling (dimensions, measures, hierarchies), executive story design, live data blending with SAP S/4HANA & BTP, and automated machine learning forecasting with Smart Predict.
            </p>
          </div>

          <Link
            to="/certifications"
            className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-xl text-xs hover:opacity-90 transition-all shrink-0 shadow-md shadow-primary/10"
          >
            <Award className="w-4 h-4" />
            <span>Explore Credentials</span>
          </Link>
        </div>
      </section>

      {/* Connect With Me — Official Verified Network (All 13 Platforms) */}
      <section className="fade-in-up stagger-5" id="connect-with-me">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                Official Entity Network
              </span>
              <span className="text-[10px] font-semibold text-muted-foreground px-2 py-0.5 rounded-full bg-foreground/5">
                13 Verified Platforms
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">{connectSectionTitle}</h2>
            <p className="text-xs text-muted-foreground mt-0.5 max-w-2xl">{connectSectionSubtitle}</p>
          </div>
          <Link to="/social" className="flex items-center gap-1 text-primary hover:underline text-xs sm:text-sm font-semibold shrink-0">
            <span>Explore All 13 Profiles</span> <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {allSocialPlatforms.map((platform) => {
            const IconComponent = platform.icon;
            return (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="me noopener noreferrer"
                className="glass-card p-3.5 border border-primary/10 hover-lift hover:border-primary/30 flex flex-col justify-between group transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center text-primary group-hover:scale-105 group-hover:bg-primary/20 transition-all shrink-0">
                    <IconComponent />
                  </div>
                  <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-foreground/5 border border-foreground/10 text-muted-foreground">
                    {platform.badge}
                  </span>
                </div>
                <div className="mt-3">
                  <div className="flex items-center justify-between gap-1">
                    <h3 className="text-xs sm:text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                      {platform.name}
                    </h3>
                    <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all opacity-70 group-hover:opacity-100" />
                  </div>
                  <p className="text-[11px] text-muted-foreground font-mono truncate mt-0.5">
                    {platform.handle}
                  </p>
                  <p className="text-[10px] text-muted-foreground/80 mt-1">
                    {platform.category}
                  </p>
                </div>
              </a>
            );
          })}
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