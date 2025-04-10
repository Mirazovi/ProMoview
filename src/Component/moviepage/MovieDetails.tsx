import React from 'react'
import LeftMovieDetails from './LeftMovieDetails'
import RightMovieDetails from './RightMovieDetails'

const MovieDetails = () => {
  return (
    <div className='grid grid-cols-3 gap-6'>
        <div className='col-span-1'>
        <LeftMovieDetails/>
        </div>
        <div className='col-span-2'>
            <RightMovieDetails/>
        </div>
    </div>
  )
}

export default MovieDetails