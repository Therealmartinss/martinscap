import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  headline: string;
  intro?: string;
  children?: ReactNode;
  backgroundImage?: string;
  align?: "center" | "left";
  contentClassName?: string;
}

const PageHero = ({
  eyebrow,
  headline,
  intro,
  children,
  backgroundImage,
  align = "center",
  contentClassName,
}: PageHeroProps) => {
  const centered = align === "center";

  return (
    <section className="relative overflow-hidden pt-32 md:pt-44 lg:pt-52 pb-20 md:pb-28">
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.02]"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/80" />
        </>
      )}
      <div
        className={cn(
          "relative z-10 px-6 md:px-10",
          centered ? "max-w-4xl mx-auto text-center" : "max-w-6xl mx-auto text-left",
          contentClassName,
        )}
      >
        {eyebrow && (
          <p className={cn("heading-serif-sm text-primary mb-8 animate-[fadeUp_1.2s_ease-out_both]", centered && "text-center")}>
            {eyebrow}
          </p>
        )}
        <div className={cn("gold-line mb-12 animate-[fadeUp_1.2s_ease-out_0.1s_both]", centered && "mx-auto")} />
        <h1 className={cn("heading-display text-[34px] md:text-[56px] lg:text-[68px] text-foreground animate-[fadeUp_1.4s_ease-out_0.2s_both]", !centered && "max-w-4xl")}>
          {headline}
        </h1>
        {intro && (
          <p className={cn("body-refined text-base md:text-[17px] mt-10 animate-[fadeUp_1.4s_ease-out_0.4s_both]", centered ? "max-w-2xl mx-auto" : "max-w-2xl") }>
            {intro}
          </p>
        )}
        {children && <div className="mt-12 animate-[fadeUp_1.4s_ease-out_0.6s_both]">{children}</div>}</n>
      </div>
    </section>
  );
};

export default PageHero;
