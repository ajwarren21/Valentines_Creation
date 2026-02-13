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
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/lib/prisma.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
// lib/prisma.js
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/adapter-pg/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dotenv$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dotenv/config.js [app-rsc] (ecmascript)"); // ensure env vars are loaded
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
// const globalForPrisma = globalThis;
const connectionString = process.env.DATABASE_URL;
const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaPg"]({
    connectionString
});
const prisma = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]({
    adapter
});
;
 // export const prisma =
 //   globalForPrisma.prisma ||
 //   new PrismaClient({
 //     log: ["query"], // optional
 //     // adapter: "postgresql", // <--- REQUIRED in Prisma 7 for local Postgres
 //   });
 // if (process.env.NODE_ENV !== "production") {
 //   globalForPrisma.prisma = prisma;
 // }
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/g/[slug]/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>GiftPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function GiftPage({ params }) {
    // const gift = await prisma.gift.findUnique({
    //   where: { slug: params.slug },
    // });
    const gift = null;
    if ("TURBOPACK compile-time truthy", 1) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Gift not found 💔"
        }, void 0, false, {
            fileName: "[project]/src/app/g/[slug]/page.js",
            lineNumber: 93,
            columnNumber: 12
        }, this);
    }
    //TURBOPACK unreachable
    ;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/g/[slug]/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/g/[slug]/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__48c27e83._.js.map