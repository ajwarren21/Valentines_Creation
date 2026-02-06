"use client";

import { useEffect, useState } from "react";

export default function GiftPage({ params }) {
  const { slug } = params;
  const [gift, setGift] = useState(null);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    fetch(`/api/gift/${slug}`)
      .then((res) => res.json())
      .then(setGift);
  }, [slug]);

  async function handleAccept() {
    await fetch(`/api/gift/${slug}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        drink: "Latte",
        size: "Grande",
        milk: "Oat",
      }),
    });
    setAccepted(true);
  }

  if (!gift) return <p>Loading...</p>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl">
        {gift.senderName} asks {gift.recipientName}
      </h1>

      <p className="my-4">{gift.questionText}</p>

      {!accepted ? (
        <button
          className="bg-green-500 text-white px-4 py-2"
          onClick={handleAccept}
        >
          Yes 💖
        </button>
      ) : (
        <p className="text-pink-600 mt-4">Coffee is on the way ☕</p>
      )}
    </div>
  );
}
