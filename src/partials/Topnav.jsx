import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../Utils/axios";
 import noimage from "/noimage.png";
 import searchgif from "/transparent.gif";
 import search from "/search.svg";
const Topnav = () => {
  const [query, setquery] = useState("");
  // console.log(query);
  const [Searches, setSearches] = useState([]);

  //here it is used to call the api search for any movie name
  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
      console.log(data.results);
    } catch (error) {
      console.error("Network Error:", error.message);
      if (error.response) {
        console.error("Server responded with status:", error.response.status);
      } else if (error.request) {
        console.error(
          "Request was made but no response received:",
          error.request
        );
      }
    }
  };
  //use Effect is used to call the api when the page is loaded
  
    

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="w-full h-[3vh] m-5 relative flex justify-center ml-[5%] items-center ">
      {/* <i className="text-yellow-500 text-2xl ri-search-line"></i> */}
      <div className="bg-zinc-400 w-[4.5vw] h-[4vw] rounded-[50%] relative">
      <img className="object-cover" src={search} alt="Search" />
      </div>
      
      <input
        onChange={(e) => setquery(e.target.value)}
        className="w-[50%] rounded-full text-zinc-900 mx-10 p-3 text-xl  border-none outline-none bg-zinc-400"
        type="text"
        placeholder="Search Anything"
      />

      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-yellow-500 text-3xl ri-close-fill"
        ></i>
      )}

      <div className="absolute overflow-auto w-[35%] max-h-[50vh] bg-zinc-200 top-[155%] ml-30 rounded-md ">
        {Searches.map((s, i) => (
          <Link
           to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className="hover:text-black  hover:bg-zinc-300 duration-300 font-semibold text-zinc-900 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100"
          >
            <img
              className="object-cover w-[12vh] h-[12vh] mr-10 "
              src={
                 s.backdrop_path ||s.profile_path ?
                `https://image.tmdb.org/t/p/original/${
                s.backdrop_path || s.profile_path 
              }` :noimage}
              alt=""
            />
            <span>
              {s.title || s.name || s.original_title || s.original_name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
