import { useLanguage } from "@/contexts/LanguageContext";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import BriefingForm from "@/components/BriefingForm";

const Briefing = () => {
  const { t } = useLanguage();

  const receive = [
    t("briefing.receive.macro"),
    t("briefing.receive.structure"),
    t("briefing.receive.capital"),
    t("briefing.receive.observations"),
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t("briefing.eyebrow")}
        headline={t("briefing.hero.headline")}
        intro={t("briefing.hero.intro")}
      />

      <section className="section-spacing">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <SectionHeader
            eyebrow={t("briefing.receive.eyebrow")}
            title={t("briefing.receive.title")}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/40 border border-border/40 max-w-3xl mx-auto">
            {receive.map((r, i) => (
              <div
                key={r}
                className="reveal bg-background/60 p-8 min-h-[120px] flex items-center gap-5"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="heading-serif-sm text-primary opacity-70">
                  0{i + 1}
                </span>
                <p className="heading-serif text-base md:text-lg text-foreground tracking-wide">
                  {r}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="max-w-2xl mx-auto px-6 md:px-10 text-center">
          <p className="heading-serif-sm text-primary mb-6 reveal">
            {t("briefing.subscribe.eyebrow")}
          </p>
          <div className="gold-line mx-auto mb-10 reveal" />
          <h2 className="heading-serif text-2xl md:text-3xl text-foreground mb-12 reveal">
            {t("briefing.subscribe.title")}
          </h2>
          <BriefingForm />
        </div>
      </section>

      <section className="pb-32 pt-8">
        <div className="max-w-2xl mx-auto px-6 md:px-10 text-center">
          <p className="heading-serif text-lg md:text-xl italic text-muted-foreground reveal">
            “{t("briefing.closing")}”
          </p>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Briefing;
