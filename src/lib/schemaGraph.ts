/**
 * Unified Schema.org Structured Data Generator for ujwalsingh.in
 * Primary Entity: Ujwal Singh (https://ujwalsingh.in/#person)
 * Official WebSite: https://ujwalsingh.in/#website
 */

export const SITE_URL = "https://ujwalsingh.in";
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export interface SchemaGraphOptions {
  pageTitle: string;
  pageDescription: string;
  pagePath: string;
  pageType?: "WebPage" | "AboutPage" | "CollectionPage" | "ItemPage" | "ContactPage" | "ProfilePage";
  breadcrumbs?: { name: string; path: string }[];
  extraNodes?: Record<string, unknown>[];
}

/**
 * Base Person Entity
 * Fully backed by verifiable facts, official profiles, research, and credentials.
 */
export const getPersonEntity = () => ({
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Ujwal Singh",
  alternateName: ["Ujwal", "ujwalx23", "Ujwal Singh Developer", "Ujwal Singh Engineer"],
  givenName: "Ujwal",
  familyName: "Singh",
  url: SITE_URL,
  image: `${SITE_URL}/images/pwa-icon-512.png`,
  jobTitle: "Full-Stack Developer & Software Engineer",

  description:
    "Ujwal Singh is an IT and Computer Engineering professional, Full-Stack Developer, and SAP Certified Data Analyst (SAC) based in Mumbai, India. Creator of production web platforms and author of AI healthcare research on TechRxiv.",
  nationality: {
    "@type": "Country",
    name: "India"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN"
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Shree L. R. Tiwari College of Engineering (University of Mumbai)",
    sameAs: "https://mu.ac.in/"
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      "@id": `${SITE_URL}/certifications#sap-sac`,
      name: "SAP Certified - Data Analyst (SAP Analytics Cloud)",
      credentialCategory: "Certification",
      recognizedBy: {
        "@type": "Organization",
        name: "SAP",
        url: "https://www.sap.com"
      }
    }
  ],
  sameAs: [
    "https://github.com/ujwalx23",
    "https://www.linkedin.com/in/ujwalsingh23/",
    "https://orcid.org/0009-0004-0490-010X",
    "https://x.com/UJWALSINGH23",
    "https://leetcode.com/u/UjwalSingh23/",
    "https://takeuforward.org/profile/Ujwal%20Singh",
    "https://www.quora.com/profile/UJWAL-SINGH-85",
    "https://www.youtube.com/channel/UCbtH84Ir66Tkc--d7eG5p8g",
    "https://www.instagram.com/ujwalx23/",
    "https://in.pinterest.com/UjwalSingh23/",
    "https://www.threads.com/@ujwalx23",
    "https://www.reddit.com/user/UjwalSingh45/",
    "https://discord.com/users/1243952128272371764"
  ],
  subjectOf: [
    {
      "@type": "ScholarlyArticle",
      "@id": `${SITE_URL}/research#ai-healthcare-paper`,
      name: "Exploring the Role of Artificial Intelligence in Convenient and Accessible Healthcare Support Systems",
      url: "https://www.techrxiv.org/doi/full/10.36227/techrxiv.177006061.17458864/v1",
      sameAs: "https://doi.org/10.36227/techrxiv.177006061.17458864/v1"
    }
  ],
  knowsAbout: [
    "Full-Stack Web Development",
    "React.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Next.js",
    "PostgreSQL",
    "Supabase",
    "Tailwind CSS",
    "Python",
    "Java",
    "SQL",
    "SAP Analytics Cloud (SAC)",
    "Business Intelligence & Data Modelling",
    "Artificial Intelligence in Healthcare",
    "REST APIs",
    "Software Engineering",
    "Git & GitHub",
    "Vercel Deployment"
  ]
});

/**
 * Base WebSite Entity
 */
export const getWebSiteEntity = () => ({
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: "Ujwal Singh | Official Personal Website",
  description:
    "Official personal website and authoritative technical portfolio of Ujwal Singh, Full-Stack Developer, Software Engineer, and SAP Certified Data Analyst.",
  publisher: {
    "@id": PERSON_ID
  },
  author: {
    "@id": PERSON_ID
  },
  inLanguage: ["en", "hi", "fr", "es", "zh"]
});

/**
 * Research Paper Schema: "Exploring the Role of Artificial Intelligence in Convenient and Accessible Healthcare Support Systems"
 * Published on TechRxiv (IEEE / TechRxiv preprint) in February 2026.
 */
export const getScholarlyArticleEntity = () => ({
  "@type": "ScholarlyArticle",
  "@id": `${SITE_URL}/research#ai-healthcare-paper`,
  headline: "Exploring the Role of Artificial Intelligence in Convenient and Accessible Healthcare Support Systems",
  name: "Exploring the Role of Artificial Intelligence in Convenient and Accessible Healthcare Support Systems",
  author: {
    "@id": PERSON_ID
  },
  datePublished: "2026-02-02",
  isPartOf: {
    "@type": "Periodical",
    name: "TechRxiv"
  },
  publisher: {
    "@type": "Organization",
    name: "TechRxiv (powered by IEEE)",
    url: "https://www.techrxiv.org"
  },
  url: "https://www.techrxiv.org/doi/full/10.36227/techrxiv.177006061.17458864/v1",
  mainEntityOfPage: "https://www.techrxiv.org/doi/full/10.36227/techrxiv.177006061.17458864/v1",
  sameAs: [
    "https://www.techrxiv.org/doi/full/10.36227/techrxiv.177006061.17458864/v1",
    "https://doi.org/10.36227/techrxiv.177006061.17458864/v1"
  ],
  identifier: "10.36227/techrxiv.177006061.17458864/v1",
  description:
    "Research examining how artificial intelligence and digital technologies enhance healthcare accessibility, decision support, and patient awareness while identifying crucial ethical safeguards, transparency standards, and privacy requirements.",
  keywords: [
    "Artificial Intelligence",
    "Healthcare Support Systems",
    "Accessible Healthcare",
    "Medical AI Ethics",
    "Decision Support Systems",
    "Human-Centered AI"
  ]
});

/**
 * Generate a complete, connected JSON-LD graph for any page
 */
export const buildSchemaGraph = ({
  pageTitle,
  pageDescription,
  pagePath,
  pageType = "WebPage",
  breadcrumbs = [],
  extraNodes = []
}: SchemaGraphOptions) => {
  const fullPageUrl = `${SITE_URL}${pagePath}`;
  const pageId = `${fullPageUrl}#webpage`;

  const webPageNode: Record<string, unknown> = {
    "@type": pageType,
    "@id": pageId,
    url: fullPageUrl,
    name: pageTitle,
    description: pageDescription,
    isPartOf: {
      "@id": WEBSITE_ID
    },
    about: {
      "@id": PERSON_ID
    },
    author: {
      "@id": PERSON_ID
    },
    inLanguage: "en"
  };

  const graph: Record<string, unknown>[] = [
    getPersonEntity(),
    getWebSiteEntity(),
    webPageNode
  ];

  // Optional BreadcrumbList
  if (breadcrumbs.length > 0) {
    const breadcrumbList = {
      "@type": "BreadcrumbList",
      "@id": `${fullPageUrl}#breadcrumb`,
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: `${SITE_URL}${crumb.path}`
      }))
    };
    graph.push(breadcrumbList);
    webPageNode.breadcrumb = { "@id": `${fullPageUrl}#breadcrumb` };
  }

  // Include any extra specialized nodes (e.g. ScholarlyArticle, SoftwareApplication, FAQPage)
  if (extraNodes.length > 0) {
    extraNodes.forEach(node => graph.push(node));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
};
