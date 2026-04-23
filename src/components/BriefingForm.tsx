import { useState } from "react";
import { z } from "zod";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface BriefingFormProps {
  variant?: "compact" | "full";
  className?: string;
}

const interestKeys = [
  "briefing.interest.realEstate",
  "briefing.interest.technology",
  "briefing.interest.capitalIntel",
  "briefing.interest.partnerships",
];

const schema = z.object({
  firstName: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(255),
  interest: z.string().trim().min(1).max(80),
});

const BriefingForm = ({ variant = "full", className }: BriefingFormProps) => {
  const { t } = useLanguage();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const parsed = schema.safeParse({ firstName, email, interest });
    if (!parsed.success) {
      setError(t("briefing.error"));
      return;
    }
    // Lead capture: ready to wire to Lovable Cloud later
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={cn("reveal text-center py-10", className)}>
        <p className="heading-serif text-xl md:text-2xl text-primary leading-relaxed max-w-lg mx-auto">
          {t("briefing.success")}
        </p>
        <p className="text-muted-foreground text-sm mt-4 max-w-md mx-auto">
          {t("briefing.successSub")}
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full bg-transparent border-b border-border/60 text-foreground text-sm py-3 px-1 placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300";

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "reveal mx-auto space-y-6",
        variant === "full" ? "max-w-md" : "max-w-sm",
        className,
      )}
      noValidate
    >
      <input
        type="text"
        placeholder={t("briefing.firstName")}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
        maxLength={80}
        className={inputCls}
      />
      <input
        type="email"
        placeholder={t("briefing.email")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        maxLength={255}
        className={inputCls}
      />
      <select
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
        required
        className={cn(inputCls, "appearance-none cursor-pointer")}
      >
        <option value="" disabled className="bg-background">
          {t("briefing.interestPlaceholder")}
        </option>
        {interestKeys.map((k) => (
          <option key={k} value={t(k)} className="bg-background">
            {t(k)}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-destructive text-xs tracking-wide">{error}</p>
      )}
      <button
        type="submit"
        className="w-full mt-2 py-4 heading-serif-sm text-primary border border-primary/30 bg-transparent hover:bg-primary/5 transition-all duration-500 tracking-[0.25em]"
      >
        {t("briefing.cta")}
      </button>
    </form>
  );
};

export default BriefingForm;
