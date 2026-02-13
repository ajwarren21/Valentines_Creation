module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/lib/fulfillment.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fulfillGift",
    ()=>fulfillGift
]);
async function fulfillGift(gift) {
    switch(gift.giftType){
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
        milk: config.milk
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
        amount: config.amount
    };
}
}),
"[project]/src/app/api/gift/[slug]/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PATCH",
    ()=>PATCH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fulfillment$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/fulfillment.js [app-route] (ecmascript)");
;
async function PATCH(req, { params }) {
    const gift = await prisma.gift.findUnique({
        where: {
            slug: params.slug
        }
    });
    if (!gift || gift.status === "ACCEPTED") {
        return NextResponse.json({
            error: "Invalid state"
        }, {
            status: 400
        });
    }
    const fulfillmentResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fulfillment$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fulfillGift"])(gift);
    await prisma.gift.update({
        where: {
            id: gift.id
        },
        data: {
            status: "FULFILLED",
            respondedAt: new Date(),
            giftConfig: {
                ...gift.giftConfig,
                fulfillmentResult
            }
        }
    });
    return NextResponse.json({
        fulfillmentResult
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a45a8a1c._.js.map