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

import { useState } from "react";
import GiftTypeSelector from "@/../components/GiftTypeSelector";
import CoffeeConfig from "@/../components/CoffeeConfig";
import GiftCardConfig from "@/../components/GiftCardConfig";
import ChocolateConfig from "@/../components/ChocolateConfig";
import CustomizationPanel from "@/../components/CustomizationPanel";

export default function CreatePage() {
  const [questionText, setQuestionText] = useState("");
  const [giftType, setGiftType] = useState("GIFTCARD");
  const [giftConfig, setGiftConfig] = useState({});
  
  // Customization state
  const [customization, setCustomization] = useState({
    theme: "classic",
    backgroundColor: "#FFF5F7",
    accentColor: "#FF69B4",
    backgroundImage: "none",
    giftWrapping: "heart",
    senderName: "Your Name",
    recipientName: "Their Name",
  });
  
  const [link, setLink] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

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
      giftConfig,
    };
    
    console.log("Sending payload:", payload);

    try {
      const res = await fetch("/api/gift/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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
    } finally {
      setIsCreating(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Create Your Valentine's Gift 💝
          </h1>
          <p className="text-gray-600">
            Design a personalized gift page for someone special
          </p>
        </div>

        {/* 3-COLUMN GRID: Settings | Customization | Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* COLUMN 1: Gift Details & Settings (spans 3 columns on large screens) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl text-purple-700 font-semibold mb-4">Gift Details</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-pink-600 font-medium mb-1">
                    Your Name *
                  </label>
                  <input
                    className="border border-gray-300 p-3 w-full rounded-lg text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Your name"
                    value={customization.senderName}
                    onChange={(e) =>
                      setCustomization({
                        ...customization,
                        senderName: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm text-pink-600 font-medium mb-1">
                    Recipient's Name *
                  </label>
                  <input
                    className="border border-gray-300 p-3 w-full rounded-lg text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Their name"
                    value={customization.recipientName}
                    onChange={(e) =>
                      setCustomization({
                        ...customization,
                        recipientName: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm text-pink-600 font-medium mb-1">
                    Main Message *
                  </label>
                  <textarea
                    className="border border-gray-300 p-3 w-full rounded-lg text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Will you be my Valentine?"
                    rows={3}
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl text-pink-600 font-semibold mb-4">Select Gift Type</h2>
              <GiftTypeSelector value={giftType} onChange={setGiftType} />

              <div className="mt-4">
                {giftType === "COFFEE" && (
                  <CoffeeConfig value={giftConfig} onChange={setGiftConfig} />
                )}
                {giftType === "GIFTCARD" && (
                  <GiftCardConfig value={giftConfig} onChange={setGiftConfig} />
                )}
                {giftType === "CHOCOLATES" && (
                  <ChocolateConfig value={giftConfig} onChange={setGiftConfig} />
                )}
              </div>
            </div>

            {/* Create Button - Desktop */}
            <button
              className="hidden lg:block w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleCreate}
              disabled={isCreating}
            >
              {isCreating ? "Creating..." : "Create Gift Link 🎁"}
            </button>

            {/* Success Message - Desktop */}
            {link && (
              <div className="hidden lg:block bg-green-50 border-2 border-green-500 p-6 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">
                  Gift Created! 🎉
                </h3>
                <p className="text-sm text-green-700 mb-3">
                  Share this link with your Valentine:
                </p>
                <div className="bg-white p-3 rounded border border-green-300 mb-3">
                  <a
                    className="text-blue-600 underline break-all text-sm"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link}
                  </a>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(link);
                    alert("Link copied to clipboard!");
                  }}
                  className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                >
                  Copy Link 📋
                </button>
              </div>
            )}
          </div>

          {/* COLUMN 2: Customization Panel (spans 4 columns on large screens) */}
          <div className="lg:col-span-4">
            <CustomizationPanel
              value={customization}
              onChange={setCustomization}
              questionText={questionText}
            />
          </div>

          {/* COLUMN 3: Preview (spans 5 columns on large screens) */}
          <div className="lg:col-span-5">
            <div className="sticky top-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Preview</h2>
              <div 
                className="min-h-[700px] rounded-2xl shadow-2xl p-8 md:p-12 flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: customization.backgroundColor || "#FFF5F7",
                  backgroundImage: customization.backgroundImage && customization.backgroundImage !== "none"
                    ? `url(/patterns/${customization.backgroundImage}.svg)`
                    : "none",
                  backgroundSize: "200px",
                  backgroundRepeat: "repeat"
                }}
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 max-w-md w-full">
                  <div className="text-center mb-6">
                    {/* Show selected wrapping in preview */}
                    <div className="text-7xl mb-4 animate-bounce">
                      {customization.giftWrapping === "heart" && "💝"}
                      {customization.giftWrapping === "basket" && "🧺"}
                      {customization.giftWrapping === "bear" && "🧸"}
                      {customization.giftWrapping === "box" && "🎁"}
                      {customization.giftWrapping === "envelope" && "💌"}
                      {!customization.giftWrapping && "💝"}
                    </div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: customization.accentColor }}>
                      {customization.senderName || "Your Name"} → {customization.recipientName || "Their Name"}
                    </h3>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4 mb-4">
                    <p className="text-center text-gray-800">
                      {questionText || "Your message will appear here..."}
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <span
                      className="px-6 py-2 rounded-full text-white font-semibold text-sm"
                      style={{ backgroundColor: customization.accentColor }}
                    >
                      {giftType === "COFFEE" && "☕ Coffee Gift"}
                      {giftType === "GIFTCARD" && "🎁 Gift Card"}
                      {giftType === "CHOCOLATES" && "🍫 Chocolates"}
                      {!giftType && "🎁 Gift"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-only Create Button & Success Message */}
        <div className="lg:hidden mt-6 space-y-4">
          <button
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleCreate}
            disabled={isCreating}
          >
            {isCreating ? "Creating..." : "Create Gift Link 🎁"}
          </button>

          {link && (
            <div className="bg-green-50 border-2 border-green-500 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">
                Gift Created! 🎉
              </h3>
              <p className="text-sm text-green-700 mb-3">
                Share this link with your Valentine:
              </p>
              <div className="bg-white p-3 rounded border border-green-300 mb-3">
                <a
                  className="text-blue-600 underline break-all text-sm"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link}
                </a>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(link);
                  alert("Link copied to clipboard!");
                }}
                className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
              >
                Copy Link 📋
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
