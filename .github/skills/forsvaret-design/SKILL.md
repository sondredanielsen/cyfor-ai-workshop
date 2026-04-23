---
name: forsvaret-design
description: "Anvend Forsvarets visuelle profil på webapplikasjoner. Bruk for: militærgrønt tema, Forsvaret-farger, Forsvaret-typografi, Forsvarets designprofil, FDS-styling, norsk forsvar design."
---

# Forsvarets Visuelle Profil

Denne skillen transformerer en webapplikasjon til å bruke Forsvarets visuelle profil med militærgrønt tema, riktig typografi og komponent-styling.

## Når skal denne brukes

- Brukeren ber om å anvende Forsvarets design, tema eller visuell profil
- Brukeren vil ha militærgrønt tema inspirert av Forsvaret
- Brukeren nevner FDS, Forsvarets designsystem, eller Forsvarets farger

## Forutsetninger

- Prosjektet bruker React med Tailwind CSS
- Tailwind v4 med `@theme`-direktiv (sjekk `index.css` eller `globals.css`)
- Hvis Tailwind v3: bruk `tailwind.config` `extend.colors` i stedet

## Prosedyre

### Steg 1: Legg inn design-tokens

Les [design-tokens](./references/design-tokens.md) for fullstendig oversikt over farger, typografi og komponent-mønstre.

Legg til Forsvarets farge- og font-tokens i prosjektets hoved-CSS-fil (vanligvis `index.css` eller `globals.css`):

```css
@theme {
  --color-forsvaret-green: #2D4A27;
  --color-forsvaret-green-light: #3D6535;
  --color-forsvaret-green-dark: #1E3319;
  --color-forsvaret-black: #191B21;
  --color-forsvaret-gray-dark: #3A3D44;
  --color-forsvaret-gray: #6B6F76;
  --color-forsvaret-gray-light: #E8E4E3;
  --color-forsvaret-warm-white: #F3F0F0;
  --color-forsvaret-teal: #89BCBC;
  --color-forsvaret-error: #B91C1C;
  --color-forsvaret-warning: #92400E;
  --color-forsvaret-success: #166534;
  --font-sans: "Cera Pro", ui-sans-serif, system-ui, -apple-system, sans-serif;
}
```

Oppdater `:root`-blokken:

```css
:root {
  color: #191B21;
  background-color: #F3F0F0;
}
```

### Steg 2: Oppdater komponent-styling

Erstatt eksisterende fargehenvisninger i komponentene med Forsvarets design-tokens. Følg disse reglene:

**Bakgrunner:**
- Sidebakgrunn: `bg-forsvaret-warm-white`
- Kort og skjemaer: `bg-white`
- Header: `bg-forsvaret-green`

**Tekst:**
- Primærtekst: `text-forsvaret-black`
- Sekundærtekst: `text-forsvaret-gray-dark`
- Hjelpetekst: `text-forsvaret-gray`
- Tekst på grønn bakgrunn: `text-white`

**Knapper:**
- Primærknapp: `bg-forsvaret-green text-white hover:bg-forsvaret-green-light`
- Sekundærknapp: `border-forsvaret-green text-forsvaret-green hover:bg-forsvaret-green hover:text-white`
- Disabled: `bg-forsvaret-gray-light text-forsvaret-gray cursor-not-allowed`

**Skjema-elementer:**
- Border: `border-forsvaret-gray-light`
- Fokus: `focus:border-forsvaret-green focus:ring-2 focus:ring-forsvaret-green/30`

**Skillelinjer:**
- `divide-forsvaret-gray-light` eller `border-forsvaret-gray-light`

**Feilmeldinger:**
- `text-forsvaret-error`

### Steg 3: Verifiser

1. Kjør `npm run dev` (eller prosjektets dev-kommando) for å se endringene
2. Kontroller at alle UI-elementer har riktig kontrast
3. Sjekk at hover- og fokus-stater fungerer

## Kartlegging: vanlige Tailwind-farger → Forsvarets farger

| Original Tailwind   | Forsvarets ekvivalent         |
| ------------------- | ----------------------------- |
| `slate-900`         | `forsvaret-black`             |
| `slate-700`         | `forsvaret-gray-dark`         |
| `slate-600`         | `forsvaret-gray`              |
| `slate-500`         | `forsvaret-gray`              |
| `slate-300`         | `forsvaret-gray-light`        |
| `slate-200`         | `forsvaret-gray-light`        |
| `slate-50`          | `forsvaret-warm-white`        |
| `bg-slate-900`(btn) | `bg-forsvaret-green`          |
| `rose-600`          | `forsvaret-error`             |

## Viktige prinsipper

- **Renhet**: Militær presisjon — rent, strukturert, minimalistisk
- **Hierarki**: Tydelig visuelt hierarki med størrelse, vekt og farge
- **Grønt som aksent**: Bruk militærgrønn som den dominerende aksentfargen, ikke overbruk
- **Luft**: Generøs spacing, la innholdet puste
- **Kontrast**: Sikre god lesbarhet, spesielt hvit tekst på grønn bakgrunn
