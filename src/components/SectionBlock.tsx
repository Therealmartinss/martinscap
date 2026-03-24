interface SectionBlockProps {
  label?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const SectionBlock = ({ label, title, children, className = "" }: SectionBlockProps) => (
  <section className={`section-spacing ${className}`}>
    <div className="section-narrow text-center">
      {label && (
        <p className="heading-serif-sm text-primary mb-6 reveal">{label}</p>
      )}
      {title && (
        <>
          <div className="gold-line mx-auto mb-10 reveal" />
          <h2 className="heading-serif text-xl md:text-2xl lg:text-3xl text-foreground mb-10 reveal">
            {title}
          </h2>
        </>
      )}
      <div className="reveal">{children}</div>
    </div>
  </section>
);

export default SectionBlock;
