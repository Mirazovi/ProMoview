"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Slide data
const heroSlides = [
  {
    title: "Oppenheimer",
    description:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    rating: "4.7/5",
    year: "2023",
    genres: "Drama, Biography",
    image: "/images/demo.jpg",
  },
  {
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    rating: "4.6/5",
    year: "2014",
    genres: "Sci-Fi, Adventure",
    image: "/images/demo.jpg",
  },
  {
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given a chance at redemption.",
    rating: "4.8/5",
    year: "2010",
    genres: "Action, Sci-Fi",
    image: "/images/demo.jpg",
  },
];

const HeroSection: React.FC = () => {
  return (
    <div className="w-full min-h-screen">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        loop
        pagination={{ clickable: true }}
        className="w-full h-screen"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen text-white">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover brightness-[.4]"
                priority
              />

              {/* Bottom-left Content */}
              <div className="absolute bottom-10 left-6 md:left-16 z-10 max-w-xl space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold">{slide.title}</h2>
                <p className="text-sm sm:text-base text-gray-200">{slide.description}</p>
                <p className="text-yellow-400 text-lg font-semibold">{slide.rating}</p>
                <p className="text-sm text-gray-300">
                  • {slide.year} • {slide.genres}
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm">
                    Watch Now
                  </button>
                  <button className="border border-white hover:bg-white hover:text-black px-6 py-2 rounded-lg text-sm">
                    More Info
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
