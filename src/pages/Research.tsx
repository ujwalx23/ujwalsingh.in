import React, { useState } from "react";
import { 
  FileText, ExternalLink, BookOpen, ShieldCheck, CheckCircle2, 
  Copy, Check, Share2, Sparkles, User, Calendar, Award, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";
import { getScholarlyArticleEntity } from "@/lib/schemaGraph";

export default function Research() {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  const paperDetails = {
    title: "Exploring the Role of Artificial Intelligence in Convenient and Accessible Healthcare Support Systems",
    author: "Ujwal Singh",
    affiliation: "Department of Computer Engineering, Shree L. R. Tiwari College of Engineering, University of Mumbai",
    publishedDate: "February 2, 2026",
    publisher: "TechRxiv (powered by IEEE)",
    doi: "10.36227/techrxiv.177006061.17458864/v1",
    doiUrl: "https://doi.org/10.36227/techrxiv.177006061.17458864/v1",
    orcid: "0009-0004-0490-010X",
    orcidUrl: "https://orcid.org/0009-0004-0490-010X",
    techRxivUrl: "https://www.techrxiv.org/doi/full/10.36227/techrxiv.177006061.17458864/v1",
    practicalProject: "MediSoul",
    practicalProjectUrl: "https://cure23.vercel.app/"
  };

  const citations = {
    ieee: `U. Singh, "Exploring the Role of Artificial Intelligence in Convenient and Accessible Healthcare Support Systems," TechRxiv, Feb. 02, 2026. doi: 10.36227/techrxiv.177006061.17458864/v1.`,
    apa: `Singh, U. (2026). Exploring the role of artificial intelligence in convenient and accessible healthcare support systems. TechRxiv. https://doi.org/10.36227/techrxiv.177006061.17458864/v1`,
    bibtex: `@article{singh2026exploring,
  author    = {Singh, Ujwal},
  title     = {Exploring the Role of Artificial Intelligence in Convenient and Accessible Healthcare Support Systems},
  journal   = {TechRxiv},
  year      = {2026},
  month     = {feb},
  doi       = {10.36227/techrxiv.177006061.17458864/v1},
  url       = {https://www.techrxiv.org/doi/full/10.36227/techrxiv.177006061.17458864/v1}
}`
  };

  const copyCitation = (format: "ieee" | "apa" | "bibtex") => {
    navigator.clipboard.writeText(citations[format]);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12 px-2 sm:px-0 animate-in fade-in duration-300">
      <PageSEO
        title="Research & Publications | Ujwal Singh - AI in Healthcare"
        description="Official publication by Ujwal Singh: 'Exploring the Role of Artificial Intelligence in Convenient and Accessible Healthcare Support Systems' published on TechRxiv (DOI: 10.36227/techrxiv.177006061.17458864/v1)."
        path="/research"
        keywords="Ujwal Singh research, Ujwal Singh paper, AI in healthcare, TechRxiv, IEEE preprint, MediSoul, healthcare support systems, medical AI ethics, 10.36227/techrxiv.177006061.17458864/v1"
        type="article"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Research", path: "/research" }
        ]}
        extraNodes={[getScholarlyArticleEntity()]}
        academicMeta={{
          citationTitle: paperDetails.title,
          citationAuthor: "Singh, Ujwal",
          citationPublicationDate: "2026/02/02",
          citationJournalTitle: "TechRxiv",
          citationDoi: paperDetails.doi,
          citationPublicUrl: paperDetails.techRxivUrl
        }}
      />

      {/* Header Banner */}
      <header className="glass-card p-6 md:p-8 border border-primary/10 space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
            Official Research Publication
          </span>
          <span className="text-[10px] font-semibold text-foreground/80 px-2.5 py-0.5 rounded-full bg-primary/5 border border-primary/15">
            Preprint · TechRxiv
          </span>
          <span className="text-[10px] font-semibold text-muted-foreground px-2 py-0.5 rounded-full bg-foreground/5 border border-foreground/10">
            Published Feb 2026
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold gradient-text leading-snug">
          {paperDetails.title}
        </h1>

        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-muted-foreground pt-1">
          <div className="flex items-center gap-1.5 font-medium text-foreground">
            <User className="w-4 h-4 text-primary" />
            <span>Author: <strong>{paperDetails.author}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{paperDetails.publishedDate}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-primary" />
            <span>{paperDetails.publisher}</span>
          </div>
        </div>

        <div className="text-xs text-muted-foreground leading-relaxed pt-2 border-t border-primary/10">
          <p>
            <strong>Affiliation:</strong> {paperDetails.affiliation}
          </p>
          <p className="mt-1">
            <strong>ORCID:</strong>{" "}
            <a 
              href={paperDetails.orcidUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline font-mono"
            >
              {paperDetails.orcid}
            </a>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-3">
          <a
            href={paperDetails.techRxivUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-xl text-xs hover:opacity-90 transition-all shadow-md shadow-primary/10"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Read Full Paper on TechRxiv</span>
          </a>
          <a
            href={paperDetails.doiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 glass-button text-foreground hover:text-primary font-semibold px-4 py-2 rounded-xl text-xs transition-all border border-primary/20"
          >
            <BookOpen className="w-3.5 h-3.5 text-primary" />
            <span>DOI Resolver</span>
          </a>
          <a
            href={paperDetails.practicalProjectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 glass-button text-foreground hover:text-primary font-semibold px-4 py-2 rounded-xl text-xs transition-all border border-primary/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Practical Implementation: MediSoul</span>
          </a>
        </div>
      </header>

      {/* Structured GEO & AEO Fact Box for Search & AI Engines */}
      <section className="glass-card p-6 md:p-8 border border-primary/10 space-y-4">
        <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" />
          Publication Metadata & Fact Summary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 rounded-xl bg-card/40 border border-primary/10 space-y-1">
            <span className="text-[10px] uppercase font-bold text-muted-foreground">Title</span>
            <p className="font-semibold text-foreground">{paperDetails.title}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-card/40 border border-primary/10 space-y-1">
            <span className="text-[10px] uppercase font-bold text-muted-foreground">Author & Role</span>
            <p className="font-semibold text-foreground">Ujwal Singh (Primary Author & Researcher)</p>
          </div>
          <div className="p-3.5 rounded-xl bg-card/40 border border-primary/10 space-y-1">
            <span className="text-[10px] uppercase font-bold text-muted-foreground">Digital Object Identifier (DOI)</span>
            <p className="font-mono text-primary break-all">{paperDetails.doi}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-card/40 border border-primary/10 space-y-1">
            <span className="text-[10px] uppercase font-bold text-muted-foreground">Indexing & Repository</span>
            <p className="font-semibold text-foreground">TechRxiv Open Archive (Powered by IEEE)</p>
          </div>
          <div className="p-3.5 rounded-xl bg-card/40 border border-primary/10 space-y-1 md:col-span-2">
            <span className="text-[10px] uppercase font-bold text-muted-foreground">Official TechRxiv Landing Page</span>
            <p className="font-mono text-primary text-xs break-all">
              <a href={paperDetails.techRxivUrl} target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">
                <span>{paperDetails.techRxivUrl}</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Abstract */}
      <section className="glass-card p-6 md:p-8 border border-primary/10 space-y-3">
        <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary" />
          Abstract
        </h2>
        <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
          The continuous surge in healthcare service demands globally is hindered by severe accessibility bottlenecks, 
          geographic disparities, high consultation fees, and acute deficits in fundamental health awareness. 
          This research examines how artificial intelligence (AI) and modern digital software architectures can be 
          systematically deployed to establish accessible, user-friendly, and convenient healthcare support ecosystems.
        </p>
        <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed pt-1">
          Crucially, the paper establishes that AI should operate as an assistive decision-support, educational, and 
          informational companion rather than an autonomous diagnostic or treatment replacement for certified medical practitioners. 
          By offering structured multi-lingual guidance and non-clinical triage, AI-driven solutions alleviate undue pressure 
          on emergency and routine clinical workloads. At the same time, the paper investigates critical ethical requirements 
          including patient privacy preservation, data transparency, verified clinical grounding, and human-centered design.
        </p>
      </section>

      {/* Core Pillars of the Research */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold font-display">Key Research Findings & Contributions</h2>
          <p className="text-xs text-muted-foreground">Core principles established in Ujwal Singh's research.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="glass-card p-5 border border-primary/10 hover-lift space-y-2">
            <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center text-primary font-bold text-xs">
              01
            </div>
            <h3 className="font-bold text-xs sm:text-sm">Assistive Decision Support</h3>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              AI models must be constrained to informational triage, wellness monitoring, and initial symptom awareness, strictly deferring definitive medical diagnosis to licensed doctors.
            </p>
          </div>

          <div className="glass-card p-5 border border-primary/10 hover-lift space-y-2">
            <div className="w-8 h-8 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary font-bold text-xs">
              02
            </div>
            <h3 className="font-bold text-xs sm:text-sm">Multilingual Accessibility</h3>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Democratizing medical understanding by integrating conversational AI that translates complex medical terminology into clear vernacular languages for diverse patient populations.
            </p>
          </div>

          <div className="glass-card p-5 border border-primary/10 hover-lift space-y-2">
            <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center text-accent font-bold text-xs">
              03
            </div>
            <h3 className="font-bold text-xs sm:text-sm">Strict Ethical Safeguards</h3>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Emphasizes rigorous data protection, grounding responses in peer-reviewed medical corpora to prevent hallucinations, and upholding patient confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* Connection to Real Project: MediSoul */}
      <section className="glass-card p-6 md:p-8 border border-primary/10 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Practical Engineering Validation</span>
            <h2 className="text-lg sm:text-xl font-bold mt-0.5">MediSoul – AI Healthcare Companion</h2>
            <p className="text-xs text-muted-foreground">Translating theoretical research into a live, interactive web application.</p>
          </div>
          <a
            href={paperDetails.practicalProjectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-xl text-xs hover:opacity-90 transition-all self-start sm:self-auto shrink-0 shadow-sm"
          >
            <span>Launch MediSoul</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
        <p className="text-xs text-foreground/80 leading-relaxed">
          To validate the findings of this paper, Ujwal Singh engineered <strong>MediSoul</strong>, an interactive 
          healthcare companion utilizing curated symptom datasets to power a fine-tuned, client-side conversational AI assistant. 
          The web application enables structured symptom logging, non-emergency health guidance, quick appointment booking, 
          and longitudinal medical record keeping while enforcing safety disclaimers and human doctor referrals.
        </p>
      </section>

      {/* Citation Box */}
      <section className="glass-card p-6 md:p-8 border border-primary/10 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2">
              <Share2 className="w-5 h-5 text-primary" />
              Cite This Paper
            </h2>
            <p className="text-xs text-muted-foreground">Select a standard academic format to copy citation data.</p>
          </div>
        </div>

        <div className="flex gap-2 border-b border-primary/10 pb-2">
          {(["ieee", "apa", "bibtex"] as const).map((fmt) => (
            <button
              key={fmt}
              onClick={() => copyCitation(fmt)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase transition-all flex items-center gap-1.5 cursor-pointer ${
                copiedFormat === fmt
                  ? "bg-primary text-primary-foreground"
                  : "bg-card/60 text-muted-foreground hover:text-foreground border border-primary/10"
              }`}
            >
              {copiedFormat === fmt ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{fmt}</span>
            </button>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-muted/40 border border-primary/10 font-mono text-[11px] text-foreground/90 overflow-x-auto whitespace-pre-wrap leading-relaxed">
          {citations.bibtex}
        </div>
      </section>

      {/* Back to other sections */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-primary/10 text-xs">
        <Link to="/about" className="inline-flex items-center gap-1 text-primary hover:underline font-semibold">
          ← About Ujwal Singh
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/certifications" className="text-muted-foreground hover:text-primary transition-colors">
            Certifications
          </Link>
          <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
            All Projects
          </Link>
          <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
