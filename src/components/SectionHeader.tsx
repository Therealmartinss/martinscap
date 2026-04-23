interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
}

const SectionHeader = ({ eyebrow, title, intro, align = "center" }: SectionHeaderProps) => (
  <div
    className={
      align === "center"
        ? "text-center max-w-3xl mx-auto mb-20 md:mb-24"
        : "max-w-3xl mb-20 md:mb-24"
    }
  >
    {eyebrow && (
      <p className="heading-serif-sm text-primary mb-7 reveal">{eyebrow}</p>
    )}
    {align === "center" && <div className="gold-line mx-auto mb-10 reveal" />}
    {align === "left" && <div className="gold-line mb-10 reveal" />}
    <h2 className="heading-display text-[32px] md:text-[44px] lg:text-[52px] text-foreground reveal">
      {title}
    </h2>
    {intro && (
      <p className="body-refined text-base md:text-[17px] mt-8 reveal">
        {intro}
      </p>
    )}
  </div>
);

export default SectionHeader;
