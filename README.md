# Portfolio personal

Este repositorio contiene el código fuente de mi portfolio personal, desarrollado utilizando las siguientes tecnologías:

- **Next.js**: Un framework para aplicaciones web basadas en React, proporcionando funcionalidades avanzadas y optimización.
- **Tailwind CSS**: Un framework de CSS que facilita la implementación de diseños responsive y personalizados..

## Iniciar el Proyecto

Para iniciar el servidor de desarrollo, ejecuta uno de los siguientes comandos:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## URL pública y previews al compartir

La metadata de Open Graph, Twitter, el canonical, el sitemap y `robots.txt` usan `https://joboufra.es` como URL base por defecto. Para desplegar el portfolio en otro dominio, define `NEXT_PUBLIC_SITE_URL` antes de ejecutar el build:

```bash
NEXT_PUBLIC_SITE_URL=https://tu-dominio.example npm run build
```

La preview social se genera en `src/app/opengraph-image.js` como PNG de 1200 × 630; no utiliza el favicon ni una imagen de la web visible. La URL pública debe ser accesible sin autenticación para que WhatsApp, buscadores y otros crawlers puedan descargarla.


## Optimización de Fuentes

Este proyecto utiliza `next/font` para optimizar y cargar automáticamente Inter, una fuente personalizada de Google Font.
