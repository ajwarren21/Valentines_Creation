// app/api/gift/[slug]/route.js
import { NextResponse } from "next/server";
import { prisma } from "@/../lib/prisma";

// GET - Retrieve gift details
export async function GET(req, context) {
  try {
    const { slug } = await context.params;

    const gift = await prisma.gift.findUnique({
      where: { slug },
    });

    if (!gift) {
      return NextResponse.json(
        { error: "Gift not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(gift);
  } catch (error) {
    console.error("Error fetching gift:", error);
    return NextResponse.json(
      { error: "Failed to fetch gift" },
      { status: 500 }
    );
  }
}

// PATCH - Accept/fulfill gift
export async function PATCH(req, context) {
  try {
    const { slug } = await context.params;

    const gift = await prisma.gift.findUnique({
      where: { slug },
    });

    if (!gift) {
      return NextResponse.json(
        { error: "Gift not found" },
        { status: 404 }
      );
    }

    if (gift.fulfilled) {
      return NextResponse.json(
        { error: "Gift already fulfilled" },
        { status: 400 }
      );
    }

    // Fulfill the gift based on type
    const fulfillmentResult = await fulfillGift(gift);

    // Update gift as fulfilled
    await prisma.gift.update({
      where: { slug },
      data: {
        fulfilled: true,
        fulfilledAt: new Date(),
        fulfillmentData: fulfillmentResult,
      },
    });

    return NextResponse.json({ fulfillmentResult });
  } catch (error) {
    console.error("Error fulfilling gift:", error);
    return NextResponse.json(
      { error: "Failed to fulfill gift" },
      { status: 500 }
    );
  }
}

// Fulfillment logic based on gift type
async function fulfillGift(gift) {
  switch (gift.giftType) {
    case "COFFEE":
      return fulfillCoffee(gift);
    
    case "GIFTCARD":
      return fulfillGiftCard(gift);
    
    case "CHOCOLATES":
      return fulfillChocolates(gift);
    
    case "FLOWERS":
      return fulfillFlowers(gift);
    
    default:
      return { message: "Gift fulfilled!" };
  }
}

// Coffee fulfillment - could integrate with Starbucks API or use pre-purchased codes
async function fulfillCoffee(gift) {
  // Option 1: Return a pre-purchased Starbucks eGift link
  // const code = await getNextAvailableCoffeeCode();
  // return `https://www.starbucks.com/gift/redeem/${code}`;

  // Option 2: Placeholder for now
  return "https://www.starbucks.com/gift"; // Replace with actual fulfillment
}

// Gift card fulfillment
async function fulfillGiftCard(gift) {
  const config = gift.giftConfig;
  
  // Get next available gift card code from database
  // In production, you'd query a table of pre-purchased codes
  const code = await getNextGiftCardCode(config.brand, config.amount);
  
  return {
    redemptionCode: code || "SAMPLE-GIFT-CODE-1234",
    brand: config.brand || "Amazon",
    amount: config.amount || 25,
    instructions: `Redeem this code at ${config.brand || "Amazon"}.com`,
  };
}

// Chocolates fulfillment
async function fulfillChocolates(gift) {
  // Could integrate with a fulfillment service like Goldbelly, Harry & David, etc.
  // For now, return a tracking link placeholder
  return "https://www.godiva.com/track/your-order";
}

// Flowers fulfillment
async function fulfillFlowers(gift) {
  // Could integrate with 1-800-Flowers API
  return "https://www.1800flowers.com/track";
}

// Helper function to get next available gift card code
// In production, this would query your database for unused codes
async function getNextGiftCardCode(brand, amount) {
  // Example query (you'd need a GiftCardCode model in Prisma):
  // const code = await prisma.giftCardCode.findFirst({
  //   where: {
  //     brand,
  //     amount,
  //     used: false,
  //   },
  // });
  // 
  // if (code) {
  //   await prisma.giftCardCode.update({
  //     where: { id: code.id },
  //     data: { used: true },
  //   });
  //   return code.code;
  // }
  
  // For now, return a sample code
  return `${brand.toUpperCase()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
}