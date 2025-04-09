import React from 'react'
import { Link } from 'react-router-dom'

function HorizontalCards({ data }) {
  return (
    <div className='w-full p-3'>
      <div className='w-full flex gap-5 overflow-x-auto p-2'>
        {data.length > 0 ? data.map((d, i) => (
          <Link key={i} className="min-w-[15%] h-[35vh] bg-zinc-900 rounded-lg overflow-hidden shadow-lg relative cursor-pointer mb-2">

            <img src={`https://image.tmdb.org/t/p/original${d.backdrop_path || d.poster_path}`} alt="" />
          </Link>
        )) : <h1>nothing to show</h1>}
      </div>
    </div>
  )
}

export default HorizontalCards