import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/AppLayout";
import { LanguageProvider } from "@/hooks/useLanguage";
import { CookieConsent } from "@/components/CookieConsent";
import { Suspense, lazy } from "react";

// Lazy-load all pages → each becomes its own JS chunk → faster initial page load
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Websites = lazy(() => import("./pages/Websites"));
const Projects = lazy(() => import("./pages/Projects"));
const Research = lazy(() => import("./pages/Research"));
const Certifications = lazy(() => import("./pages/Certifications"));
const Skills = lazy(() => import("./pages/Skills"));
const Experience = lazy(() => import("./pages/Experience"));
const Blog = lazy(() => import("./pages/Blog"));
const Resume = lazy(() => import("./pages/Resume"));
const Social = lazy(() => import("./pages/Social"));
const Contact = lazy(() => import("./pages/Contact"));
const Thoughts = lazy(() => import("./pages/Thoughts"));
const Admin = lazy(() => import("./pages/Admin"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Minimal loading skeleton shown while a lazy page chunk is fetching
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[40vh] w-full">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
      <p className="text-xs text-muted-foreground font-mono">Loading...</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route element={<AppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/websites" element={<Websites />} />
                <Route path="/research" element={<Research />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/social" element={<Social />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/reflections" element={<Thoughts />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/adminxus23" element={<Admin />} />
              </Route>
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <CookieConsent />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);


export default App;