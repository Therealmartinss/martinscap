import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 text-center">
      <p className="text-muted-foreground text-xs tracking-widest opacity-40">
        {t("footer.copy")}
      </p>
    </footer>
  );
};

export default Footer;
