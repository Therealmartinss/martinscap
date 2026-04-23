import { useLanguage } from "@/contexts/LanguageContext";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import PremiumCard from "@/components/PremiumCard";

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
      />

      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="reveal">
            <PremiumCard
              eyebrow={t("about.mission.eyebrow")}
              title={t("about.mission.title")}
              description={t("about.mission.body")}
              className="h-full"
            />
          </div>
          <div className="reveal" style={{ transitionDelay: "100ms" }}>
            <PremiumCard
              eyebrow={t("about.vision.eyebrow")}
              title={t("about.vision.title")}
              description={t("about.vision.body")}
              className="h-full"
            />
          </div>
        </div>
      </section>

      {/* Founder Perspective */}
      <section className="section-spacing">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <p className="heading-serif-sm text-primary mb-7 reveal">
            {t("about.founder.eyebrow")}
          </p>
          <div className="gold-line mx-auto mb-12 reveal" />
          <p className="heading-display text-[22px] md:text-[30px] lg:text-[36px] text-foreground/90 italic leading-[1.4] reveal">
            "{t("about.founder.quote")}"
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <SectionHeader
            eyebrow={t("about.principles.eyebrow")}
            title={t("about.principles.title")}
          />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border/30 border border-border/30">
            {principles.map((p, i) => (
              <div
                key={p}
                className="reveal bg-background/40 p-10 text-center min-h-[180px] flex flex-col items-center justify-center group hover:bg-card/50 transition-all duration-700 relative overflow-hidden"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-0 bg-primary/60 transition-all duration-700 group-hover:w-10" />
                <span className="heading-serif-sm text-primary/70 mb-4 text-[10px]">
                  0{i + 1}
                </span>
                <p className="heading-serif text-[17px] md:text-[19px] text-foreground tracking-wide leading-tight">
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default About;
