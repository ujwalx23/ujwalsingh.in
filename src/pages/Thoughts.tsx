import { Quote } from "lucide-react";

const thoughts = [
  { id: 1, quote: "Build things that matter, not just things that work." },
  { id: 2, quote: "Every line of code is a step towards solving someone's problem." },
  { id: 3, quote: "Consistency beats intensity. Show up every day." },
  { id: 4, quote: "The best code is the code you don't have to write." },
  { id: 5, quote: "User experience isn't just about design, it's about empathy." },
  { id: 6, quote: "Learn in public, grow in community." },
  { id: 7, quote: "Debugging is like being a detective in a crime movie where you are also the murderer." },
  { id: 8, quote: "The journey of a thousand miles begins with a single commit." },
  { id: 9, quote: "Don't compare your beginning to someone else's middle." },
  { id: 10, quote: "AI won't replace developers. Developers who use AI will replace those who don't." },
  { id: 11, quote: "Ship fast, iterate faster. Perfect is the enemy of done." },
  { id: 12, quote: "The only way to learn is to build. The only way to grow is to ship." },
];

const Thoughts = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2 fade-in-up">
        Thoughts
      </h1>
      <p className="text-muted-foreground mb-8 fade-in-up">
        Quotes and reflections on development, life, and everything in between.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {thoughts.map((thought, index) => (
          <div
            key={thought.id}
            className="glass-card p-6 flex flex-col fade-in-up hover:shadow-lg transition-all duration-300"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <Quote className="w-8 h-8 text-primary/40 mb-4" />
            
            <blockquote className="text-lg font-medium leading-relaxed flex-1">
              "{thought.quote}"
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
