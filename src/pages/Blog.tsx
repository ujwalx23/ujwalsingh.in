import React, { useState } from "react";
import { 
  BookOpen, Calendar, Clock, User, ArrowRight, 
  ChevronRight, Tag, Sparkles, Share2, ArrowLeft, CheckCircle2 
} from "lucide-react";
import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";
import { PERSON_ID, SITE_URL } from "@/lib/schemaGraph";

export interface Article {
  slug: string;
  title: string;
  date: string;
  category: "Web Engineering" | "Artificial Intelligence" | "Enterprise Analytics" | "Technical SEO";
  readTime: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
  relatedPath?: string;
  relatedLabel?: string;
}

export const ARTICLES: Article[] = [
  {
    slug: "production-client-architecture-react-supabase-postgresql",
    title: "Architecting a Production Web Application with React, Supabase & PostgreSQL",
    date: "February 2026",
    category: "Web Engineering",
    readTime: "7 min read",
    summary:
      "A first-hand engineering breakdown of building and deploying a real-world client portal end-to-end, covering relational PostgreSQL schema design, Supabase Row-Level Security, custom administrative CMS tooling, and performance optimization.",
    keyTakeaways: [
      "Normalize database schemas early with foreign keys and index lookup columns for instant queries.",
      "Leverage Supabase Row-Level Security (RLS) to enforce authorization directly in the database engine.",
      "Build administrative interfaces decoupled from public rendering to prevent bundle bloat.",
      "Implement optimistic UI updates alongside REST queries to ensure lightning-fast user interactions."
    ],
    relatedPath: "/projects",
    relatedLabel: "View Namami Vindhyavasini Project",
    content: [
      "When building a production-grade web application for a real-world client—such as the Namami Vindhyavasini temple portal (namamivindhyavasini.in)—the priority must be data integrity, maintainability, and clean architecture rather than hasty scaffolding.",
      "The foundation of the platform begins at the database layer. Rather than treating PostgreSQL merely as a document store, I designed a strictly normalized schema where entities like announcements, articles, scheduled temple events, and media assets maintain relational constraints and foreign key cascades. By indexing date columns and publication status flags, query latency remains under 30ms even during traffic spikes.",
      "Security was enforced directly inside the database through Supabase Row-Level Security (RLS) policies. Public users are granted SELECT permissions only on records where `is_published = true`, while administrative mutation (INSERT, UPDATE, DELETE) is restricted to authenticated admin sessions verified via cryptographic JWTs.",
      "On the frontend, I opted for React with TypeScript and Vite. Strict typing ensures that API response payloads map 1-to-1 with React component state, virtually eliminating runtime undefined errors. Dynamic components—such as event countdown timers, media galleries, and interactive notice boards—are modularized into reusable components styled with Tailwind CSS utility tokens for sub-second first contentful paint (FCP).",
      "Deploying to production on Vercel with automatic edge caching and header security completed the pipeline, resulting in a reliable, 100% uptime client deployment with seamless content management."
    ]
  },
  {
    slug: "accessible-ethical-ai-healthcare-support-systems",
    title: "Designing Accessible and Ethical AI Healthcare Companions",
    date: "February 2026",
    category: "Artificial Intelligence",
    readTime: "8 min read",
    summary:
      "Key insights and architectural patterns from my TechRxiv research paper exploring how conversational AI can provide accessible health decision support while upholding patient safety, privacy, and clinical boundaries.",
    keyTakeaways: [
      "AI in healthcare must strictly function as supportive triage, never autonomous medical diagnosis.",
      "Conversational systems must ground responses in peer-reviewed medical data to prevent hallucinations.",
      "Multilingual natural language translation democratizes critical healthcare awareness across underserved communities.",
      "Strict data anonymization and user privacy safeguards are mandatory in client-side health tools."
    ],
    relatedPath: "/research",
    relatedLabel: "Read TechRxiv Research Paper",
    content: [
      "Healthcare systems worldwide are strained by resource constraints, geographical barriers, and a lack of early health literacy. In my published research paper on TechRxiv ('Exploring the Role of Artificial Intelligence in Convenient and Accessible Healthcare Support Systems'), I investigated how software engineers and AI practitioners can build accessible healthcare support tools without crossing dangerous clinical boundaries.",
      "The primary architectural thesis is clear: AI must serve as an informational companion, wellness tracker, and decision support assistant—NOT as an autonomous substitute for certified doctors. In practical software implementations like MediSoul (cure23.vercel.app), this means every symptom inquiry is framed with confidence boundaries and urgent referrals to clinical professionals.",
      "To prevent dangerous LLM hallucinations, client-side conversational bots must be constrained and fine-tuned on curated clinical datasets. Instead of allowing open-ended ungrounded generation, prompts must instruct the model to verify symptoms against structured clinical taxonomies and present step-by-step non-emergency care guidance.",
      "Accessibility is another cornerstone. Medical terminology is notoriously opaque to the general public. By implementing multilingual translation modules, AI assistants can translate complex clinical terminology into vernacular languages, allowing patients to clearly explain symptoms and comprehend doctor recommendations.",
      "Finally, ethical engineering demands zero-knowledge client-side storage where feasible. In MediSoul, longitudinal health logs and appointment records are stored locally on the client machine, preventing sensitive medical history from leaking to third-party ad trackers."
    ]
  },
  {
    slug: "enterprise-analytics-sap-analytics-cloud-modelling",
    title: "Enterprise Data Modelling and Story Design in SAP Analytics Cloud (SAC)",
    date: "January 2026",
    category: "Enterprise Analytics",
    readTime: "6 min read",
    summary:
      "A technical walkthrough of analytical data modelling, dimensions, measures, and automated machine learning forecasts in SAP Analytics Cloud, grounded in official C_SAC_2601 certification standards.",
    keyTakeaways: [
      "Distinguish cleanly between Account models and Measure-based models based on transactional complexity.",
      "Structure Dimension hierarchies (e.g. Time, Geography, Product) to empower intuitive executive drill-downs.",
      "Utilize Smart Predict automated regression and classification to uncover underlying business drivers.",
      "Balance live data connections (zero data replication) against import connections (advanced data transformation)."
    ],
    relatedPath: "/certifications",
    relatedLabel: "View SAP Certified Credential",
    content: [
      "In modern enterprise decision-making, raw transactional data stored in ERPs or data warehouses is useless without structured business intelligence. Having achieved the official SAP Certified - Data Analyst (SAP Analytics Cloud / C_SAC_2601) credential, I have explored the detailed technical mechanics of turning disparate enterprise records into high-impact analytical stories.",
      "The core of any SAC project is the analytical data model. In SAC, engineers must carefully choose between classic Account-based models and modern Measure-based models. Measure-based models allow multiple measures per record with explicit data types, currency formatting, and aggregation rules (SUM, AVERAGE, MIN/MAX), offering superior flexibility for enterprise forecasting.",
      "Data blending is another critical capability. By joining live data streams from SAP S/4HANA with imported operational tables or PostgreSQL data lakes, analysts can bridge historical financial performance with real-time field activity without creating fragmented shadow spreadsheets.",
      "Visual storytelling in SAC is governed by strict usability standards. Executive dashboards should follow visual hierarchy: primary KPIs (Revenue, Operating Margin, Net Churn) at the top in clear numeric tiles, followed by comparative time-series variance charts, and finally dimensional drill-downs. High-contrast color palettes and IBCS (International Business Communication Standards) formatting ensure numbers are immediately intelligible.",
      "Lastly, SAC's Smart Predict leverages embedded machine learning algorithms to calculate automated linear regressions and time-series forecasts. This feature identifies key business drivers and predicts upcoming demand cycles with statistical confidence intervals."
    ]
  },
  {
    slug: "modern-technical-seo-and-entity-graph-architecture",
    title: "Mastering Entity-Based Search & Schema Graphs for Single-Page Apps",
    date: "February 2026",
    category: "Technical SEO",
    readTime: "6 min read",
    summary:
      "How to build a verifiable, machine-readable digital identity for Google, Bing, ChatGPT Search, and Perplexity using connected Schema.org graphs, AEO, and GEO optimization.",
    keyTakeaways: [
      "Search engines and AI answer engines index entities and semantic relationships, not just keywords.",
      "Connect Person, WebSite, ScholarlyArticle, and Credentials into a single coherent @graph node.",
      "Provide accessible semantic HTML fallbacks so crawlers that skip JavaScript capture facts immediately.",
      "Structure content to directly answer who, what, why, and how for generative answer engines."
    ],
    relatedPath: "/about",
    relatedLabel: "Explore Ujwal Singh Entity",
    content: [
      "The era of keyword stuffing and generic meta tags is dead. Modern search engines (Google, Bing) and AI answer engines (ChatGPT Search, Perplexity, Gemini, Microsoft Copilot) rely on Knowledge Graphs, semantic entity resolution, and Generative Engine Optimization (GEO).",
      "For a personal developer portfolio (such as ujwalsingh.in), the goal is to make it unambiguous to search algorithms: Who is Ujwal Singh? What has he built? What research has he published? What are his verified credentials?",
      "The most potent tool for achieving this is Schema.org structured data organized into a connected `@graph`. Instead of scattering isolated JSON-LD snippets across different pages, a master graph declares a primary entity (`https://ujwalsingh.in/#person`) with verified properties: `name`, `jobTitle`, `alumniOf`, `hasCredential`, and `sameAs` links pointing to GitHub, LinkedIn, and ORCID.",
      "When a project page or research paper is indexed, its schema references the primary entity through `@id: https://ujwalsingh.in/#person`. For example, my research paper on TechRxiv is declared as a `ScholarlyArticle` authored by the Person entity, creating an unbroken chain of authority.",
      "Additionally, because client-side Single Page Applications (SPAs) require JavaScript execution that some AI crawlers (like OAI-SearchBot) may skip or timeout, embedding semantic text and machine-readable data directly in the HTML response ensures instantaneous indexing and authoritative answer generation."
    ]
  }
];

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12 px-2 sm:px-0 animate-in fade-in duration-300">
      <PageSEO
        title={
          selectedArticle
            ? `${selectedArticle.title} | Ujwal Singh`
            : "Technical Blog & Engineering Insights | Ujwal Singh"
        }
        description={
          selectedArticle
            ? selectedArticle.summary
            : "Technical articles by Ujwal Singh on Full-Stack Development, React, TypeScript, Supabase, PostgreSQL, AI in Healthcare, and SAP Analytics Cloud."
        }
        path={selectedArticle ? `/blog#${selectedArticle.slug}` : "/blog"}
        keywords="Ujwal Singh blog, software engineering articles, React, TypeScript, Supabase, PostgreSQL, AI in healthcare, SAP Analytics Cloud, technical SEO"
        type="article"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" }
        ]}
      />

      {/* Header */}
      <header className="glass-card p-6 md:p-8 border border-primary/10 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
            Technical Writing & Case Studies
          </span>
          <span className="text-[10px] font-semibold text-foreground/80 px-2.5 py-0.5 rounded-full bg-primary/5 border border-primary/15">
            By Ujwal Singh
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold gradient-text">
          Engineering Insights & Technical Knowledge
        </h1>

        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
          Original technical articles and deep dives written by <strong>Ujwal Singh</strong>, grounded in real-world production 
          architecture, peer-reviewed AI research, enterprise SAP BI certifications, and modern web engineering.
        </p>
      </header>

      {/* Article Detail View */}
      {selectedArticle ? (
        <article className="glass-card p-6 md:p-10 border border-primary/20 space-y-6 animate-in fade-in duration-300">
          <button
            onClick={() => setSelectedArticle(null)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </button>

          <div className="space-y-3 border-b border-primary/10 pb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                {selectedArticle.category}
              </span>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-primary" />
                {selectedArticle.date}
              </span>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-primary" />
                {selectedArticle.readTime}
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl font-bold text-foreground leading-snug">
              {selectedArticle.title}
            </h2>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <User className="w-3.5 h-3.5 text-primary" />
              <span>Written by <strong>Ujwal Singh</strong></span>
            </div>
          </div>

          {/* Key Takeaways Box */}
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Key Engineering Takeaways
            </h3>
            <ul className="space-y-1 text-xs text-foreground/90">
              {selectedArticle.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Body Content */}
          <div className="space-y-4 text-xs sm:text-sm text-foreground/90 leading-relaxed">
            {selectedArticle.content.map((paragraph, pIdx) => (
              <p key={pIdx}>{paragraph}</p>
            ))}
          </div>

          {/* Related Link */}
          {selectedArticle.relatedPath && (
            <div className="pt-4 border-t border-primary/10 flex items-center justify-between">
              <Link
                to={selectedArticle.relatedPath}
                className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-xl text-xs hover:opacity-90 transition-all shadow-sm"
              >
                <span>{selectedArticle.relatedLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </article>
      ) : (
        /* Articles List */
        <section className="space-y-4">
          {ARTICLES.map((article) => (
            <article
              key={article.slug}
              onClick={() => setSelectedArticle(article)}
              className="glass-card p-6 md:p-8 border border-primary/10 hover:border-primary/25 transition-all cursor-pointer group space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                  {article.category}
                </span>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {article.title}
              </h2>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {article.summary}
              </p>

              <div className="flex items-center gap-1 text-xs font-semibold text-primary pt-2">
                <span>Read Full Article</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </section>
      )}

      {/* Navigation Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-primary/10 text-xs">
        <Link to="/about" className="inline-flex items-center gap-1 text-primary hover:underline font-semibold">
          ← About Ujwal Singh
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/research" className="text-muted-foreground hover:text-primary transition-colors">
            Research
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
