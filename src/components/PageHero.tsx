import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  headline: string;
  intro?: string;
  children?: ReactNode;
}

const PageHero = ({ eyebrow, headline, intro, children }: PageHeroProps) => (
  <section className="relative pt-32 md:pt-44 lg:pt-52 pb-20 md:pb-28">
    <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
      {eyebrow && (
        <p className="heading-serif-sm text-primary mb-8 animate-[fadeUp_1.2s_ease-out_both]">
          {eyebrow}
        </p>
      )}
      <div className="gold-line mx-auto mb-12 animate-[fadeUp_1.2s_ease-out_0.1s_both]" />
      <h1 className="heading-display text-[34px] md:text-[56px] lg:text-[68px] text-foreground animate-[fadeUp_1.4s_ease-out_0.2s_both]">
        {headline}
      </h1>
      {intro && (
        <p className="body-refined text-base md:text-[17px] max-w-2xl mx-auto mt-10 animate-[fadeUp_1.4s_ease-out_0.4s_both]">
          {intro}
        </p>
      )}
      {children && (
        <div className="mt-12 animate-[fadeUp_1.4s_ease-out_0.6s_both]">{children}</div>
      )}
    </div>
  </section>
);

export default PageHero;
