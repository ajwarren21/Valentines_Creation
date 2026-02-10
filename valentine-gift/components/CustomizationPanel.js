// components/CustomizationPanel.jsx
"use client";

export default function CustomizationPanel({ value, onChange }) {
  const themes = [
    { id: "classic", name: "Classic Romance", bg: "#FFF5F7", accent: "#FF69B4" },
    { id: "elegant", name: "Elegant", bg: "#F5F5F0", accent: "#D4AF37" },
    { id: "playful", name: "Playful", bg: "#FFE5E5", accent: "#FF1493" },
    { id: "modern", name: "Modern", bg: "#FFFFFF", accent: "#E91E63" },
  ];

  const backgroundImages = [
    { id: "none", name: "Solid Color", preview: null },
    { id: "hearts", name: "Floating Hearts", preview: "@/../public/hearts.svg" },
    { id: "roses", name: "Rose Pattern", preview: "@/../public/roses.svg" },
    { id: "abstract", name: "Abstract", preview: "@/../public/abstract.svg" },
  ];

  const handleThemeChange = (theme) => {
    onChange({
      ...value,
      theme: theme.id,
      backgroundColor: theme.bg,
      accentColor: theme.accent,
    });
  };

  return (
    <div className="space-y-6 p-4 border rounded-lg bg-white">
      <h3 className="text-lg text-purple-700 font-semibold">Customize Your Gift Page</h3>

      {/* Theme Presets */}
      <div>
        <label className="block text-sm text-pink-600 font-medium mb-2">Theme</label>
        <div className="grid grid-cols-2 gap-3">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => handleThemeChange(theme)}
              className={`p-3 border-2 rounded-lg text-left transition-all ${
                value.theme === theme.id
                  ? "border-pink-500 bg-pink-50"
                  : "border-gray-200 hover:border-pink-300"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <div
                  className="w-6 h-6 rounded-full border-2"
                  style={{ backgroundColor: theme.bg, borderColor: theme.accent }}
                />
                <span className="text-sm font-medium">{theme.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Custom Colors */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-pink-600 font-medium mb-2">Background Color</label>
          <div className="flex gap-2">
            <input
              type="color"
              value={value.backgroundColor || "#FFF5F7"}
              onChange={(e) => onChange({ ...value, backgroundColor: e.target.value })}
              className="w-12 h-10 rounded cursor-pointer"
            />
            <input
              type="text"
              value={value.backgroundColor || "#FFF5F7"}
              onChange={(e) => onChange({ ...value, backgroundColor: e.target.value })}
              className="flex-1 border rounded px-2 text-sm"
              placeholder="#FFF5F7"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Accent Color</label>
          <div className="flex gap-2">
            <input
              type="color"
              value={value.accentColor || "#FF69B4"}
              onChange={(e) => onChange({ ...value, accentColor: e.target.value })}
              className="w-12 h-10 rounded cursor-pointer"
            />
            <input
              type="text"
              value={value.accentColor || "#FF69B4"}
              onChange={(e) => onChange({ ...value, accentColor: e.target.value })}
              className="flex-1 border rounded px-2 text-sm"
              placeholder="#FF69B4"
            />
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div>
        <label className="block text-sm text-pink-600 font-medium mb-2">Background Pattern</label>
        <div className="grid grid-cols-2 gap-3">
          {backgroundImages.map((bg) => (
            <button
              key={bg.id}
              onClick={() => onChange({ ...value, backgroundImage: bg.id })}
              className={`p-3 border-2 rounded-lg text-center transition-all ${
                value.backgroundImage === bg.id
                  ? "border-pink-500 bg-pink-50"
                  : "border-gray-200 hover:border-pink-300"
              }`}
            >
              <div className="text-sm font-medium">{bg.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Preview */}
      <div>
        <label className="block text-sm font-medium mb-2">Preview</label>
        <div
          className="h-32 rounded-lg border-2 flex items-center justify-center"
          style={{
            backgroundColor: value.backgroundColor || "#FFF5F7",
            backgroundImage:
              value.backgroundImage && value.backgroundImage !== "none"
                ? `url(/patterns/${value.backgroundImage}.svg)`
                : "none",
            backgroundSize: "200px",
          }}
        >
          <span
            className="text-2xl font-bold px-6 py-3 rounded-full"
            style={{
              backgroundColor: value.accentColor || "#FF69B4",
              color: "white",
            }}
          >
            ❤️ Preview
          </span>
        </div>
      </div>
    </div>
  );
}
