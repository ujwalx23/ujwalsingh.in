import React from "react";

const websites = [
  {
    name: "Wanderlust Adventures",
    description:
      "A travel platform dedicated to exploring India’s cultural heritage, landscapes, and hidden adventures. Includes destination guides, interactive experiences, and inspiration for curious travelers.",
    img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766827943351.png",
    url: "https://wanderlustadventures23.vercel.app/",
  },
  {
    name: "Delve Together",
    description:
      "A calm, collaborative space to understand world events through live rooms and thoughtful discussion. Designed for meaningful conversations without the noise and chaos of social media.",
    img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766828003355.png",
    url: "https://delvetogether.vercel.app",
  },
  {
    name: "CuteList",
    description:
      "A cute and organized task management app that helps users plan daily responsibilities, stay consistent, and feel motivated through a simple and friendly interface.",
    img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766827964162.png",
    url: "https://cute23.vercel.app/",
  },
  {
    name: "Newsnap",
    description:
      "A credibility-driven, short-form global news platform focused on verified information, quick reading, and clarity—helping users stay informed without misinformation overload.",
    img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766828023996.png",
    url: "https://newsnapglobal.vercel.app",
  },
  {
    name: "LoopPlay",
    description:
      "A personal arcade featuring 23 lightweight and addictive mini-games, built for quick fun, instant replayability, and stress-free entertainment across devices.",
    img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766828043282.png",
    url: "https://loopplay23.vercel.app/",
  },
  {
    name: "MediSoul",
    description:
      "An AI-powered personal medical companion offering symptom insights, health tracking, and supportive guidance to help users better understand their well-being. (Under Development)",
    img: "https://bpglrwgwxuwbskvrpqhc.supabase.co/storage/v1/object/public/memories/a1829453-e745-4ef0-897a-1840fd48913b/1766827917348.png",
    url: "https://medisoul23.vercel.app/",
  },
];

const WebsitesSection = () => {
  return (
    <section className="w-full fade-in-up stagger-3">
      <h2 className="section-heading text-center mb-6">
        My Websites
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {websites.map((site) => (
          <a
            key={site.name}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl overflow-hidden transition-transform hover:scale-[1.03]"
          >
            {/* Image */}
            <img
              src={site.img}
              alt={site.name}
              className="w-full h-44 sm:h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-semibold text-base sm:text-lg">
                {site.name}
              </h3>

              <p className="text-sm sm:text-base opacity-80 leading-relaxed">
                {site.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default WebsitesSection;
