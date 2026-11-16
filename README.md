# React homework template

A minimal template for React homework: [Vite](https://vite.dev/), React 19, TypeScript, CSS Modules,
[modern-normalize](https://github.com/sindresorhus/modern-normalize), ESLint and Prettier. Deployed
to [Vercel](https://vercel.com/).

## Creating a repository by template

Click **Use this template** → **Create a new repository**, enter the repository name required by the
assignment (for example `02-react-cafe`), make sure the repository is public, and click **Create
repository**. Then clone it and work with it as with any other repository.

## Preparing for coding

1. Install Node.js **22.12 or newer** (LTS). [Download](https://nodejs.org/en/) if needed.
2. Install dependencies: `npm install`.
3. Start the dev server: `npm run dev`.
4. Open [http://localhost:5173](http://localhost:5173). The page reloads automatically after you
   save changes.

## Scripts

| Command                | What it does                                 |
| ---------------------- | -------------------------------------------- |
| `npm run dev`          | Start the dev server with hot reload         |
| `npm run build`        | Check types and build the production version |
| `npm run preview`      | Serve the built `dist/` locally to check it  |
| `npm run typecheck`    | Check TypeScript types only                  |
| `npm run lint`         | Check code with ESLint                       |
| `npm run format`       | Format all files with Prettier               |
| `npm run format:check` | Check formatting without changing files      |

Before submitting, run `npm run format`, `npm run lint` and `npm run build` — all three must pass
without errors, and the browser console must have no errors or warnings.

## Project structure

```
public/                       static files copied to dist/ as is (favicon, manifest)
src/
    main.tsx                  entry point: global styles and <App />
    index.css                 global styles
    components/
        App/
            App.tsx           root component
            App.module.css
        Hero/
            Hero.tsx          sample component
            Hero.module.css
    types/                    types shared by several components (e.g. votes.ts)
index.html                    HTML page, Vite injects the app here
vite.config.ts                Vite config: React plugin, `@` alias for src
tsconfig.json                 TypeScript config (tsconfig.app.json for src, tsconfig.node.json for vite.config.ts)
eslint.config.js              ESLint rules
.prettierrc.json              Prettier rules (4-space indent)
```

## Component rules

`src/components/Hero` is a sample to copy:

- every component has its own folder in `src/components`; the folder, the component file (`.tsx`)
  and the styles file (`.module.css`) have the same name: `Hero/Hero.tsx`, `Hero/Hero.module.css`;
- components are exported with `export default`;
- props are typed with an `interface` declared in the component file (`HeroProps`);
- types used by several components go to `src/types/`, e.g. `src/types/votes.ts`;
- styles are imported as a module and applied by class name:

```tsx
import css from './Hero.module.css';

<h1 className={accent ? `${css.title} ${css.accent}` : css.title}>{title}</h1>;
```

- no inline `style={{…}}` in components.

Imports from `src` can use the `@` alias, e.g. `import type { Votes } from '@/types/votes';`.

## Deploy to Vercel

1. Sign in to [vercel.com](https://vercel.com/) with GitHub.
2. Click **Add New…** → **Project** and import your repository.
3. Vercel detects Vite automatically (build command `npm run build`, output `dist`) — click
   **Deploy**.

After that, every push to `main` is deployed automatically, and the live link is shown in the
project dashboard. If the build fails, open the deployment and check its **Build Logs**.

### Routing

If you later use `react-router`, add a `vercel.json` to the project root so direct links to nested
routes open the app instead of a 404:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
```
