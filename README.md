# Mi Portafolio

Portafolio profesional de **Luis Angel Rodriguez Martinez**, estudiante de Ingeniería en Tecnologías de Información en la Universidad Politécnica de San Luis Potosí.

## Sobre el sitio

Sitio de una sola página construido con HTML, CSS y JavaScript puro (sin frameworks ni dependencias externas de build). Incluye:

- **Hero** con presentación y rotación de roles (desarrollo, redes, bases de datos, diseño).
- **Sobre mí** — línea de tiempo interactiva ("Ver más / Ver menos") con mi evolución desde primaria hasta la universidad.
- **Idiomas y certificaciones** — inglés, francés, portugués y certificación Cambridge.
- **Habilidades** — desarrollo de software, redes, bases de datos y diseño de interfaces.
- **Proyectos** — tarjetas clicables que abren un modal con el caso de estudio completo:
  - Modernización de la Plataforma Web del Gimnasio Universitario (con roadmap por fases).
  - Simulación de Microempresa desde Cero (proyecto de sushi, con habilidades de patrocinio aplicadas).
  - Creación de Experiencias Interactivas en Roblox (con habilidades técnicas necesarias).
- **Contacto** — formulario que abre tu cliente de correo con el mensaje ya redactado, más enlaces a redes sociales.

## Estructura del proyecto

```
Mi-Portafolio/
├── index.html      # Estructura y contenido del sitio
├── style.css       # Estilos (paleta morada, tipografía Plus Jakarta Sans)
├── script.js       # Interacciones: menú móvil, timeline, modales, formulario
└── assets/
    ├── gimnasio-dashboard.png
    ├── sushi-logo.png
    └── roblox-experience.png
```

## ⚠️ Antes de publicar

En `script.js` reemplaza este correo por el tuyo real:

```js
const CONTACT_EMAIL = 'tuemail@ejemplo.com';
```

## Tecnologías

- HTML5 semántico
- CSS3 (variables, Grid, Flexbox, animaciones)
- JavaScript vanilla (sin librerías)
- Google Fonts — [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

## Cómo verlo localmente

1. Clona el repositorio o descarga los archivos manteniendo la estructura de carpetas (¡`assets/` debe conservarse!).
2. Abre `index.html` en tu navegador (no necesita servidor ni instalación).

## Despliegue

1. Sube **todos** estos archivos y la carpeta `assets/` a la raíz de tu repositorio (mismo nivel, sin meterlos dentro de otra carpeta).
2. En **Settings → Pages**, en **Source** selecciona **"Deploy from a branch"**, rama `main`, carpeta `/ (root)`.
3. Espera unos minutos y visita tu URL de GitHub Pages.

---

Hecho por Luis Angel Rodriguez Martinez.
