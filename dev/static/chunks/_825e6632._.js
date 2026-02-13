(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/GiftTypeSelector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GiftTypeSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function GiftTypeSelector(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "9257a57398d2d0aa1cb530bb63e72fd53fdb79563f5a7906cb4054072178619f") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9257a57398d2d0aa1cb530bb63e72fd53fdb79563f5a7906cb4054072178619f";
    }
    const { value, onChange } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block mb-2 text-pink-600 font-semibold",
            children: "Gift Type"
        }, void 0, false, {
            fileName: "[project]/components/GiftTypeSelector.js",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== onChange) {
        t2 = ({
            "GiftTypeSelector[<select>.onChange]": (e)=>onChange(e.target.value)
        })["GiftTypeSelector[<select>.onChange]"];
        $[2] = onChange;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    let t4;
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "COFFEE",
            children: "☕ Coffee"
        }, void 0, false, {
            fileName: "[project]/components/GiftTypeSelector.js",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "GIFTCARD",
            children: "💳 Gift Card"
        }, void 0, false, {
            fileName: "[project]/components/GiftTypeSelector.js",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "CHOCOLATES",
            children: "🍫 Chocolates"
        }, void 0, false, {
            fileName: "[project]/components/GiftTypeSelector.js",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
    } else {
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
    }
    let t6;
    if ($[7] !== t2 || $[8] !== value) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    className: "border p-2 w-full text-gray-900 placeholder:text-gray-500",
                    value: value,
                    onChange: t2,
                    children: [
                        t3,
                        t4,
                        t5
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/GiftTypeSelector.js",
                    lineNumber: 50,
                    columnNumber: 36
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/GiftTypeSelector.js",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = value;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    return t6;
} // export default function GiftTypeSelector({ value, onChange }) {
 //   return (
 //     <div className="flex gap-3">
 //       <button
 //         onClick={() => onChange("COFFEE")}
 //         className={value === "COFFEE" ? "bg-pink-500 text-white" : "bg-gray-200"}
 //       >
 //         Coffee
 //       </button>
 //       <button
 //         onClick={() => onChange("GIFTCARD")}
 //         className={value === "GIFTCARD" ? "bg-pink-500 text-white" : "bg-gray-200"}
 //       >
 //         Gift Card
 //       </button>
 //       <button
 //         onClick={() => onChange("CHOCOLATES")}
 //         className={value === "CHOCOLATES" ? "bg-pink-500 text-white" : "bg-gray-200"}
 //       >
 //         Chocolates
 //       </button>
 //     </div>
 //   );
 // }
