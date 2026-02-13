// component for the gift car type

// going to route to: https://www.amazon.com/dp/B0DSBM8T1M?ref=altParentAsins_treatment_text_from_Any_to_Appreciation&th=1


export default function GiftCardConfig({ value, onChange }) {
  return (
    <>
    <div className="space-y-4">
      
      <p className="text-purple-700 font-bold text-lg">
        Buy Card Here: <a href="https://www.amazon.com/dp/B0DSBM8T1M?ref=altParentAsins_treatment_text_from_Any_to_Appreciation&th=1" target="_blank" rel="noopener noreferrer" className="font-medium text-fg-brand underline hover:no-underline">Giftcard</a>
        </p>

      <label className="block mb-2 text-pink-600 font-semibold">Insert Code Here: </label>
      <input
        className="border p-2 w-full mb-2 text-gray-900 placeholder:text-gray-500"
        type="text"
        placeholder="Giftcard code"
        value={value.code || ""}
        onChange={(e) =>
          onChange({ ...value, code: String(e.target.value) })
        }
      />
      <p className="text-sm text-gray-500">
        (No Stripe integration for now)
      </p>
    </div>
    </>
  );
  
}
