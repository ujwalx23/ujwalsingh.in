/**
 * SEO & Entity Audit Script for ujwalsingh.in
 * Validates routes, sitemap.xml, robots.txt, canonical consistency, and Schema.org graphs.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

console.log("=========================================");
console.log("🔍 Running SEO & Entity Quality Audit for ujwalsingh.in");
console.log("=========================================\n");

let errors = 0;
let warnings = 0;

// 1. Audit public/sitemap.xml
const sitemapPath = path.join(rootDir, "public", "sitemap.xml");
if (!fs.existsSync(sitemapPath)) {
  console.error("❌ ERROR: public/sitemap.xml is missing!");
  errors++;
} else {
  const sitemapContent = fs.readFileSync(sitemapPath, "utf-8");
  const locMatches = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  console.log(`✅ Sitemap exists with ${locMatches.length} URLs declared.`);

  // Check required canonical routes
  const requiredRoutes = [
    "https://ujwalsingh.in/",
    "https://ujwalsingh.in/about",
    "https://ujwalsingh.in/projects",
    "https://ujwalsingh.in/research",
    "https://ujwalsingh.in/certifications",
    "https://ujwalsingh.in/skills",
    "https://ujwalsingh.in/experience",
    "https://ujwalsingh.in/blog",
    "https://ujwalsingh.in/resume",
    "https://ujwalsingh.in/contact",
    "https://ujwalsingh.in/social"
  ];

  requiredRoutes.forEach(route => {
    if (!locMatches.includes(route)) {
      console.warn(`⚠️ WARNING: Required route missing from sitemap: ${route}`);
      warnings++;
    } else {
      console.log(`  ✓ Sitemap contains: ${route}`);
    }
  });

  // Check for duplicate URLs
  const uniqueUrls = new Set(locMatches);
  if (uniqueUrls.size !== locMatches.length) {
    console.error("❌ ERROR: Duplicate URLs found in sitemap.xml!");
    errors++;
  }
}

// 2. Audit public/robots.txt
console.log("\n-----------------------------------------");
console.log("🤖 Auditing public/robots.txt");
const robotsPath = path.join(rootDir, "public", "robots.txt");
if (!fs.existsSync(robotsPath)) {
  console.error("❌ ERROR: public/robots.txt is missing!");
  errors++;
} else {
  const robotsContent = fs.readFileSync(robotsPath, "utf-8");
  const requiredBots = ["Googlebot", "Bingbot", "OAI-SearchBot", "PerplexityBot", "ClaudeBot"];
  requiredBots.forEach(bot => {
    if (!robotsContent.includes(`User-agent: ${bot}`)) {
      console.warn(`⚠️ WARNING: Explicit allowance for ${bot} missing in robots.txt`);
      warnings++;
    } else {
      console.log(`  ✓ Explicit crawler directive verified for: ${bot}`);
    }
  });

  if (!robotsContent.includes("Sitemap: https://ujwalsingh.in/sitemap.xml")) {
    console.error("❌ ERROR: Sitemap directive missing in robots.txt!");
    errors++;
  } else {
    console.log("  ✓ Sitemap directive properly declared.");
  }
}

// 3. Audit index.html meta and schema
console.log("\n-----------------------------------------");
console.log("📄 Auditing index.html");
const indexPath = path.join(rootDir, "index.html");
if (!fs.existsSync(indexPath)) {
  console.error("❌ ERROR: index.html is missing!");
  errors++;
} else {
  const indexContent = fs.readFileSync(indexPath, "utf-8");

  // Check title
  if (!indexContent.includes("<title>")) {
    console.error("❌ ERROR: <title> tag missing in index.html!");
    errors++;
  } else {
    console.log("  ✓ Title tag present.");
  }

  // Check description
  if (!indexContent.includes('name="description"')) {
    console.error("❌ ERROR: Description meta tag missing in index.html!");
    errors++;
  } else {
    console.log("  ✓ Description meta tag present.");
  }

  // Check canonical
  if (!indexContent.includes('rel="canonical"')) {
    console.error("❌ ERROR: Canonical link missing in index.html!");
    errors++;
  } else {
    console.log("  ✓ Canonical link present.");
  }

  // Check noscript fallback for AI crawlers
  if (!indexContent.includes("<noscript>")) {
    console.warn("⚠️ WARNING: <noscript> semantic fallback missing in index.html!");
    warnings++;
  } else {
    console.log("  ✓ Accessible <noscript> crawler fallback present.");
  }

  // Check Schema.org
  if (!indexContent.includes('"@type": "Person"') || !indexContent.includes('"https://ujwalsingh.in/#person"')) {
    console.error("❌ ERROR: Person entity @id missing in index.html JSON-LD!");
    errors++;
  } else {
    console.log("  ✓ Schema.org Person entity @id verified.");
  }
}

// 4. Audit Route Files
console.log("\n-----------------------------------------");
console.log("🛣️ Auditing Route Components");
const expectedPages = [
  "Home.tsx",
  "About.tsx",
  "Projects.tsx",
  "Websites.tsx",
  "Research.tsx",
  "Certifications.tsx",
  "Skills.tsx",
  "Experience.tsx",
  "Blog.tsx",
  "Resume.tsx",
  "Contact.tsx",
  "Social.tsx",
  "Thoughts.tsx"
];

expectedPages.forEach(file => {
  const filePath = path.join(rootDir, "src", "pages", file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ ERROR: Route component missing: src/pages/${file}`);
    errors++;
  } else {
    console.log(`  ✓ Route component verified: src/pages/${file}`);
  }
});

// Summary
console.log("\n=========================================");
console.log(`🏁 Audit Finished with ${errors} error(s) and ${warnings} warning(s).`);
console.log("=========================================\n");

if (errors > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
