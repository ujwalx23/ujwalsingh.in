import React from "react";

const websites = [
  {
    name: "Namami Vindhyavasini",
    description:
      "A production temple portal and pilgrimage platform with dynamic blogs, event management, and administrative dashboard for a real-world client.",
    img: `${import.meta.env.BASE_URL}images/namami.png`,
    url: "https://namamivindhyavasini.in",
  },
  {
    name: "SecureCloud",
    description:
      "A zero-knowledge cryptographic cloud platform designed for ultra-secure document storage with per-file AES-256-GCM hardware encryption and RSA-2048 PKI key distribution.",
    img: `${import.meta.env.BASE_URL}images/securecloud.png`,
    url: "https://securexcloud.vercel.app/",
  },
  {
    name: "Wanderlust Adventures",
    description:
      "A travel platform dedicated to exploring the cultural heritage, landscapes, and adventures across India.",
    img: `${import.meta.env.BASE_URL}images/wanderlust.png`,
    url: "https://wanderlustadventures23.vercel.app/",
  },
  {
    name: "MediSoul",
    description:
      "AI-powered medical companion providing health insights and symptom checking. Practical implementation of Ujwal Singh's published TechRxiv AI healthcare research (DOI: 10.36227/techrxiv.177006061.17458864/v1).",
    img: `${import.meta.env.BASE_URL}images/medisoul.png`,
    url: "https://cure23.vercel.app/",
  },
  {
    name: "CuteList",
    description:
      "A task management app designed to help users manage their daily responsibilities in a cute and organized way.",
    img: `${import.meta.env.BASE_URL}images/cutelist.png`,
    url: "https://cute23.vercel.app/",
  },
  {
    name: "Newsnap",
    description:
      "A credibility-driven, short-form global news platform designed to provide trustworthy information.",
    img: `${import.meta.env.BASE_URL}images/newsnap.png`,
    url: "https://newsnapglobal.vercel.app",
  },
  {
    name: "Delve Together",
    description:
      "A calm, collaborative space for understanding world events through live rooms and discussion, away from the noise of social media.",
    img: `${import.meta.env.BASE_URL}images/delve.png`,
    url: "https://delvetogether.vercel.app",
  },
  {
    name: "CognitiveMind",
    description:
      "An AI-powered cognitive assessment platform analyzing memory, attention, and reaction patterns to detect early cognitive decline in under 3 minutes.",
    img: `${import.meta.env.BASE_URL}images/cognitivemind.png`,
    url: "https://cognitivemind.vercel.app",
  },
  {
    name: "Wine Quality Predictor",
    description:
      "An interactive machine learning predictor estimating wine quality based on physicochemical laboratory properties using a trained Logistic Regression model.",
    img: `${import.meta.env.BASE_URL}images/wine-quality.png`,
    url: "https://winetestmodel.vercel.app/predict",
  },
  {
    name: "Climora",
    description:
      "A live weather intelligence platform with real-time atmospheric tracking and personalized activity suggestions tailored to current conditions.",
    img: `${import.meta.env.BASE_URL}images/climora.png`,
    url: "https://climorainfo.vercel.app/",
  },
  {
    name: "Appliance Care (SIEMENS)",
    description:
      "A professional washing machine repair and service platform with booking, warranty tracking, and multi-brand support.",
    img: `${import.meta.env.BASE_URL}images/appliance-care.png`,
    url: "https://appliance-care.vercel.app/",
  },
  {
    name: "Rim Weather Guide",
    description:
      "A weather forecasting platform providing accurate weather data and smart travel tips for any place in the world.",
    img: `${import.meta.env.BASE_URL}images/rim-weather.png`,
    url: "https://rim-weather-guide.vercel.app/",
  },
];

const WebsitesSection = () => {
  return (
    <section className="w-full fade-in-up stagger-3 px-4 sm:px-8">
      <h2 className="section-heading text-center mb-8 text-2xl sm:text-3xl font-bold">
        My Projects
      </h2>

      <div className="flex flex-col gap-6">
        {websites.map((site) => (
          <a
            key={site.name}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl overflow-hidden transition-transform hover:scale-[1.02] border border-primary/10 hover:border-primary/25"
          >
            {/* Image */}
            <div className="w-full h-56 sm:h-72 bg-muted overflow-hidden">
              <img
                src={site.img}
                alt={site.name}
                className="w-full h-full object-cover object-top"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>

            {/* Text */}
            <div className="p-5 flex flex-col gap-2">
              <h3 className="font-semibold text-lg sm:text-xl tracking-wide">
                {site.name}
              </h3>

              <p className="text-sm opacity-85 leading-relaxed">
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
