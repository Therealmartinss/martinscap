import { useState } from "react";
import { z } from "zod";
import { Mail, Handshake, Newspaper, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/PageHero";
import PremiumCard from "@/components/PremiumCard";
import SectionHeader from "@/components/SectionHeader";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  inquiryType: z.string().trim().min(1).max(80),
  message: z.string().trim().min(1).max(2000),
});

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const inquiryTypes = [
    t("contact.card.partnerships"),
    t("contact.card.investment"),
    t("contact.card.media"),
    t("contact.card.general"),
  ];

  const cards = [
    {
      icon: Handshake,
      title: t("contact.card.partnerships"),
      desc: t("contact.card.partnerships.desc"),
    },
    {
      icon: Mail,
      title: t("contact.card.investment"),
      desc: t("contact.card.investment.desc"),
    },
    {
      icon: Newspaper,
      title: t("contact.card.media"),
      desc: t("contact.card.media.desc"),
    },
    {
      icon: MessageSquare,
      title: t("contact.card.general"),
      desc: t("contact.card.general.desc"),
    },
  ];

  const handle = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [k]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      setError(t("contact.error"));
      return;
    }
    setSubmitted(true);
  };

  const inputCls =
    "w-full bg-transparent border-b border-border/60 text-foreground text-sm py-3 px-1 placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300";

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t("contact.eyebrow")}
        headline={t("contact.hero.headline")}
        intro={t("contact.hero.intro")}
      />

      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader eyebrow={t("contact.cards.eyebrow")} title={t("contact.cards.title")} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <PremiumCard title={c.title} description={c.desc} className="h-full">
                    <div className="absolute top-6 right-6 text-primary/60">
                      <Icon size={18} strokeWidth={1.25} />
                    </div>
                  </PremiumCard>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="max-w-2xl mx-auto px-6 md:px-10">
          <SectionHeader eyebrow={t("contact.form.eyebrow")} title={t("contact.form.title")} />

          {submitted ? (
            <div className="reveal text-center py-10">
              <p className="heading-serif text-xl md:text-2xl text-primary leading-relaxed max-w-lg mx-auto">
                {t("contact.success")}
              </p>
              <p className="text-muted-foreground text-sm mt-4 max-w-md mx-auto">
                {t("contact.successSub")}
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="reveal space-y-6" noValidate>
              <input
                type="text"
                placeholder={t("contact.field.name")}
                value={form.name}
                onChange={handle("name")}
                required
                maxLength={100}
                className={inputCls}
              />
              <input
                type="email"
                placeholder={t("contact.field.email")}
                value={form.email}
                onChange={handle("email")}
                required
                maxLength={255}
                className={inputCls}
              />
              <input
                type="text"
                placeholder={t("contact.field.company")}
                value={form.company}
                onChange={handle("company")}
                maxLength={120}
                className={inputCls}
              />
              <select
                value={form.inquiryType}
                onChange={handle("inquiryType")}
                required
                className={`${inputCls} appearance-none cursor-pointer`}
              >
                <option value="" disabled className="bg-background">
                  {t("contact.field.inquiryType")}
                </option>
                {inquiryTypes.map((it) => (
                  <option key={it} value={it} className="bg-background">
                    {it}
                  </option>
                ))}
              </select>
              <textarea
                placeholder={t("contact.field.message")}
                value={form.message}
                onChange={handle("message")}
                required
                rows={5}
                maxLength={2000}
                className={`${inputCls} resize-none min-h-[140px]`}
              />
              {error && (
                <p className="text-destructive text-xs tracking-wide">{error}</p>
              )}
              <button
                type="submit"
                className="w-full mt-2 py-4 heading-serif-sm text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-500 tracking-[0.25em]"
              >
                {t("contact.cta")}
              </button>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
};

export default Contact;
