"use client";

import { useState } from "react";

export default function CreatePage() {
  const [senderName, setSenderName] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [theme, setTheme] = useState("classic");
  const [link, setLink] = useState(null);

  async function handleCreate() {
    const res = await fetch("/api/gift/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        senderName,
        recipientName,
        questionText,
        theme,
      }),
    });

    const data = await res.json();
    setLink(`${window.location.origin}/g/${data.slug}`);
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl mb-4">Create Your Valentine</h1>

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
        className="border p-2 w-full mb-2"
        placeholder="Your message"
        onChange={(e) => setQuestionText(e.target.value)}
      />

      <button
        className="bg-pink-500 text-white px-4 py-2"
        onClick={handleCreate}
      >
        Create Link
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

