# Portafolio — Rodolfo Peñaranda Zamora

Sitio estático (HTML + CSS + JS puro) con estructura tipo "vCard": sidebar fijo
con datos de contacto + navegación por pestañas (Sobre mí / Currículum /
Proyectos / Contacto). Usa la fuente de íconos Boxicons vía CDN.

## 🚀 Cómo actualizar lo ya publicado en `tinchoevil.github.io`

Ya tienes el repositorio conectado, así que solo necesitas reemplazar los
archivos y subir de nuevo:

1. Reemplaza el contenido de tu carpeta local (la que ya está conectada a
   `tinchoevil.github.io`) con estos archivos: `index.html`, `css/style.css`,
   `js/main.js`, `assets/img/perfil.jpg`, `README.md`.
2. Desde la terminal, en esa carpeta:
   ```bash
   git add -A
   git commit -m "Rediseño: layout tipo vCard con sidebar y pestañas"
   git push
   ```
3. Espera 1-2 minutos y recarga **https://tinchoevil.github.io** con
   `Ctrl+Shift+R` (refresco forzado, para evitar la versión en caché).

## ✏️ Editar contenido

- **Proyectos**: arreglo `PROYECTOS` en `js/main.js`. Cada uno tiene `title`,
  `category` (`propio` / `colaboracion` / `personal`, controla el filtro),
  `categoryLabel`, `desc` y `tags`.
- **Habilidades**: arreglo `HABILIDADES` en `js/main.js`. Los porcentajes
  (`level`) son orientativos — ajústalos a lo que realmente refleje tu nivel
  en cada tecnología.
- **Docencia, formación, sobre mí, contacto**: edita el texto directamente en
  `index.html`, dentro de cada `<section class="page" id="...">`.
- **Colores y tipografía**: variables `:root` al inicio de `css/style.css`.

## 🗂️ Estructura

```
├── index.html          → contenido y estructura
├── css/style.css        → estilos (sistema de tokens con variables)
├── js/main.js            → datos + interactividad (pestañas, filtro, menú)
├── assets/img/perfil.jpg → foto de perfil
└── README.md
```
