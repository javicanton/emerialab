(function () {
  "use strict";

  const data = window.EMERIA_DATA;
  const deck = document.getElementById("cartaDeck");
  const card = document.getElementById("cartaCard");
  const live = document.getElementById("cartaLive");
  if (!deck || !card || !data) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function escapeHtml(text) {
    return String(text == null ? "" : text)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  /* Cada clave es página:respuesta. Los puntos eligen la comanda. */
  const WEIGHTS = {
    "apetito:bocado": { "video-abstract": 5, "viz-simple": 4, "sketchnotes": 4 },
    "apetito:mirar": { "visualizacion": 5, "infografia-animacion": 4, "comic-cientifico": 4, "viz-simple": 1 },
    "apetito:historia": { "podcast": 5, "produccion-documental": 4, "documental": 2, "comic-cientifico": 2 },
    "apetito:proyecto": { "paquete-proyecto": 5, "programa-continuado": 4, "video-abstract": 1 },
    "apetito:sorpresa": { "viz-demanda": 5, "auditoria": 4, "taller": 2 },

    "mesa:cientifica": { "video-abstract": 2, "visualizacion": 2, "viz-simple": 2, "comic-cientifico": 1 },
    "mesa:general": { "podcast": 2, "comic-cientifico": 2, "sketchnotes": 2, "video-ia": 2 },
    "mesa:jovenes": { "video-ia": 2, "gamificado": 2, "sketchnotes": 2, "comic-cientifico": 1 },
    "mesa:profesionales": { "visualizacion": 2, "auditoria": 2, "infografia-animacion": 2 },
    "mesa:instituciones": { "paquete-proyecto": 2, "eventos": 2, "auditoria": 2 },

    "tamano:picar": { "video-abstract": 3, "viz-simple": 3, "sketchnotes": 2 },
    "tamano:plato": { "podcast": 2, "visualizacion": 2, "comic-cientifico": 2, "infografia-animacion": 2 },
    "tamano:menu": { "paquete-proyecto": 2, "produccion-documental": 2, "programa-continuado": 2, "transmedia": 1 },
    "tamano:banquete": { "xr": 3, "documental": 2, "eventos": 2, "transmedia": 2, "gamificado": 1 },
    "tamano:sindecidir": { "auditoria": 3, "viz-demanda": 2, "taller": 1 },

    "cuando:ya": { "video-abstract": 3, "viz-simple": 2, "sketchnotes": 2 },
    "cuando:temporada": { "podcast": 2, "visualizacion": 2, "comic-cientifico": 2, "infografia-animacion": 2 },
    "cuando:calma": { "paquete-proyecto": 2, "produccion-documental": 2, "programa-continuado": 1 },
    "cuando:ano": { "programa-continuado": 3, "transmedia": 2, "paquete-proyecto": 1 }
  };

  const PAGES = [
    {
      id: "portada",
      folio: "",
      title: "La <b>carta</b>",
      lead: "Transformamos conocimiento en impacto.",
      house: true
    },
    {
      id: "apetito",
      folio: "1",
      title: "¿Qué te apetece <b>comer?</b>",
      options: [
        { id: "bocado", name: "Picoteo", price: "desde 60 €", desc: "Una pieza corta, lista para publicar. Video-abstract, sketchnote o visualización simple." },
        { id: "mirar", name: "Plato único", price: "desde 75 €", desc: "Un dato o una idea, claros de un vistazo. Visualización, infografía o cómic científico." },
        { id: "historia", name: "Menú Experiencia", price: "desde 800 €", desc: "Algo que se ve o se escucha con calma. Podcast o documental." },
        { id: "proyecto", name: "Menú degustación", price: "A medida", desc: "La comunicación entera, de la propuesta al cierre." },
        { id: "sorpresa", name: "La elección del chef", price: "150 €", desc: "Todavía no sé qué pedir. Empezamos por una evaluación." }
      ]
    },
    {
      id: "mesa",
      folio: "2",
      title: "¿Con quién compartes <b>la mesa?</b>",
      options: [
        { id: "cientifica", name: "La comunidad científica", desc: "Quien ya habla el idioma del artículo." },
        { id: "general", name: "El público general", desc: "Quien no va a leer el paper." },
        { id: "jovenes", name: "Gente joven", desc: "Estudiantes y quien llega por el móvil." },
        { id: "profesionales", name: "Profesionales", desc: "Equipos, sectores y quien decide." },
        { id: "instituciones", name: "Otras instituciones", desc: "Universidades, administraciones, cultura." }
      ]
    },
    {
      id: "tamano",
      folio: "3",
      title: "¿Qué tamaño tiene <b>el apetito?</b>",
      options: [
        { id: "picar", name: "Para picar", price: "hasta 2.000 €", desc: "Una pieza o un encargo corto." },
        { id: "plato", name: "Un plato", price: "2.000 a 8.000 €", desc: "Un trabajo con guion, diseño y revisión." },
        { id: "menu", name: "Un menú", price: "8.000 a 20.000 €", desc: "Varias piezas o el paquete de un proyecto." },
        { id: "banquete", name: "Un banquete", price: "más de 20.000 €", desc: "Una producción larga o una experiencia." },
        { id: "sindecidir", name: "Todavía sin decidir", price: "lo vemos", desc: "El alcance se cierra en la propuesta." }
      ]
    },
    {
      id: "cuando",
      folio: "4",
      title: "¿Para cuándo <b>se sirve?</b>",
      options: [
        { id: "ya", name: "Para ya", price: "menos de 2 semanas", desc: "Algo que pueda salir pronto." },
        { id: "temporada", name: "Esta temporada", price: "1 a 2 meses", desc: "Da tiempo a guion y a una revisión." },
        { id: "calma", name: "Con calma", price: "3 a 6 meses", desc: "Una producción con sus fases." },
        { id: "ano", name: "Menú de año", price: "más de 6 meses", desc: "Un programa que se sostiene en el tiempo." }
      ]
    },
    {
      id: "comanda",
      folio: "5",
      title: "Tu <b>comanda</b>",
      result: true
    }
  ];

  const state = { index: 0, answers: {}, busy: false };

  function serviceById(id) {
    return data.services.find((service) => service.id === id);
  }

  function recommend() {
    const scores = {};
    data.services.forEach((service) => { scores[service.id] = 0; });
    Object.entries(state.answers).forEach(([pageId, value]) => {
      const weights = WEIGHTS[pageId + ":" + value] || {};
      Object.entries(weights).forEach(([id, points]) => {
        if (scores[id] != null) scores[id] += points;
      });
    });
    return data.services
      .map((service) => ({ service, score: scores[service.id] || 0 }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.service.name.localeCompare(b.service.name, "es"))
      .slice(0, 3);
  }

  function dishButton(page, option, frozen) {
    const pressed = state.answers[page.id] === option.id;
    const price = option.price
      ? `<span class="carta-leaders" aria-hidden="true"></span><span class="carta-dish-price">${escapeHtml(option.price)}</span>`
      : "";
    const chosen = pressed ? " is-chosen" : "";
    const open = frozen
      ? `<div class="carta-dish${chosen}">`
      : `<button type="button" class="carta-dish${chosen}" data-choice="${escapeHtml(option.id)}" aria-pressed="${pressed}">`;
    const close = frozen ? "</div>" : "</button>";
    return `
      ${open}
        <span class="carta-dish-line">
          <span class="carta-dish-name">${escapeHtml(option.name)}</span>
          ${price}
        </span>
        ${option.desc ? `<span class="carta-dish-desc">${escapeHtml(option.desc)}</span>` : ""}
      ${close}
    `;
  }

  function coverHtml() {
    return `
      <div class="carta-sheet carta-cover">
        <div class="carta-mark">
          <img src="assets/brand/emeria-lab-logo-positivo.svg" alt="Emeria LAB">
        </div>
        <button type="button" class="carta-invite" data-choice="abrir">¿Qué te apetece hoy?</button>
      </div>
    `;
  }

  function resultBlock() {
    const picks = recommend();
    const items = picks.map(({ service }) => `
      <li class="carta-order">
        <span class="carta-dish-line">
          <span class="carta-dish-name">${escapeHtml(service.name)}</span>
          <span class="carta-leaders" aria-hidden="true"></span>
          <span class="carta-dish-price">${escapeHtml(service.priceFrom)}</span>
        </span>
        <span class="carta-dish-desc">${escapeHtml(service.subtitle)}</span>
        <a class="carta-ficha" href="servicios.html#${escapeHtml(service.id)}">Ver la ficha</a>
      </li>
    `).join("");
    return `
      <p class="carta-prose">Según lo que has pedido, estos son los platos que salen de la cocina. Los precios son orientativos.</p>
      <ol class="carta-orders">${items}</ol>
      <button type="button" class="carta-again" data-reset>Volver a pedir</button>
    `;
  }

  function pageHtml(index, frozen) {
    const page = PAGES[index];
    const back = !frozen && index > 0
      ? `<button type="button" class="carta-back" data-back>Carta anterior</button>`
      : `<span></span>`;
    if (page.house) return coverHtml();
    const body = page.result
      ? resultBlock()
      : `<ul class="carta-dishes">${page.options.map((option) => `<li>${dishButton(page, option, frozen)}</li>`).join("")}</ul>`;
    return `
      <div class="carta-sheet">
        <p class="carta-house">Emeria <b>LAB</b></p>
        <h2 class="carta-title" tabindex="-1">${page.title}</h2>
        <div class="carta-ornament" aria-hidden="true"><span></span></div>
        ${body}
        <div class="carta-foot">
          ${back}
          <span class="carta-folio">${page.folio ? escapeHtml(page.folio) : ""}</span>
        </div>
      </div>
    `;
  }

  function paint(motion) {
    card.innerHTML = pageHtml(state.index);
    deck.dataset.left = String(Math.max(0, PAGES.length - 1 - state.index));
    card.classList.remove("is-deal", "is-sink");
    if (!motion || reduceMotion) return;
    void card.offsetWidth;
    card.classList.add(motion === "back" ? "is-sink" : "is-deal");
  }

  function announce() {
    const page = PAGES[state.index];
    const plain = page.title.replace(/<[^>]+>/g, "");
    if (live) {
      live.textContent = page.folio
        ? "Carta " + page.folio + ". " + plain
        : plain;
    }
    const title = card.querySelector(".carta-title");
    if (title) title.focus({ preventScroll: true });
  }

  const DEAL_MS = 620;

  async function turn(nextIndex) {
    if (state.busy || nextIndex < 0 || nextIndex >= PAGES.length || nextIndex === state.index) return;
    const forward = nextIndex > state.index;
    state.index = nextIndex;
    if (reduceMotion) {
      paint();
      announce();
      return;
    }
    state.busy = true;
    paint(forward ? "deal" : "back");
    await new Promise((resolve) => window.setTimeout(resolve, DEAL_MS));
    card.classList.remove("is-deal", "is-sink");
    state.busy = false;
    announce();
  }

  card.addEventListener("click", (event) => {
    const choice = event.target.closest("[data-choice]");
    if (choice && !state.busy) {
      const page = PAGES[state.index];
      if (page.id !== "portada") state.answers[page.id] = choice.dataset.choice;
      choice.setAttribute("aria-pressed", "true");
      choice.classList.add("is-chosen");
      window.setTimeout(() => turn(state.index + 1), reduceMotion ? 0 : 180);
      return;
    }
    if (event.target.closest("[data-back]")) {
      turn(state.index - 1);
      return;
    }
    if (event.target.closest("[data-reset]")) {
      state.answers = {};
      turn(0);
      return;
    }
  });

  paint();
})();
