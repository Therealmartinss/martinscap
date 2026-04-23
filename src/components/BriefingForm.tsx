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
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={cn("reveal text-center py-14", className)}>
        <div className="gold-line mx-auto mb-8 opacity-60" />
        <p className="heading-display text-2xl md:text-[32px] text-primary leading-[1.2] max-w-lg mx-auto">
          {t("briefing.success")}
        </p>
        <p className="body-refined text-sm mt-6 max-w-md mx-auto">
          {t("briefing.successSub")}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "reveal mx-auto space-y-7",
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
        className="input-premium"
      />
      <input
        type="email"
        placeholder={t("briefing.email")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        maxLength={255}
        className="input-premium"
      />
      <select
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
        required
        className={cn("input-premium appearance-none cursor-pointer", !interest && "text-muted-foreground/40")}
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
        <p className="text-destructive text-xs tracking-[0.18em] uppercase">{error}</p>
      )}
      <button type="submit" className="btn-premium w-full mt-4">
        {t("briefing.cta")}
      </button>
    </form>
  );
};

export default BriefingForm;
