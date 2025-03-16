// Un arreglo de enlaces para la barra de navegación
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Productos", url: "/products" },
  { name: "Servicios", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Contacto", url: "/contact" },
];
// Un arreglo de enlaces para el pie de página
const footerLinks = [
  {
    section: "Ecosistema",
    links: [
      { name: "Documentación", url: "/welcome-to-docs/" },
      { name: "Herramientas y Equipos", url: "/products" },
      { name: "Servicios de Construcción", url: "/services" },
    ],
  },
  {
    section: "Compañía",
    links: [
      { name: "Sobre nosotros", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Carreras | Libro", url: "/libro" },
      { name: "Clientes", url: "#" },
    ],
  },
];
// Un objeto de enlaces para íconos sociales
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};