import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-1 heading-serif-sm">
      <button
        onClick={() => setLang("en")}
        className={`px-2 py-1 transition-colors duration-300 ${
          lang === "en" ? "text-primary" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
      <span className="text-muted-foreground opacity-30">|</span>
      <button
        onClick={() => setLang("pt")}
        className={`px-2 py-1 transition-colors duration-300 ${
          lang === "pt" ? "text-primary" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        PT
      </button>
    </div>
  );
};

export default LanguageToggle;
