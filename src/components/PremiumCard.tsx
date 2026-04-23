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
      "group relative overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm p-8 md:p-10 transition-all duration-700 hover:border-primary/40 hover:bg-card/50",
      className,
    )}
  >
    {/* Top accent line */}
    <div className="absolute top-0 left-0 h-px w-12 bg-primary/60 transition-all duration-700 group-hover:w-full group-hover:opacity-50" />

    {eyebrow && (
      <p className="heading-serif-sm text-primary/80 mb-4">{eyebrow}</p>
    )}
    <h3 className="heading-serif text-xl md:text-2xl text-foreground mb-4 tracking-wide">
      {title}
    </h3>
    {description && (
      <p className="text-muted-foreground text-sm md:text-[15px] leading-relaxed">
        {description}
      </p>
    )}
    {children}
  </div>
);

export default PremiumCard;
