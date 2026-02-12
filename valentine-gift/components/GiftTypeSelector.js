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
