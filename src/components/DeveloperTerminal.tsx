import React, { useState, useRef, useEffect } from "react";
import { Terminal, Copy, Check, Sparkles, ExternalLink, ArrowRight, CornerDownLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export function DeveloperTerminal() {
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "ujwal --summary",
      output: (
        <div className="space-y-1.5 text-xs text-foreground/90 font-mono">
          <p className="text-primary font-bold">✨ Ujwal Singh · Software Engineer & Full-Stack Developer</p>
          <p className="text-muted-foreground">🎓 B.E. Computer Engineering (Mumbai University) · CGPA: 8.13 / 10</p>
          <p className="text-muted-foreground">📜 SAP Certified Data Analyst (SAP Analytics Cloud / C_SAC_2601)</p>
          <p className="text-muted-foreground">🔬 Published Author: TechRxiv AI in Healthcare (DOI: 10.36227/techrxiv.177006061.17458864/v1)</p>
          <p className="text-muted-foreground">💼 Core Stack: React, TypeScript, PostgreSQL, Supabase, Python, Next.js</p>
        </div>
      )
    }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [copiedPitch, setCopiedPitch] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const recruiterPitch = `Ujwal Singh is a Full-Stack Developer & Software Engineer based in Mumbai, India. Computer Engineering student at Mumbai University (8.13 CGPA), SAP Certified Data Analyst (SAC), and published author of AI Healthcare research on TechRxiv (DOI: 10.36227/techrxiv.177006061.17458864/v1). Core stack: React, TypeScript, PostgreSQL, Supabase, REST APIs. Portfolio: https://ujwalsingh.in | Email: ujwalsingh426@gmail.com`;

  const copyPitch = () => {
    navigator.clipboard.writeText(recruiterPitch);
    setCopiedPitch(true);
    setTimeout(() => setCopiedPitch(false), 2500);
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    let outputNode: React.ReactNode = null;

    switch (trimmed) {
      case "ujwal --summary":
      case "summary":
        outputNode = (
          <div className="space-y-1 text-xs text-foreground/90 font-mono">
            <p className="text-primary font-bold">Ujwal Singh · Quick Summary</p>
            <p>• Full-Stack Developer & Software Engineer with client production delivery experience.</p>
            <p>• 8.13 CGPA Computer Engineering at Mumbai University.</p>
            <p>• Official SAP Certified Data Analyst (C_SAC_2601).</p>
            <p>• Author of TechRxiv research on AI in Healthcare Systems.</p>
          </div>
        );
        break;

      case "ujwal --research":
      case "research":
        outputNode = (
          <div className="space-y-1.5 text-xs font-mono">
            <p className="text-primary font-bold">🔬 Published Research (TechRxiv / IEEE):</p>
            <p className="text-foreground/90">"Exploring the Role of Artificial Intelligence in Convenient and Accessible Healthcare Support Systems"</p>
            <p className="text-muted-foreground">DOI: 10.36227/techrxiv.177006061.17458864/v1</p>
            <p className="text-muted-foreground">ORCID: 0009-0004-0490-010X</p>
            <div className="flex gap-2 pt-1">
              <a href="https://www.techrxiv.org/doi/full/10.36227/techrxiv.177006061.17458864/v1" target="_blank" rel="noopener noreferrer" className="text-primary underline flex items-center gap-0.5">
                TechRxiv Article <ExternalLink className="w-2.5 h-2.5" />
              </a>
              <span className="text-muted-foreground">|</span>
              <Link to="/research" className="text-primary underline">View Paper Page</Link>
            </div>
          </div>
        );
        break;

      case "ujwal --skills":
      case "skills":
      case "stack":
        outputNode = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-primary font-bold">🛠️ Technical Matrix:</p>
            <p><span className="text-foreground font-semibold">Frontend:</span> React.js, TypeScript, Next.js, Vite, Tailwind CSS, HTML5/CSS3</p>
            <p><span className="text-foreground font-semibold">Backend:</span> PostgreSQL, Supabase (Auth, RLS, Edge), REST APIs, Python, Node.js</p>
            <p><span className="text-foreground font-semibold">Data/BI:</span> SAP Analytics Cloud (SAC), Analytical Data Modelling, Story Design</p>
            <p><span className="text-foreground font-semibold">Deploy:</span> Vercel, Git, GitHub Actions, PWA Offline Service Workers</p>
          </div>
        );
        break;

      case "ujwal --projects":
      case "projects":
        outputNode = (
          <div className="space-y-1.5 text-xs font-mono">
            <p className="text-primary font-bold">🚀 Featured Projects:</p>
            <p>1. <span className="text-foreground font-semibold">Namami Vindhyavasini:</span> Full production client portal (React, Supabase, PostgreSQL, CMS)</p>
            <p>2. <span className="text-foreground font-semibold">MediSoul:</span> AI healthcare companion & clinical symptom triage (cure23.vercel.app)</p>
            <p>3. <span className="text-foreground font-semibold">Wanderlust Adventures:</span> Travel guide showcasing Indian heritage</p>
            <p>4. <span className="text-foreground font-semibold">Newsnap:</span> Credibility-driven short global news platform</p>
          </div>
        );
        break;

      case "ujwal --recruiter":
      case "recruiter":
      case "pitch":
        outputNode = (
          <div className="p-3 rounded-lg bg-primary/5 border border-primary/15 space-y-2 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-primary font-bold">📋 30-Second Recruiter / Hiring Pitch</span>
              <button
                type="button"
                onClick={copyPitch}
                className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-primary/10 text-primary hover:bg-primary/20 transition-all cursor-pointer"
              >
                {copiedPitch ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                <span>{copiedPitch ? "Copied!" : "Copy Pitch"}</span>
              </button>
            </div>
            <p className="text-foreground/80 leading-relaxed italic">
              "{recruiterPitch}"
            </p>
          </div>
        );
        break;

      case "ujwal --contact":
      case "contact":
        outputNode = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-primary font-bold">📬 Connect With Ujwal Singh:</p>
            <p>Email: <a href="mailto:ujwalsingh426@gmail.com" className="text-primary underline">ujwalsingh426@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/ujwalsingh23/" target="_blank" rel="noopener noreferrer" className="text-primary underline">linkedin.com/in/ujwalsingh23</a></p>
            <p>GitHub: <a href="https://github.com/ujwalx23" target="_blank" rel="noopener noreferrer" className="text-primary underline">github.com/ujwalx23</a></p>
            <p>Location: Mumbai, Maharashtra, India</p>
          </div>
        );
        break;

      case "help":
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-muted-foreground">
            <p className="text-foreground font-semibold">Available commands:</p>
            <p>• <span className="text-primary">ujwal --summary</span> : View key credentials</p>
            <p>• <span className="text-primary">ujwal --skills</span> : View technical stack</p>
            <p>• <span className="text-primary">ujwal --research</span> : View TechRxiv paper</p>
            <p>• <span className="text-primary">ujwal --projects</span> : List key projects</p>
            <p>• <span className="text-primary">ujwal --recruiter</span> : Get hiring blurb</p>
            <p>• <span className="text-primary">ujwal --contact</span> : Direct outreach info</p>
            <p>• <span className="text-primary">clear</span> : Clear terminal screen</p>
          </div>
        );
        break;

      default:
        outputNode = (
          <p className="text-xs font-mono text-destructive">
            Command not recognized: "{cmd}". Type <span className="text-primary font-bold">help</span> or click quick chips above.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output: outputNode }]);
    setInputVal("");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="w-full glass-card border border-primary/15 overflow-hidden shadow-xl rounded-2xl">
      {/* Terminal Title Bar */}
      <div className="bg-card/80 px-4 py-2.5 border-b border-primary/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
          </div>
          <span className="text-[11px] font-mono font-semibold text-muted-foreground ml-2 flex items-center gap-1">
            <Terminal className="w-3.5 h-3.5 text-primary" />
            <span>ujwal-shell ~ bash (interactive)</span>
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold">
            v2.0
          </span>
        </div>
      </div>

      {/* Quick Action Interactive Command Pills */}
      <div className="bg-card/40 px-3.5 py-2 border-b border-primary/5 flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
        <span className="text-[10px] uppercase font-bold text-muted-foreground mr-1">Quick:</span>
        <button
          type="button"
          onClick={() => handleCommand("ujwal --summary")}
          className="px-2 py-0.5 rounded-md bg-primary/10 hover:bg-primary/20 text-primary transition-colors cursor-pointer"
        >
          --summary
        </button>
        <button
          type="button"
          onClick={() => handleCommand("ujwal --skills")}
          className="px-2 py-0.5 rounded-md bg-primary/10 hover:bg-primary/20 text-primary transition-colors cursor-pointer"
        >
          --skills
        </button>
        <button
          type="button"
          onClick={() => handleCommand("ujwal --research")}
          className="px-2 py-0.5 rounded-md bg-primary/10 hover:bg-primary/20 text-primary transition-colors cursor-pointer"
        >
          --research
        </button>
        <button
          type="button"
          onClick={() => handleCommand("ujwal --recruiter")}
          className="px-2 py-0.5 rounded-md bg-primary/10 hover:bg-primary/20 text-primary transition-colors cursor-pointer"
        >
          --recruiter
        </button>
        <button
          type="button"
          onClick={() => handleCommand("ujwal --contact")}
          className="px-2 py-0.5 rounded-md bg-primary/10 hover:bg-primary/20 text-primary transition-colors cursor-pointer"
        >
          --contact
        </button>
        <button
          type="button"
          onClick={() => handleCommand("clear")}
          className="px-2 py-0.5 rounded-md bg-foreground/5 hover:bg-foreground/10 text-muted-foreground transition-colors cursor-pointer"
        >
          clear
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-4 bg-background/50 max-h-72 overflow-y-auto space-y-3 font-mono text-xs">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1.5 animate-in fade-in duration-150">
            <div className="flex items-center gap-2 text-primary font-bold">
              <span>visitor@ujwalsingh.in:~$</span>
              <span className="text-foreground">{item.command}</span>
            </div>
            <div className="pl-4 border-l-2 border-primary/20">{item.output}</div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Command Input Form */}
      <form onSubmit={onSubmit} className="bg-card/70 px-4 py-2.5 border-t border-primary/10 flex items-center gap-2 font-mono text-xs">
        <span className="text-primary font-bold">visitor@ujwalsingh.in:~$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type 'help' or click quick pills above..."
          className="flex-1 bg-transparent outline-none text-foreground text-xs placeholder:text-muted-foreground/60 font-mono"
        />
        <button
          type="submit"
          className="px-2.5 py-1 rounded bg-primary/15 text-primary text-[11px] font-semibold hover:bg-primary/25 transition-all flex items-center gap-1 cursor-pointer"
        >
          <span>Run</span>
          <CornerDownLeft className="w-3 h-3" />
        </button>
      </form>
    </div>
  );
}
