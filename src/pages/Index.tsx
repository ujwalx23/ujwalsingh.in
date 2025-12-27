import HeroSection from "@/components/HeroSection";
import SocialMediaSection from "@/components/SocialMediaSection";
import WebsitesSection from "@/components/WebsitesSection";
import CodingPlatformsSection from "@/components/CodingPlatformsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background orbs */}
      <div className="bg-orb-1" />
      <div className="bg-orb-2" />
      <div className="bg-orb-3" />

      {/* Main content */}
      <main className="relative z-10 w-full max-w-md mx-auto px-3 sm:px-4 pb-8">
        <HeroSection />
        
        <div className="space-y-6 sm:space-y-8 mt-4 sm:mt-6">
          <AboutSection />
          <SocialMediaSection />
          <CodingPlatformsSection />
          <WebsitesSection />
          <ContactSection />
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default Index;