_c = GiftTypeSelector;
var _c;
__turbopack_context__.k.register(_c, "GiftTypeSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CoffeeConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CoffeeConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function CoffeeConfig(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "f06903d45430147cb8cc009527ad843c75cee667512c177c3a4aa1d1867725c2") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f06903d45430147cb8cc009527ad843c75cee667512c177c3a4aa1d1867725c2";
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-2 text-pink-600 font-semibold",
                children: "IN DEVELOPMENT "
            }, void 0, false, {
                fileName: "[project]/components/CoffeeConfig.js",
                lineNumber: 14,
                columnNumber: 12
            }, this)
        }, void 0, false);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    return t1;
}
_c = CoffeeConfig;
var _c;
__turbopack_context__.k.register(_c, "CoffeeConfig");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/GiftCardConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GiftCardConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function GiftCardConfig(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "cbf65a7d49710574831ebdcb1051153cd114e38ddf3c222247ae7d9d055e957b") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cbf65a7d49710574831ebdcb1051153cd114e38ddf3c222247ae7d9d055e957b";
    }
    const { value, onChange } = t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-purple-700 font-bold text-lg",
            children: [
                "Buy Card Here: ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://www.amazon.com/dp/B0DSBM8T1M?ref=altParentAsins_treatment_text_from_Any_to_Appreciation&th=1",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "font-medium text-fg-brand underline hover:no-underline",
                    children: "Giftcard"
                }, void 0, false, {
                    fileName: "[project]/components/GiftCardConfig.js",
                    lineNumber: 21,
                    columnNumber: 74
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/GiftCardConfig.js",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block mb-2 text-pink-600 font-semibold",
            children: "Insert Code Here: "
        }, void 0, false, {
            fileName: "[project]/components/GiftCardConfig.js",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    const t3 = value.code || "";
    let t4;
    if ($[3] !== onChange || $[4] !== value) {
        t4 = ({
            "GiftCardConfig[<input>.onChange]": (e)=>onChange({
                    ...value,
                    code: String(e.target.value)
                })
        })["GiftCardConfig[<input>.onChange]"];
        $[3] = onChange;
        $[4] = value;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t3 || $[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: "border p-2 w-full mb-2 text-gray-900 placeholder:text-gray-500",
            type: "text",
            placeholder: "Giftcard code",
            value: t3,
            onChange: t4
        }, void 0, false, {
            fileName: "[project]/components/GiftCardConfig.js",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[6] = t3;
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500",
            children: "(No Stripe integration for now)"
        }, void 0, false, {
            fileName: "[project]/components/GiftCardConfig.js",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t5) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    t1,
                    t2,
                    t5,
                    t6
                ]
            }, void 0, true, {
                fileName: "[project]/components/GiftCardConfig.js",
                lineNumber: 62,
                columnNumber: 12
            }, this)
        }, void 0, false);
        $[10] = t5;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    return t7;
}
_c = GiftCardConfig;
var _c;
__turbopack_context__.k.register(_c, "GiftCardConfig");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ChocolateConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChocolateConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function ChocolateConfig(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "19cae116925a0ff6d04698593b39834bde5d5c457e5fb298a7120f45f7e7b525") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "19cae116925a0ff6d04698593b39834bde5d5c457e5fb298a7120f45f7e7b525";
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-2 text-pink-600 font-semibold",
                children: "IN DEVELOPMENT "
            }, void 0, false, {
                fileName: "[project]/components/ChocolateConfig.js",
                lineNumber: 14,
                columnNumber: 12
            }, this)
        }, void 0, false);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    return t1;
}
_c = ChocolateConfig;
var _c;
__turbopack_context__.k.register(_c, "ChocolateConfig");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CustomizationPanel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomizationPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
// // components/CustomizationPanel.js
// "use client";
// export default function CustomizationPanel({ value, onChange }) {
//   const themes = [
//     { id: "classic", name: "Classic Romance", bg: "#FFF5F7", accent: "#FF69B4" },
//     { id: "elegant", name: "Elegant", bg: "#F5F5F0", accent: "#D4AF37" },
//     { id: "playful", name: "Playful", bg: "#FFE5E5", accent: "#FF1493" },
//     { id: "modern", name: "Modern", bg: "#FFFFFF", accent: "#E91E63" },
//   ];
//   const backgroundImages = [
//     { id: "none", name: "Solid Color", preview: null },
//     { id: "hearts", name: "Floating Hearts", preview: "/patterns/hearts.svg" },
//     { id: "roses", name: "Rose Pattern", preview: "/patterns/roses.svg" },
//     { id: "abstract", name: "Abstract", preview: "/patterns/abstract.svg" },
//   ];
//   const giftWrappings = [
//     { id: "heart", name: "Heart Box", emoji: "💝", description: "Classic heart-shaped box" },
//     { id: "basket", name: "Gift Basket", emoji: "🧺", description: "Wicker basket with bow" },
//     { id: "bear", name: "Teddy Bear", emoji: "🧸", description: "Cute teddy bear holding gift" },
//     { id: "box", name: "Gift Box", emoji: "🎁", description: "Traditional wrapped box" },
//     { id: "envelope", name: "Love Letter", emoji: "💌", description: "Sealed with a kiss" },
//   ];
//   const handleThemeChange = (theme) => {
//     onChange({
//       ...value,
//       theme: theme.id,
//       backgroundColor: theme.bg,
//       accentColor: theme.accent,
//     });
//   };
//   return (
//     <div className="grid grid-cols-3 gap-8">
//       {/* LEFT SIDE CONTROLS */}
//       <div className="col-span-1">
//         <div className="space-y-6 p-4 border rounded-lg bg-white">
//           <h3 className="text-lg text-purple-700 font-semibold">Customize Your Gift Page</h3>
//           {/* Theme Presets */}
//           <div>
//             <label className="block text-sm text-pink-600 font-medium mb-2">Theme</label>
//             <div className="grid grid-cols-2 gap-3">
//               {themes.map((theme) => (
//                 <button
//                   key={theme.id}
//                   onClick={() => handleThemeChange(theme)}
//                   className={`p-3 border-2 rounded-lg text-left transition-all ${
//                     value.theme === theme.id
//                       ? "border-pink-500 bg-pink-50"
//                       : "border-gray-200 hover:border-pink-300"
//                   }`}
//                 >
//                   <div className="flex items-center gap-2 mb-1">
//                     <div
//                       className="w-6 h-6 rounded-full border-2"
//                       style={{ backgroundColor: theme.bg, borderColor: theme.accent }}
//                     />
//                     <span className="text-sm font-medium">{theme.name}</span>
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>
//           {/* Custom Colors */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm text-pink-600 font-medium mb-2">Background Color</label>
//               <div className="flex gap-2">
//                 <input
//                   type="color"
//                   value={value.backgroundColor || "#FFF5F7"}
//                   onChange={(e) => onChange({ ...value, backgroundColor: e.target.value })}
//                   className="w-12 h-10 rounded cursor-pointer"
//                 />
//                 <input
//                   type="text"
//                   value={value.backgroundColor || "#FFF5F7"}
//                   onChange={(e) => onChange({ ...value, backgroundColor: e.target.value })}
//                   className="flex-1 border rounded px-2 text-sm"
//                   placeholder="#FFF5F7"
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-2">Accent Color</label>
//               <div className="flex gap-2">
//                 <input
//                   type="color"
//                   value={value.accentColor || "#FF69B4"}
//                   onChange={(e) => onChange({ ...value, accentColor: e.target.value })}
//                   className="w-12 h-10 rounded cursor-pointer"
//                 />
//                 <input
//                   type="text"
//                   value={value.accentColor || "#FF69B4"}
//                   onChange={(e) => onChange({ ...value, accentColor: e.target.value })}
//                   className="flex-1 border rounded px-2 text-sm"
//                   placeholder="#FF69B4"
//                 />
//               </div>
//             </div>
//           </div>
//           {/* Background Pattern */}
//           <div>
//             <label className="block text-sm text-pink-600 font-medium mb-2">Background Pattern</label>
//             <div className="grid grid-cols-2 gap-3">
//               {backgroundImages.map((bg) => (
//                 <button
//                   key={bg.id}
//                   onClick={() => onChange({ ...value, backgroundImage: bg.id })}
//                   className={`p-3 border-2 rounded-lg text-center transition-all ${
//                     value.backgroundImage === bg.id
//                       ? "border-pink-500 bg-pink-50"
//                       : "border-gray-200 hover:border-pink-300"
//                   }`}
//                 >
//                   <div className="text-sm font-medium">{bg.name}</div>
//                 </button>
//               ))}
//             </div>
//           </div>
//           {/* Gift Wrapping Selection */}
//           <div>
//             <label className="block text-sm text-pink-600 font-medium mb-2">Gift Wrapping</label>
//             <p className="text-xs text-gray-500 mb-3">Choose how your gift will be presented</p>
//             <div className="grid grid-cols-2 gap-3">
//               {giftWrappings.map((wrapping) => (
//                 <button
//                   key={wrapping.id}
//                   onClick={() => onChange({ ...value, giftWrapping: wrapping.id })}
//                   className={`p-3 border-2 rounded-lg text-left transition-all hover:scale-105 ${
//                     value.giftWrapping === wrapping.id
//                       ? "border-pink-500 bg-pink-50 shadow-md"
//                       : "border-gray-200 hover:border-pink-300"
//                   }`}
//                 >
//                   <div className="text-center">
//                     <div className="text-3xl mb-1">{wrapping.emoji}</div>
//                     <div className="text-sm font-medium text-gray-800">{wrapping.name}</div>
//                     <div className="text-xs text-gray-500 mt-1">{wrapping.description}</div>
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//         {/* Preview */}
//         <div className="col-span-2">
//           <div className="sticky top-6">
//             <label className="text-xl font-semibold mb-4">Preview</label>
//             <div 
//               className="min-h-[600px] rounded-2xl shadow-2xl p-12 flex items-center justify-center"
//               style={{
//                 backgroundColor: value.backgroundColor || "#FFF5F7",
//                 backgroundImage: value.backgroundImage && value.backgroundImage !== "none"
//                   ? `url(/patterns/${value.backgroundImage}.svg)`
//                   : "none",
//                 backgroundSize: "200px",
//                 backgroundRepeat: "repeat"
//               }}
//             >
//               <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 max-w-md w-full">
//                 <div className="text-center mb-6">
//                   {/* Show selected wrapping in preview */}
//                   <div className="text-6xl mb-3 animate-bounce">
//                     {value.giftWrapping === "heart" && "💝"}
//                     {value.giftWrapping === "basket" && "🧺"}
//                     {value.giftWrapping === "bear" && "🧸"}
//                     {value.giftWrapping === "box" && "🎁"}
//                     {value.giftWrapping === "envelope" && "💌"}
//                     {!value.giftWrapping && "💝"}
//                   </div>
//                   <h3 className="text-2xl font-bold" style={{ color: value.accentColor }}>
//                     {value.senderName || "Your Name"} → {value.recipientName || "Their Name"}
//                   </h3>
//                 </div>
//                 <div className="bg-gray-50 rounded-xl p-4 mb-4">
//                   <p className="text-center text-gray-800">
//                     {"Your message will appear here..."}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// components/CustomizationPanel.js
"use client";
;
;
function CustomizationPanel(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(62);
    if ($[0] !== "95fa7e291c540cd51592b8e59cb8dc62453c0d44dbc27367b68dd134d2981169") {
        for(let $i = 0; $i < 62; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "95fa7e291c540cd51592b8e59cb8dc62453c0d44dbc27367b68dd134d2981169";
    }
    const { value, onChange } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            {
                id: "classic",
                name: "Classic Romance",
                bg: "#FFF5F7",
                accent: "#FF69B4"
            },
            {
                id: "elegant",
                name: "Elegant",
                bg: "#F5F5F0",
                accent: "#D4AF37"
            },
            {
                id: "playful",
                name: "Playful",
                bg: "#FFE5E5",
                accent: "#FF1493"
            },
            {
                id: "modern",
                name: "Modern",
                bg: "#FFFFFF",
                accent: "#E91E63"
            }
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const themes = t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [
            {
                id: "none",
                name: "Solid Color"
            },
            {
                id: "hearts",
                name: "Hearts"
            },
            {
                id: "roses",
                name: "Roses"
            },
            {
                id: "abstract",
                name: "Abstract"
            }
        ];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const backgroundImages = t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [
            {
                id: "heart",
                name: "Heart Box",
                emoji: "\uD83D\uDC9D"
            },
            {
                id: "basket",
                name: "Gift Basket",
                emoji: "\uD83E\uDDFA"
            },
            {
                id: "bear",
                name: "Teddy Bear",
                emoji: "\uD83E\uDDF8"
            },
            {
                id: "box",
                name: "Gift Box",
                emoji: "\uD83C\uDF81"
            },
            {
                id: "envelope",
                name: "Love Letter",
                emoji: "\uD83D\uDC8C"
            }
        ];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const giftWrappings = t3;
    let t4;
    if ($[4] !== onChange || $[5] !== value) {
        t4 = ({
            "CustomizationPanel[handleThemeChange]": (theme)=>{
                onChange({
                    ...value,
                    theme: theme.id,
                    backgroundColor: theme.bg,
                    accentColor: theme.accent
                });
            }
        })["CustomizationPanel[handleThemeChange]"];
        $[4] = onChange;
        $[5] = value;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const handleThemeChange = t4;
    let t5;
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl text-purple-700 font-bold",
            children: "Customization"
        }, void 0, false, {
            fileName: "[project]/components/CustomizationPanel.js",
            lineNumber: 316,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm text-pink-600 font-medium mb-3",
            children: "Choose Theme"
        }, void 0, false, {
            fileName: "[project]/components/CustomizationPanel.js",
            lineNumber: 317,
            columnNumber: 10
        }, this);
        $[7] = t5;
        $[8] = t6;
    } else {
        t5 = $[7];
        t6 = $[8];
    }
    let t7;
    if ($[9] !== handleThemeChange || $[10] !== value.theme) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: themes.map({
                        "CustomizationPanel[themes.map()]": (theme_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "CustomizationPanel[themes.map() > <button>.onClick]": ()=>handleThemeChange(theme_0)
                                }["CustomizationPanel[themes.map() > <button>.onClick]"],
                                className: `p-3 border-2 rounded-lg transition-all hover:scale-105 ${value.theme === theme_0.id ? "border-pink-500 bg-pink-50 shadow-md" : "border-gray-200 hover:border-pink-300"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-6 h-6 rounded-full border-2 flex-shrink-0",
                                            style: {
                                                backgroundColor: theme_0.bg,
                                                borderColor: theme_0.accent
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/CustomizationPanel.js",
                                            lineNumber: 329,
                                            columnNumber: 292
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-gray-800",
                                            children: theme_0.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/CustomizationPanel.js",
                                            lineNumber: 332,
                                            columnNumber: 20
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CustomizationPanel.js",
                                    lineNumber: 329,
                                    columnNumber: 251
                                }, this)
                            }, theme_0.id, false, {
                                fileName: "[project]/components/CustomizationPanel.js",
                                lineNumber: 327,
                                columnNumber: 58
                            }, this)
                    }["CustomizationPanel[themes.map()]"])
                }, void 0, false, {
                    fileName: "[project]/components/CustomizationPanel.js",
                    lineNumber: 326,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CustomizationPanel.js",
            lineNumber: 326,
            columnNumber: 10
        }, this);
        $[9] = handleThemeChange;
        $[10] = value.theme;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm text-pink-600 font-medium mb-3",
            children: "Custom Colors"
        }, void 0, false, {
            fileName: "[project]/components/CustomizationPanel.js",
            lineNumber: 342,
            columnNumber: 10
        }, this);
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-xs text-gray-600 mb-1",
            children: "Background"
        }, void 0, false, {
            fileName: "[project]/components/CustomizationPanel.js",
            lineNumber: 349,
            columnNumber: 10
        }, this);
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    const t10 = value.backgroundColor || "#FFF5F7";
    let t11;
    if ($[14] !== onChange || $[15] !== value) {
        t11 = ({
            "CustomizationPanel[<input>.onChange]": (e)=>onChange({
                    ...value,
                    backgroundColor: e.target.value
                })
        })["CustomizationPanel[<input>.onChange]"];
        $[14] = onChange;
        $[15] = value;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== t10 || $[18] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "color",
            value: t10,
            onChange: t11,
            className: "w-12 h-10 rounded cursor-pointer border border-gray-300"
        }, void 0, false, {
            fileName: "[project]/components/CustomizationPanel.js",
            lineNumber: 371,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t11;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    const t13 = value.backgroundColor || "#FFF5F7";
    let t14;
    if ($[20] !== onChange || $[21] !== value) {
        t14 = ({
            "CustomizationPanel[<input>.onChange]": (e_0)=>onChange({
                    ...value,
                    backgroundColor: e_0.target.value
                })
        })["CustomizationPanel[<input>.onChange]"];
        $[20] = onChange;
        $[21] = value;
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] !== t13 || $[24] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            value: t13,
            onChange: t14,
            className: "flex-1 border border-gray-300 rounded px-3 text-sm text-gray-900 focus:ring-2 focus:ring-pink-500 focus:border-transparent",
            placeholder: "#FFF5F7"
        }, void 0, false, {
            fileName: "[project]/components/CustomizationPanel.js",
            lineNumber: 395,
            columnNumber: 11
        }, this);
        $[23] = t13;
        $[24] = t14;
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    let t16;
    if ($[26] !== t12 || $[27] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        t12,
                        t15
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CustomizationPanel.js",
                    lineNumber: 404,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CustomizationPanel.js",
            lineNumber: 404,
            columnNumber: 11
        }, this);
        $[26] = t12;
        $[27] = t15;
        $[28] = t16;
    } else {
        t16 = $[28];
    }
    let t17;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-xs text-gray-600 mb-1",
            children: "Accent"
        }, void 0, false, {
            fileName: "[project]/components/CustomizationPanel.js",
            lineNumber: 413,
            columnNumber: 11
        }, this);
        $[29] = t17;
    } else {
        t17 = $[29];
    }
    const t18 = value.accentColor || "#FF69B4";
    let t19;
    if ($[30] !== onChange || $[31] !== value) {
        t19 = ({
            "CustomizationPanel[<input>.onChange]": (e_1)=>onChange({
                    ...value,
                    accentColor: e_1.target.value
                })
        })["CustomizationPanel[<input>.onChange]"];
        $[30] = onChange;
        $[31] = value;
        $[32] = t19;
    } else {
        t19 = $[32];
    }
    let t20;
    if ($[33] !== t18 || $[34] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "color",
            value: t18,
            onChange: t19,
            className: "w-12 h-10 rounded cursor-pointer border border-gray-300"
        }, void 0, false, {
            fileName: "[project]/components/CustomizationPanel.js",
            lineNumber: 435,
            columnNumber: 11
        }, this);
        $[33] = t18;
        $[34] = t19;
        $[35] = t20;
    } else {
        t20 = $[35];
    }
    const t21 = value.accentColor || "#FF69B4";
    let t22;
    if ($[36] !== onChange || $[37] !== value) {
        t22 = ({
            "CustomizationPanel[<input>.onChange]": (e_2)=>onChange({
                    ...value,
                    accentColor: e_2.target.value
                })
        })["CustomizationPanel[<input>.onChange]"];
        $[36] = onChange;
        $[37] = value;
        $[38] = t22;
    } else {
        t22 = $[38];
    }
    let t23;
    if ($[39] !== t21 || $[40] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            value: t21,
            onChange: t22,
            className: "flex-1 border border-gray-300 rounded px-3 text-sm text-gray-900 focus:ring-2 focus:ring-pink-500 focus:border-transparent",
            placeholder: "#FF69B4"
        }, void 0, false, {
            fileName: "[project]/components/CustomizationPanel.js",
            lineNumber: 459,
            columnNumber: 11
        }, this);
        $[39] = t21;
        $[40] = t22;
        $[41] = t23;
    } else {
        t23 = $[41];
    }
    let t24;
    if ($[42] !== t20 || $[43] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        t20,
                        t23
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CustomizationPanel.js",
                    lineNumber: 468,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CustomizationPanel.js",
            lineNumber: 468,
            columnNumber: 11
        }, this);
        $[42] = t20;
        $[43] = t23;
        $[44] = t24;
    } else {
        t24 = $[44];
    }
    let t25;
    if ($[45] !== t16 || $[46] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        t16,
                        t24
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CustomizationPanel.js",
                    lineNumber: 477,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CustomizationPanel.js",
            lineNumber: 477,
            columnNumber: 11
        }, this);
        $[45] = t16;
        $[46] = t24;
        $[47] = t25;
    } else {
        t25 = $[47];
    }
    let t26;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm text-pink-600 font-medium mb-3",
            children: "Background Pattern"
        }, void 0, false, {
            fileName: "[project]/components/CustomizationPanel.js",
            lineNumber: 486,
            columnNumber: 11
        }, this);
        $[48] = t26;
    } else {
        t26 = $[48];
    }
    let t27;
    if ($[49] !== onChange || $[50] !== value) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-2",
                    children: backgroundImages.map({
                        "CustomizationPanel[backgroundImages.map()]": (bg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "CustomizationPanel[backgroundImages.map() > <button>.onClick]": ()=>onChange({
                                            ...value,
                                            backgroundImage: bg.id
                                        })
                                }["CustomizationPanel[backgroundImages.map() > <button>.onClick]"],
                                className: `p-3 border-2 rounded-lg text-center transition-all hover:scale-105 ${value.backgroundImage === bg.id ? "border-pink-500 bg-pink-50 shadow-md" : "border-gray-200 hover:border-pink-300"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-medium text-gray-800",
                                    children: bg.name
                                }, void 0, false, {
                                    fileName: "[project]/components/CustomizationPanel.js",
                                    lineNumber: 499,
                                    columnNumber: 278
                                }, this)
                            }, bg.id, false, {
                                fileName: "[project]/components/CustomizationPanel.js",
                                lineNumber: 494,
                                columnNumber: 63
                            }, this)
                    }["CustomizationPanel[backgroundImages.map()]"])
                }, void 0, false, {
                    fileName: "[project]/components/CustomizationPanel.js",
                    lineNumber: 493,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CustomizationPanel.js",
            lineNumber: 493,
            columnNumber: 11
        }, this);
        $[49] = onChange;
        $[50] = value;
        $[51] = t27;
    } else {
        t27 = $[51];
    }
    let t28;
    let t29;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm text-pink-600 font-medium mb-2",
            children: "Gift Wrapping"
        }, void 0, false, {
            fileName: "[project]/components/CustomizationPanel.js",
            lineNumber: 510,
            columnNumber: 11
        }, this);
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 mb-3",
            children: "Choose how your gift will be presented"
        }, void 0, false, {
            fileName: "[project]/components/CustomizationPanel.js",
            lineNumber: 511,
            columnNumber: 11
        }, this);
        $[52] = t28;
        $[53] = t29;
    } else {
        t28 = $[52];
        t29 = $[53];
    }
    let t30;
    if ($[54] !== onChange || $[55] !== value) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t28,
                t29,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: giftWrappings.map({
                        "CustomizationPanel[giftWrappings.map()]": (wrapping)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "CustomizationPanel[giftWrappings.map() > <button>.onClick]": ()=>onChange({
                                            ...value,
                                            giftWrapping: wrapping.id
                                        })
                                }["CustomizationPanel[giftWrappings.map() > <button>.onClick]"],
                                className: `p-4 border-2 rounded-lg transition-all hover:scale-105 ${value.giftWrapping === wrapping.id ? "border-pink-500 bg-pink-50 shadow-md" : "border-gray-200 hover:border-pink-300"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-4xl mb-2",
                                            children: wrapping.emoji
                                        }, void 0, false, {
                                            fileName: "[project]/components/CustomizationPanel.js",
                                            lineNumber: 526,
                                            columnNumber: 295
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-medium text-gray-800",
                                            children: wrapping.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/CustomizationPanel.js",
                                            lineNumber: 526,
                                            columnNumber: 348
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CustomizationPanel.js",
                                    lineNumber: 526,
                                    columnNumber: 266
                                }, this)
                            }, wrapping.id, false, {
                                fileName: "[project]/components/CustomizationPanel.js",
                                lineNumber: 521,
                                columnNumber: 66
                            }, this)
                    }["CustomizationPanel[giftWrappings.map()]"])
                }, void 0, false, {
                    fileName: "[project]/components/CustomizationPanel.js",
                    lineNumber: 520,
                    columnNumber: 26
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CustomizationPanel.js",
            lineNumber: 520,
            columnNumber: 11
        }, this);
        $[54] = onChange;
        $[55] = value;
        $[56] = t30;
    } else {
        t30 = $[56];
    }
    let t31;
    if ($[57] !== t25 || $[58] !== t27 || $[59] !== t30 || $[60] !== t7) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-lg shadow-sm space-y-6",
            children: [
                t5,
                t7,
                t25,
                t27,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/components/CustomizationPanel.js",
            lineNumber: 536,
            columnNumber: 11
        }, this);
        $[57] = t25;
        $[58] = t27;
        $[59] = t30;
        $[60] = t7;
        $[61] = t31;
    } else {
        t31 = $[61];
    }
    return t31;
}
_c = CustomizationPanel;
var _c;
__turbopack_context__.k.register(_c, "CustomizationPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/create/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreatePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GiftTypeSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/GiftTypeSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CoffeeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CoffeeConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GiftCardConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/GiftCardConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChocolateConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChocolateConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CustomizationPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CustomizationPanel.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// // app/create/page.js
// "use client";
// import { useState } from "react";
// import GiftTypeSelector from "@/../components/GiftTypeSelector";
// import CoffeeConfig from "@/../components/CoffeeConfig";
// import GiftCardConfig from "@/../components/GiftCardConfig";
// import ChocolateConfig from "@/../components/ChocolateConfig";
// import CustomizationPanel from "@/../components/CustomizationPanel";
// export default function CreatePage() {
//   // const [senderName, setSenderName] = useState("");
//   // const [recipientName, setRecipientName] = useState("");
//   const [questionText, setQuestionText] = useState("");
//   // const [customMessage, setCustomMessage] = useState("");
//   const [giftType, setGiftType] = useState("GIFTCARD");
//   const [giftConfig, setGiftConfig] = useState({});
//   // Customization state
//   const [customization, setCustomization] = useState({
//     theme: "classic",
//     backgroundColor: "#FFF5F7",
//     accentColor: "#FF69B4",
//     backgroundImage: "none",
//     senderName: "Your Name",
//     recipientName: "Their Name",
//   });
//   const [link, setLink] = useState(null);
//   const [isCreating, setIsCreating] = useState(false);
//   console.log("Current giftType:", giftType);
//   async function handleCreate() {
//     if (!customization.senderName || !customization.recipientName || !questionText) {
//       alert("Please fill in all required fields!");
//       return;
//     }
//     setIsCreating(true);
//     const payload = {
//       senderName: customization.senderName,
//           recipientName: customization.recipientName,
//           questionText,
//           // customMessage,
//           theme: customization.theme,
//           backgroundColor: customization.backgroundColor,
//           accentColor: customization.accentColor,
//           backgroundImage: customization.backgroundImage,
//           giftType,
//           giftConfig,
//     }
//     console.log("Sending payload:", payload); // ADD THIS
//     try {
//       // const res = await fetch("/api/gift/create", {
//       //   method: "POST",
//       //   headers: { "Content-Type": "application/json" },
//       //   body: JSON.stringify({
//       //     senderName: customization.senderName,
//       //     recipientName: customization.recipientName,
//       //     questionText,
//       //     // customMessage,
//       //     theme: customization.theme,
//       //     backgroundColor: customization.backgroundColor,
//       //     accentColor: customization.accentColor,
//       //     backgroundImage: customization.backgroundImage,
//       //     giftType,
//       //     giftConfig,
//       //   }),
//       // });
//       const res = await fetch("/api/gift/create", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });
//       const data = await res.json();
//       console.log("Response data:", data); // ADD THIS
//       if (data.error) {
//         alert(`Error: ${data.error}`);
//         return;
//       }
//       if (!data.slug) {
//         alert("No slug returned!");
//         console.error("Full response:", data);
//         return;
//       }
//       setLink(`${window.location.origin}/g/${data.slug}`);
//     } catch (error) {
//       console.error("Error creating gift:", error);
//       alert("Failed to create gift. Please try again.");
//     } finally {
//       setIsCreating(false);
//     }
//   }
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12">
//       {/* <div className="max-w-4xl mx-auto px-6"> */}
//       <div className="max-w-7xl mx-auto px-8">
//       {/* <div className="w-full max-w-[1400px] mx-auto px-10"> */}
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-gray-800 mb-2">
//             Create Your Valentine's Gift 💝
//           </h1>
//           <p className="text-gray-600">
//             Design a personalized gift page for someone special
//           </p>
//         </div>
//         {/* <div className="grid md:grid-cols-2 gap-6"> */}
//         {/* <div className="grid md:grid-cols-5 gap-6"> */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//         {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}
//           {/* Left Column - Gift Details */}
//           {/* <div className="md:col-span-2 space-y-4"> */}
//           <div className="space-y-4">
//             <div className="bg-white p-6 rounded-lg shadow-sm">
//               <h2 className="text-xl text-purple-700 font-semibold mb-4">Gift Details</h2>
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm text-pink-600 font-medium mb-1">Your Name *</label>
//                   <input
//                     className="border border-gray-300 p-3 w-full rounded-lg text-gray-900
//                                 placeholder:text-gray-500 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                     placeholder="Your name"
//                     value={customization.senderName}
//                     onChange={(e) =>
//                       setCustomization({
//                         ...customization,
//                         senderName: e.target.value,
//                       })
//                     }
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm text-pink-600 font-medium mb-1">Recipient's Name *</label>
//                   <input
//                     className="border border-gray-800 p-3 w-full rounded-lg text-gray-900
//                                 placeholder:text-gray-500 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                     placeholder="Their name"
//                     value={customization.recipientName}
//                     onChange={(e) =>
//                       setCustomization({
//                         ...customization,
//                         recipientName: e.target.value,
//                       })
//                     }
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm text-pink-600 font-medium mb-1">Main Message *</label>
//                   <textarea
//                     className="border border-gray-300 p-3 w-full rounded-lg text-gray-900
//                                 placeholder:text-gray-500 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                     placeholder="Will you be my Valentine?"
//                     rows={3}
//                     value={questionText}
//                     onChange={(e) => setQuestionText(e.target.value)}
//                   />
//                 </div>
//                 {/* <div>
//                   <label className="block text-sm font-medium mb-1">
//                     Additional Message (Optional)
//                   </label>
//                   <textarea
//                     className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//                     placeholder="Add a heartfelt note..."
//                     rows={3}
//                     value={customMessage}
//                     onChange={(e) => setCustomMessage(e.target.value)}
//                   />
//                 </div> */}
//               </div>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-sm">
//               <h2 className="text-xl text-pink-600 font-semibold mb-4">Select Gift Type</h2>
//               <GiftTypeSelector value={giftType} onChange={setGiftType} />
//               <div className="mt-4">
//                 {giftType === "COFFEE" && (
//                   <CoffeeConfig value={giftConfig} onChange={setGiftConfig} />
//                 )}
//                 {giftType === "GIFTCARD" && (
//                   <GiftCardConfig value={giftConfig} onChange={setGiftConfig} />
//                 )}
//                 {giftType === "CHOCOLATES" && (
//                   <ChocolateConfig value={giftConfig} onChange={setGiftConfig} />
//                 )}
//               </div>
//             </div>
//           </div>
//           {/* Right Column - Customization */}
//           {/* <div className="md:col-span-2"> */}
//             <div className="space-y-4">
//               <CustomizationPanel
//                 value={customization}
//                 onChange={setCustomization}
//               />
//               <button
//                 className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
//                 onClick={handleCreate}
//                 disabled={isCreating}
//               >
//                 {isCreating ? "Creating..." : "Create Gift Link 🎁"}
//               </button>
//               {link && (
//                 <div className="bg-green-50 border-2 border-green-500 p-6 rounded-lg">
//                   <h3 className="font-semibold text-green-800 mb-2">
//                     Gift Created! 🎉
//                   </h3>
//                   <p className="text-sm text-green-700 mb-3">
//                     Share this link with your Valentine:
//                   </p>
//                   <div className="bg-white p-3 rounded border border-green-300 mb-3">
//                     <a
//                       className="text-blue-600 underline break-all text-sm"
//                       href={link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       {link}
//                     </a>
//                   </div>
//                   <button
//                     onClick={() => {
//                       navigator.clipboard.writeText(link);
//                       alert("Link copied to clipboard!");
//                     }}
//                     className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
//                   >
//                     Copy Link 📋
//                   </button>
//                 </div>
//               )}
//             </div>
//           {/* </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }
// app/create/page.js
"use client";
;
;
;
;
;
;
function CreatePage() {
    _s();
    const [questionText, setQuestionText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [giftType, setGiftType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("GIFTCARD");
    const [giftConfig, setGiftConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Customization state
    const [customization, setCustomization] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        theme: "classic",
        backgroundColor: "#FFF5F7",
        accentColor: "#FF69B4",
        backgroundImage: "none",
        giftWrapping: "heart",
        senderName: "Your Name",
        recipientName: "Their Name"
    });
    const [link, setLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCreating, setIsCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    async function handleCreate() {
        if (!customization.senderName || !customization.recipientName || !questionText) {
            alert("Please fill in all required fields!");
            return;
        }
        setIsCreating(true);
        const payload = {
            senderName: customization.senderName,
            recipientName: customization.recipientName,
            questionText,
            theme: customization.theme,
            backgroundColor: customization.backgroundColor,
            accentColor: customization.accentColor,
            backgroundImage: customization.backgroundImage,
            giftWrapping: customization.giftWrapping,
            giftType,
            giftConfig
        };
        console.log("Sending payload:", payload);
        try {
            const res = await fetch("/api/gift/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            console.log("Response data:", data);
            if (data.error) {
                alert(`Error: ${data.error}`);
                return;
            }
            if (!data.slug) {
                alert("No slug returned!");
                console.error("Full response:", data);
                return;
            }
            setLink(`${window.location.origin}/g/${data.slug}`);
        } catch (error) {
            console.error("Error creating gift:", error);
            alert("Failed to create gift. Please try again.");
        } finally{
            setIsCreating(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-gray-800 mb-2",
                            children: "Create Your Valentine's Gift 💝"
                        }, void 0, false, {
                            fileName: "[project]/src/app/create/page.js",
                            lineNumber: 335,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Design a personalized gift page for someone special"
                        }, void 0, false, {
                            fileName: "[project]/src/app/create/page.js",
                            lineNumber: 338,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/create/page.js",
                    lineNumber: 334,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-3 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-lg shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl text-purple-700 font-semibold mb-4",
                                            children: "Gift Details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create/page.js",
                                            lineNumber: 349,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm text-pink-600 font-medium mb-1",
                                                            children: "Your Name *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/create/page.js",
                                                            lineNumber: 353,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "border border-gray-300 p-3 w-full rounded-lg text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-pink-500 focus:border-transparent",
                                                            placeholder: "Your name",
                                                            value: customization.senderName,
                                                            onChange: (e)=>setCustomization({
                                                                    ...customization,
                                                                    senderName: e.target.value
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/create/page.js",
                                                            lineNumber: 356,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/create/page.js",
                                                    lineNumber: 352,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm text-pink-600 font-medium mb-1",
                                                            children: "Recipient's Name *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/create/page.js",
                                                            lineNumber: 363,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "border border-gray-300 p-3 w-full rounded-lg text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-pink-500 focus:border-transparent",
                                                            placeholder: "Their name",
                                                            value: customization.recipientName,
                                                            onChange: (e_0)=>setCustomization({
                                                                    ...customization,
                                                                    recipientName: e_0.target.value
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/create/page.js",
                                                            lineNumber: 366,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/create/page.js",
                                                    lineNumber: 362,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm text-pink-600 font-medium mb-1",
                                                            children: "Main Message *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/create/page.js",
                                                            lineNumber: 373,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            className: "border border-gray-300 p-3 w-full rounded-lg text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-pink-500 focus:border-transparent",
                                                            placeholder: "Will you be my Valentine?",
                                                            rows: 3,
                                                            value: questionText,
                                                            onChange: (e_1)=>setQuestionText(e_1.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/create/page.js",
                                                            lineNumber: 376,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/create/page.js",
                                                    lineNumber: 372,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/create/page.js",
                                            lineNumber: 351,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/create/page.js",
                                    lineNumber: 348,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-lg shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl text-pink-600 font-semibold mb-4",
                                            children: "Select Gift Type"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create/page.js",
                                            lineNumber: 382,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GiftTypeSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            value: giftType,
                                            onChange: setGiftType
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create/page.js",
                                            lineNumber: 383,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4",
                                            children: [
                                                giftType === "COFFEE" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CoffeeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    value: giftConfig,
                                                    onChange: setGiftConfig
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/create/page.js",
                                                    lineNumber: 386,
                                                    columnNumber: 43
                                                }, this),
                                                giftType === "GIFTCARD" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GiftCardConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    value: giftConfig,
                                                    onChange: setGiftConfig
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/create/page.js",
                                                    lineNumber: 387,
                                                    columnNumber: 45
                                                }, this),
                                                giftType === "CHOCOLATES" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChocolateConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    value: giftConfig,
                                                    onChange: setGiftConfig
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/create/page.js",
                                                    lineNumber: 388,
                                                    columnNumber: 47
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/create/page.js",
                                            lineNumber: 385,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/create/page.js",
                                    lineNumber: 381,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "hidden lg:block w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
                                    onClick: handleCreate,
                                    disabled: isCreating,
                                    children: isCreating ? "Creating..." : "Create Gift Link 🎁"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/create/page.js",
                                    lineNumber: 393,
                                    columnNumber: 13
                                }, this),
                                link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden lg:block bg-green-50 border-2 border-green-500 p-6 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-green-800 mb-2",
                                            children: "Gift Created! 🎉"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create/page.js",
                                            lineNumber: 399,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-green-700 mb-3",
                                            children: "Share this link with your Valentine:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create/page.js",
                                            lineNumber: 402,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-3 rounded border border-green-300 mb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "text-blue-600 underline break-all text-sm",
                                                href: link,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: link
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/create/page.js",
                                                lineNumber: 406,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create/page.js",
                                            lineNumber: 405,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                navigator.clipboard.writeText(link);
                                                alert("Link copied to clipboard!");
                                            },
                                            className: "w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors",
                                            children: "Copy Link 📋"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create/page.js",
                                            lineNumber: 410,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/create/page.js",
                                    lineNumber: 398,
                                    columnNumber: 22
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/create/page.js",
                            lineNumber: 347,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CustomizationPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: customization,
                                onChange: setCustomization,
                                questionText: questionText
                            }, void 0, false, {
                                fileName: "[project]/src/app/create/page.js",
                                lineNumber: 421,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/create/page.js",
                            lineNumber: 420,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sticky top-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-gray-800 mb-4",
                                        children: "Preview"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create/page.js",
                                        lineNumber: 427,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-h-[700px] rounded-2xl shadow-2xl p-8 md:p-12 flex items-center justify-center transition-all duration-300",
                                        style: {
                                            backgroundColor: customization.backgroundColor || "#FFF5F7",
                                            backgroundImage: customization.backgroundImage && customization.backgroundImage !== "none" ? `url(/patterns/${customization.backgroundImage}.svg)` : "none",
                                            backgroundSize: "200px",
                                            backgroundRepeat: "repeat"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 max-w-md w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-7xl mb-4 animate-bounce",
                                                            children: [
                                                                customization.giftWrapping === "heart" && "💝",
                                                                customization.giftWrapping === "basket" && "🧺",
                                                                customization.giftWrapping === "bear" && "🧸",
                                                                customization.giftWrapping === "box" && "🎁",
                                                                customization.giftWrapping === "envelope" && "💌",
                                                                !customization.giftWrapping && "💝"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/create/page.js",
                                                            lineNumber: 437,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-2xl font-bold mb-2",
                                                            style: {
                                                                color: customization.accentColor
                                                            },
                                                            children: [
                                                                customization.senderName || "Your Name",
                                                                " → ",
                                                                customization.recipientName || "Their Name"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/create/page.js",
                                                            lineNumber: 445,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/create/page.js",
                                                    lineNumber: 435,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 rounded-xl p-4 mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-center text-gray-800",
                                                        children: questionText || "Your message will appear here..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/create/page.js",
                                                        lineNumber: 453,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/create/page.js",
                                                    lineNumber: 452,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-6 py-2 rounded-full text-white font-semibold text-sm",
                                                        style: {
                                                            backgroundColor: customization.accentColor
                                                        },
                                                        children: [
                                                            giftType === "COFFEE" && "☕ Coffee Gift",
                                                            giftType === "GIFTCARD" && "🎁 Gift Card",
                                                            giftType === "CHOCOLATES" && "🍫 Chocolates",
                                                            !giftType && "🎁 Gift"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/create/page.js",
                                                        lineNumber: 459,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/create/page.js",
                                                    lineNumber: 458,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/create/page.js",
                                            lineNumber: 434,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create/page.js",
                                        lineNumber: 428,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/create/page.js",
                                lineNumber: 426,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/create/page.js",
                            lineNumber: 425,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/create/page.js",
                    lineNumber: 344,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:hidden mt-6 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
                            onClick: handleCreate,
                            disabled: isCreating,
                            children: isCreating ? "Creating..." : "Create Gift Link 🎁"
                        }, void 0, false, {
                            fileName: "[project]/src/app/create/page.js",
                            lineNumber: 476,
                            columnNumber: 11
                        }, this),
                        link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-green-50 border-2 border-green-500 p-6 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-green-800 mb-2",
                                    children: "Gift Created! 🎉"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/create/page.js",
                                    lineNumber: 481,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-green-700 mb-3",
                                    children: "Share this link with your Valentine:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/create/page.js",
                                    lineNumber: 484,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-3 rounded border border-green-300 mb-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "text-blue-600 underline break-all text-sm",
                                        href: link,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: link
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create/page.js",
                                        lineNumber: 488,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/create/page.js",
                                    lineNumber: 487,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        navigator.clipboard.writeText(link);
                                        alert("Link copied to clipboard!");
                                    },
                                    className: "w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors",
                                    children: "Copy Link 📋"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/create/page.js",
                                    lineNumber: 492,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/create/page.js",
                            lineNumber: 480,
                            columnNumber: 20
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/create/page.js",
                    lineNumber: 475,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/create/page.js",
            lineNumber: 333,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/create/page.js",
        lineNumber: 332,
        columnNumber: 10
    }, this);
}
_s(CreatePage, "yH/hAlWXGDSI3A6ZXCIk/nWkCqM=");
_c = CreatePage;
var _c;
__turbopack_context__.k.register(_c, "CreatePage");
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
]);

//# sourceMappingURL=_825e6632._.js.map