import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, User, Globe, Quote, Mail, Languages, ChevronDown
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Language } from "@/lib/translations";
import { ThemeToggle } from "@/components/ThemeToggle";

const menuItems = [
  { key: "overview", url: "/", icon: Home },
  { key: "bio", url: "/about", icon: User },
  { key: "works", url: "/websites", icon: Globe },
  { key: "reflections", url: "/reflections", icon: Quote },
  { key: "contact", url: "/contact", icon: Mail },
];

const LANGUAGES: { code: Language; label: string; nativeChar: string; nativeName: string }[] = [
  { code: "en", label: "English (EN)", nativeChar: "A", nativeName: "English" },
  { code: "fr", label: "Français (FR)", nativeChar: "É", nativeName: "Français" },
  { code: "es", label: "Español (ES)", nativeChar: "Ñ", nativeName: "Español" },
  { code: "zh", label: "中文 (ZH)", nativeChar: "中", nativeName: "中文" },
  { code: "hi", label: "हिन्दी (HI)", nativeChar: "अ", nativeName: "हिन्दी" },
];

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [showMobileLangs, setShowMobileLangs] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      // If the target is no longer in the document (e.g. unmounted during render), ignore it
      if (!document.contains(target)) return;
      
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setLangDropdownOpen(false);
  };

  return (
    <div className="w-full relative z-[90]">
      {/* ─── DESKTOP HEADER NAVBAR ─── */}
      <header className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-[90] w-[95%] max-w-5xl h-16 px-6 items-center justify-between glass-card overflow-visible border border-primary/10 shadow-lg">
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
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLangDropdownOpen(!langDropdownOpen);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-primary/10 bg-card/60 text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-primary/25 transition-all cursor-pointer"
            >
              <Languages className="w-3.5 h-3.5" />
              <span className="uppercase">{language}</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${langDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 py-1 rounded-xl bg-card/95 backdrop-blur-xl border border-primary/15 shadow-xl animate-in fade-in duration-200 z-50">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLanguageChange(lang.code);
                    }}
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

      {/* ─── MOBILE SCROLLABLE TAB BAR (Relocated Capsule Nav) ─── */}
      <div className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 z-[90] w-[94%]">
        <nav className="w-full h-16 rounded-2xl glass-card border border-primary/15 shadow-xl flex items-center overflow-x-auto mobile-nav-scrollbar px-4 gap-4 justify-start relative">
          {!showMobileLangs ? (
            <>
              {/* Navigation Links */}
              {menuItems.map((item) => {
                const isActive = location.pathname === item.url;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.key}
                    to={item.url}
                    className={`flex flex-col items-center justify-center gap-1 py-1 px-2 rounded-xl transition-all cursor-pointer shrink-0 ${
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

              {/* Divider */}
              <div className="h-8 w-[1px] bg-primary/15 shrink-0" />

              {/* Language Button Toggle */}
              <button
                onClick={() => setShowMobileLangs(true)}
                className="flex flex-col items-center justify-center gap-1 py-1 px-2 rounded-xl transition-all text-muted-foreground hover:text-foreground cursor-pointer shrink-0"
              >
                <Languages className="w-5 h-5" />
                <span className="text-[9px] font-bold tracking-wider uppercase">{language}</span>
              </button>
            </>
          ) : (
            <>
              {/* Back Button */}
              <button
                onClick={() => setShowMobileLangs(false)}
                className="flex items-center gap-1 py-1 px-2 rounded-xl transition-all text-primary hover:text-primary/80 cursor-pointer shrink-0 text-xs font-bold"
              >
                <span>← {language === "zh" ? "返回" : language === "hi" ? "पीछे" : "Back"}</span>
              </button>

              {/* Divider */}
              <div className="h-8 w-[1px] bg-primary/15 shrink-0" />

              {/* Horizontal Language Options */}
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    handleLanguageChange(lang.code);
                    setShowMobileLangs(false);
                  }}
                  className={`flex flex-col items-center justify-center px-3 py-1 rounded-xl cursor-pointer transition-all shrink-0 ${
                    language === lang.code
                      ? "bg-primary/20 text-primary border border-primary/20"
                      : "text-muted-foreground hover:text-foreground border border-transparent"
                  }`}
                >
                  <span className="text-base font-bold leading-none">{lang.nativeChar}</span>
                  <span className="text-[8px] font-semibold mt-0.5 opacity-70">{lang.nativeName}</span>
                </button>
              ))}
            </>
          )}

          {/* Divider */}
          <div className="h-8 w-[1px] bg-primary/15 shrink-0" />

          {/* Theme Toggle */}
          <div className="shrink-0 flex items-center justify-center">
            <ThemeToggle />
          </div>

          {/* Scroll fade overlay inside capsule */}
          <div className="absolute right-1 top-1 bottom-1 w-10 pointer-events-none bg-gradient-to-l from-card/85 via-card/30 to-transparent rounded-r-2xl z-20" />
        </nav>
      </div>
    </div>
  );
}
