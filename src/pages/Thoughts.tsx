import React, { useState, useEffect } from "react";
import { Quote, Send, PenTool, Sparkles, Trash2, Heart } from "lucide-react";
import PageSEO from "@/components/PageSEO";
import { useLanguage } from "@/hooks/useLanguage";

interface Thought {
  id: string | number;
  quote: string;
  author: string;
  gradient?: string;
  isCustom?: boolean;
}

const staticThoughts: Thought[] = [
  {
    id: 1,
    quote: "Be kind. It’s okay if someone doesn’t meet your expectations.",
    author: "Ujwal Singh",
    gradient: "from-primary/15 via-primary/5 to-background border-primary/20"
  },
  {
    id: 2,
    quote: "What if there is no other universe and this is the only one you get!?",
    author: "Ujwal Singh",
    gradient: "from-secondary/20 via-secondary/5 to-background border-secondary/20"
  },
  {
    id: 3,
    quote: "Pain is certain. Pain will go, but success will remain.",
    author: "Anonymous",
    gradient: "from-accent/20 via-accent/5 to-background border-accent/20"
  },
  {
    id: 4,
    quote: "Khud ko akela hokar kiske paas dekhte ho?",
    author: "Anonymous",
  },
  {
    id: 5,
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    id: 6,
    quote: "Just keep going, even on days you feel low!",
    author: "Ujwal Singh",
    gradient: "from-secondary/20 via-secondary/5 to-background border-secondary/20"
  },
];

const GRADIENTS = [
  { id: "coral", label: "Coral", class: "bg-gradient-to-br from-primary/15 via-primary/5 to-background border-primary/25" },
  { id: "teal", label: "Teal", class: "bg-gradient-to-br from-secondary/20 via-secondary/5 to-background border-secondary/25" },
  { id: "pink", label: "Pink", class: "bg-gradient-to-br from-accent/20 via-accent/5 to-background border-accent/25" },
];

