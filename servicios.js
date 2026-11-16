(function () {
  const data = window.EMERIA_DATA;

  /* ─── Utilities ─────────────────────────────────────────────── */
  function escapeHtml(text) {
    return String(text)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }

  /* ─── Services catalog ──────────────────────────────────────── */
  const serviceElements = {
    summaryPanel: document.getElementById("servicesSummary"),
    cardsGrid: document.getElementById("servicesCardsGrid"),
    detailPanel: document.getElementById("servicesDetailPanel"),
    resultsInfo: document.getElementById("servicesResultsInfo")
  };

  const servicesState = {
    selectedId: data.lines[0].services[0]
  };

  function renderServicesSummary() {
    serviceElements.summaryPanel.innerHTML = `
      <div class="services-summary-grid">
        ${data.lines.map((line) => line.services.map((id) => data.services.find((s) => s.id === id)).filter(Boolean).map((s) => `
          <button class="service-summary-chip" data-service-id="${escapeHtml(s.id)}">
            <span class="service-chip-name">${escapeHtml(s.name)}</span>
            <span class="service-chip-price">${escapeHtml(s.priceFrom)}</span>
          </button>
        `).join("")).join("")}
      </div>
      <p class="services-summary-legal">${escapeHtml(data.priceNote)}</p>
    `;

    serviceElements.summaryPanel.querySelectorAll(".service-summary-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        servicesState.selectedId = chip.dataset.serviceId;
        renderServicesCards();
        renderServicesDetail();
        serviceElements.detailPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });

    const modes = document.getElementById("servicesModes");
    if (modes) {
      modes.innerHTML = data.modalities.map((mode) => `
        <li><strong>${escapeHtml(mode.name)}.</strong> ${escapeHtml(mode.description)}</li>
      `).join("");
    }
  }

  function renderServicesCards() {
    serviceElements.resultsInfo.textContent = `${data.services.length} servicios en ${data.lines.length} líneas.`;

    serviceElements.cardsGrid.innerHTML = data.lines.map((line) => `
      <div class="line-heading" id="linea-${escapeHtml(line.id)}">
        <h3>${escapeHtml(line.name)}</h3>
        <p>${escapeHtml(line.summary)}</p>
      </div>
      ${line.services.map((id) => data.services.find((s) => s.id === id)).filter(Boolean).map((s) => `
        <article class="format-card service-card ${s.id === servicesState.selectedId ? "active" : ""}" data-service-id="${escapeHtml(s.id)}" tabindex="0" role="button" aria-pressed="${s.id === servicesState.selectedId}">
          <span class="card-topline">${s.tags.map((t) => escapeHtml(t)).join(", ")}</span>
          <h3>${escapeHtml(s.name)}</h3>
          <p class="card-desc">${escapeHtml(s.subtitle)}</p>
          <div class="card-metrics">
            <span class="pill pill-price">${escapeHtml(s.priceFrom)}</span>
          </div>
        </article>
      `).join("")}
    `).join("");

    serviceElements.cardsGrid.querySelectorAll(".service-card").forEach((card) => {
      const select = () => {
        servicesState.selectedId = card.dataset.serviceId;
        renderServicesCards();
        renderServicesDetail();
      };
      card.addEventListener("click", select);
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          select();
        }
      });
    });
  }

  function renderServicesDetail() {
    const selected = data.services.find((s) => s.id === servicesState.selectedId);
    if (!selected) return;
    const line = data.lines.find((l) => l.id === selected.line);

    serviceElements.detailPanel.innerHTML = `
      <div class="detail-head">
        <div>
          ${line ? `<span class="detail-tag">${escapeHtml(line.name)}</span>` : ""}
          <h3 style="margin-top:6px">${escapeHtml(selected.name)}</h3>
          <span class="detail-tag">${escapeHtml(selected.subtitle)}</span>
        </div>
      </div>

      <div class="service-tags-row">
        ${selected.tags.map((t) => `<span class="service-tag">${escapeHtml(t)}</span>`).join("")}
      </div>

      <p class="detail-definition">${escapeHtml(selected.description)}</p>

      <div class="detail-grid">
        <section class="detail-block">
          <h4>Qué incluye</h4>
          <ul>${selected.includes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </section>

        <section class="detail-block service-pricing-block">
          <h4>Precio orientativo</h4>
          <p class="service-price-value">${escapeHtml(selected.priceFrom)}</p>
          ${selected.clientPriceDetail ? `<p class="service-price-detail">${escapeHtml(selected.clientPriceDetail)}</p>` : ""}
          <p class="service-price-note">${escapeHtml(data.priceNote)}</p>
          <p style="margin-top:14px"><a class="btn btn-primary" href="index.html#contacto">Pedir presupuesto</a></p>
        </section>
      </div>
    `;
  }

  /* ─── Diagnostic questionnaire ──────────────────────────────── */

  const QUESTIONS = [
    {
      id: "organizacion",
      label: "Tu organización",
      question: "¿Qué tipo de organización describes?",
      icon: "bi-building",
      options: [
        { value: "universidad-investigacion", label: "Universidad o centro de investigación" },
        { value: "edtech-empresa",            label: "Empresa EdTech o startup tecnológica" },
        { value: "fundacion-museo",           label: "Fundación, museo o institución cultural" },
        { value: "medio-divulgacion",         label: "Medio de comunicación científica" },
        { value: "otro",                      label: "Otro tipo de organización" }
      ]
    },
    {
      id: "objetivo",
      label: "Tu objetivo",
      question: "¿Cuál es tu objetivo principal de comunicación científica?",
      icon: "bi-bullseye",
      options: [
        { value: "divulgar-resultados", label: "Divulgar resultados de investigación al gran público" },
        { value: "formar-capacitar",    label: "Formar o capacitar equipos y audiencias" },
        { value: "mejorar-imagen",      label: "Mejorar imagen institucional y captación" },
        { value: "cubrir-evento",       label: "Cubrir un congreso, jornada o evento científico" },
        { value: "crear-audiencia",     label: "Crear una audiencia fiel alrededor de mi institución" }
      ]
    },
    {
      id: "audiencia",
      label: "Tu audiencia",
      question: "¿A quién va dirigido principalmente tu contenido?",
      icon: "bi-people",
      options: [
        { value: "comunidad-cientifica", label: "Comunidad científica y académica" },
        { value: "publico-general",      label: "Público general adulto" },
        { value: "jovenes",              label: "Jóvenes y estudiantes" },
        { value: "profesionales",        label: "Profesionales e industria" },
        { value: "instituciones",        label: "Medios de comunicación e instituciones" }
      ]
    },
    {
      id: "presupuesto",
      label: "Tu presupuesto",
      question: "¿Cuál es tu presupuesto orientativo para el proyecto?",
      icon: "bi-cash-coin",
      options: [
        { value: "bajo",        label: "Hasta 2.000 €" },
        { value: "medio",       label: "Entre 2.000 y 8.000 €" },
        { value: "alto",        label: "Entre 8.000 y 20.000 €" },
        { value: "premium",     label: "Más de 20.000 €" },
        { value: "desconocido", label: "Aún no lo tengo definido" }
      ]
    },
    {
      id: "plazo",
      label: "Tu plazo",
      question: "¿En qué plazo necesitas los primeros resultados?",
      icon: "bi-stopwatch",
      options: [
        { value: "urgente", label: "Menos de 2 semanas (urgente)" },
        { value: "corto",   label: "1 a 2 meses" },
        { value: "medio",   label: "3 a 6 meses" },
        { value: "largo",   label: "Más de 6 meses" }
      ]
    },
    {
      id: "equipo",
      label: "Tu equipo",
      question: "¿Dispones de equipo interno de comunicación audiovisual?",
      icon: "bi-person-workspace",
      options: [
        { value: "ninguno",       label: "No, empezamos desde cero" },
        { value: "basico",        label: "Tenemos alguna persona de comunicación" },
        { value: "especializado", label: "Sí, equipo técnico especializado" }
      ]
    },
    {
      id: "resultado",
      label: "Tu resultado",
      question: "¿Qué tipo de resultado buscas?",
      icon: "bi-box-seam",
      options: [
        { value: "piezas-sueltas",          label: "Piezas individuales (video, podcast, infografía...)" },
        { value: "serie-campana",           label: "Una serie o campaña continuada" },
        { value: "ecosistema-multiplataforma", label: "Un ecosistema multiplataforma (web + RRSS + podcast)" },
        { value: "experiencia-inmersiva",   label: "Una experiencia inmersiva o interactiva (VR, gamificación)" },
        { value: "orientacion",             label: "Primero necesito orientación estratégica" }
      ]
    }
  ];

  /* Scoring: answer key → { serviceId: points } */
  const SCORING = {
    /* Organización */
    "organizacion:universidad-investigacion": { "video-abstract": 3, "auditoria": 1, "eventos": 1, "podcast": 1, "visualizacion": 1 },
    "organizacion:edtech-empresa":            { "video-ia": 2, "gamificado": 2, "transmedia": 1, "taller": 1 },
    "organizacion:fundacion-museo":           { "gamificado": 2, "documental": 2, "xr": 1, "eventos": 1 },
    "organizacion:medio-divulgacion":         { "podcast": 2, "transmedia": 2, "video-ia": 1 },
    "organizacion:otro":                      { "auditoria": 2, "taller": 1 },

    /* Objetivo */
    "objetivo:divulgar-resultados": { "video-abstract": 3, "podcast": 2, "video-ia": 2, "visualizacion": 1 },
    "objetivo:formar-capacitar":    { "manual": 3, "taller": 3, "gamificado": 2, "video-ia": 1 },
    "objetivo:mejorar-imagen":      { "auditoria": 3, "transmedia": 2, "podcast": 1, "video-ia": 1 },
    "objetivo:cubrir-evento":       { "eventos": 4, "auditoria": 1 },
    "objetivo:crear-audiencia":     { "transmedia": 3, "podcast": 2, "video-ia": 1, "video-abstract": 1 },

    /* Audiencia */
    "audiencia:comunidad-cientifica": { "video-abstract": 3, "visualizacion": 2, "podcast": 1 },
    "audiencia:publico-general":      { "podcast": 2, "video-ia": 2, "transmedia": 1, "video-abstract": 1 },
    "audiencia:jovenes":              { "gamificado": 3, "video-ia": 2, "transmedia": 1, "xr": 1 },
    "audiencia:profesionales":        { "visualizacion": 2, "documental": 2, "taller": 1, "auditoria": 1 },
    "audiencia:instituciones":        { "auditoria": 2, "eventos": 2, "transmedia": 1, "manual": 1 },

    /* Presupuesto */
    "presupuesto:bajo":        { "video-abstract": 3, "auditoria": 2, "podcast": 1, "manual": 1, "video-ia": 1 },
    "presupuesto:medio":       { "taller": 2, "podcast": 2, "video-ia": 2, "visualizacion": 1, "video-abstract": 1 },
    "presupuesto:alto":        { "transmedia": 2, "gamificado": 2, "documental": 2, "eventos": 2 },
    "presupuesto:premium":     { "xr": 3, "documental": 2, "gamificado": 2, "eventos": 2, "transmedia": 1 },
    "presupuesto:desconocido": { "auditoria": 3, "taller": 2 },

    /* Plazo */
    "plazo:urgente": { "video-abstract": 3, "auditoria": 2, "video-ia": 1 },
    "plazo:corto":   { "podcast": 2, "video-ia": 2, "taller": 2, "visualizacion": 1, "video-abstract": 1 },
    "plazo:medio":   { "transmedia": 2, "documental": 2, "gamificado": 2, "eventos": 2, "podcast": 1 },
    "plazo:largo":   { "xr": 3, "documental": 2, "transmedia": 2, "gamificado": 1 },

    /* Equipo */
    "equipo:ninguno":       { "auditoria": 3, "taller": 2, "video-abstract": 1 },
    "equipo:basico":        { "manual": 3, "podcast": 2, "video-ia": 2, "video-abstract": 1 },
    "equipo:especializado": { "transmedia": 2, "gamificado": 2, "documental": 2, "xr": 2, "eventos": 1 },

    /* Resultado */
    "resultado:piezas-sueltas":             { "video-abstract": 3, "video-ia": 2, "podcast": 1, "visualizacion": 1 },
    "resultado:serie-campana":              { "podcast": 3, "video-ia": 2, "transmedia": 2, "video-abstract": 1 },
    "resultado:ecosistema-multiplataforma": { "transmedia": 4, "eventos": 2, "podcast": 1 },
    "resultado:experiencia-inmersiva":      { "xr": 4, "gamificado": 3, "documental": 2 },
    "resultado:orientacion":                { "auditoria": 4, "taller": 3 }
  };

  /* Los servicios añadidos con las cinco líneas también puntúan. */
  const SCORING_EXTRA = {
    "organizacion:universidad-investigacion": { "paquete-proyecto": 2 },
    "objetivo:divulgar-resultados": { "paquete-proyecto": 2, "infografia-animacion": 1 },
    "objetivo:mejorar-imagen": { "produccion-documental": 2 },
    "resultado:piezas-sueltas": { "produccion-documental": 1, "infografia-animacion": 1 },
    "resultado:serie-campana": { "programa-continuado": 3 }
  };
  Object.entries(SCORING_EXTRA).forEach(([key, weights]) => {
    SCORING[key] = Object.assign({}, SCORING[key], weights);
  });

  /* ─── Questionnaire state ───────────────────────────────────── */
  const qState = {
    currentStep: 0,
    answers: {}   /* { questionId: optionValue } */
  };

  function computeScores() {
    const scores = {};
    data.services.forEach((s) => { scores[s.id] = 0; });

    Object.entries(qState.answers).forEach(([qId, value]) => {
      const key = `${qId}:${value}`;
      const weights = SCORING[key] || {};
      Object.entries(weights).forEach(([serviceId, pts]) => {
        if (scores[serviceId] !== undefined) scores[serviceId] += pts;
      });
    });

    return scores;
  }

  function topServices(n = 3) {
    const scores = computeScores();
    return data.services
      .map((s) => ({ service: s, score: scores[s.id] || 0 }))
      .sort((a, b) => b.score - a.score)
      .slice(0, n);
  }

  /* ─── Questionnaire rendering ───────────────────────────────── */
  function renderQuestionnaire() {
    const wrap = document.getElementById("diagnostico-wrap");
    if (!wrap) return;

    const totalSteps = QUESTIONS.length;
    const isFinished = qState.currentStep >= totalSteps;

    if (isFinished) {
      renderResults(wrap);
      return;
    }

    const q = QUESTIONS[qState.currentStep];
    const progress = Math.round((qState.currentStep / totalSteps) * 100);

    wrap.innerHTML = `
      <div class="quiz-progress-bar" role="progressbar" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100">
        <div class="quiz-progress-fill" style="width:${progress}%"></div>
      </div>
      <p class="quiz-step-label">Paso ${qState.currentStep + 1} de ${totalSteps}. ${escapeHtml(q.label)}</p>

      <div class="quiz-question-wrap" id="quiz-question">
        <i class="bi ${escapeHtml(q.icon)} quiz-q-icon"></i>
        <h3 class="quiz-question-text">${escapeHtml(q.question)}</h3>
        <div class="quiz-options" role="radiogroup" aria-label="${escapeHtml(q.question)}">
          ${q.options.map((opt) => `
            <button
              class="quiz-option ${qState.answers[q.id] === opt.value ? "selected" : ""}"
              data-question="${escapeHtml(q.id)}"
              data-value="${escapeHtml(opt.value)}"
              role="radio"
              aria-checked="${qState.answers[q.id] === opt.value ? "true" : "false"}"
            >
              <span class="quiz-option-label">${escapeHtml(opt.label)}</span>
            </button>
          `).join("")}
        </div>

        <div class="quiz-nav">
          ${qState.currentStep > 0 ? `<button class="btn btn-ghost" id="quiz-prev">Anterior</button>` : `<span></span>`}
          <button class="btn btn-primary" id="quiz-next" ${qState.answers[q.id] ? "" : "disabled"}>
            ${qState.currentStep < totalSteps - 1 ? "Siguiente" : "Ver recomendaciones"}
          </button>
        </div>
      </div>
    `;

    /* Option click */
    wrap.querySelectorAll(".quiz-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        const qId = btn.dataset.question;
        const val = btn.dataset.value;
        qState.answers[qId] = val;

        wrap.querySelectorAll(".quiz-option").forEach((b) => {
          b.classList.toggle("selected", b.dataset.value === val);
          b.setAttribute("aria-checked", b.dataset.value === val ? "true" : "false");
        });

        const nextBtn = wrap.querySelector("#quiz-next");
        if (nextBtn) nextBtn.removeAttribute("disabled");
      });
    });

    /* Navigation */
    const nextBtn = wrap.querySelector("#quiz-next");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        if (!qState.answers[q.id]) return;
        qState.currentStep += 1;
        renderQuestionnaire();
        wrap.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    const prevBtn = wrap.querySelector("#quiz-prev");
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        qState.currentStep = Math.max(0, qState.currentStep - 1);
        renderQuestionnaire();
        wrap.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  function renderResults(wrap) {
    const recommendations = topServices(3);
    const maxScore = recommendations[0]?.score || 1;

    wrap.innerHTML = `
      <div class="quiz-results">
        <div class="quiz-results-header">
          <div>
            <h3 class="quiz-results-title">Servicios recomendados</h3>
            <p class="quiz-results-subtitle">Según tus respuestas, estos son los servicios de Emeria LAB que mejor encajan:</p>
          </div>
        </div>

        <div class="quiz-recommendations">
          ${recommendations.map((rec, i) => {
            const s = rec.service;
            const pct = maxScore > 0 ? Math.round((rec.score / maxScore) * 100) : 0;
            return `
              <article class="quiz-rec-card ${i === 0 ? "quiz-rec-card--top" : ""}">
                <div class="quiz-rec-header">
                  <span class="quiz-rec-rank">${i + 1}</span>
                  <div class="quiz-rec-title-wrap">
                    <h4>${escapeHtml(s.name)}</h4>
                    <p class="quiz-rec-subtitle">${escapeHtml(s.subtitle)}</p>
                  </div>
                  <span class="pill pill-price quiz-rec-price">${escapeHtml(s.priceFrom)}</span>
                </div>
                <div class="quiz-rec-match">
                  <div class="quiz-rec-bar-wrap">
                    <div class="quiz-rec-bar" style="width:${pct}%"></div>
                  </div>
                  <span class="quiz-rec-pct">${pct} % de encaje</span>
                </div>
                <p class="quiz-rec-desc">${escapeHtml(s.description.slice(0, 200))}…</p>
                <div class="quiz-rec-tags">
                  ${s.tags.map((t) => `<span class="service-tag">${escapeHtml(t)}</span>`).join("")}
                </div>
                <button class="btn btn-primary quiz-rec-cta" data-service-id="${escapeHtml(s.id)}">
                  Ver la ficha
                </button>
              </article>
            `;
          }).join("")}
        </div>

        <div class="quiz-restart-wrap">
          <p class="quiz-restart-note">¿Quieres ajustar tus respuestas?</p>
          <button class="btn btn-ghost" id="quiz-restart">Reiniciar diagnóstico</button>
        </div>
      </div>
    `;

    /* Jump to service card on click */
    wrap.querySelectorAll(".quiz-rec-cta").forEach((btn) => {
      btn.addEventListener("click", () => {
        const serviceId = btn.dataset.serviceId;
        servicesState.selectedId = serviceId;
        renderServicesCards();
        renderServicesDetail();
        document.getElementById("servicios").scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    /* Restart */
    const restartBtn = wrap.querySelector("#quiz-restart");
    if (restartBtn) {
      restartBtn.addEventListener("click", () => {
        qState.currentStep = 0;
        qState.answers = {};
        renderQuestionnaire();
        wrap.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  /* ─── Init ──────────────────────────────────────────────────── */
  renderServicesSummary();
  renderServicesCards();
  renderServicesDetail();
  renderQuestionnaire();
})();
