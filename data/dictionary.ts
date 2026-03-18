import { defaultLocale, type Locale } from "@/lib/i18n";

export type Dictionary = {
  site: {
    title: string;
    description: string;
    nav: { href: string; label: string }[];
    contactEmail: string;
      contactLabel: string;
    languageLabel: string;
    languages: Record<Locale, string>;
      openNavigationLabel: string;
      closeNavigationLabel: string;
    consultationCta: string;
    footerRights: string;
  };
  ui: {
    viewProduct: string;
    visitWebsite: string;
    status: Record<"live" | "beta" | "comingSoon", string>;
  };
  home: {
    heroTitle: string;
    heroDescription: string;
    heroPrimaryCta: string;
    heroSecondaryCta: string;
    productsTitle: string;
    ctaTitle: string;
    ctaPrimaryLabel: string;
    ctaSecondaryLabel: string;
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    description: string;
    ctaLabel: string;
  };
  servicesPage: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    description: string;
    catalogTitle: string;
    ctaLabel: string;
  };
  productsPage: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    description: string;
    catalogTitle: string;
    ctaLabel: string;
  };
  productDetail: {
    snapshotTitle: string;
    statusLabel: string;
    targetUsersLabel: string;
    techStackLabel: string;
    problemEyebrow: string;
    problemTitle: string;
    featuresEyebrow: string;
    featuresTitle: string;
    screenshotsEyebrow: string;
    screenshotsTitle: string;
    screenshotsDescription: string;
    screenshotPlaceholder: string;
      ctaEyebrow: string;
      ctaTitle: string;
    ctaDescription: string;
    ctaSecondaryLabel: string;
    notFoundTitle: string;
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    description: string;
    emailLabel: string;
    form: {
      name: string;
      email: string;
      message: string;
      placeholders: { name: string; email: string; message: string };
      submit: string;
      success: string;
      sendError: string;
      errors: {
        name: string;
        emailRequired: string;
        emailInvalid: string;
        messageRequired: string;
      };
    };
  };
  resources: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    description: string;
    ctaLabel: string;
  };
  notFound: {
    eyebrow: string;
    title: string;
    description: string;
    homeLabel: string;
    productsLabel: string;
  };
  shared: {
    services: { title: string; description: string; value: string }[];
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    site: {
      title: "DevStack Labs | Premium Software Consulting and Product Studio",
      description:
        "DevStack Labs designs and builds custom software, SaaS products, internal tools, and automation systems for teams that need reliable, scalable digital products.",
      nav: [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/products", label: "Products" },
        { href: "/resources", label: "Resources" },
        { href: "/contact", label: "Contact" },
      ],
      contactEmail: "devstacklabshq@gmail.com",
      contactLabel: "Contact",
      languageLabel: "Language",
      languages: {
        en: "English",
        es: "Español",
      },
      openNavigationLabel: "Open navigation menu",
      closeNavigationLabel: "Close navigation menu",
      consultationCta: "Contact",
      footerRights: "All rights reserved.",
    },
    ui: {
      viewProduct: "View product",
      visitWebsite: "Visit website",
      status: {
        live: "Live",
        beta: "Beta",
        comingSoon: "Coming Soon",
      },
    },
    home: {
      heroTitle: "DevStack Labs builds software that moves businesses forward.",
      heroDescription:
        "Custom software, SaaS products, internal tools, and automation for teams that need reliable, scalable technology.",
      heroPrimaryCta: "Contact",
      heroSecondaryCta: "Products",
      productsTitle: "Products",
      ctaTitle: "Ready to start?",
      ctaPrimaryLabel: "Contact",
      ctaSecondaryLabel: "About",
    },
    about: {
      metaTitle: "About",
      metaDescription:
        "DevStack Labs: software consulting and product delivery for ambitious teams.",
      title: "About",
      description:
        "We help businesses turn complex requirements into clear, dependable software. Product thinking, technical depth, and pragmatic delivery.",
      ctaLabel: "Contact",
    },
    servicesPage: {
      metaTitle: "Services",
      metaDescription:
        "DevStack Labs services: custom software, SaaS, internal tools, automation.",
      title: "Services",
      description: "We help you plan, build, and deliver software that creates real business value.",
      catalogTitle: "What we do",
      ctaLabel: "Contact",
    },
    productsPage: {
      metaTitle: "Products",
      metaDescription:
        "Software products by DevStack Labs: live apps, beta platforms, and SaaS.",
      title: "Products",
      description: "Software we build and publish.",
      catalogTitle: "Our products",
      ctaLabel: "Contact",
    },
    productDetail: {
      snapshotTitle: "Product Snapshot",
      statusLabel: "Status",
      targetUsersLabel: "Target users",
      techStackLabel: "Tech stack",
      problemEyebrow: "Problem",
      problemTitle: "What this product solves",
      featuresEyebrow: "Key Features",
      featuresTitle: "Capabilities designed for real operational use.",
      screenshotsEyebrow: "Screenshots",
      screenshotsTitle: "Visual placeholders ready for real product imagery.",
      screenshotsDescription:
        "Each card can be swapped with live screenshots, marketing assets, or interface previews when they are available.",
      screenshotPlaceholder: "Screenshot Placeholder",
      ctaEyebrow: "Interested In This Product",
      ctaTitle: "Explore how this product can support your team.",
      ctaDescription:
        "Use this page as a reusable template for future product launches, lead capture, and deeper product storytelling across the DevStack Labs portfolio.",
      ctaSecondaryLabel: "Contact DevStack Labs",
      notFoundTitle: "Product Not Found",
    },
    contact: {
      metaTitle: "Contact",
      metaDescription:
        "Contact DevStack Labs to discuss custom software, SaaS products, internal tools, or automation solutions.",
      title: "Contact",
      description: "Send a message or email us directly.",
      emailLabel: "Email",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        placeholders: {
          name: "Your name",
          email: "you@company.com",
          message: "How can we help?",
        },
        submit: "Send",
        success: "Thanks. We'll get back to you soon.",
        sendError: "Something went wrong. Please try again or email us directly.",
        errors: {
          name: "Please enter your name.",
          emailRequired: "Please enter your email.",
          emailInvalid: "Please enter a valid email address.",
          messageRequired: "Please enter a message.",
        },
      },
    },
    resources: {
      metaTitle: "Resources",
      metaDescription:
        "Resources and insights from DevStack Labs.",
      title: "Resources",
      description: "Insights, case studies, and product notes. More content coming soon.",
      ctaLabel: "Contact",
    },
    notFound: {
      eyebrow: "404",
      title: "The page you are looking for does not exist.",
      description:
        "The link may be outdated or the page may have moved as the DevStack Labs site grows. Use the navigation below to continue exploring.",
      homeLabel: "Back to home",
      productsLabel: "View products",
    },
    shared: {
      services: [
        {
          title: "Custom Software Development",
          description:
            "Build secure, maintainable systems tailored to your workflows, data, and business model.",
          value:
            "Replace spreadsheet-driven operations and disconnected tools with software that fits the way your team actually works.",
        },
        {
          title: "SaaS Product Development",
          description:
            "Launch subscription software with product strategy, full-stack engineering, and growth-ready foundations.",
          value:
            "Validate faster, reduce technical risk, and create a platform that can scale with customer demand.",
        },
        {
          title: "Web App Development",
          description:
            "Deliver modern browser-based applications with strong UX, performance, and integration flexibility.",
          value:
            "Give customers and internal teams a reliable digital experience that is easy to adopt and simple to extend.",
        },
        {
          title: "Mobile App Development",
          description:
            "Create mobile experiences for field teams, customers, and operational workflows that must work on the go.",
          value:
            "Improve responsiveness, capture data at the source, and support real-world usage beyond the office.",
        },
        {
          title: "API and Backend Development",
          description:
            "Engineer resilient application backends, integrations, and service layers that keep critical data in sync.",
          value:
            "Enable automation, simplify integrations, and create a solid platform for future product features.",
        },
        {
          title: "Software Architecture",
          description:
            "Design technical foundations, system boundaries, and delivery approaches that reduce complexity over time.",
          value:
            "Make better technical decisions early and avoid costly rebuilds as your product and team grow.",
        },
        {
          title: "Automation and Workflow Solutions",
          description:
            "Automate repetitive processes, approvals, and data movement across the tools your business already uses.",
          value:
            "Free up valuable team capacity, reduce manual errors, and speed up business-critical operations.",
        },
        {
          title: "Product Design and MVP Development",
          description:
            "Move from idea to launch with focused discovery, practical product design, and lean implementation.",
          value:
            "Reach a usable first release sooner while keeping the roadmap grounded in customer and business priorities.",
        },
      ],
    },
  },
  es: {
    site: {
      title: "DevStack Labs | Consultora premium de software y estudio de productos",
      description:
        "DevStack Labs diseña y construye software a medida, productos SaaS, herramientas internas y sistemas de automatización para equipos que necesitan productos digitales confiables y escalables.",
      nav: [
        { href: "/", label: "Inicio" },
        { href: "/about", label: "Nosotros" },
        { href: "/services", label: "Servicios" },
        { href: "/products", label: "Productos" },
        { href: "/resources", label: "Recursos" },
        { href: "/contact", label: "Contacto" },
      ],
      contactEmail: "devstacklabshq@gmail.com",
      contactLabel: "Contacto",
      languageLabel: "Idioma",
      languages: {
        en: "English",
        es: "Español",
      },
      openNavigationLabel: "Abrir menú de navegación",
      closeNavigationLabel: "Cerrar menú de navegación",
      consultationCta: "Contacto",
      footerRights: "Todos los derechos reservados.",
    },
    ui: {
      viewProduct: "Ver producto",
      visitWebsite: "Visitar sitio",
      status: {
        live: "Activo",
        beta: "Beta",
        comingSoon: "Próximamente",
      },
    },
    home: {
      heroTitle: "DevStack Labs crea software que impulsa a las empresas.",
      heroDescription:
        "Software a medida, productos SaaS, herramientas internas y automatización para equipos que necesitan tecnología confiable y escalable.",
      heroPrimaryCta: "Contacto",
      heroSecondaryCta: "Productos",
      productsTitle: "Productos",
      ctaTitle: "¿Listo para empezar?",
      ctaPrimaryLabel: "Contacto",
      ctaSecondaryLabel: "Nosotros",
    },
    about: {
      metaTitle: "Nosotros",
      metaDescription:
        "DevStack Labs: consultoría de software y entrega de productos.",
      title: "Nosotros",
      description:
        "Ayudamos a convertir requisitos complejos en software claro y confiable. Pensamiento de producto, profundidad técnica y entrega pragmática.",
      ctaLabel: "Contacto",
    },
    servicesPage: {
      metaTitle: "Servicios",
      metaDescription:
        "Servicios de DevStack Labs: software a medida, SaaS, herramientas internas, automatización.",
      title: "Servicios",
      description: "Te ayudamos a planificar, construir y entregar software que genera valor real.",
      catalogTitle: "Qué hacemos",
      ctaLabel: "Contacto",
    },
    productsPage: {
      metaTitle: "Productos",
      metaDescription:
        "Productos de software de DevStack Labs: apps activas, plataformas beta y SaaS.",
      title: "Productos",
      description: "Software que construimos y publicamos.",
      catalogTitle: "Nuestros productos",
      ctaLabel: "Contacto",
    },
    productDetail: {
      snapshotTitle: "Resumen del producto",
      statusLabel: "Estado",
      targetUsersLabel: "Usuarios objetivo",
      techStackLabel: "Stack tecnológico",
      problemEyebrow: "Problema",
      problemTitle: "Qué resuelve este producto",
      featuresEyebrow: "Funciones clave",
      featuresTitle: "Capacidades diseñadas para uso operativo real.",
      screenshotsEyebrow: "Capturas",
      screenshotsTitle: "Placeholders visuales listos para imágenes reales del producto.",
      screenshotsDescription:
        "Cada tarjeta puede reemplazarse con capturas reales, assets de marketing o vistas previas de interfaz cuando estén disponibles.",
      screenshotPlaceholder: "Placeholder de captura",
      ctaEyebrow: "Interesado en este producto",
      ctaTitle: "Explora cómo este producto puede apoyar a tu equipo.",
      ctaDescription:
        "Usa esta página como una plantilla reutilizable para futuros lanzamientos de producto, captura de leads y storytelling más profundo a través del portafolio de DevStack Labs.",
      ctaSecondaryLabel: "Contactar a DevStack Labs",
      notFoundTitle: "Producto no encontrado",
    },
    contact: {
      metaTitle: "Contacto",
      metaDescription:
        "Contacta a DevStack Labs para conversar sobre software a medida, productos SaaS, herramientas internas o soluciones de automatización.",
      title: "Contacto",
      description: "Envía un mensaje o escríbenos por correo.",
      emailLabel: "Correo",
      form: {
        name: "Nombre",
        email: "Correo",
        message: "Mensaje",
        placeholders: {
          name: "Tu nombre",
          email: "tu@empresa.com",
          message: "¿En qué podemos ayudarte?",
        },
        submit: "Enviar",
        success: "Gracias. Te responderemos pronto.",
        sendError: "Algo salió mal. Intenta de nuevo o escríbenos por correo.",
        errors: {
          name: "Por favor, ingresa tu nombre.",
          emailRequired: "Por favor, ingresa tu correo.",
          emailInvalid: "Por favor, ingresa un correo válido.",
          messageRequired: "Por favor, escribe un mensaje.",
        },
      },
    },
    resources: {
      metaTitle: "Recursos",
      metaDescription:
        "Recursos e insights de DevStack Labs.",
      title: "Recursos",
      description: "Insights, casos de estudio y notas de producto. Más contenido próximamente.",
      ctaLabel: "Contacto",
    },
    notFound: {
      eyebrow: "404",
      title: "La página que buscas no existe.",
      description:
        "El enlace puede estar desactualizado o la página puede haberse movido mientras crece el sitio de DevStack Labs. Usa la navegación de abajo para seguir explorando.",
      homeLabel: "Volver al inicio",
      productsLabel: "Ver productos",
    },
    shared: {
      services: [
        {
          title: "Desarrollo de software a medida",
          description:
            "Construye sistemas seguros y mantenibles adaptados a tus flujos, tus datos y tu modelo de negocio.",
          value:
            "Reemplaza operaciones guiadas por hojas de cálculo y herramientas desconectadas con software que se ajusta a la forma real en que trabaja tu equipo.",
        },
        {
          title: "Desarrollo de productos SaaS",
          description:
            "Lanza software por suscripción con estrategia de producto, ingeniería full-stack y bases preparadas para crecer.",
          value:
            "Valida más rápido, reduce el riesgo técnico y crea una plataforma que pueda escalar con la demanda de clientes.",
        },
        {
          title: "Desarrollo de aplicaciones web",
          description:
            "Entrega aplicaciones modernas basadas en navegador con una UX sólida, buen rendimiento y flexibilidad de integración.",
          value:
            "Brinda a clientes y equipos internos una experiencia digital confiable, fácil de adoptar y simple de extender.",
        },
        {
          title: "Desarrollo de aplicaciones móviles",
          description:
            "Crea experiencias móviles para equipos de campo, clientes y flujos operativos que deben funcionar fuera de la oficina.",
          value:
            "Mejora la capacidad de respuesta, captura datos en el origen y soporta uso real en terreno.",
        },
        {
          title: "Desarrollo de APIs y backend",
          description:
            "Ingeniería de backends resilientes, integraciones y capas de servicio que mantienen sincronizados los datos críticos.",
          value:
            "Habilita automatización, simplifica integraciones y crea una base sólida para futuras funcionalidades de producto.",
        },
        {
          title: "Arquitectura de software",
          description:
            "Diseña bases técnicas, límites de sistema y enfoques de entrega que reducen complejidad con el tiempo.",
          value:
            "Toma mejores decisiones técnicas desde el inicio y evita reconstrucciones costosas conforme crecen tu producto y tu equipo.",
        },
        {
          title: "Automatización y soluciones de workflow",
          description:
            "Automatiza procesos repetitivos, aprobaciones y movimiento de datos entre las herramientas que tu negocio ya usa.",
          value:
            "Libera capacidad valiosa del equipo, reduce errores manuales y acelera operaciones críticas del negocio.",
        },
        {
          title: "Diseño de producto y desarrollo de MVP",
          description:
            "Pasa de idea a lanzamiento con discovery enfocado, diseño de producto práctico e implementación lean.",
          value:
            "Llega antes a una primera versión utilizable manteniendo el roadmap anclado en prioridades de cliente y negocio.",
        },
      ],
    },
  },
};

export function getDictionary(locale: Locale = defaultLocale) {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
