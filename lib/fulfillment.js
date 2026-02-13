export async function fulfillGift(gift) {
  switch (gift.giftType) {
    case "COFFEE":
      return buildCoffeeLink(gift.giftConfig);

    case "GIFTCARD":
      return await sendGiftCard(gift.giftConfig);

    case "CHOCOLATES":
      return buildAmazonLink(gift.giftConfig);

    default:
      throw new Error("Unknown gift type");
  }
}

function buildCoffeeLink(config) {
  const params = new URLSearchParams({
    drink: config.drink,
    size: config.size,
    milk: config.milk,
  });

  return `https://www.starbucks.com/menu/product?${params.toString()}`;
}

function buildAmazonLink(config) {
  return `https://www.amazon.com/dp/${config.asin}?tag=${config.affiliateTag}`;
}


// Make real api later
async function sendGiftCard(config) {
  // Later: call Tango / Rybbon API
  return {
    redemptionCode: "TEST-CODE-123",
    amount: config.amount,
  };
}
