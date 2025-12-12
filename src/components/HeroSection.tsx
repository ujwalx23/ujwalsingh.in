import ujwalPhoto from "@/assets/ujwal-photo.jpg";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center pt-8 pb-6 fade-in-up">
      {/* Profile Photo */}
      <div className="relative mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent blur-xl opacity-50 animate-pulse-glow" />
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-primary/30 glass-card">
          <img
            src={ujwalPhoto}
            alt="Ujwal Singh"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="text-3xl sm:text-4xl font-bold font-display gradient-text mb-2">
        Ujwal Singh
      </h1>

      {/* Subtitle */}
      <p className="text-muted-foreground text-sm sm:text-base font-medium tracking-wide">
        Creator • Developer • AI Enthusiast
      </p>
    </section>
  );
};

export default HeroSection;
