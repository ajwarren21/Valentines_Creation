import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req, { params }) {
  const gift = await prisma.gift.findUnique({
    where: { slug: params.slug },
  });

  if (!gift) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (!gift.openedAt) {
    await prisma.gift.update({
      where: { id: gift.id },
      data: {
        openedAt: new Date(),
        status: "OPENED",
      },
    });
  }

  return NextResponse.json(gift);
}

export async function PATCH(req, { params }) {
  const body = await req.json();

  const gift = await prisma.gift.findUnique({
    where: { slug: params.slug },
  });

  if (!gift || gift.status === "ACCEPTED") {
    return NextResponse.json({ error: "Invalid state" }, { status: 400 });
  }

  await prisma.gift.update({
    where: { id: gift.id },
    data: {
      status: "ACCEPTED",
      respondedAt: new Date(),
      coffeeDrink: body.drink,
      coffeeSize: body.size,
      coffeeMilk: body.milk,
    },
  });

  return NextResponse.json({ success: true });
}
