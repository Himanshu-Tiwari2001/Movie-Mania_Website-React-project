import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../partials/Topnav";
import Dropdown from "../partials/Dropdown";
import axios from "../Utils/axios";
import Cards from "../partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const Movie = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("now_playing");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Function to determine the API endpoint based on the selected category
  const getApiEndpoint = () => {
    switch (category) {
      case "now_playing":
        return "/movie/now_playing";
      case "popular":
        return "/movie/popular";
      case "top_rated":
        return "/movie/top_rated";
      case "upcoming":
        return "/movie/upcoming";
      default:
        return "/movie/now_playing";
    }
  };

  const fetchMovies = async () => {
    try {
      const endpoint = getApiEndpoint();
      const { data } = await axios.get(`${endpoint}?page=${page}`);

      if (data.results.length > 0) {
        setMovies((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
      console.log(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = () => {
    setPage(1);
    setMovies([]);
    fetchMovies();
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return movies.length > 0 ? (
    <div className="w-screen">
      <div className="border-b-2 m-5 flex justify-center items-center gap-2">
        <h1 className="text-nowrap text-2xl">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-box-fill text-2xl"
          ></i>{" "}
          Movies - {category.replace("_", " ").toUpperCase()}
        </h1>

        <div className="w-[50%] justify-center flex items-center">
          <Topnav />
        </div>
        <div className="flex justify-center ml-10 items-center">
          <Dropdown
            title="Category"
            option={["now_playing", "popular", "top_rated", "upcoming"]}
            func={(e) => {
              setCategory(e.target.value);
              setPage(1);
              setMovies([]);
              setHasMore(true);
            }}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={movies?.length || 0}
        next={fetchMovies}
        hasMore={hasMore}
        loader={<h1>Loading....</h1>}
      >
        {/* <Cards data={movies} title={category.replace("_", " ")} /> */}
        <Cards data={movies} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Movie;
