module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/GiftTypeSelector.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// component for the gift type front end
__turbopack_context__.s([
    "default",
    ()=>GiftTypeSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function GiftTypeSelector({ value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-2 text-pink-600 font-semibold",
                children: "Gift Type"
            }, void 0, false, {
                fileName: "[project]/components/GiftTypeSelector.js",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                className: "border p-2 w-full text-gray-900 placeholder:text-gray-500",
                value: value,
                onChange: (e)=>onChange(e.target.value),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "COFFEE",
                        children: "☕ Coffee"
                    }, void 0, false, {
                        fileName: "[project]/components/GiftTypeSelector.js",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "GIFTCARD",
                        children: "💳 Gift Card"
                    }, void 0, false, {
                        fileName: "[project]/components/GiftTypeSelector.js",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "CHOCOLATES",
                        children: "🍫 Chocolates"
                    }, void 0, false, {
                        fileName: "[project]/components/GiftTypeSelector.js",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GiftTypeSelector.js",
                lineNumber: 7,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/GiftTypeSelector.js",
        lineNumber: 5,
        columnNumber: 5
    }, this);
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
}),
"[project]/components/CoffeeConfig.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// component for the coffee type front end
__turbopack_context__.s([
    "default",
    ()=>CoffeeConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function CoffeeConfig({ value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block mb-2 text-pink-600 font-semibold",
            children: "IN DEVELOPMENT "
        }, void 0, false, {
            fileName: "[project]/components/CoffeeConfig.js",
            lineNumber: 7,
            columnNumber: 5
        }, this)
    }, void 0, false);
}
}),
"[project]/components/GiftCardConfig.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// component for the gift car type
// going to route to: https://www.amazon.com/dp/B0DSBM8T1M?ref=altParentAsins_treatment_text_from_Any_to_Appreciation&th=1
__turbopack_context__.s([
    "default",
    ()=>GiftCardConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function GiftCardConfig({ value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-purple-700 font-bold text-lg",
                    children: [
                        "Buy Card Here: ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://www.amazon.com/dp/B0DSBM8T1M?ref=altParentAsins_treatment_text_from_Any_to_Appreciation&th=1",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "font-medium text-fg-brand underline hover:no-underline",
                            children: "Giftcard"
                        }, void 0, false, {
                            fileName: "[project]/components/GiftCardConfig.js",
                            lineNumber: 12,
                            columnNumber: 24
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/GiftCardConfig.js",
                    lineNumber: 11,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "block mb-2 text-pink-600 font-semibold",
                    children: "Insert Code Here: "
                }, void 0, false, {
                    fileName: "[project]/components/GiftCardConfig.js",
                    lineNumber: 15,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: "border p-2 w-full mb-2 text-gray-900 placeholder:text-gray-500",
                    type: "text",
                    placeholder: "Giftcard code",
                    value: value.code || "",
                    onChange: (e)=>onChange({
                            ...value,
                            code: String(e.target.value)
                        })
                }, void 0, false, {
                    fileName: "[project]/components/GiftCardConfig.js",
                    lineNumber: 16,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500",
                    children: "(No Stripe integration for now)"
                }, void 0, false, {
                    fileName: "[project]/components/GiftCardConfig.js",
                    lineNumber: 25,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/GiftCardConfig.js",
            lineNumber: 9,
            columnNumber: 5
        }, this)
    }, void 0, false);
}
}),
"[project]/components/ChocolateConfig.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Component for the choco type
__turbopack_context__.s([
    "default",
    ()=>ChocolateConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function ChocolateConfig({ value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block mb-2 text-pink-600 font-semibold",
            children: "IN DEVELOPMENT "
        }, void 0, false, {
            fileName: "[project]/components/ChocolateConfig.js",
            lineNumber: 6,
            columnNumber: 5
        }, this)
    }, void 0, false);
}
}),
"[project]/components/CustomizationPanel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomizationPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
function CustomizationPanel({ value, onChange, questionText }) {
    const themes = [
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
    const backgroundImages = [
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
    const giftWrappings = [
        {
            id: "heart",
            name: "Heart Box",
            emoji: "💝"
        },
        {
            id: "basket",
            name: "Gift Basket",
            emoji: "🧺"
        },
        {
            id: "bear",
            name: "Teddy Bear",
            emoji: "🧸"
        },
        {
            id: "box",
            name: "Gift Box",
            emoji: "🎁"
        },
        {
            id: "envelope",
            name: "Love Letter",
            emoji: "💌"
        }
    ];
    const handleThemeChange = (theme)=>{
        onChange({
            ...value,
            theme: theme.id,
            backgroundColor: theme.bg,
            accentColor: theme.accent
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-lg shadow-sm space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl text-purple-700 font-bold",
                children: "Customization"
            }, void 0, false, {
                fileName: "[project]/components/CustomizationPanel.js",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm text-pink-600 font-medium mb-3",
                        children: "Choose Theme"
                    }, void 0, false, {
                        fileName: "[project]/components/CustomizationPanel.js",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: themes.map((theme)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleThemeChange(theme),
                                className: `p-3 border-2 rounded-lg transition-all hover:scale-105 ${value.theme === theme.id ? "border-pink-500 bg-pink-50 shadow-md" : "border-gray-200 hover:border-pink-300"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-6 h-6 rounded-full border-2 flex-shrink-0",
                                            style: {
                                                backgroundColor: theme.bg,
                                                borderColor: theme.accent
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/CustomizationPanel.js",
                                            lineNumber: 258,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-gray-800",
                                            children: theme.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/CustomizationPanel.js",
                                            lineNumber: 262,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CustomizationPanel.js",
                                    lineNumber: 257,
                                    columnNumber: 15
                                }, this)
                            }, theme.id, false, {
                                fileName: "[project]/components/CustomizationPanel.js",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/CustomizationPanel.js",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CustomizationPanel.js",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm text-pink-600 font-medium mb-3",
                        children: "Custom Colors"
                    }, void 0, false, {
                        fileName: "[project]/components/CustomizationPanel.js",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-gray-600 mb-1",
                                        children: "Background"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CustomizationPanel.js",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "color",
                                                value: value.backgroundColor || "#FFF5F7",
                                                onChange: (e)=>onChange({
                                                        ...value,
                                                        backgroundColor: e.target.value
                                                    }),
                                                className: "w-12 h-10 rounded cursor-pointer border border-gray-300"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CustomizationPanel.js",
                                                lineNumber: 278,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: value.backgroundColor || "#FFF5F7",
                                                onChange: (e)=>onChange({
                                                        ...value,
                                                        backgroundColor: e.target.value
                                                    }),
                                                className: "flex-1 border border-gray-300 rounded px-3 text-sm text-gray-900 focus:ring-2 focus:ring-pink-500 focus:border-transparent",
                                                placeholder: "#FFF5F7"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CustomizationPanel.js",
                                                lineNumber: 284,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CustomizationPanel.js",
                                        lineNumber: 277,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CustomizationPanel.js",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-gray-600 mb-1",
                                        children: "Accent"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CustomizationPanel.js",
                                        lineNumber: 295,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "color",
                                                value: value.accentColor || "#FF69B4",
                                                onChange: (e)=>onChange({
                                                        ...value,
                                                        accentColor: e.target.value
                                                    }),
                                                className: "w-12 h-10 rounded cursor-pointer border border-gray-300"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CustomizationPanel.js",
                                                lineNumber: 297,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: value.accentColor || "#FF69B4",
                                                onChange: (e)=>onChange({
                                                        ...value,
                                                        accentColor: e.target.value
                                                    }),
                                                className: "flex-1 border border-gray-300 rounded px-3 text-sm text-gray-900 focus:ring-2 focus:ring-pink-500 focus:border-transparent",
                                                placeholder: "#FF69B4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CustomizationPanel.js",
                                                lineNumber: 303,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CustomizationPanel.js",
                                        lineNumber: 296,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CustomizationPanel.js",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CustomizationPanel.js",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CustomizationPanel.js",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm text-pink-600 font-medium mb-3",
                        children: "Background Pattern"
                    }, void 0, false, {
                        fileName: "[project]/components/CustomizationPanel.js",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: backgroundImages.map((bg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onChange({
                                        ...value,
                                        backgroundImage: bg.id
                                    }),
                                className: `p-3 border-2 rounded-lg text-center transition-all hover:scale-105 ${value.backgroundImage === bg.id ? "border-pink-500 bg-pink-50 shadow-md" : "border-gray-200 hover:border-pink-300"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-medium text-gray-800",
                                    children: bg.name
                                }, void 0, false, {
                                    fileName: "[project]/components/CustomizationPanel.js",
                                    lineNumber: 331,
                                    columnNumber: 15
                                }, this)
                            }, bg.id, false, {
                                fileName: "[project]/components/CustomizationPanel.js",
                                lineNumber: 322,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/CustomizationPanel.js",
                        lineNumber: 320,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CustomizationPanel.js",
                lineNumber: 316,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm text-pink-600 font-medium mb-2",
                        children: "Gift Wrapping"
                    }, void 0, false, {
                        fileName: "[project]/components/CustomizationPanel.js",
                        lineNumber: 339,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 mb-3",
                        children: "Choose how your gift will be presented"
                    }, void 0, false, {
                        fileName: "[project]/components/CustomizationPanel.js",
                        lineNumber: 342,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: giftWrappings.map((wrapping)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onChange({
                                        ...value,
                                        giftWrapping: wrapping.id
                                    }),
                                className: `p-4 border-2 rounded-lg transition-all hover:scale-105 ${value.giftWrapping === wrapping.id ? "border-pink-500 bg-pink-50 shadow-md" : "border-gray-200 hover:border-pink-300"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-4xl mb-2",
                                            children: wrapping.emoji
                                        }, void 0, false, {
                                            fileName: "[project]/components/CustomizationPanel.js",
                                            lineNumber: 355,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-medium text-gray-800",
                                            children: wrapping.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/CustomizationPanel.js",
                                            lineNumber: 356,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CustomizationPanel.js",
                                    lineNumber: 354,
                                    columnNumber: 15
                                }, this)
                            }, wrapping.id, false, {
                                fileName: "[project]/components/CustomizationPanel.js",
                                lineNumber: 345,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/CustomizationPanel.js",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CustomizationPanel.js",
                lineNumber: 338,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CustomizationPanel.js",
        lineNumber: 238,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/create/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreatePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GiftTypeSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/GiftTypeSelector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CoffeeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CoffeeConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GiftCardConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/GiftCardConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChocolateConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChocolateConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CustomizationPanel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CustomizationPanel.js [app-ssr] (ecmascript)");
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
;
function CreatePage() {
    const [questionText, setQuestionText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [giftType, setGiftType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("GIFTCARD");
    const [giftConfig, setGiftConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // Customization state
    const [customization, setCustomization] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        theme: "classic",
        backgroundColor: "#FFF5F7",
        accentColor: "#FF69B4",
        backgroundImage: "none",
        giftWrapping: "heart",
        senderName: "Your Name",
        recipientName: "Their Name"
    });
    const [link, setLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCreating, setIsCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-gray-800 mb-2",
                            children: "Create Your Valentine's Gift 💝"
                        }, void 0, false, {
                            fileName: "[project]/src/app/create/page.js",
                            lineNumber: 347,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Design a personalized gift page for someone special"
                        }, void 0, false, {
                            fileName: "[project]/src/app/create/page.js",
                            lineNumber: 350,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/create/page.js",
                    lineNumber: 346,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-3 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-lg shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl text-purple-700 font-semibold mb-4",
                                            children: "Gift Details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create/page.js",
                                            lineNumber: 361,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm text-pink-600 font-medium mb-1",
                                                            children: "Your Name *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/create/page.js",
                                                            lineNumber: 365,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "border border-gray-300 p-3 w-full rounded-lg text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-pink-500 focus:border-transparent",
                                                            placeholder: "Your name",
                                                            value: customization.senderName,
                                                            onChange: (e)=>setCustomization({
                                                                    ...customization,
                                                                    senderName: e.target.value
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/create/page.js",
                                                            lineNumber: 368,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/create/page.js",
                                                    lineNumber: 364,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm text-pink-600 font-medium mb-1",
                                                            children: "Recipient's Name *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/create/page.js",
                                                            lineNumber: 382,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "border border-gray-300 p-3 w-full rounded-lg text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-pink-500 focus:border-transparent",
                                                            placeholder: "Their name",
                                                            value: customization.recipientName,
                                                            onChange: (e)=>setCustomization({
                                                                    ...customization,
                                                                    recipientName: e.target.value
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/create/page.js",
                                                            lineNumber: 385,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/create/page.js",
                                                    lineNumber: 381,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm text-pink-600 font-medium mb-1",
                                                            children: "Main Message *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/create/page.js",
                                                            lineNumber: 399,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            className: "border border-gray-300 p-3 w-full rounded-lg text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-pink-500 focus:border-transparent",
                                                            placeholder: "Will you be my Valentine?",
                                                            rows: 3,
                                                            value: questionText,
                                                            onChange: (e)=>setQuestionText(e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/create/page.js",
                                                            lineNumber: 402,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/create/page.js",
                                                    lineNumber: 398,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/create/page.js",
                                            lineNumber: 363,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/create/page.js",
                                    lineNumber: 360,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-lg shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl text-pink-600 font-semibold mb-4",
                                            children: "Select Gift Type"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create/page.js",
                                            lineNumber: 414,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GiftTypeSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            value: giftType,
                                            onChange: setGiftType
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create/page.js",
                                            lineNumber: 415,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4",
                                            children: [
                                                giftType === "COFFEE" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CoffeeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    value: giftConfig,
                                                    onChange: setGiftConfig
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/create/page.js",
                                                    lineNumber: 419,
                                                    columnNumber: 19
                                                }, this),
                                                giftType === "GIFTCARD" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GiftCardConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    value: giftConfig,
                                                    onChange: setGiftConfig
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/create/page.js",
                                                    lineNumber: 422,
                                                    columnNumber: 19
                                                }, this),
                                                giftType === "CHOCOLATES" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChocolateConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    value: giftConfig,
                                                    onChange: setGiftConfig
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/create/page.js",
                                                    lineNumber: 425,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/create/page.js",
                                            lineNumber: 417,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/create/page.js",
                                    lineNumber: 413,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "hidden lg:block w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
                                    onClick: handleCreate,
                                    disabled: isCreating,
                                    children: isCreating ? "Creating..." : "Create Gift Link 🎁"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/create/page.js",
                                    lineNumber: 431,
                                    columnNumber: 13
                                }, this),
                                link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden lg:block bg-green-50 border-2 border-green-500 p-6 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-green-800 mb-2",
                                            children: "Gift Created! 🎉"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create/page.js",
                                            lineNumber: 442,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-green-700 mb-3",
                                            children: "Share this link with your Valentine:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create/page.js",
                                            lineNumber: 445,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-3 rounded border border-green-300 mb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "text-blue-600 underline break-all text-sm",
                                                href: link,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: link
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/create/page.js",
                                                lineNumber: 449,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create/page.js",
                                            lineNumber: 448,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                navigator.clipboard.writeText(link);
                                                alert("Link copied to clipboard!");
                                            },
                                            className: "w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors",
                                            children: "Copy Link 📋"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create/page.js",
                                            lineNumber: 458,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/create/page.js",
                                    lineNumber: 441,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/create/page.js",
                            lineNumber: 359,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CustomizationPanel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                value: customization,
                                onChange: setCustomization,
                                questionText: questionText
                            }, void 0, false, {
                                fileName: "[project]/src/app/create/page.js",
                                lineNumber: 473,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/create/page.js",
                            lineNumber: 472,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sticky top-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-gray-800 mb-4",
                                        children: "Preview"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create/page.js",
                                        lineNumber: 483,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-h-[700px] rounded-2xl shadow-2xl p-8 md:p-12 flex items-center justify-center transition-all duration-300",
                                        style: {
                                            backgroundColor: customization.backgroundColor || "#FFF5F7",
                                            backgroundImage: customization.backgroundImage && customization.backgroundImage !== "none" ? `url(/patterns/${customization.backgroundImage}.svg)` : "none",
                                            backgroundSize: "200px",
                                            backgroundRepeat: "repeat"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 max-w-md w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                            lineNumber: 498,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                                                            lineNumber: 506,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/create/page.js",
                                                    lineNumber: 496,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 rounded-xl p-4 mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-center text-gray-800",
                                                        children: questionText || "Your message will appear here..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/create/page.js",
                                                        lineNumber: 512,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/create/page.js",
                                                    lineNumber: 511,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                        lineNumber: 518,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/create/page.js",
                                                    lineNumber: 517,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/create/page.js",
                                            lineNumber: 495,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create/page.js",
                                        lineNumber: 484,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/create/page.js",
                                lineNumber: 482,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/create/page.js",
                            lineNumber: 481,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/create/page.js",
                    lineNumber: 356,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:hidden mt-6 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
                            onClick: handleCreate,
                            disabled: isCreating,
                            children: isCreating ? "Creating..." : "Create Gift Link 🎁"
                        }, void 0, false, {
                            fileName: "[project]/src/app/create/page.js",
                            lineNumber: 536,
                            columnNumber: 11
                        }, this),
                        link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-green-50 border-2 border-green-500 p-6 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-green-800 mb-2",
                                    children: "Gift Created! 🎉"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/create/page.js",
                                    lineNumber: 546,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-green-700 mb-3",
                                    children: "Share this link with your Valentine:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/create/page.js",
                                    lineNumber: 549,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-3 rounded border border-green-300 mb-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "text-blue-600 underline break-all text-sm",
                                        href: link,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: link
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create/page.js",
                                        lineNumber: 553,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/create/page.js",
                                    lineNumber: 552,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        navigator.clipboard.writeText(link);
                                        alert("Link copied to clipboard!");
                                    },
                                    className: "w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors",
                                    children: "Copy Link 📋"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/create/page.js",
                                    lineNumber: 562,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/create/page.js",
                            lineNumber: 545,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/create/page.js",
                    lineNumber: 535,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/create/page.js",
            lineNumber: 345,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/create/page.js",
        lineNumber: 344,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__47906b1c._.js.map