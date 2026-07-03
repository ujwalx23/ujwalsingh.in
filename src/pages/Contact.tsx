import { useState, type FormEvent } from "react";
import { Send, CheckCircle, Mail, MessageSquare } from "lucide-react";
import PageSEO from "@/components/PageSEO";
import { useLanguage } from "@/hooks/useLanguage";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/siteConfig";
import { createContactSubmission, saveContactSubmission } from "@/lib/contactUtils";

const Contact = () => {
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

    try {
      const submission = createContactSubmission({
        name,
        email,
        reason,
        message,
      });
      saveContactSubmission(submission);

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

      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const reasonOptions: string[] = t("contact.reasonOptions") || [];

  if (isSubmitted) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-8 fade-in-up">
          {t("contact.title")}
        </h1>
        <div className="glass-card p-8 text-center fade-in-up">
          <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-3">{t("contact.successTitle")}</h2>
          <p className="text-muted-foreground text-lg">
            {t("contact.successDesc")}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <PageSEO
        title={`${t("contact.title")} | Ujwal Singh`}
        description={t("contact.subtitle")}
        path="/contact"
        keywords="contact Ujwal Singh, collaboration, web developer contact"
      />
      <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-8 fade-in-up">
        {t("contact.title")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Info Section */}
        <div className="space-y-6 fade-in-up">
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold">{t("contact.infoTitle")}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t("contact.infoDesc")}
            </p>
            <p className="text-sm text-foreground/80 mt-4">
              Or email me directly at <a href={CONTACT_MAILTO} className="text-primary hover:underline">{CONTACT_EMAIL}</a> for business inquiries.
            </p>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold">{t("contact.responseTitle")}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t("contact.responseDesc")}
            </p>
          </div>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="glass-card p-6 space-y-5 fade-in-up"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
              {t("contact.nameLabel")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              placeholder={t("contact.namePlaceholder")}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
              {t("contact.emailLabel")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              placeholder={t("contact.emailPlaceholder")}
            />
          </div>

          {/* Describe Yourself */}
          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-foreground/80 mb-2">
              {t("contact.reasonLabel")}
            </label>
            <div className="relative">
              <select
                id="reason"
                name="reason"
                required
                className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/10 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all appearance-none cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled className="text-muted-foreground">
                  {t("contact.reasonPlaceholder")}
                </option>
                {reasonOptions.map((option) => (
                  <option key={option} value={option} className="bg-background text-foreground animate-in fade-in duration-100">
                    {option}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
              {t("contact.msgLabel")} *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
              placeholder={t("contact.msgPlaceholder")}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="glass-button bg-primary/20 border-primary/40 hover:bg-primary/30 w-full py-4 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-102"
          >
            <Send className="w-5 h-5" />
            <span>{isSubmitting ? t("contact.submittingButton") : t("contact.submitButton")}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
