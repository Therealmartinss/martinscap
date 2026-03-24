const functions = [
  {
    title: "Capital Allocation",
    desc: "Disciplined deployment of resources across ventures to maximize risk-adjusted returns and long-term compounding.",
  },
  {
    title: "Strategic Direction",
    desc: "Defining the trajectory of each entity within the portfolio through rigorous analysis and decisive leadership.",
  },
  {
    title: "Structural Governance",
    desc: "Establishing frameworks of accountability, compliance, and operational excellence across all holdings.",
  },
  {
    title: "Value Integration",
    desc: "Creating synergies between portfolio companies to unlock compounding advantages at scale.",
  },
];

const CoreFunctions = () => (
  <section className="section-spacing">
    <div className="section-wide text-center">
      <p className="heading-serif-sm text-primary mb-6 reveal">Core Functions</p>
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

export default CoreFunctions;
