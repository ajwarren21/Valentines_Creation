import { fulfillGift } from "@/lib/fulfillment";

export async function PATCH(req, { params }) {
  const gift = await prisma.gift.findUnique({
    where: { slug: params.slug },
  });

  if (!gift || gift.status === "ACCEPTED") {
    return NextResponse.json({ error: "Invalid state" }, { status: 400 });
  }

  const fulfillmentResult = await fulfillGift(gift);

  await prisma.gift.update({
    where: { id: gift.id },
    data: {
      status: "FULFILLED",
      respondedAt: new Date(),
      giftConfig: {
        ...gift.giftConfig,
        fulfillmentResult,
      },
    },
  });

  return NextResponse.json({ fulfillmentResult });
}
