import React from "react";
import { 
  Briefcase, GraduationCap, Code2, Calendar, MapPin, 
  CheckCircle2, ExternalLink, ArrowRight, Award, Building2 
} from "lucide-react";
import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";

export default function Experience() {
  const experiences = [
    {
      id: "compozant",
      role: "Software Development Intern",
      organization: "Compozant",
      type: "Internship · Remote",
      period: "Jul 2025 – Aug 2025",
      location: "India (Remote)",
      description:
        "Contributed to frontend web application development using React.js and JavaScript, focusing on component reliability, modern UI aesthetics, and responsive performance.",
      highlights: [
        "Engineered responsive user interface components following modern React design patterns.",
        "Refactored legacy UI components to enhance page speed, accessibility, and clean markup hierarchy.",
        "Identified and fixed cross-browser layout inconsistencies and mobile viewport rendering bugs.",
        "Collaborated using Git version control, pull requests, and agile task tracking."
      ],
      skills: ["React.js", "JavaScript", "HTML5/CSS3", "Git", "SEO Best Practices", "Responsive Design"]
    },
    {
      id: "namami-client",
      role: "Full-Stack Developer (Client Project)",
      organization: "Namami Vindhyavasini Temple Trust",
      type: "Contract / Client Project",
      period: "2024 – 2025",
      location: "Production Deployment",
      url: "https://namamivindhyavasini.in",
      description:
        "Engineered and launched an end-to-end production web portal for a real-world client, encompassing custom administrative tooling, database schema design, and dynamic public content delivery.",
      highlights: [
        "Designed and normalized relational PostgreSQL database schemas hosted on Supabase.",
        "Constructed a secure custom administrative CMS for dynamic blog posts, event schedules, and announcements.",
        "Implemented RESTful endpoints and client-side data querying with caching and optimistic UI updates.",
        "Configured production deployment, domain routing, SSL/TLS, and automated SEO metadata."
      ],
      skills: ["React", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS", "REST APIs", "Vercel"]
    },
    {
      id: "engineering-education",
      role: "B.E. in Computer Engineering & Academic Research",
      organization: "Shree L. R. Tiwari College of Engineering (University of Mumbai)",
      type: "Full-Time Degree Program",
      period: "2023 – 2027",
      location: "Mumbai, Maharashtra, India",
      description:
        "Pursuing Bachelor of Engineering in Computer Engineering. Maintaining strong academic distinction with a cumulative CGPA of 8.13 / 10 while conducting independent technical research in healthcare AI systems.",
      highlights: [
        "Maintained consistent academic distinction with a cumulative CGPA of 8.13 / 10.",
        "Authored TechRxiv research paper: 'Exploring the Role of Artificial Intelligence in Convenient and Accessible Healthcare Support Systems' (DOI: 10.36227/techrxiv.177006061.17458864/v1).",
        "Completed SAP Analytics Cloud official certification (C_SAC_2601) in enterprise BI and data modelling.",
        "Developed multiple web applications including MediSoul, Wanderlust Adventures, Newsnap, and CuteList."
      ],
      skills: ["Computer Engineering", "Data Structures", "Database Management", "AI Research", "SAP SAC", "Algorithms"]
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12 px-2 sm:px-0 animate-in fade-in duration-300">
      <PageSEO
        title="Professional Experience & Journey | Ujwal Singh - Software Engineer"
        description="Professional experience of Ujwal Singh: Software Development Intern at Compozant, Full-Stack Developer for Namami Vindhyavasini production portal, and Computer Engineering at Mumbai University."
        path="/experience"
        keywords="Ujwal Singh experience, Compozant internship, full stack developer work history, Namami Vindhyavasini developer, Mumbai University computer engineering"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Experience", path: "/experience" }
        ]}
      />

      {/* Header */}
      <header className="glass-card p-6 md:p-8 border border-primary/10 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
            Work History & Milestones
          </span>
          <span className="text-[10px] font-semibold text-foreground/80 px-2.5 py-0.5 rounded-full bg-primary/5 border border-primary/15">
            Software Engineering & Client Delivery
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold gradient-text">
          Professional Experience
        </h1>

        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
          A chronologically documented record of professional internships, production client implementations, 
          and academic milestones completed by <strong>Ujwal Singh</strong>.
        </p>
      </header>

      {/* Timeline Section */}
      <section className="space-y-6">
        {experiences.map((exp) => (
          <article
            key={exp.id}
            className="glass-card p-6 md:p-8 border border-primary/10 hover:border-primary/25 transition-all space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-primary/10 pb-4">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-primary px-2 py-0.5 rounded-full bg-primary/10 border border-primary/15">
                  {exp.type}
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-foreground mt-1.5">
                  {exp.role}
                </h2>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mt-1">
                  <span className="font-semibold text-foreground/90">{exp.organization}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {exp.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {exp.url && (
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline self-start sm:self-auto pt-1"
                >
                  <span>Visit Production Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
              {exp.description}
            </p>

            <div className="space-y-2 pt-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground/80">
                Key Responsibilities & Deliverables:
              </h3>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-primary/5">
              {exp.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="text-[10px] font-medium px-2.5 py-0.5 rounded-md bg-foreground/5 border border-foreground/10 text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      {/* Footer Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-primary/10 text-xs">
        <Link to="/about" className="inline-flex items-center gap-1 text-primary hover:underline font-semibold">
          ← Full Biography
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/skills" className="text-muted-foreground hover:text-primary transition-colors">
            Skills
          </Link>
          <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
            Projects
          </Link>
          <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
