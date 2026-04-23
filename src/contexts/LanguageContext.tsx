import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "pt";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Common
  "common.explore": { en: "EXPLORE", pt: "EXPLORAR" },

  // Navigation
  "nav.home": { en: "HOME", pt: "INÍCIO" },
  "nav.about": { en: "ABOUT", pt: "SOBRE" },
  "nav.realEstate": { en: "REAL ESTATE", pt: "IMÓVEIS" },
  "nav.technology": { en: "TECHNOLOGY", pt: "TECNOLOGIA" },
  "nav.briefing": { en: "BRIEFING", pt: "RELATÓRIO" },
  "nav.contact": { en: "CONTACT", pt: "CONTATO" },

  // Footer
  "footer.tagline": {
    en: "A strategic holding platform building enduring value across selected sectors.",
    pt: "Uma plataforma de holding estratégica construindo valor duradouro em setores selecionados.",
  },
  "footer.briefingCta": { en: "JOIN THE BRIEFING", pt: "RECEBER O RELATÓRIO" },
  "footer.navigate": { en: "NAVIGATION", pt: "NAVEGAÇÃO" },
  "footer.contact": { en: "CONTACT", pt: "CONTATO" },
  "footer.copy": { en: "© 2026 Martins Capital — martinscap.com.br", pt: "© 2026 Martins Capital — martinscap.com.br" },
  "footer.tagSmall": { en: "STRUCTURE · SELECTIVITY · LONG-TERM VALUE", pt: "ESTRUTURA · SELETIVIDADE · VALOR DE LONGO PRAZO" },

  // ===== HOME =====
  "home.hero.headline": {
    en: "Building strategic structures, capital platforms, and long-term value.",
    pt: "Construindo estruturas estratégicas, plataformas de capital e valor de longo prazo.",
  },
  "home.hero.sub": {
    en: "Martins Capital is a strategic holding platform focused on real estate, technology, capital intelligence, and long-term value creation through disciplined structure, vision, and execution.",
    pt: "A Martins Capital é uma plataforma de holding estratégica focada em imóveis, tecnologia, inteligência de capital e criação de valor de longo prazo através de estrutura disciplinada, visão e execução.",
  },
  "home.hero.ctaPrimary": { en: "EXPLORE OUR VERTICALS", pt: "EXPLORAR VERTICAIS" },
  "home.hero.ctaSecondary": { en: "JOIN THE BRIEFING", pt: "RECEBER O RELATÓRIO" },

  "home.overview.eyebrow": { en: "INSTITUTIONAL OVERVIEW", pt: "VISÃO INSTITUCIONAL" },
  "home.overview.title": {
    en: "A strategic platform for building enduring value",
    pt: "Uma plataforma estratégica para construir valor duradouro",
  },
  "home.overview.body": {
    en: "We operate with a long-term perspective across selected sectors where structure, intelligence, and disciplined execution create asymmetrical value. Our approach combines vision, selectivity, and strategic architecture to build meaningful platforms over time.",
    pt: "Operamos com perspectiva de longo prazo em setores selecionados onde estrutura, inteligência e execução disciplinada criam valor assimétrico. Nossa abordagem combina visão, seletividade e arquitetura estratégica para construir plataformas significativas ao longo do tempo.",
  },

  "home.verticals.eyebrow": { en: "CORE VERTICALS", pt: "VERTICAIS CENTRAIS" },
  "home.verticals.title": {
    en: "Selected sectors. Disciplined focus.",
    pt: "Setores selecionados. Foco disciplinado.",
  },
  "home.vertical.realEstate": { en: "Real Estate", pt: "Imóveis" },
  "home.vertical.realEstate.desc": {
    en: "Structured real estate opportunities, long-term asset vision, and strategic value creation.",
    pt: "Oportunidades imobiliárias estruturadas, visão de ativos de longo prazo e criação estratégica de valor.",
  },
  "home.vertical.technology": { en: "Technology", pt: "Tecnologia" },
  "home.vertical.technology.desc": {
    en: "Digital platforms, software, SaaS, and technology-led opportunities with scalable potential.",
    pt: "Plataformas digitais, software, SaaS e oportunidades lideradas por tecnologia com potencial escalável.",
  },
  "home.vertical.capitalIntel": { en: "Capital Intelligence", pt: "Inteligência de Capital" },
  "home.vertical.capitalIntel.desc": {
    en: "Macro awareness, strategic thinking, and market intelligence as part of disciplined capital allocation.",
    pt: "Consciência macro, pensamento estratégico e inteligência de mercado como parte da alocação disciplinada de capital.",
  },
  "home.vertical.strategicVentures": { en: "Strategic Ventures", pt: "Empreendimentos Estratégicos" },
  "home.vertical.strategicVentures.desc": {
    en: "Selective initiatives aligned with long-term compounding, positioning, and structural growth.",
    pt: "Iniciativas seletivas alinhadas com capitalização de longo prazo, posicionamento e crescimento estrutural.",
  },

  "home.philosophy.eyebrow": { en: "OUR PHILOSOPHY", pt: "NOSSA FILOSOFIA" },
  "home.philosophy.title": {
    en: "Principles that shape every decision",
    pt: "Princípios que moldam cada decisão",
  },
  "home.philosophy.structure": { en: "Structure before scale", pt: "Estrutura antes da escala" },
  "home.philosophy.structure.desc": {
    en: "We believe durable growth begins with intelligent structure.",
    pt: "Acreditamos que o crescimento duradouro começa com estrutura inteligente.",
  },
  "home.philosophy.selectivity": { en: "Selectivity over noise", pt: "Seletividade acima do ruído" },
  "home.philosophy.selectivity.desc": {
    en: "We focus on what is aligned, strategic, and capable of compounding over time.",
    pt: "Focamos no que é alinhado, estratégico e capaz de capitalizar ao longo do tempo.",
  },
  "home.philosophy.longterm": { en: "Long-term value", pt: "Valor de longo prazo" },
  "home.philosophy.longterm.desc": {
    en: "Our lens is not short-term visibility, but enduring relevance and asset quality.",
    pt: "Nossa lente não é visibilidade de curto prazo, mas relevância duradoura e qualidade de ativo.",
  },

  "home.why.eyebrow": { en: "WHY MARTINS CAPITAL", pt: "POR QUE MARTINS CAPITAL" },
  "home.why.title": {
    en: "A platform built on intentional architecture",
    pt: "Uma plataforma construída sobre arquitetura intencional",
  },
  "home.why.architecture": { en: "Strategic architecture", pt: "Arquitetura estratégica" },
  "home.why.crossSector": { en: "Cross-sector perspective", pt: "Perspectiva intersetorial" },
  "home.why.longTerm": { en: "Long-term orientation", pt: "Orientação de longo prazo" },
  "home.why.discipline": { en: "Disciplined execution", pt: "Execução disciplinada" },
  "home.why.institutional": { en: "Institutional mindset", pt: "Mentalidade institucional" },

  "home.briefing.eyebrow": { en: "PRIVATE BRIEFING", pt: "RELATÓRIO PRIVADO" },
  "home.briefing.title": {
    en: "Join the Martins Capital Briefing",
    pt: "Receba o Relatório Martins Capital",
  },
  "home.briefing.body": {
    en: "Receive selected macro insights, market structure perspectives, and strategic intelligence directly from Martins Capital.",
    pt: "Receba insights macro selecionados, perspectivas de estrutura de mercado e inteligência estratégica diretamente da Martins Capital.",
  },

  // ===== ABOUT =====
  "about.eyebrow": { en: "ABOUT MARTINS CAPITAL", pt: "SOBRE A MARTINS CAPITAL" },
  "about.hero.headline": {
    en: "Built on structure, vision, and long-term thinking",
    pt: "Construída sobre estrutura, visão e pensamento de longo prazo",
  },
  "about.hero.intro": {
    en: "Martins Capital is a strategic holding and value-building platform designed to operate with discipline across selected sectors where intelligence, structure, and execution matter.",
    pt: "A Martins Capital é uma plataforma estratégica de holding e construção de valor desenhada para operar com disciplina em setores selecionados onde inteligência, estrutura e execução importam.",
  },
  "about.mission.eyebrow": { en: "MISSION", pt: "MISSÃO" },
  "about.mission.title": { en: "Our Mission", pt: "Nossa Missão" },
  "about.mission.body": {
    en: "To build and support strategic platforms, opportunities, and long-term value through clarity, selectivity, and disciplined capital thinking.",
    pt: "Construir e apoiar plataformas estratégicas, oportunidades e valor de longo prazo através de clareza, seletividade e pensamento disciplinado de capital.",
  },
  "about.vision.eyebrow": { en: "VISION", pt: "VISÃO" },
  "about.vision.title": { en: "Our Vision", pt: "Nossa Visão" },
  "about.vision.body": {
    en: "To become a reference in strategic structure, capital intelligence, and long-term value creation across carefully selected sectors.",
    pt: "Tornar-se referência em estrutura estratégica, inteligência de capital e criação de valor de longo prazo em setores cuidadosamente selecionados.",
  },
  "about.founder.eyebrow": { en: "FOUNDER PERSPECTIVE", pt: "PERSPECTIVA DO FUNDADOR" },
  "about.founder.quote": {
    en: "Martins Capital was conceived as more than a company. It is a strategic platform built around long-term thinking, intelligent structure, and the disciplined pursuit of meaningful value. We believe that real strength is built through clarity, conviction, and architecture that endures.",
    pt: "A Martins Capital foi concebida como mais do que uma empresa. É uma plataforma estratégica construída em torno de pensamento de longo prazo, estrutura inteligente e busca disciplinada por valor significativo. Acreditamos que a verdadeira força é construída através de clareza, convicção e arquitetura que perdura.",
  },
  "about.principles.eyebrow": { en: "CORE PRINCIPLES", pt: "PRINCÍPIOS CENTRAIS" },
  "about.principles.title": { en: "What we operate by", pt: "O que nos guia" },
  "about.principles.clarity": { en: "Clarity", pt: "Clareza" },
  "about.principles.discipline": { en: "Discipline", pt: "Disciplina" },
  "about.principles.selectivity": { en: "Selectivity", pt: "Seletividade" },
  "about.principles.longterm": { en: "Long-term vision", pt: "Visão de longo prazo" },
  "about.principles.execution": { en: "Strategic execution", pt: "Execução estratégica" },

  // ===== REAL ESTATE =====
  "re.eyebrow": { en: "REAL ESTATE", pt: "IMÓVEIS" },
  "re.hero.headline": {
    en: "Real Estate with structure, selectivity, and long-term vision",
    pt: "Imóveis com estrutura, seletividade e visão de longo prazo",
  },
  "re.hero.intro": {
    en: "We approach real estate through a strategic lens, focused on opportunities where positioning, discipline, and thoughtful structure can generate enduring value.",
    pt: "Abordamos imóveis através de uma lente estratégica, focados em oportunidades onde posicionamento, disciplina e estrutura cuidadosa podem gerar valor duradouro.",
  },
  "re.thesis.eyebrow": { en: "THESIS", pt: "TESE" },
  "re.thesis.title": { en: "Our Real Estate Thesis", pt: "Nossa Tese Imobiliária" },
  "re.thesis.body": {
    en: "We seek real estate opportunities where strategic vision, intelligent execution, and asset quality can create long-term value. Our interest is not in noise, but in assets and structures that can be strengthened, repositioned, or developed with discipline.",
    pt: "Buscamos oportunidades imobiliárias onde visão estratégica, execução inteligente e qualidade do ativo podem criar valor de longo prazo. Nosso interesse não é o ruído, mas ativos e estruturas que podem ser fortalecidos, reposicionados ou desenvolvidos com disciplina.",
  },
  "re.focus.eyebrow": { en: "AREAS OF FOCUS", pt: "ÁREAS DE FOCO" },
  "re.focus.repositioning": { en: "Asset repositioning", pt: "Reposicionamento de ativos" },
  "re.focus.acquisitions": { en: "Strategic acquisitions", pt: "Aquisições estratégicas" },
  "re.focus.holdings": { en: "Long-term holdings", pt: "Participações de longo prazo" },
  "re.focus.partnerships": { en: "Development partnerships", pt: "Parcerias de desenvolvimento" },
  "re.focus.valueAdd": { en: "Selected value-add opportunities", pt: "Oportunidades selecionadas de valor agregado" },
  "re.lookFor.eyebrow": { en: "WHAT WE LOOK FOR", pt: "O QUE BUSCAMOS" },
  "re.lookFor.location": { en: "Quality locations", pt: "Localizações de qualidade" },
  "re.lookFor.upside": { en: "Structural upside", pt: "Potencial estrutural" },
  "re.lookFor.relevance": { en: "Long-term relevance", pt: "Relevância de longo prazo" },
  "re.lookFor.optionality": { en: "Strategic optionality", pt: "Opcionalidade estratégica" },
  "re.lookFor.partnerships": { en: "Strong partnership potential", pt: "Forte potencial de parceria" },
  "re.partners.eyebrow": { en: "STRATEGIC PARTNERSHIPS", pt: "PARCERIAS ESTRATÉGICAS" },
  "re.partners.title": { en: "Selected relationships, aligned vision", pt: "Relações selecionadas, visão alinhada" },
  "re.partners.body": {
    en: "We are open to selected relationships with owners, developers, operators, and strategic partners aligned with long-term value creation.",
    pt: "Estamos abertos a relações selecionadas com proprietários, desenvolvedores, operadores e parceiros estratégicos alinhados com a criação de valor de longo prazo.",
  },
  "re.cta": { en: "DISCUSS OPPORTUNITIES", pt: "DISCUTIR OPORTUNIDADES" },

  // ===== TECHNOLOGY =====
  "tech.eyebrow": { en: "TECHNOLOGY", pt: "TECNOLOGIA" },
  "tech.hero.headline": {
    en: "Technology as infrastructure for scale, leverage, and future value",
    pt: "Tecnologia como infraestrutura para escala, alavancagem e valor futuro",
  },
  "tech.hero.intro": {
    en: "Our technology focus is centered on digital platforms, software, and scalable opportunities that combine utility, strategic relevance, and long-term potential.",
    pt: "Nosso foco em tecnologia centra-se em plataformas digitais, software e oportunidades escaláveis que combinam utilidade, relevância estratégica e potencial de longo prazo.",
  },
  "tech.thesis.eyebrow": { en: "THESIS", pt: "TESE" },
  "tech.thesis.title": { en: "Our Technology Thesis", pt: "Nossa Tese de Tecnologia" },
  "tech.thesis.body": {
    en: "We look for technology opportunities where product, market relevance, and structural scalability can converge into meaningful value creation. We are particularly interested in businesses and initiatives built with clarity, functionality, and long-term positioning.",
    pt: "Buscamos oportunidades de tecnologia onde produto, relevância de mercado e escalabilidade estrutural possam convergir em criação significativa de valor. Estamos particularmente interessados em negócios e iniciativas construídos com clareza, funcionalidade e posicionamento de longo prazo.",
  },
  "tech.focus.eyebrow": { en: "FOCUS AREAS", pt: "ÁREAS DE FOCO" },
  "tech.focus.saas": { en: "SaaS", pt: "SaaS" },
  "tech.focus.platforms": { en: "Software platforms", pt: "Plataformas de software" },
  "tech.focus.ai": { en: "AI-enabled tools", pt: "Ferramentas com IA" },
  "tech.focus.infrastructure": { en: "Digital infrastructure", pt: "Infraestrutura digital" },
  "tech.focus.ventures": { en: "Strategic digital ventures", pt: "Empreendimentos digitais estratégicos" },
  "tech.engage.eyebrow": { en: "HOW WE ENGAGE", pt: "COMO ATUAMOS" },
  "tech.engage.build": { en: "Build", pt: "Construir" },
  "tech.engage.partner": { en: "Partner", pt: "Parcerias" },
  "tech.engage.support": { en: "Support", pt: "Apoiar" },
  "tech.engage.structure": { en: "Structure", pt: "Estruturar" },
  "tech.engage.scale": { en: "Scale strategically", pt: "Escalar estrategicamente" },
  "tech.cta.eyebrow": { en: "FOR FOUNDERS & PARTNERS", pt: "PARA FUNDADORES E PARCEIROS" },
  "tech.cta.title": { en: "Building with depth and intent?", pt: "Construindo com profundidade e intenção?" },
  "tech.cta.body": {
    en: "If you are building with depth, clarity, and long-term intent, we are open to selected strategic conversations.",
    pt: "Se você está construindo com profundidade, clareza e intenção de longo prazo, estamos abertos a conversas estratégicas selecionadas.",
  },
  "tech.cta.button": { en: "START A CONVERSATION", pt: "INICIAR CONVERSA" },

  // ===== BRIEFING =====
  "briefing.eyebrow": { en: "STRATEGIC INTELLIGENCE", pt: "INTELIGÊNCIA ESTRATÉGICA" },
  "briefing.hero.headline": { en: "The Martins Capital Briefing", pt: "O Relatório Martins Capital" },
  "briefing.hero.intro": {
    en: "A curated stream of macro intelligence, market structure, and strategic perspective for those who value clarity over noise.",
    pt: "Um fluxo curado de inteligência macro, estrutura de mercado e perspectiva estratégica para quem valoriza clareza acima do ruído.",
  },
  "briefing.receive.eyebrow": { en: "WHAT YOU RECEIVE", pt: "O QUE VOCÊ RECEBE" },
  "briefing.receive.title": { en: "Selected intelligence, institutional tone", pt: "Inteligência selecionada, tom institucional" },
  "briefing.receive.macro": { en: "Macro context", pt: "Contexto macro" },
  "briefing.receive.structure": { en: "Market structure insights", pt: "Análises de estrutura de mercado" },
  "briefing.receive.capital": { en: "Strategic capital perspective", pt: "Perspectiva estratégica de capital" },
  "briefing.receive.observations": { en: "Selected observations with institutional tone", pt: "Observações selecionadas com tom institucional" },
  "briefing.subscribe.eyebrow": { en: "SUBSCRIBE", pt: "INSCREVER-SE" },
  "briefing.subscribe.title": { en: "Join the Briefing", pt: "Receber o Relatório" },
  "briefing.firstName": { en: "First Name", pt: "Nome" },
  "briefing.email": { en: "Email", pt: "E-mail" },
  "briefing.interestPlaceholder": { en: "Interest area", pt: "Área de interesse" },
  "briefing.interest.realEstate": { en: "Real Estate", pt: "Imóveis" },
  "briefing.interest.technology": { en: "Technology", pt: "Tecnologia" },
  "briefing.interest.capitalIntel": { en: "Capital Intelligence", pt: "Inteligência de Capital" },
  "briefing.interest.partnerships": { en: "Strategic Partnerships", pt: "Parcerias Estratégicas" },
  "briefing.cta": { en: "SUBSCRIBE", pt: "INSCREVER-SE" },
  "briefing.success": { en: "Access granted.", pt: "Acesso concedido." },
  "briefing.successSub": {
    en: "You will begin receiving the Martins Capital Briefing shortly.",
    pt: "Você começará a receber o Relatório Martins Capital em breve.",
  },
  "briefing.error": {
    en: "Please complete all fields with valid information.",
    pt: "Por favor, preencha todos os campos com informações válidas.",
  },
  "briefing.closing": {
    en: "For those building with intention, capital deserves clarity.",
    pt: "Para quem constrói com intenção, o capital merece clareza.",
  },

  // ===== CONTACT =====
  "contact.eyebrow": { en: "CONTACT", pt: "CONTATO" },
  "contact.hero.headline": { en: "Start a strategic conversation", pt: "Inicie uma conversa estratégica" },
  "contact.hero.intro": {
    en: "We welcome selected inquiries related to partnerships, opportunities, strategic ventures, and institutional dialogue.",
    pt: "Recebemos consultas selecionadas relacionadas a parcerias, oportunidades, empreendimentos estratégicos e diálogo institucional.",
  },
  "contact.cards.eyebrow": { en: "INQUIRY TYPES", pt: "TIPOS DE CONSULTA" },
  "contact.cards.title": { en: "Select the nature of your inquiry", pt: "Selecione a natureza da sua consulta" },
  "contact.card.partnerships": { en: "Strategic Partnerships", pt: "Parcerias Estratégicas" },
  "contact.card.partnerships.desc": {
    en: "For aligned long-term collaborations across our verticals.",
    pt: "Para colaborações alinhadas de longo prazo em nossas verticais.",
  },
  "contact.card.investment": { en: "Investment Opportunities", pt: "Oportunidades de Investimento" },
  "contact.card.investment.desc": {
    en: "Submit selected opportunities aligned with our thesis.",
    pt: "Envie oportunidades selecionadas alinhadas com nossa tese.",
  },
  "contact.card.media": { en: "Media / Institutional", pt: "Imprensa / Institucional" },
  "contact.card.media.desc": {
    en: "Press, institutional outreach, and editorial conversations.",
    pt: "Imprensa, contato institucional e conversas editoriais.",
  },
  "contact.card.general": { en: "General Inquiry", pt: "Consulta Geral" },
  "contact.card.general.desc": {
    en: "All other strategic conversations and considered inquiries.",
    pt: "Demais conversas estratégicas e consultas consideradas.",
  },
  "contact.form.eyebrow": { en: "DIRECT INQUIRY", pt: "CONSULTA DIRETA" },
  "contact.form.title": { en: "Send a message", pt: "Enviar mensagem" },
  "contact.field.name": { en: "Name", pt: "Nome" },
  "contact.field.email": { en: "Email", pt: "E-mail" },
  "contact.field.company": { en: "Company (optional)", pt: "Empresa (opcional)" },
  "contact.field.inquiryType": { en: "Inquiry Type", pt: "Tipo de Consulta" },
  "contact.field.message": { en: "Message", pt: "Mensagem" },
  "contact.cta": { en: "SEND INQUIRY", pt: "ENVIAR CONSULTA" },
  "contact.success": { en: "Inquiry received.", pt: "Consulta recebida." },
  "contact.successSub": {
    en: "We will respond to selected inquiries with consideration and care.",
    pt: "Responderemos consultas selecionadas com consideração e atenção.",
  },
  "contact.error": {
    en: "Please complete the required fields with valid information.",
    pt: "Por favor, preencha os campos obrigatórios com informações válidas.",
  },
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
