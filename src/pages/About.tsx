import { useLanguage } from "@/contexts/LanguageContext";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import PremiumCard from "@/components/PremiumCard";
import aboutAtriumCurves from "@/assets/about-atrium-curves.png";
import aboutGeometricMarble from "@/assets/about-geometric-marble.png";
import aboutMonolith from "@/assets/about-monolith.png";
import aboutCorridor from "@/assets/about-corridor.png";
import aboutNetworkEarth from "@/assets/about-network-earth.png";

const About = () => {
  const { t } = useLanguage();

  const principles = [
    t("about.principles.clarity"),
    t("about.principles.discipline"),
    t("about.principles.selectivity"),
    t("about.principles.longterm"),
    t("about.principles.execution"),
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t("about.eyebrow")}
        headline={t("about.hero.headline")}
        intro={t("about.hero.intro")}
        backgroundImage={aboutAtriumCurves}
        align="left"
      />

      <section className="section-spacing relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
          style={{ backgroundImage: `url(${aboutNetworkEarth})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-10 items-stretch">
          <div className="space-y-6">
            <div className="reveal">
              <PremiumCard
                eyebrow={t("about.mission.eyebrow")}
                title={t("about.mission.title")}
                description={t("about.mission.body")}
                className="h-full"
              />
            </div>
            <div className="reveal" style={{ transitionDelay: "120ms" }}>
              <PremiumCard
                eyebrow={t("about.vision.eyebrow")}
                title={t("about.vision.title")}
                description={t("about.vision.body")}
                className="h-full"
              />
            </div>
          </div>

          <div className="reveal relative min-h-[420px] md:min-h-[560px] overflow-hidden border border-border/30 bg-card/20">
            <img
              src={aboutGeometricMarble}
              alt="Architectural black marble composition with restrained gold detailing"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/15 via-transparent to-background/35" />
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-8 md:gap-12 items-center">
          <div className="reveal relative min-h-[360px] md:min-h-[500px] overflow-hidden border border-border/30 bg-card/20 order-2 lg:order-1">
            <img
              src={aboutMonolith}
              alt="Monolithic dark architectural structure in shadow"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/15 via-transparent to-background/65" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="heading-serif-sm text-primary mb-7 reveal">{t("about.founder.eyebrow")}</p>
            <div className="gold-line mb-12 reveal" />
            <p className="heading-display text-[24px] md:text-[34px] lg:text-[40px] text-foreground/90 italic leading-[1.35] reveal">
              "{t("about.founder.quote")}"
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-8">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[0.86fr_1.14fr] gap-8 md:gap-12 items-start">
          <div className="reveal relative min-h-[320px] md:min-h-[560px] overflow-hidden border border-border/30 bg-card/20">
            <img
              src={aboutCorridor}
              alt="Symmetrical marble corridor with disciplined lighting"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent" />
          </div>

          <div>
            <SectionHeader
              eyebrow={t("about.principles.eyebrow")}
              title={t("about.principles.title")}
            />
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-px bg-border/30 border border-border/30">
              {principles.map((p, i) => (
                <div
                  key={p}
                  className="reveal bg-background/50 p-10 text-center min-h-[180px] flex flex-col items-center justify-center group hover:bg-card/60 transition-all duration-700 relative overflow-hidden"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-0 bg-primary/60 transition-all duration-700 group-hover:w-10" />
                  <span className="heading-serif-sm text-primary/70 mb-4 text-[10px]">0{i + 1}</span>
                  <p className="heading-serif text-[17px] md:text-[19px] text-foreground tracking-wide leading-tight">
                    {p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default About;
