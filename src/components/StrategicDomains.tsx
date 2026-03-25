import { useLanguage } from "@/contexts/LanguageContext";
import domainRealEstate from "@/assets/domain-real-estate.jpg";
import domainTechnology from "@/assets/domain-technology.jpg";
import domainMarkets from "@/assets/domain-markets.jpg";
import domainQuantitative from "@/assets/domain-quantitative.jpg";

const StrategicDomains = () => {
  const { t } = useLanguage();

  const domains = [
    { title: t("sd.realEstate"), desc: t("sd.realEstate.desc"), img: domainRealEstate },
    { title: t("sd.technology"), desc: t("sd.technology.desc"), img: domainTechnology },
    { title: t("sd.markets"), desc: t("sd.markets.desc"), img: domainMarkets },
    { title: t("sd.quantFinance"), desc: t("sd.quantFinance.desc"), img: domainQuantitative },
  ];

  return (
    <section className="section-spacing">
      <div className="section-wide text-center">
        <p className="heading-serif-sm text-primary mb-6 reveal">{t("section.strategicDomains")}</p>
        <div className="gold-line mx-auto mb-16 reveal" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {domains.map((d, i) => (
            <div key={i} className="reveal relative overflow-hidden rounded-sm group min-h-[240px]">
              {/* Background image — high clarity */}
              <div
                className="absolute inset-0 transition-opacity duration-700"
                style={{
                  backgroundImage: `url(${d.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: i % 2 === 0 ? "30% center" : "70% center",
                  opacity: 0.9,
                  filter: "contrast(1.15) saturate(0.85)",
                }}
              />
              {/* Subtle dark overlay for text contrast */}
              <div className="absolute inset-0 bg-background/40" />
              {/* Bottom gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-background/20" />
              <div className="relative z-10 py-8 px-4">
                <h3 className="heading-serif text-base text-foreground mb-3 tracking-wider">
                  {d.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicDomains;
