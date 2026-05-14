# Ventura Fund Services — Website

Marketing website for **Ventura Fund Services**, built and delivered by [Fume](https://www.fume.finance).

🌐 **Live:** [venturafs.com](https://venturafs.com)

## Stack

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Vercel](https://vercel.com) for hosting and deploys
- [Anthropic Claude](https://www.anthropic.com) for the on-site AI chat assistant

## Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Create `.env.local` in the project root:

```
ANTHROPIC_API_KEY=sk-ant-...
```

Required only if you want the chat assistant (`/api/chat`) to work locally. The rest of the site renders without it.

## Project structure

```
src/
├── app/             # Next.js App Router pages and API routes
│   └── api/chat/    # AI chat assistant endpoint
├── components/      # React components (Hero, FundWizard, ChatWidget, etc.)
└── styles/          # Global styles
public/              # Static assets (logos, images)
```

## Deployment

The site auto-deploys to Vercel on every push to `main`. The production domain `venturafs.com` is configured under the `ventura-website` project in Fume's Vercel workspace.

## License

© Ventura Fund Services. All rights reserved.

---

Built with care by [Fume](https://www.fume.finance) — onchain fund administration.
