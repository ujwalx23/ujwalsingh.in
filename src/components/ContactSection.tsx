import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const reasonOptions = [
  "Just Exploring",
  "Looking for Help",
  "Working & Learning",
  "Creator / Developer",
  "Here to Connect",
  "Just Saying Hi",
];

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
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
      <section className="w-full fade-in-up stagger-6">
        <h2 className="section-heading text-center">Get in Touch</h2>
        <div className="glass-card p-8 text-center">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Form Submitted Successfully!</h3>
          <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full fade-in-up stagger-6">
      <h2 className="section-heading text-center">Get in Touch</h2>
      <form
        onSubmit={handleSubmit}
        className="glass-card p-5 space-y-4"
      >
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1.5">
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
          <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1.5">
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

        {/* Describe Yourself Dropdown */}
        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-foreground/80 mb-1.5">
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

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="glass-button bg-primary/20 border-primary/40 hover:bg-primary/30 w-full py-3.5 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
          <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
