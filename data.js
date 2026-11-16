window.EMERIA_DATA = {
  project: {
    title: "Biblia de formatos audiovisuales para innovación en divulgación científica",
    subtitle: "Repositorio de formatos de Emeria LAB",
    summary:
      "Esta versión digital traduce la investigación de Emeria LAB a un sistema acciónable para diseñar, prototipar y validar formatos de comunicación científica. Combina criterio académico y viabilidad de producción.",
    goals: [
      "Sistematizar formatos con una ficha estándar: objetivo, técnica, coste-tiempo, riesgos y medición.",
      "Fácilitar decisiones editoriales según impacto buscado: conocimiento, confianza, habilidades o acción.",
      "Servir como memoria metodológica abierta y base para transferir el servicio a terceros."
    ],
    scope: [
      "Ámbito: universidades, medios, instituciones culturales, EdTech y equipos de divulgación.",
      "Fase: repositorio inicial basado en la documentación del proyecto y la Biblia de formatos audiovisuales."
    ],
    status:
      "Versión 0.1 web. Contenido inicial normalizado desde la investigación. Requiere validación editorial continua."
  },
  pillars: [
    "Aprendizaje multimedia: reducir carga cognitiva, señalizar lo relevante y coordinar audio-imagen.",
    "Narrativa y persuasión: usar storytelling para conectar sin sacrificar rigor científico.",
    "Evaluación con teoría del cambio: medir resultados más allá de views (comprensión, confianza, acción)."
  ],
  taxonomy: [
    "Linealidad: lineal vs no lineal (ramificado, explorable).",
    "Interactividad: nula, ligera o fuerte.",
    "Inmersión: pantalla plana, 360, VR HMD, AR/WebXR.",
    "Serialidad: pieza única, serie o universo transmedia.",
    "IA generativa: asistida, híbrida o generada.",
    "Distribución: redes, web propia, LMS, OTT, apps y museos."
  ],
  decisionTree: [
    {
      objective: "Conocimiento y comprensión",
      recommendation:
        "Short vertical + recursos, video interactivo con quizzes, explorable simulations, mapa data-storytelling."
    },
    {
      objective: "Actitudes y confianza",
      recommendation:
        "Directo Science Live, videopodcast con clipping, docuserie/OTT, narrativas de personaje."
    },
    {
      objective: "Habilidades y transferencia",
      recommendation:
        "Video ramificado, simulaciones interactivas, VR con HMD para práctica guiada."
    },
    {
      objective: "Acción y participación",
      recommendation:
        "Universo transmedia, social AR con UGC, retos comunitarios con mapa interactivo."
    }
  ],
  governance: [
    "Transparencia: disclosure de contenido alterado o sintético y etiquetado coherente en plataforma.",
    "Cumplimiento UE: alinear flujos de IA con AI Act, privacidad y protección de datos.",
    "Gestión de riesgos: controlar sesgos, alucinaciones y sobre-simplificación en formatos virales.",
    "Proveniencia y trazabilidad: usar estándares tipo C2PA/Content Credentials cuando aplique.",
    "Definition of Done por ficha: rigor científico, claridad narrativa, accesibilidad y medición instrumentada."
  ],
  templateFields: [
    "Definición breve del formato (1-2 líneas).",
    "Objetivo principal de divulgación.",
    "Duración típica y extremos.",
    "Mecánicas de interacción.",
    "Requisitos técnicos y de distribución.",
    "Pipeline: pre, producción, post, publicación, mantenimiento.",
    "Equipo mínimo (roles y perfiles).",
    "Coste y tiempo orientativo.",
    "Métricas nativas de plataforma.",
    "Métricas de impacto científico (comprensión, confianza, acción).",
    "Riesgos cognitivos, reputacionales y legales.",
    "Checklist de calidad científica.",
    "Ejemplos reales.",
    "Referencias y evidencia de soporte."
  ],
  successCases: [
    {
      id: "prado-digital-social",
      title: "Museo del Prado: estrategia short-form en TikTok",
      organization: "Museo Nacional del Prado",
      format: "Píldora vertical short-form + live cultural",
      relatedFormats: ["short-vertical", "science-live"],
      challenge:
        "Acercar contenidos de arte e historia a audiencias jóvenes sin perder rigor curatorial.",
      approach:
        "El museo abrió y profesionalizó su canal de TikTok con piezas cortas explicativas, tono divulgativo y participación de especialistas del propio museo.",
      outcome:
        "Reconocimiento internacional como iniciativa destacada en arte y cultura digital, con gran tracción en público joven y crecimiento de comunidad.",
      transferableLearnings: [
        "Convertir conocimiento experto en piezas breves y serializadas mejora alcance.",
        "La presencia de perfiles técnicos/curatoriales refuerza credibilidad.",
        "El formato corto funciona como puerta de entrada a contenidos más profundos."
      ],
      sources: [
        {
          name: "Museo del Prado: candidatura internacional por su TikTok",
          url: "https://www.museodelprado.es/actualidad/noticia/el-tiktok-del-museo-del-prado-candidato-a-la/28a33809-ca29-8d1d-fa71-56f4914b81ac"
        },
        {
          name: "TikTok Newsroom: colaboración con museos europeos (incluye Prado)",
          url: "https://newsroom.tiktok.com/en-us/museum-el-prado-spain"
        }
      ]
    },
    {
      id: "mit-medialab-video-ecosystem",
      title: "MIT Media Lab: ecosistema de vídeo para investigación",
      organization: "MIT Media Lab",
      format: "Microvídeo, piezas de investigación y storytelling audiovisual",
      relatedFormats: ["short-vertical", "videopodcast"],
      challenge:
        "Comunicar investigación interdisciplinar compleja a audiencias no especialistas y partners globales.",
      approach:
        "Uso continuo de vídeos cortos, clips de laboratorio y piezas narrativas para explicar proyectos, equipos y resultados con lenguaje visual accesible.",
      outcome:
        "Biblioteca audiovisual amplia y actualizada que facilita difusión pública, transferencia y conexión con comunidad internacional.",
      transferableLearnings: [
        "Combinar vídeos breves con piezas más profundas permite embudo de comprensión.",
        "La narrativa visual de proyectos reales mejora comprensión de tecnologías complejas.",
        "Publicar de forma continua crea memoria de innovación y reputación institucional."
      ],
      sources: [
        {
          name: "MIT Media Lab - Videos",
          url: "https://www.media.mit.edu/videos/"
        },
        {
          name: "MIT Media Lab - News + Updates",
          url: "https://www.media.mit.edu/"
        }
      ]
    },
    {
      id: "nasa-twitch-live",
      title: "NASA en Twitch: divulgación científica en directo",
      organization: "NASA",
      format: "Live streaming interactivo con chat",
      relatedFormats: ["science-live"],
      challenge:
        "Conectar divulgación científica institucional con audiencias digitales en tiempo real.",
      approach:
        "Uso de directos en Twitch para eventos y sesiones de ciencia/espacio con participación de comunidad y formatos de conversación en vivo.",
      outcome:
        "Consolidación de un canal oficial en una plataforma nativa de interacción, complementando otras plataformas de vídeo para alcance y engagement.",
      transferableLearnings: [
        "El chat en tiempo real aumenta cercanía y preguntas de alto valor.",
        "Los directos funcionan mejor cuando se coordinan con piezas resumen posteriores.",
        "La estrategia multicanal permite combinar alcance masivo y conversación profunda."
      ],
      sources: [
        {
          name: "Canal oficial de NASA en Twitch",
          url: "https://www.twitch.tv/nasa"
        },
        {
          name: "Estudio sobre Twitch y comunicación científica (caso NASA)",
          url: "https://firstmonday.org/ojs/index.php/fm/article/view/13214"
        }
      ]
    },
    {
      id: "phet-simulations-stem",
      title: "PhET (CU Boulder): simulaciones interactivas para STEM",
      organization: "University of Colorado Boulder - PhET",
      format: "Explorable simulations",
      relatedFormats: ["explorable-sim", "interactive-video"],
      challenge:
        "Mejorar comprensión conceptual y participación activa en aprendizaje de ciencias y matemáticas.",
      approach:
        "Despliegue global de simulaciones manipulables con diseño basado en investigación educativa y uso en aula y autoaprendizaje.",
      outcome:
        "Adopción internacional y evidencia de mejoras en aprendizaje y actitudes hacia STEM en distintos contextos educativos.",
      transferableLearnings: [
        "La interacción con variables acelera comprensión de conceptos abstractos.",
        "Las simulaciones son más efectivas cuando se integran en secuencias didácticas activas.",
        "El acceso abierto facilita escalabilidad y reutilización en múltiples niveles."
      ],
      sources: [
        {
          name: "PhET Interactive Simulations",
          url: "https://phet.colorado.edu/"
        },
        {
          name: "PhET Impact Report 2024",
          url: "https://phet.colorado.edu/publications/PhET_Impact_Report_2024.pdf"
        }
      ]
    }
  ],
  services: [
    {
      id: "auditoria",
      number: "01",
      name: "Auditoría de narrativa científica",
      subtitle: "Diagnóstico estratégico de comunicación audiovisual",
      tags: ["Consultoría", "Estrategia", "Captación"],
      description: "Servicio de diagnóstico y consultoría que evalúa la estrategia de comunicación audiovisual actual del cliente (universidad, centro de investigación, fundación o empresa EdTech) e identifica oportunidades de mejora y formatos innovadores aplicables a sus necesidades. El proceso incluye análisis del inventario de contenidos existentes, evaluación de la eficacia narrativa y el impacto en audiencias, benchmarking con referentes del sector y entrega de un informe detallado con recomendaciones estratégicas y un catálogo de formatos priorizados. Es la puerta de entrada ideal a Emeria LAB para clientes que aún no tienen clara su hoja de ruta de comunicación científica.",
      includes: [
        "Análisis del inventario de contenidos",
        "Evaluación de eficacia narrativa",
        "Benchmarking sectorial",
        "Informe con recomendaciones y formatos priorizados"
      ],
      clientPrice: "800 – 2.500 €",
      clientPriceDetail: "",
    },
    {
      id: "manual",
      number: "02",
      name: "Manual de formatos audiovisuales a medida",
      subtitle: "Guía técnica para producción autónoma con calidad garantizada",
      tags: ["Manual", "Autonomía", "Metodología"],
      description: "Entrega de una guía técnica completa y personalizada para que el equipo de comunicación del cliente pueda producir de forma autónoma sus propios contenidos audiovisuales de divulgación científica con garantías de calidad y coherencia narrativa. El manual incluye definición del tono de voz y estilo visual, estructuras de guión adaptadas a los formatos seleccionados, pautas de accesibilidad, recomendaciones de herramientas y flujos de producción paso a paso. Es el producto ideal para instituciones que disponen de recursos humanos internos pero carecen del conocimiento metodológico para sistematizar su producción audiovisual.",
      includes: [
        "Tono de voz y estilo visual",
        "Estructuras de guión por formato",
        "Flujos de producción paso a paso",
        "Pautas de accesibilidad"
      ],
      clientPrice: "1.200 – 3.500 €",
      clientPriceDetail: "",
    },
    {
      id: "taller",
      number: "03",
      name: "Taller de ideación co-creativa",
      subtitle: "Design thinking aplicado a la divulgación científica",
      tags: ["Formación", "Co-creación", "Talleres"],
      description: "Sesión o programa de talleres presenciales o virtuales en los que el equipo de Emeria LAB trabaja junto al equipo del cliente para diseñar colaborativamente los formatos audiovisuales más adecuados a sus necesidades de comunicación científica. A través de metodologías de design thinking, creativity sprints y prototipado rápido en papel, los participantes definen la propuesta de valor de sus contenidos, identifican las audiencias prioritarias y llegan al final del taller con un brief ejecutivo listo para producción. El servicio incluye facilitación experta, materiales de trabajo, documentación del proceso y seguimiento posterior.",
      includes: [
        "Sesiones presenciales o virtuales",
        "Design thinking y creativity sprints",
        "Brief ejecutivo listo para producción",
        "Facilitación experta + seguimiento"
      ],
      clientPrice: "900 – 3.000 € / sesión",
      clientPriceDetail: "",
    },
    {
      id: "video-abstract",
      number: "04",
      name: "Video-abstract científico",
      subtitle: "Tu investigación en 90 segundos, producida con IA",
      tags: ["Investigación", "Open Access", "Horizon"],
      description: "Pieza audiovisual breve (entre 90 segundos y 4 minutos) que sintetiza de forma visual y narrativa los hallazgos, metodología e impacto de un artículo o proyecto de investigación, con el objetivo de ampliar su visibilidad, facilitar su comprensión por audiencias no especializadas y aumentar su tasa de citación. El video-abstract combina locución guionizada, motion graphics, imágenes de recurso y, cuando procede, fragmentos de entrevista con los propios autores. El servicio incluye el guión de adaptación del texto científico, la producción de la pieza y la entrega en formatos optimizados para repositorios institucionales, plataformas académicas y redes sociales científicas. Se puede contratar como servicio unitario o en paquetes para grupos de investigación, revistas académicas o convocatorias de proyectos.",
      includes: [
        "Flujo 100% automatizado con IA",
        "Guión, locución y motion graphics",
        "Formatos para repositorios y RRSS",
        "Paquetes de volumen disponibles"
      ],
      clientPrice: "60 – 100 € / pieza",
      clientPriceDetail: "Paquetes de 10 unidades desde 55 € / pieza.",
    },
    {
      id: "podcast",
      number: "05",
      name: "Podcast narrativo científico",
      subtitle: "Ciencia en audio inmersivo para audiencias digitales",
      tags: ["Audio", "Divulgación", "Series"],
      description: "Producción sonora serializada con tratamiento documental y narrativa envolvente orientada a hacer accesible el conocimiento académico y científico a audiencias no especializadas. A diferencia del podcast de entrevista convencional, el podcast narrativo combina locución guionizada, efectos sonoros, música original y fragmentos de fuentes primarias para construir una experiencia de escucha inmersiva. El servicio incluye diseño de línea editorial, desarrollo de la biblia de la serie, producción de episodios piloto y validación de la propuesta con paneles de audiencia antes del lanzamiento.",
      includes: [
        "Guión asistido por IA",
        "Edición sonora y música original",
        "Diseño de línea editorial completa",
        "Distribución en plataformas líderes"
      ],
      clientPrice: "800 – 2.500 € / episodio",
      clientPriceDetail: "Diseño de serie completa desde 5.000 €.",
    },
    {
      id: "video-ia",
      number: "06",
      name: "Vídeo educativo generado con IA",
      subtitle: "Contenido escalable con calidad narrativa y coste mínimo",
      tags: ["IA Generativa", "EdTech", "Automatización"],
      description: "Producción de piezas audiovisuales cortas (entre 3 y 12 minutos) en las que la inteligencia artificial interviene en distintas fases del proceso creativo: generación de imágenes y animaciones, síntesis de voz naturalista, edición automatizada y personalización del contenido según el perfil del espectador. El resultado es un formato escalable que permite al cliente producir un volumen elevado de contenidos de divulgación manteniendo coherencia estética y calidad narrativa, con tiempos de producción y costes significativamente reducidos respecto a la producción audiovisual tradicional. El servicio incluye el diseño del flujo de producción asistida por IA, la selección y configuración de las herramientas más adecuadas y la validación ética y narrativa de los resultados.",
      includes: [
        "Generación de imágenes y animaciones",
        "Síntesis de voz naturalista",
        "Edición y montaje automatizados",
        "Validación ética incluida"
      ],
      clientPrice: "500 – 2.000 € / pieza",
      clientPriceDetail: "Tarifas de volumen para series de más de 10 piezas.",
    },
    {
      id: "visualizacion",
      number: "07",
      name: "Visualizaciones avanzadas",
      subtitle: "Datos complejos convertidos en relatos visuales de impacto",
      tags: ["Data", "Infografía", "Ciencia Abierta"],
      description: "Transformación de conjuntos de datos complejos (estadísticas, modelos climáticos, datos epidemiológicos, resultados de ensayos clínicos) en piezas audiovisuales de visualización dinámica que hacen comprensibles las tendencias, patrones y conclusiones científicas para audiencias no expertas. El servicio combina diseño de información, motion graphics y narración científica para convertir tablas y gráficos convencionales en relatos visuales impactantes y rigurosos. Especialmente indicado para la comunicación de resultados de investigación, memorias institucionales, informes de impacto y campañas de sensibilización basadas en evidencia.",
      includes: [
        "Diseño de información asistido por IA",
        "Motion graphics sobre datos reales",
        "Narración científica integrada",
        "Indicado para memorias e informes de impacto"
      ],
      clientPrice: "500 – 5.000 € / pieza",
      clientPriceDetail: "",
    },
    {
      id: "transmedia",
      number: "08",
      name: "Serie transmedia de divulgación",
      subtitle: "Un mismo conocimiento, todas las plataformas",
      tags: ["Multiplataforma", "Comunidad", "EdTech"],
      description: "Formato narrativo distribuido simultáneamente en múltiples plataformas (televisión, redes sociales, podcast, web interactiva) con piezas complementarias que amplían el universo de conocimiento central. Cada plataforma aporta una capa diferente de profundidad: el vídeo ofrece la narrativa principal, el podcast profundiza en entrevistas, las redes sociales generan comunidad y la web interactiva proporciona datos y recursos descargables. Este modelo multiplica el alcance de la divulgación científica, adaptando el mensaje al contexto y hábito de consumo de cada audiencia sin perder coherencia editorial.",
      includes: [
        "Diseño de universo narrativo multiplataforma",
        "Vídeo, podcast, RRSS y web interactiva",
        "Coordinación editorial integrada",
        "Piloto de validación disponible"
      ],
      clientPrice: "6.000 – 18.000 € / temporada",
      clientPriceDetail: "Piloto de validación desde 2.500 €.",
    },
    {
      id: "gamificado",
      number: "09",
      name: "Contenido educativo gamificado",
      subtitle: "Mecánicas de juego al servicio de la divulgación",
      tags: ["Gamificación", "Jóvenes", "Museos"],
      description: "Diseño y producción de piezas audiovisuales y experiencias interactivas que aplican mecánicas de juego (puntos, niveles, retos, narrativa de progreso) para facilitar el aprendizaje y la divulgación científica. El servicio va desde la producción de vídeos con elementos gamificados integrados hasta el desarrollo de microjuegos web o aplicaciones móviles ligeras orientadas a la exploración de contenidos académicos. La gamificación aumenta significativamente la retención del conocimiento y el tiempo de interacción del usuario, convirtiéndose en una palanca estratégica para instituciones que buscan llegar a audiencias jóvenes con contenidos de ciencia, historia o tecnología.",
      includes: [
        "Diseño de mecánicas y niveles",
        "Vídeos gamificados o microjuegos web",
        "Alta retención de conocimiento",
        "Modelos de licenciamiento disponibles"
      ],
      clientPrice: "8.000 – 25.000 €",
      clientPriceDetail: "Variable según si es vídeo gamificado, microjuego web o aplicación móvil.",
    },
    {
      id: "documental",
      number: "10",
      name: "Documental interactivo",
      subtitle: "El espectador decide cómo explorar el conocimiento",
      tags: ["Educación", "Cultura", "Museos"],
      description: "Producción audiovisual no lineal en la que el espectador puede tomar decisiones narrativas o explorar ramas temáticas alternativas. Combina vídeo de calidad profesional con interfaces digitales que permiten la navegación entre contenidos, aportando una experiencia inmersiva especialmente eficaz para explicar procesos científicos complejos, fenómenos sociales o trayectorias históricas. Cada pieza se desarrolla bajo metodología de design thinking, con diagnóstico previo de las necesidades del cliente, mapa de ramificaciones narrativas, prototipado de la interfaz y validación con audiencias reales antes de la producción definitiva.",
      includes: [
        "Narrativa no lineal con ramas temáticas",
        "Interfaz de navegación interactiva",
        "Validación con audiencias reales",
        "Distribución en plataformas OTT"
      ],
      clientPrice: "10.000 – 28.000 €",
      clientPriceDetail: "",
    },
    {
      id: "eventos",
      number: "11",
      name: "Producción integral de eventos científicos en directo",
      subtitle: "Del evento al ecosistema audiovisual permanente",
      tags: ["Congresos", "Directo", "Institucional"],
      description: "Servicio de producción audiovisual completa para congresos, jornadas, seminarios y actos institucionales de carácter científico o académico, que abarca tanto la cobertura del evento en directo como la producción de los materiales audiovisuales previos y derivados que amplían su alcance e impacto. La propuesta se articula en tres fases: preproducción (entrevistas a ponentes, teasers, materiales de contexto), realización en directo (multicámara, streaming, grafismo, archivo) y posproducción (resúmenes, video-abstracts, repositorio completo). El resultado es un ecosistema audiovisual cohesionado que transforma un evento puntual en un activo de comunicación científica duradero y reutilizable.",
      includes: [
        "Preproducción: entrevistas, teasers, piezas previas",
        "Realización en directo: multicámara y streaming",
        "Posproducción: resúmenes, video-abstracts, repositorio",
        "Servicio 360° con profundidad editorial científica"
      ],
      clientPrice: "12.000 – 32.000 €",
      clientPriceDetail: "En función del número de días, ponentes, idiomas y materiales derivados requeridos.",
    },
    {
      id: "xr",
      number: "12",
      name: "Experiencia inmersiva en realidad extendida (XR)",
      subtitle: "VR, AR y MR para visualizar lo que los formatos convencionales no pueden",
      tags: ["VR/AR", "Inmersivo", "I+D"],
      description: "Desarrollo de piezas audiovisuales en realidad virtual (VR), realidad aumentada (AR) o realidad mixta (MR) que sitúan al usuario en el interior del contenido científico o educativo. Esta modalidad permite visualizar fenómenos a escala microscópica o astronómica, recrear entornos históricos o simular procesos industriales y científicos con un nivel de comprensión imposible de alcanzar mediante formatos convencionales. El servicio comprende el diseño de la experiencia, el desarrollo del prototipo en plataformas como Unity o Unreal Engine, la validación pedagógica con usuarios y la entrega de la versión final adaptada a los dispositivos del cliente.",
      includes: [
        "Diseño de experiencia inmersiva",
        "Desarrollo en Unity / Unreal Engine",
        "Validación pedagógica con usuarios",
        "Compatible con Meta Quest y Apple Vision Pro"
      ],
      clientPrice: "18.000 – 55.000 €",
      clientPriceDetail: "Variable según plataforma objetivo, nivel de interactividad y volumen de contenidos.",
    }
  ],
  formats: [
    {
      id: "short-vertical",
      name: "Píldora vertical short-form science",
      category: "social",
      type: "Video corto",
      audience: "General y joven",
      objective: "Alfabetización científica rápida y puerta de entrada a contenidos largos.",
      definition:
        "Video vertical breve para explicar conceptos, desmontar mitos o lanzar mini historias científicas en scroll.",
      technical: [
        "Formato 9:16 full-screen.",
        "Ritmo rápido y subtítulos de facto obligatorios.",
        "Publicación multicanal: TikTok, Reels, Shorts."
      ],
      production:
        "Equipo mínimo: 1 creador/a + revisión experta puntual. Herramientas: móvil, micro de solapa y editor rápido.",
      costLabel: "0-2k EUR por pieza",
      timeLabel: "Horas a 2 días",
      interactivityLevel: 1,
      scalabilityLevel: 5,
      costIndex: 2,
      timeIndex: 2,
      pros: [
        "Gran alcance y descubrimiento.",
        "Muy util para desmentidos rápidos.",
        "Permite iterar guion y estilo a alta velocidad."
      ],
      risks: [
        "Simplificación excesiva.",
        "Mayor exposición a desinformación si no hay framing claro."
      ],
      metrics: [
        "Retención y completion.",
        "Tiempo medio visto y replays.",
        "Compartidos/guardados y CTR hacia pieza larga."
      ],
      examples: [
        { name: "Feed STEM en TikTok Europa", url: "https://newsroom.tiktok.com/es-es/tiktok-lanza-un-feed-dedicado-a-contenidos-stem-en-toda-europa" },
        { name: "Programa #LearnOnTikTok", url: "https://www.tiktok.com/tag/LearnOnTikTok" },
        { name: "Instagram Reel 1", url: "https://www.instagram.com/reels/DWUX7wokTJE/", embed: true },
        { name: "Instagram Reel 2", url: "https://www.instagram.com/reels/DWUX7wokTJE/", embed: true },
        { name: "YouTube Short 1", url: "https://www.youtube.com/shorts/VOZS5LV9bBw", embed: true },
        { name: "YouTube Short 2", url: "https://www.youtube.com/shorts/7T3F6uixAnM", embed: true },
        { name: "TikTok MIT 1", url: "https://www.tiktok.com/@mit/video/7434572183743204654", embed: true },
        { name: "TikTok MIT 2", url: "https://www.tiktok.com/@mit/video/7297257256834403627", embed: true }
      ],
      references: [
        "Evidencia de microlearning y video corto en aprendizaje/retención.",
        "Analisis comparados de engagement científico por plataforma."
      ]
    },
    {
      id: "science-live",
      name: "Directo interactivo Science Live",
      category: "social",
      type: "Live streaming",
      audience: "General y comunidad",
      objective: "Aumentar cercanía, confianza y resolución de dudas en tiempo real.",
      definition:
        "Emisión en directo con chat, preguntas, encuestas e invitados para AMAs, demos o eventos científicos.",
      technical: [
        "Stack típico: OBS + plataforma live.",
        "Necesidad de codificación estable y moderación activa.",
        "Reciclable en clips verticales post-evento."
      ],
      production:
        "Equipo mínimo: host científico + moderación + técnico (puede comprimirse en setups pequeños).",
      costLabel: "0-6k EUR por evento",
      timeLabel: "1-5 días + directo",
      interactivityLevel: 4,
      scalabilityLevel: 3,
      costIndex: 3,
      timeIndex: 3,
      pros: [
        "Humaniza la ciencia.",
        "Resuelve dudas al instante.",
        "Fuerte construcción de comunidad."
      ],
      risks: ["Riesgo reputacional por errores en vivo.", "Dependencia de moderación para controlar ruido y trolls."],
      metrics: [
        "Concurrencia media y pico.",
        "Watch time total.",
        "Mensajes/minuto y ratio de chatters.",
        "Retención hasta tramo Q&A."
      ],
      examples: [
        { name: "NASA en Twitch", url: "https://www.twitch.tv/nasa" },
        { name: "CdeCiencia en Twitch", url: "https://www.twitch.tv/cdeciencia" }
      ],
      references: ["Revisiones sobre Twitch para comunicación científica y educativa."]
    },
    {
      id: "videopodcast",
      name: "Videopodcast + clip factory",
      category: "hibrido",
      type: "Conversacional multiformato",
      audience: "General y profesional",
      objective: "Combinar profundidad y eficiencia de reutilización en un solo flujo.",
      definition:
        "Formato grabado (o falso directo) que sale como episodio largo y se atomiza en clips para redes.",
      technical: [
        "Grabación multicámara o cámara única + apoyo.",
        "Version audio para feed podcast.",
        "Derivación sistemática de clips verticales."
      ],
      production:
        "Equipo mínimo: host + invitado/a + editor/a. Requiere estructura de guion para evitar dispersión.",
      costLabel: "0.3-4k EUR por episodio",
      timeLabel: "1-3 días",
      interactivityLevel: 1,
      scalabilityLevel: 4,
      costIndex: 3,
      timeIndex: 3,
      pros: [
        "Construye autoridad de marca científica.",
        "Muy buen ratio contenido/tiempo.",
        "Compatible con OTT, web y social."
      ],
      risks: ["Conversación sin foco narrativo.", "Clips sin contexto pueden perder rigor."],
      metrics: [
        "Retención por minuto en episodio largo.",
        "Completitud en audio.",
        "Crecimiento de suscriptores y conversiones."
      ],
      examples: [
        { name: "Modelo de universo Hope (podcast + mapa + documental)", url: "https://www.rtve.es/rtve/20250425/mapa-interactivo-hope-otra-forma-conocer-acciones-para-mitigar-cambio-climatico/16552704.shtml" }
      ],
      references: ["Principios de narrativa multimedia y evaluación de contenido científico en social."]
    },
    {
      id: "transmedia-universe",
      name: "Universo transmedia",
      category: "transmedia",
      type: "Multiplataforma coordinada",
      audience: "General y subpúblicos",
      objective: "Escalar alcance sin perder profundidad mediante múltiples puntos de entrada.",
      definition:
        "Diseño coordinado de una historia científica en serie, mapa, web, podcast, redes y activaciones.",
      technical: [
        "Arquitectura hub + satélites.",
        "Gobernanza editorial fuerte y control de versiones.",
        "Dependencia alta de coordinación y analítica."
      ],
      production:
        "Equipo mínimo: dirección editorial, productor/a transmedia, community, analítica y soporte técnico.",
      costLabel: "25k-250k+ EUR (MVP a escala)",
      timeLabel: "6-20 semanas + mantenimiento",
      interactivityLevel: 4,
      scalabilityLevel: 3,
      costIndex: 8,
      timeIndex: 7,
      pros: [
        "Multiplica puntos de contacto con audiencia.",
        "Favorece repetición contextual del aprendizaje.",
        "Permite capas de participación progresiva."
      ],
      risks: ["Complejidad operativa elevada.", "Incoherencia si no hay dirección unificada."],
      metrics: [
        "Alcance deduplicado total.",
        "Recorridos cross-plataforma.",
        "Participación UGC y calidad de comentarios.",
        "Outcomes pre/post."
      ],
      examples: [
        { name: "Universo Atapuerca", url: "https://www.atapuerca.org/" },
        { name: "Universo Hope", url: "https://www.rtve.es/rtve/20250425/mapa-interactivo-hope-otra-forma-conocer-acciones-para-mitigar-cambio-climatico/16552704.shtml" }
      ],
      references: ["Literatura sobre transmedia en comunicación científica."]
    },
    {
      id: "webdoc",
      name: "Webdoc / documental interactivo",
      category: "interactivo",
      type: "Web interactiva no lineal",
      audience: "Público motivado",
      objective: "Explicar sistemas complejos por capas y rutas de exploración.",
      definition:
        "Obra documental no lineal o semi-lineal donde la persona usuaria navega módulos, extras y decisiones.",
      technical: [
        "Front-end web + UX + video por capas.",
        "Analítica de navegación por rutas.",
        "Hosting y mantenimiento continuado."
      ],
      production:
        "Equipo mínimo: dirección, guion, realización, UX/UI, front-end, QA y analítica.",
      costLabel: "15k-200k EUR",
      timeLabel: "8-24 semanas",
      interactivityLevel: 4,
      scalabilityLevel: 3,
      costIndex: 7,
      timeIndex: 8,
      pros: [
        "Muy fuerte para causalidad y contexto.",
        "Permite profundidad a demanda."
      ],
      risks: ["Mayor fricción de entrada que video simple.", "Coste técnico y QA alto."],
      metrics: [
        "Tiempo en experiencia.",
        "Rutas más frecuentes.",
        "Finalización de módulos.",
        "Retorno de usuarios."
      ],
      examples: [
        { name: "Sin huella (Lab RTVE)", url: "https://lab.rtve.es/huella-ecologica/es/proyecto/" }
      ],
      references: ["Investigación sobre webdoc participativo y test de usuario."]
    },
    {
      id: "data-storytelling",
      name: "Mapa interactivo y data-storytelling",
      category: "interactivo",
      type: "Visualización guíada por datos",
      audience: "General y decisores",
      objective: "Anclar evidencia y contexto sin saturar el relato principal.",
      definition:
        "Historia basada en mapas, series y comparadores con navegación por scroll, fichas y filtros.",
      technical: [
        "Visualización web y cartografía.",
        "Base de datos y accesibilidad.",
        "Instrumentación de eventos analíticos."
      ],
      production:
        "Equipo mínimo: periodista/científico de datos, diseño info, front-end y edición científica.",
      costLabel: "10k-120k EUR",
      timeLabel: "4-16 semanas",
      interactivityLevel: 3,
      scalabilityLevel: 4,
      costIndex: 5,
      timeIndex: 6,
      pros: [
        "Excelente para problemas sistemicos (clima, salud, energia).",
        "Favorece transparencia metodológica."
      ],
      risks: ["Dependencia de actualización de datos y APIs.", "Coste superior al video lineal."],
      metrics: [
        "Profundidad de scroll.",
        "Clicks por capa y rutas.",
        "Conversión a recursos o acción local."
      ],
      examples: [
        { name: "Mapa interactivo del universo Hope", url: "https://www.rtve.es/rtve/20250425/mapa-interactivo-hope-otra-forma-conocer-acciones-para-mitigar-cambio-climatico/16552704.shtml" }
      ],
      references: ["Principios de aprendizaje multimedia y comunicación científica basada en evidencia."]
    },
    {
      id: "interactive-video",
      name: "Video interactivo con quizzes (H5P/LMS)",
      category: "interactivo",
      type: "Video lineal con capas activas",
      audience: "Estudiantes y publico general",
      objective: "Mejorar comprensión comprobada y evaluación formativa.",
      definition:
        "Video lineal con preguntas, hotspots, enlaces y microtareas para active learning.",
      technical: [
        "H5P y herramientas equivalentes en navegador.",
        "Integrable en LMS, web propia y landing de curso."
      ],
      production:
        "Equipo mínimo: guion instruccional, edición, diseño de preguntas e integración LMS.",
      costLabel: "0.5-8k EUR",
      timeLabel: "1-10 días",
      interactivityLevel: 3,
      scalabilityLevel: 5,
      costIndex: 4,
      timeIndex: 3,
      pros: [
        "Alinea video y aprendizaje activo.",
        "Genera datos granulares de comprensión."
      ],
      risks: ["Interacción limitada en redes abiertas.", "Puede sentirse escolar si no se diseña bien."],
      metrics: [
        "Tasa de respuesta y acierto por pregunta.",
        "Abandono por minuto.",
        "Reintentos y mejora post-test."
      ],
      examples: [
        { name: "H5P Interactive Video", url: "https://h5p.org/interactive-video" },
        { name: "Tutorial Interactive Video H5P", url: "https://h5p.org/tutorial-interactive-video" }
      ],
      references: ["Estudios sobre recursos H5P y outcomes de aprendizaje."]
    },
    {
      id: "branching-video",
      name: "Video ramificado (branching)",
      category: "interactivo",
      type: "Simulación de decisión audiovisual",
      audience: "Formación y publico general",
      objective: "Entrenar razonamiento y transferencia en escenarios con consecuencias.",
      definition:
        "Experiencia audiovisual donde la audiencia elige rutas y obtiene resultados distintos.",
      technical: [
        "Lógica de nodos y trazabilidad de decisiones.",
        "Posible integración en LMS o plataformas compatibles."
      ],
      production:
        "Equipo mínimo: guion de experiencia, tablas de decisión, rodaje modular y QA.",
      costLabel: "5k-150k EUR",
      timeLabel: "3-20 semanas",
      interactivityLevel: 5,
      scalabilityLevel: 3,
      costIndex: 6,
      timeIndex: 7,
      pros: [
        "Alta capacidad para practicar dilemas y decisiones.",
        "Favorece aprendizaje por escenarios."
      ],
      risks: ["Explosion combinatoria de guion/rodaje.", "Coste sube rápido si crecen ramas."],
      metrics: [
        "Rutas mas elegidas.",
        "Tasa de finalización por finales.",
        "Mejora en test de decisión."
      ],
      examples: [
        { name: "Bandersnatch (Black Mirror, Netflix)", url: "https://www.theverge.com/news/663933/netflix-black-mirror-bandersnatch-kimmy-schmidt-removal" }
      ],
      references: ["Estudios de engagement/aprendizaje en videos ramificados."]
    },
    {
      id: "explorable-sim",
      name: "Explorable explanations y simulaciones",
      category: "interactivo",
      type: "Modelo manipulable",
      audience: "Estudiantes y publico curioso",
      objective: "Construir intuición científica mediante experimentación guíada.",
      definition:
        "La persona aprende manipulando variables y observando cambios de sistema en tiempo real.",
      technical: [
        "HTML5/WebGL o motor 3D según complejidad.",
        "Necesita arquitectura didáctica para no quedarse en juego."
      ],
      production:
        "Equipo mínimo: experto/a científico, diseño instruccional y desarrollo.",
      costLabel: "5k-200k EUR",
      timeLabel: "4-26 semanas",
      interactivityLevel: 5,
      scalabilityLevel: 5,
      costIndex: 8,
      timeIndex: 8,
      pros: [
        "Muy potente para conceptos abstractos.",
        "Reduce misconceptions con feedback inmediato."
      ],
      risks: ["Sin guía pedagógica pierde valor de aprendizaje.", "Desarrollo técnico exigente."],
      metrics: [
        "Interacciónes por sesion.",
        "Tiempo explorando.",
        "Patrones de error y logro de objetivos."
      ],
      examples: [
        { name: "PhET (simulaciones interactivas)", url: "https://phet.colorado.edu/en/about" },
        { name: "NASA Eyes on the Solar System", url: "https://eyes.nasa.gov/apps/solar-system" }
      ],
      references: ["Meta-análisis sobre simulaciones interactivas en educación STEM."]
    },
    {
      id: "immersive-360",
      name: "Experiencia inmersiva 360",
      category: "inmersivo",
      type: "Tour/visita 360",
      audience: "General y museos",
      objective: "Aumentar presencia y comprensión espacial de contextos científicos.",
      definition:
        "Video o entorno 360 consumible en móvil, PC o visor, lineal o con hotspots.",
      technical: [
        "Captura 360 + stitching + audio espacial.",
        "WebXR opcional para acceso desde navegador."
      ],
      production:
        "Equipo mínimo: operador 360, post 360 y guion de visita.",
      costLabel: "3k-60k EUR",
      timeLabel: "2-10 semanas",
      interactivityLevel: 2,
      scalabilityLevel: 3,
      costIndex: 5,
      timeIndex: 5,
      pros: [
        "Fuerte potencial en patrimonio científico y expediciónes.",
        "Puede mejorar empatia y orientación espacial."
      ],
      risks: ["Mareo y fatiga en algunos perfiles.", "Puede quedar en solo efecto wow."],
      metrics: [
        "Tiempo en escena.",
        "Clicks en hotspots.",
        "Finalización y mapas de mirada (si disponibles)."
      ],
      examples: [
        { name: "Visitas virtuales MNCN", url: "https://www.mncn.csic.es/es/visita-el-mncn/exposiciones/visitas-virtuales" },
        { name: "O mar en 360º (exploración marina)", url: "https://cadenaser.com/galicia/2025/07/06/explora-el-fondo-marino-de-las-illas-atlanticas-gracias-a-la-realidad-virtual-radio-vigo/" }
      ],
      references: ["Revisiones sobre video 360 en aprendizaje y comunicación."]
    },
    {
      id: "vr-hmd",
      name: "VR con HMD",
      category: "inmersivo",
      type: "Simulación inmersiva alta",
      audience: "Formación y museos",
      objective: "Practica procedimental y visualización de escenarios imposibles.",
      definition:
        "Experiencia con visor y controladores para simular laboratorio, procesos o escalas complejas.",
      technical: [
        "Motores 3D de tiempo real (Unity/Unreal).",
        "Logística de visores, higiene y soporte.",
        "QA intenso en rendimiento y confort."
      ],
      production:
        "Equipo mínimo: productor VR, diseño de interacción, modelado 3D, programación y QA.",
      costLabel: "30k-500k+ EUR",
      timeLabel: "10-40 semanas",
      interactivityLevel: 5,
      scalabilityLevel: 3,
      costIndex: 9,
      timeIndex: 9,
      pros: [
        "Alto potencial para habilidades y presencia.",
        "Puede mejorar retención en escenarios concretos."
      ],
      risks: ["Coste alto y mantenimiento continuo.", "Riesgo de cybersickness."],
      metrics: [
        "Tiempo de tarea y errores.",
        "Repeticion de práctica.",
        "Aprendizaje retenido y percepción de presencia."
      ],
      examples: [
        { name: "Cajal VR (Museo de Ciencias Naturales)", url: "https://santiagoramonycajal.org/2024/03/14/cajal-vr-en-el-museo-de-ciencias-naturales-de-madrid/" },
        { name: "Atapuerca VR (residencias)", url: "https://cadenaser.com/castillayleon/2025/06/05/atapuerca-un-paseo-por-la-evolucion-desde-residencias-de-mayores-de-burgos-con-visores-de-realidad-virtual-radio-castilla/" }
      ],
      references: ["Meta-análisis sobre VR inmersiva y rendimiento de aprendizaje."]
    },
    {
      id: "ar-webxr",
      name: "AR educativa (móvil/WebXR)",
      category: "inmersivo",
      type: "Capa digital sobre entorno fisico",
      audience: "General y educación",
      objective: "Aprendizaje situado y visualización de fenómenos invisibles.",
      definition:
        "Capas AR para modelos 3D, recorridos geolocalizados o experiencias contextuales en campo/museo.",
      technical: [
        "AR nativa (ARKit/ARCore) o web (WebXR).",
        "Pruebas en múltiples dispositivos.",
        "Atención a obsolescencia de plataformas."
      ],
      production:
        "Equipo mínimo: modelado 3D, interacción y QA multiplataforma.",
      costLabel: "5k-200k EUR",
      timeLabel: "4-20 semanas",
      interactivityLevel: 4,
      scalabilityLevel: 3,
      costIndex: 7,
      timeIndex: 7,
      pros: [
        "Muy buena conexion entre contenido y territorio.",
        "Alta recordación en experiencias guíadas."
      ],
      risks: ["Fragmentación tecnológica.", "Dependencia del parque de dispositivos."],
      metrics: [
        "Activaciones y tiempo de uso.",
        "Microquizzes en contexto.",
        "Tasa de finalización de recorrido."
      ],
      examples: [
        { name: "WebXR Device API (estándar W3C)", url: "https://www.w3.org/TR/webxr/" }
      ],
      references: ["Revisiones de AR en STEM con mejoras de learning gains."]
    },
    {
      id: "social-ar",
      name: "Social AR (filtros y minijuegos)",
      category: "inmersivo",
      type: "AR participativa en redes",
      audience: "General",
      objective: "Activar participación, UGC y alcance social alrededor de ciencia.",
      definition:
        "Efectos AR en plataforma social para convertir conceptos científicos en experiencias compartibles.",
      technical: [
        "Toolchains de creación de efectos por plataforma.",
        "Necesita pruebas de usabilidad y claridad del reto."
      ],
      production:
        "Equipo mínimo: diseño de efecto + producción 3D ligera + QA.",
      costLabel: "3k-80k EUR",
      timeLabel: "3-12 semanas",
      interactivityLevel: 5,
      scalabilityLevel: 5,
      costIndex: 4,
      timeIndex: 4,
      pros: [
        "Participación alta con baja fricción.",
        "Fácil conversión a dinámicas de reto y comunidad."
      ],
      risks: ["Vida util corta por dinamica de plataforma.", "Dependencia de cambios de politica/API."],
      metrics: ["Activaciones.", "UGC generado.", "Compartidos.", "Tiempo medio de uso."],
      examples: [
        { name: "TikTok Effect House (filtros y efectos AR)", url: "https://effecthouse.tiktok.com/" }
      ],
      references: ["Prácticas de social AR en comunicación y educación digital."]
    },
    {
      id: "ai-avatar",
      name: "IA avatar-presentador",
      category: "ia",
      type: "Video sintético",
      audience: "General e internacional",
      objective: "Escalar versiónado rápido con control editorial.",
      definition:
        "Pieza donde un avatar sintético presenta contenido científico con guion supervisado.",
      technical: [
        "Pipeline de guion -> síntesis -> revisión experta.",
        "Requiere disclosure explícito y trazabilidad."
      ],
      production:
        "Equipo mínimo: editor científico, guionista, operador IA y QA.",
      costLabel: "0.3-10k EUR",
      timeLabel: "Horas a días + QA",
      interactivityLevel: 2,
      scalabilityLevel: 5,
      costIndex: 2,
      timeIndex: 1,
      pros: [
        "Escalabilidad alta para multiversión.",
        "Buena velocidad de actualización."
      ],
      risks: ["Riesgo de pérdida de confianza si hay opacidad.", "Errores factuales si no hay control experto."],
      metrics: [
        "Comprension y confianza percibida.",
        "Detección de errores y tasa de corrección."
      ],
      examples: [
        { name: "Experimentos de avatares IA en comunicación científica", url: "https://jcom.sissa.it/article/pubid/JCOM_2402_2025_A03/" }
      ],
      references: ["Estudios IA vs humano en video docente (aprendizaje equivalente en algunos contextos)."]
    },
    {
      id: "ai-dubbing",
      name: "IA doblaje y traducción",
      category: "ia",
      type: "Localización automatizada",
      audience: "Global",
      objective: "Expandir cobertura idiomatica y accesibilidad con coste marginal bajo.",
      definition:
        "Uso de TTS y traducción IA para publicar variantes de una pieza manteniendo base editorial.",
      technical: [
        "Control de terminología científica.",
        "Revisión de sincronización y calidad de voz.",
        "Versionado por idioma con metadatos claros."
      ],
      production:
        "Equipo mínimo: editor científico + operador de localización + QA lingüístico.",
      costLabel: "0.2-5k EUR",
      timeLabel: "Horas a días",
      interactivityLevel: 1,
      scalabilityLevel: 5,
      costIndex: 1,
      timeIndex: 1,
      pros: [
        "Alta eficiencia para internacionalización.",
        "Mejora accesibilidad del archivo existente."
      ],
      risks: ["Errores semánticos en términos técnicos.", "Percepción de artificialidad de voz."],
      metrics: ["Cobertura por idioma.", "Retención comparada por versión.", "Feedback cualitativo de comprensión."],
      examples: [
        { name: "Meta: traducción y doblaje de Reels con IA", url: "https://www.theverge.com/news/761665/meta-ai-translation-facebook-instagram-reels" }
      ],
      references: ["Prácticas recientes de localización automatizada en plataformas sociales."]
    },
    {
      id: "ott-docuserie",
      name: "OTT científico (docuserie/factual)",
      category: "ott",
      type: "Largo recorrido",
      audience: "General",
      objective: "Profundidad narrativa y archivo evergreen en distribución de calidad.",
      definition:
        "Distribución en plataformas OTT VOD/AVOD/FAST con series documentales y factual de ciencia.",
      technical: [
        "Flujos de entrega broadcast/OTT (HLS, DASH, metadata).",
        "Ventanas, rights y estándares de calidad estrictos."
      ],
      production:
        "Equipo completo de producción audiovisual + desarrollo editorial largo.",
      costLabel: "60k EUR a millones",
      timeLabel: "Meses",
      interactivityLevel: 1,
      scalabilityLevel: 3,
      costIndex: 10,
      timeIndex: 10,
      pros: [
        "Alta legitimidad de marca y profundidad.",
        "Mayor tolerancia a complejidad narrativa."
      ],
      risks: ["Ciclo largo y poca iteración.", "Barreras de adquisición y negociación de ventanas."],
      metrics: [
        "Minutos vistos y completion por episodio.",
        "Retención de serie y binge rate.",
        "Churn/retención según modelo de negocio."
      ],
      examples: [
        { name: "Documentales de ciencia y naturaleza en Netflix", url: "https://www.netflix.com/us-es/browse/genre/2595" }
      ],
      references: ["Medición convergente de audiencias y marcos de evaluación OTT."]
    },
    {
      id: "video-abstract",
      name: "Video-abstract científico",
      category: "hibrido",
      type: "Resumen audiovisual de artículo",
      audience: "Comunidad académica y público interesado",
      objective: "Aumentar descubrimiento, comprensión rápida y difusión de resultados científicos.",
      definition:
        "Pieza breve (habitualmente 1-4 minutos) que resume pregunta, método, hallazgos e implicaciones de un artículo para acompañar su publicación.",
      technical: [
        "Guion muy sintetizado orientado a claridad y transferencia.",
        "Edición ligera con gráficos/tablas clave del paper.",
        "Subtítulos y/o transcripción para accesibilidad y consumo sin audio.",
        "Entrega en formato .mp4 y adaptación para web/redes."
      ],
      production:
        "Equipo mínimo: autor/a o portavoz + apoyo editorial/audiovisual para guion, grabación y edición.",
      costLabel: "0.2-6k EUR por pieza",
      timeLabel: "1-7 días",
      interactivityLevel: 1,
      scalabilityLevel: 4,
      costIndex: 3,
      timeIndex: 3,
      pros: [
        "Mejora la comprensión inicial de trabajos complejos.",
        "Facilita difusión en redes académicas e institucionales.",
        "Funciona como puente entre artículo técnico y audiencia ampliada."
      ],
      risks: [
        "Riesgo de simplificación excesiva de resultados.",
        "Variabilidad de criterios técnicos entre revistas/editoriales."
      ],
      metrics: [
        "Visualizaciones, retención y clics al DOI/artículo completo.",
        "Altmetric Attention Score y menciones sociales.",
        "Descargas o lecturas del artículo tras publicación del video-abstract."
      ],
      examples: [
        { name: "Wiley - Video Abstract Guidelines", url: "https://authors.wiley.com/author-resources/Journal-Authors/Promotion/author-provided-video-abstracts.html" },
        { name: "The Plant Journal - Video Abstracts", url: "https://onlinelibrary.wiley.com/journal/1365313x/tpjvideoabstracts" },
        { name: "PLOS ONE - eficacia de video abstracts", url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0224697" }
      ],
      references: [
        "Video abstracts and plain language summaries are more effective than graphical abstracts and published abstracts (PLOS ONE, 2020).",
        "Video Abstracts in Research (2024, revisión y recomendaciones prácticas).",
        "Guías editoriales de video-abstract en Wiley y Taylor & Francis."
      ]
    }
  ]
};

/* ─────────────────────────────────────────────────────────────────────
   Contenido de la portada de Emeria LAB.
   Para añadir un trabajo, una persona o un servicio basta con añadir un
   objeto al array correspondiente (ver README).
   ───────────────────────────────────────────────────────────────────── */
(function () {
  const data = window.EMERIA_DATA;

  data.brand = {
    name: "Emeria LAB",
    tagline: "Transformamos conocimiento en impacto",
    institution: "Universidad Internacional de La Rioja, UNIR TV"
  };

  /* Formulario de contacto.
     endpoint: URL que acepta un POST con JSON (por ejemplo Formspree).
     email: dirección de respaldo; si no hay endpoint, el formulario abre
     un correo ya redactado dirigido a ella. */
  data.contact = {
    endpoint: "", // TODO: URL del servicio de formularios
    email: ""     // TODO: correo de contacto de Emeria LAB
  };

  /* Las cinco líneas de servicio, en el orden en que se muestran. */
  data.lines = [
    {
      id: "proyectos",
      name: "Comunicación de proyectos de investigación",
      short: "Proyectos de investigación",
      summary: "Planes y paquetes de comunicación para proyectos de investigación, especialmente europeos: contenidos y difusión de resultados.",
      services: ["paquete-proyecto", "programa-continuado", "video-abstract"]
    },
    {
      id: "audiovisual",
      name: "Producción y divulgación audiovisual",
      short: "Producción audiovisual",
      summary: "Documentales, vídeos científicos y culturales, piezas institucionales, podcast y programas audiovisuales.",
      services: ["produccion-documental", "podcast", "eventos", "video-ia"]
    },
    {
      id: "datos",
      name: "Visualización y comunicación de datos",
      short: "Visualización de datos",
      summary: "Visualizaciones, infografías, cómic científico y sketchnotes para explicar datos, proyectos y artículos.",
      services: ["viz-simple", "visualizacion", "viz-demanda", "infografia-animacion", "comic-cientifico", "sketchnotes"]
    },
    {
      id: "estrategia",
      name: "Estrategia y asesoramiento",
      short: "Estrategia y asesoramiento",
      summary: "Diagnóstico de necesidades, auditoría narrativa, análisis de audiencias y planificación audiovisual.",
      services: ["auditoria", "taller", "manual"]
    },
    {
      id: "lab",
      name: "Innovación y experimentación",
      short: "Innovación y experimentación",
      summary: "Prototipos con IA, formatos interactivos, narrativas transmedia y experiencias inmersivas. Se desarrollan bajo demanda, tras validar su viabilidad.",
      services: ["transmedia", "documental", "gamificado", "xr"],
      resource: { label: "Consultar la Biblia de formatos", href: "formatos.html" }
    }
  ];

  /* Servicios que se suman a los doce originales. */
  data.services.push(
    {
      id: "paquete-proyecto",
      name: "Paquete de comunicación de proyecto",
      subtitle: "La comunicación de tu proyecto de investigación, de la propuesta al cierre",
      tags: ["Proyectos europeos", "Plan de comunicación", "Difusión"],
      description: "Asumimos el plan de comunicación y difusión de un proyecto de investigación financiado, con especial atención a las convocatorias europeas, que piden comunicar la acción y sus resultados a públicos diversos. El trabajo rinde más cuando entramos durante la redacción de la propuesta, que es cuando se define el paquete de trabajo de comunicación.",
      includes: [
        "Plan de comunicación y difusión",
        "Contenidos audiovisuales y visuales del proyecto",
        "Difusión de resultados a públicos especializados y generales",
        "Seguimiento y evaluación"
      ],
      priceFrom: "Presupuesto a medida",
      clientPriceDetail: "Se integra en el presupuesto de comunicación del propio proyecto."
    },
    {
      id: "programa-continuado",
      name: "Programa de comunicación continuada",
      subtitle: "Producción recurrente con plan, calendario y evaluación",
      tags: ["Programa anual", "Producción recurrente", "Evaluación"],
      description: "Una relación estable para entidades que comunican investigación de forma constante. Se acuerda un plan, se produce de manera recurrente y se evalúan los resultados para ajustar el ciclo siguiente.",
      includes: [
        "Plan y calendario de producción",
        "Producción audiovisual recurrente",
        "Adaptación de las piezas a cada canal",
        "Informe de evaluación"
      ],
      priceFrom: "Presupuesto a medida",
      clientPriceDetail: ""
    },
    {
      id: "produccion-documental",
      name: "Documental y vídeo científico o cultural",
      subtitle: "Del guion al montaje final, con rigor y oficio",
      tags: ["Documental", "Vídeo institucional", "Patrimonio"],
      description: "Producción completa de documentales, vídeos científicos y culturales y piezas institucionales: conceptualización, guion, entrevistas, grabación, edición y posproducción.",
      includes: [
        "Conceptualización y guion",
        "Entrevistas y grabación",
        "Edición, montaje y posproducción",
        "Subtítulos y versiones para difusión"
      ],
      priceFrom: "Presupuesto a medida",
      clientPriceDetail: ""
    },
    {
      id: "infografia-animacion",
      name: "Infografía y animación explicativa",
      subtitle: "Resultados y procesos complejos, explicados de un vistazo",
      tags: ["Infografía", "Animación", "Resultados"],
      description: "Infografías, animaciones y recursos visuales que explican resultados, métodos o procesos a públicos no especializados.",
      includes: [
        "Síntesis del contenido con el equipo investigador",
        "Diseño de la infografía o guion de la animación",
        "Adaptación a la identidad de la entidad",
        "Versiones para web y redes"
      ],
      priceFrom: "Presupuesto a medida",
      clientPriceDetail: ""
    },
    {
      id: "viz-simple",
      name: "Visualizaciones simples de datos científicos",
      subtitle: "Un gráfico claro para un resultado, un artículo o una memoria",
      tags: ["Datos", "Artículo", "Gráfico"],
      description: "Una visualización estática o sencilla a partir de datos ya preparados: un resultado, una figura de artículo o una memoria. Sirve cuando el mensaje cabe en una pieza y no hace falta una narrativa animada.",
      includes: [
        "Lectura de los datos y del mensaje",
        "Una pieza gráfica lista para publicar",
        "Versión para web o para el artículo",
        "Una ronda de revisión"
      ],
      priceFrom: "Desde 75 €",
      clientPriceDetail: ""
    },
    {
      id: "viz-demanda",
      name: "Visualización a demanda",
      subtitle: "La producimos, o evaluamos qué necesita tu proyecto o tu artículo",
      tags: ["A demanda", "Proyecto", "Artículo"],
      description: "Si el encargo ya está definido, producimos la visualización. Si partes de un proyecto o de un artículo, evaluamos qué conviene visualizar y con qué formato. El steamgraph de un CV académico es un ejemplo: una trayectoria leída en un solo gráfico interactivo. Las anchuras de ese ejemplo son una estimación personal.",
      includes: [
        "Producción de la pieza cuando el encargo ya está definido",
        "Evaluación de qué necesita un proyecto o un artículo",
        "Propuesta de formato y de alcance",
        "El precio de la pieza se cierra según sea simple o avanzada"
      ],
      priceFrom: "Presupuesto a medida",
      clientPriceDetail: "",
      embed: {
        src: "https://javicanton.github.io/steamgraph-cv/?embed=1",
        title: "Steamgraph de un CV académico"
      },
      example: {
        label: "Abrir el steamgraph completo",
        href: "https://javicanton.github.io/steamgraph-cv/"
      }
    },
    {
      id: "comic-cientifico",
      name: "Cómic científico",
      subtitle: "Una investigación o un concepto contados en viñetas",
      tags: ["Cómic", "Divulgación", "Artículo"],
      description: "Guion y dibujo de un cómic breve para explicar una investigación, un concepto o un resultado a quien no va a leer el artículo. El alcance (páginas, color y versión digital) se cierra en la propuesta.",
      includes: [
        "Guion a partir del material científico",
        "Dibujo y rotulación",
        "Revisión con el equipo investigador",
        "Archivos para web y para impresión"
      ],
      priceFrom: "Desde 500 €",
      clientPriceDetail: ""
    },
    {
      id: "sketchnotes",
      name: "Sketchnotes",
      subtitle: "Resúmenes gráficos de una charla, un texto o una idea",
      tags: ["Sketchnote", "Resumen gráfico", "Docencia"],
      description: "Notas visuales hechas a mano que resumen una charla, un texto, un concepto o la estructura de un proyecto. Sirven para una clase, una jornada o para explicar una idea de un vistazo.",
      includes: [
        "Síntesis del contenido",
        "Dibujo del resumen gráfico",
        "Versión digital lista para compartir",
        "Adaptación al uso (clase, jornada o web)"
      ],
      priceFrom: "Presupuesto a medida",
      clientPriceDetail: "",
      gallery: [
        { src: "assets/works/sketchnote-letzebuerg.jpg", alt: "Sketchnote con el mapa cultural de la ciudad de Luxemburgo" },
        { src: "assets/works/sketchnote-soundhive.jpg", alt: "Sketchnote de SoundHive, propuesta de monitorización para verificadores" },
        { src: "assets/works/sketchnote-sociologia.jpg", alt: "Sketchnote con un resumen gráfico de la sociología" }
      ]
    }
  );

  /* Precio público orientativo ("desde") de los doce servicios originales. */
  const priceFrom = {
    "auditoria": "Desde 800 €",
    "manual": "Desde 1.200 €",
    "taller": "Desde 900 € por sesión",
    "video-abstract": "Desde 60 € por pieza",
    "podcast": "Desde 800 € por episodio",
    "video-ia": "Desde 500 € por pieza",
    "visualizacion": "Desde 500 €",
    "transmedia": "Desde 6.000 € por temporada",
    "gamificado": "Desde 8.000 €",
    "documental": "Desde 10.000 €",
    "eventos": "Desde 12.000 €",
    "xr": "Desde 18.000 €"
  };

  data.services.forEach((service) => {
    if (!service.priceFrom) service.priceFrom = priceFrom[service.id] || "Presupuesto a medida";
    const line = data.lines.find((l) => l.services.includes(service.id));
    service.line = line ? line.id : null;
  });

  data.priceNote = "Los precios son orientativos y se ajustan al alcance de cada proyecto.";

  /* Tres formas de contratar. */
  data.modalities = [
    {
      id: "encargo",
      name: "Encargo específico",
      description: "Una pieza o un servicio concreto, con alcance, plazo y precio cerrados desde el principio.",
      example: "Un video-abstract, una infografía, una auditoría."
    },
    {
      id: "paquete",
      name: "Paquete de proyecto",
      description: "La comunicación completa de un proyecto de investigación, del plan a la difusión de resultados.",
      example: "El paquete de comunicación de un proyecto europeo."
    },
    {
      id: "programa",
      name: "Programa continuado",
      description: "Producción audiovisual recurrente con planificación, difusión y evaluación a lo largo del año.",
      example: "El plan anual de divulgación de un centro o un grupo."
    }
  ];

  /* Método de trabajo: seis fases. */
  data.method = [
    { name: "Diagnóstico y definición", description: "Concretamos objetivos, públicos, mensajes, alcance y canales.", result: "Documento de definición y calendario preliminar" },
    { name: "Conceptualización y diseño creativo", description: "Investigación documental, elección del formato, tratamiento narrativo y guion.", result: "Propuesta y guion validados" },
    { name: "Preproducción y planificación", description: "Plan de grabaciones, localizaciones, permisos, equipo y contingencias.", result: "Plan de producción" },
    { name: "Producción audiovisual", description: "Realización, entrevistas, captación de imagen y sonido y control técnico.", result: "Materiales organizados" },
    { name: "Posproducción, revisión y validación", description: "Montaje, color, audio, grafismos, subtítulos y rondas de revisión pactadas.", result: "Versión validada" },
    { name: "Entrega, evaluación y cierre", description: "Comprobación técnica y de derechos, entrega en los formatos acordados y evaluación.", result: "Materiales definitivos" }
  ];

  /* Trabajos. Campos: id, title, year, type, line (id de data.lines),
     duration, summary, url (opcional), thumb (opcional), credits (opcional).
     Sin thumb se pinta una carátula con los colores de marca. */
  data.works = [
    {
      id: "san-millan",
      title: "Cómo encontrar un tesoro. Patrimonio de San Millán de la Cogolla",
      year: 2025,
      type: "Documental",
      line: "audiovisual",
      duration: "22 min",
      summary: "La recuperación y conservación del patrimonio bibliográfico y artístico de los monasterios de San Millán de la Cogolla, Patrimonio Mundial de la UNESCO y cuna del español escrito.",
      url: "https://www.unir.tv/content/patrimonio-y-cultura/como-encontrar-un-tesoro-patrimonio-de-san-millan-de-la-cogolla",
      thumb: ""
    },
    {
      id: "negocio-del-odio",
      title: "El negocio del odio. ¿Quién está detrás?",
      year: 2026,
      type: "Conversatorio",
      line: "audiovisual",
      duration: "59 min",
      summary: "Especialistas de universidades españolas y europeas explican las dinámicas técnicas y económicas de la desinformación y los discursos de odio, a partir de la jornada «El negocio del odio: descubre Hatemedia».",
      url: "https://www.youtube.com/watch?v=9yf0HjqN_Xo",
      thumb: "https://i.ytimg.com/vi/9yf0HjqN_Xo/hqdefault.jpg"
    },
    {
      id: "comics-digitales",
      title: "Cómics digitales revolucionan idiomas",
      year: 2026,
      type: "Video-abstract",
      line: "proyectos",
      duration: "52 s",
      summary: "Una investigación sobre el uso de cómics digitales en el aprendizaje de idiomas, sintetizada en menos de un minuto para públicos no especializados.",
      url: "", // TODO: enlace público estable
      thumb: ""
    },
    {
      id: "steamgraph-cv",
      title: "Steamgraph de un CV académico",
      year: 2026,
      type: "Visualización",
      line: "datos",
      summary: "Ejemplo de visualización a demanda. La trayectoria de Javi Cantón-Correa desde 2005 (investigación, docencia, práctica y formación) en un gráfico interactivo. Las anchuras son una estimación personal.",
      url: "https://javicanton.github.io/steamgraph-cv/",
      thumb: ""
    },
    {
      id: "sketchnote-letzebuerg",
      title: "A cultural map of the Stad Lëtzebuerg",
      year: 2022,
      type: "Sketchnote",
      line: "datos",
      summary: "Resumen gráfico de la ciudad de Luxemburgo, hecho en el Culture & Computation Lab de la Universidad de Luxemburgo: medios, comportamientos, lugares y organizaciones.",
      thumb: "assets/works/sketchnote-letzebuerg.jpg",
      fit: "contain"
    },
    {
      id: "sketchnote-soundhive",
      title: "SoundHive",
      year: 2023,
      type: "Sketchnote",
      line: "datos",
      summary: "Propuesta de herramienta de monitorización para verificadores de información. Resumen gráfico del TFM del Máster en Inteligencia Artificial de UNIR (2022-23).",
      thumb: "assets/works/sketchnote-soundhive.jpg",
      fit: "contain"
    },
    {
      id: "sketchnote-sociologia",
      title: "Sociología",
      year: 2024,
      type: "Sketchnote",
      line: "datos",
      summary: "Resumen gráfico de la sociología: autores, ámbitos y el paso de comprender la sociedad a transformarla.",
      thumb: "assets/works/sketchnote-sociologia.jpg",
      fit: "contain"
    }
  ];

  /* Equipo. Campos: name, role, area (id de data.areas), photo (opcional). */
  data.team = [
    { name: "Dra. Inmaculada Berlanga", role: "Dirección", area: "brain", photo: "" },
    { name: "Dr. Javier Cantón-Correa", role: "Dirección", area: "engine", photo: "" },
    { name: "Dra. Isabel de Azcárraga", role: "Dirección", area: "core", photo: "" }
  ];

  data.areas = [
    { id: "ceb", name: "Dirección y coordinación", description: "Define la estrategia, cuida la relación con cada entidad y supervisa recursos y plazos." },
    { id: "core", name: "Contenido, producción e innovación audiovisual", description: "Ideación, guion, grabación, montaje, posproducción y experimentación con herramientas digitales e IA." },
    { id: "engine", name: "Estrategia de comunicación y audiencias", description: "Identifica públicos y canales, adapta formatos y analiza alcance e interacción." },
    { id: "brain", name: "Investigación, rigor científico y transferencia", description: "Documentación, contraste de fuentes, asesoramiento científico y atención a ética y derechos." }
  ];
})();
