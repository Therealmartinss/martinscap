import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const PrivateMarketBriefing = () => {
  const { t } = useLanguage();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName.trim() && email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="section-spacing">
      <div className="section-narrow text-center">
        <p className="heading-serif-sm text-primary mb-6 reveal">
          {t("pmb.title")}
        </p>
        <div className="gold-line mx-auto mb-12 reveal" />

        <div className="reveal">
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-4">
            {t("pmb.text")}
          </p>
          <p className="text-muted-foreground text-xs leading-relaxed max-w-xl mx-auto mb-2 opacity-60">
            {t("pmb.exclusive1")}
          </p>
          <p className="text-muted-foreground text-xs leading-relaxed max-w-xl mx-auto mb-12 opacity-60">
            {t("pmb.exclusive2")}
          </p>
        </div>

        {submitted ? (
          <div className="reveal">
            <p className="heading-serif text-base md:text-lg text-primary leading-relaxed max-w-md mx-auto animate-[fadeUp_1.5s_ease-out_both]">
              {t("pmb.success")}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="reveal max-w-sm mx-auto space-y-5">
            <input
              type="text"
              placeholder={t("pmb.firstName")}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              maxLength={100}
              className="w-full bg-transparent border-b border-muted/30 text-foreground text-sm py-3 px-1 placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors duration-300"
            />
            <input
              type="email"
              placeholder={t("pmb.email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              maxLength={255}
              className="w-full bg-transparent border-b border-muted/30 text-foreground text-sm py-3 px-1 placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors duration-300"
            />
            <button
              type="submit"
              className="w-full mt-4 py-3 heading-serif-sm text-primary border border-primary/20 bg-transparent hover:bg-primary/5 transition-all duration-500 tracking-[0.2em]"
            >
              {t("pmb.submit")}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default PrivateMarketBriefing;
