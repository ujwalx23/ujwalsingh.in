import { MessageCircle, Download, ExternalLink } from "lucide-react";
import ujwalPhoto from "@/assets/ujwal-photo-3.jpg";
import PageSEO from "@/components/PageSEO";

const About = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">

      <PageSEO
        title="About Ujwal Singh | Developer, Creator & AI Enthusiast"
        description="Learn about Ujwal Singh — a software developer passionate about web development, AI, gaming, and travel."
        path="/about"
        keywords="Ujwal Singh about, developer bio, AI enthusiast, resume"
      />

      {/* Intro Section */}
      <section className="glass-card p-6 md:p-8 fade-in-up">
        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* Photo */}
          <div className="shrink-0">
            <img
              src={ujwalPhoto}
              alt="Ujwal Singh"
              className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover object-top shadow-lg border-4 border-primary/20"
            />
          </div>

          {/* Info */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-3">
              Ujwal Singh
            </h1>

            <p className="text-muted-foreground text-lg mb-4">
              Creator • Developer • AI Enthusiast
            </p>

            <p className="text-foreground/90 leading-relaxed mb-6">
              Hi, I'm Ujwal Singh 👋 I specialize in building websites, apps,
              games, and AI-powered tools. I focus on creating efficient,
              user-friendly, and scalable solutions while exploring innovative
              technologies to deliver high-quality digital experiences.
            </p>

            {/* Resume Button */}
            <a
              href="/Ujwal_Resume.pdf"
              download="Ujwal_Resume.pdf"
              className="inline-flex items-center gap-2 glass-button bg-primary/20 border-primary/40 hover:bg-primary/30 px-6 py-3"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>

          </div>
        </div>
      </section>


      {/* Interests Section */}
      <section className="glass-card p-6 md:p-8 fade-in-up">

        <h2 className="text-2xl font-bold mb-6">
          What I Enjoy Exploring
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div className="p-5 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition">
            <h3 className="font-semibold text-lg mb-2">
               Building Digital Products
            </h3>
            <p className="text-sm text-muted-foreground">
              I enjoy turning ideas into real digital experiences — from
              websites and tools to experimental platforms.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition">
            <h3 className="font-semibold text-lg mb-2">
               Exploring AI
            </h3>
            <p className="text-sm text-muted-foreground">
              I love experimenting with AI tools and building systems
              that make technology more useful and creative.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition">
            <h3 className="font-semibold text-lg mb-2">
               UI & Creative Web Design
            </h3>
            <p className="text-sm text-muted-foreground">
              Designing clean interfaces and smooth user experiences
              is something I genuinely enjoy.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition">
            <h3 className="font-semibold text-lg mb-2">
               Curiosity & Exploration
            </h3>
            <p className="text-sm text-muted-foreground">
              I enjoy discovering new technologies, ideas,
              and places that expand my perspective.
            </p>
          </div>

        </div>
      </section>


      {/* Beyond the Code */}
      <section className="glass-card p-6 md:p-8 fade-in-up">

        <h2 className="text-2xl font-bold mb-6">
          Beyond the Code
        </h2>

        <div className="space-y-4">

          <div className="p-5 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition">
            <h3 className="font-semibold text-lg mb-2">
              ⚽ Playing Sports
            </h3>
            <p className="text-sm text-muted-foreground">
              I enjoy playing sports whenever I get the chance.
              It helps me stay active and refresh my mind.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition">
            <h3 className="font-semibold text-lg mb-2">
              🧭 Exploring Random Places
            </h3>
            <p className="text-sm text-muted-foreground">
              I like going on small adventures and visiting random places.
              Exploring new environments often gives me fresh ideas.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition">
            <h3 className="font-semibold text-lg mb-2">
              🌧 Rainy Weather
            </h3>
            <p className="text-sm text-muted-foreground">
              Rain is my favorite weather. It makes everything feel calm
              and often sparks creative thoughts.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
