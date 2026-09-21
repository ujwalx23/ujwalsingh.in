import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/AppLayout";
import { LanguageProvider } from "@/hooks/useLanguage";
import { CookieConsent } from "@/components/CookieConsent";
import Home from "./pages/Home";
import About from "./pages/About";
import Websites from "./pages/Websites";
import Projects from "./pages/Projects";
import Research from "./pages/Research";
import Certifications from "./pages/Certifications";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import Social from "./pages/Social";
import Contact from "./pages/Contact";
import Thoughts from "./pages/Thoughts";
import Admin from "./pages/Admin";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
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
          <CookieConsent />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);


export default App;