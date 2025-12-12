import { Github, Code, Trophy, BookOpen } from "lucide-react";

const platforms = [
  { name: "GitHub", icon: Github, url: "https://cute23.vercel.app" },
  { name: "LeetCode", icon: Code, url: "https://cute23.vercel.app" },
  { name: "Unstop", icon: Trophy, url: "https://cute23.vercel.app" },
  { name: "TakeUforward", icon: BookOpen, url: "https://cute23.vercel.app" },
];

const CodingPlatformsSection = () => {
  return (
    <section className="w-full fade-in-up stagger-4">
      <h2 className="section-heading text-center">Profiles & Coding Platforms</h2>
      <div className="grid grid-cols-2 gap-3">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card-hover flex flex-col items-center justify-center gap-2 p-4 text-center"
          >
            <platform.icon className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium">{platform.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CodingPlatformsSection;
