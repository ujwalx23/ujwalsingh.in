import { Github, Code, BookOpen, FileDown } from "lucide-react";

const platforms = [
  { name: "My Resume", icon: FileDown, url: "/Ujwal_Resume.pdf", isDownload: true },
  { name: "GitHub", icon: Github, url: "https://github.com/ujwalx23", isDownload: false },
  { name: "LeetCode", icon: Code, url: "https://leetcode.com/u/UjwalSingh23/", isDownload: false },
  { name: "TakeUforward", icon: BookOpen, url: "https://takeuforward.org/profile/Ujwal%20Singh", isDownload: false },
];

const CodingPlatformsSection = () => {
  return (
    <section className="w-full fade-in-up stagger-4">
      <h2 className="section-heading text-center">Profiles & Coding Platforms</h2>
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target={platform.isDownload ? "_self" : "_blank"}
            rel={platform.isDownload ? undefined : "noopener noreferrer"}
            download={platform.isDownload ? "Ujwal_Resume.pdf" : undefined}
            className="glass-card-hover flex flex-col items-center justify-center gap-1.5 sm:gap-2 p-3 sm:p-4 text-center min-h-[72px]"
          >
            <platform.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            <span className="text-xs sm:text-sm font-medium">{platform.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CodingPlatformsSection;
