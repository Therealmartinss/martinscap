import mcMonogram from "@/assets/mc-monogram.png";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center section-narrow text-center">
      {/* Logo — 3x larger */}
      <div className="logo-shimmer mb-10 animate-[fadeUp_2s_ease-out_both]">
        <img
          src={mcMonogram}
          alt="Martins Capital Monogram"
          width={360}
          height={360}
          className="mx-auto"
        />
      </div>

      {/* Company Name */}
      <h1
        className="heading-serif text-primary tracking-[0.2em] text-sm md:text-base mb-20 animate-[fadeUp_2s_ease-out_0.3s_both]"
        style={{ textTransform: "uppercase" }}
      >
        {t("hero.company")}
      </h1>

      {/* Headline */}
      <p className="heading-serif text-2xl md:text-4xl lg:text-5xl text-foreground mb-8 animate-[fadeUp_2s_ease-out_0.6s_both]">
        {t("hero.headline1")}
        <br />
        {t("hero.headline2")}
      </p>

      {/* Subheadline */}
      <p className="text-muted-foreground text-sm md:text-base max-w-2xl leading-relaxed animate-[fadeUp_2s_ease-out_0.9s_both]">
        {t("hero.sub")}
      </p>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-[fadeUp_2s_ease-out_1.5s_both]">
        <div className="w-px h-12 bg-primary opacity-20" />
      </div>
    </section>
  );
};

export default HeroSection;
