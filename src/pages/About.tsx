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
    <div className="mx-auto w-full max-w-full space-y-5 overflow-x-hidden sm:space-y-8 md:max-w-4xl">

      <PageSEO
        title="About Ujwal Singh | Developer, Creator & AI Enthusiast"
        description="Learn about Ujwal Singh — a software developer passionate about web development, AI, gaming, and travel."
        path="/about"
        keywords="Ujwal Singh about, developer bio, AI enthusiast, resume"
      />

      {/* Intro Section — mobile-first stacked layout */}
      <section className="glass-card fade-in-up w-full max-w-full overflow-hidden px-4 py-5 sm:px-6 sm:py-6 md:p-8">
        <div className="flex w-full min-w-0 flex-col items-center gap-4 text-center md:flex-row md:items-center md:text-left sm:gap-8">
          <div className="shrink-0">
            <img
              src={ujwalPhoto}
              alt="Ujwal Singh"
              className="h-28 w-28 rounded-2xl border-4 border-primary/20 object-cover object-top shadow-lg sm:h-44 sm:w-44 md:h-56 md:w-56"
            />
          </div>
          <div className="w-full min-w-0">
            <h1 className="mb-2 break-words text-2xl font-bold gradient-text sm:mb-3 sm:text-3xl md:text-4xl">
              Ujwal Singh
            </h1>
            <p className="mb-3 break-words text-sm text-muted-foreground sm:mb-4 sm:text-lg">
              Creator • Developer • AI Enthusiast
            </p>
            <p className="mb-4 break-words text-sm leading-relaxed text-foreground/90 sm:mb-6 sm:text-base">
              Hi, I'm Ujwal Singh 👋 I specialize in building websites, apps,
              games, and AI-powered tools. I focus on creating efficient,
              user-friendly, and scalable solutions while exploring innovative
              technologies to deliver high-quality digital experiences.
            </p>
            <a
              href="/Ujwal_Resume.pdf"
              download="Ujwal_Resume.pdf"
              className="inline-flex w-full max-w-full items-center justify-center gap-2 rounded-2xl border border-primary/40 bg-primary/20 px-4 py-2.5 text-sm glass-button hover:bg-primary/30 sm:w-auto sm:px-6 sm:py-3"
            >
              <Download className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
              <span className="truncate">Download Resume</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid w-full grid-cols-1 gap-3 fade-in-up sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={i} className="glass-card flex w-full min-w-0 flex-col items-center gap-1.5 p-4 text-center">
            <div className="text-primary">{stat.icon}</div>
            <span className="text-xl font-bold gradient-text sm:text-2xl">{stat.value}</span>
            <span className="text-[10px] font-medium text-muted-foreground sm:text-xs">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* GitHub Contributions */}
      <section className="glass-card fade-in-up w-full max-w-full overflow-hidden px-4 py-4 sm:px-6 sm:py-6 md:p-8">
        <div className="mb-4 flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 sm:h-10 sm:w-10">
            <Code2 className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
          </div>
          <div className="min-w-0">
            <h2 className="break-words text-lg font-bold sm:text-2xl">GitHub Activity</h2>
            <p className="text-[10px] text-muted-foreground sm:text-sm">My contribution graph</p>
          </div>
        </div>
        <div className="w-full max-w-full overflow-hidden rounded-xl border border-border/50 bg-card/50 p-2 sm:p-4">
          <img
            src="https://ghchart.rshah.org/e8622b/ujwalx23"
            alt="Ujwal Singh's GitHub Contribution Chart"
            className="block h-auto w-full max-w-full"
            loading="lazy"
          />
        </div>
        <div className="mt-3 flex justify-start sm:justify-end">
          <a
            href="https://github.com/ujwalx23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-full items-center gap-1.5 break-all text-xs text-primary hover:underline sm:text-sm"
          >
            <Globe className="h-3.5 w-3.5 shrink-0" />
            View GitHub Profile →
          </a>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="glass-card fade-in-up w-full max-w-full overflow-hidden px-4 py-4 sm:px-6 sm:py-6 md:p-8">
        <div className="mb-4 flex min-w-0 items-center gap-3 sm:mb-5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-secondary/20 bg-secondary/10 sm:h-10 sm:w-10">
            <Zap className="h-4 w-4 text-secondary sm:h-5 sm:w-5" />
          </div>
          <h2 className="break-words text-lg font-bold sm:text-2xl">Tech I Work With</h2>
        </div>
        <div className="flex w-full max-w-full flex-wrap gap-2 overflow-hidden">
          {techStack.map((tech) => (
            <span
              key={tech.name}
              className={`max-w-full break-words rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-300 sm:text-sm ${tech.color}`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </section>

      {/* What Drives Me */}
      <section className="glass-card fade-in-up w-full max-w-full overflow-hidden px-4 py-4 sm:px-6 sm:py-6 md:p-8">
        <h2 className="mb-4 text-lg font-bold sm:mb-5 sm:text-2xl">What Drives Me</h2>
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
          {[
            { icon: <Code2 className="h-5 w-5" />, title: "Building Digital Products", desc: "Turning ideas into real experiences — websites, tools, and platforms.", color: "text-primary", bg: "bg-primary/5" },
            { icon: <Brain className="h-5 w-5" />, title: "Exploring AI", desc: "Experimenting with AI tools and building smarter systems.", color: "text-secondary", bg: "bg-secondary/5" },
            { icon: <Palette className="h-5 w-5" />, title: "UI & Creative Design", desc: "Crafting clean interfaces and smooth user experiences.", color: "text-accent", bg: "bg-accent/5" },
            { icon: <Compass className="h-5 w-5" />, title: "Curiosity & Exploration", desc: "Discovering new tech, ideas, and places.", color: "text-primary", bg: "bg-primary/5" },
          ].map((item, i) => (
            <div
              key={i}
              className={`group flex w-full min-w-0 items-start gap-3 rounded-2xl border border-border/50 p-4 transition-all duration-300 hover:border-primary/30 ${item.bg}`}
            >
              <div className={`${item.color} mt-0.5 shrink-0 transition-transform group-hover:scale-110`}>
                {item.icon}
              </div>
              <div className="min-w-0">
                <h3 className="mb-1 break-words text-sm font-semibold sm:text-base">{item.title}</h3>
                <p className="break-words text-xs leading-relaxed text-muted-foreground sm:text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Beyond the Code */}
      <section className="glass-card fade-in-up w-full max-w-full overflow-hidden px-4 py-4 sm:px-6 sm:py-6 md:p-8">
        <h2 className="mb-4 text-lg font-bold sm:mb-5 sm:text-2xl">Beyond the Code</h2>
        <div className="space-y-3">
          {[
            { emoji: "⚽", title: "Playing Sports", desc: "Staying active and refreshing my mind through sports." },
            { emoji: "🧭", title: "Exploring Random Places", desc: "Small adventures that give me fresh ideas and new perspectives." },
            { emoji: "🌧", title: "Rainy Weather", desc: "Rain makes everything calm and sparks the most creative thoughts." },
          ].map((item, i) => (
            <div
              key={i}
              className="flex w-full min-w-0 items-center gap-3 rounded-2xl border border-border/50 bg-card/60 p-3 transition-all duration-300 hover:border-primary/20 sm:gap-4 sm:p-4"
            >
              <span className="shrink-0 text-xl sm:text-2xl">{item.emoji}</span>
              <div className="min-w-0">
                <h3 className="break-words text-sm font-semibold sm:text-base">{item.title}</h3>
                <p className="break-words text-xs text-muted-foreground sm:text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fun Facts */}
      <section className="glass-card fade-in-up w-full max-w-full overflow-hidden px-4 py-4 sm:px-6 sm:py-6 md:p-8">
        <h2 className="mb-4 text-lg font-bold sm:mb-5 sm:text-2xl">Quick Facts</h2>
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            { icon: <Coffee className="h-5 w-5" />, text: "Code fueled by chai ☕" },
            { icon: <CloudRain className="h-5 w-5" />, text: "Rain = best coding weather" },
            { icon: <Music className="h-5 w-5" />, text: "Lo-fi while debugging" },
            { icon: <BookOpen className="h-5 w-5" />, text: "Always learning something new" },
          ].map((fact, i) => (
            <div
              key={i}
              className="flex w-full min-w-0 flex-col items-center gap-2 rounded-2xl border border-border/50 bg-card/60 p-3 text-center transition-all hover:border-primary/20 sm:p-4"
            >
              <div className="text-primary">{fact.icon}</div>
              <span className="break-words text-[11px] font-medium text-muted-foreground sm:text-sm">{fact.text}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
