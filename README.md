# CashCoin / Task-app

Complete Next.js 14 App Router foundation for the CashCoin task platform, built in `src/` with the existing Supabase project and RPC names. No schema or RPC is created or modified.

## Setup

```bash
npm install
cp .env.local.example .env.local
npm run build
npm run dev
```

Fill the existing Supabase/OpenRouter values in `.env.local` or the deployment environment. The original single-file visual design is preserved at `public/design-reference.html`.

## Connected areas

Auth middleware, Supabase Auth login/signup, profile/dashboard/broadcast/notification queries, task/wallet/withdrawal/package routes, admin route structure, support chat, AI review and email API endpoints are included. The app uses the existing tables and RPCs described in the product prompts.
