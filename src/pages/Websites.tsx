import { ExternalLink } from "lucide-react";
import PageSEO from "@/components/PageSEO";

const websites = [
  {
    name: "Wanderlust Adventures",
    description:
      "A travel platform dedicated to exploring the cultural heritage, landscapes, and adventures across India.",
    img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766827943351.png",
    url: "https://wanderlustadventures23.vercel.app/",
  },
  {
    name: "Delve Together",
    description:
      "A calm, collaborative space for understanding world events through live rooms and discussion, away from the noise of social media.",
    img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766828003355.png",
    url: "https://delvetogether.vercel.app",
  },
  {
    name: "CuteList",
    description:
      "A task management app designed to help users manage their daily responsibilities in a cute and organized way.",
    img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766827964162.png",
    url: "https://cute23.vercel.app/",
  },
  {
    name: "Newsnap",
    description:
      "A credibility-driven, short-form global news platform designed to provide trustworthy information.",
    img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766828023996.png",
    url: "https://newsnapglobal.vercel.app",
  },
  {
    name: "LoopPlay",
    description:
      "A personal arcade featuring 23 addictive, lightweight mini-games designed for quick bursts of fun and replayability.",
    img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766828043282.png",
    url: "https://loopplay23.vercel.app/",
  },
  {
    name: "MediSoul",
    description:
      "(Under Development) An AI-powered personal medical companion that provides instant health insights, symptom checking, and track records.",
    img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766827917348.png",
    url: "https://medisoul23.vercel.app/",
  },
];

const Websites = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <PageSEO
        title="Projects by Ujwal Singh | Web Apps & Digital Products"
        description="Explore websites and projects built by Ujwal Singh including Wanderlust Adventures, CuteList, Newsnap, LoopPlay, and more."
        path="/websites"
        keywords="Ujwal Singh projects, web apps, Wanderlust Adventures, CuteList, Newsnap"
      />
      <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-8 fade-in-up">
        My Websites
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {websites.map((site, index) => (
          <a
            key={site.name}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card overflow-hidden group hover:scale-[1.02] transition-transform fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-full overflow-hidden bg-muted">
              <img
                src={site.img}
                alt={site.name}
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-xl mb-2 flex items-center gap-2">
                {site.name}
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </h3>
              <p className="text-muted-foreground leading-relaxed">{site.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Websites;