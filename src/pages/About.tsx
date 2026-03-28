import { MessageCircle, Download, Code2, Palette, Brain, Compass, Gamepad2, CloudRain, MapPin, Zap, Globe, Coffee, Music, BookOpen } from "lucide-react";
import ujwalPhoto from "@/assets/ujwal-photo-3.jpg";
import PageSEO from "@/components/PageSEO";

const About = () => {
  const techStack = [
    "React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js",
    "Python", "AI/ML", "Supabase", "Git", "Figma"
  ];

  const funFacts = [
    { icon: <Coffee className="w-5 h-5" />, text: "Code fueled by chai ☕" },
    { icon: <CloudRain className="w-5 h-5" />, text: "Rain = best coding weather" },
    { icon: <Music className="w-5 h-5" />, text: "Lo-fi while debugging" },
    { icon: <BookOpen className="w-5 h-5" />, text: "Always learning something new" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 sm:space-y-8">

      <PageSEO
        title="About Ujwal Singh | Developer, Creator & AI Enthusiast"
        description="Learn about Ujwal Singh — a software developer passionate about web development, AI, gaming, and travel."
        path="/about"
        keywords="Ujwal Singh about, developer bio, AI enthusiast, resume"
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
              Hi, I'm Ujwal Singh 👋 I specialize in building websites, apps,
              games, and AI-powered tools. I focus on creating efficient,
              user-friendly, and scalable solutions while exploring innovative
              technologies to deliver high-quality digital experiences.
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

      {/* GitHub Contributions */}
      <section className="glass-card p-5 sm:p-6 md:p-8 fade-in-up">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Code2 className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">GitHub Activity</h2>
            <p className="text-xs sm:text-sm text-muted-foreground">My open-source contribution graph</p>
          </div>
        </div>
        <div className="overflow-x-auto rounded-xl border border-border/50 bg-card/50 p-3 sm:p-4">
          <img
            src="https://ghchart.rshah.org/e8622b/UjjwalSingh-2"
            alt="Ujwal Singh's GitHub Contribution Chart"
            className="w-full min-w-[640px] h-auto"
          />
        </div>
        <div className="mt-3 flex justify-end">
          <a
            href="https://github.com/UjjwalSingh-2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary hover:underline"
          >
            <Globe className="w-3.5 h-3.5" />
            View GitHub Profile →
          </a>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="glass-card p-5 sm:p-6 md:p-8 fade-in-up">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
            <Zap className="w-5 h-5 text-secondary" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">Tech I Work With</h2>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-primary/5 border border-primary/15 text-foreground/80 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* What Drives Me — Redesigned as icon cards */}
      <section className="glass-card p-5 sm:p-6 md:p-8 fade-in-up">
        <h2 className="text-xl sm:text-2xl font-bold mb-5">What Drives Me</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {[
            { icon: <Code2 className="w-6 h-6" />, title: "Building Digital Products", desc: "Turning ideas into real experiences — websites, tools, and experimental platforms.", color: "text-primary" },
            { icon: <Brain className="w-6 h-6" />, title: "Exploring AI", desc: "Experimenting with AI tools and building systems that make tech more creative.", color: "text-secondary" },
            { icon: <Palette className="w-6 h-6" />, title: "UI & Creative Design", desc: "Crafting clean interfaces and smooth experiences that feel right.", color: "text-accent" },
            { icon: <Compass className="w-6 h-6" />, title: "Curiosity & Exploration", desc: "Discovering new technologies, ideas, and places that expand my perspective.", color: "text-primary" },
          ].map((item, i) => (
            <div
              key={i}
              className="group p-4 sm:p-5 rounded-2xl bg-card/60 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className={`${item.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-1.5">{item.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Beyond the Code — Horizontal scroll on mobile */}
      <section className="glass-card p-5 sm:p-6 md:p-8 fade-in-up">
        <h2 className="text-xl sm:text-2xl font-bold mb-5">Beyond the Code</h2>
        <div className="grid grid-cols-1 gap-3 sm:gap-4">
          {[
            { emoji: "⚽", title: "Playing Sports", desc: "Staying active and refreshing my mind through sports whenever I get the chance.", gradient: "from-primary/5 to-accent/5" },
            { emoji: "🧭", title: "Exploring Random Places", desc: "Small adventures and visiting new spots — exploring gives me fresh ideas.", gradient: "from-secondary/5 to-primary/5" },
            { emoji: "🌧", title: "Rainy Weather", desc: "Rain makes everything calm and often sparks the most creative thoughts.", gradient: "from-accent/5 to-secondary/5" },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r ${item.gradient} border border-border/50 hover:border-primary/20 transition-all duration-300`}
            >
              <span className="text-2xl sm:text-3xl mt-0.5 shrink-0">{item.emoji}</span>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fun Facts — Compact strip */}
      <section className="glass-card p-5 sm:p-6 md:p-8 fade-in-up">
        <h2 className="text-xl sm:text-2xl font-bold mb-5">Quick Facts</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {funFacts.map((fact, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl bg-card/60 border border-border/50 hover:border-primary/20 transition-all duration-300"
            >
              <div className="text-primary">{fact.icon}</div>
              <span className="text-xs sm:text-sm text-muted-foreground font-medium">{fact.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Chat with AI */}
      <section className="glass-card p-5 sm:p-6 md:p-8 fade-in-up">
        <div className="flex flex-col items-center text-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">Chat with Ujwal (AI)</h2>
          <p className="text-sm text-muted-foreground max-w-md">
            Talk to my AI twin — it answers like me! Ask about my work, interests, or anything else.
          </p>
          <a
            href="https://cdn.botpress.cloud/webchat/v3.5/shareable.html?configUrl=https://files.bpcontent.cloud/2025/12/12/12/20251212120356-KRFZ3H1Z.json"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass-button bg-primary/20 border-primary/40 hover:bg-primary/30 px-6 py-3 mt-1"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Start Chatting</span>
          </a>
        </div>
      </section>

    </div>
  );
};

export default About;
