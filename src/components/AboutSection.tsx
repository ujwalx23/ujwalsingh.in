import { MessageCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="w-full fade-in-up stagger-5">
      <h2 className="section-heading text-center">About Me</h2>
      <div className="glass-card p-5">
        <p className="text-foreground/90 text-center mb-5 leading-relaxed">
          Hi, I'm Ujwal 👋 I build websites, apps, games, and AI tools.
        </p>
        
        {/* Chat with AI section */}
        <div className="border-t border-primary/10 pt-4 mt-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium gradient-text">Chat with Ujwal (AI)</span>
          </div>
          <p className="text-xs text-muted-foreground text-center mb-3">
            Talk to my AI twin — it answers like me!
          </p>
          <a
            href="https://cdn.botpress.cloud/webchat/v3.5/shareable.html?configUrl=https://files.bpcontent.cloud/2025/12/12/12/20251212120356-KRFZ3H1Z.json"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button bg-primary/10 border-primary/30 hover:bg-primary/20 text-sm py-3"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Start Chatting</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
