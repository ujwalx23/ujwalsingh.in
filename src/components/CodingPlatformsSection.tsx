import { Github, Code, BookOpen, FileDown } from "lucide-react";

const platforms = [
  { name: "GitHub", icon: Github, url: "https://cute23.vercel.app", isDownload: false },
  { name: "LeetCode", icon: Code, url: "https://cute23.vercel.app", isDownload: false },
  { name: "TakeUforward", icon: BookOpen, url: "https://cute23.vercel.app", isDownload: false },
  { name: "My Resume", icon: FileDown, url: "/Ujwal_Resume.pdf", isDownload: true },
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
            target={platform.isDownload ? "_self" : "_blank"}
            rel={platform.isDownload ? undefined : "noopener noreferrer"}
            download={platform.isDownload ? "Ujwal_Resume.pdf" : undefined}
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
