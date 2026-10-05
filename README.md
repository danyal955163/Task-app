# CashCoin Task App

Modern CashCoin task-earning application with a Next.js App Router foundation and Supabase integration.

## Included

- Modern responsive landing page and dashboard shell
- Supabase browser/server clients and auth middleware
- Login/signup routes using Supabase Auth
- Real profile, broadcast and notification queries
- User routes for tasks, free tasks, wallet, withdrawal, profile, packages, deposit, referral, help and notifications
- Admin routes for deposits, withdrawals, tasks, task history, users, broadcast, support and settings
- OpenRouter-backed support chat and AI-review API endpoints
- Existing static design preserved at `public/design-reference.html`

## Environment

Copy `.env.local.example` to `.env.local` and fill the existing Vercel/Supabase values. **No database schema or RPC is created or changed by this app.**

## Run

```bash
npm install
npm run build
npm run dev
```

The app expects the existing Supabase tables and RPCs listed in the product prompt.
