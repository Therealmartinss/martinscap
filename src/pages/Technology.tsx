import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import PremiumCard from "@/components/PremiumCard";
import techHeroMetropolis from "@/assets/tech-hero-metropolis.png";
import techDigitalLandscape from "@/assets/tech-digital-landscape.png";
import techDataCorridor from "@/assets/tech-data-corridor.png";
import techDataflow from "@/assets/tech-dataflow.png";

const Technology = () => {
  const { t } = useLanguage();

  const focus = [
    t("tech.focus.saas"),
    t("tech.focus.platforms"),
    t("tech.focus.ai"),
    t("tech.focus.infrastructure"),
    t("tech.focus.ventures"),
  ];

  const engage = [
    t("tech.engage.build"),
    t("tech.engage.partner"),
    t("tech.engage.support"),
    t("tech.engage.structure"),
    t("tech.engage.scale"),
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t("tech.eyebrow")}
        headline={t("tech.hero.headline")}
        intro={t("tech.hero.intro")}
        backgroundImage={techHeroMetropolis}
        align="left"
      />

      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-10 items-stretch">
          <PremiumCard
            eyebrow={t("tech.thesis.eyebrow")}
            title={t("tech.thesis.title")}
            description={t("tech.thesis.body")}
            className="reveal h-full"
          />
          <div className="reveal relative min-h-[360px] md:min-h-[420px] overflow-hidden border border-border/30 bg-card/20">
            <img
              src={techDigitalLandscape}
              alt="Strategic digital systems diagram with restrained gold lines"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-transparent to-background/75" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/65 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 xl:grid-cols-[0.92fr_1.08fr] gap-8 md:gap-12 items-start">
          <div className="reveal relative min-h-[420px] md:min-h-[620px] overflow-hidden border border-border/30 bg-card/20 order-2 xl:order-1">
            <img
              src={techDataCorridor}
              alt="Luxury data center corridor with disciplined gold lighting"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/25 via-transparent to-background/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 order-1 xl:order-2">
            <div className="reveal">
              <p className="heading-serif-sm text-primary mb-6">{t("tech.focus.eyebrow")}</p>
              <div className="gold-line mb-10" />
              <ul className="space-y-6">
                {focus.map((f) => (
                  <li key={f} className="group flex items-baseline gap-5 pb-5 border-b border-border/20">
                    <span className="text-primary/60 heading-serif-sm text-[10px] transition-colors duration-500 group-hover:text-primary">—</span>
                    <span className="heading-serif text-[19px] md:text-[21px] text-foreground tracking-wide">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal" style={{ transitionDelay: "120ms" }}>
              <p className="heading-serif-sm text-primary mb-6">{t("tech.engage.eyebrow")}</p>
              <div className="gold-line mb-10" />
              <ul className="space-y-6">
                {engage.map((f) => (
                  <li key={f} className="group flex items-baseline gap-5 pb-5 border-b border-border/20">
                    <span className="text-primary/60 heading-serif-sm text-[10px] transition-colors duration-500 group-hover:text-primary">—</span>
                    <span className="heading-serif text-[19px] md:text-[21px] text-foreground tracking-wide">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${techDataflow})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/92 via-background/72 to-background/84" />
        <div className="relative max-w-3xl mx-auto px-6 md:px-10 text-center">
          <SectionHeader
            eyebrow={t("tech.cta.eyebrow")}
            title={t("tech.cta.title")}
            intro={t("tech.cta.body")}
          />
          <Link to="/contact" className="reveal btn-premium group">
            {t("tech.cta.button")}
            <ArrowRight size={13} strokeWidth={1.25} className="transition-transform duration-700 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Technology;
