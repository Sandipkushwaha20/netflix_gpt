import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    console.log(posterPath,"path");
  return (
    <div className='w-40 pr-4'>
      <img alt='Movie Card' src={IMG_CDN + posterPath}/>
    </div>
  )
}

export default MovieCard
