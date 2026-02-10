// "use client";

// import { useEffect, useState } from "react";

// export default function GiftPage({ params }) {
//   const { slug } = params;
//   const [gift, setGift] = useState(null);
//   const [fulfilled, setFulfilled] = useState(false);

//   useEffect(() => {
//     fetch(`/api/gift/${slug}`)
//       .then((res) => res.json())
//       .then(setGift);
//   }, [slug]);

//   async function acceptGift() {
//     const res = await fetch(`/api/gift/${slug}`, {
//       method: "PATCH",
//     });
//     const data = await res.json();
//     setFulfilled(data.fulfillmentResult);
//   }

//   if (!gift) return <p className="p-6">Loading...</p>;

//   return (
//     <div className="max-w-xl mx-auto p-6">
//       <h1 className="text-2xl mb-2">
//         {gift.senderName} 💖 {gift.recipientName}
//       </h1>

//       <p className="mb-4">{gift.questionText}</p>

//       {!fulfilled ? (
//         <button
//           className="bg-green-500 text-white px-4 py-2"
//           onClick={acceptGift}
//         >
//           Accept Gift
//         </button>
//       ) : (
//         <FulfillmentDisplay gift={gift} result={fulfilled} />
//       )}
//     </div>
//   );
// }

// function FulfillmentDisplay({ gift, result }) {
//   if (gift.giftType === "COFFEE") {
//     return (
//       <a
//         href={result}
//         className="text-blue-600 underline mt-4 block"
//       >
//         Open Coffee Link ☕
//       </a>
//     );
//   }

//   if (gift.giftType === "GIFTCARD") {
//     return (
//       <p className="mt-4">
//         🎁 Gift Card Code: <strong>{result.redemptionCode}</strong>
//       </p>
//     );
//   }

//   if (gift.giftType === "CHOCOLATES") {
//     return (
//       <a
//         href={result}
//         className="text-blue-600 underline mt-4 block"
//       >
//         View Chocolates 🍫
//       </a>
//     );
//   }

//   return null;
// }


// src/app/g/[slug]/page.js
import { prisma } from "@/../lib/prisma";

export default async function GiftPage({ params }) {
  // const gift = await prisma.gift.findUnique({
  //   where: { slug: params.slug },
  // });
  const gift = null;

  if (!gift) {
    return <h1>Gift not found 💔</h1>;
  }

  return (
    <div className="p-8">
      <h1>You’ve been sent a gift 💝</h1>
      <pre>{JSON.stringify(gift, null, 2)}</pre>
    </div>
  );
}

