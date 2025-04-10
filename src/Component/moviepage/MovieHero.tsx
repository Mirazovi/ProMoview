import Image from "next/image"
import { Star } from "lucide-react"

interface MovieHeroProps {
  movie: {
    title: string
    image: string
    rating: number
    year: number
    duration: string
    categories: string[]
  }
}

export default function MovieHero({ movie }: MovieHeroProps) {
  return (
    <section className="relative w-full k">
      <div className="relative h-[400px] md:h-[500px] w-full">
        <Image src={movie.image || "/placeholder.svg"} alt={movie.title} fill className="object-cover" priority />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" /> */}

        <div className="absolute bottom-0 left-0 right-0 container py-8">
          <div className="flex items-center gap-2 text-white/90 mb-2">
            <div className="flex items-center">
              <Star className="fill-yellow-400 stroke-yellow-400 h-4 w-4 mr-1" />
              <span>{movie.rating}/5</span>
            </div>
            <span className="mx-1">•</span>
            <span>{movie.year}</span>
            <span className="mx-1">•</span>
            <span>{movie.duration}</span>
          </div>

        </div>
      </div>
    </section>
  )
}

