import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Compass, ArrowLeft, Search } from "lucide-react";
import PageSEO from "@/components/PageSEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404 Notice: User navigated to missing path:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center animate-in fade-in duration-300">
      <PageSEO
        title="404 - Page Not Found | Ujwal Singh"
        description="The page you are looking for does not exist. Explore Ujwal Singh's software projects, web engineering, and contact details."
        path="/404"
      />

      <div className="relative max-w-md w-full glass-card p-8 md:p-10 border border-primary/20 shadow-2xl rounded-3xl overflow-hidden">
        {/* Glowing aura */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-secondary/10 to-accent/10 pointer-events-none blur-xl -z-10" />

        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 text-primary mb-4 animate-bounce-slow">
          <Compass className="w-8 h-8" />
        </div>

        <h1 className="text-6xl font-black gradient-text font-display mb-2">404</h1>
        <h2 className="text-lg font-bold text-foreground mb-2">Destination Lost in Cyberspace</h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
          The requested path <code className="text-primary font-mono text-xs px-1.5 py-0.5 rounded bg-primary/5 border border-primary/10">{location.pathname}</code> doesn't exist or has moved.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-xl text-xs shadow-md shadow-primary/15 hover:opacity-90 transition-all hover:scale-102"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/websites"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 glass-button border border-primary/15 text-foreground font-semibold px-4 py-2.5 rounded-xl text-xs hover:text-primary transition-all"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Explore Projects</span>
          </Link>
        </div>

        <div className="mt-6 pt-5 border-t border-primary/10 flex items-center justify-center gap-4 text-[11px] text-muted-foreground">
          <Link to="/about" className="hover:text-primary transition-colors">About Me</Link>
          <span>•</span>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          <span>•</span>
          <Link to="/social" className="hover:text-primary transition-colors">Social Profiles</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
