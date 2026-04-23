import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TexturedBackground from "@/components/TexturedBackground";
import TopNav from "./TopNav";
import SiteFooter from "./SiteFooter";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SiteLayoutProps {
  children: ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  useScrollReveal();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="relative min-h-screen flex flex-col">
      <TexturedBackground />
      <TopNav />
      <main className="relative z-10 flex-1 pt-20 md:pt-24">{children}</main>
      <div className="relative z-10">
        <SiteFooter />
      </div>
    </div>
  );
};

export default SiteLayout;
