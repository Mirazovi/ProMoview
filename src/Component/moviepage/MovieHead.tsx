import { Download, PlayIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import MovieDetails from './MovieDetails'

const MovieHead = () => {
  return (
    <>

      <div className='py-10'>

        <div className='w-[90%] mx-auto bg-[#250c10] rounded-2xl'>
          <div className='flex justify-between items-center text-white p-3 '>
            {/* div 1 */}
            <div className='flex items-center gap-4 '>
              <Image width={200} height={200} src={'/images/demo.jpg'} alt='img' className=' rounded-2xl w-[200px]' />
              <div>
                <h1 className='text-2xl font-semibold'>Dune: Part Two</h1>
              </div>
            </div>
            {/* div 2 */}
            <div className='flex gap-2 items-center'>
              <button className='rounded-lg bg-[#e11d48] px-6 py-2 flex gap-2 items-center'><Download /> Download Now</button>
              <button className='bg-[#0c0a09] px-6 py-2 rounded-lg flex gap-2 items-center'><PlayIcon /> Watch Trailer</button>
            </div>
          </div>
        </div>
      </div>

      {/* section 2  */}
      <div className='w-[90%] mx-auto'>
        <MovieDetails/>
      </div>
    </>
  )
}

export default MovieHead