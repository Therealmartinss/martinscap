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
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="heading-serif-sm text-foreground hover:text-primary transition-colors duration-500 tracking-[0.25em]"
          aria-label="Martins Capital — Home"
        >
          MARTINS <span className="text-primary">CAPITAL</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => {
            const isActive =
              l.to === "/" ? location.pathname === "/" : location.pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className="group relative heading-serif-sm tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-500"
              >
                <span className={cn(isActive && "text-foreground")}>{l.label}</span>
                <span
                  className={cn(
                    "pointer-events-none absolute -bottom-1 left-0 h-px bg-primary transition-all duration-500",
                    isActive ? "w-full opacity-60" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-60",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right cluster: language + mobile menu trigger */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1 heading-serif-sm">
            <button
              onClick={() => setLang("en")}
              className={cn(
                "px-2 py-1 transition-colors duration-300",
                lang === "en" ? "text-primary" : "text-muted-foreground hover:text-foreground",
              )}
            >
              EN
            </button>
            <span className="text-muted-foreground/40">|</span>
            <button
              onClick={() => setLang("pt")}
              className={cn(
                "px-2 py-1 transition-colors duration-300",
                lang === "pt" ? "text-primary" : "text-muted-foreground hover:text-foreground",
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
            {open ? <X size={20} /> : <Menu size={20} />}
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
