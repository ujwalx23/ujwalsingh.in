import { Download, MapPin, GraduationCap, Briefcase, Code2, Gamepad2, Plane, CloudRain, Music, BookOpen, Coffee, Zap, Trophy, Heart } from "lucide-react";
import ujwalPhoto from "@/assets/ujwal-photo-3.jpg";
import PageSEO from "@/components/PageSEO";

const techStack = [
  { name: "React", color: "bg-primary/10 text-primary" },
  { name: "TypeScript", color: "bg-secondary/10 text-secondary" },
  { name: "Next.js", color: "bg-foreground/10 text-foreground" },
  { name: "Tailwind CSS", color: "bg-accent/10 text-accent" },
  { name: "Node.js", color: "bg-secondary/10 text-secondary" },
  { name: "Python", color: "bg-primary/10 text-primary" },
  { name: "AI/ML", color: "bg-accent/10 text-accent" },
  { name: "Supabase", color: "bg-secondary/10 text-secondary" },
  { name: "Git", color: "bg-foreground/10 text-foreground" },
  { name: "Figma", color: "bg-primary/10 text-primary" },
];

const timeline = [
  {
    icon: GraduationCap,
    title: "Started Coding Journey",
    description: "Began learning web development and building small projects.",
    period: "Early Days",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Built multiple web apps, explored AI tools and modern frameworks.",
    period: "Growth Phase",
  },
  {
    icon: Briefcase,
    title: "Building Real Products",
    description: "Created platforms like Wanderlust Adventures, MediSoul, CuteList & more.",
    period: "Current",
  },
  {
    icon: Zap,
    title: "What's Next",
    description: "Exploring AI-powered solutions, open source, and scalable products.",
    period: "Future",
  },
];

const funFacts = [
  { icon: CloudRain, text: "Rain, calm vibes & getting lost in my thoughts" },
  { icon: MapPin, text: "Exploring random places without fixed plans" },
  { icon: Gamepad2, text: "Gaming to disconnect and reset" },
  { icon: Music, text: "Music is always on — mood & focus both" },
  { icon: Mountain, text: "Love a bit of adventure and new experiences" },
  { icon: PenLine, text: "Writing thoughts and things I don’t say out loud" },
];

const About = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <PageSEO
        title="About Ujwal Singh | Developer, Creator & AI Enthusiast"
        description="Learn about Ujwal Singh — a software developer passionate about web development, AI, gaming, and travel."
        path="/about"
        keywords="Ujwal Singh about, developer bio, AI enthusiast, resume"
      />

      {/* Hero Intro */}
      <section className="glass-card p-6 md:p-8 fade-in-up">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="shrink-0 relative">
            <img
              src={ujwalPhoto}
              alt="Ujwal Singh"
              className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover object-top shadow-lg border-4 border-primary/20"
            />
            <div className="absolute -bottom-3 -right-3 glass-card px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-sm font-medium">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>India</span>
            </div>
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

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="/Ujwal_Resume.pdf"
                download="Ujwal_Resume.pdf"
                className="inline-flex items-center gap-2 glass-button bg-primary/20 border-primary/40 hover:bg-primary/30 px-5 py-2.5 text-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
              <a
                href="https://github.com/ujwalx23"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 glass-button px-5 py-2.5 text-sm"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Contributions */}
      <section className="glass-card p-6 md:p-8 fade-in-up stagger-1">
        <h2 className="text-2xl font-bold mb-2">GitHub Activity</h2>
        <p className="text-muted-foreground text-sm mb-5">My open-source contributions and coding activity</p>
        <div className="w-full overflow-x-auto rounded-xl">
          <img
            src="https://ghchart.rshah.org/e8552b/ujwalx23"
            alt="Ujwal Singh's GitHub contribution chart"
            className="w-full min-w-[700px] rounded-xl dark:invert dark:hue-rotate-180"
          />
        </div>
        <div className="flex items-center gap-6 mt-4 text-sm text-muted-foreground">
          <a
            href="https://github.com/ujwalx23"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <span>@ujwalx23</span>
          </a>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="glass-card p-6 md:p-8 fade-in-up stagger-2">
        <h2 className="text-2xl font-bold mb-2">Tech Stack</h2>
        <p className="text-muted-foreground text-sm mb-5">Technologies I work with regularly</p>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech.name}
              className={`px-4 py-2 rounded-xl text-sm font-medium border border-border/50 transition-all hover:scale-105 ${tech.color}`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="glass-card p-6 md:p-8 fade-in-up stagger-3">
        <h2 className="text-2xl font-bold mb-2">My Journey</h2>
        <p className="text-muted-foreground text-sm mb-6">How I got here and where I'm headed</p>
        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-primary/20" />
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4 relative">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center z-10">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 pb-2">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Grid */}
      <section className="glass-card p-6 md:p-8 fade-in-up stagger-4">
        <h2 className="text-2xl font-bold mb-2">What I Enjoy</h2>
        <p className="text-muted-foreground text-sm mb-5">Passions that drive me both in and out of code</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: Code2, title: "Building Digital Products", desc: "Turning ideas into real digital experiences — websites, tools, and experimental platforms." },
            { icon: Zap, title: "Exploring AI", desc: "Experimenting with AI tools and building systems that make technology more creative and useful." },
            { icon: Heart, title: "UI & Creative Design", desc: "Designing clean interfaces and smooth user experiences that feel delightful to use." },
            { icon: Trophy, title: "Problem Solving", desc: "Love tackling challenging problems on coding platforms and in real-world scenarios." },
          ].map((item) => (
            <div key={item.title} className="p-5 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition-all hover:bg-primary/10 group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground pl-11">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fun Facts */}
      <section className="glass-card p-6 md:p-8 fade-in-up stagger-5">
        <h2 className="text-2xl font-bold mb-2">Beyond the Code</h2>
        <p className="text-muted-foreground text-sm mb-5">A few things that make me, me</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {funFacts.map((fact, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition-all hover:bg-primary/10"
            >
              <fact.icon className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm text-foreground/90">{fact.text}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
