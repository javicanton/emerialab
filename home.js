(function () {
  "use strict";

  const data = window.EMERIA_DATA;
  const $ = (id) => document.getElementById(id);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function escapeHtml(text) {
    return String(text == null ? "" : text)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  const serviceById = (id) => data.services.find((s) => s.id === id);
  const lineById = (id) => data.lines.find((l) => l.id === id);

  function serviceMedia(service) {
    const parts = [];
    if (service.embed) {
      parts.push(`<iframe class="service-embed" src="${escapeHtml(service.embed.src)}" title="${escapeHtml(service.embed.title)}" loading="lazy"></iframe>`);
    }
    if (service.example && service.example.href) {
      parts.push(`<p><a class="text-link" href="${escapeHtml(service.example.href)}" target="_blank" rel="noopener">${escapeHtml(service.example.label)}<span class="sr-only"> (se abre en otra pestaña)</span></a></p>`);
    }
    if (service.gallery && service.gallery.length) {
      parts.push(`<div class="service-gallery">${service.gallery.map((image) => `<img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" loading="lazy">`).join("")}</div>`);
    }
    return parts.join("");
  }

  /* ─── Luz de fondo ──────────────────────────────────────────────── */

  function drawLight() {
    const svg = $("lightField");
    if (!svg) return;
    const ns = "http://www.w3.org/2000/svg";
    const lines = svg.querySelector(".lines");
    const glow = svg.querySelector(".glow");
    const total = 40;
    const gap = 31;

    for (let i = 0; i < total; i += 1) {
      const y = -140 + i * gap;
      const d = `M -200,${y} C 320,${y - 250} 820,${y + 210} 1800,${y - 170}`;

      const rib = document.createElementNS(ns, "path");
      rib.setAttribute("d", d);
      rib.setAttribute("stroke-width", i % 3 === 0 ? "4" : "2");
      rib.setAttribute("opacity", (0.16 + 0.4 * Math.abs(Math.sin(i * 0.45))).toFixed(2));
      lines.appendChild(rib);

      if (i % 5 === 0) {
        const halo = document.createElementNS(ns, "path");
        halo.setAttribute("d", d);
        halo.setAttribute("stroke-width", "70");
        glow.appendChild(halo);
      }
    }
  }

  /* La máscara de la luz recorre estos puntos a medida que avanza la página.
     Arranca en la portada, detrás del logo, y baja con el scroll. */
  const LIGHT_PATH = [
    [0.0, 72, 34],
    [0.16, 12, 74],
    [0.32, 88, 30],
    [0.5, 14, 28],
    [0.66, 86, 76],
    [0.84, 16, 62],
    [1.0, 62, 92]
  ];

  function lightAt(p) {
    for (let i = 1; i < LIGHT_PATH.length; i += 1) {
      const [p1, x1, y1] = LIGHT_PATH[i];
      if (p <= p1) {
        const [p0, x0, y0] = LIGHT_PATH[i - 1];
        const t = (p - p0) / (p1 - p0);
        const e = t * t * (3 - 2 * t);
        return [x0 + (x1 - x0) * e, y0 + (y1 - y0) * e];
      }
    }
    const last = LIGHT_PATH[LIGHT_PATH.length - 1];
    return [last[1], last[2]];
  }

  function bindScrollLight() {
    const root = document.documentElement;
    let ticking = false;

    function update() {
      ticking = false;
      const max = Math.max(1, root.scrollHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, window.scrollY / max));
      const [x, y] = lightAt(p);
      root.style.setProperty("--lx", x.toFixed(1) + "%");
      root.style.setProperty("--ly", y.toFixed(1) + "%");
      if (!reduceMotion) root.style.setProperty("--drift", p.toFixed(3));
      /* El degradado magenta-lima se desplaza: al bajar, la portada cambia de color. */
      const gradient = document.getElementById("rib-gradient");
      if (gradient) {
        const x1 = 520 - p * 1400;
        gradient.setAttribute("x1", x1.toFixed(0));
        gradient.setAttribute("x2", (x1 + 1600).toFixed(0));
      }
    }

    window.addEventListener("scroll", () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  /* Brillo del cristal bajo el puntero. */
  function bindGlassGlow() {
    document.addEventListener("pointermove", (event) => {
      const panel = event.target.closest && event.target.closest(".glass");
      if (!panel) return;
      const rect = panel.getBoundingClientRect();
      panel.style.setProperty("--mx", (event.clientX - rect.left) + "px");
      panel.style.setProperty("--my", (event.clientY - rect.top) + "px");
    }, { passive: true });
  }

  /* ─── Navegación ────────────────────────────────────────────────── */

  function bindNav() {
    const toggle = $("navToggle");
    const sheet = $("navSheet");

    function setOpen(open) {
      sheet.dataset.open = String(open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Cerrar" : "Menú";
    }

    toggle.addEventListener("click", () => setOpen(sheet.dataset.open !== "true"));
    sheet.addEventListener("click", (event) => {
      if (event.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && sheet.dataset.open === "true") {
        setOpen(false);
        toggle.focus();
      }
    });

    const links = Array.from(document.querySelectorAll("#navLinks a"));
    const targets = links
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          const current = link.getAttribute("href") === "#" + entry.target.id;
          if (current) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    targets.forEach((target) => observer.observe(target));

    /* Fuera de los apartados enlazados no se marca ninguno. */
    const others = Array.from(document.querySelectorAll("main > section"))
      .filter((section) => !targets.includes(section));
    const clearObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) links.forEach((link) => link.removeAttribute("aria-current"));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    others.forEach((section) => clearObserver.observe(section));
  }

  /* ─── Índice del hero ───────────────────────────────────────────── */

  function renderHeroIndex() {
    $("heroIndex").innerHTML = data.lines.map((line) => `
      <a href="#servicios" data-line="${escapeHtml(line.id)}">
        <span>${escapeHtml(line.name)}</span>
        <span class="count">${line.services.length} servicios</span>
      </a>
    `).join("");

    $("heroIndex").addEventListener("click", (event) => {
      const link = event.target.closest("a[data-line]");
      if (link) selectLine(link.dataset.line);
    });
  }

  /* ─── Servicios ─────────────────────────────────────────────────── */

  const servicesState = { line: data.lines[0].id, open: null };

  function renderLineTabs() {
    $("lineTabs").innerHTML = data.lines.map((line) => {
      const selected = line.id === servicesState.line;
      return `
        <button class="line-tab" type="button" role="tab" id="tab-${escapeHtml(line.id)}"
          aria-selected="${selected}" aria-controls="linePanel" tabindex="${selected ? "0" : "-1"}"
          data-line="${escapeHtml(line.id)}">
          <span class="line-tab-name">${escapeHtml(line.name)}</span>
          <span class="line-tab-summary">${escapeHtml(line.summary)}</span>
        </button>
      `;
    }).join("");
  }

  function renderLinePanel() {
    const line = lineById(servicesState.line);
    const panel = $("linePanel");
    panel.setAttribute("aria-labelledby", "tab-" + line.id);

    const items = line.services.map(serviceById).filter(Boolean).map((service) => {
      const open = servicesState.open === service.id;
      return `
        <li class="service-item" data-open="${open}">
          <button class="service-toggle" type="button" aria-expanded="${open}"
            aria-controls="svc-${escapeHtml(service.id)}" data-service="${escapeHtml(service.id)}">
            <span class="service-name">${escapeHtml(service.name)}</span>
            <span class="service-subtitle">${escapeHtml(service.subtitle)}</span>
            <span class="service-price">${escapeHtml(service.priceFrom)}</span>
            <span class="service-chevron" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </span>
          </button>
          <div class="service-body" id="svc-${escapeHtml(service.id)}">
            <div class="service-body-inner">
              <div class="service-detail">
                <p>${escapeHtml(service.description)}</p>
                ${serviceMedia(service)}
                <ul class="service-includes">
                  ${service.includes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                </ul>
                ${service.clientPriceDetail ? `<p class="price-detail">${escapeHtml(service.clientPriceDetail)}</p>` : ""}
                <a class="btn btn-lime btn-small" href="#contacto" data-request="${escapeHtml(service.id)}">Pedir presupuesto</a>
              </div>
            </div>
          </div>
        </li>
      `;
    }).join("");

    panel.innerHTML = `
      <p class="line-summary-mobile">${escapeHtml(line.summary)}</p>
      <ul>${items}</ul>
      <div class="line-foot">
        <span>${escapeHtml(data.priceNote)}</span>
        ${line.resource ? `<a class="text-link" href="${escapeHtml(line.resource.href)}">${escapeHtml(line.resource.label)}</a>` : ""}
      </div>
    `;
  }

  function selectLine(lineId, focusTab) {
    if (!lineById(lineId)) return;
    servicesState.line = lineId;
    servicesState.open = null;
    renderLineTabs();
    renderLinePanel();
    const tab = $("tab-" + lineId);
    if (tab) {
      if (focusTab) tab.focus();
      if (tab.scrollIntoView && window.matchMedia("(max-width: 860px)").matches) {
        tab.scrollIntoView({ block: "nearest", inline: "center" });
      }
    }
  }

  function bindServices() {
    const tabs = $("lineTabs");

    tabs.addEventListener("click", (event) => {
      const tab = event.target.closest(".line-tab");
      if (tab) selectLine(tab.dataset.line, true);
    });

    tabs.addEventListener("keydown", (event) => {
      const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
      const index = data.lines.findIndex((l) => l.id === servicesState.line);
      let next = null;
      if (keys[event.key]) next = (index + keys[event.key] + data.lines.length) % data.lines.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = data.lines.length - 1;
      if (next === null) return;
      event.preventDefault();
      selectLine(data.lines[next].id, true);
    });

    $("linePanel").addEventListener("click", (event) => {
      const toggle = event.target.closest(".service-toggle");
      if (toggle) {
        const id = toggle.dataset.service;
        servicesState.open = servicesState.open === id ? null : id;
        $("linePanel").querySelectorAll(".service-item").forEach((item) => {
          const button = item.querySelector(".service-toggle");
          const open = button.dataset.service === servicesState.open;
          item.dataset.open = String(open);
          button.setAttribute("aria-expanded", String(open));
        });
        return;
      }

      const request = event.target.closest("[data-request]");
      if (request) prefillContact(request.dataset.request);
    });
  }

  /* ─── Modalidades y método ──────────────────────────────────────── */

  function renderModes() {
    $("modes").innerHTML = data.modalities.map((mode) => `
      <li class="glass mode">
        <h3>${escapeHtml(mode.name)}</h3>
        <p>${escapeHtml(mode.description)}</p>
        <p class="mode-example">${escapeHtml(mode.example)}</p>
      </li>
    `).join("");
  }

  function renderMethod() {
    $("method").innerHTML = data.method.map((phase) => `
      <li class="phase">
        <h3>${escapeHtml(phase.name)}</h3>
        <p>${escapeHtml(phase.description)}</p>
        <p class="phase-result">${escapeHtml(phase.result)}</p>
      </li>
    `).join("");
  }

  /* ─── Trabajos ──────────────────────────────────────────────────── */

  const WORKS_PAGE = 6;
  const worksState = { line: "todos", shown: WORKS_PAGE };

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

  function renderWorkFilters() {
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
    const visible = list.slice(0, worksState.shown);

    if (!list.length) {
      $("works").innerHTML = `<li class="glass works-empty">Todavía no hay trabajos publicados en esta línea.</li>`;
    } else {
      $("works").innerHTML = visible.map((work) => {
        const line = lineById(work.line);
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
              <h3>${escapeHtml(work.title)}</h3>
              <p>${escapeHtml(work.summary)}</p>
              ${work.url ? `<a class="text-link" href="${escapeHtml(work.url)}" target="_blank" rel="noopener">${workLinkLabel(work.url)}<span class="sr-only">: ${escapeHtml(work.title)} (se abre en otra pestaña)</span></a>` : ""}
              ${line ? `<span class="sr-only">Línea: ${escapeHtml(line.name)}</span>` : ""}
            </div>
          </li>
        `;
      }).join("");

      /* Si la miniatura no carga, se sustituye por la carátula de marca. */
      $("works").querySelectorAll("img[data-fallback]").forEach((img) => {
        img.addEventListener("error", () => {
          const cover = document.createElement("span");
          cover.className = "work-cover-brand";
          cover.textContent = img.dataset.fallback;
          img.replaceWith(cover);
        }, { once: true });
      });
    }

    $("worksMoreWrap").hidden = list.length <= worksState.shown;
  }

  function bindWorks() {
    $("workFilters").addEventListener("click", (event) => {
      const button = event.target.closest(".filter");
      if (!button) return;
      worksState.line = button.dataset.line;
      worksState.shown = WORKS_PAGE;
      renderWorkFilters();
      renderWorks();
    });

    $("worksMore").addEventListener("click", () => {
      worksState.shown += WORKS_PAGE;
      renderWorks();
    });
  }

  /* ─── Equipo ────────────────────────────────────────────────────── */

  function initials(name) {
    return name
      .replace(/^(Dra?\.|Prof\.)\s+/i, "")
      .split(/\s+/)
      .filter((part) => /^[A-ZÁÉÍÓÚÑ]/.test(part))
      .slice(0, 2)
      .map((part) => part[0])
      .join("");
  }

  function renderTeam() {
    $("people").innerHTML = data.team.map((person) => {
      const area = data.areas.find((a) => a.id === person.area);
      const photo = person.photo
        ? `<img src="${escapeHtml(person.photo)}" alt="" loading="lazy">`
        : escapeHtml(initials(person.name));
      return `
        <li class="glass person">
          <span class="person-photo" aria-hidden="true">${photo}</span>
          <div>
            <h3>${escapeHtml(person.name)}</h3>
            <p>${escapeHtml(person.role)}${area ? `. ${escapeHtml(area.name)}` : ""}</p>
          </div>
        </li>
      `;
    }).join("");

    $("areas").innerHTML = data.areas.map((area) => `
      <li class="area">
        <h3>${escapeHtml(area.name)}</h3>
        <p>${escapeHtml(area.description)}</p>
      </li>
    `).join("");
  }

  /* ─── Contacto ──────────────────────────────────────────────────── */

  function renderContactOptions() {
    $("cf-line").innerHTML = [`<option value="Todavía no lo sé">Todavía no lo sé</option>`]
      .concat(data.lines.map((line) => `<option value="${escapeHtml(line.name)}">${escapeHtml(line.name)}</option>`))
      .join("");
  }

  function prefillContact(serviceId) {
    const service = serviceById(serviceId);
    if (!service) return;
    const line = lineById(service.line);
    if (line) $("cf-line").value = line.name;
    const message = $("cf-message");
    if (!message.value.trim()) message.value = `Me interesa: ${service.name}.\n`;
  }

  function setStatus(text, state) {
    const status = $("contactStatus");
    status.textContent = text;
    if (state) status.dataset.state = state;
    else delete status.dataset.state;
  }

  function bindContact() {
    const form = $("contactForm");
    const submit = $("contactSubmit");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const fields = new FormData(form);
      if (fields.get("web")) return; // campo trampa para robots

      const missing = [];
      if (!String(fields.get("nombre")).trim()) missing.push("tu nombre");
      if (!$("cf-email").validity.valid || !String(fields.get("correo")).trim()) missing.push("un correo válido");
      if (!String(fields.get("mensaje")).trim()) missing.push("qué necesitas");
      if (!fields.get("consentimiento")) missing.push("la casilla de consentimiento");

      if (missing.length) {
        setStatus(`Falta ${missing.join(", ")}.`, "error");
        const firstInvalid = form.querySelector(":invalid");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      const payload = {
        nombre: fields.get("nombre"),
        organizacion: fields.get("organizacion"),
        correo: fields.get("correo"),
        perfil: fields.get("perfil"),
        linea: fields.get("linea"),
        mensaje: fields.get("mensaje")
      };

      const config = data.contact || {};

      if (config.endpoint) {
        submit.disabled = true;
        setStatus("Enviando la consulta…");
        try {
          const response = await fetch(config.endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(payload)
          });
          if (!response.ok) throw new Error(String(response.status));
          form.reset();
          setStatus("Consulta enviada. Te responderemos por correo.", "ok");
        } catch (error) {
          setStatus("La consulta no se ha podido enviar. Revisa la conexión y vuelve a intentarlo.", "error");
        } finally {
          submit.disabled = false;
        }
        return;
      }

      /* Sin servicio de formularios configurado: correo ya redactado. */
      const subject = `Consulta web: ${payload.linea}`;
      const body = [
        `Nombre: ${payload.nombre}`,
        `Organización: ${payload.organizacion || "(sin indicar)"}`,
        `Correo: ${payload.correo}`,
        `Perfil: ${payload.perfil}`,
        `Línea de interés: ${payload.linea}`,
        "",
        payload.mensaje
      ].join("\n");
      window.location.href = `mailto:${encodeURIComponent(config.email || "")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("Se ha abierto tu programa de correo con la consulta redactada. Envíala desde ahí.", "ok");
    });
  }

  /* ─── Inicio ────────────────────────────────────────────────────── */

  drawLight();
  bindScrollLight();
  bindGlassGlow();
  bindNav();
  renderHeroIndex();
  renderLineTabs();
  renderLinePanel();
  bindServices();
  renderModes();
  renderMethod();
  renderWorkFilters();
  renderWorks();
  bindWorks();
  renderTeam();
  renderContactOptions();
  bindContact();
  $("year").textContent = String(new Date().getFullYear());
})();
