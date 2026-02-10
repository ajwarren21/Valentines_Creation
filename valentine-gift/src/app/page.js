// src/app/page.js
export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-pink-50">
      <h1 className="text-5xl font-bold mb-4">Valentine's Gift Creator</h1>
      <p className="text-lg text-gray-700 mb-6">
        Send a personalized coffee, gift card, or chocolate gift.
      </p>
      <a
        href="/create"
        className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Create a Gift
      </a>
    </main>
  );
}
