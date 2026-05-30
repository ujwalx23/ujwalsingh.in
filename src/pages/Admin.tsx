import React, { useState, useEffect } from "react";
import { Lock, Unlock, Mail, Trash2, LogOut, CheckCircle, Quote, Sparkles } from "lucide-react";
import PageSEO from "@/components/PageSEO";

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

interface Thought {
  id: string | number;
  quote: string;
  author: string;
}

const staticThoughts: Thought[] = [
  { id: 1, quote: "Be kind. It’s okay if someone doesn’t meet your expectations.", author: "Ujwal Singh" },
  { id: 2, quote: "What if there is no other universe and this is the only one you get!?", author: "Ujwal Singh" },
  { id: 3, quote: "Pain is certain. Pain will go, but success will remain.", author: "Anonymous" },
  { id: 4, quote: "Khud ko akela hokar kiske paas dekhte ho?", author: "Anonymous" },
  { id: 5, quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { id: 6, quote: "Just keep going, even on days you feel low!", author: "Ujwal Singh" },
];

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [submissions, setSubmissions] = useState<Message[]>([]);
  const [customThoughts, setCustomThoughts] = useState<Thought[]>([]);
  const [blacklistedThoughts, setBlacklistedThoughts] = useState<(string | number)[]>([]);

  // Check session storage for existing login
  useEffect(() => {
    const authStatus = sessionStorage.getItem("ujwal_admin_auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch local data if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      // 1. Fetch Contact Submissions
      const savedMessages = localStorage.getItem("ujwal_contact_submissions");
      if (savedMessages) {
        try {
          setSubmissions(JSON.parse(savedMessages));
        } catch (e) {
          console.error("Error loading messages", e);
        }
      }

      // 2. Fetch Custom Thoughts
      const savedThoughts = localStorage.getItem("ujwal_custom_thoughts");
      if (savedThoughts) {
        try {
          setCustomThoughts(JSON.parse(savedThoughts));
        } catch (e) {
          console.error("Error loading thoughts", e);
        }
      }

      // 3. Fetch Blacklisted static thoughts
      const blacklisted = localStorage.getItem("ujwal_deleted_thoughts");
      if (blacklisted) {
        try {
          setBlacklistedThoughts(JSON.parse(blacklisted));
        } catch (e) {
          console.error("Error loading blacklist", e);
        }
      }
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === "newmatt23") {
      setIsAuthenticated(true);
      sessionStorage.setItem("ujwal_admin_auth", "true");
      setErrorMessage("");
    } else {
      setErrorMessage("Access Denied: Invalid credentials.");
      setPasswordInput("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("ujwal_admin_auth");
  };

  // Submissions operations
  const deleteSubmission = (id: string) => {
    const updated = submissions.filter(s => s.id !== id);
    setSubmissions(updated);
    localStorage.setItem("ujwal_contact_submissions", JSON.stringify(updated));
  };

  const clearAllSubmissions = () => {
    if (window.confirm("Delete all contact inbox messages?")) {
      setSubmissions([]);
      localStorage.removeItem("ujwal_contact_submissions");
    }
  };

  // Thoughts moderation
  const deleteCustomThought = (id: string | number) => {
    const updated = customThoughts.filter(t => t.id !== id);
    setCustomThoughts(updated);
    localStorage.setItem("ujwal_custom_thoughts", JSON.stringify(updated));
  };

  const deleteStaticThought = (id: string | number) => {
    const updatedBlacklist = [...blacklistedThoughts, id];
    setBlacklistedThoughts(updatedBlacklist);
    localStorage.setItem("ujwal_deleted_thoughts", JSON.stringify(updatedBlacklist));
  };

  const restoreAllThoughts = () => {
    if (window.confirm("Restore all thoughts and remove blacklist?")) {
      setBlacklistedThoughts([]);
      localStorage.removeItem("ujwal_deleted_thoughts");
    }
  };

  // Render Login screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="w-full max-w-md mx-auto py-16 px-4">
        <PageSEO title="Access Gated" description="Secure dashboard credentials gate." path="/adminxus23" />
        <div className="glass-card p-6 border-primary/20 text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto text-primary animate-pulse-glow">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold font-display">Security Verification</h1>
            <p className="text-xs text-muted-foreground mt-1">Enter your password to unlock the admin dashboard.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              required
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Enter Password..."
              className="w-full bg-background border border-primary/10 rounded-xl px-4 py-2.5 text-center text-sm focus:outline-none focus:border-primary/45 transition-all"
            />
            {errorMessage && <p className="text-[10px] font-bold text-destructive">{errorMessage}</p>}
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-semibold py-2.5 rounded-xl text-xs hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center gap-1"
            >
              <Unlock className="w-3.5 h-3.5" />
              <span>Unlock Console</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Combine visible thoughts to moderate
  const activeStatic = staticThoughts.filter(t => !blacklistedThoughts.includes(t.id));

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 px-1 sm:px-0">
      <PageSEO title="Admin Console" description="Thoughts and messages control panel." path="/adminxus23" />

      {/* Admin Header */}
      <div className="pb-4 border-b border-primary/10 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold font-display gradient-text flex items-center gap-1.5">
            <CheckCircle className="w-5 h-5 text-primary" /> Admin Console
          </h1>
          <p className="text-xs text-muted-foreground">Moderating thoughts and reviewing inbox messages.</p>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-destructive/25 text-destructive hover:bg-destructive/10 text-xs font-semibold cursor-pointer transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Logout</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact submissions panel */}
        <section className="glass-card p-5 border-primary/15 space-y-4 flex flex-col h-[550px] overflow-hidden">
          <div className="flex items-center justify-between pb-3 border-b border-primary/5">
            <h2 className="text-base font-bold flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-primary" /> Contact Inbox ({submissions.length})
            </h2>
            {submissions.length > 0 && (
              <button
                onClick={clearAllSubmissions}
                className="text-[10px] font-bold text-destructive hover:underline cursor-pointer"
              >
                Clear All
              </button>
            )}
          </div>

          <div className="flex-1 overflow-y-auto space-y-3.5 pr-1 scrollbar-thin">
            {submissions.length > 0 ? (
              submissions.map((msg) => (
                <div key={msg.id} className="p-3.5 rounded-xl border border-primary/10 bg-primary/5 relative group">
                  <button
                    onClick={() => deleteSubmission(msg.id)}
                    className="absolute top-3 right-3 p-1 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all cursor-pointer"
                    title="Delete message"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  <div className="text-[10px] font-bold text-primary mb-1">
                    {msg.name} ({msg.email})
                  </div>
                  <p className="text-xs text-foreground/90 whitespace-pre-wrap leading-relaxed pr-6">
                    {msg.message}
                  </p>
                  <div className="text-[9px] text-muted-foreground text-right mt-2">
                    {new Date(msg.timestamp).toLocaleString()}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 text-xs text-muted-foreground">
                No contact submissions found.
              </div>
            )}
          </div>
        </section>

        {/* Thoughts moderator panel */}
        <section className="glass-card p-5 border-primary/15 space-y-4 flex flex-col h-[550px] overflow-hidden">
          <div className="flex items-center justify-between pb-3 border-b border-primary/5">
            <h2 className="text-base font-bold flex items-center gap-1.5">
              <Quote className="w-4 h-4 text-primary" /> Thoughts Moderator ({activeStatic.length + customThoughts.length})
            </h2>
            {blacklistedThoughts.length > 0 && (
              <button
                onClick={restoreAllThoughts}
                className="text-[10px] font-bold text-primary hover:underline cursor-pointer"
              >
                Restore Blacklist ({blacklistedThoughts.length})
              </button>
            )}
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 pr-1 scrollbar-thin">
            {/* Custom thoughts list */}
            {customThoughts.map((t) => (
              <div key={t.id} className="p-3 rounded-xl border border-secondary/20 bg-secondary/5 flex items-start justify-between">
                <div className="pr-4 space-y-1">
                  <p className="text-xs text-foreground/90 italic">“{t.quote}”</p>
                  <span className="text-[9px] font-bold text-secondary">Guest: {t.author}</span>
                </div>
                <button
                  onClick={() => deleteCustomThought(t.id)}
                  className="p-1 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive cursor-pointer transition-colors"
                  title="Delete guest thought"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}

            {/* Static thoughts list */}
            {activeStatic.map((t) => (
              <div key={t.id} className="p-3 rounded-xl border border-primary/10 bg-primary/5 flex items-start justify-between">
                <div className="pr-4 space-y-1">
                  <p className="text-xs text-foreground/90 italic">“{t.quote}”</p>
                  <span className="text-[9px] font-bold text-primary">Static: {t.author}</span>
                </div>
                <button
                  onClick={() => deleteStaticThought(t.id)}
                  className="p-1 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive cursor-pointer transition-colors"
                  title="Hide static thought"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
