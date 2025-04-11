'use client';
import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

const categories = [
  'Action', 'Adventure', 'Comedy', 'Drama', 'Horror', 'Sci-Fi',
  'Romance', 'Animation', 'Fantasy', 'Biography', 'Crime'
];

export default function UploadMovie() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [screenshots, setScreenshots] = useState<string[]>(['']);
  const [downloadLinks, setDownloadLinks] = useState([{ quality: '', size: '', url: '' }]);

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(cat => cat !== category) : [...prev, category]
    );
  };

  const handleScreenshotChange = (index: number, value: string) => {
    const updated = [...screenshots];
    updated[index] = value;
    setScreenshots(updated);
  };

  const handleDownloadChange = (index: number, key: string, value: string) => {
    const updated = [...downloadLinks];
    updated[index] = { ...updated[index], [key]: value };
    setDownloadLinks(updated);
  };

//   // Tailwind utility class for inputs


  return (
    <div className="space-y-8 max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Upload Movie</h1>
        <p className="text-gray-500">Add a new movie to your collection with all the necessary details.</p>
      </div>

      {/* Movie Details */}
      <div className="bg-white border rounded-xl p-6 shadow-sm space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">🎬 Movie Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="Movie Title" className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="number" defaultValue={2024} className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Release Year" />
          <textarea className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2" placeholder="Description" />
          <input placeholder="Director" className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="number" placeholder="Duration (minutes)" className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input placeholder="Cast (comma separated)" className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2" />
        </div>
      </div>

      {/* Category Selection */}
      <div className="bg-white border rounded-xl p-6 shadow-sm space-y-4">
        <h2 className="text-xl font-semibold border-b pb-2">🎞️ Categories</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryToggle(category)}
              className={`px-4 py-2 rounded-full border text-sm transition ${
                selectedCategories.includes(category)
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {selectedCategories.length === 0 && (
          <p className="text-sm text-red-500">No categories selected</p>
        )}
      </div>

      {/* Upload Images */}
      <div className="bg-white border rounded-xl p-6 shadow-sm space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">🖼️ Upload Images</h2>
        <div className="space-y-4">
          <input type="text" placeholder="Banner Image URL" className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="text" placeholder="Thumbnail Image URL" className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

          <div className="space-y-2">
            <label className="font-medium">Screenshots</label>
            {screenshots.map((url, i) => (
              <div key={i} className="flex gap-2 items-center">
                <input
                  type="text"
                  placeholder={`Screenshot ${i + 1} URL`}
                  value={url}
                  onChange={(e) => handleScreenshotChange(i, e.target.value)}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                />
                <button onClick={() => setScreenshots(prev => prev.filter((_, idx) => idx !== i))}>
                  <Trash2 className="text-red-500 w-4 h-4" />
                </button>
              </div>
            ))}
            <button
              onClick={() => setScreenshots(prev => [...prev, ''])}
              className="text-sm text-blue-600 hover:underline"
            >
              <Plus className="inline-block w-4 h-4" /> Add Screenshot
            </button>
          </div>
        </div>
      </div>

      {/* Download Links */}
      <div className="bg-white border rounded-xl p-6 shadow-sm space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">📥 Download Links</h2>
        {downloadLinks.map((link, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <input
              type="text"
              placeholder="Quality (e.g. 1080p)"
              value={link.quality}
              onChange={(e) => handleDownloadChange(index, 'quality', e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Size (e.g. 1.4GB)"
              value={link.size}
              onChange={(e) => handleDownloadChange(index, 'size', e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-2 items-center">
              <input
                type="text"
                placeholder="Download URL"
                value={link.url}
                onChange={(e) => handleDownloadChange(index, 'url', e.target.value)}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
              />
              <button onClick={() => setDownloadLinks(prev => prev.filter((_, i) => i !== index))}>
                <Trash2 className="text-red-500 w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
        <button
          onClick={() => setDownloadLinks(prev => [...prev, { quality: '', size: '', url: '' }])}
          className="text-sm text-blue-600 hover:underline"
        >
          <Plus className="inline-block w-4 h-4" /> Add Download Link
        </button>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-4">
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2 rounded-lg border">
          Save as Draft
        </button>
        <button className="bg-[#e11d48] hover:bg-[#e11d47e0] text-white px-5 py-2 rounded-lg">
          Publish Movie
        </button>
      </div>
    </div>
  );
}


