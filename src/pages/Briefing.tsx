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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/30 border border-border/30 max-w-3xl mx-auto">
            {receive.map((r, i) => (
              <div
                key={r}
                className="reveal bg-background/40 p-10 min-h-[140px] flex items-center gap-6 group hover:bg-card/50 transition-all duration-700"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="heading-serif-sm text-primary/70 text-[10px]">
                  0{i + 1}
                </span>
                <p className="heading-serif text-[17px] md:text-[19px] text-foreground tracking-wide">
                  {r}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="max-w-2xl mx-auto px-6 md:px-10 text-center">
          <p className="heading-serif-sm text-primary mb-7 reveal">
            {t("briefing.subscribe.eyebrow")}
          </p>
          <div className="gold-line mx-auto mb-12 reveal" />
          <h2 className="heading-display text-[30px] md:text-[40px] text-foreground mb-14 reveal">
            {t("briefing.subscribe.title")}
          </h2>
          <BriefingForm />
        </div>
      </section>

      <section className="pb-40 pt-12">
        <div className="max-w-2xl mx-auto px-6 md:px-10 text-center">
          <p className="heading-display text-xl md:text-2xl italic text-muted-foreground/80 reveal leading-relaxed">
            "{t("briefing.closing")}"
          </p>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Briefing;
