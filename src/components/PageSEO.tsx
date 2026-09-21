import { useEffect } from "react";
import { buildSchemaGraph } from "@/lib/schemaGraph";

interface AcademicCitationMeta {
  citationTitle: string;
  citationAuthor: string;
  citationPublicationDate: string;
  citationJournalTitle: string;
  citationDoi: string;
  citationPublicUrl?: string;
}

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  jsonLd?: Record<string, unknown>;
  breadcrumbs?: { name: string; path: string }[];
  extraNodes?: Record<string, unknown>[];
  academicMeta?: AcademicCitationMeta;
}

const BASE_URL = "https://ujwalsingh.in";
// Default to the branded OG social card for rich link previews
const DEFAULT_OG_IMAGE = "https://ujwalsingh.in/og-card.jpg";

// hreflang language mapping — same URL serves all 5 languages via client-side i18n
const HREFLANG_LOCALES = [
  { hreflang: "en", lang: "en" },
  { hreflang: "fr", lang: "fr" },
  { hreflang: "es", lang: "es" },
  { hreflang: "zh-Hans", lang: "zh" },
  { hreflang: "hi", lang: "hi" },
  { hreflang: "x-default", lang: "en" },
];

const PageSEO = ({
  title,
  description,
  path,
  keywords,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  jsonLd,
  breadcrumbs,
  extraNodes,
  academicMeta
}: PageSEOProps) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper to set/create meta tags
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Helper to set/create link tags
    const setLink = (rel: string, hreflang: string | undefined, href: string) => {
      const selector = hreflang
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]`;
      let el = document.querySelector(selector) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        if (hreflang) el.setAttribute("hreflang", hreflang);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // Clean path ensuring leading slash
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    const fullUrl = `${BASE_URL}${cleanPath === "/" ? "" : cleanPath}`;
    const resolvedImage = image.startsWith("http") ? image : `${BASE_URL}${image}`;

    // Standard SEO Tags
    setMeta("name", "description", description);
    setMeta("name", "author", "Ujwal Singh");
    if (keywords) setMeta("name", "keywords", keywords);

    // Open Graph Tags — uses branded OG social card
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", fullUrl);
    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", "Ujwal Singh");
    setMeta("property", "og:image", resolvedImage);
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("property", "og:image:alt", "Ujwal Singh – Full-Stack Developer & Software Engineer | ujwalsingh.in");
    setMeta("property", "og:locale", "en_US");

    // Twitter Card Tags — summary_large_image shows full branded card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:site", "@UJWALSINGH23");
    setMeta("name", "twitter:creator", "@UJWALSINGH23");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", resolvedImage);
    setMeta("name", "twitter:image:alt", "Ujwal Singh – Full-Stack Developer & Software Engineer");

    // Academic Citation Metadata (Google Scholar, Perplexity & AI Search)
    if (academicMeta) {
      setMeta("name", "citation_title", academicMeta.citationTitle);
      setMeta("name", "citation_author", academicMeta.citationAuthor);
      setMeta("name", "citation_publication_date", academicMeta.citationPublicationDate);
      setMeta("name", "citation_journal_title", academicMeta.citationJournalTitle);
      setMeta("name", "citation_doi", academicMeta.citationDoi);
      if (academicMeta.citationPublicUrl) {
        setMeta("name", "citation_public_url", academicMeta.citationPublicUrl);
      }
      setMeta("name", "DC.title", academicMeta.citationTitle);
      setMeta("name", "DC.creator", academicMeta.citationAuthor);
      setMeta("name", "DC.identifier", academicMeta.citationDoi);
      setMeta("name", "DC.date", academicMeta.citationPublicationDate.replace(/\//g, "-"));
    }

    // Update Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);

    // hreflang Alternate Tags — informs Google which language editions exist
    // The site uses client-side i18n so all locales resolve to the same URL
    HREFLANG_LOCALES.forEach(({ hreflang }) => {
      setLink("alternate", hreflang, fullUrl);
    });

    // humans.txt link tag for developer crawlers
    setLink("author", undefined, `${BASE_URL}/humans.txt`);

    // Schema.org Structured Data
    const effectiveJsonLd =
      jsonLd ||
      buildSchemaGraph({
        pageTitle: title,
        pageDescription: description,
        pagePath: cleanPath,
        breadcrumbs,
        extraNodes
      });

    let scriptEl = document.querySelector('script[data-page-seo]') as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.setAttribute("type", "application/ld+json");
      scriptEl.setAttribute("data-page-seo", "true");
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(effectiveJsonLd);

    return () => {
      // Optional cleanup on component unmount
    };
  }, [title, description, path, keywords, image, type, jsonLd, breadcrumbs, extraNodes, academicMeta]);

  return null;
};

export default PageSEO;
