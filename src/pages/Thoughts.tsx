import { Quote, Share2, Heart } from "lucide-react";
import { useState } from "react";

const thoughts = [
  {
    id: 1,
    quote: "Build things that matter, not just things that work.",
    category: "Development",
  },
  {
    id: 2,
    quote: "Every line of code is a step towards solving someone's problem.",
    category: "Purpose",
  },
  {
    id: 3,
    quote: "Consistency beats intensity. Show up every day.",
    category: "Growth",
  },
  {
    id: 4,
    quote: "The best code is the code you don't have to write.",
    category: "Simplicity",
  },
  {
    id: 5,
    quote: "User experience isn't just about design, it's about empathy.",
    category: "UX",
  },
  {
    id: 6,
    quote: "Learn in public, grow in community.",
    category: "Community",
  },
  {
    id: 7,
    quote: "Debugging is like being a detective in a crime movie where you are also the murderer.",
    category: "Humor",
  },
  {
    id: 8,
    quote: "The journey of a thousand miles begins with a single commit.",
    category: "Journey",
  },
  {
    id: 9,
    quote: "Don't compare your beginning to someone else's middle.",
    category: "Perspective",
  },
  {
    id: 10,
    quote: "AI won't replace developers. Developers who use AI will replace those who don't.",
    category: "AI",
  },
  {
    id: 11,
    quote: "Ship fast, iterate faster. Perfect is the enemy of done.",
    category: "Shipping",
  },
  {
    id: 12,
    quote: "The only way to learn is to build. The only way to grow is to ship.",
    category: "Action",
  },
];

const Thoughts = () => {
  const [likedIds, setLikedIds] = useState<Set<number>>(new Set());

  const handleLike = (id: number) => {
    setLikedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleShare = async (thought: typeof thoughts[0]) => {
    const shareText = `"${thought.quote}" — Ujwal Singh`;
    if (navigator.share) {
      try {
        await navigator.share({
          text: shareText,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      navigator.clipboard.writeText(shareText);
      alert("Quote copied to clipboard!");
    }
  };

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
            className="glass-card p-6 flex flex-col fade-in-up"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <Quote className="w-8 h-8 text-primary/40 mb-4" />
            
            <blockquote className="text-lg font-medium leading-relaxed flex-1 mb-4">
              "{thought.quote}"
            </blockquote>

            <div className="flex items-center justify-between pt-4 border-t border-primary/10">
              <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                {thought.category}
              </span>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleLike(thought.id)}
                  className={`p-2 rounded-lg transition-colors ${
                    likedIds.has(thought.id)
                      ? "text-red-500 bg-red-500/10"
                      : "text-muted-foreground hover:bg-primary/10"
                  }`}
                  aria-label="Like this thought"
                >
                  <Heart
                    className="w-4 h-4"
                    fill={likedIds.has(thought.id) ? "currentColor" : "none"}
                  />
                </button>
                <button
                  onClick={() => handleShare(thought)}
                  className="p-2 rounded-lg text-muted-foreground hover:bg-primary/10 transition-colors"
                  aria-label="Share this thought"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thoughts;
