(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/g/[slug]/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GiftPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
// "use client";
// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// export default function GiftPage() {
//   const params = useParams();
//   const slug = params?.slug;
//   const [gift, setGift] = useState(null);
//   const [fulfilled, setFulfilled] = useState(false);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     if (!slug) return;
//     fetch(`/api/gift/${slug}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setGift(data);
//         setFulfilled(data.fulfilled);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error loading gift:", err);
//         setLoading(false);
//       });
//   }, [slug]);
//   async function acceptGift() {
//     try {
//       const res = await fetch(`/api/gift/${slug}`, {
//         method: "PATCH",
//       });
//       const data = await res.json();
//       setFulfilled(true);
//       setGift({ ...gift, fulfillmentData: data.fulfillmentResult });
//     } catch (error) {
//       console.error("Error accepting gift:", error);
//       alert("Failed to accept gift. Please try again.");
//     }
//   }
//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100">
//         <div className="text-2xl text-gray-600">Loading your gift... 💝</div>
//       </div>
//     );
//   }
//   if (!gift) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100">
//         <div className="text-center">
//           <h1 className="text-4xl mb-4">💔</h1>
//           <h2 className="text-2xl font-bold text-gray-800">Gift Not Found</h2>
//           <p className="text-gray-600 mt-2">This gift link may have expired or is invalid.</p>
//         </div>
//       </div>
//     );
//   }
//   // Dynamic styling based on customization
//   const pageStyle = {
//     backgroundColor: gift.backgroundColor || "#FFF5F7",
//     backgroundImage:
//       gift.backgroundImage && gift.backgroundImage !== "none"
//         ? `url(/patterns/${gift.backgroundImage}.svg)`
//         : "none",
//     backgroundSize: "200px",
//   };
//   const accentColor = gift.accentColor || "#FF69B4";
//   return (
//     <div className="min-h-screen flex items-center justify-center p-6" style={pageStyle}>
//       <div className="max-w-2xl w-full">
//         {/* Gift Card */}
//         <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <div className="text-6xl mb-4 animate-pulse">💝</div>
//             <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: accentColor }}>
//               {gift.senderName} → {gift.recipientName}
//             </h1>
//           </div>
//           {/* Main Message */}
//           <div className="bg-gray-50 rounded-2xl p-6 mb-6">
//             <p className="text-xl md:text-2xl text-gray-800 text-center font-medium">
//               {gift.questionText}
//             </p>
//           </div>
//           {/* Additional Message */}
//           {gift.customMessage && (
//             <div className="mb-6">
//               <p className="text-gray-700 text-center italic leading-relaxed">
//                 "{gift.customMessage}"
//               </p>
//             </div>
//           )}
//           {/* Gift Type Badge */}
//           <div className="flex justify-center mb-6">
//             <span
//               className="px-6 py-2 rounded-full text-white font-semibold text-sm"
//               style={{ backgroundColor: accentColor }}
//             >
//               {getGiftTypeDisplay(gift.giftType)}
//             </span>
//           </div>
//           {/* Action Button or Fulfillment Display */}
//           {!fulfilled ? (
//             <div className="text-center">
//               <button
//                 onClick={acceptGift}
//                 className="px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
//                 style={{ backgroundColor: accentColor }}
//               >
//                 Accept Your Gift 🎁
//               </button>
//             </div>
//           ) : (
//             <FulfillmentDisplay gift={gift} accentColor={accentColor} />
//           )}
//           {/* Footer */}
//           <div className="mt-8 text-center text-gray-500 text-sm">
//             <p>Made with ❤️ for Valentine's Day</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// function getGiftTypeDisplay(giftType) {
//   const displays = {
//     COFFEE: "☕ Coffee Gift",
//     GIFTCARD: "🎁 Gift Card",
//     CHOCOLATES: "🍫 Chocolates",
//     FLOWERS: "🌹 Flowers",
//     CUSTOM: "✨ Special Gift",
//   };
//   return displays[giftType] || "🎁 Gift";
// }
// function FulfillmentDisplay({ gift, accentColor }) {
//   const fulfillmentData = gift.fulfillmentData;
//   return (
//     <div className="space-y-4">
//       <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-6">
//         <div className="text-center">
//           <div className="text-4xl mb-3">🎉</div>
//           <h3 className="text-2xl font-bold text-green-800 mb-4">
//             Gift Accepted!
//           </h3>
//           {gift.giftType === "COFFEE" && fulfillmentData && (
//             <div>
//               <p className="text-gray-700 mb-4">
//                 Here's your coffee gift link:
//               </p>
//               <a
//                 href={fulfillmentData}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block px-6 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
//                 style={{ backgroundColor: accentColor }}
//               >
//                 ☕ Open Coffee Link
//               </a>
//             </div>
//           )}
//           {gift.giftType === "GIFTCARD" && fulfillmentData?.redemptionCode && (
//             <div>
//               <p className="text-gray-700 mb-3">Your gift card code:</p>
//               <div className="bg-white border-2 border-green-600 rounded-lg p-4 mb-4">
//                 <code className="text-2xl font-mono font-bold text-gray-800">
//                   {fulfillmentData.redemptionCode}
//                 </code>
//               </div>
//               {fulfillmentData.instructions && (
//                 <p className="text-sm text-gray-600">{fulfillmentData.instructions}</p>
//               )}
//             </div>
//           )}
//           {gift.giftType === "CHOCOLATES" && fulfillmentData && (
//             <div>
//               <p className="text-gray-700 mb-4">
//                 Your chocolate delivery is on the way!
//               </p>
//               <a
//                 href={fulfillmentData}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block px-6 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
//                 style={{ backgroundColor: accentColor }}
//               >
//                 🍫 Track Your Chocolates
//               </a>
//             </div>
//           )}
//           {gift.giftType === "FLOWERS" && fulfillmentData && (
//             <div>
//               <p className="text-gray-700 mb-4">
//                 Fresh flowers are being delivered to you!
//               </p>
//               <a
//                 href={fulfillmentData}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block px-6 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
//                 style={{ backgroundColor: accentColor }}
//               >
//                 🌹 Track Delivery
//               </a>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
// app/g/[slug]/page.js
// app/g/[slug]/page.js
"use client";
;
;
;
;
function GiftPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(54);
    if ($[0] !== "d4100e2ee1e20ce786afc4c3184ce4d1d6c808942129ddc9e23476a38e5ec490") {
        for(let $i = 0; $i < 54; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d4100e2ee1e20ce786afc4c3184ce4d1d6c808942129ddc9e23476a38e5ec490";
    }
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const slug = params?.slug;
    const [gift, setGift] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isUnwrapping, setIsUnwrapping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRevealed, setIsRevealed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] !== slug) {
        t0 = ({
            "GiftPage[useEffect()]": ()=>{
                if (!slug) {
                    return;
                }
                console.log("Fetching gift with slug:", slug);
                fetch(`/api/gift/${slug}`).then(_GiftPageUseEffectAnonymous).then({
                    "GiftPage[useEffect() > (anonymous)()]": (data)=>{
                        console.log("Received gift data:", data);
                        setGift(data);
                        setLoading(false);
                    }
                }["GiftPage[useEffect() > (anonymous)()]"]).catch({
                    "GiftPage[useEffect() > (anonymous)()]": (err)=>{
                        console.error("Error loading gift:", err);
                        setLoading(false);
                    }
                }["GiftPage[useEffect() > (anonymous)()]"]);
            }
        })["GiftPage[useEffect()]"];
        t1 = [
            slug
        ];
        $[1] = slug;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = function revealGift() {
            setIsUnwrapping(true);
            setTimeout({
                "GiftPage[revealGift > setTimeout()]": ()=>{
                    setIsRevealed(true);
                    setIsUnwrapping(false);
                }
            }["GiftPage[revealGift > setTimeout()]"], 2000);
        };
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const revealGift = t2;
    if (loading) {
        let t3;
        if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-2xl text-gray-600",
                    children: "Loading your gift... 💝"
                }, void 0, false, {
                    fileName: "[project]/src/app/g/[slug]/page.js",
                    lineNumber: 408,
                    columnNumber: 121
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/g/[slug]/page.js",
                lineNumber: 408,
                columnNumber: 12
            }, this);
            $[5] = t3;
        } else {
            t3 = $[5];
        }
        return t3;
    }
    if (!gift) {
        let t3;
        if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl mb-4",
                            children: "💔"
                        }, void 0, false, {
                            fileName: "[project]/src/app/g/[slug]/page.js",
                            lineNumber: 418,
                            columnNumber: 150
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-gray-800",
                            children: "Gift Not Found"
                        }, void 0, false, {
                            fileName: "[project]/src/app/g/[slug]/page.js",
                            lineNumber: 418,
                            columnNumber: 187
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mt-2",
                            children: "This gift link may have expired or is invalid."
                        }, void 0, false, {
                            fileName: "[project]/src/app/g/[slug]/page.js",
                            lineNumber: 418,
                            columnNumber: 255
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/g/[slug]/page.js",
                    lineNumber: 418,
                    columnNumber: 121
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/g/[slug]/page.js",
                lineNumber: 418,
                columnNumber: 12
            }, this);
            $[6] = t3;
        } else {
            t3 = $[6];
        }
        return t3;
    }
    const t3 = gift.backgroundColor || "#FFF5F7";
    const t4 = gift.backgroundImage && gift.backgroundImage !== "none" ? `url(/patterns/${gift.backgroundImage}.svg)` : "none";
    let t5;
    if ($[7] !== t3 || $[8] !== t4) {
        t5 = {
            backgroundColor: t3,
            backgroundImage: t4,
            backgroundSize: "200px",
            backgroundRepeat: "repeat"
        };
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const pageStyle = t5;
    const accentColor = gift.accentColor || "#FF69B4";
    const wrapping = gift.giftWrapping || "heart";
    const giftCardCode = typeof gift.giftConfig === "string" ? gift.giftConfig : gift.giftConfig?.code || gift.giftConfig?.giftCardCode || "No code provided";
    let t6;
    if ($[10] !== accentColor || $[11] !== isRevealed || $[12] !== isUnwrapping || $[13] !== wrapping) {
        t6 = !isRevealed && !isUnwrapping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GiftWrapping, {
            wrapping: wrapping,
            accentColor: accentColor
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 447,
            columnNumber: 42
        }, this);
        $[10] = accentColor;
        $[11] = isRevealed;
        $[12] = isUnwrapping;
        $[13] = wrapping;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== accentColor || $[16] !== isUnwrapping || $[17] !== wrapping) {
        t7 = isUnwrapping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UnwrappingAnimation, {
            wrapping: wrapping,
            accentColor: accentColor
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 458,
            columnNumber: 26
        }, this);
        $[15] = accentColor;
        $[16] = isUnwrapping;
        $[17] = wrapping;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    let t8;
    if ($[19] !== isRevealed) {
        t8 = isRevealed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-6xl mb-4 animate-bounce-in",
            children: "🎉"
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 468,
            columnNumber: 24
        }, this);
        $[19] = isRevealed;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    let t9;
    if ($[21] !== accentColor) {
        t9 = {
            color: accentColor
        };
        $[21] = accentColor;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    let t10;
    if ($[23] !== gift.recipientName || $[24] !== gift.senderName || $[25] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl md:text-4xl font-bold mb-2",
            style: t9,
            children: [
                gift.senderName,
                " → ",
                gift.recipientName
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 486,
            columnNumber: 11
        }, this);
        $[23] = gift.recipientName;
        $[24] = gift.senderName;
        $[25] = t9;
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    let t11;
    if ($[27] !== t10 || $[28] !== t6 || $[29] !== t7 || $[30] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-8",
            children: [
                t6,
                t7,
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 496,
            columnNumber: 11
        }, this);
        $[27] = t10;
        $[28] = t6;
        $[29] = t7;
        $[30] = t8;
        $[31] = t11;
    } else {
        t11 = $[31];
    }
    let t12;
    if ($[32] !== gift.questionText) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-50 rounded-2xl p-6 mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xl md:text-2xl text-gray-800 text-center font-medium",
                children: gift.questionText
            }, void 0, false, {
                fileName: "[project]/src/app/g/[slug]/page.js",
                lineNumber: 507,
                columnNumber: 60
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 507,
            columnNumber: 11
        }, this);
        $[32] = gift.questionText;
        $[33] = t12;
    } else {
        t12 = $[33];
    }
    let t13;
    if ($[34] !== gift.customMessage) {
        t13 = gift.customMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-700 text-center italic leading-relaxed",
                children: [
                    '"',
                    gift.customMessage,
                    '"'
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/g/[slug]/page.js",
                lineNumber: 515,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 515,
            columnNumber: 33
        }, this);
        $[34] = gift.customMessage;
        $[35] = t13;
    } else {
        t13 = $[35];
    }
    let t14;
    if ($[36] !== accentColor) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "px-6 py-2 rounded-full text-white font-semibold text-sm",
                style: {
                    backgroundColor: accentColor
                },
                children: "🎁 Gift Card"
            }, void 0, false, {
                fileName: "[project]/src/app/g/[slug]/page.js",
                lineNumber: 523,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 523,
            columnNumber: 11
        }, this);
        $[36] = accentColor;
        $[37] = t14;
    } else {
        t14 = $[37];
    }
    let t15;
    if ($[38] !== accentColor || $[39] !== giftCardCode || $[40] !== isRevealed || $[41] !== isUnwrapping) {
        t15 = !isRevealed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: revealGift,
                disabled: isUnwrapping,
                className: `px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 ${isUnwrapping ? "opacity-50 cursor-not-allowed" : ""}`,
                style: {
                    backgroundColor: accentColor
                },
                children: isUnwrapping ? "Opening..." : "Open Your Gift \uD83C\uDF81"
            }, void 0, false, {
                fileName: "[project]/src/app/g/[slug]/page.js",
                lineNumber: 533,
                columnNumber: 54
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 533,
            columnNumber: 25
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GiftCardDisplay, {
            code: giftCardCode,
            accentColor: accentColor
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 535,
            columnNumber: 89
        }, this);
        $[38] = accentColor;
        $[39] = giftCardCode;
        $[40] = isRevealed;
        $[41] = isUnwrapping;
        $[42] = t15;
    } else {
        t15 = $[42];
    }
    let t16;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 text-center text-gray-500 text-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Made with ❤️ for Valentine's Day"
            }, void 0, false, {
                fileName: "[project]/src/app/g/[slug]/page.js",
                lineNumber: 546,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 546,
            columnNumber: 11
        }, this);
        $[43] = t16;
    } else {
        t16 = $[43];
    }
    let t17;
    if ($[44] !== t11 || $[45] !== t12 || $[46] !== t13 || $[47] !== t14 || $[48] !== t15) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12",
                children: [
                    t11,
                    t12,
                    t13,
                    t14,
                    t15,
                    t16
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/g/[slug]/page.js",
                lineNumber: 553,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 553,
            columnNumber: 11
        }, this);
        $[44] = t11;
        $[45] = t12;
        $[46] = t13;
        $[47] = t14;
        $[48] = t15;
        $[49] = t17;
    } else {
        t17 = $[49];
    }
    let t18;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: "acbe2e7796943e35",
            children: "@keyframes bounce-in{0%{opacity:0;transform:scale(0)}50%{transform:scale(1.2)}to{opacity:1;transform:scale(1)}}@keyframes shake{0%,to{transform:rotate(0)}25%{transform:rotate(-10deg)}75%{transform:rotate(10deg)}}@keyframes unwrap{0%{opacity:1;transform:scale(1)rotate(0)}50%{transform:scale(1.3)rotate(180deg)}to{opacity:0;transform:scale(0)rotate(360deg)}}@keyframes float-away{0%{opacity:1;transform:translateY(0)scale(1)}to{opacity:0;transform:translateY(-100px)scale(.5)}}@keyframes pulse{0%,to{transform:scale(1)}50%{transform:scale(1.05)}}.animate-bounce-in.jsx-acbe2e7796943e35{animation:.6s cubic-bezier(.68,-.55,.265,1.55) bounce-in}.animate-shake.jsx-acbe2e7796943e35{animation:.5s ease-in-out infinite shake}.animate-unwrap.jsx-acbe2e7796943e35{animation:2s ease-in-out forwards unwrap}.animate-float-away.jsx-acbe2e7796943e35{animation:1s ease-out forwards float-away}.animate-gentle-pulse.jsx-acbe2e7796943e35{animation:2s ease-in-out infinite pulse}"
        }, void 0, false, void 0, this);
        $[50] = t18;
    } else {
        t18 = $[50];
    }
    let t19;
    if ($[51] !== pageStyle || $[52] !== t17) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center p-6",
            style: pageStyle,
            children: [
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 572,
            columnNumber: 11
        }, this);
        $[51] = pageStyle;
        $[52] = t17;
        $[53] = t19;
    } else {
        t19 = $[53];
    }
    return t19;
}
_s(GiftPage, "dZl1ouOz2LCymBChRTg1HJRDaEE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = GiftPage;
// Gift Wrapping Component (before opening)
function _GiftPageUseEffectAnonymous(res) {
    console.log("Response status:", res.status);
    return res.json();
}
function GiftWrapping(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "d4100e2ee1e20ce786afc4c3184ce4d1d6c808942129ddc9e23476a38e5ec490") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d4100e2ee1e20ce786afc4c3184ce4d1d6c808942129ddc9e23476a38e5ec490";
    }
    const { wrapping } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            heart: {
                emoji: "\uD83D\uDC9D",
                label: "Heart Box"
            },
            basket: {
                emoji: "\uD83E\uDDFA",
                label: "Gift Basket"
            },
            bear: {
                emoji: "\uD83E\uDDF8",
                label: "Teddy Bear"
            },
            box: {
                emoji: "\uD83C\uDF81",
                label: "Gift Box"
            },
            envelope: {
                emoji: "\uD83D\uDC8C",
                label: "Love Letter"
            }
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const wrappingData = t1;
    const selected = wrappingData[wrapping] || wrappingData.heart;
    let t2;
    if ($[2] !== selected.emoji) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-8xl mb-4 animate-gentle-pulse cursor-pointer hover:animate-shake transition-all",
            children: selected.emoji
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 630,
            columnNumber: 10
        }, this);
        $[2] = selected.emoji;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== selected.label) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500 italic",
            children: selected.label
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 638,
            columnNumber: 10
        }, this);
        $[4] = selected.label;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -top-2 -right-2 animate-gentle-pulse",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-12 h-12 text-yellow-400",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                }, void 0, false, {
                    fileName: "[project]/src/app/g/[slug]/page.js",
                    lineNumber: 646,
                    columnNumber: 156
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/g/[slug]/page.js",
                lineNumber: 646,
                columnNumber: 73
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 646,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t2 || $[8] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 653,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t3;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    return t5;
}
_c1 = GiftWrapping;
// Unwrapping Animation Component
function UnwrappingAnimation(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "d4100e2ee1e20ce786afc4c3184ce4d1d6c808942129ddc9e23476a38e5ec490") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d4100e2ee1e20ce786afc4c3184ce4d1d6c808942129ddc9e23476a38e5ec490";
    }
    const { wrapping } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            heart: {
                emoji: "\uD83D\uDC9D"
            },
            basket: {
                emoji: "\uD83E\uDDFA"
            },
            bear: {
                emoji: "\uD83E\uDDF8"
            },
            box: {
                emoji: "\uD83C\uDF81"
            },
            envelope: {
                emoji: "\uD83D\uDC8C"
            }
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const wrappingData = t1;
    const selected = wrappingData[wrapping] || wrappingData.heart;
    let t2;
    if ($[2] !== selected.emoji) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-8xl mb-4 animate-unwrap",
            children: selected.emoji
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 702,
            columnNumber: 10
        }, this);
        $[2] = selected.emoji;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute text-4xl animate-float-away",
            style: {
                animationDelay: "0s",
                left: "20%"
            },
            children: "✨"
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 710,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute text-4xl animate-float-away",
            style: {
                animationDelay: "0.3s",
                left: "50%"
            },
            children: "✨"
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 720,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 flex items-center justify-center pointer-events-none",
            children: [
                t3,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute text-4xl animate-float-away",
                    style: {
                        animationDelay: "0.6s",
                        left: "80%"
                    },
                    children: "✨"
                }, void 0, false, {
                    fileName: "[project]/src/app/g/[slug]/page.js",
                    lineNumber: 731,
                    columnNumber: 105
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 731,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500 italic mt-4",
            children: "Opening your gift..."
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 735,
            columnNumber: 10
        }, this);
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[8] !== t2) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-32",
            children: [
                t2,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 744,
            columnNumber: 10
        }, this);
        $[8] = t2;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    return t7;
}
_c2 = UnwrappingAnimation;
// Gift Card Display Component
function GiftCardDisplay(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "d4100e2ee1e20ce786afc4c3184ce4d1d6c808942129ddc9e23476a38e5ec490") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d4100e2ee1e20ce786afc4c3184ce4d1d6c808942129ddc9e23476a38e5ec490";
    }
    const { code, accentColor } = t0;
    let t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-4xl mb-3",
            children: "🎉"
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 770,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-green-800 mb-4",
            children: "Gift Card Revealed!"
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 771,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-700 mb-3 font-medium",
            children: "Your gift card code:"
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 772,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
    } else {
        t1 = $[1];
        t2 = $[2];
        t3 = $[3];
    }
    let t4;
    if ($[4] !== code) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white border-2 border-green-600 rounded-lg p-6 mb-4 shadow-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                className: "text-2xl md:text-3xl font-mono font-bold text-gray-800 break-all",
                children: code
            }, void 0, false, {
                fileName: "[project]/src/app/g/[slug]/page.js",
                lineNumber: 783,
                columnNumber: 95
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 783,
            columnNumber: 10
        }, this);
        $[4] = code;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-semibold",
            children: "To redeem:"
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 792,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 793,
            columnNumber: 10
        }, this);
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "https://amazon.com",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "underline font-semibold",
            children: "Amazon.com "
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 802,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-blue-800",
                children: [
                    t5,
                    t6,
                    "Visit ",
                    t7,
                    "or see ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://www.amazon.com/gp/help/customer/display.html?nodeId=G5D4TA7NBKQT7GW2",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "underline font-semibold",
                        children: "Redeem an Amazon Gift Card"
                    }, void 0, false, {
                        fileName: "[project]/src/app/g/[slug]/page.js",
                        lineNumber: 809,
                        columnNumber: 143
                    }, this),
                    " for more help"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/g/[slug]/page.js",
                lineNumber: 809,
                columnNumber: 81
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 809,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] !== code) {
        t9 = ({
            "GiftCardDisplay[<button>.onClick]": ()=>{
                navigator.clipboard.writeText(code);
                alert("Gift card code copied to clipboard!");
            }
        })["GiftCardDisplay[<button>.onClick]"];
        $[10] = code;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] !== accentColor) {
        t10 = {
            backgroundColor: accentColor
        };
        $[12] = accentColor;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] !== t10 || $[15] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t9,
            className: "mt-4 px-6 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-opacity shadow-md",
            style: t10,
            children: "📋 Copy Code"
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 839,
            columnNumber: 11
        }, this);
        $[14] = t10;
        $[15] = t9;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== t11 || $[18] !== t4) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 animate-bounce-in",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-green-50 border-2 border-green-500 rounded-2xl p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        t1,
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                t3,
                                t4,
                                t8,
                                t11
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/g/[slug]/page.js",
                            lineNumber: 848,
                            columnNumber: 164
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/g/[slug]/page.js",
                    lineNumber: 848,
                    columnNumber: 127
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/g/[slug]/page.js",
                lineNumber: 848,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 848,
            columnNumber: 11
        }, this);
        $[17] = t11;
        $[18] = t4;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    return t12;
}
_c3 = GiftCardDisplay;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "GiftPage");
__turbopack_context__.k.register(_c1, "GiftWrapping");
__turbopack_context__.k.register(_c2, "UnwrappingAnimation");
__turbopack_context__.k.register(_c3, "GiftCardDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/compiled/client-only/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/node_modules/styled-jsx/dist/index/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
__turbopack_context__.r("[project]/node_modules/next/dist/compiled/client-only/index.js [app-client] (ecmascript)");
var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/ function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var isProd = typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && ("TURBOPACK compile-time value", "development") === "production";
var isString = function(o) {
    return Object.prototype.toString.call(o) === "[object String]";
};
var StyleSheet = /*#__PURE__*/ function() {
    function StyleSheet(param) {
        var ref = param === void 0 ? {} : param, _name = ref.name, name = _name === void 0 ? "stylesheet" : _name, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? isProd : _optimizeForSpeed;
        invariant$1(isString(name), "`name` must be a string");
        this._name = name;
        this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
        invariant$1(typeof optimizeForSpeed === "boolean", "`optimizeForSpeed` must be a boolean");
        this._optimizeForSpeed = optimizeForSpeed;
        this._serverSheet = undefined;
        this._tags = [];
        this._injected = false;
        this._rulesCount = 0;
        var node = typeof window !== "undefined" && document.querySelector('meta[property="csp-nonce"]');
        this._nonce = node ? node.getAttribute("content") : null;
    }
    var _proto = StyleSheet.prototype;
    _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
        invariant$1(typeof bool === "boolean", "`setOptimizeForSpeed` accepts a boolean");
        invariant$1(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted");
        this.flush();
        this._optimizeForSpeed = bool;
        this.inject();
    };
    _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
        return this._optimizeForSpeed;
    };
    _proto.inject = function inject() {
        var _this = this;
        invariant$1(!this._injected, "sheet already injected");
        this._injected = true;
        if (typeof window !== "undefined" && this._optimizeForSpeed) {
            this._tags[0] = this.makeStyleTag(this._name);
            this._optimizeForSpeed = "insertRule" in this.getSheet();
            if (!this._optimizeForSpeed) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.");
                }
                this.flush();
                this._injected = true;
            }
            return;
        }
        this._serverSheet = {
            cssRules: [],
            insertRule: function(rule, index) {
                if (typeof index === "number") {
                    _this._serverSheet.cssRules[index] = {
                        cssText: rule
                    };
                } else {
                    _this._serverSheet.cssRules.push({
                        cssText: rule
                    });
                }
                return index;
            },
            deleteRule: function(index) {
                _this._serverSheet.cssRules[index] = null;
            }
        };
    };
    _proto.getSheetForTag = function getSheetForTag(tag) {
        if (tag.sheet) {
            return tag.sheet;
        }
        // this weirdness brought to you by firefox
        for(var i = 0; i < document.styleSheets.length; i++){
            if (document.styleSheets[i].ownerNode === tag) {
                return document.styleSheets[i];
            }
        }
    };
    _proto.getSheet = function getSheet() {
        return this.getSheetForTag(this._tags[this._tags.length - 1]);
    };
    _proto.insertRule = function insertRule(rule, index) {
        invariant$1(isString(rule), "`insertRule` accepts only strings");
        if (typeof window === "undefined") {
            if (typeof index !== "number") {
                index = this._serverSheet.cssRules.length;
            }
            this._serverSheet.insertRule(rule, index);
            return this._rulesCount++;
        }
        if (this._optimizeForSpeed) {
            var sheet = this.getSheet();
            if (typeof index !== "number") {
                index = sheet.cssRules.length;
            }
            // this weirdness for perf, and chrome's weird bug
            // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                return -1;
            }
        } else {
            var insertionPoint = this._tags[index];
            this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
        }
        return this._rulesCount++;
    };
    _proto.replaceRule = function replaceRule(index, rule) {
        if (this._optimizeForSpeed || typeof window === "undefined") {
            var sheet = typeof window !== "undefined" ? this.getSheet() : this._serverSheet;
            if (!rule.trim()) {
                rule = this._deletedRulePlaceholder;
            }
            if (!sheet.cssRules[index]) {
                // @TBD Should we throw an error?
                return index;
            }
            sheet.deleteRule(index);
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                // In order to preserve the indices we insert a deleteRulePlaceholder
                sheet.insertRule(this._deletedRulePlaceholder, index);
            }
        } else {
            var tag = this._tags[index];
            invariant$1(tag, "old rule at index `" + index + "` not found");
            tag.textContent = rule;
        }
        return index;
    };
    _proto.deleteRule = function deleteRule(index) {
        if (typeof window === "undefined") {
            this._serverSheet.deleteRule(index);
            return;
        }
        if (this._optimizeForSpeed) {
            this.replaceRule(index, "");
        } else {
            var tag = this._tags[index];
            invariant$1(tag, "rule at index `" + index + "` not found");
            tag.parentNode.removeChild(tag);
            this._tags[index] = null;
        }
    };
    _proto.flush = function flush() {
        this._injected = false;
        this._rulesCount = 0;
        if (typeof window !== "undefined") {
            this._tags.forEach(function(tag) {
                return tag && tag.parentNode.removeChild(tag);
            });
            this._tags = [];
        } else {
            // simpler on server
            this._serverSheet.cssRules = [];
        }
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        if (typeof window === "undefined") {
            return this._serverSheet.cssRules;
        }
        return this._tags.reduce(function(rules, tag) {
            if (tag) {
                rules = rules.concat(Array.prototype.map.call(_this.getSheetForTag(tag).cssRules, function(rule) {
                    return rule.cssText === _this._deletedRulePlaceholder ? null : rule;
                }));
            } else {
                rules.push(null);
            }
            return rules;
        }, []);
    };
    _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
        if (cssString) {
            invariant$1(isString(cssString), "makeStyleTag accepts only strings as second parameter");
        }
        var tag = document.createElement("style");
        if (this._nonce) tag.setAttribute("nonce", this._nonce);
        tag.type = "text/css";
        tag.setAttribute("data-" + name, "");
        if (cssString) {
            tag.appendChild(document.createTextNode(cssString));
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        if (relativeToTag) {
            head.insertBefore(tag, relativeToTag);
        } else {
            head.appendChild(tag);
        }
        return tag;
    };
    _createClass(StyleSheet, [
        {
            key: "length",
            get: function get() {
                return this._rulesCount;
            }
        }
    ]);
    return StyleSheet;
}();
function invariant$1(condition, message) {
    if (!condition) {
        throw new Error("StyleSheet: " + message + ".");
    }
}
function hash(str) {
    var _$hash = 5381, i = str.length;
    while(i){
        _$hash = _$hash * 33 ^ str.charCodeAt(--i);
    }
    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */ return _$hash >>> 0;
}
var stringHash = hash;
var sanitize = function(rule) {
    return rule.replace(/\/style/gi, "\\/style");
};
var cache = {};
/**
 * computeId
 *
 * Compute and memoize a jsx id from a basedId and optionally props.
 */ function computeId(baseId, props) {
    if (!props) {
        return "jsx-" + baseId;
    }
    var propsToString = String(props);
    var key = baseId + propsToString;
    if (!cache[key]) {
        cache[key] = "jsx-" + stringHash(baseId + "-" + propsToString);
    }
    return cache[key];
}
/**
 * computeSelector
 *
 * Compute and memoize dynamic selectors.
 */ function computeSelector(id, css) {
    var selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    // Sanitize SSR-ed CSS.
    // Client side code doesn't need to be sanitized since we use
    // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
    if (typeof window === "undefined") {
        css = sanitize(css);
    }
    var idcss = id + css;
    if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
    }
    return cache[idcss];
}
function mapRulesToStyle(cssRules, options) {
    if (options === void 0) options = {};
    return cssRules.map(function(args) {
        var id = args[0];
        var css = args[1];
        return /*#__PURE__*/ React__default["default"].createElement("style", {
            id: "__" + id,
            // Avoid warnings upon render with a key
            key: "__" + id,
            nonce: options.nonce ? options.nonce : undefined,
            dangerouslySetInnerHTML: {
                __html: css
            }
        });
    });
}
var StyleSheetRegistry = /*#__PURE__*/ function() {
    function StyleSheetRegistry(param) {
        var ref = param === void 0 ? {} : param, _styleSheet = ref.styleSheet, styleSheet = _styleSheet === void 0 ? null : _styleSheet, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? false : _optimizeForSpeed;
        this._sheet = styleSheet || new StyleSheet({
            name: "styled-jsx",
            optimizeForSpeed: optimizeForSpeed
        });
        this._sheet.inject();
        if (styleSheet && typeof optimizeForSpeed === "boolean") {
            this._sheet.setOptimizeForSpeed(optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    }
    var _proto = StyleSheetRegistry.prototype;
    _proto.add = function add(props) {
        var _this = this;
        if (undefined === this._optimizeForSpeed) {
            this._optimizeForSpeed = Array.isArray(props.children);
            this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        if (typeof window !== "undefined" && !this._fromServer) {
            this._fromServer = this.selectFromServer();
            this._instancesCounts = Object.keys(this._fromServer).reduce(function(acc, tagName) {
                acc[tagName] = 0;
                return acc;
            }, {});
        }
        var ref = this.getIdAndRules(props), styleId = ref.styleId, rules = ref.rules;
        // Deduping: just increase the instances count.
        if (styleId in this._instancesCounts) {
            this._instancesCounts[styleId] += 1;
            return;
        }
        var indices = rules.map(function(rule) {
            return _this._sheet.insertRule(rule);
        }) // Filter out invalid rules
        .filter(function(index) {
            return index !== -1;
        });
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
    };
    _proto.remove = function remove(props) {
        var _this = this;
        var styleId = this.getIdAndRules(props).styleId;
        invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
        this._instancesCounts[styleId] -= 1;
        if (this._instancesCounts[styleId] < 1) {
            var tagFromServer = this._fromServer && this._fromServer[styleId];
            if (tagFromServer) {
                tagFromServer.parentNode.removeChild(tagFromServer);
                delete this._fromServer[styleId];
            } else {
                this._indices[styleId].forEach(function(index) {
                    return _this._sheet.deleteRule(index);
                });
                delete this._indices[styleId];
            }
            delete this._instancesCounts[styleId];
        }
    };
    _proto.update = function update(props, nextProps) {
        this.add(nextProps);
        this.remove(props);
    };
    _proto.flush = function flush() {
        this._sheet.flush();
        this._sheet.inject();
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function(styleId) {
            return [
                styleId,
                _this._fromServer[styleId]
            ];
        }) : [];
        var cssRules = this._sheet.cssRules();
        return fromServer.concat(Object.keys(this._indices).map(function(styleId) {
            return [
                styleId,
                _this._indices[styleId].map(function(index) {
                    return cssRules[index].cssText;
                }).join(_this._optimizeForSpeed ? "" : "\n")
            ];
        }) // filter out empty rules
        .filter(function(rule) {
            return Boolean(rule[1]);
        }));
    };
    _proto.styles = function styles(options) {
        return mapRulesToStyle(this.cssRules(), options);
    };
    _proto.getIdAndRules = function getIdAndRules(props) {
        var css = props.children, dynamic = props.dynamic, id = props.id;
        if (dynamic) {
            var styleId = computeId(id, dynamic);
            return {
                styleId: styleId,
                rules: Array.isArray(css) ? css.map(function(rule) {
                    return computeSelector(styleId, rule);
                }) : [
                    computeSelector(styleId, css)
                ]
            };
        }
        return {
            styleId: computeId(id),
            rules: Array.isArray(css) ? css : [
                css
            ]
        };
    };
    /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */ _proto.selectFromServer = function selectFromServer() {
        var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
        return elements.reduce(function(acc, element) {
            var id = element.id.slice(2);
            acc[id] = element;
            return acc;
        }, {});
    };
    return StyleSheetRegistry;
}();
function invariant(condition, message) {
    if (!condition) {
        throw new Error("StyleSheetRegistry: " + message + ".");
    }
}
var StyleSheetContext = /*#__PURE__*/ React.createContext(null);
StyleSheetContext.displayName = "StyleSheetContext";
function createStyleRegistry() {
    return new StyleSheetRegistry();
}
function StyleRegistry(param) {
    var configuredRegistry = param.registry, children = param.children;
    var rootRegistry = React.useContext(StyleSheetContext);
    var ref = React.useState({
        "StyleRegistry.useState[ref]": function() {
            return rootRegistry || configuredRegistry || createStyleRegistry();
        }
    }["StyleRegistry.useState[ref]"]), registry = ref[0];
    return /*#__PURE__*/ React__default["default"].createElement(StyleSheetContext.Provider, {
        value: registry
    }, children);
}
function useStyleRegistry() {
    return React.useContext(StyleSheetContext);
}
// Opt-into the new `useInsertionEffect` API in React 18, fallback to `useLayoutEffect`.
// https://github.com/reactwg/react-18/discussions/110
var useInsertionEffect = React__default["default"].useInsertionEffect || React__default["default"].useLayoutEffect;
var defaultRegistry = typeof window !== "undefined" ? createStyleRegistry() : undefined;
function JSXStyle(props) {
    var registry = defaultRegistry ? defaultRegistry : useStyleRegistry();
    // If `registry` does not exist, we do nothing here.
    if (!registry) {
        return null;
    }
    if (typeof window === "undefined") {
        registry.add(props);
        return null;
    }
    useInsertionEffect({
        "JSXStyle.useInsertionEffect": function() {
            registry.add(props);
            return ({
                "JSXStyle.useInsertionEffect": function() {
                    registry.remove(props);
                }
            })["JSXStyle.useInsertionEffect"];
        // props.children can be string[], will be striped since id is identical
        }
    }["JSXStyle.useInsertionEffect"], [
        props.id,
        String(props.dynamic)
    ]);
    return null;
}
JSXStyle.dynamic = function(info) {
    return info.map(function(tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return computeId(baseId, props);
    }).join(" ");
};
exports.StyleRegistry = StyleRegistry;
exports.createStyleRegistry = createStyleRegistry;
exports.style = JSXStyle;
exports.useStyleRegistry = useStyleRegistry;
}),
"[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/styled-jsx/dist/index/index.js [app-client] (ecmascript)").style;
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_f9fce7a5._.js.map