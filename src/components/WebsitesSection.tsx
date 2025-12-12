import { Globe, Sparkles, Play, Eye, Heart } from "lucide-react";

const websites = [
  { name: "Wanderlust Adventures", icon: Globe, url: "https://cute23.vercel.app" },
  { name: "CuteList", icon: Heart, url: "https://cute23.vercel.app" },
  { name: "LoopPlay", icon: Play, url: "https://cute23.vercel.app" },
  { name: "Dream Visualizer", icon: Eye, url: "https://cute23.vercel.app" },
  { name: "MediSoul", icon: Sparkles, url: "https://cute23.vercel.app" },
];

const WebsitesSection = () => {
  return (
    <section className="w-full fade-in-up stagger-3">
      <h2 className="section-heading text-center">My Websites</h2>
      <div className="flex flex-col gap-3">
        {websites.map((site) => (
          <a
            key={site.name}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button group"
          >
            <site.icon className="w-5 h-5 text-primary" />
            <span className="font-medium flex-1 text-left">{site.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default WebsitesSection;
