import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "pt";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Hero
  "hero.company": { en: "Martins Capital", pt: "Martins Capital" },
  "hero.headline1": { en: "The Intelligence Layer Behind", pt: "A Camada de Inteligência Por Trás de" },
  "hero.headline2": { en: "Strategic Enterprises", pt: "Empresas Estratégicas" },
  "hero.sub": {
    en: "A holding company responsible for capital allocation, strategic direction, and long-term value creation across a portfolio of businesses.",
    pt: "Uma holding responsável pela alocação de capital, direção estratégica e criação de valor de longo prazo em um portfólio de empresas.",
  },

  // What We Are
  "section.whatWeAre": { en: "What We Are", pt: "O Que Somos" },
  "whatWeAre.text": {
    en: "Martins Capital operates as a central command structure, overseeing and coordinating multiple companies through disciplined capital management and strategic control.",
    pt: "A Martins Capital opera como uma estrutura central de comando, supervisionando e coordenando múltiplas empresas por meio de gestão disciplinada de capital e controle estratégico.",
  },

  // Mission
  "section.mission": { en: "Mission", pt: "Missão" },
  "mission.text": {
    en: "\"To centralize control and optimize capital across multiple businesses, ensuring efficiency, resilience, and long-term growth.\"",
    pt: "\"Centralizar o controle e otimizar o capital em múltiplos negócios, garantindo eficiência, resiliência e crescimento de longo prazo.\"",
  },

  // Vision
  "section.vision": { en: "Vision", pt: "Visão" },
  "vision.text": {
    en: "\"To build an integrated ecosystem of companies operating under a unified strategic and financial architecture.\"",
    pt: "\"Construir um ecossistema integrado de empresas operando sob uma arquitetura estratégica e financeira unificada.\"",
  },

  // Purpose
  "section.purpose": { en: "Purpose", pt: "Propósito" },
  "purpose.line1": { en: "To create structure where there is fragmentation.", pt: "Criar estrutura onde há fragmentação." },
  "purpose.line2": { en: "To bring intelligence to capital allocation.", pt: "Trazer inteligência à alocação de capital." },
  "purpose.line3": { en: "To build systems that compound value across generations.", pt: "Construir sistemas que acumulem valor ao longo de gerações." },

  // Core Functions
  "section.coreFunctions": { en: "Core Functions", pt: "Funções Centrais" },
  "cf.capitalAllocation": { en: "Capital Allocation", pt: "Alocação de Capital" },
  "cf.capitalAllocation.desc": {
    en: "Disciplined deployment of resources across ventures to maximize risk-adjusted returns and long-term compounding.",
    pt: "Implantação disciplinada de recursos em empreendimentos para maximizar retornos ajustados ao risco e capitalização de longo prazo.",
  },
  "cf.strategicDirection": { en: "Strategic Direction", pt: "Direção Estratégica" },
  "cf.strategicDirection.desc": {
    en: "Defining the trajectory of each entity within the portfolio through rigorous analysis and decisive leadership.",
    pt: "Definindo a trajetória de cada entidade no portfólio por meio de análise rigorosa e liderança decisiva.",
  },
  "cf.structuralGovernance": { en: "Structural Governance", pt: "Governança Estrutural" },
  "cf.structuralGovernance.desc": {
    en: "Establishing frameworks of accountability, compliance, and operational excellence across all holdings.",
    pt: "Estabelecendo estruturas de responsabilidade, conformidade e excelência operacional em todas as participações.",
  },
  "cf.valueIntegration": { en: "Value Integration", pt: "Integração de Valor" },
  "cf.valueIntegration.desc": {
    en: "Creating synergies between portfolio companies to unlock compounding advantages at scale.",
    pt: "Criando sinergias entre empresas do portfólio para desbloquear vantagens de capitalização em escala.",
  },

  // Strategic Domains
  "section.strategicDomains": { en: "Strategic Domains", pt: "Domínios Estratégicos" },
  "sd.realEstate": { en: "Real Estate", pt: "Imóveis" },
  "sd.realEstate.desc": {
    en: "Strategic acquisition and management of high-value properties across key markets.",
    pt: "Aquisição estratégica e gestão de propriedades de alto valor em mercados-chave.",
  },
  "sd.technology": { en: "Technology", pt: "Tecnologia" },
  "sd.technology.desc": {
    en: "Investing in scalable digital infrastructure and transformative software platforms.",
    pt: "Investimento em infraestrutura digital escalável e plataformas de software transformadoras.",
  },
  "sd.markets": { en: "Markets", pt: "Mercados" },
  "sd.markets.desc": {
    en: "Systematic participation in global financial markets through disciplined methodologies.",
    pt: "Participação sistemática em mercados financeiros globais por meio de metodologias disciplinadas.",
  },
  "sd.quantFinance": { en: "Quantitative Finance", pt: "Finanças Quantitativas" },
  "sd.quantFinance.desc": {
    en: "Leveraging mathematical models and data-driven strategies for consistent alpha generation.",
    pt: "Utilizando modelos matemáticos e estratégias orientadas por dados para geração consistente de alpha.",
  },

  // Closing
  "closing.line1": { en: "True wealth is not managed.", pt: "A verdadeira riqueza não é gerida." },
  "closing.line2": { en: "It is structured, controlled, and compounded.", pt: "É estruturada, controlada e capitalizada." },

  // Private Market Briefing
  "pmb.title": { en: "Private Market Briefing", pt: "Relatório Privado de Mercado" },
  "pmb.text": {
    en: "Receive structured insights on global markets, capital flows, and strategic positioning.",
    pt: "Receba análises estruturadas sobre mercados globais, fluxos de capital e posicionamento estratégico.",
  },
  "pmb.exclusive1": {
    en: "This is not public content.",
    pt: "Este conteúdo não é público.",
  },
  "pmb.exclusive2": {
    en: "Access is reserved for those aligned with long-term capital intelligence.",
    pt: "O acesso é reservado àqueles alinhados com inteligência de capital de longo prazo.",
  },
  "pmb.firstName": { en: "First Name", pt: "Nome" },
  "pmb.email": { en: "Email", pt: "E-mail" },
  "pmb.submit": { en: "Request Access", pt: "Solicitar Acesso" },
  "pmb.success": {
    en: "Access granted. You will begin receiving strategic briefings shortly.",
    pt: "Acesso concedido. Você começará a receber relatórios estratégicos em breve.",
  },

  // Footer
  "footer.copy": { en: "© 2026 Martins Capital — martinscap.com.br", pt: "© 2026 Martins Capital — martinscap.com.br" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
