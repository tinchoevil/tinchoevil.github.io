# Portafolio — Rodolfo Peñaranda Zamora

Sitio estático (HTML + CSS + JS puro, sin frameworks ni build) listo para publicarse en GitHub Pages.

## 🚀 Cómo publicarlo en GitHub Pages

1. Crea un repositorio en GitHub que se llame **exactamente**: `tinchoevil.github.io`
   (debe coincidir con tu usuario de GitHub + `.github.io`)
2. Sube todos los archivos de esta carpeta a la raíz de ese repositorio.
   Puedes hacerlo desde la web de GitHub ("Add file → Upload files") o con Git:
   ```bash
   git init
   git add .
   git commit -m "Primera versión del portafolio"
   git branch -M main
   git remote add origin https://github.com/tinchoevil/tinchoevil.github.io.git
   git push -u origin main
   ```
3. Ve a **Settings → Pages** en tu repositorio. Debería activarse automáticamente
   porque el nombre del repo ya es especial. Si no, en "Build and deployment"
   selecciona **Deploy from a branch**, rama `main`, carpeta `/root`.
4. Espera 1-2 minutos. Tu sitio quedará publicado en:
   **https://tinchoevil.github.io**

## 📸 Foto de perfil

Ya está integrada en `assets/img/perfil.jpg` (optimizada a ~38KB para carga rápida).
Si quieres cambiarla más adelante, reemplaza ese archivo por otra imagen cuadrada
(mínimo 400x400px) con el mismo nombre, o actualiza la ruta en el `<img>` dentro
de `<section class="hero">` en `index.html`.

## ✏️ Editar contenido

- **Proyectos**: edita el arreglo `PROYECTOS` al inicio de `js/main.js`.
  Cada objeto tiene `code`, `title`, `status`, `desc` y `tech` (arreglo de tags).
  Te dejé tags genéricos en `tech` — te recomiendo poner ahí las tecnologías
  reales que usaste en cada proyecto (ej: `"Node.js"`, `"MySQL"`, `"React"`).
- **Docencia, habilidades, formación, contacto**: edita directamente el texto
  dentro de `index.html`, en cada `<section>` (`#docencia`, `#habilidades`,
  `#formacion`, `#contacto`).
- **Colores y tipografía**: todo está centralizado en las variables `:root`
  al inicio de `css/style.css`.

## 🗂️ Estructura

```
├── index.html          → contenido y estructura del sitio
├── css/style.css        → todos los estilos (sistema de diseño con variables)
├── js/main.js            → datos de proyectos + interactividad
├── assets/img/           → imágenes (foto de perfil)
└── README.md
```

## 🎨 Sobre el diseño

El sitio usa un concepto de "bitácora de código + libro de calificaciones":
un riel lateral con códigos tipo materia (`DEV-01`, `EDU-01`...) funciona
como índice de navegación, reflejando tu doble perfil de desarrollador y
docente. Fondo oscuro tipo carbón-azulado, acentos dorado (diploma) y
verde-azulado apagado (código), tipografía serif para títulos y monoespaciada
para metadatos.
