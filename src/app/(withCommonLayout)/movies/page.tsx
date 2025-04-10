'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Container from '@/Component/ui/Container';
import { DownloadIcons, PlayIcons } from '@/Component/Icons/Icons';
import MovieFilterPage from '@/Component/moviepage/MovieFilter';

const Page = () => {
 
  const latestMovies = [
    {
      id: "4",
      title: "Everything Everywhere All at Once",
      image: "/images/demo.jpg",
      rating: 4.9,
      year: 2022,
      categories: ["Action", "Adventure", "Comedy"],
    },
    {
      id: "5",
      title: "Barbie",
      image: "/images/demo.jpg",
      rating: 4.3,
      year: 2023,
      categories: ["Comedy", "Adventure"],
    },
    {
      id: "6",
      title: "Poor Things",
      image: "/images/demo.jpg",
      rating: 4.6,
      year: 2023,
      categories: ["Romance", "Sci-Fi"],
    },
    {
      id: "7",
      title: "Killers of the Flower Moon",
      image: "/images/demo.jpg",
      rating: 4.4,
      year: 2023,
      categories: ["Crime", "Drama"],
    },
    {
      id: "8",
      title: "The Holdovers",
      image: "/images/demo.jpg",
      rating: 4.2,
      year: 2023,
      categories: ["Comedy", "Drama"],
    },
    {
      id: "9",
      title: "Past Lives",
      image: "/images/demo.jpg",
      rating: 4.5,
      year: 2023,
      categories: ["Drama", "Romance"],
    },
    {
      id: "10",
      title: "The Fall Guy",
      image: "/images/demo.jpg",
      rating: 4.1,
      year: 2024,
      categories: ["Action", "Comedy"],
    },
    {
      id: "11",
      title: "Godzilla x Kong: The New Empire",
      image: "/images/demo.jpg",
      rating: 4.0,
      year: 2024,
      categories: ["Action", "Sci-Fi"],
    },
    {
      id: "4",
      title: "Everything Everywhere All at Once",
      image: "/images/demo.jpg",
      rating: 4.9,
      year: 2022,
      categories: ["Action", "Adventure", "Comedy"],
    },
    {
      id: "5",
      title: "Barbie",
      image: "/images/demo.jpg",
      rating: 4.3,
      year: 2023,
      categories: ["Comedy", "Adventure"],
    },
    {
      id: "6",
      title: "Poor Things",
      image: "/images/demo.jpg",
      rating: 4.6,
      year: 2023,
      categories: ["Romance", "Sci-Fi"],
    },
    {
      id: "7",
      title: "Killers of the Flower Moon",
      image: "/images/demo.jpg",
      rating: 4.4,
      year: 2023,
      categories: ["Crime", "Drama"],
    },
    {
      id: "4",
      title: "Everything Everywhere All at Once",
      image: "/images/demo.jpg",
      rating: 4.9,
      year: 2022,
      categories: ["Action", "Adventure", "Comedy"],
    },
    {
      id: "5",
      title: "Barbie",
      image: "/images/demo.jpg",
      rating: 4.3,
      year: 2023,
      categories: ["Comedy", "Adventure"],
    },
    {
      id: "6",
      title: "Poor Things",
      image: "/images/demo.jpg",
      rating: 4.6,
      year: 2023,
      categories: ["Romance", "Sci-Fi"],
    },
    {
      id: "7",
      title: "Killers of the Flower Moon",
      image: "/images/demo.jpg",
      rating: 4.4,
      year: 2023,
      categories: ["Crime", "Drama"],
    },
    {
      id: "8",
      title: "The Holdovers",
      image: "/images/demo.jpg",
      rating: 4.2,
      year: 2023,
      categories: ["Comedy", "Drama"],
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(latestMovies.length / itemsPerPage);

  const paginatedMovies = latestMovies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="w-full min-h-screen bg-[#0c0a09] text-white">
      
      <Container>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Movies */}
          <div className="w-full flex-1">
            <h6 className="text-3xl font-bold pt-20">All Movies</h6>
            <h6 className="text-xl pb-10">
              Browse and download our complete collection of movies
            </h6>

            {/* Movie Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {paginatedMovies.map((movie, index) => (
                <div key={index} className="h-[400px] group relative">
                  <div className="relative w-full h-[270px] overflow-hidden rounded-xl">
                    <Image
                      width={500}
                      height={500}
                      src={movie.image}
                      alt="img"
                      className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                      <button className="mb-2 w-[80%] px-4 py-2 bg-[#27272a] hover:bg-[#3c3c43] text-white rounded flex gap-1 items-center justify-center">
                        <DownloadIcons /> Download
                      </button>
                      <button className="px-4 w-[80%] py-2 bg-[#0e0e0e] hover:bg-[#424249] text-white rounded flex items-center justify-center">
                        <PlayIcons className="text-2xl" /> Watch Now
                      </button>
                    </div>
                  </div>

                  <h3 className="font-semibold mt-2 transition-colors duration-300 group-hover:text-red-500">
                    {movie.title}
                  </h3>
                  <div className="flex gap-2 items-center">
                    <p className="text-yellow-400 text-lg font-semibold">{movie.rating}</p>
                    <p className="text-sm text-gray-400">• {movie.year}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination with Numbers */}
            <div className="flex justify-center mt-10 gap-2 flex-wrap mb-10">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 transition ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-3 py-1 rounded transition ${currentPage === pageNum
                      ? 'bg-[#e6244e] text-white'
                      : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                >
                  {pageNum}
                </button>
              ))}

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 transition ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Next
              </button>
            </div>
          </div>

          {/* Right Side - Filter */}
          <div className="w-full lg:w-[30%]">
            <div className="sticky top-20 w-full">
              <MovieFilterPage />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
