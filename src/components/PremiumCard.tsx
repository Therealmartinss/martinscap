import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PremiumCardProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

const PremiumCard = ({ eyebrow, title, description, children, className }: PremiumCardProps) => (
  <div
    className={cn(
      "group relative overflow-hidden border border-border/40 bg-card/20 backdrop-blur-[2px]",
      "p-10 md:p-12 transition-all duration-[900ms] ease-out",
      "hover:border-primary/30 hover:bg-card/40 hover:-translate-y-[2px]",
      className,
    )}
  >
    {/* Corner brackets — luxury hallmark */}
    <span className="pointer-events-none absolute top-0 left-0 h-[14px] w-[14px] border-t border-l border-primary/0 group-hover:border-primary/60 transition-colors duration-700" />
    <span className="pointer-events-none absolute top-0 right-0 h-[14px] w-[14px] border-t border-r border-primary/0 group-hover:border-primary/60 transition-colors duration-700" />
    <span className="pointer-events-none absolute bottom-0 left-0 h-[14px] w-[14px] border-b border-l border-primary/0 group-hover:border-primary/60 transition-colors duration-700" />
    <span className="pointer-events-none absolute bottom-0 right-0 h-[14px] w-[14px] border-b border-r border-primary/0 group-hover:border-primary/60 transition-colors duration-700" />

    {/* Top accent line */}
    <div className="absolute top-0 left-0 h-px w-10 bg-primary/50 transition-all duration-[900ms] group-hover:w-full group-hover:opacity-30" />

    {eyebrow && (
      <p className="heading-serif-sm text-primary/70 mb-6">{eyebrow}</p>
    )}
    <h3 className="heading-serif text-2xl md:text-[28px] text-foreground mb-5 leading-[1.2]">
      {title}
    </h3>
    {description && (
      <p className="body-refined text-[15px] leading-[1.8]">
        {description}
      </p>
    )}
    {children}
  </div>
);

export default PremiumCard;
