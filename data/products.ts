import { getLocalizedHref, type Locale } from "@/lib/i18n";

export type ProductStatus = "live" | "beta" | "comingSoon";

type ProductLocaleContent = {
  tagline: string;
  shortDescription: string;
  overview: string;
  problem: string;
  category: string;
  targetUsers: string[];
  keyFeatures: string[];
  screenshots: { title: string; caption: string; imagePath?: string }[];
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
};

type ProductRecord = {
  slug: string;
  name: string;
  status: ProductStatus;
  techStack: string[];
  demoHref: string;
  /** Optional path for secondary CTA (e.g. /products/obraclaro/soporte). Localized in getProducts. */
  secondaryCtaPath?: string;
  /** Optional app/product icon path (e.g. /obraclaro-icon.png). */
  iconPath?: string;
  content: Record<Locale, ProductLocaleContent>;
};

export type Product = {
  slug: string;
  name: string;
  status: ProductStatus;
  techStack: string[];
  demoHref: string;
  productHref: string;
  /** When set, secondary CTA links here instead of /contact. */
  secondaryCtaHref?: string;
  /** When set, shown on product card and detail page. */
  iconPath?: string;
} & ProductLocaleContent;

const productRecords: ProductRecord[] = [
  {
    slug: "fieldflow",
    name: "FieldFlow",
    status: "live",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Vercel"],
    demoHref: "https://example.com/fieldflow",
    content: {
      en: {
        tagline: "Operational visibility for distributed field teams.",
        shortDescription:
          "A workflow platform for site reporting, issue tracking, approvals, and real-time field coordination.",
        overview:
          "FieldFlow centralizes day-to-day operational activity for field and office teams. It combines task workflows, structured reporting, and project visibility in one environment so teams can move faster with less manual coordination.",
        problem:
          "Many operations teams still rely on messages, spreadsheets, and disconnected tools to track job progress and approvals. That creates delays, poor visibility, and inconsistent execution across active projects.",
        category: "Operations Software",
        targetUsers: [
          "Construction operations teams",
          "Field supervisors",
          "Project coordinators",
        ],
        keyFeatures: [
          "Structured daily reporting and activity logs",
          "Approval workflows for issues, requests, and handoffs",
          "Role-based dashboards for field and office users",
          "Searchable project history with real-time status visibility",
        ],
        screenshots: [
          {
            title: "Operations dashboard",
            caption: "A command center for active jobs, blockers, and approvals.",
          },
          {
            title: "Field reporting view",
            caption:
              "Fast mobile-friendly input for site updates and incident capture.",
          },
          {
            title: "Workflow timeline",
            caption: "A clear audit trail of decisions, ownership, and progress.",
          },
        ],
        primaryCtaLabel: "Request a demo",
        secondaryCtaLabel: "Talk to DevStack Labs",
      },
      es: {
        tagline: "Visibilidad operativa para equipos de campo distribuidos.",
        shortDescription:
          "Una plataforma de workflows para reportes en obra, seguimiento de incidencias, aprobaciones y coordinación de campo en tiempo real.",
        overview:
          "FieldFlow centraliza la operación diaria de equipos de campo y oficina. Combina workflows de tareas, reportes estructurados y visibilidad del proyecto en un solo entorno para que los equipos avancen más rápido con menos coordinación manual.",
        problem:
          "Muchos equipos operativos todavía dependen de mensajes, hojas de cálculo y herramientas desconectadas para seguir el progreso y las aprobaciones. Eso genera retrasos, poca visibilidad y ejecución inconsistente entre proyectos activos.",
        category: "Software operativo",
        targetUsers: [
          "Equipos de operaciones de construcción",
          "Supervisores de campo",
          "Coordinadores de proyecto",
        ],
        keyFeatures: [
          "Reportes diarios estructurados y registros de actividad",
          "Workflows de aprobación para incidencias, solicitudes y handoffs",
          "Dashboards por rol para usuarios de campo y oficina",
          "Historial del proyecto consultable con visibilidad de estado en tiempo real",
        ],
        screenshots: [
          {
            title: "Dashboard operativo",
            caption:
              "Un centro de control para trabajos activos, bloqueos y aprobaciones.",
          },
          {
            title: "Vista de reporte en campo",
            caption:
              "Captura rápida y mobile-friendly para avances de obra e incidentes.",
          },
          {
            title: "Línea de tiempo del workflow",
            caption:
              "Una trazabilidad clara de decisiones, responsables y progreso.",
          },
        ],
        primaryCtaLabel: "Solicitar demo",
        secondaryCtaLabel: "Hablar con DevStack Labs",
      },
    },
  },
  {
    slug: "opspilot",
    name: "OpsPilot",
    status: "beta",
    techStack: ["Next.js", "TypeScript", "Supabase", "Node.js", "Tailwind CSS"],
    demoHref: "https://example.com/opspilot",
    content: {
      en: {
        tagline: "Internal tools and automation for high-leverage teams.",
        shortDescription:
          "A modular internal operations platform that unifies dashboards, approvals, integrations, and automation.",
        overview:
          "OpsPilot helps organizations consolidate internal workflows into a single system of action. It is designed for teams that need custom dashboards, orchestrated business rules, and reliable integrations across multiple tools.",
        problem:
          "Internal teams often lose time switching between systems, manually updating records, and chasing approvals through email. Without purpose-built tooling, operations stay slow and fragile.",
        category: "Internal Platform",
        targetUsers: [
          "Operations managers",
          "Finance and admin teams",
          "Process owners",
        ],
        keyFeatures: [
          "Configurable workflow automation and notification rules",
          "Unified operational dashboards across multiple systems",
          "Custom forms and intake flows for internal requests",
          "Extensible integration layer for third-party business tools",
        ],
        screenshots: [
          {
            title: "Executive overview",
            caption: "High-level KPIs and team activity across internal processes.",
          },
          {
            title: "Automation builder",
            caption: "Rules and triggers for repetitive operational workflows.",
          },
          {
            title: "Request intake portal",
            caption: "A cleaner front door for recurring internal work requests.",
          },
        ],
        primaryCtaLabel: "Join the beta",
        secondaryCtaLabel: "Discuss your use case",
      },
      es: {
        tagline: "Herramientas internas y automatización para equipos de alto impacto.",
        shortDescription:
          "Una plataforma modular de operaciones internas que unifica dashboards, aprobaciones, integraciones y automatización.",
        overview:
          "OpsPilot ayuda a las organizaciones a consolidar workflows internos en un único sistema de acción. Está diseñado para equipos que necesitan dashboards a medida, reglas de negocio orquestadas e integraciones confiables entre múltiples herramientas.",
        problem:
          "Los equipos internos suelen perder tiempo alternando entre sistemas, actualizando registros manualmente y persiguiendo aprobaciones por email. Sin tooling específico, la operación sigue siendo lenta y frágil.",
        category: "Plataforma interna",
        targetUsers: [
          "Gerentes de operaciones",
          "Equipos financieros y administrativos",
          "Responsables de procesos",
        ],
        keyFeatures: [
          "Automatización configurable de workflows y reglas de notificación",
          "Dashboards operativos unificados entre múltiples sistemas",
          "Formularios personalizados y flujos de intake para solicitudes internas",
          "Capa de integración extensible para herramientas empresariales de terceros",
        ],
        screenshots: [
          {
            title: "Resumen ejecutivo",
            caption:
              "KPIs de alto nivel y actividad del equipo a través de procesos internos.",
          },
          {
            title: "Constructor de automatizaciones",
            caption: "Reglas y disparadores para workflows operativos repetitivos.",
          },
          {
            title: "Portal de solicitudes",
            caption:
              "Una entrada más limpia para solicitudes internas recurrentes.",
          },
        ],
        primaryCtaLabel: "Unirse a la beta",
        secondaryCtaLabel: "Hablar sobre tu caso",
      },
    },
  },
  {
    slug: "bidpulse",
    name: "BidPulse",
    status: "comingSoon",
    techStack: ["Next.js", "TypeScript", "Python", "PostgreSQL", "OpenAI"],
    demoHref: "https://example.com/bidpulse",
    content: {
      en: {
        tagline: "Preconstruction intelligence for faster, more confident decisions.",
        shortDescription:
          "A product concept for estimating workflows, bid tracking, document review, and pipeline visibility.",
        overview:
          "BidPulse is designed to help preconstruction teams organize opportunities, track estimating progress, and surface actionable insight across active bids. It combines pipeline visibility with practical workflow support for busy revenue teams.",
        problem:
          "Bid pipelines are often managed through fragmented spreadsheets and inboxes, making it hard to understand status, prioritize effort, and create a repeatable estimating process.",
        category: "Vertical SaaS",
        targetUsers: [
          "Estimating teams",
          "Preconstruction managers",
          "Business development leaders",
        ],
        keyFeatures: [
          "Bid pipeline tracking with milestone visibility",
          "Document review and extraction workflows",
          "Effort scoring and opportunity prioritization",
          "Shared notes and decision context across the team",
        ],
        screenshots: [
          {
            title: "Bid pipeline",
            caption: "A focused view of opportunities, deadlines, and next actions.",
          },
          {
            title: "Opportunity detail",
            caption:
              "Project context, documents, and estimating progress in one place.",
          },
          {
            title: "Analytics snapshot",
            caption: "Win-rate and throughput insights for smarter forecasting.",
          },
        ],
        primaryCtaLabel: "Get launch updates",
        secondaryCtaLabel: "Explore partnership options",
      },
      es: {
        tagline:
          "Inteligencia para preconstrucción y decisiones más rápidas y seguras.",
        shortDescription:
          "Un concepto de producto para workflows de estimación, seguimiento de licitaciones, revisión documental y visibilidad del pipeline.",
        overview:
          "BidPulse está diseñado para ayudar a los equipos de preconstrucción a organizar oportunidades, seguir el progreso de estimación y mostrar insights accionables en licitaciones activas. Combina visibilidad del pipeline con soporte práctico de workflow para equipos comerciales exigentes.",
        problem:
          "Los pipelines de licitación suelen gestionarse con hojas de cálculo y correos fragmentados, lo que dificulta entender el estado, priorizar esfuerzo y crear un proceso de estimación repetible.",
        category: "SaaS vertical",
        targetUsers: [
          "Equipos de estimación",
          "Gerentes de preconstrucción",
          "Líderes de desarrollo de negocio",
        ],
        keyFeatures: [
          "Seguimiento del pipeline de licitaciones con visibilidad de hitos",
          "Workflows de revisión y extracción documental",
          "Scoring de esfuerzo y priorización de oportunidades",
          "Notas compartidas y contexto de decisión para todo el equipo",
        ],
        screenshots: [
          {
            title: "Pipeline de licitaciones",
            caption:
              "Una vista enfocada de oportunidades, fechas límite y próximas acciones.",
          },
          {
            title: "Detalle de oportunidad",
            caption:
              "Contexto del proyecto, documentos y avance de estimación en un solo lugar.",
          },
          {
            title: "Resumen analítico",
            caption:
              "Insights de tasa de éxito y throughput para mejorar el forecast.",
          },
        ],
        primaryCtaLabel: "Recibir novedades del lanzamiento",
        secondaryCtaLabel: "Explorar opciones de alianza",
      },
    },
  },
  {
    slug: "obraclaro",
    name: "ObraClaro",
    status: "live",
    techStack: ["iOS", "React Native"],
    demoHref: "https://apps.apple.com/app/obraclaro/id6760685801",
    secondaryCtaPath: "/products/obraclaro/soporte",
    iconPath: "/obraclaro-icon.png",
    content: {
      en: {
        tagline: "Clear quotes, estimates, and invoices for your business.",
        shortDescription:
          "App for creating quotes, estimates, and invoices clearly and professionally. For contractors and small businesses. Download on App Store.",
        overview:
          "ObraClaro is an app to create quotes, estimates, and invoices clearly and professionally. Built for contractors, small businesses, and service providers who need professional documents in minutes, without hassle.",
        problem:
          "Everything is stored locally on your device. You don't need internet to create or edit documents—ideal for job sites, the field, or when there's no signal. No third-party analytics or advertising; we don't share data with third parties.",
        category: "Mobile app",
        targetUsers: [
          "Contractors, installers, technicians, remodelers",
          "Electricians, plumbers",
          "Any business that needs to quote and invoice clearly",
        ],
        keyFeatures: [
          "Create quotes, estimates, and invoices with multiple lines, quantities, units, and prices",
          "Manage clients from the same app",
          "Configure your business details, logo, and bank accounts",
          "Calculate subtotal, tax, and total automatically",
          "Export documents as PDF or image to share or print",
          "Save everything on your device and work offline",
        ],
        screenshots: [
          { title: "Your business in order", caption: "Keep clients, business details, and documents in one place.", imagePath: "/obraclaro/home.png" },
          { title: "Manage your clients", caption: "Manage clients from the same app.", imagePath: "/obraclaro/clientes.png" },
          { title: "Quote with clarity", caption: "Quotes, estimates, and invoices in one place.", imagePath: "/obraclaro/documentos.png" },
          { title: "Configure your business", caption: "Business details, logo, and bank accounts.", imagePath: "/obraclaro/perfil-negocio.png" },
          { title: "Automatic calculations", caption: "Subtotal, tax, and total ready in an instant.", imagePath: "/obraclaro/factura-editor.png" },
          { title: "Share professional documents", caption: "Export as PDF or image from your phone.", imagePath: "/obraclaro/factura-pdf.png" },
        ],
        primaryCtaLabel: "Download on App Store",
        secondaryCtaLabel: "Support",
      },
      es: {
        tagline:
          "Cotiza y factura con documentos que cierran el trato—desde el celular, en minutos.",
        shortDescription:
          "Cotizaciones, presupuestos y facturas en PDF para contratistas y negocios de servicio. Funciona sin internet en obra; tus datos quedan en tu iPhone. Sin publicidad.",
        overview:
          "En obra no sobra tiempo para armar presupuestos en hojas sueltas ni pelear con formatos. ObraClaro concentra clientes, datos del negocio y documentos en una sola app para que armes cotizaciones, presupuestos y facturas con tu logo y cuentas bancarias, listos para mandar por WhatsApp o imprimir. Pensada para maestros, contratistas, electricistas, plomeros y cualquier negocio que cobra por trabajo bien explicado.",
        problem:
          "Tu información vive en tu dispositivo: puedes crear y editar sin depender de la señal (ideal en obra o en campo). Sin publicidad, sin analítica de terceros y sin compartir datos con terceros.",
        category: "App móvil",
        targetUsers: [
          "Contratistas, instaladores, técnicos, remodeladores",
          "Electricistas, plomeros",
          "Cualquier negocio que necesite cotizar y facturar con claridad",
        ],
        keyFeatures: [
          "Documentos con varias líneas, cantidades, unidades y precios: el cliente entiende qué paga y tú cobras con respaldo claro",
          "Clientes en un solo lugar: datos y contexto a mano para seguimiento y nuevas cotizaciones",
          "Identidad de negocio en cada PDF: logo, datos fiscales y cuentas bancarias configurados una vez",
          "Subtotal, impuestos y total calculados al instante: menos errores manuales y menos vueltas con el cliente",
          "Exporta en PDF o imagen para WhatsApp, correo o impresión—todo desde el teléfono",
          "Trabajo offline y almacenamiento local: sigues en obra aunque falle la red",
        ],
        screenshots: [
          {
            title: "Tu negocio, a un toque",
            caption:
              "Clientes, datos del negocio y documentos en un solo lugar—menos saltos entre apps y más tiempo en lo que factura.",
            imagePath: "/obraclaro/home.png",
          },
          {
            title: "Cartera de clientes siempre contigo",
            caption: "Alta, edición y búsqueda sin salir del flujo de cotización.",
            imagePath: "/obraclaro/clientes.png",
          },
          {
            title: "Del presupuesto a la factura, sin fricción",
            caption: "Cotizaciones, presupuestos y facturas ordenados y listos para enviar.",
            imagePath: "/obraclaro/documentos.png",
          },
          {
            title: "Cara profesional en cada envío",
            caption: "Logo, razón social y cuentas bancarias: configuras una vez y aplica a todo.",
            imagePath: "/obraclaro/perfil-negocio.png",
          },
          {
            title: "Números que cierran solos",
            caption: "Subtotal, IVA y total se actualizan mientras cargas líneas—sin planilla aparte.",
            imagePath: "/obraclaro/factura-editor.png",
          },
          {
            title: "Comparte y cobra más rápido",
            caption: "PDF o imagen listos para WhatsApp, impresión o archivo en segundos.",
            imagePath: "/obraclaro/factura-pdf.png",
          },
        ],
        primaryCtaLabel: "Descargar en App Store",
        secondaryCtaLabel: "Soporte",
      },
    },
  },
];

export function getProducts(locale: Locale): Product[] {
  return productRecords.map((product) => ({
    slug: product.slug,
    name: product.name,
    status: product.status,
    techStack: product.techStack,
    demoHref: product.demoHref,
    productHref: getLocalizedHref(locale, `/products/${product.slug}`),
    secondaryCtaHref: product.secondaryCtaPath
      ? getLocalizedHref(locale, product.secondaryCtaPath)
      : undefined,
    iconPath: product.iconPath,
    ...product.content[locale],
  }));
}

export function getProductBySlug(locale: Locale, slug: string) {
  return getProducts(locale).find((product) => product.slug === slug);
}

export function getAllProductSlugs() {
  return productRecords.map((product) => product.slug);
}
