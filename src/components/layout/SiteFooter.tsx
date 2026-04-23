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
    <footer className="relative mt-16 md:mt-24">
      {/* Top hairline gradient */}
      <div className="divider-thin opacity-60" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-16 grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-10">
        {/* Brand + briefing CTA */}
        <div className="md:col-span-5 space-y-7">
          <div className="heading-serif-sm tracking-[0.32em] text-foreground text-[11px]">
            MARTINS <span className="text-primary">CAPITAL</span>
          </div>
          <p className="body-refined text-[15px] max-w-sm">
            {t("footer.tagline")}
          </p>
          <Link
            to="/briefing"
            className="btn-ghost-premium text-[10.5px] px-7 py-3.5"
          >
            {t("footer.briefingCta")}
          </Link>
        </div>

        {/* Navigation */}
        <div className="md:col-span-3">
          <p className="heading-serif-sm text-muted-foreground/50 mb-7 text-[10px]">
            {t("footer.navigate")}
          </p>
          <ul className="space-y-4">
            {nav.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="group inline-flex items-center gap-2 text-[13px] text-muted-foreground/80 hover:text-primary transition-colors duration-500 tracking-wide"
                >
                  <span className="h-px w-0 bg-primary transition-all duration-500 group-hover:w-3" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <p className="heading-serif-sm text-muted-foreground/50 mb-7 text-[10px]">
            {t("footer.contact")}
          </p>
          <ul className="space-y-4 text-[13px] text-muted-foreground/80">
            <li>
              <a
                href="mailto:contact@martinscap.com.br"
                className="hover:text-primary transition-colors duration-500 tracking-wide"
              >
                contact@martinscap.com.br
              </a>
            </li>
            <li className="tracking-wide">martinscap.com.br</li>
          </ul>
          <div className="flex items-center gap-5 mt-9 text-[10px] heading-serif-sm tracking-[0.28em] text-muted-foreground/50">
            <a href="#" className="hover:text-primary transition-colors duration-500">LINKEDIN</a>
            <span className="opacity-30">·</span>
            <a href="#" className="hover:text-primary transition-colors duration-500">X</a>
            <span className="opacity-30">·</span>
            <a href="#" className="hover:text-primary transition-colors duration-500">INSTAGRAM</a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-7 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground/60 text-[10.5px] tracking-[0.28em] uppercase">
            {t("footer.copy")}
          </p>
          <p className="text-muted-foreground/40 text-[10.5px] tracking-[0.28em]">
            {t("footer.tagSmall")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
