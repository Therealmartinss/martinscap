import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import PremiumCard from "@/components/PremiumCard";

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
      />

      <section className="section-spacing">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <PremiumCard
            eyebrow={t("tech.thesis.eyebrow")}
            title={t("tech.thesis.title")}
            description={t("tech.thesis.body")}
            className="reveal"
          />
        </div>
      </section>

      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
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
      </section>

      <section className="section-spacing">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
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
