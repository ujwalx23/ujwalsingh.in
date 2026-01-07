import { Calendar, Share2, ArrowRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Getting Started with AI Development",
    excerpt: "My journey into AI-powered applications and what I learned along the way. From understanding machine learning basics to building production-ready AI features.",
    content: "AI development has transformed how we build applications. In this blog, I share my experience learning and implementing AI features in web applications...",
    date: "Dec 15, 2024",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Building Scalable Web Apps",
    excerpt: "Best practices for creating efficient and maintainable web applications. Learn about architecture patterns, code organization, and performance optimization.",
    content: "Scalability is crucial for modern web applications. Here's what I've learned about building apps that can grow with your user base...",
    date: "Nov 28, 2024",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "The Power of Consistency",
    excerpt: "How showing up daily transformed my development skills and mindset. Consistency beats intensity when it comes to learning and growing.",
    content: "When I started coding, I would work in intense bursts followed by long breaks. It wasn't until I committed to daily practice that I saw real growth...",
    date: "Oct 10, 2024",
    img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "Creating Engaging User Experiences",
    excerpt: "Tips and techniques for building interfaces that users love. From micro-interactions to accessibility, every detail matters.",
    content: "Great user experience doesn't happen by accident. It's the result of careful attention to detail and understanding your users...",
    date: "Sep 5, 2024",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=400&fit=crop",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "My Journey as a Developer",
    excerpt: "From learning my first lines of code to building full-stack applications. A reflection on the path that brought me here.",
    content: "Everyone's coding journey is unique. Here's mine, complete with the struggles, breakthroughs, and lessons learned along the way...",
    date: "Aug 20, 2024",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    readTime: "8 min read",
  },
];

const Blogs = () => {
  const handleShare = async (blog: typeof blogs[0]) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-8 fade-in-up">
        Blogs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <article
            key={blog.id}
            className="glass-card overflow-hidden group fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Image */}
            <div className="aspect-video overflow-hidden bg-muted">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {blog.date}
                </span>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>

              <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {blog.title}
              </h2>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {blog.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <button className="flex items-center gap-1 text-primary text-sm font-medium hover:underline">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare(blog)}
                  className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                  aria-label="Share this blog"
                >
                  <Share2 className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
