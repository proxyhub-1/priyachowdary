# Priya Jonnalagadda — Portfolio

A static-exported Next.js portfolio, published with GitHub Pages at
`https://proxyhub-1.github.io/priyachowdary/`. Profile copy, skills, professional
experience, selected projects, and certifications are centralized in `data/profile.ts`.

## Run locally

```sh
npm install
npm run dev
```

The development server listens on `0.0.0.0:3000`. Contact is available through direct
email, phone, and LinkedIn links.

## Production

GitHub Actions builds and publishes the static site to GitHub Pages when changes are
pushed to `main`. For a local production build, run:

```sh
NEXT_PUBLIC_BASE_PATH=/priyachowdary \
NEXT_PUBLIC_SITE_URL=https://proxyhub-1.github.io/priyachowdary/ \
npm run build
```

The static output is written to `out/`.
