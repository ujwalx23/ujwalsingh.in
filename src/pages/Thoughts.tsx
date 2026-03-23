import { Quote } from "lucide-react";
import PageSEO from "@/components/PageSEO";

const thoughts = [
  {
    id: 1,
    quote: "Be kind. It’s okay if someone doesn’t meet your expectations.",
    author: "Ujwal Singh",
  },
  {
    id: 2,
    quote: "What if there is no other universe and this is the only one you get!?",
    author: "Ujwal Singh",
  },
  {
    id: 3,
    quote: "Pain is certain. Pain will go, but success will remain.",
    author: "Anonymous",
  },
  {
    id: 4,
    quote: "Khud ko akela hokar kiske paas dekhte ho?",
    author: "Anonymous",
  },
  {
    id: 5,
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    id: 6,
    quote: "Just keep going, even on days you feel low!",
    author: "Ujwal Singh",
  },
  {
    id: 7,
    quote: "Be consistent in your work and keep improving step by step. Don’t stay stuck on the same thing for too long. Small daily efforts make a big difference in the long run.",
    author: "Om Tiwari",
  },
  {
    id: 8,
    quote: "My eyes refused to see her leave, so the tears came to blur my vision.",
    author: "Ujwal Singh",
  },
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
