// component for the gift car type

export default function GiftCardConfig({ value, onChange }) {
  return (
    <>
      <input
        className="border p-2 w-full mb-2"
        type="number"
        placeholder="Amount (USD)"
        value={value.amount || ""}
        onChange={(e) =>
          onChange({ ...value, amount: Number(e.target.value) })
        }
      />
      <p className="text-sm text-gray-500">
        (Mocked gift card for now)
      </p>
    </>
  );
}
