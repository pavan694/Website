# pavan-jinugu-portfolio

Personal portfolio website for **Pavan Jinugu** — Data Analyst specializing in sales analytics, KPI reporting, and business intelligence.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## Overview

- **Role classification**: Data Analyst (Sales Analytics focus)
- **Design aesthetic**: Dark editorial/analytical — ink-on-paper with amber data-viz accents, terminal-inspired typography
- **Sections**: Hero · About · Projects · Experience · Skills · Contact

### Key Features
- Fully responsive (mobile-first)
- Scroll-triggered section reveal animations
- Animated skill bars and stat counters
- Subtle noise texture + grid background for premium feel
- Zero external dependencies beyond Next.js + Tailwind

---

## Local Setup

### Prerequisites
- Node.js 18+ 
- npm 9+

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/<your-username>/pavan-jinugu-portfolio.git
cd pavan-jinugu-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
  app/
    components/
      Navbar.tsx       # Fixed top nav with scroll blur
      Hero.tsx         # Full-screen hero with stats
      About.tsx        # Bio, qualities, ONGC highlight
      Projects.tsx     # Featured projects with detail cards
      Experience.tsx   # Timeline-style work history
      Skills.tsx       # Skill bars + certifications grid
      Contact.tsx      # Contact links + CTA
      Footer.tsx       # Minimal footer
    globals.css        # Base styles, animations, Tailwind
    layout.tsx         # Root layout + metadata
    page.tsx           # Page assembly
```

---

## Customization

All content is co-located in each component file. To update:
- **Personal info / links**: `Hero.tsx`, `Contact.tsx`
- **Projects**: `Projects.tsx` — edit the `projects` array
- **Experience**: `Experience.tsx` — edit the `experiences` array
- **Skills / certs**: `Skills.tsx` — edit `skillGroups` and `certifications`

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | Framework (App Router) |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Google Fonts | Syne, IBM Plex Mono, DM Sans |
