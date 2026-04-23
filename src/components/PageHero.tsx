import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  headline: string;
  intro?: string;
  children?: ReactNode;
}

const PageHero = ({ eyebrow, headline, intro, children }: PageHeroProps) => (
  <section className="relative pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-20">
    <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
      {eyebrow && (
        <p className="heading-serif-sm text-primary mb-6 reveal">{eyebrow}</p>
      )}
      <div className="gold-line mx-auto mb-10 reveal" />
      <h1 className="heading-serif text-3xl md:text-5xl lg:text-6xl text-foreground leading-[1.15] reveal">
        {headline}
      </h1>
      {intro && (
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-8 reveal">
          {intro}
        </p>
      )}
      {children && <div className="mt-10 reveal">{children}</div>}
    </div>
  </section>
);

export default PageHero;
