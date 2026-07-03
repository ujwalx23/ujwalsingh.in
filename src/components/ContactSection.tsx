import React, { useState, type FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/siteConfig";
import { createContactSubmission, saveContactSubmission } from "@/lib/contactUtils";

const ContactSection = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string) || "";
    const email = (formData.get("email") as string) || "";
    const reason = (formData.get("reason") as string) || "";
    const message = (formData.get("message") as string) || "";

    const newSubmission = createContactSubmission({
      name,
      email,
      reason,
      message,
    });

    await new Promise((resolve) => setTimeout(resolve, 600));
    saveContactSubmission(newSubmission);

    try {
      // Telegram Bot Notification
      const botToken = "8405397791:AAGO3Zo9r2a6tjP9qg8AUSWFwcPeK2-bw60";
      const chatId = "5835649452";

      if (botToken && chatId) {
        const escapeHtml = (text: string) => {
          return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        };

        const textMessage = `📩 <b>New Contact Form Submission</b>\n\n👤 <b>Name:</b> ${escapeHtml(name)}\n📧 <b>Email:</b> ${escapeHtml(email)}\n🏷️ <b>Reason:</b> ${escapeHtml(reason)}\n💬 <b>Message:</b> ${escapeHtml(message)}`;
        
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: textMessage,
            parse_mode: "HTML",
          }),
        });
      }
    } catch (error) {
      console.error("Telegram notification error:", error);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const reasonOptions: string[] = t("contact.reasonOptions") || [];

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
      <p className="text-xs text-muted-foreground text-center max-w-xl mx-auto mb-4">
        Prefer email? <a href={CONTACT_MAILTO} className="text-primary hover:underline">{CONTACT_EMAIL}</a>
      </p>
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
            placeholder={t("contact.namePlaceholder")}
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
            placeholder={t("contact.emailPlaceholder")}
          />
        </div>

        {/* Describe Yourself */}
        <div className="space-y-1">
          <label htmlFor="reason" className="block text-xs font-semibold text-foreground/80">
            {t("contact.reasonLabel")}
          </label>
          <div className="relative">
            <select
              id="reason"
              name="reason"
              required
              className="w-full px-3 py-2.5 rounded-xl bg-primary/5 border border-primary/10 text-foreground text-xs focus:outline-none focus:border-primary/45 transition-all appearance-none cursor-pointer"
              defaultValue=""
            >
              <option value="" disabled className="text-muted-foreground text-xs">
                {t("contact.reasonPlaceholder")}
              </option>
              {reasonOptions.map((option) => (
                <option key={option} value={option} className="bg-background text-foreground text-xs">
                  {option}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground">
              <svg className="fill-current h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1">
          <label htmlFor="message" className="block text-xs font-semibold text-foreground/80">
            {t("contact.msgLabel")} *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full px-3 py-2.5 rounded-xl bg-primary/5 border border-primary/10 text-foreground text-xs focus:outline-none focus:border-primary/45 transition-all resize-none"
            placeholder={t("contact.msgPlaceholder")}
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
