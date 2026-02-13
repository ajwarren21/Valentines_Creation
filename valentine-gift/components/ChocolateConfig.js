// Component for the choco type

export default function ChocolateConfig({ value, onChange }) {
  return (
    <>
    <label className="block mb-2 text-pink-600 font-semibold">IN DEVELOPMENT </label>
      {/* <input
        className="border p-2 w-full mb-2"
        placeholder="Chocolate name"
        value={value.title || ""}
        onChange={(e) => onChange({ ...value, title: e.target.value })}
      />
      <input
        className="border p-2 w-full mb-2"
        placeholder="Amazon ASIN (fake ok)"
        value={value.asin || ""}
        onChange={(e) => onChange({ ...value, asin: e.target.value })}
      /> */}
    </>
  );
}
