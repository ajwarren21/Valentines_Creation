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
// import { prisma } from "@/../lib/prisma";

// export default async function GiftPage({ params }) {
//   // const gift = await prisma.gift.findUnique({
//   //   where: { slug: params.slug },
//   // });
//   const gift = null;

//   if (!gift) {
//     return <h1>Gift not found 💔</h1>;
//   }

//   return (
//     <div className="p-8">
//       <h1>You’ve been sent a gift 💝</h1>
//       <pre>{JSON.stringify(gift, null, 2)}</pre>
//     </div>
//   );
// }

// app/g/[slug]/page.js
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function GiftPage() {
  const params = useParams();
  const slug = params?.slug;
  
  const [gift, setGift] = useState(null);
  const [fulfilled, setFulfilled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    fetch(`/api/gift/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setGift(data);
        setFulfilled(data.fulfilled);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading gift:", err);
        setLoading(false);
      });
  }, [slug]);

  async function acceptGift() {
    try {
      const res = await fetch(`/api/gift/${slug}`, {
        method: "PATCH",
      });
      const data = await res.json();
      setFulfilled(true);
      setGift({ ...gift, fulfillmentData: data.fulfillmentResult });
    } catch (error) {
      console.error("Error accepting gift:", error);
      alert("Failed to accept gift. Please try again.");
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100">
        <div className="text-2xl text-gray-600">Loading your gift... 💝</div>
      </div>
    );
  }

  if (!gift) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100">
        <div className="text-center">
          <h1 className="text-4xl mb-4">💔</h1>
          <h2 className="text-2xl font-bold text-gray-800">Gift Not Found</h2>
          <p className="text-gray-600 mt-2">This gift link may have expired or is invalid.</p>
        </div>
      </div>
    );
  }

  // Dynamic styling based on customization
  const pageStyle = {
    backgroundColor: gift.backgroundColor || "#FFF5F7",
    backgroundImage:
      gift.backgroundImage && gift.backgroundImage !== "none"
        ? `url(/patterns/${gift.backgroundImage}.svg)`
        : "none",
    backgroundSize: "200px",
  };

  const accentColor = gift.accentColor || "#FF69B4";

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={pageStyle}>
      <div className="max-w-2xl w-full">
        {/* Gift Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4 animate-pulse">💝</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: accentColor }}>
              {gift.senderName} → {gift.recipientName}
            </h1>
          </div>

          {/* Main Message */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-6">
            <p className="text-xl md:text-2xl text-gray-800 text-center font-medium">
              {gift.questionText}
            </p>
          </div>

          {/* Additional Message */}
          {gift.customMessage && (
            <div className="mb-6">
              <p className="text-gray-700 text-center italic leading-relaxed">
                "{gift.customMessage}"
              </p>
            </div>
          )}

          {/* Gift Type Badge */}
          <div className="flex justify-center mb-6">
            <span
              className="px-6 py-2 rounded-full text-white font-semibold text-sm"
              style={{ backgroundColor: accentColor }}
            >
              {getGiftTypeDisplay(gift.giftType)}
            </span>
          </div>

          {/* Action Button or Fulfillment Display */}
          {!fulfilled ? (
            <div className="text-center">
              <button
                onClick={acceptGift}
                className="px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                style={{ backgroundColor: accentColor }}
              >
                Accept Your Gift 🎁
              </button>
            </div>
          ) : (
            <FulfillmentDisplay gift={gift} accentColor={accentColor} />
          )}

          {/* Footer */}
          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>Made with ❤️ for Valentine's Day</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function getGiftTypeDisplay(giftType) {
  const displays = {
    COFFEE: "☕ Coffee Gift",
    GIFTCARD: "🎁 Gift Card",
    CHOCOLATES: "🍫 Chocolates",
    FLOWERS: "🌹 Flowers",
    CUSTOM: "✨ Special Gift",
  };
  return displays[giftType] || "🎁 Gift";
}

function FulfillmentDisplay({ gift, accentColor }) {
  const fulfillmentData = gift.fulfillmentData;

  return (
    <div className="space-y-4">
      <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-6">
        <div className="text-center">
          <div className="text-4xl mb-3">🎉</div>
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            Gift Accepted!
          </h3>

          {gift.giftType === "COFFEE" && fulfillmentData && (
            <div>
              <p className="text-gray-700 mb-4">
                Here's your coffee gift link:
              </p>
              <a
                href={fulfillmentData}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: accentColor }}
              >
                ☕ Open Coffee Link
              </a>
            </div>
          )}

          {gift.giftType === "GIFTCARD" && fulfillmentData?.redemptionCode && (
            <div>
              <p className="text-gray-700 mb-3">Your gift card code:</p>
              <div className="bg-white border-2 border-green-600 rounded-lg p-4 mb-4">
                <code className="text-2xl font-mono font-bold text-gray-800">
                  {fulfillmentData.redemptionCode}
                </code>
              </div>
              {fulfillmentData.instructions && (
                <p className="text-sm text-gray-600">{fulfillmentData.instructions}</p>
              )}
            </div>
          )}

          {gift.giftType === "CHOCOLATES" && fulfillmentData && (
            <div>
              <p className="text-gray-700 mb-4">
                Your chocolate delivery is on the way!
              </p>
              <a
                href={fulfillmentData}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: accentColor }}
              >
                🍫 Track Your Chocolates
              </a>
            </div>
          )}

          {gift.giftType === "FLOWERS" && fulfillmentData && (
            <div>
              <p className="text-gray-700 mb-4">
                Fresh flowers are being delivered to you!
              </p>
              <a
                href={fulfillmentData}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: accentColor }}
              >
                🌹 Track Delivery
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


