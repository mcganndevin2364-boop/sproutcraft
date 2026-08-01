import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import prisma from "@/lib/prisma";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    console.error("Webhook signature verification failed:", error);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.userId;
        const plan = session.metadata?.plan;

        if (userId && plan) {
          await prisma.subscription.upsert({
            where: { userId },
            update: {
              stripeSubscriptionId: session.subscription as string,
              stripePriceId: session.line_items?.data[0]?.price?.id,
              plan,
              status: "active",
            },
            create: {
              userId,
              stripeSubscriptionId: session.subscription as string,
              stripePriceId: session.line_items?.data[0]?.price?.id,
              plan,
              status: "active",
            },
          });
        }
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;

        const existingSub = await prisma.subscription.findFirst({
          where: { stripeCustomerId: customerId },
        });

        if (existingSub) {
          const currentPeriodEnd = (subscription as any).current_period_end;
          await prisma.subscription.update({
            where: { id: existingSub.id },
            data: {
              stripeSubscriptionId: subscription.id,
              stripePriceId: subscription.items.data[0]?.price?.id || null,
              stripeCurrentPeriodEnd: currentPeriodEnd ? new Date(currentPeriodEnd * 1000) : null,
              status: subscription.status,
            },
          });
        }
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;

        const existingSub = await prisma.subscription.findFirst({
          where: { stripeCustomerId: customerId },
        });

        if (existingSub) {
          await prisma.subscription.update({
            where: { id: existingSub.id },
            data: {
              plan: "free",
              status: "canceled",
              stripeSubscriptionId: null,
              stripePriceId: null,
            },
          });
        }
        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook handler error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}
