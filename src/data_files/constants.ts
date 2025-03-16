import ogImageSrc from "@images/social.png";

// Constantes para definir los datos del sitio web ScrewFast
export const SITE = {
  title: "ScrewFast",
  tagline: "Herramientas de alta calidad",
  description:
    "ScrewFast ofrece herramientas de hardware de alta calidad y servicios expertos en construcción para cubrir todas las necesidades de tu proyecto. Comienza a explorar y contacta a nuestro equipo de ventas para calidad y confiabilidad superiores.",
  description_short:
    "ScrewFast ofrece herramientas de hardware de alta calidad y servicios expertos en construcción para cubrir todas tus necesidades.",
  url: "https://screwfast.uk",
  author: "Emil Gulamov",
};

// Constantes SEO para optimización en motores de búsqueda
export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "es-ES",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

// Constantes para etiquetas Open Graph (redes sociales)
export const OG = {
  locale: "es_ES",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Herramientas y Servicios de Construcción`,
  description:
    "Equipa tus proyectos con las herramientas de alta calidad y servicios de construcción expertos de ScrewFast. Con la confianza de líderes de la industria, ScrewFast ofrece simplicidad, asequibilidad y confiabilidad. ¡Explora ahora!",
  image: ogImageSrc,
};

// Datos sobre empresas asociadas o colaboradores
export const partnersData = [
  {
    icon: `<svg class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5" viewBox="0 0 1033.583 318.543">...</svg>`,
    name: "Primero",
    href: "#",
  },
  {
    icon: `<svg class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5" viewBox="0 0 150 40">...</svg>`,
    name: "Segundo",
    href: "#",
  },
  {
    icon: `<svg class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5" viewBox="0 0 150 39">...</svg>`,
    name: "Tercero",
    href: "#",
  },
  {
    icon: `<svg class="mx-auto h-auto w-24 py-3 sm:mx-0 md:w-32 lg:w-40 lg:py-5" viewBox="0 0 100 42">...</svg>`,
    name: "Cuarto",
    href: "#",
  },
];
