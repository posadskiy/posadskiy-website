## Principal Java Developer · Portfolio 2025

Modernized personal site for Dimitri Posadskiy. Built with Next.js 15 App Router, dark-first design language, Contentlayer-driven content, and accessibility/performance guard rails.

### Features

- Next.js 15 App Router with React Server Components + selective client islands
- Tailwind-powered design system (dark default, trendy lilac/neo-mint accents)
- Contentlayer + MDX for projects, experience, and services data
- Contact form with Resend-backed API route + social link fallbacks
- Plausible analytics hook, structured data, OG metadata, and custom JSON-LD
- Framer Motion micro-interactions, AI prompt helper, WCAG 2.2 checked colors
- Jest + Testing Library unit tests, Playwright e2e scaffold

### Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

### Scripts

- `npm run dev` – local development with Contentlayer watch mode
- `npm run build` – production build
- `npm start` – run the compiled app
- `npm run lint` – Next.js + ESLint checks
- `npm test` – Jest unit tests
- `npm run test:e2e` – Playwright tests (requires build/dev server)

### Environment Variables

Create `.env.local` with:

```
RESEND_API_KEY=xxxxxxxx
CONTACT_FORWARD_EMAIL=principal@dimitri.dev
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=dimitri.dev
```

Without `RESEND_API_KEY`, messages are logged server-side for debugging.

### Content

- Add/edit projects under `content/projects/*.mdx`
- Update experience timeline via `content/experience/*.mdx`
- Services live in `content/services/*.mdx`

After changing content, re-run `npm run dev` or `npx contentlayer build`.

### Testing & CI

- Unit tests cover hero + project rendering (`npm test`)
- Playwright smoke test ensures routing + hero load (`npm run test:e2e`)
- Recommended CI steps: `npm run lint`, `npm test`, `npm run test:e2e`

### Deployment

Deploy on Vercel or any Node 18+ host:

```bash
npm run build
npm start
```

Ensure `RESEND_API_KEY` and analytics env vars are configured in the hosting platform.
