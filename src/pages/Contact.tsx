import { useState } from "react";
import { Send, CheckCircle, Mail, MessageSquare } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const reasonOptions = [
  "Just Exploring",
  "Looking for Help",
  "Working & Learning",
  "Creator / Developer",
  "Here to Connect",
  "Just Saying Hi",
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const reason = formData.get("reason") as string;
    const message = formData.get("message") as string || null;

    try {
      // Save to database
      const { error } = await supabase
        // NOTE: table is intentionally separate from the homepage contact section
        // (typed as any to avoid stale generated DB types in the repo)
        .from("contact_submissions_page" as any)
        .insert({ name, email, reason, message });

      if (error) throw error;

      // Also send to Formspree as backup/notification
      await fetch("https://formspree.io/f/mjknjgqo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-8 fade-in-up">
          Contact Me
        </h1>
        <div className="glass-card p-8 text-center fade-in-up">
          <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-3">Message Sent!</h2>
          <p className="text-muted-foreground text-lg">
            Thanks for reaching out. I'll get back to you soon!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-8 fade-in-up">
        Contact Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Info Section */}
        <div className="space-y-6 fade-in-up">
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold">Get in Touch</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              I'd love to hear from you! Whether you have a question, want to collaborate, 
              or just want to say hi, feel free to reach out.
            </p>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold">Quick Response</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              I typically respond within 24-48 hours. For urgent matters, 
              connect with me on social media for a faster response.
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
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              placeholder="your@email.com"
            />
          </div>

          {/* Describe Yourself */}
          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-foreground/80 mb-2">
              Describe Yourself
            </label>
            <select
              id="reason"
              name="reason"
              required
              className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/10 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all appearance-none cursor-pointer"
              defaultValue=""
            >
              <option value="" disabled className="text-muted-foreground">
                Select an option
              </option>
              {reasonOptions.map((option) => (
                <option key={option} value={option} className="bg-background text-foreground">
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
              placeholder="Your message..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="glass-button bg-primary/20 border-primary/40 hover:bg-primary/30 w-full py-4 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
