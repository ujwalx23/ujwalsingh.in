import React from "react";
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/siteConfig";

const Privacy = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 px-1 sm:px-0 animate-in fade-in duration-300">
      <PageSEO
        title="Privacy Policy | Ujwal Singh"
        description="Privacy Policy for ujwalsingh.in. Learn how personal information, contact submissions, and local storage data are handled."
        path="/privacy"
        keywords="Ujwal Singh privacy policy, terms, data handling, cookies"
      />

      {/* Header */}
      <div className="space-y-3 pb-6 border-b border-primary/10">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline mb-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold gradient-text">Privacy Policy</h1>
            <p className="text-xs text-muted-foreground">Effective Date: January 1, 2026 · Last Updated: September 2026</p>
          </div>
        </div>
      </div>

      {/* Content Cards */}
      <div className="space-y-6 text-foreground/90 text-xs sm:text-sm leading-relaxed">
        <section className="glass-card p-6 border border-primary/10 space-y-3">
          <h2 className="text-base font-bold text-foreground flex items-center gap-2">
            <Eye className="w-4 h-4 text-primary" /> 1. Overview & Information We Collect
          </h2>
          <p>
            Welcome to <strong>ujwalsingh.in</strong>, the personal portfolio and digital engineering showcase of Ujwal Singh. 
            Your privacy is respected, and this website is engineered to minimize personal data collection.
          </p>
          <p>
            When you interact with this portfolio, information is collected only in the following scenarios:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li><strong>Contact Submissions:</strong> When you voluntarily submit a message via the Contact form (name, email address, inquiry reason, and message content).</li>
            <li><strong>Reflections & Notes:</strong> Messages or greetings you voluntarily leave on the public Thoughts wall.</li>
            <li><strong>Local Browser State:</strong> UI preferences such as theme (dark/light mode), preferred language, and cookie consent flags saved locally in your browser’s <code className="text-primary font-mono text-xs">localStorage</code>.</li>
          </ul>
        </section>

        <section className="glass-card p-6 border border-primary/10 space-y-3">
          <h2 className="text-base font-bold text-foreground flex items-center gap-2">
            <Lock className="w-4 h-4 text-primary" /> 2. How Your Information Is Used
          </h2>
          <p>
            Any information submitted through this website is strictly used for:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>Directly responding to recruitment, freelance, or consulting inquiries.</li>
            <li>Displaying guestbook notes on the public Reflections board with your chosen pseudonym or name.</li>
            <li>Maintaining your interface preferences (e.g. language selection and dark mode) across page visits.</li>
          </ul>
          <p className="font-semibold text-primary/90">
            Your personal information is never sold, leased, or distributed to third-party advertisers or data brokers.
          </p>
        </section>

        <section className="glass-card p-6 border border-primary/10 space-y-3">
          <h2 className="text-base font-bold text-foreground flex items-center gap-2">
            <FileText className="w-4 h-4 text-primary" /> 3. Cookies & Local Storage
          </h2>
          <p>
            This website does not deploy third-party advertising tracking cookies. We utilize standard, non-intrusive browser client storage (<code className="text-primary font-mono text-xs">localStorage</code>) to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>Preserve your color theme preference (<code className="text-primary font-mono text-xs">theme</code>).</li>
            <li>Preserve your selected interface language (<code className="text-primary font-mono text-xs">selected_language</code>).</li>
            <li>Save your Cookie Consent acknowledgment to prevent re-displaying the banner.</li>
          </ul>
          <p>
            You may clear your browser’s cache and local storage at any time using your browser settings.
          </p>
        </section>

        <section className="glass-card p-6 border border-primary/10 space-y-3">
          <h2 className="text-base font-bold text-foreground flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" /> 4. Contact & Inquiries
          </h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy or wish to request the removal of any comment or submitted detail, please contact me directly:
          </p>
          <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 text-xs">
            <p><strong>Ujwal Singh</strong></p>
            <p>Email: <a href="mailto:ujwalsingh426@gmail.com" className="text-primary hover:underline font-medium">ujwalsingh426@gmail.com</a> / <a href={CONTACT_MAILTO} className="text-primary hover:underline font-medium">{CONTACT_EMAIL}</a></p>
            <p>Location: Mumbai, Maharashtra, India</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
