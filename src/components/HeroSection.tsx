import mcMonogram from "@/assets/mc-monogram.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center section-narrow text-center">
    {/* Logo */}
    <div className="logo-shimmer mb-8 animate-[fadeUp_2s_ease-out_both]">
      <img
        src={mcMonogram}
        alt="Martins Capital Monogram"
        width={120}
        height={120}
        className="mx-auto"
      />
    </div>

    {/* Company Name */}
    <h1
      className="heading-serif text-primary tracking-[0.2em] text-sm md:text-base mb-16 animate-[fadeUp_2s_ease-out_0.3s_both]"
      style={{ textTransform: "uppercase" }}
    >
      Martins Capital
    </h1>

    {/* Headline */}
    <p className="heading-serif text-2xl md:text-4xl lg:text-5xl text-foreground mb-8 animate-[fadeUp_2s_ease-out_0.6s_both]">
      The Intelligence Layer Behind
      <br />
      Strategic Enterprises
    </p>

    {/* Subheadline */}
    <p className="text-muted-foreground text-sm md:text-base max-w-2xl leading-relaxed animate-[fadeUp_2s_ease-out_0.9s_both]">
      A holding company responsible for capital allocation, strategic direction,
      and long-term value creation across a portfolio of businesses.
    </p>

    {/* Scroll indicator */}
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-[fadeUp_2s_ease-out_1.5s_both]">
      <div className="w-px h-12 bg-primary opacity-20" />
    </div>
  </section>
);

export default HeroSection;
