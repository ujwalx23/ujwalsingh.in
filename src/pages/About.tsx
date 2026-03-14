import { Download } from "lucide-react";
import ujwalPhoto from "@/assets/ujwal-photo-3.jpg";
import PageSEO from "@/components/PageSEO";

const About = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-10">

      <PageSEO
        title="About Ujwal Singh | Developer, Creator & AI Enthusiast"
        description="Learn about Ujwal Singh — a software developer passionate about web development, AI, gaming, and travel."
        path="/about"
        keywords="Ujwal Singh developer portfolio"
      />

      {/* Intro Section */}
      <section className="glass-card p-6 md:p-8 fade-in-up">
        <div className="flex flex-col md:flex-row items-center gap-8">

          <div className="shrink-0">
            <img
              src={ujwalPhoto}
              alt="Ujwal Singh"
              className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover object-top shadow-lg border-4 border-primary/20"
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-3">
              Ujwal Singh
            </h1>

            <p className="text-muted-foreground text-lg mb-4">
              Creator • Developer • AI Enthusiast
            </p>

            <p className="text-foreground/90 leading-relaxed mb-6">
              Hi, I'm Ujwal Singh 👋 I enjoy building websites, apps, games,
              and AI-powered tools. I like turning ideas into real digital
              experiences and exploring new technologies along the way.
            </p>

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
        <h2 className="text-2xl font-bold mb-6">Interests</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="p-5 rounded-xl border border-primary/10 hover:border-primary/40 transition">
            <h3 className="font-semibold text-lg mb-2"> Building Products</h3>
            <p className="text-sm text-muted-foreground">
              I enjoy creating websites, tools, and digital experiences
              that solve real problems.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-primary/10 hover:border-primary/40 transition">
            <h3 className="font-semibold text-lg mb-2"> AI Exploration</h3>
            <p className="text-sm text-muted-foreground">
              I like experimenting with AI tools and exploring how
              technology can assist humans in creative ways.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-primary/10 hover:border-primary/40 transition">
            <h3 className="font-semibold text-lg mb-2"> Games & Creativity</h3>
            <p className="text-sm text-muted-foreground">
              Gaming and building small fun projects inspire my
              creativity and problem-solving.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-primary/10 hover:border-primary/40 transition">
            <h3 className="font-semibold text-lg mb-2"> Exploration</h3>
            <p className="text-sm text-muted-foreground">
              I enjoy discovering new places, ideas, and perspectives
              that broaden how I think and create.
            </p>
          </div>

        </div>
      </section>

      {/* Beyond the Code */}
      <section className="glass-card p-6 md:p-10 fade-in-up text-center">
        <h2 className="text-2xl font-bold mb-6">Beyond the Code</h2>

        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          When I'm not coding, you'll probably find me playing sports,
          going on small adventures, or randomly exploring new places.
        </p>

        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-4">
          I also love rainy weather — there's something about rain
          that makes everything feel calmer and more creative.
        </p>

        <p className="text-sm text-muted-foreground mt-6 italic">
          Sports • Adventure • Random Exploration • Rain Lover
        </p>
      </section>

      {/* Ending Line */}
      <section className="text-center py-6 fade-in-up">
        <p className="text-muted-foreground italic">
          Still exploring. Still building. Still curious.
        </p>
      </section>

    </div>
  );
};

export default About;
