
import MovieHead from '@/Component/moviepage/MovieHead'
import MovieHero from '@/Component/moviepage/MovieHero'
import React from 'react'
const movie = {
    title: "Dune: Part Two",
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. As he makes a choice between the love of his life and the fate of the universe, he must prevent a terrible future that only he can foresee.",
    image: "/images/demo.jpg",
    poster: "/placeholder.svg?height=450&width=300",
    rating: 4.8,
    year: 2024,
    duration: "166 min",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Javier Bardem"],
    categories: ["Sci-Fi", "Adventure", "Drama"],
    trailerUrl: "https://www.youtube.com/embed/Way9Dexny3w",
    downloadLinks: [
      { quality: "720p", size: "1.2 GB", url: "#" },
      { quality: "1080p", size: "2.4 GB", url: "#" },
      { quality: "4K", size: "5.8 GB", url: "#" },
    ],
    screenshots: [
      "/placeholder.svg?height=200&width=350",
      "/placeholder.svg?height=200&width=350",
      "/placeholder.svg?height=200&width=350",
      "/placeholder.svg?height=200&width=350",
    ],
  }
const MovieDetailsPage = () => {
  return (
    <div className='bg-[#100e0d]'>
        <MovieHero movie={movie}></MovieHero>
        <MovieHead/>
    </div>
  )
}

export default MovieDetailsPage