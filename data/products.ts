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
  playStoreCtaLabel?: string;
  secondaryCtaLabel: string;
};

type ProductRecord = {
  slug: string;
  name: string;
  status: ProductStatus;
  techStack: string[];
  demoHref: string;
  /** Optional Google Play URL; shown as an extra primary CTA when set. */
  playStoreHref?: string;
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
  playStoreHref?: string;
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
          "Everything is stored locally on your device. You don't need internet to create or edit documents. Ideal for job sites, the field, or when there's no signal. No third-party analytics or advertising; we don't share data with third parties.",
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
          "Cotiza y factura con documentos que cierran el trato, desde el celular y en minutos.",
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
          "Exporta en PDF o imagen para WhatsApp, correo o impresión: todo desde el teléfono",
          "Trabajo offline y almacenamiento local: sigues en obra aunque falle la red",
        ],
        screenshots: [
          {
            title: "Tu negocio, a un toque",
            caption:
              "Clientes, datos del negocio y documentos en un solo lugar: menos saltos entre apps y más tiempo en lo que factura.",
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
            caption: "Subtotal, IVA y total se actualizan mientras cargas líneas, sin planilla aparte.",
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
  {
    slug: "tallerpro",
    name: "Taller Pro",
    status: "live",
    techStack: ["iOS", "Android", "React Native"],
    demoHref: "https://apps.apple.com/app/tallerpro/id6802937129",
    playStoreHref: "https://play.google.com/store/apps/details?id=com.tallerpro.app",
    secondaryCtaPath: "/products/tallerpro/soporte",
    iconPath: "/tallerpro-icon.png",
    content: {
      en: {
        tagline: "Quotes, repair estimates, and invoices for your workshop, with vehicle details.",
        shortDescription:
          "Quote, estimate, and invoice workshop jobs with vehicle details. Works offline; your data stays on your phone. No ads.",
        overview:
          "Taller Pro is an app for creating service quotes, repair estimates, and invoices clearly and professionally. Built for mechanical and auto-electrical workshops, tire shops, parts stores, and independent mechanics who need documents ready in minutes, without hassle.",
        problem:
          "Everything is stored locally on your device. You don't need internet to create or edit documents. Ideal for the shop floor, on-site work, or mobile service. No third-party analytics or advertising; we don't share data with third parties.",
        category: "Mobile app",
        targetUsers: [
          "General mechanical and auto-electrical workshops",
          "Tire shops, parts stores, independent mechanics",
          "Bodywork, brakes, suspension, and mobile service",
        ],
        keyFeatures: [
          "Create service quotes, repair estimates, and invoices with multiple lines, quantities, units, and prices",
          "Optional vehicle details on each document: plates, make and model, year, and mileage",
          "Manage clients from the same app",
          "Set up your workshop profile, logo, and bank accounts",
          "Calculate subtotal, tax, and total automatically",
          "Export as PDF or image and work offline on your phone",
        ],
        screenshots: [
          { title: "Your workshop in order", caption: "Clients, workshop profile, and documents in one place.", imagePath: "/tallerpro/home.png" },
          { title: "Manage your clients", caption: "Manage clients from the same app.", imagePath: "/tallerpro/clientes.png" },
          { title: "Quote the job", caption: "Service quotes, repair estimates, and invoices in one place.", imagePath: "/tallerpro/documentos.png" },
          { title: "Set up your workshop", caption: "Workshop details, logo, and bank accounts.", imagePath: "/tallerpro/perfil-taller.png" },
          { title: "Built for the shop floor", caption: "Optional vehicle data: plates, make and model, year, and mileage.", imagePath: "/tallerpro/documento-editor.png" },
          { title: "Share professionally", caption: "Export as PDF or image from your phone.", imagePath: "/tallerpro/factura-pdf.png" },
        ],
        primaryCtaLabel: "Download on App Store",
        playStoreCtaLabel: "Download on Google Play",
        secondaryCtaLabel: "Support",
      },
      es: {
        tagline:
          "Cotiza, presupuesta y factura el servicio de tu taller, con datos del vehículo.",
        shortDescription:
          "Cotizaciones, presupuestos y facturas para tu taller, con datos del vehículo. Funciona sin internet; tus datos quedan en tu celular. Sin publicidad.",
        overview:
          "En el taller no sobra tiempo para armar cotizaciones en hojas sueltas ni pelear con formatos. Taller Pro concentra clientes, datos del taller y documentos en una sola app para que armes cotizaciones de servicio, presupuestos de reparación y facturas con datos del vehículo, tu logo y cuentas bancarias, listos para mandar por WhatsApp o imprimir. Pensada para talleres mecánicos, eléctricos, llanteras, refaccionarias y mecánicos independientes.",
        problem:
          "Tu información vive en tu dispositivo: puedes crear y editar sin depender de la señal (ideal en el taller, en sitio o en servicios móviles). Sin publicidad, sin analítica de terceros y sin compartir datos con terceros.",
        category: "App móvil",
        targetUsers: [
          "Talleres mecánicos y eléctricos automotrices",
          "Llanteras, refaccionarias y mecánicos independientes",
          "Hojalatería, frenos, suspensión y servicios móviles",
        ],
        keyFeatures: [
          "Documentos con varias líneas, cantidades, unidades y precios: el cliente entiende qué paga (mano de obra, refacción o servicio) y tú cobras con respaldo claro",
          "Datos opcionales del vehículo en cada documento: placas, marca y modelo, año y kilometraje",
          "Clientes en un solo lugar: datos y contexto a mano para seguimiento y nuevas cotizaciones",
          "Identidad del taller en cada PDF: logo, datos y cuentas bancarias configurados una vez",
          "Subtotal, IVA y total calculados al instante: menos errores manuales y menos vueltas con el cliente",
          "Exporta en PDF o imagen y trabaja sin internet: WhatsApp, impresión o archivo, incluso en sitio o en servicios móviles",
        ],
        screenshots: [
          {
            title: "Tu taller en orden",
            caption:
              "Clientes, perfil del taller y documentos en un solo lugar: menos saltos entre apps y más tiempo en el servicio.",
            imagePath: "/tallerpro/home.png",
          },
          {
            title: "Cartera de clientes siempre contigo",
            caption: "Alta, edición y búsqueda sin salir del flujo de cotización.",
            imagePath: "/tallerpro/clientes.png",
          },
          {
            title: "Cotiza el servicio",
            caption: "Cotizaciones de servicio, presupuestos de reparación y facturas ordenados y listos para enviar.",
            imagePath: "/tallerpro/documentos.png",
          },
          {
            title: "Cara profesional en cada envío",
            caption: "Logo, datos del taller y cuentas bancarias: configuras una vez y aplica a todo.",
            imagePath: "/tallerpro/perfil-taller.png",
          },
          {
            title: "Hecha para el taller",
            caption: "Placas, marca y modelo, año y kilometraje en cada documento: el cliente ve el servicio con claridad.",
            imagePath: "/tallerpro/documento-editor.png",
          },
          {
            title: "Comparte profesional",
            caption: "PDF o imagen listos para WhatsApp, impresión o archivo en segundos.",
            imagePath: "/tallerpro/factura-pdf.png",
          },
        ],
        primaryCtaLabel: "Descargar en App Store",
        playStoreCtaLabel: "Descargar en Google Play",
        secondaryCtaLabel: "Soporte",
      },
    },
  },
  {
    slug: "floreriapro",
    name: "Florería Pro",
    status: "comingSoon",
    techStack: ["iOS", "Android", "Flutter"],
    // TODO: replace with the real store URLs once published:
    // demoHref: "https://apps.apple.com/app/floreriapro/idXXXXXXXXXX"
    // playStoreHref: "https://play.google.com/store/apps/details?id=com.floreriapro.app"
    demoHref: "mailto:devstacklabshq@gmail.com?subject=Florer%C3%ADa%20Pro",
    secondaryCtaPath: "/products/floreriapro/soporte",
    iconPath: "/floreriapro-icon.png",
    content: {
      en: {
        tagline: "Quotes, event estimates, and invoices for your flower shop, with order details.",
        shortDescription:
          "Quote, estimate, and invoice floral work with order details. Works offline; your data stays on your phone. No ads.",
        overview:
          "Florería Pro is an app for creating arrangement quotes, event estimates, and invoices clearly and professionally. Built for neighborhood flower shops, independent florists, event work, and funeral service who need documents ready in minutes, without hassle.",
        problem:
          "Everything is stored locally on your device. You don't need internet to create or edit documents. Ideal for the counter, events, or deliveries. No third-party analytics or advertising; we don't share data with third parties.",
        category: "Mobile app",
        targetUsers: [
          "Neighborhood flower shops and independent florists",
          "Event work: weddings, quinceañeras, corporate orders",
          "Funeral service, hospital deliveries, and home delivery",
        ],
        keyFeatures: [
          "Create arrangement quotes, event estimates, and invoices with multiple lines, quantities, units, and prices",
          "Optional order details on each document: occasion, recipient, delivery date, and delivery place",
          "Manage clients from the same app",
          "Set up your flower shop profile, logo, and bank accounts",
          "Calculate subtotal, tax, and total automatically",
          "Export as PDF or image and work offline on your phone",
        ],
        screenshots: [
          { title: "Your flower shop in order", caption: "Clients, shop profile, and documents in one place.", imagePath: "/floreriapro/home.png" },
          { title: "Manage your clients", caption: "Manage clients from the same app.", imagePath: "/floreriapro/clientes.png" },
          { title: "Quote the arrangement", caption: "Arrangement quotes, event estimates, and invoices in one place.", imagePath: "/floreriapro/documentos.png" },
          { title: "Order details on every document", caption: "Occasion, recipient, delivery date, and delivery place.", imagePath: "/floreriapro/documento-editor.png" },
          { title: "Supply notes for each event", caption: "Track what's still missing before the arrangement goes out.", imagePath: "/floreriapro/notas.png" },
          { title: "Share professionally", caption: "Export as PDF or image from your phone.", imagePath: "/floreriapro/cotizacion-pdf.png" },
        ],
        primaryCtaLabel: "Get launch updates",
        secondaryCtaLabel: "Support",
      },
      es: {
        tagline:
          "Cotiza, presupuesta y factura los arreglos de tu florería, con datos del pedido.",
        shortDescription:
          "Cotizaciones, presupuestos y facturas para tu florería, con datos del pedido. Funciona sin internet; tus datos quedan en tu celular. Sin publicidad.",
        overview:
          "En la florería el pedido entra por teléfono, por WhatsApp o en el mostrador, y hay que cotizarlo mientras se atiende al siguiente cliente. Florería Pro concentra clientes, datos de la florería y documentos en una sola app para que armes cotizaciones de arreglo, presupuestos de evento y facturas con datos del pedido, tu logo y cuentas bancarias, listos para mandar por WhatsApp o imprimir. Pensada para florerías de barrio, floristas independientes, eventos y servicio funeral.",
        problem:
          "Tu información vive en tu dispositivo: puedes crear y editar sin depender de la señal (ideal en el mostrador, en el evento o en la entrega). Sin publicidad, sin analítica de terceros y sin compartir datos con terceros.",
        category: "App móvil",
        targetUsers: [
          "Florerías de barrio y floristas independientes",
          "Eventos: bodas, XV años y pedidos corporativos",
          "Servicio funeral, entregas a hospital y a domicilio",
        ],
        keyFeatures: [
          "Documentos con varias líneas, cantidades, unidades y precios: el cliente entiende qué paga (flor, base, mano de obra o entrega) y tú cobras con respaldo claro",
          "Datos opcionales del pedido en cada documento: ocasión, destinatario, fecha y lugar de entrega",
          "Clientes en un solo lugar: datos y contexto a mano para seguimiento y nuevos pedidos",
          "Identidad de tu florería en cada PDF: logo, datos y cuentas bancarias configurados una vez",
          "Subtotal, IVA y total calculados al instante: menos errores manuales y menos vueltas con el cliente",
          "Exporta en PDF o imagen y trabaja sin internet: WhatsApp, impresión o archivo, incluso en el evento o en la entrega",
        ],
        screenshots: [
          {
            title: "Tu florería en orden",
            caption:
              "Clientes, perfil de la florería y documentos en un solo lugar: menos saltos entre apps y más tiempo en el arreglo.",
            imagePath: "/floreriapro/home.png",
          },
          {
            title: "Cartera de clientes siempre contigo",
            caption: "Alta, edición y búsqueda sin salir del flujo de cotización.",
            imagePath: "/floreriapro/clientes.png",
          },
          {
            title: "Cotiza el arreglo",
            caption:
              "Cotizaciones de arreglo, presupuestos de evento y facturas ordenados y listos para enviar.",
            imagePath: "/floreriapro/documentos.png",
          },
          {
            title: "Datos del pedido en cada documento",
            caption:
              "Ocasión, destinatario, fecha y lugar de entrega: el cliente confirma el pedido sin llamadas de más.",
            imagePath: "/floreriapro/documento-editor.png",
          },
          {
            title: "Notas de insumos para cada evento",
            caption:
              "Lo que falta comprar para el arreglo, marcado y a la vista antes de la entrega.",
            imagePath: "/floreriapro/notas.png",
          },
          {
            title: "Comparte profesional",
            caption: "PDF o imagen listos para WhatsApp, impresión o archivo en segundos.",
            imagePath: "/floreriapro/cotizacion-pdf.png",
          },
        ],
        primaryCtaLabel: "Recibir aviso del lanzamiento",
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
    playStoreHref: product.playStoreHref,
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
