import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const HorizontalCards = ({ data }) => {
 
    const fallbackImage = "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg";
    const imageUrl = data?.backdrop_path || data?.poster_path
      ? `https://image.tmdb.org/t/p/original/${data.backdrop_path}`
      : fallbackImage;
   
  return (
    <div className=" p-8  relative rounded-md w-full h-[50vh]">
      

      <div className="w-[100%]  flex overflow-x-auto">
        {data.map((d, i) => (
          <Link to={`/${d.media_type}/details/:${d.id}`}key={i} className="min-w-[30%]  bg-red-950  mb-5 mr-5">
              
            <img 
             className="w-[100%] h-[50%] p-2 object-cover"
            src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path 
              }`} alt="" />
            <h1 className="w-[70%] text-2xl font-black text-white m-2">
              {d.name || d.title || d.original_name || d.original_title}
            </h1>
            <p className="w-[80%] m-2">
                {d.overview.slice(0,100)}...
                <span className="text-blue-400">more</span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;
