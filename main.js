// ============================================================
// DATOS DE PROYECTOS
// Edita este arreglo para añadir, quitar o corregir proyectos.
// tech: ajusta las tecnologías reales usadas en cada uno.
// ============================================================
const PROYECTOS = [
  {
    code: "DEV-01",
    title: "Sistema de Control de Certificados",
    status: "Desarrollo propio",
    desc: "Registro de estudiantes a cursos y talleres, emisión de certificados digitales y verificación pública de autenticidad mediante código QR.",
    tech: ["Full-stack", "Código QR", "Verificación pública"]
  },
  {
    code: "DEV-02",
    title: "Venta de libros y cursos online",
    status: "Colaboración",
    desc: "Plataforma de comercio electrónico para la venta de libros y cursos online.",
    tech: ["E-commerce", "Full-stack"]
  },
  {
    code: "DEV-03",
    title: "Gestión — Empresa de Agua, Provincia San Antonio",
    status: "Colaboración",
    desc: "Sistema de gestión para una empresa de servicio de agua a nivel provincial.",
    tech: ["Sistema de gestión", "Full-stack"]
  },
  {
    code: "DEV-04",
    title: "Gestión Académica y de Cobranzas",
    status: "Desarrollo propio",
    desc: "Sistema para un instituto de educación superior: gestión académica de estudiantes y control de cobranzas.",
    tech: ["Full-stack", "Base de datos relacional"]
  },
  {
    code: "DEV-05",
    title: "Control de colección — Matchbox &amp; Playmobil",
    status: "Proyecto personal",
    desc: "Aplicación para catalogar y controlar piezas de colección de Matchbox y Playmobil.",
    tech: ["Inventario", "Catálogo"]
  },
  {
    code: "DEV-06",
    title: "Juegos de mesa clásicos, estética Playmobil",
    status: "Proyecto personal",
    desc: "Reinterpretación de juegos de mesa clásicos con diseños inspirados en Playmobil.",
    tech: ["Diseño de juego", "Frontend"]
  }
];

// ============ Render de proyectos (acordeón) ============
const entriesContainer = document.getElementById("entries");

PROYECTOS.forEach((p, i) => {
  const entry = document.createElement("div");
  entry.className = "entry";
  entry.innerHTML = `
    <button class="entry-head" aria-expanded="false">
      <span class="code">${p.code}</span>
      <span class="title">${p.title}</span>
      <span class="status">${p.status}</span>
      <span class="chevron">+</span>
    </button>
    <div class="entry-body">
      <p>${p.desc}</p>
      <div class="tags">${p.tech.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    </div>
  `;
  entriesContainer.appendChild(entry);

  const head = entry.querySelector(".entry-head");
  head.addEventListener("click", () => {
    const isOpen = entry.classList.contains("open");
    entry.classList.toggle("open", !isOpen);
    head.setAttribute("aria-expanded", String(!isOpen));
  });
});

// ============ Efecto terminal en el hero ============
const terminalEl = document.getElementById("heroTerminal");
const lines = [
  "$ whoami",
  "> rodolfo.peñaranda — ingeniero de sistemas",
  "$ cat roles.txt",
  "> desarrollador de software · docente desde 2009"
];

function typeTerminal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    terminalEl.innerHTML = lines.map(l =>
      l.startsWith("$") ? `<span class="prompt">${l}</span>` : l
    ).join("\n");
    return;
  }

  let lineIndex = 0;
  let charIndex = 0;
  let output = "";

  function step() {
    if (lineIndex >= lines.length) {
      terminalEl.innerHTML = output + '<span class="cursor"></span>';
      return;
    }
    const currentLine = lines[lineIndex];
    if (charIndex <= currentLine.length) {
      const partial = currentLine.slice(0, charIndex);
      const rendered = output + (currentLine.startsWith("$")
        ? `<span class="prompt">${partial}</span>`
        : partial) + '<span class="cursor"></span>';
      terminalEl.innerHTML = rendered;
      charIndex++;
      setTimeout(step, currentLine.startsWith("$") ? 45 : 20);
    } else {
      output += (currentLine.startsWith("$")
        ? `<span class="prompt">${currentLine}</span>`
        : currentLine) + "\n";
      lineIndex++;
      charIndex = 0;
      setTimeout(step, 260);
    }
  }
  step();
}
typeTerminal();

// ============ Scroll reveal ============
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// ============ Navegación activa en el riel ============
const sections = document.querySelectorAll("main section[id]");
const railLinks = document.querySelectorAll(".rail-link");

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute("id");
    const link = document.querySelector(`.rail-link[href="#${id}"]`);
    if (!link) return;
    if (entry.isIntersecting) {
      railLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
}, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });

sections.forEach(sec => navObserver.observe(sec));

// ============ Menú móvil ============
const railToggle = document.getElementById("railToggle");
const railNav = document.getElementById("railNav");
if (railToggle) {
  railToggle.addEventListener("click", () => {
    const isOpen = railNav.classList.toggle("open");
    railToggle.setAttribute("aria-expanded", String(isOpen));
  });
  railLinks.forEach(link => {
    link.addEventListener("click", () => {
      railNav.classList.remove("open");
      railToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ============ Año en el footer ============
document.getElementById("year").textContent = new Date().getFullYear();
