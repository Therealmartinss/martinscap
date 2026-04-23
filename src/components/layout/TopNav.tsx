import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const TopNav = () => {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/real-estate", label: t("nav.realEstate") },
    { to: "/technology", label: t("nav.technology") },
    { to: "/briefing", label: t("nav.briefing") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="heading-serif-sm text-foreground hover:text-primary transition-colors duration-700 tracking-[0.32em] text-[11px]"
          aria-label="Martins Capital — Home"
        >
          MARTINS <span className="text-primary">CAPITAL</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-12">
          {links.map((l) => {
            const isActive =
              l.to === "/" ? location.pathname === "/" : location.pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className="group relative heading-serif-sm tracking-[0.24em] text-[10.5px] text-muted-foreground/80 hover:text-foreground transition-colors duration-700"
              >
                <span className={cn(isActive && "text-foreground")}>{l.label}</span>
                <span
                  className={cn(
                    "pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 h-px bg-primary transition-all duration-700",
                    isActive ? "w-6 opacity-80" : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-80",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right cluster: language + mobile menu trigger */}
        <div className="flex items-center gap-5">
          <div className="hidden sm:flex items-center gap-2 heading-serif-sm text-[10.5px]">
            <button
              onClick={() => setLang("en")}
              className={cn(
                "px-1 py-1 transition-colors duration-500",
                lang === "en" ? "text-primary" : "text-muted-foreground/60 hover:text-foreground",
              )}
            >
              EN
            </button>
            <span className="text-muted-foreground/30">/</span>
            <button
              onClick={() => setLang("pt")}
              className={cn(
                "px-1 py-1 transition-colors duration-500",
                lang === "pt" ? "text-primary" : "text-muted-foreground/60 hover:text-foreground",
              )}
            >
              PT
            </button>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-foreground p-2 -mr-2"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} strokeWidth={1.25} /> : <Menu size={20} strokeWidth={1.25} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-border/40 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-out",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col px-6 py-6 gap-1">
          {links.map((l) => {
            const isActive =
              l.to === "/" ? location.pathname === "/" : location.pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "heading-serif-sm tracking-[0.2em] py-3 border-b border-border/30 transition-colors duration-300",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
              </Link>
            );
          })}
          <div className="flex sm:hidden items-center gap-2 pt-5 heading-serif-sm">
            <button
              onClick={() => setLang("en")}
              className={cn(
                "px-3 py-1 transition-colors duration-300",
                lang === "en" ? "text-primary" : "text-muted-foreground",
              )}
            >
              EN
            </button>
            <span className="text-muted-foreground/40">|</span>
            <button
              onClick={() => setLang("pt")}
              className={cn(
                "px-3 py-1 transition-colors duration-300",
                lang === "pt" ? "text-primary" : "text-muted-foreground",
              )}
            >
              PT
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default TopNav;
