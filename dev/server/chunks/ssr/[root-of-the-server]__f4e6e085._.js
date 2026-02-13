module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/src/app/g/[slug]/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
__turbopack_context__.s([
    "default",
    ()=>GiftPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../../lib/prisma'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
async function GiftPage({ params }) {
    const gift = await prisma.gift.findUnique({
        where: {
            slug: params.slug
        }
    });
    if (!gift) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Gift not found 💔"
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 92,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "You’ve been sent a gift 💝"
            }, void 0, false, {
                fileName: "[project]/src/app/g/[slug]/page.js",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                children: JSON.stringify(gift, null, 2)
            }, void 0, false, {
                fileName: "[project]/src/app/g/[slug]/page.js",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/g/[slug]/page.js",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/g/[slug]/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/g/[slug]/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f4e6e085._.js.map