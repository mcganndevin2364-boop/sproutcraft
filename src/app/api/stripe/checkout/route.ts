import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { stripe, PLANS } from "@/lib/stripe";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { plan } = await request.json();

  if (!plan || !PLANS[plan as keyof typeof PLANS]) {
    return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
  }

  const planData = PLANS[plan as keyof typeof PLANS];

  if (!planData.priceId) {
    return NextResponse.json({ error: "This plan is not available" }, { status: 400 });
  }

  try {
    let subscription = await prisma.subscription.findUnique({
      where: { userId: session.user.id },
    });

    if (!subscription?.stripeCustomerId) {
      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
      });

      const customer = await stripe.customers.create({
        email: user?.email || undefined,
        metadata: { userId: session.user.id },
      });

      subscription = await prisma.subscription.upsert({
        where: { userId: session.user.id },
        update: { stripeCustomerId: customer.id },
        create: {
          userId: session.user.id,
          stripeCustomerId: customer.id,
        },
      });
    }

    const checkoutSession = await stripe.checkout.sessions.create({
      customer: subscription.stripeCustomerId!,
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: planData.priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXTAUTH_URL}/dashboard?success=true`,
      cancel_url: `${process.env.NEXTAUTH_URL}/pricing?canceled=true`,
      metadata: {
        userId: session.user.id,
        plan,
      },
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
