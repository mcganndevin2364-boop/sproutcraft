import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { generateApp } from "@/lib/ai-generator";
import { generateShareId } from "@/lib/utils";

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Check usage limits
  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  
  const usage = await prisma.usage.findUnique({
    where: {
      userId_type_period: {
        userId: session.user.id,
        type: "generations",
        period: "monthly",
      },
    },
  });

  const subscription = await prisma.subscription.findUnique({
    where: { userId: session.user.id },
  });

  const planLimits: Record<string, number> = {
    free: 3,
    starter: 25,
    pro: -1,
    business: -1,
  };

  const limit = planLimits[subscription?.plan || "free"];
  const used = usage?.count || 0;

  if (limit !== -1 && used >= limit) {
    return NextResponse.json(
      { error: "Usage limit reached. Please upgrade your plan." },
      { status: 429 }
    );
  }

  const body = await request.json();
  const { name, description, type, features, design, colorScheme } = body;

  try {
    const result = await generateApp({
      name,
      description,
      type: type || "landing",
      features: features || [],
      design: design || "modern",
      colorScheme,
    });

    // Update usage
    await prisma.usage.upsert({
      where: {
        userId_type_period: {
          userId: session.user.id,
          type: "generations",
          period: "monthly",
        },
      },
      update: {
        count: { increment: 1 },
      },
      create: {
        userId: session.user.id,
        type: "generations",
        count: 1,
        period: "monthly",
        periodEnd: new Date(now.getFullYear(), now.getMonth() + 1, 1),
      },
    });

    // Create project
    const project = await prisma.project.create({
      data: {
        userId: session.user.id,
        name,
        description,
        spec: JSON.stringify(body),
        code: result.code.components,
        shareId: generateShareId(),
      },
    });

    return NextResponse.json({
      success: true,
      project,
      code: result.code,
      explanation: result.explanation,
      techStack: result.techStack,
    });
  } catch (error) {
    console.error("Generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate application" },
      { status: 500 }
    );
  }
}
