(function () {
  "use strict";

  const data = window.EMERIA_DATA;
  const $ = (id) => document.getElementById(id);
  const worksState = { line: "todos" };

  function escapeHtml(text) {
    return String(text == null ? "" : text)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function workLinkLabel(url) {
    try {
      const host = new URL(url).hostname.replace(/^www\./, "");
      if (host.includes("youtube.") || host === "youtu.be") return "Ver en YouTube";
      if (host.includes("unir.tv")) return "Ver en UNIR TV";
      if (host.includes("vimeo.")) return "Ver en Vimeo";
    } catch (error) {
      /* URL relativa o no válida: etiqueta genérica. */
    }
    return "Ver el trabajo";
  }

  function renderFilters() {
    const used = data.lines.filter((line) => data.works.some((work) => work.line === line.id));
    const options = [{ id: "todos", short: "Todos" }].concat(used);
    $("workFilters").hidden = used.length < 2;
    $("workFilters").innerHTML = options.map((option) => `
      <button class="filter" type="button" data-line="${escapeHtml(option.id)}"
        aria-pressed="${option.id === worksState.line}">${escapeHtml(option.short)}</button>
    `).join("");
  }

  function renderWorks() {
    const list = data.works.filter((work) => worksState.line === "todos" || work.line === worksState.line);
    if (!list.length) {
      $("works").innerHTML = `<li class="glass works-empty">Todavía no hay trabajos publicados en esta línea.</li>`;
      return;
    }

    $("works").innerHTML = list.map((work) => {
      const line = data.lines.find((item) => item.id === work.line);
      const cover = work.thumb
        ? `<img src="${escapeHtml(work.thumb)}" alt="" loading="lazy" data-fallback="${escapeHtml(work.type)}">`
        : `<span class="work-cover-brand">${escapeHtml(work.type)}</span>`;
      return `
        <li class="glass work">
          <div class="work-cover${work.fit === "contain" ? " work-cover-contain" : ""}">${cover}</div>
          <div class="work-body">
            <p class="work-meta">
              <span>${escapeHtml(work.type)}</span>
              <span>${escapeHtml(work.year)}</span>
              ${work.duration ? `<span>${escapeHtml(work.duration)}</span>` : ""}
            </p>
            <h2>${escapeHtml(work.title)}</h2>
            <p>${escapeHtml(work.summary)}</p>
            ${work.url ? `<a class="text-link" href="${escapeHtml(work.url)}" target="_blank" rel="noopener">${workLinkLabel(work.url)}<span class="sr-only">: ${escapeHtml(work.title)} (se abre en otra pestaña)</span></a>` : ""}
            ${line ? `<span class="sr-only">Línea: ${escapeHtml(line.name)}</span>` : ""}
          </div>
        </li>
      `;
    }).join("");

    $("works").querySelectorAll("img[data-fallback]").forEach((img) => {
      img.addEventListener("error", () => {
        const cover = document.createElement("span");
        cover.className = "work-cover-brand";
        cover.textContent = img.dataset.fallback;
        img.replaceWith(cover);
      }, { once: true });
    });
  }

  $("workFilters").addEventListener("click", (event) => {
    const button = event.target.closest(".filter");
    if (!button) return;
    worksState.line = button.dataset.line;
    renderFilters();
    renderWorks();
  });

  const toggle = $("navToggle");
  const sheet = $("navSheet");
  toggle.addEventListener("click", () => {
    const open = sheet.dataset.open !== "true";
    sheet.dataset.open = String(open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Cerrar" : "Menú";
  });
  sheet.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    sheet.dataset.open = "false";
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "Menú";
  });

  renderFilters();
  renderWorks();
})();
