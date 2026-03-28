import { Download, Code2, Palette, Brain, Compass, Zap, Globe, Coffee, CloudRain, Music, BookOpen, Heart, Rocket, Star } from "lucide-react";
import ujwalPhoto from "@/assets/ujwal-photo-3.jpg";
import PageSEO from "@/components/PageSEO";

const About = () => {
  const techStack = [
    { name: "React", color: "bg-blue-500/10 border-blue-500/20 text-blue-700 dark:text-blue-300" },
    { name: "TypeScript", color: "bg-sky-500/10 border-sky-500/20 text-sky-700 dark:text-sky-300" },
    { name: "Next.js", color: "bg-foreground/5 border-foreground/10 text-foreground/70" },
    { name: "Tailwind CSS", color: "bg-teal-500/10 border-teal-500/20 text-teal-700 dark:text-teal-300" },
    { name: "Node.js", color: "bg-green-500/10 border-green-500/20 text-green-700 dark:text-green-300" },
    { name: "Python", color: "bg-yellow-500/10 border-yellow-500/20 text-yellow-700 dark:text-yellow-300" },
    { name: "AI/ML", color: "bg-purple-500/10 border-purple-500/20 text-purple-700 dark:text-purple-300" },
    { name: "Supabase", color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-300" },
    { name: "Git", color: "bg-orange-500/10 border-orange-500/20 text-orange-700 dark:text-orange-300" },
    { name: "Figma", color: "bg-pink-500/10 border-pink-500/20 text-pink-700 dark:text-pink-300" },
  ];

  const stats = [
    { value: "10+", label: "Projects Built", icon: <Rocket className="w-4 h-4" /> },
    { value: "2+", label: "Years Coding", icon: <Code2 className="w-4 h-4" /> },
    { value: "∞", label: "Curiosity", icon: <Star className="w-4 h-4" /> },
    { value: "24/7", label: "Learning", icon: <Heart className="w-4 h-4" /> },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-5 sm:space-y-8 overflow-x-hidden">

      <PageSEO
        title="About Ujwal Singh | Developer, Creator & AI Enthusiast"
        description="Learn about Ujwal Singh — a software developer passionate about web development, AI, gaming, and travel."
        path="/about"
        keywords="Ujwal Singh about, developer bio, AI enthusiast, resume"
      />

      {/* Intro Section — mobile-first stacked layout */}
      <section className="glass-card p-4 sm:p-6 md:p-8 fade-in-up overflow-hidden">
        <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-4 sm:gap-8">
          <div className="shrink-0">
            <img
              src={ujwalPhoto}
              alt="Ujwal Singh"
              className="w-28 h-28 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-2xl object-cover object-top shadow-lg border-4 border-primary/20"
            />
          </div>
          <div className="min-w-0 w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2 sm:mb-3">
              Ujwal Singh
            </h1>
            <p className="text-muted-foreground text-sm sm:text-lg mb-3 sm:mb-4">
              Creator • Developer • AI Enthusiast
            </p>
            <p className="text-foreground/90 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
              Hi, I'm Ujwal Singh 👋 I specialize in building websites, apps,
              games, and AI-powered tools. I focus on creating efficient,
              user-friendly, and scalable solutions while exploring innovative
              technologies to deliver high-quality digital experiences.
            </p>
            <a
              href="/Ujwal_Resume.pdf"
              download="Ujwal_Resume.pdf"
              className="inline-flex items-center gap-2 glass-button bg-primary/20 border-primary/40 hover:bg-primary/30 px-5 py-2.5 sm:px-6 sm:py-3 text-sm"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 fade-in-up">
        {stats.map((stat, i) => (
          <div key={i} className="glass-card p-4 flex flex-col items-center text-center gap-1.5">
            <div className="text-primary">{stat.icon}</div>
            <span className="text-xl sm:text-2xl font-bold gradient-text">{stat.value}</span>
            <span className="text-[10px] sm:text-xs text-muted-foreground font-medium">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* GitHub Contributions */}
      <section className="glass-card p-4 sm:p-6 md:p-8 fade-in-up">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-lg sm:text-2xl font-bold">GitHub Activity</h2>
            <p className="text-[10px] sm:text-sm text-muted-foreground">My contribution graph</p>
          </div>
        </div>
        <div className="overflow-x-auto -mx-1 rounded-xl border border-border/50 bg-card/50 p-2 sm:p-4">
          <img
            src="https://ghchart.rshah.org/e8622b/ujwalx23"
            alt="Ujwal Singh's GitHub Contribution Chart"
            className="w-full min-w-[580px] h-auto"
          />
        </div>
        <div className="mt-3 flex justify-end">
          <a
            href="https://github.com/ujwalx23"
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
      <section className="glass-card p-4 sm:p-6 md:p-8 fade-in-up">
        <div className="flex items-center gap-3 mb-4 sm:mb-5">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
          </div>
          <h2 className="text-lg sm:text-2xl font-bold">Tech I Work With</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech.name}
              className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border ${tech.color} transition-all duration-300 cursor-default hover:scale-105`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </section>

      {/* What Drives Me */}
      <section className="glass-card p-4 sm:p-6 md:p-8 fade-in-up">
        <h2 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-5">What Drives Me</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { icon: <Code2 className="w-5 h-5" />, title: "Building Digital Products", desc: "Turning ideas into real experiences — websites, tools, and platforms.", color: "text-primary", bg: "bg-primary/5" },
            { icon: <Brain className="w-5 h-5" />, title: "Exploring AI", desc: "Experimenting with AI tools and building smarter systems.", color: "text-secondary", bg: "bg-secondary/5" },
            { icon: <Palette className="w-5 h-5" />, title: "UI & Creative Design", desc: "Crafting clean interfaces and smooth user experiences.", color: "text-accent", bg: "bg-accent/5" },
            { icon: <Compass className="w-5 h-5" />, title: "Curiosity & Exploration", desc: "Discovering new tech, ideas, and places.", color: "text-primary", bg: "bg-primary/5" },
          ].map((item, i) => (
            <div
              key={i}
              className={`group flex items-start gap-3 p-4 rounded-2xl ${item.bg} border border-border/50 hover:border-primary/30 transition-all duration-300`}
            >
              <div className={`${item.color} mt-0.5 shrink-0 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-sm sm:text-base mb-1">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Beyond the Code */}
      <section className="glass-card p-4 sm:p-6 md:p-8 fade-in-up">
        <h2 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-5">Beyond the Code</h2>
        <div className="space-y-3">
          {[
            { emoji: "⚽", title: "Playing Sports", desc: "Staying active and refreshing my mind through sports." },
            { emoji: "🧭", title: "Exploring Random Places", desc: "Small adventures that give me fresh ideas and new perspectives." },
            { emoji: "🌧", title: "Rainy Weather", desc: "Rain makes everything calm and sparks the most creative thoughts." },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-card/60 border border-border/50 hover:border-primary/20 transition-all duration-300"
            >
              <span className="text-xl sm:text-2xl shrink-0">{item.emoji}</span>
              <div className="min-w-0">
                <h3 className="font-semibold text-sm sm:text-base">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fun Facts */}
      <section className="glass-card p-4 sm:p-6 md:p-8 fade-in-up">
        <h2 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-5">Quick Facts</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: <Coffee className="w-5 h-5" />, text: "Code fueled by chai ☕" },
            { icon: <CloudRain className="w-5 h-5" />, text: "Rain = best coding weather" },
            { icon: <Music className="w-5 h-5" />, text: "Lo-fi while debugging" },
            { icon: <BookOpen className="w-5 h-5" />, text: "Always learning something new" },
          ].map((fact, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-2 p-3 sm:p-4 rounded-2xl bg-card/60 border border-border/50 hover:border-primary/20 transition-all"
            >
              <div className="text-primary">{fact.icon}</div>
              <span className="text-[11px] sm:text-sm text-muted-foreground font-medium">{fact.text}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
