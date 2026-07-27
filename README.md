<div align="center">

<img src="public/logo.svg" alt="Logo" width="60" height="60" />

# Dipesh Soni — Portfolio

**A meticulously crafted developer portfolio built for speed, aesthetics, and impact.**

[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?style=flat-square&logo=vercel&logoColor=white)](https://dipeshsoni.vercel.app/)

<br />

[**✦ Live Site**](https://dipeshsoni.vercel.app/) &nbsp;·&nbsp; [Report Bug](https://github.com/dini28/Portfolio/issues) &nbsp;·&nbsp; [Request Feature](https://github.com/dini28/Portfolio/issues)

<br />

<img src="public/preview.png" alt="Portfolio Preview" width="100%" style="border-radius: 12px;" />

</div>

<br />

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 15 (App Router) + React 19 + TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Scroll** | Lenis |
| **Icons** | Lucide React + Simple Icons |
| **UI Primitives** | Radix UI |
| **Analytics** | Vercel Analytics |
| **Deployment** | Vercel |

<br />

## Architecture

```
src/
├── app/                 # Next.js App Router — layout, page, API routes
│   └── api/contact/     # Contact form Route Handler
├── components/
│   ├── common/          # Atomic UI — Card, Button, SectionBackground
│   ├── layout/          # Shell — Header, Footer
│   └── sections/        # Page blocks — Hero, About, Skills, Projects, Contact
├── hooks/               # Custom hooks — animations, scroll spy, viewport
├── data/                # Static data — projects, skills, social links
├── utils/               # Utilities — cn()
└── assets/              # Images, SVGs
```

<br />

## Quick Start

> **Prerequisites:** Node.js ≥ 20 &nbsp;•&nbsp; npm ≥ 9

```bash
# Clone
git clone https://github.com/dini28/Portfolio.git
cd Portfolio

# Install
npm install

# Dev server
npm run dev

# Production build
npm run build && npm start
```

Copy `.env` with `SMTP_EMAIL` and `SMTP_PASSWORD` for the contact form.

<br />

## License

MIT — free to use, modify, and distribute.

<br />

<div align="center">

**[Dipesh Soni](https://github.com/dini28)** &nbsp;·&nbsp; [LinkedIn](https://linkedin.com/in/dipesh-soni) &nbsp;·&nbsp; [Portfolio](https://dipeshsoni.vercel.app/)

<sub>Designed & built with ☕ and curiosity.</sub>

</div>
