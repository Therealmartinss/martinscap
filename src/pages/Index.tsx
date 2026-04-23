import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SiteLayout from "@/components/layout/SiteLayout";
import SectionHeader from "@/components/SectionHeader";
import PremiumCard from "@/components/PremiumCard";
import BriefingForm from "@/components/BriefingForm";
import mcLogoFull from "@/assets/mc-logo-full.png";

const Index = () => {
  const { t } = useLanguage();

  const verticals = [
    {
      to: "/real-estate",
      title: t("home.vertical.realEstate"),
      desc: t("home.vertical.realEstate.desc"),
    },
    {
      to: "/technology",
      title: t("home.vertical.technology"),
      desc: t("home.vertical.technology.desc"),
    },
    {
      to: "/briefing",
      title: t("home.vertical.capitalIntel"),
      desc: t("home.vertical.capitalIntel.desc"),
    },
    {
      to: "/contact",
      title: t("home.vertical.strategicVentures"),
      desc: t("home.vertical.strategicVentures.desc"),
    },
  ];

  const philosophy = [
    {
      title: t("home.philosophy.structure"),
      desc: t("home.philosophy.structure.desc"),
    },
    {
      title: t("home.philosophy.selectivity"),
      desc: t("home.philosophy.selectivity.desc"),
    },
    {
      title: t("home.philosophy.longterm"),
      desc: t("home.philosophy.longterm.desc"),
    },
  ];

  const why = [
    t("home.why.architecture"),
    t("home.why.crossSector"),
    t("home.why.longTerm"),
    t("home.why.discipline"),
    t("home.why.institutional"),
  ];

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-6 md:px-10 py-24">
        <div className="mb-14 md:mb-20 animate-[fadeUp_2s_ease-out_both]">
          <img
            src={mcLogoFull}
            alt="Martins Capital"
            className="mx-auto w-[260px] md:w-[400px] lg:w-[500px] h-auto"
          />
        </div>
        <p className="heading-serif-sm text-primary/80 mb-8 animate-[fadeUp_2s_ease-out_0.3s_both]">
          STRATEGIC HOLDING PLATFORM
        </p>
        <div className="gold-line mx-auto mb-10 animate-[fadeUp_2s_ease-out_0.4s_both]" />
        <h1 className="heading-display text-[28px] md:text-[44px] lg:text-[56px] text-foreground max-w-4xl mb-10 animate-[fadeUp_2s_ease-out_0.5s_both]">
          {t("home.hero.headline")}
        </h1>
        <p className="body-refined text-[15px] md:text-[17px] max-w-2xl animate-[fadeUp_2s_ease-out_0.8s_both]">
          {t("home.hero.sub")}
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-5 mt-14 animate-[fadeUp_2s_ease-out_1.1s_both]">
          <a href="#verticals" className="btn-premium group">
            {t("home.hero.ctaPrimary")}
            <ArrowRight size={13} strokeWidth={1.25} className="transition-transform duration-700 group-hover:translate-x-1" />
          </a>
          <Link to="/briefing" className="btn-ghost-premium">
            {t("home.hero.ctaSecondary")}
          </Link>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-[fadeUp_2s_ease-out_1.6s_both]">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        </div>
      </section>

      {/* Institutional Overview */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="heading-serif-sm text-primary mb-7 reveal">{t("home.overview.eyebrow")}</p>
          <div className="gold-line mx-auto mb-12 reveal" />
          <h2 className="heading-display text-[30px] md:text-[44px] lg:text-[52px] text-foreground reveal">
            {t("home.overview.title")}
          </h2>
          <p className="body-refined text-base md:text-[17px] mt-10 max-w-2xl mx-auto reveal">
            {t("home.overview.body")}
          </p>
        </div>
      </section>

      {/* Verticals */}
      <section id="verticals" className="section-spacing">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader
            eyebrow={t("home.verticals.eyebrow")}
            title={t("home.verticals.title")}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {verticals.map((v, i) => (
              <Link
                key={v.to}
                to={v.to}
                className="reveal group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <PremiumCard
                  eyebrow={`0${i + 1}`}
                  title={v.title}
                  description={v.desc}
                  className="h-full"
                >
                  <div className="mt-8 inline-flex items-center gap-3 text-primary heading-serif-sm tracking-[0.2em] opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                    {t("common.explore")}
                    <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
                  </div>
                </PremiumCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader
            eyebrow={t("home.philosophy.eyebrow")}
            title={t("home.philosophy.title")}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {philosophy.map((p, i) => (
              <div
                key={p.title}
                className="reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <PremiumCard title={p.title} description={p.desc} className="h-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Martins Capital */}
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <SectionHeader
            eyebrow={t("home.why.eyebrow")}
            title={t("home.why.title")}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border/30 border border-border/30">
            {why.map((label, i) => (
              <div
                key={label}
                className="reveal bg-background/40 backdrop-blur-sm p-10 text-center min-h-[200px] flex flex-col items-center justify-center group hover:bg-card/50 transition-all duration-700 relative overflow-hidden"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-0 bg-primary/60 transition-all duration-700 group-hover:w-12" />
                <span className="heading-serif-sm text-primary/70 mb-5 text-[10px]">
                  0{i + 1}
                </span>
                <p className="heading-serif text-[17px] md:text-[19px] text-foreground leading-[1.3] tracking-wide">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Briefing Capture */}
      <section className="section-spacing">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <p className="heading-serif-sm text-primary mb-7 reveal">{t("home.briefing.eyebrow")}</p>
          <div className="gold-line mx-auto mb-12 reveal" />
          <h2 className="heading-display text-[30px] md:text-[44px] lg:text-[52px] text-foreground mb-8 reveal">
            {t("home.briefing.title")}
          </h2>
          <p className="body-refined text-base md:text-[17px] max-w-xl mx-auto mb-16 reveal">
            {t("home.briefing.body")}
          </p>
          <BriefingForm />
        </div>
      </section>
    </SiteLayout>
  );
};

export default Index;
