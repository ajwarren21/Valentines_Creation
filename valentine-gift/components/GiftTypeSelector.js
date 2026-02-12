// component for the gift type front end

export default function GiftTypeSelector({ value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-pink-600 font-semibold">Gift Type</label>
      <select
        className="border p-2 w-full text-gray-900 placeholder:text-gray-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="COFFEE">☕ Coffee</option>
        <option value="GIFTCARD">💳 Gift Card</option>
        <option value="CHOCOLATES">🍫 Chocolates</option>
      </select>
    </div>
  );
}


// export default function GiftTypeSelector({ value, onChange }) {
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
