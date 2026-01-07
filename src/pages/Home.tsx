import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const socialLinks = [
  { name: "LinkedIn", icon: LinkedInIcon, url: "https://www.linkedin.com/in/ujwalsingh23/" },
  { name: "X (Twitter)", icon: XIcon, url: "https://x.com/UJWALSINGH23" },
  { name: "Discord", icon: DiscordIcon, url: "https://discord.com/users/1243952128272371764" },
  { name: "Instagram", icon: InstagramIcon, url: "https://www.instagram.com/ujwalx23/" },
  { name: "YouTube", icon: YouTubeIcon, url: "https://www.youtube.com/channel/UCbtH84Ir66Tkc--d7eG5p8g" },
  { name: "GitHub", icon: GitHubIcon, url: "https://github.com/ujwalx23" },
];

const projects = [
  {
    name: "Wanderlust Adventures",
    description: "A travel platform for exploring India's cultural heritage and landscapes.",
    img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766827943351.png",
    url: "https://wanderlustadventures23.vercel.app/",
  },
  {
    name: "Delve Together",
    description: "A collaborative space for understanding world events through live discussions.",
    img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766828003355.png",
    url: "https://delvetogether.vercel.app",
  },
  {
    name: "LoopPlay",
    description: "A personal arcade featuring 23 addictive, lightweight mini-games.",
    img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766828043282.png",
    url: "https://loopplay23.vercel.app/",
  },
];

const thoughts = [
  { id: 1, quote: "Build things that matter, not just things that work.", author: "Ujwal Singh" },
  { id: 2, quote: "Every line of code is a step towards solving someone's problem.", author: "Ujwal Singh" },
  { id: 3, quote: "Consistency beats intensity. Show up every day.", author: "Ujwal Singh" },
];

const blogs = [
  {
    id: 1,
    title: "Getting Started with AI Development",
    excerpt: "My journey into AI-powered applications and what I learned along the way.",
    date: "Dec 2024",
  },
  {
    id: 2,
    title: "Building Scalable Web Apps",
    excerpt: "Best practices for creating efficient and maintainable web applications.",
    date: "Nov 2024",
  },
  {
    id: 3,
    title: "The Power of Consistency",
    excerpt: "How showing up daily transformed my development skills and mindset.",
    date: "Oct 2024",
  },
];

const Home = () => {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="text-center py-8 md:py-12 fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-4">
          Ujwal Singh
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl font-medium">
          Creator • Developer • AI Enthusiast
        </p>
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
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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

      {/* Blogs Section */}
      <section className="fade-in-up">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Latest Blogs</h2>
          <Link to="/blogs" className="flex items-center gap-1 text-primary hover:underline text-sm">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <Link key={blog.id} to="/blogs" className="glass-card-hover p-6 block">
              <span className="text-xs text-muted-foreground">{blog.date}</span>
              <h3 className="font-semibold text-lg mt-1 mb-2">{blog.title}</h3>
              <p className="text-sm text-muted-foreground">{blog.excerpt}</p>
            </Link>
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
