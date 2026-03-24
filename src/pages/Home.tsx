import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";

// Icons for social links
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const OrcidIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-1.847-1.238-3.722-3.806-3.722h-2.513z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const socialLinks = [
  { name: "LinkedIn", icon: LinkedInIcon, url: "https://www.linkedin.com/in/ujwalsingh23/" },
  { name: "GitHub", icon: GitHubIcon, url: "https://github.com/ujwalx23" },
  { name: "Pinterest", icon: PinterestIcon, url: "https://in.pinterest.com/UjwalSingh23/" },
  { name: "Instagram", icon: InstagramIcon, url: "https://www.instagram.com/ujwalx23/" },
  { name: "ORCID", icon: OrcidIcon, url: "https://orcid.org/0009-0004-0490-010X" },
  { name: "X (Twitter)", icon: XIcon, url: "https://x.com/UJWALSINGH23" },
];

const projects = [
  {
    name: "Wanderlust Adventures",
    description: "A travel platform for exploring India's cultural heritage and landscapes.",
    img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766827943351.png",
    url: "https://wanderlustadventures23.vercel.app/",
  },
  {
    name: "CuteList",
    description: "A task management app designed to help users manage daily tasks in a cute way.",
    img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766827964162.png",
    url: "https://cute23.vercel.app/",
  },
  {
    name: "MediSoul",
    description: "An AI-powered personal medical companion for instant health insights and symptom checking.",
    img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766827917348.png",
    url: "https://medisoul23.vercel.app/",
  },
];

const thoughts = [
  { id: 1, quote: "Don't wait for the perfect moment. Take the moment and make it perfect.", author: "Ujwal Singh" },
  { id: 2, quote: "The only limit to your impact is your imagination and commitment.", author: "Ujwal Singh" },
  { id: 3, quote: "Build things that matter. The rest is just noise.", author: "Ujwal Singh" },
];

const Home = () => {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-12">
      <PageSEO
        title="Ujwal Singh | Software Developer, Creator & AI Enthusiast"
        description="Official website of Ujwal Singh. Explore projects, connect on social media, and discover work in web development and artificial intelligence."
        path="/"
        keywords="Ujwal Singh, software developer, AI enthusiast, web developer, portfolio"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ujwal Singh",
          url: "https://ujwalsingh.in",
          jobTitle: "Software Developer",
          sameAs: [
            "https://www.linkedin.com/in/ujwalsingh23/",
            "https://github.com/ujwalx23",
            "https://www.instagram.com/ujwalx23/",
            "https://x.com/UJWALSINGH23",
            "https://orcid.org/0009-0004-0490-010X",
          ],
        }}
      />
      <section className="text-center py-8 md:py-12 fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-4">
          Ujwal Singh
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl font-medium">
          Creator • Developer • AI Enthusiast
        </p>
      </section>

      {/* Social Links Section */}
      <section className="fade-in-up">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Connect With Me</h2>
          <Link to="/social" className="flex items-center gap-1 text-primary hover:underline text-sm">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-hover flex items-center justify-center gap-3 p-4 min-h-[60px]"
            >
              <link.icon />
              <span className="font-medium">{link.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="fade-in-up">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
          <Link to="/websites" className="flex items-center gap-1 text-primary hover:underline text-sm">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card overflow-hidden group hover:scale-[1.02] transition-transform"
            >
              <div className="w-full overflow-hidden bg-muted">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  {project.name}
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Thoughts Section */}
      <section className="fade-in-up">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Thoughts</h2>
          <Link to="/thoughts" className="flex items-center gap-1 text-primary hover:underline text-sm">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {thoughts.map((thought) => (
            <div key={thought.id} className="glass-card p-6">
              <blockquote className="text-lg italic mb-3">"{thought.quote}"</blockquote>
              <p className="text-sm text-muted-foreground">— {thought.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-xl mx-auto">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;