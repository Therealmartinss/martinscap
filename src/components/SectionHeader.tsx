interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
}

const SectionHeader = ({ eyebrow, title, intro, align = "center" }: SectionHeaderProps) => (
  <div className={align === "center" ? "text-center max-w-3xl mx-auto mb-14" : "max-w-3xl mb-14"}>
    {eyebrow && (
      <p className="heading-serif-sm text-primary mb-5 reveal">{eyebrow}</p>
    )}
    {align === "center" && <div className="gold-line mx-auto mb-8 reveal" />}
    {align === "left" && <div className="gold-line mb-8 reveal" />}
    <h2 className="heading-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight reveal">
      {title}
    </h2>
    {intro && (
      <p className="text-muted-foreground text-base leading-relaxed mt-6 reveal">
        {intro}
      </p>
    )}
  </div>
);

export default SectionHeader;
