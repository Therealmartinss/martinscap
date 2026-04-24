import { useLanguage } from "@/contexts/LanguageContext";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import BriefingForm from "@/components/BriefingForm";
import briefingHeroMockup from "@/assets/briefing-hero-mockup.png";
import briefingNetworkMarble from "@/assets/briefing-network-marble.png";
import briefingCityMotion from "@/assets/briefing-city-motion.png";
import briefingMarbleVeins from "@/assets/briefing-marble-veins.png";
import briefingDarkMarbleAccents from "@/assets/briefing-dark-marble-accents.png";

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
        backgroundImage={briefingHeroMockup}
        align="left"
      />

      <section className="section-spacing relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(${briefingNetworkMarble})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="relative max-w-5xl mx-auto px-6 md:px-10">
          <SectionHeader
            eyebrow={t("briefing.receive.eyebrow")}
            title={t("briefing.receive.title")}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/30 border border-border/30 max-w-4xl mx-auto">
            {receive.map((r, i) => (
              <div
                key={r}
                className="reveal bg-background/55 p-10 min-h-[160px] flex items-center gap-6 group hover:bg-card/55 transition-all duration-700"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="heading-serif-sm text-primary/70 text-[10px]">0{i + 1}</span>
                <p className="heading-serif text-[17px] md:text-[19px] text-foreground tracking-wide">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-8 md:gap-12 items-stretch">
          <div className="reveal relative min-h-[360px] md:min-h-[520px] overflow-hidden border border-border/30 bg-card/20 order-2 lg:order-1">
            <img
              src={briefingCityMotion}
              alt="Dark city intelligence landscape with luminous systems lines"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent" />
          </div>

          <div
            className="reveal relative overflow-hidden border border-border/30 bg-card/25 px-6 py-12 md:px-12 md:py-14 order-1 lg:order-2"
            style={{ backgroundImage: `linear-gradient(hsl(var(--background) / 0.84), hsl(var(--background) / 0.92)), url(${briefingMarbleVeins})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <p className="heading-serif-sm text-primary mb-7">{t("briefing.subscribe.eyebrow")}</p>
            <div className="gold-line mb-12" />
            <h2 className="heading-display text-[30px] md:text-[40px] text-foreground mb-10">
              {t("briefing.subscribe.title")}
            </h2>
            <BriefingForm />
          </div>
        </div>
      </section>

      <section className="pb-40 pt-12 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: `url(${briefingDarkMarbleAccents})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/88 to-background" />
        <div className="relative max-w-2xl mx-auto px-6 md:px-10 text-center">
          <p className="heading-display text-xl md:text-2xl italic text-muted-foreground/80 reveal leading-relaxed">
            "{t("briefing.closing")}"
          </p>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Briefing;
