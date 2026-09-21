import React from "react";
import { 
  Code2, Layout, Database, BarChart3, ShieldCheck, Cpu, 
  Layers, Terminal, CheckCircle2, ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";

export default function Skills() {
  const skillCategories = [
    {
      id: "web-development",
      title: "Web & Frontend Engineering",
      icon: Layout,
      description: "Modern, performant, component-driven client architecture with strict type safety and responsive design.",
      skills: [
        { name: "React.js", level: "Advanced", note: "Hooks, Context, Component Life-cycles, Virtual DOM" },
        { name: "TypeScript", level: "Advanced", note: "Strict Interfaces, Generics, Type Narrowing" },
        { name: "Tailwind CSS", level: "Advanced", note: "Custom Design Systems, Glassmorphism, Responsive Viewports" },
        { name: "Next.js", level: "Intermediate", note: "App Router, SSR, Server Components" },
        { name: "HTML5 & Semantic Markup", level: "Advanced", note: "Accessible ARIA, SEO Hierarchy, Structured Content" },
        { name: "CSS3 & Animations", level: "Advanced", note: "Transitions, Keyframes, Modern Layouts (Grid/Flexbox)" }
      ]
    },
    {
      id: "backend-databases",
      title: "Backend, APIs & Databases",
      icon: Database,
      description: "Scalable backend services, relational database architecture, authentication, and REST APIs.",
      skills: [
        { name: "PostgreSQL", level: "Advanced", note: "Schema Normalization, Indexes, Relational Integrity, Complex Queries" },
        { name: "Supabase", level: "Advanced", note: "PostgreSQL Cloud, Row-Level Security (RLS), Auth, Realtime APIs" },
        { name: "RESTful API Design", level: "Advanced", note: "HTTP Methods, Status Codes, JSON Payloads, Serverless Proxies" },
        { name: "Node.js & Express", level: "Intermediate", note: "API endpoints, Middleware, Async Workflows" },
        { name: "MongoDB", level: "Intermediate", note: "Document Collections, NoSQL schema basics" },
        { name: "Vercel Serverless Functions", level: "Advanced", note: "Edge Execution, Environment Variables, Proxy Endpoints" }
      ]
    },
    {
      id: "sap-analytics",
      title: "SAP Analytics Cloud & Data BI",
      icon: BarChart3,
      description: "Official SAP Certified (C_SAC_2601) data modelling, story dashboarding, and business intelligence.",
      skills: [
        { name: "SAP Analytics Cloud (SAC)", level: "Certified", note: "Exam C_SAC_2601 Official Certification" },
        { name: "Story & Dashboard Design", level: "Advanced", note: "Interactive Widgets, Drill-down Charts, Canvas Styling" },
        { name: "Data Modelling", level: "Advanced", note: "Dimensions, Measures, Hierarchies, Calculated Columns" },
        { name: "Smart Predict", level: "Advanced", note: "Machine Learning Forecasts, Key Drivers, Trend Analysis" },
        { name: "Data Blending", level: "Advanced", note: "Joining heterogeneous data sources, Live & Import connections" },
        { name: "Allocations & Data Actions", level: "Intermediate", note: "Cost Distributions, Automated Planning Operations" }
      ]
    },
    {
      id: "programming-data-science",
      title: "Programming Languages & Data Science",
      icon: Terminal,
      description: "Core programming languages for algorithmic problem-solving and automated data workflows.",
      skills: [
        { name: "Python", level: "Advanced", note: "Data Analysis, Automation Scripts, AI Dataset Curation" },
        { name: "JavaScript (ES6+)", level: "Advanced", note: "Async/Await, Promises, Closures, DOM Manipulation" },
        { name: "SQL", level: "Advanced", note: "Aggregation, Window Functions, Joins, Query Optimization" },
        { name: "Java", level: "Intermediate", note: "OOP Fundamentals, Collections, Academic Coursework" },
        { name: "C++", level: "Intermediate", note: "Memory Management, Data Structures & Algorithms" }
      ]
    },
    {
      id: "ai-systems",
      title: "AI & Intelligent Applications",
      icon: Cpu,
      description: "Integrating modern generative AI, custom conversational models, and assistive healthcare systems.",
      skills: [
        { name: "Client-Side AI Integration", level: "Advanced", note: "Curated dataset fine-tuning, prompt engineering, Botpress" },
        { name: "AI in Healthcare", level: "Published", note: "TechRxiv research author on accessible AI support systems" },
        { name: "Conversational NLP Bots", level: "Advanced", note: "Medical symptom matching, automated visitor triage" }
      ]
    },
    {
      id: "devops-security",
      title: "Tools, Security & Engineering Practices",
      icon: ShieldCheck,
      description: "Standard developer tooling, network analysis basics, version control, and production deployment.",
      skills: [
        { name: "Git & GitHub", level: "Advanced", note: "Version Control, Pull Requests, Collaborative Workflows" },
        { name: "Vercel & CI/CD", level: "Advanced", note: "Production Builds, Environment Management, DNS" },
        { name: "Network Security & Wireshark", level: "Working Knowledge", note: "Packet Analysis, TCP/IP Handshakes, Protocol Inspection" },
        { name: "Web Security & OWASP", level: "Advanced", note: "Input Sanitization, CORS, RLS, Secure Headers" }
      ]
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12 px-2 sm:px-0 animate-in fade-in duration-300">
      <PageSEO
        title="Technical Skills & Technologies | Ujwal Singh - Full-Stack Developer"
        description="Comprehensive technical skill set of Ujwal Singh: React, TypeScript, PostgreSQL, Supabase, Python, SAP Analytics Cloud (SAC), SQL, and full-stack software development."
        path="/skills"
        keywords="Ujwal Singh skills, tech stack, React, TypeScript, PostgreSQL, Supabase, SAP Analytics Cloud, Python, Java, SQL, web developer skills"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Skills", path: "/skills" }
        ]}
      />

      {/* Header */}
      <header className="glass-card p-6 md:p-8 border border-primary/10 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
            Technical Stack
          </span>
          <span className="text-[10px] font-semibold text-foreground/80 px-2.5 py-0.5 rounded-full bg-primary/5 border border-primary/15">
            Full-Stack & Enterprise Analytics
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold gradient-text">
          Technical Skills & Areas of Expertise
        </h1>

        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
          An honest, factual index of technologies, frameworks, and engineering competencies practiced by <strong>Ujwal Singh</strong>. 
          Each skill is backed by real-world production projects, open-source repositories, or official certifications.
        </p>
      </header>

      {/* Categories Grid */}
      <section className="space-y-8">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.id} className="glass-card p-6 md:p-8 border border-primary/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-foreground">
                    {category.title}
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-card/40 border border-primary/10 hover:border-primary/25 transition-all space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-foreground">{skill.name}</span>
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-primary/15 text-primary">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-[10px] text-muted-foreground leading-tight">
                      {skill.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Navigation Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-primary/10 text-xs">
        <Link to="/projects" className="inline-flex items-center gap-1 text-primary hover:underline font-semibold">
          ← View Projects Built With These Skills
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/experience" className="text-muted-foreground hover:text-primary transition-colors">
            Experience
          </Link>
          <Link to="/certifications" className="text-muted-foreground hover:text-primary transition-colors">
            Certifications
          </Link>
          <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
