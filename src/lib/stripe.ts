import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-07-29.dahlia",
  typescript: true,
});

export const PLANS = {
  free: {
    name: "Free",
    price: 0,
    priceId: null,
    features: [
      "3 app generations per day",
      "Basic templates",
      "Community support",
      "7-day project history",
      "Standard processing speed",
    ],
    limits: {
      generations: 3,
      projects: 5,
      aiCalls: 50,
    },
  },
  starter: {
    name: "Starter",
    price: 19,
    priceId: process.env.STRIPE_STARTER_PRICE_ID,
    features: [
      "25 app generations per day",
      "All templates",
      "Priority support",
      "90-day project history",
      "2x faster processing",
      "Export to GitHub",
      "Custom domains",
    ],
    limits: {
      generations: 25,
      projects: 50,
      aiCalls: 500,
    },
  },
  pro: {
    name: "Pro",
    price: 49,
    priceId: process.env.STRIPE_PRO_PRICE_ID,
    features: [
      "Unlimited app generations",
      "Premium templates",
      "Priority support",
      "1-year project history",
      "4x faster processing",
      "Export to GitHub",
      "Custom domains",
      "API access",
      "White-label options",
      "Team collaboration (coming soon)",
    ],
    limits: {
      generations: -1,
      projects: -1,
      aiCalls: -1,
    },
  },
  business: {
    name: "Business",
    price: 149,
    priceId: process.env.STRIPE_BUSINESS_PRICE_ID,
    features: [
      "Everything in Pro",
      "Unlimited everything",
      "Dedicated support",
      "Custom SLA",
      "SSO/SAML",
      "Audit logs",
      "Priority feature requests",
      "Early access to new features",
    ],
    limits: {
      generations: -1,
      projects: -1,
      aiCalls: -1,
    },
  },
};

export type PlanType = keyof typeof PLANS;
