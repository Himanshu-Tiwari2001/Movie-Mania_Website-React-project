import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data,title}) => {
  return (
     
     


    <div className=' flex m-5 bg-gradient-to-l from-red-950 via-red-800 to-red-500 bg-red-800 flex-wrap gap-14  justify-center'>
        
        
        {data.map((c,i)=>(
        <div key={i} className='bg-red-950 rounded-md p-8 '>
        <Link to={`/${c.media_type || title}/details/${c.id}`} className='relative' key={i}>
           <div className=''>
           <img className='object-contain rounded-md w-full h-60' src={`https://image.tmdb.org/t/p/original/${
              c.poster_path|| c.backdrop_path ||c.profile_path 
             }`} alt="" />
             <div className='bg-white rounded-lg mt-5 leading-tighter p-2 text-black text-center font-bold'>
{c.name||c.title|| c.original_name|| c.original_title}
            </div>
            <div className='bg-yellow-600 h-[6vh] w-[7vh] p-2 absolute  -right-[10%] top-[70%]  text-md text-center justify-center items-center  rounded-full'>
               {(c.vote_average)}
            </div>
         </div>
        </Link>
        </div>
       ))}
           
        
        
    </div>
    
  )
}

export default Cards