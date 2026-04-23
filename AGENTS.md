# AGENTS.md

This repository is a workshop monorepo for a booking and resource management system.

## Repo layout

- `api/`: Hono API, Prisma schema, SQLite database, and OpenAPI export
- `web/`: React + Vite frontend that uses the generated API client
- `slides/`: workshop presentation assets
- `workshop-tasks/`: task definitions that drive the workshop work

## Working rules

- Use the existing npm scripts instead of introducing new tooling.
- Keep changes small, local, and consistent with the current code style.
- Prefer editing source files over generated output.
- If you change the API contract, Prisma schema, or OpenAPI surface, run `npm run generate`.
- After API changes, verify the frontend client still matches `api/openapi.json`.
- When touching both apps, use the root scripts; when staying in one app, use that workspace's scripts.

## Common commands

- `npm install`
- `npm run dev`
- `npm run dev:api`
- `npm run dev:web`
- `npm run generate`
- `npm run typecheck`
- `npm run build`

## Project notes

- The API starts on port `3000` by default and recreates the SQLite schema on startup.
- The frontend expects the API locally and uses Orval-generated hooks from `web/src/api/generated/`.
- Reset local workshop state by deleting `api/data/workshop.db` and starting the API again.