const domains = [
  {
    title: "Real Estate",
    desc: "Strategic acquisition and management of high-value properties across key markets.",
  },
  {
    title: "Technology",
    desc: "Investing in scalable digital infrastructure and transformative software platforms.",
  },
  {
    title: "Markets",
    desc: "Systematic participation in global financial markets through disciplined methodologies.",
  },
  {
    title: "Quantitative Finance",
    desc: "Leveraging mathematical models and data-driven strategies for consistent alpha generation.",
  },
];

const StrategicDomains = () => (
  <section className="section-spacing">
    <div className="section-wide text-center">
      <p className="heading-serif-sm text-primary mb-6 reveal">Strategic Domains</p>
      <div className="gold-line mx-auto mb-16 reveal" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {domains.map((d, i) => (
          <div key={i} className="reveal">
            <h3 className="heading-serif text-base text-foreground mb-3 tracking-wider">
              {d.title}
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              {d.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StrategicDomains;
