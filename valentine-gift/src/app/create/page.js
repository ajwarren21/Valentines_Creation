"use client";

import { useState } from "react";
import GiftTypeSelector from "@/../components/GiftTypeSelector";
import CoffeeConfig from "@/../components/CoffeeConfig";
import GiftCardConfig from "@/../components/GiftCardConfig";
import ChocolateConfig from "@/../components/ChocolateConfig";

export default function CreatePage() {
  const [senderName, setSenderName] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [giftType, setGiftType] = useState("COFFEE");
  const [giftConfig, setGiftConfig] = useState({});
  const [link, setLink] = useState(null);

  async function handleCreate() {
    const res = await fetch("/api/gift/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        senderName,
        recipientName,
        questionText,
        theme: "classic",
        giftType,
        giftConfig,
      }),
    });

    const data = await res.json();
    setLink(`${window.location.origin}/g/${data.slug}`);
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl mb-4">Create a Gift</h1>

      <input
        className="border p-2 w-full mb-2"
        placeholder="Your name"
        onChange={(e) => setSenderName(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-2"
        placeholder="Their name"
        onChange={(e) => setRecipientName(e.target.value)}
      />

      <textarea
        className="border p-2 w-full mb-4"
        placeholder="Message"
        onChange={(e) => setQuestionText(e.target.value)}
      />

      <GiftTypeSelector value={giftType} onChange={setGiftType} />

      {giftType === "COFFEE" && (
        <CoffeeConfig value={giftConfig} onChange={setGiftConfig} />
      )}
      {giftType === "GIFTCARD" && (
        <GiftCardConfig value={giftConfig} onChange={setGiftConfig} />
      )}
      {giftType === "CHOCOLATES" && (
        <ChocolateConfig value={giftConfig} onChange={setGiftConfig} />
      )}

      <button
        className="bg-pink-500 text-white px-4 py-2 mt-4"
        onClick={handleCreate}
      >
        Create Gift Link
      </button>

      {link && (
        <p className="mt-4">
          Share this link:{" "}
          <a className="text-blue-600 underline" href={link}>
            {link}
          </a>
        </p>
      )}
    </div>
  );
}
