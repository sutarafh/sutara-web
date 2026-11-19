# Sutara Founder House · web

Landing de [Sutara](https://sutara.house), la founder house de Bilbao. Una sola página con anclas, en castellano (`/es/`) e inglés (`/en/`).

## Stack

- [Astro 5](https://astro.build) con salida estática e i18n nativo (`/es/` por defecto, `/en/`).
- [Tailwind CSS 4](https://tailwindcss.com) con los tokens de marca definidos en `src/styles/global.css` (`@theme`).
- Tipografías autohospedadas: Manrope (títulos) y Space Mono (cuerpo), vía Fontsource.
- Imágenes optimizadas en build con `astro:assets` (sharp).
- Sin backend: el acceso se pide en Luma y el contacto es por correo.

Requiere Node 22 (hay un `.node-version` para `fnm`/`nvm`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/
npm run check    # tipos y diagnósticos de Astro
npm run format   # prettier
```

## Dónde se cambia cada cosa

| Quiero cambiar… | Fichero |
| --- | --- |
| La próxima sesión (fecha, hora, plazas, programa, enlace de Luma) | `src/data/sessions.json` |
| Partners con logo | `src/data/partners.json` + logo en `src/assets/partners/` |
| Enlace de Luma, correo, redes, dominio | `src/data/site.ts` y `astro.config.mjs` (`site`) |
| Textos en castellano / inglés | `src/i18n/es.ts` / `src/i18n/en.ts` (misma estructura, tipada en `types.ts`) |
| Colores, tipografías, botones, esquinas, textura de pizarra | `src/styles/global.css` |
| Orden de las secciones | `src/components/Landing.astro` |
| Logos, isotipo, fotos e ilustraciones | `src/assets/brand/` (favicon y OG en `public/`) |

### Sesiones

La primera sesión con `"status": "upcoming"` (ordenada por fecha) es la que aparece en la tarjeta del hero y en la sección *Próxima sesión*. Cuando pase, cámbiala a `"past"` y añade la siguiente. Los ponentes se escriben en `program[].speaker`; si es `null` se muestra «por anunciar».

### Partners

```json
{ "name": "Empresa", "url": "https://empresa.com", "tier": "principal", "logo": "empresa.svg" }
```

El logo debe estar en hueso o monocromo (se muestra sobre grafito). Si `partners` está vacío se muestra el texto de «estamos cerrando los primeros partners».

## Identidad visual (resumen del manual de marca)

- Grafito `#151515` y hueso `#EEE8DA` para fondos y texto. Brasa `#FF4D00` como highlight principal; acero `#4995DA` secundario; temple `#0A1728`.
- Los highlights solo van sobre grafito, nunca sobre hueso, y ocupan como mucho un 10 % de la superficie.
- El fondo grafito lleva siempre la textura de pizarra (`.bg-pizarra`).
- Manrope 600 con tracking negativo para títulos; Space Mono para todo lo demás. No intercambiar.
- Flecha `→` para listas, asterisco `*` como separador, botones con borde fino y esquinas marcadas (`.btn`, `.ticks`).

## Despliegue

`.github/workflows/deploy.yml` construye y publica en **GitHub Pages** en cada push a `main`.

1. En el repo: *Settings → Pages → Source: GitHub Actions*.
2. Sin dominio propio la web se sirve en `https://<cuenta>.github.io/<repo>/` (el workflow pasa `BASE_PATH` automáticamente).
3. Con dominio propio: añade la variable de repositorio `SITE_URL` (p. ej. `https://sutara.house`), crea `public/CNAME` con el dominio y configura el DNS según GitHub. Actualiza también `robots.txt`.

Alternativa sin workflow: conectar el repo a Vercel o Netlify (framework Astro, comando `npm run build`, salida `dist`).

## Pendiente de confirmar

Busca `TODO` en el código. En concreto: enlace real de Luma, correo definitivo, redes, dominio y fecha/aforo de la sesión cero.
