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
      <section className="relative min-h-[88vh] flex flex-col items-center justify-center text-center px-6 md:px-10 py-20">
        <div className="mb-12 md:mb-16 animate-[fadeUp_2s_ease-out_both]">
          <img
            src={mcLogoFull}
            alt="Martins Capital"
            className="mx-auto w-[280px] md:w-[420px] lg:w-[520px] h-auto"
          />
        </div>
        <h1 className="heading-serif text-2xl md:text-4xl lg:text-5xl text-foreground max-w-4xl leading-[1.2] mb-7 animate-[fadeUp_2s_ease-out_0.4s_both]">
          {t("home.hero.headline")}
        </h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl leading-relaxed animate-[fadeUp_2s_ease-out_0.7s_both]">
          {t("home.hero.sub")}
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 animate-[fadeUp_2s_ease-out_1s_both]">
          <a
            href="#verticals"
            className="group inline-flex items-center justify-center gap-3 heading-serif-sm tracking-[0.25em] text-primary-foreground bg-primary px-8 py-4 hover:bg-primary/90 transition-all duration-500"
          >
            {t("home.hero.ctaPrimary")}
            <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
          </a>
          <Link
            to="/briefing"
            className="inline-flex items-center justify-center gap-3 heading-serif-sm tracking-[0.25em] text-primary border border-primary/30 px-8 py-4 hover:bg-primary/5 transition-all duration-500"
          >
            {t("home.hero.ctaSecondary")}
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-[fadeUp_2s_ease-out_1.5s_both]">
          <div className="w-px h-12 bg-primary opacity-20" />
        </div>
      </section>

      {/* Institutional Overview */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="heading-serif-sm text-primary mb-6 reveal">{t("home.overview.eyebrow")}</p>
          <div className="gold-line mx-auto mb-10 reveal" />
          <h2 className="heading-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight reveal">
            {t("home.overview.title")}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mt-8 max-w-2xl mx-auto reveal">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border/40 border border-border/40">
            {why.map((label, i) => (
              <div
                key={label}
                className="reveal bg-background/60 backdrop-blur-sm p-8 text-center min-h-[160px] flex flex-col items-center justify-center group hover:bg-card/40 transition-colors duration-700"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="heading-serif-sm text-primary mb-3 opacity-70">
                  0{i + 1}
                </span>
                <p className="heading-serif text-base md:text-lg text-foreground leading-snug tracking-wide">
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
          <p className="heading-serif-sm text-primary mb-6 reveal">{t("home.briefing.eyebrow")}</p>
          <div className="gold-line mx-auto mb-10 reveal" />
          <h2 className="heading-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight mb-6 reveal">
            {t("home.briefing.title")}
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto mb-12 reveal">
            {t("home.briefing.body")}
          </p>
          <BriefingForm />
        </div>
      </section>
    </SiteLayout>
  );
};

export default Index;
