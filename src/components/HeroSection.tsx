const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center pt-8 sm:pt-12 pb-4 sm:pb-6 fade-in-up">
      {/* Name */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-primary mb-2 sm:mb-3">
        Ujwal Singh
      </h1>

      {/* Subtitle */}
      <p className="text-muted-foreground text-xs sm:text-sm md:text-base font-medium tracking-wide">
        Creator • Developer • AI Enthusiast
      </p>
    </section>
  );
};

export default HeroSection;
