import React from "react";
import { Scale, CheckCircle2, AlertCircle, FileCheck, ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/siteConfig";

const Terms = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 px-1 sm:px-0 animate-in fade-in duration-300">
      <PageSEO
        title="Terms of Service | Ujwal Singh"
        description="Terms of Service and conditions for using ujwalsingh.in, the portfolio and software projects of Ujwal Singh."
        path="/terms"
        keywords="Ujwal Singh terms of service, conditions of use, software license"
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
            <Scale className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold gradient-text">Terms of Service</h1>
            <p className="text-xs text-muted-foreground">Effective Date: January 1, 2026 · Last Updated: September 2026</p>
          </div>
        </div>
      </div>

      {/* Content Cards */}
      <div className="space-y-6 text-foreground/90 text-xs sm:text-sm leading-relaxed">
        <section className="glass-card p-6 border border-primary/10 space-y-3">
          <h2 className="text-base font-bold text-foreground flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" /> 1. Acceptance of Terms
          </h2>
          <p>
            By accessing and viewing <strong>ujwalsingh.in</strong>, you acknowledge and agree to comply with these Terms of Service. If you do not agree with any part of these terms, please discontinue use of this website.
          </p>
        </section>

        <section className="glass-card p-6 border border-primary/10 space-y-3">
          <h2 className="text-base font-bold text-foreground flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-primary" /> 2. Intellectual Property & Code Showcase
          </h2>
          <p>
            Unless otherwise noted, the design, layout, branding, personal code examples, and text published on this website are the intellectual property of Ujwal Singh.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li><strong>Open-Source Repositories:</strong> Code hosted in public repositories on GitHub is subject to their respective open-source licenses (e.g., MIT License).</li>
            <li><strong>Client & Proprietary Deliverables:</strong> Client trademarks, proprietary schemas, or bespoke commercial work (such as client assets for Namami Vindhyavasini) remain the property of their respective entities and are showcased here for portfolio demonstration purposes only.</li>
            <li><strong>Fair Use:</strong> You may reference or cite public content on this site provided attribution is properly credited to Ujwal Singh.</li>
          </ul>
        </section>

        <section className="glass-card p-6 border border-primary/10 space-y-3">
          <h2 className="text-base font-bold text-foreground flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-primary" /> 3. Disclaimer of Warranties
          </h2>
          <p>
            This website and its demonstrative applications are provided on an <em>"as-is"</em> and <em>"as-available"</em> basis without warranties of any kind. 
            Demonstrative tools (including AI symptom analysis in MediSoul or mock tools) are built for informational and technical portfolio showcase purposes and do not constitute professional medical, legal, or financial advice.
          </p>
        </section>

        <section className="glass-card p-6 border border-primary/10 space-y-3">
          <h2 className="text-base font-bold text-foreground flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" /> 4. Inquiries & Legal Contact
          </h2>
          <p>
            For inquiries regarding licensing, permissions, or terms, please contact:
          </p>
          <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 text-xs">
            <p><strong>Ujwal Singh</strong></p>
            <p>Email: <a href="mailto:ujwalsingh426@gmail.com" className="text-primary hover:underline font-medium">ujwalsingh426@gmail.com</a> / <a href={CONTACT_MAILTO} className="text-primary hover:underline font-medium">{CONTACT_EMAIL}</a></p>
            <p>Portfolio: <a href="https://ujwalsingh.in" className="text-primary hover:underline font-medium">https://ujwalsingh.in</a></p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Terms;
