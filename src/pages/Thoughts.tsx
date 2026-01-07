import { Quote } from "lucide-react";

const thoughts = [
  { id: 1, quote: "Everyone has the same eyes, but not the same view." },
  { id: 2, quote: "Is waiting really a good thing?" },
  { id: 3, quote: "Pain is certain. Pain will go, but success will remain." },
  { id: 4, quote: "Khud ko akela hokar kiske paas dekhte ho?" },
  { id: 5, quote: "Discipline beats motivation. Just keep going, even on days you feel low." },
  { id: 6, quote: "Be kind. It’s okay if someone doesn’t meet your expectations." },
];

const Thoughts = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2 fade-in-up">
        Thoughts
      </h1>

      <p className="text-muted-foreground mb-8 fade-in-up">
        Short reflections, honest thoughts, and things I remind myself of.
      </p>

      {/* 2 columns on mobile/tablet, 4 on desktop */}
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
              — Ujwal Singh
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thoughts;
