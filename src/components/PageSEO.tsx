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
const DEFAULT_IMAGE = "https://ujwalsingh.in/images/pwa-icon-512.png";

const PageSEO = ({
  title,
  description,
  path,
  keywords,
  image = DEFAULT_IMAGE,
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

    // Clean path ensuring leading slash
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    const fullUrl = `${BASE_URL}${cleanPath === "/" ? "" : cleanPath}`;

    // Standard SEO Tags
    setMeta("name", "description", description);
    setMeta("name", "author", "Ujwal Singh");
    if (keywords) setMeta("name", "keywords", keywords);

    // Open Graph Tags
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", fullUrl);
    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", "Ujwal Singh");
    setMeta("property", "og:image", image.startsWith("http") ? image : `${BASE_URL}${image}`);

    // Twitter Card Tags
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:site", "@UJWALSINGH23");
    setMeta("name", "twitter:creator", "@UJWALSINGH23");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image.startsWith("http") ? image : `${BASE_URL}${image}`);

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

