# Plantilla Versátil de Página de Aterrizaje, Blog y Documentación para una Presencia Web Simplificada

![ScrewFast](https://github.com/mearashadowfax/ScrewFast/assets/125820963/cdf299bd-414a-4a2d-baf0-d188bb4709c7)

ScrewFast es una **plantilla de código abierto** diseñada para la configuración rápida y eficiente de proyectos web, combinando **minimalismo con funcionalidad**. Ya sea que estés mostrando un portafolio, lanzando una página de aterrizaje de una empresa o administrando un blog, ScrewFast proporciona todo lo que necesitas. Al combinar el poder de [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/) y [Preline UI](https://preline.co/), esta plantilla ofrece una solución funcional y estéticamente agradable para tu presencia web.

**[Ver Demostración en Vivo](https://screwfast.uk)**

## Tabla de Contenidos

- [¿Por qué Elegir ScrewFast?](#por-qué-elegir-screwfast)
- [¿Qué Hay de Nuevo?](#qué-hay-de-nuevo)
- [Empezando](#empezando)
  - [Instalación](#instalación)
  - [Comandos de Desarrollo](#comandos-de-desarrollo)
- [Despliegue](#despliegue)
  - [Construyendo Tu Sitio](#construyendo-tu-sitio)
  - [Desplegando a Vercel](#desplegando-a-vercel)
  - [Desplegando a Netlify](#desplegando-a-netlify)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Recursos Estáticos y Públicos](#recursos-estáticos-y-públicos)
- [Personalización](#personalización)
  - [Editando Variables de Componentes](#editando-variables-de-componentes)
  - [Props en Instancias de Componentes](#props-en-instancias-de-componentes)
  - [Personalizando Enlaces de Navegación y Pie de Página](#personalizando-enlaces-de-navegación-y-pie-de-página)
    - [Enlaces de la Barra de Navegación](#enlaces-de-la-barra-de-navegación)
    - [Enlaces del Pie de Página](#enlaces-del-pie-de-página)
    - [Enlaces de Redes Sociales](#enlaces-de-redes-sociales)
- [Integraciones y Mejoras](#integraciones-y-mejoras)
  - [Documentación de Starlight](#documentación-de-starlight)
  - [Lenis para Desplazamiento Suave](#lenis-para-desplazamiento-suave)
  - [Integración de GSAP](#integración-de-gsap)
  - [Ocultando la Barra de Desplazamiento](#ocultando-la-barra-de-desplazamiento)
  - [Configuración SEO](#configuración-seo)
    - [Usando constants.ts](#usando-constantsts)
    - [Aplicando Metadatos en Diseños](#aplicando-metadatos-en-diseños)
    - [Pasando Esquema Individual](#pasando-esquema-individual)
    - [Extendiendo Metadatos para SEO](#extendiendo-metadatos-para-seo)
    - [Datos Estructurados y Fragmentos Enriquecidos](#datos-estructurados-y-fragmentos-enriquecidos)
    - [Usando Integraciones SEO de Astro](#usando-integraciones-seo-de-astro)
  - [Robots.txt](#robotstxt)
  - [Markdown/MDX](#markdownmdx)
    - [Integración de Imágenes](#integración-de-imágenes)
  - [Integraciones de Astro](#integraciones-de-astro)
  - [Flexibilidad con Integraciones](#flexibilidad-con-integraciones)
- [Herramientas y Tecnologías](#herramientas-y-tecnologías)
  - [Preline UI](#preline-ui)
  - [Tailwind CSS](#tailwind-css)
  - [Despliegue y Seguridad](#despliegue-y-seguridad)
  - [Minificación HTML](#minificación-html)
- [Contribuyendo](#contribuyendo)
- [Licencia](#licencia)

## ¿Por qué Elegir ScrewFast?

- **Arquitectura Eficiente:** Despliega más rápido con una plantilla que es fácil de configurar y navegar.
- **Optimizado para Proyectos Pequeños:** Perfecto para personas web nítidas y profesionales sin exceso de complejidad.
- **Altamente Personalizable:** Adapta y estiliza tu sitio de manera flexible usando Astro y Tailwind CSS.

### Características

- **Impulsado por Astro:** Utiliza un marco moderno de generación de sitios estáticos.
- **Tailwind CSS:** Disfruta del desarrollo rápido de la interfaz de usuario con un marco CSS de primera utilidad.
- **Preline UI:** Implementa componentes de interfaz de usuario preconstruidos para mayor elegancia.
- **Integración de GSAP:** Impresiona con animaciones profesionales y pulidas.
- **Colecciones de Contenido Markdown:** Organiza y gestiona tu contenido sin problemas.
- **Documentación de Starlight:** Un tema de documentación elegante, fácil de usar y con todas las funciones.
- **Internacionalización (i18n):** Integra las funciones de internacionalización de Astro.
- **SEO y Responsividad:** Asegura que tu sitio sea detectable y accesible en cualquier dispositivo.

## ¿Qué Hay de Nuevo?

- [x] **Componente de Compartir en Redes Sociales**:

  - Permite a los usuarios compartir publicaciones de blog en plataformas de redes sociales.
  - Proporciona un intercambio fácil del título y la URL de una publicación de blog.
  - Integra Clipboard.js para copiar enlaces fácilmente.

- [x] **Componente de Botón de Marcador**:

  - Permite a los usuarios marcar publicaciones de blog para referencia posterior usando `localStorage`.
  - Proporciona una indicación visual de si una publicación está marcada.
  - Para SSR, reemplaza `localStorage` con cookies para persistir las publicaciones marcadas.
    - Esta configuración abre la posibilidad de que el servidor represente dinámicamente el contenido basado en marcadores específicos del usuario, si decides implementar esta función.

- [x] **Componente de Retroalimentación de Publicación**:

  - Recopila comentarios de los usuarios al final de las publicaciones de blog.
  - Sirve como una demostración de la interfaz de usuario (actualmente no hay integración de back-end).

- [x] **Integración del Tema de Documentación de Starlight**:

  - Un tema de documentación elegante, fácil de usar y con todas las funciones, que mejora la legibilidad y la usabilidad de la documentación.
  - Mejora la legibilidad y la usabilidad de la documentación con funciones como navegación del sitio, búsqueda, modo oscuro, resaltado de código y soporte de internacionalización.

- [x] **Componente de Conjunto de Iconos**:

  - Centraliza los iconos SVG para facilitar la gestión y las actualizaciones.
  - Representa cualquier icono SVG predefinido usando `<Icon name="nombreDelIcono" />` en tus componentes de Astro.
  - **Nota:** Los desarrolladores tienen la opción de usar otras integraciones de la comunidad como [astro-icons](https://github.com/natemoo-re/astro-icon). Sin embargo, el autor decidió crear un componente de conjunto de iconos personalizado para gestionar los iconos personalizados.

- [x] **Funciones de Internacionalización (i18n)**:

  - Integra [las funciones i18n de Astro](https://docs.astro.build/en/guides/internationalization/) e incluye un componente `LanguagePicker` personalizado.
  - Los desarrolladores pueden acceder a la versión monolingüe directamente desde la [`rama monolingual-site`](https://github.com/mearashadowfax/ScrewFast/tree/monolingual-site).

- [x] **Tabla de Contenidos Dinámica (ToC) con Indicador de Progreso de Desplazamiento**:
  - Resalta la sección relevante en la ToC con un indicador de progreso de desplazamiento.
  - Los desarrolladores que busquen alternativas podrían considerar el plugin [remark-toc](https://github.com/remarkjs/remark-toc).

> [!NOTE]
> Actualmente, no hay mejoras planificadas ni errores conocidos. Si encuentras algún problema, infórmalo en nuestra [página de problemas](https://github.com/mearashadowfax/ScrewFast/issues) o [inicia una discusión](https://github.com/mearashadowfax/ScrewFast/discussions/new/choose) para compartir ideas, sugerencias o hacer preguntas.

## Comenzando

Esta guía te proporcionará los pasos necesarios para configurar y familiarizarte con el proyecto Astro en tu máquina de desarrollo local.

### Usa Esta Plantilla

Para comenzar, haz clic en el botón `Use this template` (el botón verde grande en la parte superior derecha) para crear tu propio repositorio a partir de esta plantilla en tu cuenta de GitHub.

### Clona el Repositorio

Una vez que tu repositorio esté creado, puedes clonarlo en tu máquina local utilizando los siguientes comandos:

```bash
git clone https://github.com/[TU_USUARIO]/[TU_REPOSITORIO].git
cd [TU_REPOSITORIO]
```

### Instalación

Comienza instalando las dependencias del proyecto. Abre tu terminal, navega al directorio raíz del proyecto y ejecuta:

```bash
npm install
```

Este comando instalará todas las dependencias necesarias definidas en el archivo `package.json`.

### Comandos de Desarrollo

Con las dependencias instaladas, puedes utilizar los siguientes scripts de npm para gestionar el ciclo de desarrollo de tu proyecto:

- `npm run dev`: Inicia un servidor de desarrollo local con recarga en caliente habilitada.
- `npm run preview`: Sirve tu salida de compilación localmente para previsualizar antes del despliegue.
- `npm run build`: Empaqueta tu sitio en archivos estáticos para producción.

Para obtener ayuda detallada sobre los comandos de la CLI de Astro, visita la [documentación de Astro](https://docs.astro.build/en/reference/cli-reference/).

## Despliegue

### Construyendo Tu Sitio

Antes del despliegue, necesitas crear una compilación de producción:

```bash
npm run build
```

Esto crea un directorio `dist/` con tu sitio compilado (configurable a través de [outDir en Astro](https://docs.astro.build/en/reference/configuration-reference/#outdir)).

### Desplegando a Vercel

Haz clic en el botón a continuación para comenzar a desplegar tu proyecto en Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmearashadowfax%2FScrewFast)

### Desplegando a Netlify

Haz clic en el botón a continuación para comenzar a desplegar tu proyecto en Netlify:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mearashadowfax/ScrewFast)

## Estructura del Proyecto

ScrewFast organiza componentes modulares, contenido y diseños para agilizar el desarrollo y la gestión de contenido.

```md
src/
├── assets/  
│ ├── scripts/ # Scripts JS
│ └── styles/ # Estilos CSS
├── components/ # Componentes reutilizables
│ ├── Meta.astro # Componente Meta para SEO
│ ├── sections/ # Componentes para varias secciones del sitio web
│ ├── ThemeIcon.astro # Componente para alternar entre temas claro/oscuro
│ └── ui/ # Componentes de UI categorizados por funcionalidad
├── content/ # Archivos Markdown para publicaciones de blog, insights, productos y configuración del sitio
│ ├── blog/
│ ├── docs/  
│ ├── insights/  
│ └── products/  
├── data_files/ # Cadenas almacenadas como archivos JSON
├── images/ # Recursos de imágenes estáticas para usar en todo el sitio web
├── layouts/ # Componentes que definen plantillas de diseño
│ └── MainLayout.astro # El diseño principal para todas las páginas
├── pages/ # Archivos Astro que representan páginas individuales y secciones del sitio web
│ ├── 404.astro # Página personalizada 404
│ ├── blog/  
│ ├── fr/ # Contenido localizado
│ ├── contact.astro  
│ ├── index.astro # La página de inicio/landing
│ ├── insights/  
│ ├── products/  
│ ├── robots.txt.ts # Genera dinámicamente robots.txt
│ └── services.astro
├── utils/ # Funciones y utilidades compartidas
└── content.config.ts # Contiene opciones de configuración para colecciones de contenido
```

## Recursos Estáticos y Públicos

Los archivos estáticos que se sirven directamente al navegador están ubicados en el directorio `public` en la raíz del proyecto.

```md
public/
└── banner-pattern.svg
```

## Personalización

ScrewFast permite una fácil personalización para adaptarse a tus necesidades específicas. Aquí hay un par de formas en las que puedes configurar componentes y contenido:

### Editando Variables de Componentes

Algunos componentes tienen propiedades definidas como variables de TypeScript dentro del archivo del componente. Aquí tienes un ejemplo de cómo personalizar el componente `FeaturesGeneral`:

```typescript
// Define las variables de tipo string title y subTitle para el texto del encabezado principal y el subtítulo.
const title: string = "Satisfaciendo las Demandas de la Industria";
const subTitle: string =
  "En ScrewFast, abordamos los desafíos únicos que se encuentran en los sectores de hardware y construcción.";
```

Para colecciones de contenido como testimonios o estadísticas, edita el arreglo correspondiente de objetos:

```typescript
// Un arreglo de testimonios
const testimonials: Testimonial[] = [...];

// Un arreglo de estadísticas
const statistics: StatProps[] = [...];
```

Modifica el contenido dentro de estos arreglos para reflejar tus datos.

### Props en Instancias de Componentes

Puedes pasar valores a las props directamente en los archivos de página para los componentes utilizados en varias páginas. Aquí tienes un ejemplo de un componente `HeroSection` y `ClientsSection` con props en línea:

```html
<HeroSection
  subTitle="Herramientas de hardware de alta calidad y servicios de construcción expertos para cada necesidad de proyecto."
  primaryBtn="Comienza a Explorar"
  primaryBtnURL="/explorar"
/>

<ClientsSection
  title="Confiado por Líderes de la Industria"
  subTitle="Experimenta la fiabilidad elegida por gigantes de la industria."
/>
```

```html
<HeroSection
  subTitle="Herramientas de hardware de alta calidad y servicios de construcción expertos para cada necesidad de proyecto."
  primaryBtn="Comienza a Explorar"
  primaryBtnURL="/explorar"
/>

<ClientsSection
  title="Confiado por Líderes de la Industria"
  subTitle="Experimenta la fiabilidad elegida por gigantes de la industria."
/>
```

### Personalización de Navegación y Enlaces de Pie de Página

Edita el archivo `navigation.ts` dentro del directorio `utils` para gestionar los enlaces de la barra de navegación y del pie de página:

#### Enlaces de la Barra de Navegación

Edita el arreglo `navBarLinks` para ajustar los enlaces de la barra de navegación:

```typescript
// Un arreglo de enlaces para la barra de navegación
export const navBarLinks: NavLink[] = [
  { name: "Inicio", url: "/" },
  { name: "Productos", url: "/productos" },
  { name: "Servicios", url: "/servicios" },
  { name: "Blog", url: "/blog" },
  { name: "Contacto", url: "/contacto" },
];
```

Reemplaza `name` con el texto que se mostrará y `url` con la ruta correspondiente a las páginas de tu sitio.

#### Enlaces del Pie de Página

De manera similar, ajusta los enlaces que se muestran en el pie de página editando el arreglo `footerLinks`:

```typescript
// Un arreglo de enlaces para el pie de página
export const footerLinks: FooterLinkSection[] = [
  {
    section: "Producto",
    links: [
      { name: "Herramientas y Equipos", url: "/herramientas-equipos" },
      { name: "Servicios de Construcción", url: "/servicios-construccion" },
      { name: "Precios", url: "/precios" },
    ],
  },
  {
    section: "Empresa",
    links: [
      { name: "Sobre Nosotros", url: "/sobre-nosotros" },
      { name: "Blog", url: "/blog" },
      { name: "Carreras", url: "/carreras" },
      { name: "Clientes", url: "/clientes" },
    ],
  },
];
```

Cada sección dentro del arreglo `footerLinks` representa un grupo de enlaces. Actualiza el valor de `section` para el encabezado del grupo y modifica cada enlace con su `name` y `url` según sea necesario.

#### Enlaces de Redes Sociales

Reemplaza las URLs de marcador de posición en el objeto `socialLinks` con los perfiles de tus redes sociales:

```typescript
// Un objeto de enlaces para íconos sociales
export const socialLinks: SocialLinks = {
  facebook: "#",
  twitter: "#",
  github: "#",
  linkedin: "#",
  instagram: "#",
};
```

> [!NOTA]
> Recuerda agregar URLs completas y válidas para que la navegación funcione correctamente. Estas personalizaciones se reflejarán en todo tu sitio Astro, promoviendo la consistencia en todas las páginas.

#### Componentes Adicionales

Tenemos dos opciones para los componentes de la barra de navegación: `Navbar.astro` para una barra de navegación regular y `NavbarMegaMenu.astro` para un mega menú. Ambos están ubicados en `src/components/sections/navbar&footer`.

Los componentes `Navbar.astro` y `NavbarMegaMenu.astro` pueden configurarse dentro de `MainLayout.astro`, permitiéndote elegir el estilo de navegación que mejor se adapte a tu proyecto. Para personalizar estos componentes, puedes modificarlos directamente en `src/components/sections/navbar&footer` para aplicar configuraciones específicas o actualizaciones de diseño.

![ScrewFast MegaMenu](https://github.com/user-attachments/assets/690482af-f1a4-4ebf-be58-eca0b5862973)

## Integraciones y Mejoras

### Documentación de Starlight

ScrewFast ahora está equipado con Starlight, diseñado para elevar la experiencia del usuario con documentación. Este tema moderno y elegante incluye un conjunto de características para hacer que el contenido sea más accesible y fácil de navegar.

Características Clave:

- **Navegación del Sitio y Búsqueda**: Navega sin esfuerzo utilizando la barra lateral intuitiva y la funcionalidad de búsqueda integrada.
- **Internacionalización**: Llega a una audiencia global con capacidades de cambio de idioma, haciendo que la documentación sea accesible en todo el mundo.
- **Amigable con SEO**: Optimizado para motores de búsqueda, ayudando a los usuarios a encontrar rápidamente la información que necesitan.
- **Resaltado de Código y Modo Oscuro**: Mejora la legibilidad del código con resaltado de sintaxis y ofrece un modo oscuro para reducir la fatiga visual.
- **Diseño Responsivo para Móviles**: Se adapta a cualquier tamaño de pantalla, ya sea en un teléfono, tableta o escritorio, para una lectura óptima.

Con Starlight, obtienes acceso a potentes características e integraciones, así como amplias opciones de personalización para adaptarse a tus necesidades.

> [!NOTA]
> Explora la lista completa de características de Starlight y aprende cómo puede simplificar tu proceso de desarrollo visitando el [sitio de documentación del tema](https://starlight.astro.build/).

> [!IMPORTANTE]  
> Si la barra lateral en tu sitio Starlight no se desplaza y tienes que arrastrar manualmente la barra de desplazamiento, elimina la etiqueta de script relacionada con la biblioteca de desplazamiento suave Lenis de `src/components/ui/starlight/Head.astro`.

### Lenis para Desplazamiento Suave

Experimenta un desplazamiento suave y fluido con [Lenis](https://lenis.studiofreight.com/). Hemos integrado Lenis para proporcionar una experiencia de desplazamiento mejorada que es tanto fluida como receptiva.

Así es como configuramos Lenis en `src/assets/scripts/lenisSmoothScroll.js`:

```js
// src/assets/scripts/lenisSmoothScroll.js
import "@styles/lenis.css";

import Lenis from "lenis";

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
```

Y luego lo añadimos a `MainLayout.astro`:

```astro
<script>
  import "@scripts/lenisSmoothScroll.js";
</script>
```

Ten en cuenta que el desplazamiento suave puede afectar la accesibilidad y el rendimiento en algunos dispositivos, por lo que asegúrate de probarlo exhaustivamente en diferentes entornos.

> [!NOTA]

### Integración de GSAP

Para las páginas individuales de productos, se ha integrado [GSAP](https://gsap.com/) para añadir animaciones atractivas que se ejecutan tan pronto como se carga la página del producto. Puedes encontrar y modificar la configuración de GSAP en las secciones de script del archivo de la página del producto ubicado en `src/pages/products/[id].astro` y en la página de insights en `src/pages/insights/[id].astro`:

```astro
<script>
  import { gsap } from "gsap";
  // Inicializa las animaciones de GSAP...
</script>
```

**Personalización de Animaciones:**

Adapta las animaciones de GSAP dentro de este script para que se ajusten al estilo y diseño de tu proyecto. El ejemplo proporcionado es un punto de partida que muestra cómo aprovechar GSAP para un impacto visual inmediato al cargar una página de producto.

**Modificar o Eliminar Animaciones:**

- Para modificar una animación, actualiza las propiedades y parámetros dentro del método `gsap.from()`, o añade nuevas llamadas de animación de GSAP según sea necesario.
- Si GSAP no es necesario, o prefieres un método de animación diferente, simplemente elimina el segmento de script mencionado.

> [!NOTA]
> Hemos optado por mantener la integración ligera y enfocada, pero puedes consultar la documentación completa de GSAP para animaciones más complejas: [Documentación de GSAP](https://gsap.com/docs/v3/).

### Ocultando la Barra de Desplazamiento

Para lograr un diseño más limpio y espacioso, se ha eliminado visualmente la barra de desplazamiento predeterminada. Aunque esta elección se ajusta a los objetivos estéticos del proyecto, es importante considerar que ocultar las barras de desplazamiento puede afectar la accesibilidad y la experiencia del usuario. Recomendamos evaluar esta decisión de diseño en el contexto de tu base de usuarios y sus necesidades.

Para quienes prefieran barras de desplazamiento personalizadas, sugerimos usar el plugin [tailwind-scrollbar](https://adoxography.github.io/tailwind-scrollbar/), que añade utilidades de Tailwind CSS para estilos de barras de desplazamiento, permitiendo una personalización más controlada que también puede cumplir con los estándares de accesibilidad.

> [!NOTA]
> Si deseas restaurar la barra de desplazamiento predeterminada, puedes comentar o eliminar el siguiente CSS de `src/layouts/MainLayout.astro`:

```html
<style>
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
```

Además, actualiza la etiqueta `<html>` para eliminar la clase `scrollbar-hide`, resultando en:

```html
<html lang="es" class="scroll-pt-16"></html>
```

### Configuración SEO

La configuración SEO en la plantilla ScrewFast está diseñada para permitir a los usuarios optimizar la visibilidad de su sitio web en motores de búsqueda y plataformas de redes sociales. Esta documentación detalla los aspectos de implementación y las instrucciones de uso para gestionar eficazmente las configuraciones SEO.

#### Usando constants.ts

La configuración SEO se ha centralizado utilizando el archivo `constants.ts`. Este archivo gestiona datos relacionados con SEO como títulos de página, descripciones, datos estructurados y etiquetas Open Graph, proporcionando un enfoque más estructurado y manejable para la gestión SEO.

Para personalizar las configuraciones SEO, modifica los valores en el archivo `constants.ts`. Las configuraciones clave incluyen SITE, SEO y OG, permitiendo a los desarrolladores definir parámetros SEO a nivel del sitio.

```typescript
// constants.ts

export const SITE = {
  title: "ScrewFast",
  // Otras propiedades de SITE...
};

export const SEO = {
  title: SITE.title,
  // Otras propiedades de SEO...
};

export const OG = {
  title: `${SITE.title}: Herramientas de Hardware y Servicios de Construcción`,
  // Otras propiedades de OG...
};
```

#### Aplicando Metadatos en Diseños

Al aplicar metadatos dentro de tus diseños, como `MainLayout.astro`, puedes pasar los valores deseados como props al componente `Meta`:

```astro
---
// En el archivo MainLayout.astro
const { meta } = Astro.props;

interface Props {
  meta?: string;
}
---

<Meta meta={meta} />
```

#### Pasando Esquema Individual

Para sobrescribir configuraciones SEO específicas de una página, los desarrolladores pueden pasar propiedades individuales de esquema dentro de archivos de página específicos.

```astro
---
import { SITE } from "@/data_files/constants";
---
<MainLayout
  title={`Página de Ejemplo | ${SITE.title}`}
  structuredData={{
    "@type": "WebPage",
    // Otras propiedades de datos estructurados...
  }}
>
  <!-- Contenido de la página -->
</MainLayout>
```

Con esta configuración, el componente Meta recibe la descripción meta personalizada y la aplica a los metadatos de la página. Si no se pasa un valor personalizado, se usará el valor predeterminado de `Meta.astro`.

#### Extendiendo Metadatos para SEO

Para una estrategia SEO más robusta, puedes crear propiedades adicionales en el componente `Meta.astro`. Por ejemplo, puedes incluir etiquetas Open Graph específicas para fechas de publicación de artículos o etiquetas específicas para metadatos de Twitter.

#### Datos Estructurados y Fragmentos Enriquecidos

Los datos estructurados en formato JSON-LD pueden ser gestionados por el componente `Meta.astro`, mejorando cómo los motores de búsqueda comprenden el contenido de tu página y potencialmente mejorando los resultados de búsqueda con fragmentos enriquecidos. Modifica la propiedad `structuredData` con tipos y propiedades relevantes de [schema.org](https://schema.org):

```astro
<MainLayout
  structuredData={{
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ScrewFast",
    "url": "https://screwfast.uk",
    "description": "Descubre herramientas de hardware y servicios de alta calidad"
  }}
>
```

#### Usando Integraciones SEO de Astro

Aunque la plantilla proporciona una solución SEO personalizada, puedes optar por utilizar una integración de Astro como [Astro SEO](https://github.com/jonasmerlin/astro-seo#readme) para características adicionales y optimizaciones SEO. Integrar un paquete como este podría proporcionar una gestión de metadatos más automatizada y funcionalidades adicionales enfocadas en SEO.

### Robots.txt

`robots.txt` se genera dinámicamente utilizando el código encontrado en `src/pages/robots.txt.ts`. Esta configuración sigue el ejemplo de la documentación de Astro:

```ts
import type { APIRoute } from "astro";

const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${new URL("sitemap-index.xml", import.meta.env.SITE).href}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
```

### Markdown/MDX

#### Integración de Imágenes

La adición del archivo `.vscode/settings.json` en el directorio raíz facilita la integración de imágenes directamente en las colecciones de contenido dentro de los editores Markdown. Esta funcionalidad permite la creación sencilla de enlaces Markdown con archivos multimedia y la copia directa al espacio de trabajo.

##### Uso

- **Pegar/Arrastrar Imágenes**: Activa esta función presionando <kbd>Shift</kbd> mientras arrastras el archivo.
- **Enlace Markdown**: La imagen se enlaza utilizando la sintaxis Markdown `(![texto alternativo](../../images/content/<ruta>))`.
- **Gestión de Archivos**: Las imágenes se organizan en `src/images/content/<ruta>`.

##### Ejemplo

Al pegar `getting-started.png` en `src/content/post-1.md`, se realiza lo siguiente:

- Se añade `![texto alternativo](../../images/content/post-1/getting-started.png)` a `post-1.md`.
- Se mueve el archivo de imagen a `src/images/content/post-1/getting-started.png`.

> [!NOTA]
> Recuerda presionar <kbd>Shift</kbd> mientras arrastras imágenes.

### Integraciones de Astro

Maximiza la eficiencia de tu sitio web con estas integraciones incorporadas de Astro:

- [Astro Compressor](https://github.com/sondr3/astro-compressor#readme): Comprime automáticamente el sitio generado por Astro utilizando gzip o brotli, asegurando tiempos de carga más rápidos. Configura el compresor en el archivo `astro.config.mjs`:

```mjs
  export default defineConfig({
    // ...otras configuraciones de Astro
   integrations: [...otras integraciones de Astro, compressor({ gzip: false, brotli: true })],
  });
```

- [Astro Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/): Genera automáticamente un mapa del sitio para un sitio web, lo cual es vital para el SEO y para ayudar a los bots de los motores de búsqueda a rastrear las páginas de manera efectiva. Para configurar Astro Sitemap, asegúrate de especificar la URL base de tu sitio y cualquier opción adicional en el archivo `astro.config.mjs`:

```mjs
export default defineConfig({
  // ...
  site: "https://example.com",
  integrations: [sitemap()],
});
```

- [Bolsa de Trucos para Transiciones de Vista de Astro](https://github.com/martrapp/astro-vtbot#readme): Es una colección de extensiones y soporte diseñados para mejorar las transiciones de vista de Astro. Ya sea que busques añadir estilo a tu sitio web o mejorar la experiencia del usuario, este conjunto de herramientas ofrece diversas técnicas para elevar tus proyectos. En la plantilla, se utilizó para añadir transiciones de vista a una documentación de Starlight.

### Flexibilidad con Integraciones

Lo grandioso de Astro es su rico ecosistema de integraciones, lo que permite personalizar las funcionalidades del proyecto según tus necesidades exactas. Siéntete libre de explorar la [página de integraciones de Astro](https://astro.build/integrations/) y añadir capacidades adicionales según lo consideres necesario.

## Herramientas y Tecnologías

Este proyecto está construido utilizando una variedad de herramientas y tecnologías que mejoran su rendimiento, mantenibilidad y experiencia del desarrollador. A continuación, se presenta una lista de las herramientas clave y sus roles en el proyecto:

### Preline UI

### Tailwind CSS

El estilo en todo nuestro proyecto utiliza las clases utilitarias ofrecidas por [Tailwind CSS](https://tailwindcss.com). Esta metodología nos permite crear diseños y componentes personalizados con rapidez y eficiencia.

Para garantizar un formato de código consistente, especialmente para la ordenación de clases, hemos integrado el plugin `prettier-plugin-tailwindcss` [plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss). La siguiente configuración está establecida en el archivo `.prettierrc` en la raíz del proyecto:

```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### Despliegue y Seguridad

Desplegamos nuestro proyecto en [Vercel](https://vercel.com), aprovechando su plataforma robusta para flujos de trabajo CI/CD sin problemas. Usando `vercel.json`, configuramos encabezados de seguridad estrictos y políticas de caché, asegurando el cumplimiento de las mejores prácticas de seguridad y rendimiento:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; [otras-directivas]"
        },
        "Encabezados de seguridad adicionales..."
      ]
    }
  ]
}
```

### Minificación de HTML

Para un rendimiento óptimo del sitio, procesamos nuestros archivos HTML con `process-html.mjs`, un [script personalizado](https://straffesites.com/en/blog/optimize-astro-html-post-build) que minifica el HTML después de la fase de compilación para reducir el tamaño del archivo y mejorar los tiempos de carga.

Aquí hay un fragmento de nuestro script de minificación de HTML en `process-html.mjs`:

```mjs
/process-html.mjs
// Fragmento del script de minificación de HTML post-compilación
// ...
await Promise.all(
  files.map(async (file) => {
    // Lógica de procesamiento y minificación de archivos
  })
);
```

Te animamos a consultar la documentación detallada de cada herramienta para comprender completamente sus capacidades y cómo contribuyen al proyecto:

- [Documentación de Preline UI](https://preline.co/docs)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Documentación de Vercel](https://vercel.com/docs)
- [Documentación de html-minifier-terser](https://github.com/terser/html-minifier-terser)

## Contribuyendo

Si estás interesado en ayudar, puedes contribuir de varias maneras:

1.  **Reportando Problemas:** Siéntete libre de usar el rastreador de problemas para reportar errores o solicitar funciones.
    - (Comentario: Se refiere a la sección de "Issues" en el repositorio de GitHub)
2.  **Enviando Solicitudes de Extracción (Pull Requests):** Si has corregido un error o añadido una nueva función, envía una solicitud de extracción con una descripción clara de tus cambios.
    - (Comentario: Las solicitudes de extracción son la forma de proponer cambios al código en GitHub)
3.  **Proporcionando Retroalimentación:** Comparte tus pensamientos sobre las funciones actuales del proyecto y sugiere mejoras.
    - (Comentario: Se anima a los usuarios a dar su opinión para mejorar el proyecto)

## Licencia

Este proyecto se publica bajo la Licencia MIT. Por favor, lee el archivo [LICENSE](https://github.com/mearashadowfax/ScrewFast/blob/main/LICENSE) para obtener más detalles. \* (Comentario: Se hace referencia al archivo que contiene los términos de la licencia)

**Nota:** Esta plantilla de sitio web no tiene afiliación con las empresas mostradas. Los logotipos se utilizan únicamente con fines de demostración y deben reemplazarse en las versiones personalizadas. \* (Comentario: Se aclara que los logotipos mostrados son solo ejemplos)
