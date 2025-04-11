import { Plus, Pencil, Trash2 } from "lucide-react";

const categories = [
  { name: "Action", count: 42 },
  { name: "Adventure", count: 38 },
  { name: "Comedy", count: 65 },
  { name: "Drama", count: 84 },
  { name: "Horror", count: 27 },
  { name: "Sci-Fi", count: 36 },
  { name: "Thriller", count: 29 },
  { name: "Romance", count: 31 },
  { name: "Animation", count: 24 },
  { name: "Fantasy", count: 19 },
  { name: "Biography", count: 15 },
  { name: "Crime", count: 22 },
];

export default function CategoryPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Categories</h1>
          <p className="text-gray-500">Manage movie categories and organize your content.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#e11d48] text-white px-4 py-2 rounded-lg hover:bg-[#e11d47d7] transition">
          <Plus className="w-4 h-4" />
          Add Category
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <input
          type="text"
          placeholder="Search categories..."
          className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select className="px-4 py-2 border rounded-lg">
          <option>Sort: A-Z</option>
          <option>Z-A</option>
          <option>Most Movies</option>
        </select>
      </div>

      {/* Category List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center bg-white border rounded-xl shadow-sm px-4 py-3 hover:shadow-md transition"
          >
            <div>
              <h2 className="text-lg font-semibold">{cat.name}</h2>
              <p className="text-sm text-gray-500">{cat.count} movies</p>
            </div>
            <div className="flex gap-2">
              <button className="text-blue-600 flex items-center gap-1 text-sm hover:underline">
                <Pencil className="w-4 h-4" /> Edit
              </button>
              <button className="text-red-500 flex items-center gap-1 text-sm hover:underline">
                <Trash2 className="w-4 h-4" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
