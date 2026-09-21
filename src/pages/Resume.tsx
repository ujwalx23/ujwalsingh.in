import React from "react";
import { 
  Download, FileText, ExternalLink, GraduationCap, 
  Briefcase, Award, CheckCircle2, Mail, MapPin, Globe, ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";

export default function Resume() {
  const resumePdfUrl = `${import.meta.env.BASE_URL}Ujwal_Resume.pdf`;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12 px-2 sm:px-0 animate-in fade-in duration-300">
      <PageSEO
        title="Resume & Curriculum Vitae | Ujwal Singh - Software Engineer"
        description="Official resume and curriculum vitae of Ujwal Singh: Full-Stack Developer, Computer Engineering student at Mumbai University (CGPA 8.13), and SAP Certified Data Analyst (SAC)."
        path="/resume"
        keywords="Ujwal Singh resume, Ujwal Singh CV, full stack developer resume, software engineer CV, SAP SAC resume, Mumbai University computer engineering"
        type="profile"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Resume", path: "/resume" }
        ]}
      />

      {/* Header with Download Action */}
      <header className="glass-card p-6 md:p-8 border border-primary/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
              Curriculum Vitae
            </span>
            <span className="text-[10px] font-semibold text-foreground/80 px-2.5 py-0.5 rounded-full bg-primary/5 border border-primary/15">
              Updated 2026
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold gradient-text">
            Ujwal Singh – Resume
          </h1>
          <p className="text-xs text-muted-foreground">
            Full-Stack Developer • Software Engineer • SAP Certified (SAC)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={resumePdfUrl}
            download="Ujwal_Resume.pdf"
            className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-xl text-xs hover:opacity-90 transition-all shadow-md shadow-primary/10"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
          <a
            href={resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 glass-button text-foreground hover:text-primary font-semibold px-4 py-2.5 rounded-xl text-xs transition-all border border-primary/20"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open in New Tab</span>
          </a>
        </div>
      </header>

      {/* Machine-Readable & Crawlable Text Version of Resume */}
      <section className="glass-card p-6 md:p-10 border border-primary/10 space-y-8 text-foreground/90">
        {/* Contact & Meta */}
        <div className="border-b border-primary/10 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">Ujwal Singh</h2>
            <p className="text-xs text-primary font-semibold mt-0.5">
              Full-Stack Developer & Computer Engineering Graduate / Student
            </p>
          </div>
          <div className="text-xs text-muted-foreground space-y-1 sm:text-right">
            <p className="flex items-center sm:justify-end gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>Mumbai, Maharashtra, India</span>
            </p>
            <p className="flex items-center sm:justify-end gap-1.5">
              <Mail className="w-3.5 h-3.5 text-primary" />
              <a href="mailto:ujwalsingh426@gmail.com" className="text-primary hover:underline">
                ujwalsingh426@gmail.com
              </a>
            </p>
            <p className="flex items-center sm:justify-end gap-1.5">
              <Globe className="w-3.5 h-3.5 text-primary" />
              <a href="https://ujwalsingh.in" className="text-primary hover:underline">
                https://ujwalsingh.in
              </a>
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4" />
            Education
          </h3>
          <div className="p-4 rounded-xl bg-card/40 border border-primary/10 space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <h4 className="font-bold text-sm text-foreground">Bachelor of Engineering in Computer Engineering</h4>
              <span className="text-xs text-muted-foreground font-semibold">2023 – 2027</span>
            </div>
            <p className="text-xs text-foreground/80">
              Shree L. R. Tiwari College of Engineering, University of Mumbai
            </p>
            <p className="text-xs text-primary font-semibold">
              Academic Standing: Cumulative CGPA 8.13 / 10
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            Certifications
          </h3>
          <div className="p-4 rounded-xl bg-card/40 border border-primary/10 space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <h4 className="font-bold text-sm text-foreground">SAP Certified - Data Analyst (SAP Analytics Cloud)</h4>
              <span className="text-xs text-primary font-bold">Credential C_SAC_2601</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Issued by SAP · Covers Analytical Story Design, Data Modelling (Dimensions/Measures), Data Blending, and Smart Predict.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
            <Briefcase className="w-4 h-4" />
            Experience
          </h3>
          <div className="p-4 rounded-xl bg-card/40 border border-primary/10 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <h4 className="font-bold text-sm text-foreground">Software Development Intern — Compozant</h4>
              <span className="text-xs text-muted-foreground font-semibold">Jul 2025 – Aug 2025 · Remote</span>
            </div>
            <ul className="space-y-1 text-xs text-muted-foreground list-disc list-inside">
              <li>Developed and enhanced responsive web application features using React.js and JavaScript.</li>
              <li>Collaborated on UI redesigns, debugging cross-browser issues, and improving accessibility.</li>
              <li>Implemented SEO best practices, structured markup, and responsive viewport testing.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-card/40 border border-primary/10 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <h4 className="font-bold text-sm text-foreground">Full-Stack Developer — Namami Vindhyavasini (Client Platform)</h4>
              <span className="text-xs text-muted-foreground font-semibold">2024 – 2025</span>
            </div>
            <ul className="space-y-1 text-xs text-muted-foreground list-disc list-inside">
              <li>Architected and deployed a production-ready website end-to-end for a real-world client.</li>
              <li>Engineered dynamic blog CMS, event scheduling, and admin dashboard using React, TypeScript, Supabase, and PostgreSQL.</li>
              <li>Integrated RESTful APIs and designed relational database schemas with Row Level Security (RLS).</li>
            </ul>
          </div>
        </div>

        {/* Publications */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
            <FileText className="w-4 h-4" />
            Research & Publications
          </h3>
          <div className="p-4 rounded-xl bg-card/40 border border-primary/10 space-y-2">
            <h4 className="font-bold text-sm text-foreground">
              "Exploring the Role of Artificial Intelligence in Convenient and Accessible Healthcare Support Systems"
            </h4>
            <p className="text-xs text-muted-foreground">
              Published on TechRxiv (powered by IEEE) · February 2026 · DOI: 10.36227/techrxiv.177006061.17458864/v1
            </p>
            <p className="text-xs text-foreground/80">
              ORCID: 0009-0004-0490-010X · Investigates assistive AI decision support and patient accessibility frameworks.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
              <a
                href="https://www.techrxiv.org/doi/full/10.36227/techrxiv.177006061.17458864/v1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline font-semibold"
              >
                <span>Read on TechRxiv</span> <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-muted-foreground">•</span>
              <Link
                to="/research"
                className="inline-flex items-center gap-1 text-foreground hover:text-primary transition-colors font-semibold"
              >
                <span>View Full Abstract & Citations</span> <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Technical Skills Summary */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-primary">
            Technical Skills Matrix
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-card/40 border border-primary/10 space-y-1">
              <span className="font-bold text-foreground">Frontend:</span>
              <p className="text-muted-foreground">React.js, TypeScript, Next.js, Vite, Tailwind CSS, HTML5, CSS3</p>
            </div>
            <div className="p-3 rounded-lg bg-card/40 border border-primary/10 space-y-1">
              <span className="font-bold text-foreground">Backend & Cloud:</span>
              <p className="text-muted-foreground">PostgreSQL, Supabase, REST APIs, Node.js, Vercel Serverless Functions</p>
            </div>
            <div className="p-3 rounded-lg bg-card/40 border border-primary/10 space-y-1">
              <span className="font-bold text-foreground">Data & Analytics:</span>
              <p className="text-muted-foreground">SAP Analytics Cloud (SAC), Python (Data Analysis), SQL, Data Modelling</p>
            </div>
            <div className="p-3 rounded-lg bg-card/40 border border-primary/10 space-y-1">
              <span className="font-bold text-foreground">Tools & DevOps:</span>
              <p className="text-muted-foreground">Git, GitHub, VS Code, Postman, Wireshark, Botpress AI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-primary/10 text-xs">
        <Link to="/about" className="inline-flex items-center gap-1 text-primary hover:underline font-semibold">
          ← Full Biography
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
            Projects
          </Link>
          <Link to="/research" className="text-muted-foreground hover:text-primary transition-colors">
            Research
          </Link>
          <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
