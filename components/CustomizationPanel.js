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

export default function CustomizationPanel({ value, onChange, questionText }) {
  const themes = [
    { id: "classic", name: "Classic Romance", bg: "#FFF5F7", accent: "#FF69B4" },
    { id: "elegant", name: "Elegant", bg: "#F5F5F0", accent: "#D4AF37" },
    { id: "playful", name: "Playful", bg: "#FFE5E5", accent: "#FF1493" },
    { id: "modern", name: "Modern", bg: "#FFFFFF", accent: "#E91E63" },
  ];

  const backgroundImages = [
    { id: "none", name: "Solid Color" },
    { id: "hearts", name: "Hearts" },
    { id: "roses", name: "Roses" },
    { id: "abstract", name: "Abstract" },
  ];

  const giftWrappings = [
    { id: "heart", name: "Heart Box", emoji: "💝" },
    { id: "basket", name: "Gift Basket", emoji: "🧺" },
    { id: "bear", name: "Teddy Bear", emoji: "🧸" },
    { id: "box", name: "Gift Box", emoji: "🎁" },
    { id: "envelope", name: "Love Letter", emoji: "💌" },
  ];

  const handleThemeChange = (theme) => {
    onChange({
      ...value,
      theme: theme.id,
      backgroundColor: theme.bg,
      accentColor: theme.accent,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
      <h2 className="text-2xl text-purple-700 font-bold">Customization</h2>

      {/* Theme Presets */}
      <div>
        <label className="block text-sm text-pink-600 font-medium mb-3">
          Choose Theme
        </label>
        <div className="grid grid-cols-2 gap-3">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => handleThemeChange(theme)}
              className={`p-3 border-2 rounded-lg transition-all hover:scale-105 ${
                value.theme === theme.id
                  ? "border-pink-500 bg-pink-50 shadow-md"
                  : "border-gray-200 hover:border-pink-300"
              }`}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full border-2 flex-shrink-0"
                  style={{ backgroundColor: theme.bg, borderColor: theme.accent }}
                />
                <span className="text-sm font-medium text-gray-800">{theme.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Custom Colors */}
      <div>
        <label className="block text-sm text-pink-600 font-medium mb-3">
          Custom Colors
        </label>
        <div className="space-y-3">
          <div>
            <label className="block text-xs text-gray-600 mb-1">Background</label>
            <div className="flex gap-2">
              <input
                type="color"
                value={value.backgroundColor || "#FFF5F7"}
                onChange={(e) => onChange({ ...value, backgroundColor: e.target.value })}
                className="w-12 h-10 rounded cursor-pointer border border-gray-300"
              />
              <input
                type="text"
                value={value.backgroundColor || "#FFF5F7"}
                onChange={(e) => onChange({ ...value, backgroundColor: e.target.value })}
                className="flex-1 border border-gray-300 rounded px-3 text-sm text-gray-900 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="#FFF5F7"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-gray-600 mb-1">Accent</label>
            <div className="flex gap-2">
              <input
                type="color"
                value={value.accentColor || "#FF69B4"}
                onChange={(e) => onChange({ ...value, accentColor: e.target.value })}
                className="w-12 h-10 rounded cursor-pointer border border-gray-300"
              />
              <input
                type="text"
                value={value.accentColor || "#FF69B4"}
                onChange={(e) => onChange({ ...value, accentColor: e.target.value })}
                className="flex-1 border border-gray-300 rounded px-3 text-sm text-gray-900 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="#FF69B4"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div>
        <label className="block text-sm text-pink-600 font-medium mb-3">
          Background Pattern
        </label>
        <div className="grid grid-cols-2 gap-2">
          {backgroundImages.map((bg) => (
            <button
              key={bg.id}
              onClick={() => onChange({ ...value, backgroundImage: bg.id })}
              className={`p-3 border-2 rounded-lg text-center transition-all hover:scale-105 ${
                value.backgroundImage === bg.id
                  ? "border-pink-500 bg-pink-50 shadow-md"
                  : "border-gray-200 hover:border-pink-300"
              }`}
            >
              <div className="text-sm font-medium text-gray-800">{bg.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Gift Wrapping Selection */}
      <div>
        <label className="block text-sm text-pink-600 font-medium mb-2">
          Gift Wrapping
        </label>
        <p className="text-xs text-gray-500 mb-3">Choose how your gift will be presented</p>
        <div className="grid grid-cols-2 gap-3">
          {giftWrappings.map((wrapping) => (
            <button
              key={wrapping.id}
              onClick={() => onChange({ ...value, giftWrapping: wrapping.id })}
              className={`p-4 border-2 rounded-lg transition-all hover:scale-105 ${
                value.giftWrapping === wrapping.id
                  ? "border-pink-500 bg-pink-50 shadow-md"
                  : "border-gray-200 hover:border-pink-300"
              }`}
            >
              <div className="text-center">
                <div className="text-4xl mb-2">{wrapping.emoji}</div>
                <div className="text-xs font-medium text-gray-800">{wrapping.name}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
