import React, { useState, useEffect } from "react";
import { Cookie, ShieldCheck, X } from "lucide-react";
import { Link } from "react-router-dom";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("ujwal_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("ujwal_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem("ujwal_cookie_consent", "essential_only");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Cookie and storage preferences"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-[120] animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="glass-card p-4 sm:p-5 border border-primary/20 shadow-2xl rounded-2xl bg-card/95 backdrop-blur-xl relative">
        <button
          onClick={handleEssentialOnly}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors p-1"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
            <Cookie className="w-4 h-4" />
          </div>
          <div className="space-y-1 pr-4">
            <h3 className="font-bold text-xs sm:text-sm text-foreground flex items-center gap-1.5">
              <span>Preferences & Local Storage</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500"></span>
            </h3>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              We use lightweight local browser storage to remember your theme, language choice, and optimize your browsing experience. No personal ad trackers are used.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-3 border-t border-primary/10">
          <Link
            to="/privacy"
            onClick={() => setIsVisible(false)}
            className="text-[10px] text-primary hover:underline font-semibold"
          >
            Learn more in Privacy Policy
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={handleEssentialOnly}
              className="px-2.5 py-1 text-[10px] font-semibold text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors cursor-pointer"
            >
              Essential Only
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-3 py-1 text-[10px] font-bold text-primary-foreground bg-primary hover:opacity-90 rounded-lg shadow-sm shadow-primary/20 transition-all cursor-pointer hover:scale-102"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
