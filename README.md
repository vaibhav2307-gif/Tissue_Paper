# Tissue Paper — Premium B2B Manufacturing Website

A production-oriented Next.js/TypeScript website for a tissue paper manufacturer and bulk supplier. The visual direction is original: editorial, industrial and minimal, inspired by premium digital storytelling rather than copied from any reference site.

## Stack

- Next.js 15 App Router
- React + TypeScript
- Framer Motion
- Lucide icons
- Responsive CSS design system

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Before launch

Replace the intentional business placeholders:

- `[COMPANY NAME]`
- `[PHONE NUMBER]`
- `[WHATSAPP NUMBER]`
- `[EMAIL]`
- `[FACTORY ADDRESS]`
- `[BUSINESS HOURS]`
- `[GOOGLE MAPS LINK]`
- `[MOQ]`, capacity, SKU, customer and experience figures
- product ply, GSM, dimensions, packaging and MOQ
- certification information only when verified
- company story and actual service areas

Add owned/licensed photography under `public/images/`; see `public/images/README.md`.

## Forms

Quote and sample forms currently provide client-side validation and a demo success state. Connect them to the company's approved email, CRM or serverless endpoint before production. No secrets are stored in the frontend.
