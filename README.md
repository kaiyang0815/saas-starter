# SaaS Starter

## Technologies

- Next.js 15
- Tailwind CSS
- ShadcnUI
- Supabase Database
- Supabase Auth
- Polar.sh: Manage subscriptions and payments

## Optimizations

- Dark Mode

## Quick Start

1. Create a Supabase project.
2. Clone the reposity:

   ```bash
   git clone https://github.com/kaiyang0815/saas-starter.git
   ```

3. Set up enviroment variables:

   mv `.env.example` to `.env.local`

   ```bash
   pnpm install
   pnpm run dev
   ```

4. Configure your enviroment variables:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
   ```

5. Run the Next.js local development server:

   ```bash
   pnpm run dev
   ```

The application should now be running on [http://localhost:3000](http://localhost:3000).
