import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const ContactSection = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const newSubmission = {
      id: `msg_${Date.now()}`,
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    };

    // Save to local storage
    setTimeout(() => {
      const existing = localStorage.getItem("ujwal_contact_submissions");
      let submissions = [];
      if (existing) {
        try {
          submissions = JSON.parse(existing);
        } catch (err) {
          console.error(err);
        }
      }
      submissions.unshift(newSubmission);
      localStorage.setItem("ujwal_contact_submissions", JSON.stringify(submissions));

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  if (isSubmitted) {
    return (
      <section className="w-full fade-in-up stagger-6">
        <h2 className="text-xl font-bold font-display text-center mb-4">{t("contact.title")}</h2>
        <div className="glass-card p-8 text-center space-y-3">
          <CheckCircle className="w-14 h-14 text-primary mx-auto animate-pulse-glow" />
          <h3 className="text-lg font-bold">{t("contact.successMsg")}</h3>
          <p className="text-xs text-muted-foreground">{t("contact.subtitle")}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full fade-in-up stagger-6">
      <h2 className="text-xl font-bold font-display text-center mb-4">{t("contact.title")}</h2>
      <form
        onSubmit={handleSubmit}
        className="glass-card p-5 space-y-4 border border-primary/10"
      >
        {/* Name */}
        <div className="space-y-1">
          <label htmlFor="name" className="block text-xs font-semibold text-foreground/80">
            {t("contact.nameLabel")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2.5 rounded-xl bg-primary/5 border border-primary/10 text-foreground text-xs focus:outline-none focus:border-primary/45 transition-all"
            placeholder={t("contact.nameLabel")}
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label htmlFor="email" className="block text-xs font-semibold text-foreground/80">
            {t("contact.emailLabel")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2.5 rounded-xl bg-primary/5 border border-primary/10 text-foreground text-xs focus:outline-none focus:border-primary/45 transition-all"
            placeholder="your@email.com"
          />
        </div>

        {/* Message */}
        <div className="space-y-1">
          <label htmlFor="message" className="block text-xs font-semibold text-foreground/80">
            {t("contact.msgLabel")}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full px-3 py-2.5 rounded-xl bg-primary/5 border border-primary/10 text-foreground text-xs focus:outline-none focus:border-primary/45 transition-all resize-none"
            placeholder="Type your message..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-primary-foreground hover:opacity-90 font-semibold py-3 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 transition-all hover:scale-102 text-xs"
        >
          <Send className="w-3.5 h-3.5" />
          <span>{isSubmitting ? t("contact.submittingButton") : t("contact.submitButton")}</span>
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
