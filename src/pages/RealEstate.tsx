import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import PremiumCard from "@/components/PremiumCard";
import reHeroCityscape from "@/assets/re-hero-cityscape.png";
import reThesisSkyline from "@/assets/re-thesis-skyline.png";
import reWaterfrontTwilight from "@/assets/re-waterfront-twilight.png";
import reDuskLuxury from "@/assets/re-dusk-luxury.png";

const RealEstate = () => {
  const { t } = useLanguage();

  const focus = [
    t("re.focus.repositioning"),
    t("re.focus.acquisitions"),
    t("re.focus.holdings"),
    t("re.focus.partnerships"),
    t("re.focus.valueAdd"),
  ];

  const lookFor = [
    t("re.lookFor.location"),
    t("re.lookFor.upside"),
    t("re.lookFor.relevance"),
    t("re.lookFor.optionality"),
    t("re.lookFor.partnerships"),
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t("re.eyebrow")}
        headline={t("re.hero.headline")}
        intro={t("re.hero.intro")}
        backgroundImage={reHeroCityscape}
        align="left"
      />

      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-8 md:gap-10 items-stretch">
          <PremiumCard
            eyebrow={t("re.thesis.eyebrow")}
            title={t("re.thesis.title")}
            description={t("re.thesis.body")}
            className="reveal h-full"
          />
          <div className="reveal relative min-h-[360px] md:min-h-[420px] overflow-hidden border border-border/30 bg-card/20">
            <img
              src={reThesisSkyline}
              alt="Twilight skyline and waterfront district"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-transparent to-background/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 xl:grid-cols-[0.92fr_1.08fr] gap-8 md:gap-12 items-start">
          <div className="reveal relative min-h-[420px] md:min-h-[620px] overflow-hidden border border-border/30 bg-card/20 order-2 xl:order-1">
            <img
              src={reWaterfrontTwilight}
              alt="Luxury waterfront property outlook at dusk"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 order-1 xl:order-2">
            <div className="reveal">
              <p className="heading-serif-sm text-primary mb-6">{t("re.focus.eyebrow")}</p>
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
              <p className="heading-serif-sm text-primary mb-6">{t("re.lookFor.eyebrow")}</p>
              <div className="gold-line mb-10" />
              <ul className="space-y-6">
                {lookFor.map((f) => (
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
          style={{ backgroundImage: `url(${reDuskLuxury})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/82 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/80" />
        <div className="relative max-w-3xl mx-auto px-6 md:px-10 text-center">
          <SectionHeader
            eyebrow={t("re.partners.eyebrow")}
            title={t("re.partners.title")}
            intro={t("re.partners.body")}
          />
          <Link to="/contact" className="reveal btn-premium group">
            {t("re.cta")}
            <ArrowRight size={13} strokeWidth={1.25} className="transition-transform duration-700 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};

export default RealEstate;
