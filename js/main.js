// ============================================================
// DATOS — edita aquí para actualizar contenido
// ============================================================
const PROYECTOS = [
  {
    title: "Sistema de Control de Certificados",
    category: "propio",
    categoryLabel: "Desarrollo propio",
    desc: "Registro de estudiantes a cursos y talleres, emisión de certificados digitales y verificación pública de autenticidad mediante código QR.",
    tags: ["Full-stack", "Código QR", "Verificación pública"]
  },
  {
    title: "Venta de libros y cursos online",
    category: "colaboracion",
    categoryLabel: "Colaboración",
    desc: "Plataforma de comercio electrónico para la venta de libros y cursos online.",
    tags: ["E-commerce", "Full-stack"]
  },
  {
    title: "Gestión — Empresa de Agua, San Antonio",
    category: "colaboracion",
    categoryLabel: "Colaboración",
    desc: "Sistema de gestión para una empresa de servicio de agua a nivel provincial.",
    tags: ["Sistema de gestión", "Full-stack"]
  },
  {
    title: "Gestión Académica y de Cobranzas",
    category: "propio",
    categoryLabel: "Desarrollo propio",
    desc: "Sistema para un instituto de educación superior: gestión académica de estudiantes y control de cobranzas.",
    tags: ["Full-stack", "Base de datos relacional"]
  },
  {
    title: "Control de colección Matchbox & Playmobil",
    category: "personal",
    categoryLabel: "Personal",
    desc: "Aplicación para catalogar y controlar piezas de colección de Matchbox y Playmobil.",
    tags: ["Inventario", "Catálogo"]
  },
  {
    title: "Juegos de mesa clásicos, estética Playmobil",
    category: "personal",
    categoryLabel: "Personal",
    desc: "Reinterpretación de juegos de mesa clásicos con diseños inspirados en Playmobil.",
    tags: ["Diseño de juego", "Frontend"]
  }
];

// Niveles orientativos — ajústalos si no reflejan tu dominio real de cada tecnología.
const HABILIDADES = [
  { name: "JavaScript (React / Vue)", level: 90 },
  { name: "Node.js / Express", level: 85 },
  { name: "HTML / CSS / Tailwind", level: 90 },
  { name: "C#", level: 70 },
  { name: "Python", level: 65 },
  { name: "MySQL / PostgreSQL", level: 80 }
];

// ============ Render de proyectos ============
const projectGrid = document.getElementById("projectGrid");

function renderProjects(filter = "all") {
  projectGrid.innerHTML = "";
  const list = filter === "all" ? PROYECTOS : PROYECTOS.filter(p => p.category === filter);
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <span class="badge">${p.categoryLabel}</span>
      <h4>${p.title}</h4>
      <p>${p.desc}</p>
      <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    `;
    projectGrid.appendChild(card);
  });
}
renderProjects();

document.getElementById("filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderProjects(btn.dataset.filter);
});

// ============ Render de habilidades ============
const skillsGrid = document.getElementById("skillsGrid");
HABILIDADES.forEach(s => {
  const row = document.createElement("div");
  row.className = "skill-row";
  row.innerHTML = `
    <div class="skill-row-top"><span>${s.name}</span><span>${s.level}%</span></div>
    <div class="skill-bar"><div class="skill-bar-fill" style="width:${s.level}%"></div></div>
  `;
  skillsGrid.appendChild(row);
});

// ============ Navegación por pestañas ============
const navBtns = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

navBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    navBtns.forEach(b => b.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.page).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// ============ Menú de contacto móvil ============
const sbToggle = document.getElementById("sbToggle");
const sbDetails = document.getElementById("sbDetails");
const sbSocials = document.getElementById("sbSocials");

sbToggle.addEventListener("click", () => {
  const isOpen = sbDetails.classList.toggle("open");
  sbSocials.classList.toggle("open");
  sbToggle.setAttribute("aria-expanded", String(isOpen));
  sbToggle.innerHTML = isOpen
    ? 'Ocultar contacto <i class="bx bx-chevron-up"></i>'
    : 'Mostrar contacto <i class="bx bx-chevron-down"></i>';
});

// ============ Año en el footer ============
document.getElementById("year").textContent = new Date().getFullYear();
