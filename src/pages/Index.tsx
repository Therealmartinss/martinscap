import { useScrollReveal } from "@/hooks/useScrollReveal";
import TexturedBackground from "@/components/TexturedBackground";
import HeroSection from "@/components/HeroSection";
import SectionBlock from "@/components/SectionBlock";
import CoreFunctions from "@/components/CoreFunctions";
import StrategicDomains from "@/components/StrategicDomains";
import Footer from "@/components/Footer";

const Index = () => {
  useScrollReveal();

  return (
    <div className="relative min-h-screen">
      <TexturedBackground />

      <div className="relative z-10">
        <HeroSection />

        <SectionBlock label="What We Are">
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Martins Capital operates as a central command structure, overseeing
            and coordinating multiple companies through disciplined capital
            management and strategic control.
          </p>
        </SectionBlock>

        <SectionBlock label="Mission">
          <p className="heading-serif text-lg md:text-xl text-foreground leading-relaxed max-w-2xl mx-auto italic">
            "To centralize control and optimize capital across multiple
            businesses, ensuring efficiency, resilience, and long-term growth."
          </p>
        </SectionBlock>

        <SectionBlock label="Vision">
          <p className="heading-serif text-lg md:text-xl text-foreground leading-relaxed max-w-2xl mx-auto italic">
            "To build an integrated ecosystem of companies operating under a
            unified strategic and financial architecture."
          </p>
        </SectionBlock>

        <SectionBlock label="Purpose">
          <div className="heading-serif text-lg md:text-xl text-foreground leading-relaxed max-w-2xl mx-auto space-y-2">
            <p>To create structure where there is fragmentation.</p>
            <p>To bring intelligence to capital allocation.</p>
            <p>To build systems that compound value across generations.</p>
          </div>
        </SectionBlock>

        <CoreFunctions />

        <StrategicDomains />

        <SectionBlock>
          <div className="py-8">
            <div className="gold-line mx-auto mb-12" />
            <p className="heading-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed max-w-2xl mx-auto">
              True wealth is not managed.
              <br />
              <span className="text-primary">
                It is structured, controlled, and compounded.
              </span>
            </p>
          </div>
        </SectionBlock>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
