# Deployering til Vercel

Denne guiden forklarer hvordan du kan deployere både frontend (web/) og API (api/) til Vercel.

## Forutsetninger
- Du har en Vercel-konto (https://vercel.com)
- Du har tilgang til GitHub-repoet

---

## 1. Deployere frontend (web/)

1. Push koden til GitHub om du ikke allerede har gjort det.
2. Gå til https://vercel.com/new og velg "Import Project".
3. Velg repoet ditt.
4. Sett opp:
   - **Framework Preset:** Vite
   - **Root Directory:** `web`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Klikk "Deploy".

Frontend vil nå bygges og deployeres automatisk på hver push til main/master.

---

## 2. Deployere API (api/)

Vercel støtter serverless Node.js, men Hono/Prisma/SQLite kan kreve tilpasning:

- **Serverless:** Hono kan kjøres som en Vercel serverless function, men du må kanskje flytte entrypoint til `api/index.ts` og bruke Vercel sin API-rute-konvensjon (`api/*.ts`).
- **Database:** SQLite fungerer dårlig i serverless-miljø. Bruk heller en ekstern database (f.eks. PlanetScale, Supabase, Neon).
- **Prisma:** Sett opp Prisma til å bruke ekstern database og bygg for serverless.

### Eksempel på enkel Vercel API route

Legg en fil i `api/api/hello.ts`:
```ts
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Vercel!' });
}
```

Se Vercel docs for mer info: https://vercel.com/docs

---

## 3. Miljøvariabler

Sett nødvendige secrets/variabler i Vercel dashboardet under "Project Settings > Environment Variables".

---

## 4. Tips
- Test alltid lokalt før du deployer.
- Les Vercel-logger ved feil.
- For avansert backend, vurder dedikert host (Railway, Fly.io, etc).

---

## Referanser
- https://vercel.com/docs
- https://vercel.com/guides/deploying-vite-with-vercel
- https://vercel.com/guides/nodejs-serverless-functions
