import { Globe, Sparkles, Play, Eye, Heart } from "lucide-react";
import ujwalPhoto from "@/assets/ujwal-photo.jpg";

const websites = [
  { 
    name: "Wanderlust Adventures", 
    icon: Globe, 
    url: "https://cute23.vercel.app",
    image: ujwalPhoto
  },
  { 
    name: "CuteList", 
    icon: Heart, 
    url: "https://cute23.vercel.app",
    image: ujwalPhoto
  },
  { 
    name: "LoopPlay", 
    icon: Play, 
    url: "https://cute23.vercel.app",
    image: ujwalPhoto
  },
  { 
    name: "Dream Visualizer", 
    icon: Eye, 
    url: "https://cute23.vercel.app",
    image: ujwalPhoto
  },
  { 
    name: "MediSoul", 
    icon: Sparkles, 
    url: "https://cute23.vercel.app",
    image: ujwalPhoto
  },
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
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-primary/20 flex-shrink-0">
              <img 
                src={site.image} 
                alt={site.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-medium flex-1 text-left">{site.name}</span>
            <site.icon className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default WebsitesSection;
