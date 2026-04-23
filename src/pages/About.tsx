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
          <p className="heading-serif-sm text-primary mb-6 reveal">
            {t("about.founder.eyebrow")}
          </p>
          <div className="gold-line mx-auto mb-10 reveal" />
          <p className="heading-serif text-xl md:text-2xl lg:text-3xl text-foreground italic leading-relaxed reveal">
            “{t("about.founder.quote")}”
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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border/40 border border-border/40">
            {principles.map((p, i) => (
              <div
                key={p}
                className="reveal bg-background/60 p-8 text-center min-h-[140px] flex flex-col items-center justify-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="heading-serif-sm text-primary mb-3 opacity-70">
                  0{i + 1}
                </span>
                <p className="heading-serif text-base md:text-lg text-foreground tracking-wide">
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
