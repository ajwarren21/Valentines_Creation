import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { randomUUID } from "crypto";

export async function POST(req) {
  const body = await req.json();

  const gift = await prisma.gift.create({
    data: {
      slug: randomUUID().slice(0, 8),
      senderName: body.senderName,
      recipientName: body.recipientName,
      questionText: body.questionText,
      theme: body.theme,
    },
  });

  return NextResponse.json({ slug: gift.slug });
}
