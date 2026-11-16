# Emeria LAB

Web de **Emeria LAB**, laboratorio de innovación audiovisual (Universidad Internacional de La Rioja, UNIR TV). *Transformamos conocimiento en impacto.*

[Ver sitio en vivo](https://javicanton.github.io/emerialab/)

## Qué contiene

| Página | Contenido |
|---|---|
| `index.html` | Portada de una sola página: servicios por líneas, formas de contratar, método, trabajos, equipo y contacto |
| `servicios.html` | Catálogo completo por líneas y diagnóstico de siete preguntas |
| `formatos.html`, `format.html` | Biblia de formatos audiovisuales (recurso de consulta, enlazado desde el pie) |

Es un sitio estático, sin dependencias ni paso de compilación. Para verlo en local:

```bash
python3 -m http.server 8000
```

## Dónde se edita el contenido

Todo el contenido vive en `data.js`. El bloque final del fichero alimenta la portada.

### Añadir un trabajo

Añade un objeto al array `data.works`. Aparece en la galería sin tocar nada más.

```js
{
  id: "identificador-unico",
  title: "Título del trabajo",
  year: 2026,
  type: "Documental",        // se muestra como etiqueta y en la carátula
  line: "audiovisual",       // id de una línea: proyectos, audiovisual, datos, estrategia, lab
  duration: "12 min",        // opcional
  summary: "Una o dos frases.",
  url: "https://...",        // opcional; sin enlace no se muestra botón
  thumb: "assets/works/mi-imagen.jpg" // opcional; sin imagen se pinta una carátula de marca
}
```

Las imágenes van en `assets/works/`, en proporción 16:9. La galería muestra seis trabajos y añade un botón para ver más; el filtro por línea aparece solo.

### Añadir una persona al equipo

Añade un objeto a `data.team`:

```js
{ name: "Nombre Apellido", role: "Realización", area: "core", photo: "assets/team/nombre.jpg" }
```

`area` es el id de un área de `data.areas` (`ceb`, `core`, `engine`, `brain`). Sin `photo` se muestran las iniciales.

### Añadir o mover un servicio

1. Añade el servicio a `data.services` (o al bloque `data.services.push(...)`), con `id`, `name`, `subtitle`, `tags`, `description`, `includes` y `priceFrom`. Opcionales: `example` (`{ label, href }`), `embed` (`{ src, title }`) y `gallery` (lista de `{ src, alt }`).
2. Incluye su `id` en el array `services` de la línea que corresponda dentro de `data.lines`. El orden de ese array es el orden en pantalla.

### Configurar el formulario de contacto

GitHub Pages no tiene servidor, así que el formulario necesita un destino. En `data.contact`:

- `endpoint`: URL de un servicio de formularios que acepte un POST con JSON (por ejemplo Formspree).
- `email`: dirección de respaldo. Si no hay `endpoint`, el formulario abre un correo ya redactado dirigido a ella.

## Marca

- Logos oficiales en `assets/brand/` (manual de identidad corporativa). No se redibujan ni se colocan sobre fondos que no sean negro, blanco, lima o magenta.
- Colores: negro `#000000`, lima `#defa16`, magenta `#f50152`.
- Tipografía: Barlow (SIL Open Font License), servida desde `assets/fonts/`.
- `emeria.css` es la hoja de la portada; `styles.css`, la de las páginas secundarias.

## Despliegue

Cada cambio en `main` se publica en GitHub Pages mediante `.github/workflows/pages.yml`.
