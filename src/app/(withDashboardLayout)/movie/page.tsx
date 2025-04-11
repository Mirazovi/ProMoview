'use client'
import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import Image from "next/image";

const movies = [
  { title: "Dune: Part Two", year: 2024, categories: ["Sci-Fi", "Adventure"], downloads: 1245, status: "Published", image: "/images/dune.jpg" },
  { title: "Oppenheimer", year: 2023, categories: ["Drama", "Biography"], downloads: 3421, status: "Published", image: "/images/oppenheimer.jpg" },
  { title: "The Batman", year: 2022, categories: ["Action", "Crime"], downloads: 2876, status: "Published", image: "/images/batman.jpg" },
  { title: "Everything Everywhere All at Once", year: 2022, categories: ["Action", "Adventure", "Comedy"], downloads: 4532, status: "Published", image: "/images/everything.jpg" },
  { title: "Barbie", year: 2023, categories: ["Comedy", "Adventure"], downloads: 5421, status: "Published", image: "/images/barbie.jpg" },
  { title: "Poor Things", year: 2023, categories: ["Romance", "Sci-Fi"], downloads: 3245, status: "Draft", image: "/images/poorthings.jpg" },
  { title: "Killers of the Flower Moon", year: 2023, categories: ["Crime", "Drama"], downloads: 2987, status: "Published", image: "/images/killers.jpg" },
  { title: "The Holdovers", year: 2023, categories: ["Comedy", "Drama"], downloads: 1876, status: "Published", image: "/images/holdovers.jpg" },
  { title: "Past Lives", year: 2023, categories: ["Drama", "Romance"], downloads: 2134, status: "Published", image: "/images/pastlives.jpg" },
  { title: "The Fall Guy", year: 2024, categories: ["Action", "Comedy"], downloads: 1543, status: "Draft", image: "/images/fallguy.jpg" },
];

export default function MovieDashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 5;

  // Calculate total pages
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  // Get movies for the current page
  const currentMovies = movies.slice((currentPage - 1) * moviesPerPage, currentPage * moviesPerPage);

  // Handle pagination logic
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Movies</h1>
          <p className="text-gray-500">Manage your movie collection and track downloads.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#e11d48] text-white px-4 py-2 rounded-lg hover:bg-[#e11d47d2] transition">
          <Plus className="w-4 h-4" />
          Upload Movie
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <input
          type="text"
          placeholder="Search movies..."
          className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select className="px-4 py-2 border rounded-lg">
          <option>Status: All</option>
          <option>Published</option>
          <option>Draft</option>
        </select>
        <select className="px-4 py-2 border rounded-lg">
          <option>Category: All</option>
          <option>Action</option>
          <option>Comedy</option>
          <option>Drama</option>
          <option>Sci-Fi</option>
        </select>
      </div>

      {/* Movie Table */}
      <div className="overflow-auto rounded-xl border">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-4 text-left">Image</th>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Year</th>
              <th className="py-3 px-4 text-left">Categories</th>
              <th className="py-3 px-4 text-left">Downloads</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentMovies.map((movie, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">
                  <Image width={300} height={300} src={movie.image} alt={movie.title} className="w-16 h-10 object-cover rounded" />
                </td>
                <td className="py-3 px-4 font-medium">{movie.title}</td>
                <td className="py-3 px-4">{movie.year}</td>
                <td className="py-3 px-4 space-x-1">
                  {movie.categories.map((cat, i) => (
                    <span key={i} className="inline-block bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                      {cat}
                    </span>
                  ))}
                </td>
                <td className="py-3 px-4">{movie.downloads.toLocaleString()}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${movie.status === "Published" ? "bg-[#e11d48] text-white" : "bg-yellow-100 text-yellow-600"}`}
                  >
                    {movie.status}
                  </span>
                </td>
                <td className="py-3 px-4 space-x-2">
                  <button className="text-blue-500 hover:underline flex items-center gap-1 text-xs">
                    <Pencil className="w-4 h-4" /> Edit
                  </button>
                  <button className="text-red-500 hover:underline flex items-center gap-1 text-xs">
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-600">Showing {currentPage * moviesPerPage - moviesPerPage + 1}–{currentPage * moviesPerPage} of {movies.length} movies</span>
        <div className="flex items-center gap-2">
          <button
            onClick={prevPage}
            className="px-3 py-1 border rounded text-sm hover:bg-gray-100"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            className="px-3 py-1 border rounded text-sm hover:bg-gray-100"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
