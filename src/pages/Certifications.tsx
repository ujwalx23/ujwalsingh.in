import React from "react";
import { 
  Award, CheckCircle2, ExternalLink, Calendar, Building2, 
  BarChart3, Database, ShieldCheck, ArrowRight, Sparkles 
} from "lucide-react";
import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";

export default function Certifications() {
  const certifications = [
    {
      id: "sap-sac",
      name: "SAP Certified - Data Analyst (SAP Analytics Cloud)",
      code: "C_SAC_2601",
      issuer: "SAP",
      issueDate: "2026",
      verified: true,
      category: "Enterprise Analytics & BI",
      description:
        "Official SAP credential certifying proficiency in end-to-end analytical data modelling, interactive story dashboards, business intelligence planning, automated forecasting with Smart Predict, and enterprise data blending.",
      competencies: [
        "Story Design, Interactive Dashboards & Analytical Reporting",
        "Data Modelling (Dimensions, Measures, Hierarchies, Calculated Columns)",
        "Data Blending & Cross-System Import/Live Connections",
        "Smart Predict (Automated Predictive Scenarios & Key Drivers)",
        "Data Actions, Value Driver Trees & Cost Allocations",
        "Integration with SAP S/4HANA & SAP Business Technology Platform (BTP)"
      ],
      credentialUrl: "https://www.sap.com"
    },
    {
      id: "compozant-internship",
      name: "Software Development Internship Certificate",
      code: "Compozant-SDE-2025",
      issuer: "Compozant",
      issueDate: "Aug 2025",
      verified: true,
      category: "Software Engineering",
      description:
        "Completed a professional software engineering internship focusing on frontend web development, responsive component engineering, React.js state management, modern UI implementations, and accessibility optimizations.",
      competencies: [
        "React.js & JavaScript Component Development",
        "Responsive Web Applications & Modern UI Patterns",
        "Debugging, Cross-Browser Compatibility & Accessibility",
        "Git Version Control & Agile Team Collaboration"
      ],
      credentialUrl: "https://compozant.com"
    },
    {
      id: "be-computer-engineering",
      name: "Bachelor of Engineering (B.E.) in Computer Engineering",
      code: "CGPA 8.13 / 10",
      issuer: "University of Mumbai (Shree L. R. Tiwari College of Engineering)",
      issueDate: "2023 – 2027 (In Progress)",
      verified: true,
      category: "Higher Education",
      description:
        "Comprehensive academic training in core computer engineering, theoretical computer science, database architecture, network protocols, and software design patterns.",
      competencies: [
        "Data Structures & Algorithms (DSA)",
        "Database Management Systems (PostgreSQL, MySQL, Schema Normalization)",
        "Computer Networks, Protocols & Network Security",
        "Object-Oriented Programming (Java, Python, C++)",
        "Operating Systems & System Architecture",
        "Web Engineering & Cloud Architecture"
      ],
      credentialUrl: "https://mu.ac.in/"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12 px-2 sm:px-0 animate-in fade-in duration-300">
      <PageSEO
        title="Official Certifications & Credentials | Ujwal Singh - SAP Certified"
        description="Official professional credentials of Ujwal Singh, including SAP Certified Data Analyst (SAP Analytics Cloud C_SAC_2601), Computer Engineering academic tenure at Mumbai University, and Compozant Software Development."
        path="/certifications"
        keywords="Ujwal Singh certifications, SAP Certified Data Analyst, SAP Analytics Cloud, C_SAC_2601, Mumbai University, Computer Engineering, Compozant, software credentials"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Certifications", path: "/certifications" }
        ]}
      />

      {/* Header */}
      <header className="glass-card p-6 md:p-8 border border-primary/10 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
            Verifiable Credentials
          </span>
          <span className="text-[10px] font-semibold text-foreground/80 px-2.5 py-0.5 rounded-full bg-primary/5 border border-primary/15">
            Enterprise BI & Engineering
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold gradient-text">
          Certifications & Professional Credentials
        </h1>

        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
          A verifiable record of technical certifications, enterprise qualifications, and academic achievements 
          earned by <strong>Ujwal Singh</strong>. All credentials represent genuine training and documented mastery.
        </p>
      </header>

      {/* Primary Flagship Credential: SAP Analytics Cloud */}
      <section className="glass-card p-6 md:p-8 border-2 border-primary/30 relative overflow-hidden space-y-5">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center font-bold">
                <BarChart3 className="w-4 h-4" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-primary">Flagship Enterprise Credential</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground pt-1">
              SAP Certified - Data Analyst (SAP Analytics Cloud)
            </h2>
            <p className="text-xs font-semibold text-muted-foreground">
              Exam Code: <span className="font-mono text-primary font-bold">C_SAC_2601</span> · Issued by <strong>SAP</strong>
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/25 text-xs font-semibold text-green-500 self-start">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Verified Credential</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
          The SAP Certified Data Analyst qualification establishes formal expertise in designing and deploying 
          enterprise-scale business intelligence solutions within SAP Analytics Cloud (SAC). Covers the end-to-end data pipeline: 
          connecting live and import data sources, engineering normalized dimensional data models, designing executive story dashboards, 
          and configuring predictive forecasting using Smart Predict.
        </p>

        <div className="space-y-3 pt-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground/90 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-primary" />
            Tested Competencies & Domain Knowledge
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            {certifications[0].competencies.map((comp, idx) => (
              <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-card/40 border border-primary/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/90">{comp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Credentials List */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold font-display">Engineering & Academic Qualifications</h2>
        <div className="space-y-4">
          {certifications.slice(1).map((cert) => (
            <div key={cert.id} className="glass-card p-5 md:p-6 border border-primary/10 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-primary px-2 py-0.5 rounded-full bg-primary/10 border border-primary/15">
                    {cert.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mt-1">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {cert.issuer} · <span className="font-semibold">{cert.issueDate}</span>
                  </p>
                </div>
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-primary bg-primary/5 px-2.5 py-1 rounded-lg border border-primary/10 self-start sm:self-auto">
                  <span>{cert.code}</span>
                </div>
              </div>

              <p className="text-xs text-foreground/80 leading-relaxed">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {cert.competencies.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[10px] font-medium px-2.5 py-0.5 rounded-md bg-foreground/5 border border-foreground/10 text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-primary/10 text-xs">
        <Link to="/research" className="inline-flex items-center gap-1 text-primary hover:underline font-semibold">
          ← Research & Publications
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/skills" className="text-muted-foreground hover:text-primary transition-colors">
            Technical Skills
          </Link>
          <Link to="/experience" className="text-muted-foreground hover:text-primary transition-colors">
            Experience
          </Link>
          <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
