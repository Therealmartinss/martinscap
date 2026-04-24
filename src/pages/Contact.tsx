import { useState } from "react";
import { z } from "zod";
import { Mail, Handshake, Newspaper, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/PageHero";
import PremiumCard from "@/components/PremiumCard";
import SectionHeader from "@/components/SectionHeader";
import contactHeroMarble from "@/assets/contact-hero-marble.png";
import contactInquiryMarble from "@/assets/contact-inquiry-marble.png";
import contactDirectMarble from "@/assets/contact-direct-marble.png";
import contactFormMarble from "@/assets/contact-form-marble.png";

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
    { icon: Handshake, title: t("contact.card.partnerships"), desc: t("contact.card.partnerships.desc") },
    { icon: Mail, title: t("contact.card.investment"), desc: t("contact.card.investment.desc") },
    { icon: Newspaper, title: t("contact.card.media"), desc: t("contact.card.media.desc") },
    { icon: MessageSquare, title: t("contact.card.general"), desc: t("contact.card.general.desc") },
  ];

  const handle =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  const inputCls = "input-premium";

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t("contact.eyebrow")}
        headline={t("contact.hero.headline")}
        intro={t("contact.hero.intro")}
        backgroundImage={contactHeroMarble}
        align="left"
      />

      <section className="section-spacing relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45"
          style={{ backgroundImage: `url(${contactInquiryMarble})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader eyebrow={t("contact.cards.eyebrow")} title={t("contact.cards.title")} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  <PremiumCard title={c.title} description={c.desc} className="h-full bg-background/55">
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

      <section className="section-spacing-tight relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45"
          style={{ backgroundImage: `url(${contactDirectMarble})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/88 to-background" />
        <div className="relative max-w-5xl mx-auto px-6 md:px-10">
          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-px bg-border/30 border border-border/30">
            <div className="bg-background/55 p-12 md:p-14 group hover:bg-card/45 transition-all duration-700">
              <p className="heading-serif-sm text-primary/70 mb-5 text-[10px]">{t("contact.direct.phoneLabel")}</p>
              <a href="tel:+19292750461" className="heading-display text-[26px] md:text-[34px] text-foreground hover:text-primary transition-colors duration-500 tracking-wide tabular-nums block">
                +1 929 275 0461
              </a>
              <div className="gold-line mt-8 opacity-50" />
            </div>
            <div className="bg-background/55 p-12 md:p-14 group hover:bg-card/45 transition-all duration-700">
              <p className="heading-serif-sm text-primary/70 mb-5 text-[10px]">{t("contact.direct.emailLabel")}</p>
              <a href="mailto:contact@martinscap.com.br" className="heading-display text-[22px] md:text-[28px] text-foreground hover:text-primary transition-colors duration-500 tracking-wide block break-all">
                contact@martinscap.com.br
              </a>
              <div className="gold-line mt-8 opacity-50" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: `url(${contactFormMarble})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/82 via-background/92 to-background" />
        <div className="relative max-w-2xl mx-auto px-6 md:px-10">
          <SectionHeader eyebrow={t("contact.form.eyebrow")} title={t("contact.form.title")} />

          {submitted ? (
            <div className="reveal text-center py-14">
              <div className="gold-line mx-auto mb-8 opacity-60" />
              <p className="heading-display text-2xl md:text-[32px] text-primary leading-[1.2] max-w-lg mx-auto">{t("contact.success")}</p>
              <p className="body-refined text-sm mt-6 max-w-md mx-auto">{t("contact.successSub")}</p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="reveal space-y-7 border border-border/30 bg-background/55 px-6 py-10 md:px-10 md:py-12"
              noValidate
            >
              <input type="text" placeholder={t("contact.field.name")} value={form.name} onChange={handle("name")} required maxLength={100} className={inputCls} />
              <input type="email" placeholder={t("contact.field.email")} value={form.email} onChange={handle("email")} required maxLength={255} className={inputCls} />
              <input type="text" placeholder={t("contact.field.company")} value={form.company} onChange={handle("company")} maxLength={120} className={inputCls} />
              <select value={form.inquiryType} onChange={handle("inquiryType")} required className={`${inputCls} appearance-none cursor-pointer ${!form.inquiryType ? "text-muted-foreground/40" : ""}`}>
                <option value="" disabled className="bg-background">{t("contact.field.inquiryType")}</option>
                {inquiryTypes.map((it) => (
                  <option key={it} value={it} className="bg-background">{it}</option>
                ))}
              </select>
              <textarea placeholder={t("contact.field.message")} value={form.message} onChange={handle("message")} required rows={5} maxLength={2000} className={`${inputCls} resize-none min-h-[160px] py-4`} />
              {error && <p className="text-destructive text-xs tracking-[0.18em] uppercase">{error}</p>}
              <button type="submit" className="btn-premium w-full mt-4">{t("contact.cta")}</button>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
};

export default Contact;
