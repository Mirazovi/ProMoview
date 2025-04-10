"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DownloadIcons, PlayIcons, RightArrowIcons } from "../Icons/Icons";
import Container from "../ui/Container";



// const categories = [
//   { name: "Action", count: 42, image: "/placeholder.svg?height=300&width=500" },
//   { name: "Adventure", count: 38, image: "/placeholder.svg?height=300&width=500" },
//   { name: "Comedy", count: 65, image: "/placeholder.svg?height=300&width=500" },
//   { name: "Drama", count: 84, image: "/placeholder.svg?height=300&width=500" },
//   { name: "Horror", count: 27, image: "/placeholder.svg?height=300&width=500" },
//   { name: "Sci-Fi", count: 36, image: "/placeholder.svg?height=300&width=500" },
// ]

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
]

const LatestMovies: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#0c0a09] text-white">
      <Container >
          <div className="container mx-auto py-12">
            {/* Header */}
            <div className=" mb-12 flex justify-between">
              <div>
                <h2 className="text-4xl font-bold">Latest Movies</h2>
                <p className="text-lg text-gray-400 mt-4">Explore our collection of the latest movies</p>
              </div>

              <div className="mt-6">
                <Link href="/movies" className="border-2 border-white hover:bg-[#101010] text-white px-6 py-2 rounded-lg text-sm flex gap-2 items-center">
                  View All Movies <RightArrowIcons />
                </Link>
              </div>
            </div>

            {/* Movies List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {latestMovies.map((movie, index) => (
                <div key={index} className="h-[500px] group relative">
                  <div className="relative w-full h-[370px] overflow-hidden rounded-xl">
                    <Image
                      width={500}
                      height={500}
                      src={movie.image}
                      alt="img"
                      className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/50 bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                      <button className="mb-2 w-[80%] px-4 py-2 bg-[#27272a] hover:bg-[#3c3c43] text-white rounded flex gap-2 items-center justify-center "><DownloadIcons /> Download</button>
                      <button className="px-4 w-[80%] py-2 bg-[#0e0e0e] hover:bg-[#424249] text-white rounded flex gap-2 items-center justify-center"><PlayIcons className="text-2xl" /> Watch Now</button>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mt-2 transition-colors duration-300 group-hover:text-red-500">
                    {movie.title}
                  </h3>

                  <div className="flex gap-2 items-center">
                    <p className="text-yellow-400 text-lg font-semibold">{movie.rating}</p>
                    <p className="text-sm text-gray-400">• {movie.year}</p>
                  </div>
                </div>

              ))}
            </div>
          </div>

      </Container>
    </div>

  );
};

export default LatestMovies;
