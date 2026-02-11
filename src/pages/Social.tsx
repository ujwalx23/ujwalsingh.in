import { Instagram, Linkedin, Youtube, Github, Code, BookOpen, FileDown } from "lucide-react";
import { ComponentType } from "react";
import PageSEO from "@/components/PageSEO";

// Custom icons
const ThreadsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.88-.73 2.087-1.146 3.497-1.212.982-.046 1.898.04 2.738.259-.082-.783-.319-1.408-.713-1.876-.505-.6-1.286-.91-2.32-.921h-.048c-.795.003-1.81.222-2.508.917l-1.417-1.428c1.043-1.038 2.457-1.587 4.09-1.587h.075c1.6.018 2.905.545 3.88 1.566.945.99 1.475 2.378 1.575 4.129.168.053.335.111.499.174 1.326.503 2.394 1.329 3.09 2.39.87 1.326 1.086 2.977.607 4.647-.732 2.556-2.882 4.387-6.063 5.163-1.202.293-2.49.429-3.834.386zm1.106-10.553c-.781.036-1.442.217-1.906.52-.392.254-.625.58-.658.918-.04.432.156.838.553 1.143.488.374 1.192.545 1.981.482 1.076-.086 1.9-.466 2.45-1.131.392-.474.64-1.086.747-1.833-.928-.195-1.995-.236-3.167-.099z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const QuoraIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12.738 21.989c-1.2 0-2.357-.18-3.421-.516-.478.809-1.108 1.414-1.927 1.806-.819.392-1.691.588-2.619.588-.145 0-.326-.008-.541-.024l-.361-.036v-2.035l.24-.012c.687-.036 1.24-.305 1.662-.805.421-.501.632-1.206.632-2.116 0-.096-.004-.198-.012-.307a8.8 8.8 0 01-2.365-2.845C2.942 14.153 2.5 12.489 2.5 10.662c0-1.819.442-3.48 1.326-4.986.885-1.505 2.092-2.692 3.621-3.559C8.976 1.251 10.681.817 12.54.817c1.88 0 3.592.434 5.137 1.3 1.546.867 2.76 2.054 3.644 3.559.884 1.506 1.326 3.167 1.326 4.986 0 1.827-.442 3.491-1.326 4.992-.884 1.501-2.098 2.684-3.644 3.547-1.545.864-3.258 1.295-5.137 1.295-.604 0-1.188-.056-1.752-.168.192.72.529 1.277 1.012 1.67.482.392 1.092.589 1.83.589a4.9 4.9 0 001.092-.12c.355-.08.727-.2 1.116-.361l.264-.108.721 1.651-.216.096a7.074 7.074 0 01-1.332.409c-.478.111-.999.167-1.561.167zm-.006-3.623c1.447 0 2.764-.327 3.953-.981 1.189-.654 2.123-1.558 2.804-2.711.68-1.154 1.02-2.463 1.02-3.927 0-1.464-.34-2.773-1.02-3.927-.681-1.154-1.615-2.058-2.804-2.711-1.189-.654-2.506-.981-3.953-.981-1.431 0-2.736.327-3.917.981-1.181.653-2.108 1.557-2.78 2.711-.673 1.154-1.009 2.463-1.009 3.927 0 1.464.336 2.773 1.009 3.927.672 1.153 1.599 2.057 2.78 2.711 1.181.654 2.486.981 3.917.981z"/>
  </svg>
);

const RedditIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701z"/>
  </svg>
);

const OrcidIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-1.847-1.238-3.722-3.806-3.722h-2.513z"/>
  </svg>
);

interface SocialLink {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
}

interface CodingPlatform {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  isDownload: boolean;
}

const socialLinks: SocialLink[] = [
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/ujwalsingh23/" },
  { name: "X (Twitter)", icon: XIcon, url: "https://x.com/UJWALSINGH23" },
  { name: "Discord", icon: DiscordIcon, url: "https://discord.com/users/1243952128272371764" },
  { name: "Quora", icon: QuoraIcon, url: "https://www.quora.com/profile/UJWAL-SINGH-85" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/ujwalx23/" },
  { name: "Pinterest", icon: PinterestIcon, url: "https://in.pinterest.com/UjwalSingh23/" },
  { name: "Threads", icon: ThreadsIcon, url: "https://www.threads.com/@ujwalx23" },
  { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/channel/UCbtH84Ir66Tkc--d7eG5p8g" },
  { name: "Reddit", icon: RedditIcon, url: "https://www.reddit.com/user/UjwalSingh45/" },
  { name: "ORCID", icon: OrcidIcon, url: "https://orcid.org/0009-0004-0490-010X" },
];

const codingPlatforms: CodingPlatform[] = [
  { name: "My Resume", icon: FileDown, url: "/Ujwal_Resume.pdf", isDownload: true },
  { name: "GitHub", icon: Github, url: "https://github.com/ujwalx23", isDownload: false },
  { name: "LeetCode", icon: Code, url: "https://leetcode.com/u/UjwalSingh23/", isDownload: false },
  { name: "TakeUforward", icon: BookOpen, url: "https://takeuforward.org/profile/Ujwal%20Singh", isDownload: false },
];

const Social = () => {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-10">
      <PageSEO
        title="Social Links | Ujwal Singh on LinkedIn, GitHub, Instagram & More"
        description="Connect with Ujwal Singh across social media platforms — LinkedIn, GitHub, Instagram, X, Discord, YouTube, ORCID, and coding profiles."
        path="/social"
        keywords="Ujwal Singh social media, LinkedIn, GitHub, Instagram, ORCID"
      />
      <h1 className="text-3xl md:text-4xl font-bold gradient-text fade-in-up">
        Social Links
      </h1>

      {/* Social Media */}
      <section className="fade-in-up">
        <h2 className="text-2xl font-bold mb-6">Social Media</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover flex items-center gap-3 p-4 min-h-[70px]"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <IconComponent className="w-6 h-6 shrink-0" />
                <span className="font-medium truncate">{link.name}</span>
              </a>
            );
          })}
        </div>
      </section>

      {/* Coding Platforms */}
      <section className="fade-in-up">
        <h2 className="text-2xl font-bold mb-6">Profiles & Coding Platforms</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {codingPlatforms.map((platform, index) => {
            const IconComponent = platform.icon;
            return (
              <a
                key={platform.name}
                href={platform.url}
                target={platform.isDownload ? "_self" : "_blank"}
                rel={platform.isDownload ? undefined : "noopener noreferrer"}
                download={platform.isDownload ? "Ujwal_Resume.pdf" : undefined}
                className="glass-card-hover flex flex-col items-center justify-center gap-3 p-5 min-h-[100px]"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <IconComponent className="w-8 h-8 text-primary" />
                <span className="font-medium text-center">{platform.name}</span>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Social;