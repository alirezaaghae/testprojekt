# Konfigurations-UI mit React, TypeScript und TailwindCSS

Dieses Projekt ist eine vollständig interaktive Konfigurationsoberfläche, die mit **React**, **TypeScript** und **TailwindCSS** entwickelt wurde.

## Features

- Dynamische Formulareingaben
- Moderne UI mit React + TailwindCSS
- Typensichere Struktur mit TypeScript
- Live-Anzeige der JSON-Datenstruktur

## Projektstruktur

```
testprojekt/
├─ src/
│  ├─ components/        # Wiederverwendbare UI-InputKomponenten
│  ├─ data/              # Beispiel-Items (z. B. EPSG-Codes)
│  ├─ types/             # FieldsInterface
│  ├─ utils/             # Bearbeitung der Eigenschaften
│  ├─ App.tsx            # Hauptkomponente
│  ├─ index.css          # TailwindCSS-Stile
│  └─ main.tsx           # Einstiegspunkt
├─ public/               # Öffentliche Assets
│  └─ epsg.json
├─ tailwind.config.js
├─ postcss.config.js
├─ package.json
└─ vite.config.ts
```

## Voraussetzungen

- Node.js ≥ 16
- npm / vite

## Online-Demo: 

[Hier ansehen](https://testprojekt-alirezaaghae.vercel.app/)

## Installation

```bash
git clone https://github.com/alirezaaghae/testprojekt.git
cd testprojekt
npm install
```

## Projekt starten

```bash
npm run dev
```

Das Projekt läuft standardmäßig unter:  
[http://localhost:5173]or(http://localhost)

## Konfiguration

Die Eingabekomponenten decken folgende Typen ab:

- String, Integer, Float
- Date, DateTime, Duration
- Point, Extent (Koordinaten)
- Select (Listbox)
- Combobox (durchsuchbar)

```bash
Bearbeitung von Inputs Eigenschaften in src/utils/vconfig.ts
```

## Kontakt

Erstellt von GBD-Team http://www.gbd-consult.de
---

Viel Spaß beim Entwickeln!
