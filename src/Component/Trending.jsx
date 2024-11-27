import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Topnav from "../partials/Topnav";
import Dropdown from "../partials/Dropdown";
import axios from "../Utils/axios";
import Cards from "../partials/Cards";
import InfiniteScroll from 'react-infinite-scroll-component';


const Trending = () => {
   const navigate = useNavigate();

   const [category, setcategory] = useState("all");
   const [duration, setduration] = useState("day");
   const [trending, settrending] = useState([]);
   const [page, setpage] = useState(1);
   const[hasMore,sethasMore]=useState(true);
   
   const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      //below set trending is used to display single time loaded data and changes after every refresh
      // settrending(data.results);  

      //the below settrending is use a call back  to display the previous as well as well as the new data
      
      if (data.results.length>0){

      settrending((prevState)=>[...prevState, ...data.results]);
      setpage(page+1);
      }else{
        sethasMore(false)
      }
      console.log(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  console.log(trending);

   const refershHandler=()=>{
      if(trending.length==0) {
         GetTrending();
      }else{
        setpage(1);
        settrending([])
        GetTrending();
      }
 }



  useEffect(() => {
    refershHandler();
  }, [category, duration]);


  return trending.length >0 ? (
    
    <div className="w-screen  ">
      <div className=" border-b-2 m-5 flex justify-center items-center gap-2">
       

        <h1 className=" text-nowrap text-2xl">
          <i
            onClick={() => navigate(-1)}
            className=" ri-arrow-left-box-fill text-2xl"
          ></i>
          Trending Movies
        </h1>

        <div className=" w-[50%] justify-center flex items-center">
          <Topnav />
        </div>
        <div className="flex justify-center ml-10  items-center ">
          <Dropdown title="category" option={["movie", "tv", "all"]}
             func={(e) =>setcategory(e.target.value)}
          
          />

          <Dropdown title="Duration" option={["week", "day"]} 
          func={(e) =>setduration(e.target.value)}
          />
        </div>
      </div>
     
      <InfiniteScroll
  dataLength={trending?.length || 0}  // Ensure dataLength is always defined
  next={() => console.log("Fetching more...") || GetTrending()}  // Test to see if it logs as expected
  hasMore={true}  // Simplify temporarily to test
  loader={<h1>Loading....</h1>}
>
  <Cards data={trending} title={category} />
</InfiniteScroll>


      {/* <div className="flex flex-wrap justify-center">
      
        {trending.map((movie, index) => (
          
          <div key={index} className="w-1/3 p-5">
            <Link>
            <div className="border-2 rounded-md shadow-md">
              <img
                className="object-contain w-full h-60"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3 className="text-xl text-center mt-3">{movie.title}</h3>
            </div>
            </Link>
          </div>
          
        ))}
        
      </div> */}
    </div>
    
  ) : (
    <div>Loading...</div>
  );
  

  
  
};

export default Trending;
