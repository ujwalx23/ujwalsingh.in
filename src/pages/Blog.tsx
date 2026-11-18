import React, { useState, useEffect } from "react";
import { 
  BookOpen, Calendar, Clock, User, ArrowRight, 
  ChevronRight, Tag, Sparkles, Share2, ArrowLeft, CheckCircle2, 
  Image as ImageIcon, Search, Check, ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";
import { PERSON_ID, SITE_URL } from "@/lib/schemaGraph";

export interface Article {
  slug: string;
  title: string;
  date: string;
  category: 
    | "Web Engineering" 
    | "Artificial Intelligence" 
    | "Enterprise Analytics" 
    | "Technical SEO" 
    | "Cloud & Security" 
    | "Tech Policy & Careers";
  readTime: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
  image?: string;
  imageCaption?: string;
  relatedPath?: string;
  relatedLabel?: string;
}

export const ARTICLES: Article[] = [
  {
    slug: "engineering-encrypted-secure-cloud-zero-trust-confidential-computing",
    title: "Engineering the Encrypted Cloud: Zero-Trust Architecture, KMS & Confidential Computing",
    date: "November 15, 2026",
    category: "Cloud & Security",
    readTime: "7 min read",
    summary:
      "An architectural deep dive into constructing high-security cloud environments: implementing envelope encryption with Cloud KMS, Zero-Trust network micro-segmentation, client-side zero-knowledge proofs, and hardware-enforced Confidential Computing enclaves.",
    keyTakeaways: [
      "Comprehensive cloud security requires protecting data across all three states: at rest (AES-256-GCM), in transit (mTLS 1.3), and in use (Confidential VMs).",
      "Envelope encryption with Key Management Services (KMS) separates fast local data encryption from securely managed master key encryption.",
      "Zero-Trust networking abolishes implicit network perimeter trust, enforcing ephemeral cryptographic tokens (JWT/OIDC) for every API hop.",
      "Client-side zero-knowledge encryption ensures user credentials and sensitive records remain undecryptable even if cloud infrastructure is breached."
    ],
    relatedPath: "/projects",
    relatedLabel: "Explore Secure Architectures",
    content: [
      "In an era of sophisticated supply-chain attacks, credential stuffing, and cloud misconfiguration exploits, relying on perimeter defenses like basic firewalls and SSL certificates is woefully inadequate. Modern cloud systems must be architected under the core tenets of Zero-Trust: 'never trust, always verify'—treating the internal network as fundamentally untrusted as the public internet.",
      "True data security demands rigorous cryptographic protection across all three states of the data lifecycle. First, data-in-transit is protected via TLS 1.3 with mandatory mutual authentication (mTLS) between microservices, ensuring eavesdroppers cannot intercept inter-service traffic. Second, data-at-rest is encrypted using AES-256 in Galois/Counter Mode (GCM), providing both confidentiality and cryptographic integrity verification. Third—and most revolutionary—data-in-use is protected through Confidential Computing, utilizing hardware memory isolation (such as AMD SEV-SNP or Intel TDX) to encrypt data actively processed in CPU RAM, preventing hypervisors or cloud host administrators from peeking into runtime memory.",
      "At the heart of production encryption pipelines lies Key Management Service (KMS) architecture and Envelope Encryption. Storing static encryption keys alongside application code or environment variables is an unacceptable security vulnerability. In envelope encryption, large data objects are encrypted locally using a unique Data Encryption Key (DEK). The DEK itself is then encrypted under a Root Key (Key Encryption Key / KEK) stored inside a FIPS 140-3 Level 3 Hardware Security Module (HSM). When data must be accessed, only the small DEK is sent to the KMS for decryption, minimizing network latency while preserving centralized key rotation and tamper-evident audit logs.",
      "Identity must become the new security boundary. In a zero-trust cloud architecture, long-lived access tokens, static API keys, and hardcoded database passwords are replaced by short-lived cryptographic tokens issued via OpenID Connect (OIDC). Inside database tiers like PostgreSQL, fine-grained Row-Level Security (RLS) ensures that even if an application endpoint is queried maliciously, the database engine itself rejects unauthorized queries based on the caller's cryptographic claims.",
      "When building patient-focused or client-critical platforms (such as MediSoul), client-side zero-knowledge architecture provides the ultimate safety net. By performing cryptographic hashing, salting, and symmetric encryption directly in the user's browser runtime before dispatching payloads over the wire, the backend cloud infrastructure functions strictly as an encrypted storage relay. Even in the catastrophic event of a total database breach, the stored records remain indecipherable ciphertext without the user's client-held key."
    ]
  },
  {
    slug: "technical-seo-case-study-optimizing-namami-vindhyavasini-production-portal",
    title: "Technical SEO Case Study: How I Engineered Search Dominance for Namami Vindhyavasini",
    date: "September 19, 2026",
    category: "Technical SEO",
    readTime: "8 min read",
    summary:
      "A comprehensive engineering case study on the end-to-end technical SEO, structured Schema.org entity graphs, Core Web Vitals optimization, and indexing strategy executed for the production client platform namamivindhyavasini.in.",
    keyTakeaways: [
      "Multi-layered Schema.org JSON-LD (HinduTemple, Event, Place, FAQPage) granted immediate rich snippet and knowledge panel eligibility.",
      "WebP asset conversion with responsive srcset reduced page load weight by 72%, securing a 98+ mobile Lighthouse performance rating.",
      "Programmatic XML sitemaps, semantic Open Graph cards, and RSS feeds enabled near-instantaneous indexing on Google and Bing.",
      "Server-rendered semantic fallbacks ensured AI search crawlers (Perplexity, ChatGPT Search) extracted accurate entities without JS timeouts."
    ],
    image: "/images/namami.png",
    imageCaption: "Production screenshot of Namami Vindhyavasini (namamivindhyavasini.in) showcasing semantic layout, optimized imagery, and client architecture.",
    relatedPath: "/projects",
    relatedLabel: "View Namami Vindhyavasini Project",
    content: [
      "When architecting and deploying the production web portal for Namami Vindhyavasini (namamivindhyavasini.in), technical SEO was not treated as a post-launch marketing afterthought. For a prominent spiritual destination attracting thousands of daily pilgrims and devotees, fast search discoverability for temple timings, aarti schedules, dharmik events, and verified announcements was a core engineering requirement.",
      "The centerpiece of the SEO strategy was an interconnected Schema.org entity graph injected directly into the HTML <head> via JSON-LD. Rather than using generic web page tags, I modeled the institution with deep semantic precision: declaring a primary HinduTemple entity with verified geo-coordinates (latitude/longitude), opening hours specifications for four daily aartis, contact points, and associated Event nodes for upcoming festivals. This rich semantic structure immediately qualified the platform for Google Knowledge Panels and rich search snippets.",
      "Core Web Vitals and image optimization were critical, especially given that over 85% of temple visitors browse from mobile devices on variable cellular networks. High-resolution temple photography was converted from uncompressed formats into modern, highly compressed WebP assets with responsive srcset definitions and native lazy loading (loading=\"lazy\"). By implementing CSS content-visibility, explicit image width/height aspect ratios to eliminate Cumulative Layout Shift (CLS), and fine-tuned Vite bundle splitting, the platform achieved a 98+ mobile Lighthouse score with an LCP under 1.2 seconds.",
      "To maximize crawl efficiency and indexation velocity, I engineered clean, hierarchical URL routing with descriptive slugs for dynamic blogs and announcements. A programmatic sitemap.xml was configured to update automatically upon new content publication, while an accompanying rss.xml feed enabled syndication and rapid bot pickup. Open Graph (og:*) and Twitter Card meta tags were dynamically populated with crisp titles, descriptions, and high-contrast social cards, ensuring high click-through rates whenever devotees shared links on WhatsApp, Facebook, or X.",
      "The results speak for themselves: within weeks of deployment, Namami Vindhyavasini captured top-tier organic rankings for primary pilgrimage keywords in Mirzapur and Eastern Uttar Pradesh. Furthermore, because entity relationships were defined with mathematical clarity, emerging AI answer engines like Perplexity, ChatGPT Search, and Google Gemini accurately cite the portal as the authoritative source for temple guidelines and ceremonies."
    ]
  },
  {
    slug: "architecting-intelligent-ai-tutors-adaptive-pedagogy-rag-socratic-models",
    title: "Architecting Intelligent AI Tutors: Adaptive Learning Graphs, RAG & Socratic Dialogue",
    date: "August 18, 2026",
    category: "Artificial Intelligence",
    readTime: "8 min read",
    summary:
      "A technical blueprint for developing next-generation pedagogical AI systems—moving beyond naive chat completions to implement Bayesian Knowledge Tracing, curriculum prerequisite graphs, Socratic prompting guardrails, and verifiable retrieval.",
    keyTakeaways: [
      "Naive LLM chatbots fail pedagogically by instantly revealing answers rather than cultivating active critical thinking and student problem-solving.",
      "Socratic dialog engines use structured system prompts to diagnose student misconceptions through progressive inquiry and hint ladders.",
      "Bayesian Knowledge Tracing (BKT) and concept dependency graphs dynamically estimate a student's mastery probability across curriculum nodes.",
      "Hybrid RAG pipelines verify learning materials against authoritative textbooks and rubrics, eliminating dangerous hallucinations in academic topics."
    ],
    relatedPath: "/research",
    relatedLabel: "Explore AI Research & Systems",
    content: [
      "The deployment of Large Language Models in education has exposed a fundamental architectural flaw: standard LLM chatbots are trained to be obedient answer engines, not effective teachers. When a struggling student asks an LLM for help with a calculus problem or a programming bug, the model immediately generates the complete final solution. While satisfying in the moment, this completely circumvents the productive cognitive struggle essential for long-term comprehension and synaptic learning.",
      "Building an intelligent AI tutor requires architecting an interactive Socratic dialogue engine. Rather than outputting direct answers, the model must operate under strict pedagogical policies: prompting the student to explain their intermediate reasoning, identifying specific conceptual misconceptions, and delivering incremental hints via structured 'hint ladders'. When a student makes an arithmetic error versus a fundamental conceptual error, the dialogue agent tailors its response to guide the student to discover their own mistake.",
      "Underpinning the conversational layer is student cognitive modeling. Leveraging Bayesian Knowledge Tracing (BKT) and prerequisite Directed Acyclic Graphs (DAGs), an AI tutoring platform maps every learning objective (e.g., 'Array Indices' → 'Pointer Arithmetic' → 'Dynamic Memory Allocation'). With each interaction, the system calculates the posterior probability that the student has mastered a concept, dynamically serving tailored practice problems that keep the student in their optimal Zone of Proximal Development (ZPD).",
      "Academic accuracy cannot tolerate model hallucinations. In an educational setting, presenting an erroneous chemical formula or historical date can mislead a learner for years. To guarantee fidelity, the tutor's inference engine must be tightly coupled with a domain-curated Retrieval-Augmented Generation (RAG) pipeline. Textbook chapters, lecture transcripts, and verified problem sets are vectorized and retrieved using hybrid sparse-dense search, ensuring every generated explanation is grounded in peer-reviewed reference material.",
      "The true promise of intelligent AI tutoring lies in radical educational equity. In classrooms with 40-to-1 student-teacher ratios, individual attention is an unattainable luxury. By providing low-latency, empathetic, and multilingual 1-on-1 tutoring available 24/7 on any mobile device, personalized education can finally transcend socio-economic and geographic barriers."
    ]
  },
  {
    slug: "how-hyperscale-data-centers-and-ai-compute-are-indirectly-reshaping-jobs",
    title: "Megawatts Over Manpower: How Hyperscale Data Centers and Compute Automation Indirectly Impact Jobs",
    date: "June 5, 2026",
    category: "Tech Policy & Careers",
    readTime: "7 min read",
    summary:
      "An investigation into the socio-economic reality of the AI infrastructure boom: why massive data centers requiring gigawatts of power employ surprisingly few humans, and how centralized compute automation indirectly displaces traditional operational and IT roles.",
    keyTakeaways: [
      "Multi-hundred-million-dollar data centers create temporary construction surges but operate with skeletal permanent engineering teams (often 30–50 technicians).",
      "Centralized hyperscale cloud platforms have systematically dismantled decentralized in-house IT administration and localized server support.",
      "AIOps, automated telemetry, and thermal robotics automate hardware health checks, cabling diagnostics, and disk replacement workflows.",
      "Compute concentration shifts human work upstream: repetitive white-collar and back-office tasks are converted into automated API calls running in server farms.",
      "Engineers must future-proof their careers by focusing on architectural systems design, distributed systems, and domain problem-solving."
    ],
    relatedPath: "/experience",
    relatedLabel: "View Engineering Journey",
    content: [
      "Over the past three years, headlines have celebrated massive investments in artificial intelligence data centers—sprawling campuses occupying hundreds of acres, consuming hundreds of megawatts of electricity, and packing tens of thousands of liquid-cooled GPUs. Yet beneath the economic euphoria lies a quiet structural paradox: while capital expenditure in physical compute infrastructure has broken records, permanent human employment within those facilities remains astonishingly low.",
      "A state-of-the-art hyperscale facility costing over $1 billion often requires fewer than 50 full-time staff to operate post-commissioning. Advanced robotics handle routine rack inspection, AI-driven thermal algorithms dynamically adjust liquid cooling loops, and autonomous networking fabrics route around fiber cuts without human intervention. The labor force is primarily comprised of a few high-voltage electrical technicians, physical security personnel, and facilities managers—not a burgeoning tech workforce.",
      "The deeper disruption, however, is not what happens inside the data center fence, but what happens outside it. For decades, thousands of enterprises employed localized IT departments: systems administrators, database operators, storage technicians, and on-premise network engineers. The relentless migration into centralized hyperscale clouds (AWS, GCP, Azure) has effectively dissolved these localized roles, consolidating operational overhead into centralized software-defined infrastructure managed by automated scripts.",
      "Furthermore, the compute power housed inside these data centers serves as the computational engine for agentic enterprise automation. Routine white-collar workflows—invoice processing, tier-1 customer support, compliance verification, and standardized report generation—are increasingly digested by LLM pipelines executing within these server farms. In effect, megawatts of compute are directly substituting for hundreds of thousands of human labor hours across global back offices.",
      "For software developers and IT professionals, this transition demands a deliberate strategic pivot. Routine configuration, boilerplate maintenance, and localized sysadmin tasks are being absorbed by automated cloud planes. The engineering roles that will thrive are those centered on distributed systems architecture, hardware-software co-design, strict security governance, and applying technology to solve non-trivial human problems."
    ]
  },
  {
    slug: "modern-database-architecture-sql-nosql-vectors-distributed-scale",
    title: "Modern Database Engineering: Relational Integrity, Distributed NoSQL, and Vector Scale",
    date: "April 20, 2026",
    category: "Web Engineering",
    readTime: "8 min read",
    summary:
      "A deep architectural dive into modern data persistence: balancing relational ACID guarantees with distributed NoSQL scalability, indexing mechanics (B-Tree, GIN, GiST), vector similarity retrieval (pgvector, HNSW), and connection pooling strategies.",
    keyTakeaways: [
      "Relational integrity with foreign key cascades and schema normalization prevents data corruption and phantom mutations at scale.",
      "Advanced PostgreSQL indexing (B-Tree for range scans, GIN for JSONB and arrays) drastically reduces disk I/O and query latency.",
      "Vector search with HNSW (Hierarchical Navigable Small World) provides sub-5ms similarity retrieval across millions of high-dimensional embeddings.",
      "Connection pooling layers (PgBouncer, Supavisor) are crucial in serverless architectures to prevent database worker process starvation."
    ],
    relatedPath: "/projects",
    relatedLabel: "View Database Architectures",
    content: [
      "In contemporary software engineering, choosing the right database paradigm is rarely a dogmatic binary between SQL and NoSQL. As web applications scale from simple CRUD interfaces into data-intensive distributed platforms, backend engineers must master how relational ACID guarantees, horizontally partitioned document stores, and vector similarity search intersect.",
      "At the foundation of relational engines like PostgreSQL lies Multi-Version Concurrency Control (MVCC) and Write-Ahead Logging (WAL). Rather than locking entire tables during concurrent mutations, PostgreSQL generates transaction snapshots, guaranteeing repeatable reads without blocking concurrent queries. When designing schemas for production systems—such as client booking systems or administrative dashboards—enforcing strict foreign key constraints and domain-level checks at the database tier eliminates subtle race conditions before they ever reach application logic.",
      "Query optimization lives and dies by index design. While default B-Tree indexes excel at equality checks and scalar range queries, modern semi-structured workloads require specialized data structures. Generalized Inverted Indexes (GIN) allow high-speed introspection into nested JSONB documents and array columns. Furthermore, understanding query planner mechanics through EXPLAIN (ANALYZE, BUFFERS) reveals hidden sequential scans, nested loop bottlenecks, and cache misses that can degrade query performance under high concurrency.",
      "The explosion of generative AI and semantic search has brought vector databases directly into the core relational stack. Through extensions like pgvector, engineers no longer need to maintain complex out-of-band vector engines. Utilizing indexing algorithms like HNSW (Hierarchical Navigable Small World) over IVFFlat allows nearest-neighbor lookups across 1536-dimensional embeddings in single-digit milliseconds, enabling unified hybrid queries that join semantic vector distances with relational metadata in a single transaction.",
      "Finally, the serverless execution model introduces critical database connection hazards. Stateless cloud functions opening direct TCP handshakes will quickly exhaust PostgreSQL's max_connections. Deploying intelligent connection multiplexers such as PgBouncer or Supabase's Supavisor operating in transaction pooling mode preserves CPU and memory headroom, ensuring thousands of client requests can be serviced concurrently with consistent sub-30ms response times."
    ]
  },
  {
    slug: "next-gen-ai-video-generation-and-automated-editing",
    title: "The Paradigm Shift in AI Video Generation & Automated Post-Production",
    date: "March 24, 2026",
    category: "Artificial Intelligence",
    readTime: "7 min read",
    summary:
      "An engineering breakdown of diffusion transformers (DiTs) in generative video synthesis, spatio-temporal latent patch encoding, temporal consistency challenges, neural inpainting, and building programmatic automated editing pipelines with code.",
    keyTakeaways: [
      "Spatio-temporal diffusion transformers (DiTs) tokenize video into 3D spacetime latent patches, achieving realistic physical simulations and dynamic camera motion.",
      "Temporal consistency and identity drift are mitigated using cross-frame attention masks, optical flow guidance, and depth-conditioned latent spaces.",
      "Neural video editing automates rotoscoping, object removal, and scene relighting in minutes rather than days of manual keyframing.",
      "Code-driven media pipelines (combining Remotion, FFmpeg, and generative LLM orchestration) enable hyper-personalized, on-demand video assembly."
    ],
    relatedPath: "/research",
    relatedLabel: "View AI Research & Systems",
    content: [
      "The evolution of generative artificial intelligence has moved rapidly from static 2D image synthesis to high-fidelity spatio-temporal video generation. Architectures like Sora, Runway Gen-3, and open-source diffusion transformers (DiTs) represent a fundamental paradigm shift: treating video not merely as a sequential stack of frames, but as continuous spacetime volume tokens governed by learned physical dynamics.",
      "At the architectural core, modern video synthesis models replace classic UNet backbones with Diffusion Transformers operating on 3D latent patches. Video clips are first compressed into lower-dimensional representations via spatial and temporal Variational Autoencoders (VAEs). The transformer then computes joint spatio-temporal attention, allowing tokens across distant frames to establish causal relationships—ensuring that a moving shadow, fluid splash, or turning face retains accurate geometry, depth, and illumination throughout the shot.",
      "Despite these breakthroughs, the hardest technical challenge remains temporal consistency. Early generative approaches suffered from frame flickering, unnatural morphing, and severe identity drift across camera cuts. Current state-of-the-art pipelines resolve this by incorporating optical flow consistency losses, depth-conditioned control nets, and cross-frame attention caching. By constraining the latent space with camera trajectory parameters (pan, zoom, tilt, roll), creators can now direct cinematography with programmatic precision.",
      "Beyond pure synthesis from text prompts, neural video editing is completely redefining post-production. Labor-intensive VFX tasks that once required frame-by-frame rotoscoping in Adobe After Effects or DaVinci Resolve—such as isolating dynamic actors, removing background distractions, and re-lighting complex 3D scenes—can now be executed in real-time through zero-shot text-guided inpainting and neural segmentation models (SAM 2).",
      "For software developers and content platforms, the next frontier is headless programmatic video automation. By pairing generative video APIs with code-based rendering engines like Remotion and FFmpeg, developers can automate the entire post-production loop: drafting script outlines with LLMs, generating contextual B-roll clips, aligning automated speech synthesis (TTS) to audio waveforms, and rendering final high-definition MP4 files on serverless GPU clusters."
    ]
  },
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

const CATEGORIES = [
  "All",
  "Artificial Intelligence",
  "Web Engineering",
  "Technical SEO",
  "Cloud & Security",
  "Tech Policy & Careers",
  "Enterprise Analytics"
] as const;

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  // Sync hash routing: if URL has #slug, load that article directly
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const match = ARTICLES.find((a) => a.slug === hash);
        if (match) {
          setSelectedArticle(match);
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
      }
      setSelectedArticle(null);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const openArticle = (article: Article) => {
    setSelectedArticle(article);
    window.location.hash = article.slug;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    if (window.location.hash) {
      window.history.pushState(null, "", window.location.pathname);
    }
  };

  const copyArticleLink = (slug: string) => {
    const url = `${window.location.origin}/blog#${slug}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedSlug(slug);
      setTimeout(() => setCopiedSlug(null), 2500);
    });
  };

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            : "Original technical articles by Ujwal Singh on Full-Stack Development, AI Video Generation, Database Architectures, AI Tutors, Technical SEO for Namami, and Encrypted Cloud Systems."
        }
        path={selectedArticle ? `/blog#${selectedArticle.slug}` : "/blog"}
        keywords="Ujwal Singh blog, AI video generation, database architecture, AI tutor, Namami Vindhyavasini SEO, encrypted secure cloud, React, PostgreSQL, full stack"
        image={selectedArticle?.image ? `${SITE_URL}${selectedArticle.image}` : undefined}
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
          <span className="text-[10px] font-semibold text-muted-foreground px-2.5 py-0.5 rounded-full bg-muted/40 border border-border/50">
            {ARTICLES.length} Articles
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold gradient-text">
          Engineering Insights & Technical Knowledge
        </h1>

        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
          Original technical articles and deep dives written by <strong>Ujwal Singh</strong>, grounded in real-world production 
          architecture, peer-reviewed AI research, database engineering, cloud security, and technical SEO case studies.
        </p>
      </header>

      {/* Article Detail View */}
      {selectedArticle ? (
        <article className="glass-card p-6 md:p-10 border border-primary/20 space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={closeArticle}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Articles</span>
            </button>

            <button
              onClick={() => copyArticleLink(selectedArticle.slug)}
              className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground hover:text-primary px-2.5 py-1 rounded-lg border border-border/60 hover:border-primary/30 transition-all cursor-pointer bg-card/40"
              title="Copy share link"
            >
              {copiedSlug === selectedArticle.slug ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-500" />
                  <span className="text-green-500 font-semibold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>

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
            <ul className="space-y-1.5 text-xs text-foreground/90">
              {selectedArticle.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Attached Image / Screenshot if available */}
          {selectedArticle.image && (
            <div className="space-y-2 my-6">
              <div className="rounded-xl overflow-hidden border border-primary/20 shadow-lg bg-background/50">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-auto object-cover max-h-[440px]"
                  loading="lazy"
                />
              </div>
              {selectedArticle.imageCaption && (
                <p className="text-[11px] text-center text-muted-foreground italic flex items-center justify-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{selectedArticle.imageCaption}</span>
                </p>
              )}
            </div>
          )}

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
        <section className="space-y-6">
          {/* Controls: Search and Categories */}
          <div className="space-y-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles by title, topic, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-primary/15 bg-background/50 focus:outline-none focus:border-primary/50 text-foreground placeholder:text-muted-foreground transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {CATEGORIES.map((cat) => {
                const count =
                  cat === "All"
                    ? ARTICLES.length
                    : ARTICLES.filter((a) => a.category === cat).length;
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-[11px] font-medium px-3 py-1 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "bg-card/40 text-muted-foreground hover:text-foreground border-border/60 hover:border-primary/30"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[9px] px-1.5 py-0.2 rounded-full font-semibold ${
                        isActive
                          ? "bg-primary-foreground/20 text-primary-foreground"
                          : "bg-muted/80 text-muted-foreground"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cards Grid / List */}
          {filteredArticles.length === 0 ? (
            <div className="glass-card p-12 text-center border border-primary/10 rounded-2xl space-y-2">
              <BookOpen className="w-8 h-8 text-muted-foreground mx-auto opacity-50" />
              <p className="text-sm font-semibold text-foreground">No articles found</p>
              <p className="text-xs text-muted-foreground">
                Try searching with different terms or selecting another category.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredArticles.map((article) => (
                <article
                  key={article.slug}
                  onClick={() => openArticle(article)}
                  className="glass-card p-6 md:p-8 border border-primary/10 hover:border-primary/25 transition-all cursor-pointer group space-y-3 relative overflow-hidden"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                        {article.category}
                      </span>
                      {article.image && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-muted-foreground px-2 py-0.5 rounded-full bg-muted/60 border border-border/60">
                          <ImageIcon className="w-3 h-3 text-primary" />
                          <span>Includes Visual</span>
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {article.summary}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1 text-xs font-semibold text-primary">
                      <span>Read Full Article</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        copyArticleLink(article.slug);
                      }}
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      title="Share article link"
                    >
                      {copiedSlug === article.slug ? (
                        <Check className="w-3.5 h-3.5 text-green-500" />
                      ) : (
                        <Share2 className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
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
