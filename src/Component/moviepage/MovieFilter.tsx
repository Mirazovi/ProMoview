import { useState } from "react";

const years = [2024, 2023, 2022, 2021, 2020, 2019];
const categories = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Horror",
  "Sci-Fi",
  "Thriller",
  "Romance",
];
const qualityOptions = ["4K", "1080p", "720p"];

export default function MovieFilterPage() {
  const [rating, setRating] = useState(0);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedQuality, setSelectedQuality] = useState<string[]>([]);

  const toggleSelection = <T,>(value: T, selected: T[], setSelected: (val: T[]) => void) => {
    setSelected(
      selected.includes(value)
        ? selected.filter((v) => v !== value)
        : [...selected, value]
    );
  };

  const removeFilter = (type: string, value: string | number) => {
    switch (type) {
      case "year":
        setSelectedYears(selectedYears.filter((y) => y !== value));
        break;
      case "category":
        setSelectedCategories(selectedCategories.filter((c) => c !== value));
        break;
      case "quality":
        setSelectedQuality(selectedQuality.filter((q) => q !== value));
        break;
      default:
        break;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Filter Movies</h1>

      {/* Rating */}
      <div className="space-y-2">
        <label className="font-semibold block">Rating</label>
        <input
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={rating}
          onChange={(e) => setRating(parseFloat(e.target.value))}
          className="w-full"
        />
        <p className="text-sm text-gray-500">Rating: {rating}</p>
      </div>

      {/* Release Year */}
      <div className="space-y-2">
        <label className="font-semibold block">Release Year</label>
        <div className="flex flex-wrap gap-4">
          {years.map((year) => (
            <label key={year} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedYears.includes(year)}
                onChange={() => toggleSelection(year, selectedYears, setSelectedYears)}
              />
              <span >{year}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Categories as Select Dropdown */}
      <div className="space-y-2">
        <label className="font-semibold block">Categories</label>
        <select
          onChange={(e) => {
            const selected = e.target.value;
            if (selected && !selectedCategories.includes(selected)) {
              setSelectedCategories([...selectedCategories, selected]);
            }
          }}
          className="w-full bg-gray-800 text-white p-2 rounded"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Quality */}
      <div className="space-y-2">
        <label className="font-semibold block">Quality</label>
        <div className="flex flex-wrap gap-4">
          {qualityOptions.map((quality) => (
            <label key={quality} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedQuality.includes(quality)}
                onChange={() => toggleSelection(quality, selectedQuality, setSelectedQuality)}
              />
              <span>{quality}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Active Filters */}
      <div className="space-y-2">
        <label className="font-semibold block">Active Filters</label>
        <div className="flex flex-wrap gap-2">
          {selectedYears.map((year) => (
            <span
              key={year}
              className="flex items-center bg-gray-700 text-white px-3 py-1 rounded-full"
            >
              {year}
              <button
                onClick={() => removeFilter("year", year)}
                className="ml-2 text-white text-sm"
              >
                &times;
              </button>
            </span>
          ))}
          {selectedCategories.map((cat) => (
            <span
              key={cat}
              className="flex items-center bg-gray-700 text-white px-3 py-1 rounded-full"
            >
              {cat}
              <button
                onClick={() => removeFilter("category", cat)}
                className="ml-2 text-white text-sm"
              >
                &times;
              </button>
            </span>
          ))}
          {selectedQuality.map((q) => (
            <span
              key={q}
              className="flex items-center bg-gray-700 text-white px-3 py-1 rounded-full"
            >
              {q}
              <button
                onClick={() => removeFilter("quality", q)}
                className="ml-2 text-white text-sm"
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Apply Filters */}
      <button className="mt-4 w-full bg-[#e11d48] text-white py-2 rounded hover:bg-[#de264ed0] transition">
        Apply Filters
      </button>
    </div>
  );
}
