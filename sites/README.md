# Sites

One folder per restaurant mockup. Each folder is a complete, independent Astro project
(its own `package.json`, `node_modules` and port), so sites never share code or break each other.

The repository root is still the first project, **La Stella d'Oro** (port 4321). It is left as is.

| Folder | Restaurant | Port |
|---|---|---|
| `bodeguita-cubana/` | La Bodeguita Cubana, Lyon 4e (cubain) | 4322 |

## Run one site

```sh
cd sites/bodeguita-cubana
npm install      # first time only
npm run dev      # http://localhost:4322
```

`npm run build` writes a static version to that folder's `dist/`, ready to upload anywhere.

## Add a new site

1. Copy the setup files of an existing site (`package.json`, `astro.config.mjs`, `tsconfig.json`) into `sites/<new-name>/`.
2. Change `name` in `package.json` and pick the next free port in `astro.config.mjs` (4323, 4324…).
3. Add a `BRIEF.md` with the restaurant's facts, sources and open questions, then build in `src/`.
4. Add a line to the table above.
