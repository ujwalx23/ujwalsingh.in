import React from "react";

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
    name: "MediSoul (Under Development)",
    description:
      "An AI-powered personal medical companion providing instant health insights and symptom tracking.",
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {websites.map((site) => (
          <a
            key={site.name}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl overflow-hidden transition-transform hover:scale-[1.02]"
          >
            {/* Image */}
            <img
              src={site.img}
              alt={site.name}
              className="w-full h-40 object-cover"
            />

            {/* Text */}
            <div className="p-3 flex flex-col gap-1">
              <h3 className="font-semibold text-sm sm:text-base">
                {site.name}
              </h3>

              <p className="text-xs sm:text-sm opacity-80 leading-snug">
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
