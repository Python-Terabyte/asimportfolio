# Muhammad Asim Saleem — Portfolio

Personal portfolio site for Muhammad Asim Saleem, BI Architect and Fintech Consultant. Built with Next.js (App Router), TypeScript, and Tailwind CSS, with Framer Motion animations and a Resend-powered contact form.

Live at [asimsaleem.online](https://asimsaleem.online).

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Email:** [Resend](https://resend.com) (contact form)
- **Fonts:** Jost, Cormorant Garamond, DM Mono (via `next/font/google`)

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The page auto-updates as you edit files under `app/` and `components/`.

### Environment Variables

The contact form (`app/api/contact/route.ts`) sends email via Resend. Create a `.env.local` file with:

```bash
RESEND_API_KEY=your_resend_api_key
```

Without this variable, the contact API returns a 503 and the form will not send.

## Project Structure

```
app/
  api/contact/route.ts   # Contact form endpoint (Resend, rate-limited)
  layout.tsx             # Root layout, fonts, metadata/SEO
  page.tsx               # Home page, composes all sections
  globals.css            # Global styles / Tailwind base
components/
  Hero.tsx, About.tsx, Experience.tsx, Skills.tsx,
  Projects.tsx, Services.tsx, Stats.tsx, Contact.tsx,
  Navbar.tsx, Footer.tsx, CustomCursor.tsx
  ui/                     # Shared UI primitives (buttons, cards, reveal, etc.)
lib/
  data.ts                 # Site content: nav, stats, services, experience, skills, projects, social links
public/                   # Static assets, screenshots
```

Site content (experience, skills, projects, services, stats, social links) is centralized in `lib/data.ts` — edit that file to update copy without touching components.

## Available Scripts

| Command         | Description                          |
| --------------- | ------------------------------------- |
| `npm run dev`   | Start the development server          |
| `npm run build` | Build the production bundle           |
| `npm run start` | Start the production server           |
| `npm run lint`  | Run ESLint                            |

## Deployment

The site is configured for deployment on [Vercel](https://vercel.com). Push to `main` and Vercel will build and deploy automatically. Make sure `RESEND_API_KEY` is set in the Vercel project's environment variables so the contact form works in production.

## Contact

For inquiries, use the contact form on the site or reach out via [LinkedIn](https://linkedin.com/in/muhammad-a-501087209).
