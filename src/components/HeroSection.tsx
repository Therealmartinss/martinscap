import mcLogoFull from "@/assets/mc-logo-full.png";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center section-narrow text-center">
      {/* Full Logo — monogram + brand name */}
      <div className="mb-16 animate-[fadeUp_2s_ease-out_both]">
        <img
          src={mcLogoFull}
          alt="Martins Capital"
          className="mx-auto w-[340px] md:w-[480px] lg:w-[580px] h-auto"
        />
      </div>

      {/* Headline */}
      <p className="heading-serif text-2xl md:text-4xl lg:text-5xl text-foreground mb-6 animate-[fadeUp_2s_ease-out_0.4s_both]">
        {t("hero.headline1")}
        <br />
        {t("hero.headline2")}
      </p>

      {/* Subheadline */}
      <p className="text-muted-foreground text-sm md:text-base max-w-2xl leading-relaxed animate-[fadeUp_2s_ease-out_0.7s_both]">
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
