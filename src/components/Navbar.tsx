import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, User, Globe, Quote, Mail, Languages, ChevronDown, Sparkles
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Language } from "@/lib/translations";
import { ThemeToggle } from "@/components/ThemeToggle";

const menuItems = [
  { key: "overview", url: "/", icon: Home },
  { key: "bio", url: "/about", icon: User },
  { key: "works", url: "/websites", icon: Globe },
  { key: "reflections", url: "/thoughts", icon: Quote },
  { key: "contact", url: "/contact", icon: Mail },
];

const LANGUAGES: { code: Language; label: string }[] = [
  { code: "en", label: "English (EN)" },
  { code: "fr", label: "Français (FR)" },
  { code: "es", label: "Español (ES)" },
  { code: "zh", label: "中文 (ZH)" },
  { code: "hi", label: "हिन्दी (HI)" },
];

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setLangDropdownOpen(false);
  };

  return (
    <div className="w-full relative z-[90]">
      {/* ─── DESKTOP HEADER NAVBAR ─── */}
      <header className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-[90] w-[95%] max-w-5xl h-16 px-6 items-center justify-between glass-card border border-primary/10 shadow-lg">
        {/* Logo and Status */}
        <Link to="/" className="flex items-center gap-2 font-bold text-base hover:opacity-80 transition-opacity">
          <span className="text-primary text-lg">✨</span>
          <span className="gradient-text font-display">Ujwal Singh</span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
        </Link>

        {/* Links */}
        <nav className="flex items-center gap-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.url;
            return (
              <Link
                key={item.key}
                to={item.url}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-xl cursor-pointer ${
                  isActive 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                }`}
              >
                {t(`nav.${item.key}`)}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Language selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-primary/10 bg-card/60 text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-primary/25 transition-all cursor-pointer"
            >
              <Languages className="w-3.5 h-3.5" />
              <span className="uppercase">{language}</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${langDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 py-1 rounded-xl bg-card/95 backdrop-blur-xl border border-primary/15 shadow-xl animate-in fade-in duration-200">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full text-left px-4 py-2 text-xs font-semibold hover:bg-primary/10 transition-colors cursor-pointer ${
                      language === lang.code ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <ThemeToggle />
        </div>
      </header>

      {/* ─── MOBILE TOP BANNER ─── */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-[90] h-14 px-4 flex items-center justify-between bg-background/70 backdrop-blur-lg border-b border-primary/10">
        <Link to="/" className="flex items-center gap-1.5 font-bold text-sm">
          <span className="text-primary text-base">✨</span>
          <span className="gradient-text font-display">Ujwal Singh</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
        </Link>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Mobile Language selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-primary/10 bg-card/50 text-[10px] font-bold text-muted-foreground hover:text-foreground cursor-pointer"
            >
              <Languages className="w-3 h-3" />
              <span className="uppercase">{language}</span>
              <ChevronDown className="w-2.5 h-2.5" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 py-1 rounded-xl bg-card/95 backdrop-blur-xl border border-primary/15 shadow-xl">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full text-left px-3 py-2 text-[11px] font-semibold hover:bg-primary/10 transition-colors cursor-pointer ${
                      language === lang.code ? "text-primary bg-primary/5" : "text-muted-foreground"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <ThemeToggle />
        </div>
      </header>

      {/* ─── MOBILE BOTTOM TAB BAR ─── */}
      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-[90] w-[90%] h-16 rounded-2xl glass-card border border-primary/15 shadow-xl flex items-center justify-around px-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.url;
          const Icon = item.icon;
          return (
            <Link
              key={item.key}
              to={item.url}
              className={`flex flex-col items-center justify-center gap-1 py-1 px-2 rounded-xl transition-all cursor-pointer ${
                isActive 
                  ? "text-primary scale-105" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? "scale-110" : ""}`} />
              <span className="text-[9px] font-bold tracking-wider">{t(`nav.${item.key}`)}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
