import { MessageCircle, Download, ExternalLink } from "lucide-react";
import ujwalPhoto from "@/assets/ujwal-photo-2.jpg";

const About = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Profile Section */}
      <section className="glass-card p-6 md:p-8 fade-in-up">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Photo */}
          <div className="shrink-0">
            <img
              src={ujwalPhoto}
              alt="Ujwal Singh"
              className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover shadow-lg border-4 border-primary/20"
            />
          </div>

          {/* Info */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-3">
              Ujwal Singh
            </h1>
            <p className="text-muted-foreground text-lg mb-4">
              Creator • Developer • AI Enthusiast
            </p>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Hi, I'm Ujwal Singh 👋 I specialize in building websites, apps, games, and AI-powered tools. 
              I focus on creating efficient, user-friendly, and scalable solutions while exploring innovative 
              technologies to deliver high-quality digital experiences.
            </p>

            {/* Resume Download */}
            <a
              href="/Ujwal_Resume.pdf"
              download="Ujwal_Resume.pdf"
              className="inline-flex items-center gap-2 glass-button bg-primary/20 border-primary/40 hover:bg-primary/30 px-6 py-3"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="glass-card p-6 md:p-8 fade-in-up">
        <h2 className="text-2xl font-bold mb-6">What I Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
            <h3 className="font-semibold text-lg mb-2">🌐 Web Development</h3>
            <p className="text-sm text-muted-foreground">
              Building responsive, modern web applications with React, TypeScript, and cutting-edge frameworks.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
            <h3 className="font-semibold text-lg mb-2">🤖 AI Integration</h3>
            <p className="text-sm text-muted-foreground">
              Integrating AI-powered features and chatbots to enhance user experiences and automation.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
            <h3 className="font-semibold text-lg mb-2">🎮 Game Development</h3>
            <p className="text-sm text-muted-foreground">
              Creating fun, engaging mini-games and interactive experiences for the web.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
            <h3 className="font-semibold text-lg mb-2">📱 App Development</h3>
            <p className="text-sm text-muted-foreground">
              Developing cross-platform applications with modern tools and frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Chat with AI Section */}
      <section className="glass-card p-6 md:p-8 fade-in-up">
        <div className="flex items-center gap-3 mb-4">
          <MessageCircle className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">Chat with Ujwal (AI)</h2>
        </div>
        <p className="text-muted-foreground mb-6">
          Talk to my AI twin — it answers like me! Ask questions about my work, projects, or just have a conversation.
        </p>
        <a
          href="https://cdn.botpress.cloud/webchat/v3.5/shareable.html?configUrl=https://files.bpcontent.cloud/2025/12/12/12/20251212120356-KRFZ3H1Z.json"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 glass-button bg-primary/20 border-primary/40 hover:bg-primary/30 px-6 py-3"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Start Chatting</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </section>
    </div>
  );
};

export default About;
