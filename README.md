# PrimeVision — Premium IPTV Website (DE)

Statische React-Website für den deutschen Markt. Marke: **PrimeVision**.

## 1. Überblick

- Deutsche Kundenseite (Landing + Rechtstexte)
- Conversion-fokussiert (Test, Pakete, WhatsApp)
- Static Build für Hostinger
- Zentrale Konfiguration für Marke, Kontakt, Preise, SEO

## 2. Technologie

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router (SPA)
- Kein Backend, keine Datenbank

## 3. Projektstruktur

```
src/
  assets/           # optionale lokale Assets
  components/
    ui/             # Button, Badge, Card, Accordion, …
    layout/         # Header, Footer, SiteLayout
    sections/       # Hero, Pricing, FAQ, …
  config/           # brand, contact, cta, seo
  data/             # pricing, faq, devices, legal, …
  hooks/
  lib/
  pages/
  types/
  App.tsx
  main.tsx
public/
  .htaccess         # SPA-Fallback für Apache/Hostinger
  robots.txt
  sitemap.xml
  favicon.svg
  og-image.svg
```

## 4. Installation

```bash
npm install
```

## 5. Entwicklung

```bash
npm run dev
```

Öffnet den lokalen Dev-Server (Vite).

## 6. Production Build

```bash
npm run build
```

Ausgabe: Ordner `dist/`

Vorschau lokal:

```bash
npm run preview
```

Lint:

```bash
npm run lint
```

## 7. Hostinger Deployment

1. Lokal `npm install` und `npm run build` ausführen.
2. Inhalt von `dist/` per File Manager oder FTP in das Document Root hochladen (meist `public_html`).
3. Sicherstellen, dass `.htaccess` mit hochgeladen wurde (SPA-Routing).
4. Domain prüfen: Startseite und Unterseiten wie `/impressum` müssen laden.
5. In `src/config/seo.ts` und `public/robots.txt` / `public/sitemap.xml` die Domain `https://www.beispiel.de` durch Ihre echte Domain ersetzen, danach erneut bauen.

**Wichtig:** Keine `localhost`-URLs in der Produktion. CTAs zeigen auf WhatsApp / Ankerlinks aus der Konfiguration.

## 8. Konfiguration

| Datei | Inhalt |
|-------|--------|
| `src/config/brand.ts` | Markenname, Tagline, Beschreibung |
| `src/config/contact.ts` | E-Mail, Telefon, WhatsApp |
| `src/config/cta.ts` | CTA-Labels und Ziele |
| `src/config/seo.ts` | Title, Description, Canonical-Domain |
| `src/data/pricing.ts` | Pakete und Preise |
| `src/data/faq.ts` | FAQ |
| `src/data/testimonials.ts` | Bewertungen (aktuell Platzhalter) |

## 9. Preise ändern

Datei: `src/data/pricing.ts`

- `price`, `period`, `features`, `devices`, `quality` anpassen
- **WhatsApp-Bestelltext** je Paket in `whatsappOrderMessage` pflegen (enthält Name + Preis), z. B.:
  - `Hallo! Ich möchte den Standard-Plan für 49 € pro Jahr bestellen.`
  - `Hallo! Ich möchte den VIP Unlimited-Plan für 79 € pro Jahr bestellen.`
- Bestellung nur per WhatsApp (keine Kartenzahlung auf der Website)
- Nach Änderungen: `npm run build`

## 10. WhatsApp-Nummer ändern

Datei: `src/config/contact.ts`

```ts
whatsappNumber: '491701234567', // Ländervorwahl ohne +
whatsappMessage: 'Hallo …',
```

Die Nummer wird nur hier gepflegt und über `getWhatsAppUrl()` / `WhatsAppButton` genutzt.

## 11. Branding ändern

Datei: `src/config/brand.ts`

```ts
export const BRAND = {
  name: 'Ihr Markenname',
  …
}
```

Logo-Komponente: `src/components/ui/Logo.tsx` · Favicon: `public/favicon.svg`

## 12. SEO

- Sprache: `de`
- Meta + Open Graph über `index.html` und `usePageMeta`
- `public/robots.txt`, `public/sitemap.xml`
- Domain in `src/config/seo.ts` setzen

## Rechtliches / Compliance

- Impressum, Datenschutz, AGB, Widerruf sind **Platzhalter** und müssen rechtlich geprüft werden.
- Es dürfen nur Inhalte beworben werden, für die Lizenzen/Rechte vorliegen.
- Testimonials sind als Platzhalter gekennzeichnet — keine erfundenen „echten“ Bewertungen.

## Designrichtung

**Neon Dark Premium:** Tiefschwarz, Lime-Signal (`#B8FF00`), Soft-Glow auf CTAs und Featured-Paketen, abgerundete Cards, Typography mit **Outfit** (UI) und **Manrope** (Preise). Hero mit Lifestyle-Hintergrund und Produktfoto.
