import { useEffect } from "react";

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  jsonLd?: Record<string, unknown>;
}

const BASE_URL = "https://ujwalsingh.in";

const PageSEO = ({ title, description, path, keywords, jsonLd }: PageSEOProps) => {
  useEffect(() => {
    // Set title
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

    const fullUrl = `${BASE_URL}${path}`;

    setMeta("name", "description", description);
    if (keywords) setMeta("name", "keywords", keywords);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", fullUrl);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    // Update canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);

    // JSON-LD structured data
    let scriptEl = document.querySelector('script[data-page-seo]') as HTMLScriptElement | null;
    if (jsonLd) {
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.setAttribute("type", "application/ld+json");
        scriptEl.setAttribute("data-page-seo", "true");
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(jsonLd);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    return () => {
      document.title = "Ujwal Singh | Software Developer, Creator & AI Enthusiast";
      const existingScript = document.querySelector('script[data-page-seo]');
      if (existingScript) existingScript.remove();
    };
  }, [title, description, path, keywords, jsonLd]);

  return null;
};

export default PageSEO;
