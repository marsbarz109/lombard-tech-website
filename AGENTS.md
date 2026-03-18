# AGENTS.md

## Cursor Cloud specific instructions

This is a single Next.js 14 (App Router) marketing/recruitment website for Lombard Tech. No monorepo, no Docker, no database.

### Services

| Service | Command | Port |
|---------|---------|------|
| Next.js dev server | `npm run dev` | 3000 |

### Available scripts

See `package.json` for the full list. Key commands:

- `npm run dev` — start development server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run type-check` — TypeScript type checking (`tsc --noEmit`)

### Non-obvious caveats

- **Missing ESLint config**: The repo did not ship with `.eslintrc.json`. One was added in the setup PR (`"extends": "next"` with pre-existing lint issues downgraded to warnings). Without it, `npm run lint` and `next build` prompt interactively.
- **Resend API key required at build time**: The `/api/contact` route instantiates the Resend client at module scope (`new Resend(process.env.RESEND_API_KEY)`). A `.env.local` with a placeholder `RESEND_API_KEY` is needed for `npm run build` to succeed; it is gitignored. Create one with `RESEND_API_KEY=re_placeholder_for_development`, `FROM_EMAIL=dev@localhost`, `COMPANY_EMAIL=dev@localhost`.
- **Pre-existing lint issues**: The codebase has many `react/no-unescaped-entities` warnings and a `react-hooks/rules-of-hooks` issue in `components/ui/input.tsx` (conditional hook call). These are pre-existing and downgraded to warnings in `.eslintrc.json`.
- **No automated test suite**: There are no test files or test framework configured. Validation relies on `npm run lint`, `npm run type-check`, and manual testing.
