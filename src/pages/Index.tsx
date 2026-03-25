import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import TexturedBackground from "@/components/TexturedBackground";
import HeroSection from "@/components/HeroSection";
import SectionBlock from "@/components/SectionBlock";
import CoreFunctions from "@/components/CoreFunctions";
import StrategicDomains from "@/components/StrategicDomains";
import PrivateMarketBriefing from "@/components/PrivateMarketBriefing";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";

const Index = () => {
  useScrollReveal();
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen">
      <TexturedBackground />
      <LanguageToggle />

      <div className="relative z-10">
        <HeroSection />

        <SectionBlock label={t("section.whatWeAre")}>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {t("whatWeAre.text")}
          </p>
        </SectionBlock>

        <SectionBlock label={t("section.mission")}>
          <p className="heading-serif text-lg md:text-xl text-foreground leading-relaxed max-w-2xl mx-auto italic">
            {t("mission.text")}
          </p>
        </SectionBlock>

        <SectionBlock label={t("section.vision")}>
          <p className="heading-serif text-lg md:text-xl text-foreground leading-relaxed max-w-2xl mx-auto italic">
            {t("vision.text")}
          </p>
        </SectionBlock>

        <SectionBlock label={t("section.purpose")}>
          <div className="heading-serif text-lg md:text-xl text-foreground leading-relaxed max-w-2xl mx-auto space-y-2">
            <p>{t("purpose.line1")}</p>
            <p>{t("purpose.line2")}</p>
            <p>{t("purpose.line3")}</p>
          </div>
        </SectionBlock>

        <CoreFunctions />

        <StrategicDomains />

        <SectionBlock>
          <div className="py-8">
            <div className="gold-line mx-auto mb-12" />
            <p className="heading-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed max-w-2xl mx-auto">
              {t("closing.line1")}
              <br />
              <span className="text-primary">
                {t("closing.line2")}
              </span>
            </p>
          </div>
        </SectionBlock>

        <PrivateMarketBriefing />

        <Footer />
      </div>
    </div>
  );
};

export default Index;
