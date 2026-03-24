import { Quote } from "lucide-react";
import PageSEO from "@/components/PageSEO";

const thoughts = [
  { id: 1, quote: "Don't wait for the perfect moment. Take the moment and make it perfect.", author: "Ujwal Singh" },
  { id: 2, quote: "The only limit to your impact is your imagination and commitment.", author: "Ujwal Singh" },
  { id: 3, quote: "Sometimes the hardest part isn't letting go but learning to start over.", author: "Ujwal Singh" },
  { id: 4, quote: "Your energy introduces you before you even speak.", author: "Anonymous" },
  { id: 5, quote: "Build things that matter. The rest is just noise.", author: "Ujwal Singh" },
  { id: 6, quote: "Growth begins where comfort ends. Embrace the discomfort.", author: "Ujwal Singh" },
  { id: 7, quote: "Not every storm comes to disrupt your life. Some come to clear your path.", author: "Anonymous" },
  { id: 8, quote: "Stay curious, stay humble, and never stop creating.", author: "Ujwal Singh" },
];

const Thoughts = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <PageSEO
        title="Thoughts by Ujwal Singh | Reflections & Quotes"
        description="Short reflections, honest thoughts, and quotes by Ujwal Singh. Personal insights on life, motivation, and growth."
        path="/thoughts"
        keywords="Ujwal Singh thoughts, quotes, reflections, motivation"
      />
      <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2 fade-in-up">
        Thoughts
      </h1>

      <p className="text-muted-foreground mb-8 fade-in-up">
        Short reflections, honest thoughts, and things I remind myself of.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {thoughts.map((thought, index) => (
          <div
            key={thought.id}
            className="glass-card p-6 flex flex-col fade-in-up hover:shadow-lg transition-all duration-300"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <Quote className="w-7 h-7 text-primary/40 mb-4" />

            <blockquote className="text-base font-medium leading-relaxed flex-1">
              “{thought.quote}”
            </blockquote>

            <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-primary/10">
              — {thought.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thoughts;