const Thoughts = () => {
  const { t } = useLanguage();
  const [customThoughts, setCustomThoughts] = useState<Thought[]>([]);
  const [blacklistedThoughts, setBlacklistedThoughts] = useState<(string | number)[]>([]);
  const [quoteInput, setQuoteInput] = useState("");
  const [authorInput, setAuthorInput] = useState("");
  const [selectedGradient, setSelectedGradient] = useState("coral");

  useEffect(() => {
    // 1. Load custom thoughts
    const saved = localStorage.getItem("ujwal_custom_thoughts");
    if (saved) {
      try {
        setCustomThoughts(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading thoughts", e);
      }
    }

    // 2. Load blacklisted thoughts
    const blacklisted = localStorage.getItem("ujwal_deleted_thoughts");
    if (blacklisted) {
      try {
        setBlacklistedThoughts(JSON.parse(blacklisted));
      } catch (e) {
        console.error("Error loading blacklist", e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteInput.trim()) return;

    const authorName = authorInput.trim() || t("thoughts.guestLabel");
    const gradientClass = GRADIENTS.find(g => g.id === selectedGradient)?.class || "bg-card/60 border-primary/10";
    
    const newThought: Thought = {
      id: `custom_${Date.now()}`,
      quote: quoteInput.trim(),
      author: authorName,
      gradient: gradientClass,
      isCustom: true
    };

    const updated = [newThought, ...customThoughts];
    setCustomThoughts(updated);
    localStorage.setItem("ujwal_custom_thoughts", JSON.stringify(updated));

    setQuoteInput("");
    setAuthorInput("");
  };

  const handleDelete = (id: string | number) => {
    const updated = customThoughts.filter(t => t.id !== id);
    setCustomThoughts(updated);
    localStorage.setItem("ujwal_custom_thoughts", JSON.stringify(updated));
  };

  // Filter out any thoughts blacklisted by the admin
  const activeStatic = staticThoughts.filter((t) => !blacklistedThoughts.includes(t.id));
  const activeCustom = customThoughts.filter((t) => !blacklistedThoughts.includes(t.id));

  const allThoughts = [...activeCustom, ...activeStatic];

  return (
    <div className="w-full max-w-6xl mx-auto px-1 sm:px-0 space-y-8 animate-in fade-in duration-300">
      <PageSEO
        title={t("thoughts.title")}
        description={t("thoughts.subtitle")}
        path="/reflections"
        keywords="Ujwal Singh thoughts, quotes, reflections, motivation"
      />

      <div className="pb-4 border-b border-primary/10">
        <h1 className="text-2xl sm:text-3xl font-bold gradient-text">
          {t("thoughts.title")}
        </h1>
        <p className="text-muted-foreground text-xs mt-0.5">
          {t("thoughts.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-6 items-start">
        
        {/* Form panel */}
        <section className="glass-card p-5 border-primary/15 lg:sticky lg:top-24 space-y-4">
          <div className="flex items-center gap-1.5">
            <PenTool className="w-4 h-4 text-primary" />
            <h2 className="text-base font-bold">{t("thoughts.formTitle")}</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="space-y-1">
              <label htmlFor="quote" className="text-[10px] font-semibold text-muted-foreground uppercase">
                {t("thoughts.formMsg")}
              </label>
              <textarea
                id="quote"
                required
                value={quoteInput}
                onChange={(e) => setQuoteInput(e.target.value)}
                placeholder={t("thoughts.formMsgPlaceholder")}
                rows={3}
                maxLength={140}
                className="w-full bg-background/50 border border-primary/10 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-primary/45 transition-all resize-none"
              />
              <div className="text-[9px] text-right text-muted-foreground">
                {quoteInput.length}/140
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="author" className="text-[10px] font-semibold text-muted-foreground uppercase">
                {t("thoughts.formName")}
              </label>
              <input
                type="text"
                id="author"
                value={authorInput}
                onChange={(e) => setAuthorInput(e.target.value)}
                placeholder={t("thoughts.formNamePlaceholder")}
                maxLength={20}
                className="w-full bg-background/50 border border-primary/10 rounded-xl px-3 py-1.5 text-xs focus:outline-none focus:border-primary/45 transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-semibold text-muted-foreground uppercase block mb-1">
                {t("thoughts.formTheme")}
              </label>
              <div className="flex gap-1.5">
                {GRADIENTS.map(gradient => (
                  <button
                    key={gradient.id}
                    type="button"
                    onClick={() => setSelectedGradient(gradient.id)}
                    className={`text-[9px] font-bold px-2 py-1 rounded-full border cursor-pointer transition-all ${
                      selectedGradient === gradient.id
                        ? "bg-primary text-primary-foreground border-primary scale-102"
                        : "bg-background/80 border-primary/10 hover:border-primary/25 text-muted-foreground"
                    }`}
                  >
                    {gradient.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={!quoteInput.trim()}
              className="w-full bg-primary text-primary-foreground hover:opacity-90 font-semibold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 transition-all hover:scale-102 text-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{t("thoughts.postButton")}</span>
            </button>
          </form>
        </section>

        {/* Board notes list */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-primary" /> {t("thoughts.notesBoard")}
            </h2>
            <span className="text-[10px] font-bold bg-primary/10 border border-primary/20 text-primary px-2 py-0.5 rounded-full">
              {allThoughts.length} {t("thoughts.notesCount")}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {allThoughts.map((thought, index) => {
              const gradientClass = thought.gradient || "bg-card/60 border-primary/10";
              const isEven = index % 2 === 0;
              return (
                <div
                  key={thought.id}
                  className={`hover-lift glass-card p-5 flex flex-col justify-between hover:border-primary/25 border ${gradientClass}`}
                  style={{ 
                    animationDelay: `${index * 0.05}s`
                  }}
                >
                  <div className="space-y-2">
                    <Quote className="w-5 h-5 text-primary/30 group-hover:scale-105 transition-transform" />
                    <blockquote className="text-xs sm:text-sm font-semibold leading-relaxed text-foreground/90">
                      "{thought.quote}"
                    </blockquote>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-2.5 border-t border-primary/5 text-[10px] font-semibold">
                    <span className="text-muted-foreground flex items-center gap-1">
                      {thought.isCustom ? (
                        <>
                          <Heart className="w-3 h-3 text-accent fill-accent" />
                          <span className="text-foreground/80">{t("thoughts.guestLabel")}: {thought.author}</span>
                        </>
                      ) : (
                        <span>— {thought.author}</span>
                      )}
                    </span>

                    {thought.isCustom && (
                      <button
                        onClick={() => handleDelete(thought.id)}
                        className="opacity-0 group-hover:opacity-100 sm:opacity-100 p-1 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all cursor-pointer"
                        title="Delete note"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Thoughts;
