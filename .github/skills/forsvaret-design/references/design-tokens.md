# Forsvarets design-tokens

Denne filen inneholder farger, typografi og spacing basert på Forsvarets visuelle profil.

## Farger

### Primærfarger

| Navn               | Hex       | Bruk                                     |
| ------------------ | --------- | ---------------------------------------- |
| Militærgrønn       | `#2D4A27` | Primærfarge, header, knapper, ikoner     |
| Militærgrønn lys   | `#3D6535` | Hover-state, sekundære elementer         |
| Militærgrønn mørk  | `#1E3319` | Aktiv-state, mørke seksjoner             |

### Nøytrale farger

| Navn           | Hex       | Bruk                                   |
| -------------- | --------- | -------------------------------------- |
| Svart          | `#191B21` | Primærtekst, overskrifter              |
| Koksgrå        | `#3A3D44` | Sekundærtekst                          |
| Mellomgrå      | `#6B6F76` | Hjelpetekst, inaktive elementer        |
| Lysgrå         | `#E8E4E3` | Skillelinjer, subtile bakgrunner       |
| Varmhvit       | `#F3F0F0` | Seksjonsbakgrunner                     |
| Hvit           | `#FFFFFF` | Kort- og skjema-bakgrunn               |

### Aksentfarger

| Navn           | Hex       | Bruk                                   |
| -------------- | --------- | -------------------------------------- |
| Teal           | `#89BCBC` | Badges, statusindikator, lenker        |
| Feil/rød       | `#B91C1C` | Feilmeldinger, destruktive handlinger  |
| Advarsel/gul   | `#92400E` | Advarsler                              |
| Suksess/grønn  | `#166534` | Bekreftelser                           |

### Tailwind v4 – CSS-tema

```css
@theme {
  /* Primærfarger */
  --color-forsvaret-green: #2D4A27;
  --color-forsvaret-green-light: #3D6535;
  --color-forsvaret-green-dark: #1E3319;

  /* Nøytrale */
  --color-forsvaret-black: #191B21;
  --color-forsvaret-gray-dark: #3A3D44;
  --color-forsvaret-gray: #6B6F76;
  --color-forsvaret-gray-light: #E8E4E3;
  --color-forsvaret-warm-white: #F3F0F0;

  /* Aksent */
  --color-forsvaret-teal: #89BCBC;
  --color-forsvaret-error: #B91C1C;
  --color-forsvaret-warning: #92400E;
  --color-forsvaret-success: #166534;

  /* Font */
  --font-sans: "Cera Pro", ui-sans-serif, system-ui, -apple-system, sans-serif;
}
```

## Typografi

Forsvarets nettside bruker fonten **Cera Pro** (kommersiell font av TypeMates). Siden fonten er lisensiert, bruker vi system sans-serif som fallback.

| Element      | Størrelse          | Vekt | Linjehøyde |
| ------------ | ------------------ | ---- | ---------- |
| H1           | 2.5rem (40px)      | 500  | 1.2        |
| H2           | 2rem (32px)        | 500  | 1.2        |
| H3           | 1.75rem (28px)     | 500  | 1.2        |
| H4           | 1.5rem (24px)      | 500  | 1.2        |
| Brødtekst    | 1rem (16px)        | 400  | 1.5        |
| Liten tekst  | 0.875rem (14px)    | 400  | 1.5        |
| Knappetekst  | 0.875rem (14px)    | 500  | 1          |

## Komponent-mønstre

### Knapper

- **Primær**: Bakgrunn `forsvaret-green`, hvit tekst, avrunding `rounded-md`
- **Sekundær**: Hvit bakgrunn, border `forsvaret-green`, grønn tekst
- **Destruktiv**: Bakgrunn `forsvaret-error`, hvit tekst
- **Hover**: Bruk `forsvaret-green-light` for primær
- **Disabled**: Bruk `forsvaret-gray-light` bakgrunn, `forsvaret-gray` tekst

### Kort (cards)

- Hvit bakgrunn, `border border-forsvaret-gray-light`, `rounded-lg`, `shadow-sm`
- Padding: `p-5`

### Skjema-elementer (inputs)

- Border: `border-forsvaret-gray-light`, fokus-border: `border-forsvaret-green`
- Avrunding: `rounded-md`, padding: `px-3 py-2`
- Fokus-ring: `ring-2 ring-forsvaret-green/30`

### Header / navigasjon

- Bakgrunn: `forsvaret-green` eller `forsvaret-black`
- Tekst: hvit
- Logo sentrert eller venstrejustert

### Generelle prinsipper

- Rent og strukturert uttrykk — militær presisjon
- Mye luft (spacing), tydelig hierarki
- Begrenset bruk av farger — la grønn være det dominerende aksent
- Mørke kontraster for lesbarhet
