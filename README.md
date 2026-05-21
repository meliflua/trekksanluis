# Trekking Fuera de Sendero — Canal 13 San Luis

Landing web para el programa oficial de expediciones de trekking off-trail en las Sierras de San Luis.

## 🏔️ Descripción

Sitio web moderno y responsivo que presenta las expediciones de montaña sin senderos de Canal 13 San Luis. Incluye información técnica, rutas disponibles y formulario de reserva.

## 📋 Características

- ✨ Diseño premium dark mode
- 📱 Completamente responsivo (mobile-first)
- ♿ Accesibilidad WCAG 2.1
- 🔍 SEO optimizado
- 🎬 Sección YouTube integrada
- 📝 Formulario de reserva (Formspree)
- 🎨 Animaciones suaves y transiciones
- ⚡ Lighthouse optimizado

## 🚀 Estructura de archivos

```
trekksanluis/
├── index.html              # HTML principal
├── css/
│   └── styles.css         # Estilos globales
├── js/
│   └── main.js            # JavaScript (scroll, parallax, form)
├── assets/
│   └── placeholder-video.svg
├── .gitignore
└── README.md
```

## 🔧 Configuración

### Formulario (Formspree)

1. Crear cuenta en [formspree.io](https://formspree.io)
2. Reemplazar `YOUR-FORM-ID` en `index.html` línea ~500:
   ```html
   <form method="POST" action="https://formspree.io/f/YOUR-FORM-ID">
   ```

### Dominio personalizado

Reemplazar `https://tu-dominio.com` en:
- Meta tags (Open Graph, canonical)
- Schema.org JSON-LD

## 📦 Deploy

### GitHub Pages

1. Ir a Settings → Pages
2. Seleccionar rama `main` o `feature/setup-web-publicable`
3. El sitio estará disponible en `https://username.github.io/trekksanluis`

### Hosting alternativo

- Vercel
- Netlify
- Cloudflare Pages
- Cualquier hosting estático

## 🎨 Personalización

### Colores

Modificar en `css/styles.css` (`:root`):

```css
--naranja: #e05c1a;        /* Color primario */
--negro: #0a0a0a;          /* Fondo */
--blanco: #f5f3ef;         /* Texto */
```

### Tipografía

- Display: Bebas Neue
- Body: Inter

Cambiables en `css/styles.css`

## 📊 Rendimiento

- Lighthouse: ~95+ (desktop)
- Core Web Vitals: Optimizado
- Tamaño total: ~50KB (sin assets)

## 🔒 Seguridad

- ✅ HTTPS recomendado
- ✅ CSP headers configurables
- ✅ No hay dependencias externas peligrosas

## 📄 Licencia

Copyright © 2026 Canal 13 San Luis
