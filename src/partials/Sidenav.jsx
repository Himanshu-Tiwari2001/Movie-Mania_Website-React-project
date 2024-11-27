import React from 'react'
import { Link } from 'react-router-dom'


Link
const Sidenav = () => {
  return (
    <div className='w-[15%] h-full border-r-2 bg-red-950  border-zinc-200'>
    <h1 className='text-2xl p-4 font-bold flex'>
    <i className="ri-tv-fill text-[#e8472b] mr-2"></i>
    <span className='text-white'> Movie Mania</span>
    </h1>

    <nav className='flex flex-col text-zinc-200 text-xl gap-3'>
      <h1 className="text-md text-center  bg-white h-fit  ml-10 m-4 rounded-md font-semibold p-4 text-red-800">
        New Feeds
      </h1>

      <Link to = "/trending" className="hover:bg-[#f62d0a] hover:text-white  hover:text-[1.2vw] text-[1vw] ml-8 duration-300 rounded-lg p-2" >
      <i className="ri-fire-line"></i> Trending
      </Link>

      <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white ml-8  hover:text-[1.2vw] text-[1vw] duration-300 rounded-lg p-2" >
      <i className="ri-sparkling-line"></i> Popular
      </Link>

      <Link to="/movies" className="hover:bg-[#f62d0a] hover:text-white ml-8 hover:text-[1.2vw] text-[1vw] duration-300 rounded-lg p-2" >
      <i className="ri-clapperboard-ai-fill"></i> Movies
      </Link>

      <Link to="/tvshow" className="hover:bg-[#6556CD] hover:text-white ml-8 hover:text-[1.2vw] text-[1vw] duration-300 rounded-lg p-2" >
      <i className="ri-tv-2-line"></i> Tv Shows
      </Link>

      <Link  to ="/people"className="hover:bg-[#f62d0a] hover:text-white ml-8 hover:text-[1.2vw]  text-[1vw] duration-300 rounded-lg p-2" >
      <i className="ri-team-fill"></i> People
      </Link>

    </nav>
    <hr className='m-6 w-[80%] border-none h-[2px] bg-zinc-400' />

    <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
      <h1 className='text-sm  text-center leading-tight bg-white h-fit  ml-10 m-4 rounded-md font-semibold p-4 text-red-800'>
        Website Information
      </h1>

      <Link className="hover:bg-[#6556CD] hover:text-white text-[1vw] hover:text-[1.2vw] ml-8 duration-300 rounded-lg p-2" >
      <i className="ri-information-2-fill"></i> About
      </Link>

      <Link className="hover:bg-[#f62d0a] hover:text-white ml-8 text-[1vw] hover:text-[1.2vw] duration-300 rounded-lg p-2" >
      <i className="ri-phone-line"></i> contact
      </Link>

      

    </nav>
   

    </div>
  )
}

export default Sidenav