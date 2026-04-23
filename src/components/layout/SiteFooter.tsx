import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const SiteFooter = () => {
  const { t } = useLanguage();

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/real-estate", label: t("nav.realEstate") },
    { to: "/technology", label: t("nav.technology") },
    { to: "/briefing", label: t("nav.briefing") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <footer className="relative border-t border-border/40 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Brand + briefing CTA */}
        <div className="md:col-span-5 space-y-5">
          <div className="heading-serif-sm tracking-[0.25em] text-foreground">
            MARTINS <span className="text-primary">CAPITAL</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
            {t("footer.tagline")}
          </p>
          <Link
            to="/briefing"
            className="inline-flex items-center gap-3 heading-serif-sm text-primary border border-primary/30 px-5 py-3 hover:bg-primary/5 transition-all duration-500 tracking-[0.2em]"
          >
            {t("footer.briefingCta")}
          </Link>
        </div>

        {/* Navigation */}
        <div className="md:col-span-3">
          <p className="heading-serif-sm text-muted-foreground/70 mb-5">
            {t("footer.navigate")}
          </p>
          <ul className="space-y-3">
            {nav.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <p className="heading-serif-sm text-muted-foreground/70 mb-5">
            {t("footer.contact")}
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href="mailto:contact@martinscap.com.br"
                className="hover:text-primary transition-colors duration-300"
              >
                contact@martinscap.com.br
              </a>
            </li>
            <li>martinscap.com.br</li>
          </ul>
          <div className="flex items-center gap-5 mt-6 text-xs heading-serif-sm tracking-[0.2em] text-muted-foreground/70">
            <a href="#" className="hover:text-primary transition-colors duration-300">LINKEDIN</a>
            <span className="opacity-30">·</span>
            <a href="#" className="hover:text-primary transition-colors duration-300">X</a>
            <span className="opacity-30">·</span>
            <a href="#" className="hover:text-primary transition-colors duration-300">INSTAGRAM</a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/30">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground/70 text-xs tracking-[0.2em]">
            {t("footer.copy")}
          </p>
          <p className="text-muted-foreground/50 text-xs tracking-[0.2em]">
            {t("footer.tagSmall")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
