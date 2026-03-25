import { useLanguage } from "@/contexts/LanguageContext";

const CoreFunctions = () => {
  const { t } = useLanguage();

  const functions = [
    { title: t("cf.capitalAllocation"), desc: t("cf.capitalAllocation.desc") },
    { title: t("cf.strategicDirection"), desc: t("cf.strategicDirection.desc") },
    { title: t("cf.structuralGovernance"), desc: t("cf.structuralGovernance.desc") },
    { title: t("cf.valueIntegration"), desc: t("cf.valueIntegration.desc") },
  ];

  return (
    <section className="section-spacing">
      <div className="section-wide text-center">
        <p className="heading-serif-sm text-primary mb-6 reveal">{t("section.coreFunctions")}</p>
        <div className="gold-line mx-auto mb-16 reveal" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {functions.map((fn, i) => (
            <div key={i} className="reveal text-left md:text-center">
              <h3 className="heading-serif text-lg text-foreground mb-3 tracking-wider">
                {fn.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {fn.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFunctions;
