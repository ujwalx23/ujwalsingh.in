const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center pt-12 pb-6 fade-in-up">
      {/* Name */}
      <h1 className="text-4xl sm:text-5xl font-bold font-display text-primary mb-3">
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
