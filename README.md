# SproutCraft

An AI-powered app builder platform that lets you create production-ready full-stack applications in minutes.

![SproutCraft](https://via.placeholder.com/1200x600/10b981/ffffff?text=SproutCraft)

## Features

- **AI-Powered Builder** - Create full-stack applications using natural language
- **Multiple App Types** - Dashboards, e-commerce stores, SaaS apps, and more
- **Modern Tech Stack** - Next.js, TypeScript, Tailwind CSS, Prisma
- **Authentication** - Built-in user authentication with NextAuth.js
- **Payments** - Stripe integration for subscriptions
- **Viral Sharing** - Share your creations with permanent URLs
- **SEO Optimized** - Sitemap, robots.txt, and meta tags included

## Tech Stack

- **Frontend:** Next.js 16, React, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes, Prisma ORM
- **Database:** SQLite (development), PostgreSQL (production)
- **Authentication:** NextAuth.js with Google OAuth
- **Payments:** Stripe
- **Icons:** Lucide React

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- A Stripe account (for payments)
- A Google Cloud project (for OAuth, optional)

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/sproutcraft.git
cd sproutcraft
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Copy the example environment file and fill in your values:

```bash
cp .env.example .env
```

Edit `.env` with your own values:
- `NEXTAUTH_SECRET` - Generate a random string
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` - From Google Cloud Console
- `STRIPE_SECRET_KEY` / `STRIPE_WEBHOOK_SECRET` - From Stripe Dashboard

4. **Set up the database**

```bash
# Generate Prisma client
npx prisma generate

# Create the database
npx prisma db push
```

5. **Start the development server**

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma Studio (database GUI)
- `npx prisma db push` - Push schema changes to database

## Project Structure

```
sproutcraft/
├── prisma/
│   └── schema.prisma       # Database schema
├── public/
│   └── ...                 # Static assets
├── src/
│   ├── app/                # Next.js app directory
│   │   ├── api/           # API routes
│   │   ├── blog/          # Blog pages
│   │   ├── builder/       # App builder
│   │   ├── dashboard/     # User dashboard
│   │   └── ...            # Other pages
│   ├── components/        # React components
│   ├── lib/               # Utilities and helpers
│   └── app/globals.css    # Global styles
├── .env.example           # Environment variables template
├── package.json
└── README.md
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | Database connection string | Yes |
| `NEXTAUTH_URL` | Application URL | Yes |
| `NEXTAUTH_SECRET` | NextAuth secret key | Yes |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | For Google login |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret | For Google login |
| `STRIPE_SECRET_KEY` | Stripe secret key | For payments |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook secret | For payments |
| `OPENAI_API_KEY` | OpenAI API key | For AI features |

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Docker

```bash
docker build -t sproutcraft .
docker run -p 3000:3000 --env-file .env sproutcraft
```

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

Built with ❤️ by [SproutCraft Team](https://sproutcraft.app)
