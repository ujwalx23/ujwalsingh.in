import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Sparkles, Code2, Heart } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/siteConfig";

const Footer = () => {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const locales = {
    en: {
      bio: "Available for freelance & full-time collaborations. Let's create something together.",
      quickLinks: "Quick Links",
      builtWith: "Built With",
      status: "Status",
      online: "Available for work",
      handcrafted: "Handcrafted with passion & pixel-perfect precision.",
      nav: {
        overview: "Overview",
        bio: "Bio",
        works: "Works",
        reflections: "Reflections",
        contact: "Contact"
      }
    },
    fr: {
      bio: "Disponible pour des collaborations indépendantes et à plein temps. Créons quelque chose ensemble.",
      quickLinks: "Liens rapides",
      builtWith: "Construit avec",
      status: "Statut",
      online: "Disponible pour travailler",
      handcrafted: "Fabriqué avec passion et précision pixel-perfect.",
      nav: {
        overview: "Aperçu",
        bio: "Bio",
        works: "Projets",
        reflections: "Réflexions",
        contact: "Contact"
      }
    },
    es: {
      bio: "Disponible para colaboraciones freelance y a tiempo completo. Creemos algo juntos.",
      quickLinks: "Enlaces rápidos",
      builtWith: "Creado con",
      status: "Estado",
      online: "Disponible para trabajar",
      handcrafted: "Hecho a mano con pasión y precisión de píxel perfecto.",
      nav: {
        overview: "Inicio",
        bio: "Biografía",
        works: "Proyectos",
        reflections: "Reflexiones",
        contact: "Contacto"
      }
    },
    zh: {
      bio: "承接自由职业和全职合作开发项目。让我们携手创造卓越产品。",
      quickLinks: "快速链接",
      builtWith: "构建技术",
      status: "当前状态",
      online: "随时接受新项目",
      handcrafted: "精雕细琢，力求每一个像素的极致完美。",
      nav: {
        overview: "主页",
        bio: "简介",
        works: "作品",
        reflections: "感悟",
        contact: "联系"
      }
    },
    hi: {
      bio: "फ्रीलांस और फुल-टाइम सहयोग के लिए उपलब्ध। आइए मिलकर कुछ बनाएं।",
      quickLinks: "त्वरित लिंक्स",
      builtWith: "इसके साथ निर्मित",
      status: "स्थिति",
      online: "कार्य के लिए उपलब्ध",
      handcrafted: "जुनून और पिक्सेल-परफेक्ट सटीकता के साथ हस्तनिर्मित।",
      nav: {
        overview: "अवलोकन",
        bio: "बायो",
        works: "कार्य",
        reflections: "विचार",
        contact: "संपर्क"
      }
    }
  };

  const text = locales[language] || locales["en"];

  const menuItems = [
    { label: text.nav.overview, url: "/" },
    { label: text.nav.bio, url: "/about" },
    { label: text.nav.works, url: "/websites" },
    { label: text.nav.reflections, url: "/reflections" },
    { label: text.nav.contact, url: "/contact" },
    { label: "Privacy Policy", url: "/privacy" },
    { label: "Terms of Service", url: "/terms" },
  ];

  const socialLinks = [
    { icon: Linkedin, url: "https://www.linkedin.com/in/ujwalsingh23/", name: "LinkedIn" },
    { icon: Github, url: "https://github.com/ujwalx23", name: "GitHub" },
    { icon: Twitter, url: "https://x.com/UJWALSINGH23", name: "X" },
  ];

  return (
    <footer className="w-full mt-20 border-t border-primary/10 bg-card/20 backdrop-blur-xl relative z-10 pt-12 pb-6 px-4">
      {/* Visual background details */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 text-left">
        {/* Bio Col */}
        <div className="md:col-span-2 space-y-4">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="text-primary text-xl">✨</span>
            <span className="gradient-text font-display">Ujwal Singh</span>
          </Link>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
            Full-Stack Developer, Computer Engineering student at Mumbai University, and SAP Certified (SAC). Building modern web applications, client solutions, and intelligent systems.
          </p>
          <div className="text-xs text-muted-foreground space-y-1">
            <p>Email: <a href="mailto:ujwalsingh426@gmail.com" className="text-primary hover:underline font-medium">ujwalsingh426@gmail.com</a></p>
            <p>Domain: <a href={CONTACT_MAILTO} className="text-primary hover:underline font-medium">{CONTACT_EMAIL}</a></p>
          </div>
          <div className="flex items-center gap-3.5 pt-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-primary/5 hover:bg-primary/10 border border-primary/10 hover:border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
                  title={social.name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links Col */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/80 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-primary" /> {text.quickLinks}
          </h4>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.url}>
                <Link
                  to={item.url}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors hover:underline flex items-center gap-1"
                >
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Col */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/80 flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-primary" /> {text.builtWith}
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {["SAP SAC", "PostgreSQL", "Supabase", "React", "TypeScript", "Tailwind CSS", "Vite"].map((tech) => (
              <span
                key={tech}
                className="text-[9px] font-semibold bg-primary/5 border border-primary/10 text-primary/90 px-2 py-0.5 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="pt-2">
            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">{text.status}</div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/25 text-[10px] font-semibold text-green-500 animate-pulse-glow">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </span>
              <span>{text.online}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto pt-6 border-t border-primary/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-[11px] font-semibold text-muted-foreground">
          <span>© {currentYear} Ujwal Singh. All rights reserved.</span>
          <span>•</span>
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <span>•</span>
          <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
        <p className="text-[10px] text-muted-foreground/80 flex items-center gap-1.5">
          <span>{text.handcrafted}</span>
          <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
