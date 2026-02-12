// component for the coffee type front end


export default function CoffeeConfig({ value, onChange }) {
  return (
    <>
    <label className="block mb-2 text-pink-600 font-semibold">IN DEVELOPMENT </label>
      {/* <input
        className="border p-2 w-full mb-2"
        placeholder="Drink (e.g. Latte)"
        value={value.drink || ""}
        onChange={(e) => onChange({ ...value, drink: e.target.value })}
      />
      <input
        className="border p-2 w-full mb-2"
        placeholder="Size (e.g. Grande)"
        value={value.size || ""}
        onChange={(e) => onChange({ ...value, size: e.target.value })}
      />
      <input
        className="border p-2 w-full mb-2"
        placeholder="Milk (e.g. Oat)"
        value={value.milk || ""}
        onChange={(e) => onChange({ ...value, milk: e.target.value })}
      /> */}
    </>
  );
}

