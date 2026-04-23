import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import PremiumCard from "@/components/PremiumCard";

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
      />

      <section className="section-spacing">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <PremiumCard
            eyebrow={t("re.thesis.eyebrow")}
            title={t("re.thesis.title")}
            description={t("re.thesis.body")}
            className="reveal"
          />
        </div>
      </section>

      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="reveal">
            <p className="heading-serif-sm text-primary mb-5">{t("re.focus.eyebrow")}</p>
            <div className="gold-line mb-8" />
            <ul className="space-y-5">
              {focus.map((f) => (
                <li key={f} className="flex items-start gap-4">
                  <span className="text-primary heading-serif-sm pt-1">—</span>
                  <span className="heading-serif text-lg text-foreground tracking-wide">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal" style={{ transitionDelay: "120ms" }}>
            <p className="heading-serif-sm text-primary mb-5">{t("re.lookFor.eyebrow")}</p>
            <div className="gold-line mb-8" />
            <ul className="space-y-5">
              {lookFor.map((f) => (
                <li key={f} className="flex items-start gap-4">
                  <span className="text-primary heading-serif-sm pt-1">—</span>
                  <span className="heading-serif text-lg text-foreground tracking-wide">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <SectionHeader
            eyebrow={t("re.partners.eyebrow")}
            title={t("re.partners.title")}
            intro={t("re.partners.body")}
          />
          <Link
            to="/contact"
            className="reveal inline-flex items-center gap-3 heading-serif-sm tracking-[0.25em] text-primary-foreground bg-primary px-8 py-4 hover:bg-primary/90 transition-all duration-500"
          >
            {t("re.cta")}
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};

export default RealEstate;
