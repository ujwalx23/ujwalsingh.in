import React from "react";

const websites = [
  {
    name: "Wanderlust Adventures",
    description:
      "A travel platform dedicated to exploring the cultural heritage, landscapes, and adventures across India.",
    img: "https://www.dpmanual.com/wp-content/uploads/2017/07/How-Do-I-Feel-Real-Again.jpg",
    url: "https://wanderlustadventures23.vercel.app/",
  },
  {
    name: "Delve Together",
    description:
      "A calm, collaborative space for understanding world events through live rooms and discussion, away from the noise of social media.",
    img: "https://www.dpmanual.com/wp-content/uploads/2017/07/How-Do-I-Feel-Real-Again.jpg",
    url: "https://delvetogether.vercel.app",
  },
  {
    name: "CuteList",
    description:
      "A task management app designed to help users manage their daily responsibilities in a cute and organized way.",
    img: "https://www.dpmanual.com/wp-content/uploads/2017/07/How-Do-I-Feel-Real-Again.jpg",
    url: "https://cute23.vercel.app/",
  },
  {
    name: "Newsnap",
    description:
      "A credibility-driven, short-form global news platform designed to provide trustworthy information.",
    img: "https://www.dpmanual.com/wp-content/uploads/2017/07/How-Do-I-Feel-Real-Again.jpg",
    url: "https://newsnapglobal.vercel.app",
  },
  {
    name: "LoopPlay",
    description:
      "A personal arcade featuring 23 addictive, lightweight mini-games designed for quick bursts of fun and replayability.",
    img: "https://www.dpmanual.com/wp-content/uploads/2017/07/How-Do-I-Feel-Real-Again.jpg",
    url: "https://loopplay23.vercel.app/",
  },
  {
    name: "MediSoul",
    description:
      "An AI-powered personal medical companion providing instant health insights and symptom tracking. (Working)",
    img: "https://www.dpmanual.com/wp-content/uploads/2017/07/How-Do-I-Feel-Real-Again.jpg",
    url: "https://medisoul23.vercel.app/",
  },
];

const WebsitesSection = () => {
  return (
    <section className="w-full fade-in-up stagger-3">
      <h2 className="section-heading text-center mb-4">
        My Websites
      </h2>

      <div className="flex flex-col gap-4">
        {websites.map((site) => (
          <a
            key={site.name}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex gap-3 p-3 rounded-xl transition-transform hover:scale-[1.01]"
          >
            <img
              src={site.img}
              alt={site.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover flex-shrink-0"
            />

            <div className="flex flex-col justify-center gap-1">
              <h3 className="text-sm sm:text-base font-semibold">
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
