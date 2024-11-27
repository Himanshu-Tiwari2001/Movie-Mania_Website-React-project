import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../partials/Topnav";
import Dropdown from "../partials/Dropdown";
import axios from "../Utils/axios";
import Cards from "../partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const Tvshow = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("airing_today");
  const [tvShows, setTvShows] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Function to determine the API endpoint based on the selected category
  const getApiEndpoint = () => {
    switch (category) {
      case "airing_today":
        return "/tv/airing_today";
      case "on_the_air":
        return "/tv/on_the_air";
      case "popular":
        return "/tv/popular";
      case "top_rated":
        return "/tv/top_rated";
      default:
        return "/tv/airing_today";
    }
  };

  const fetchTvShows = async () => {
    try {
      const endpoint = getApiEndpoint();
      const { data } = await axios.get(`${endpoint}?page=${page}`);

      if (data.results.length > 0) {
        setTvShows((prevState) => [...prevState, ...data.results]);
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
    setTvShows([]);
    fetchTvShows();
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return tvShows.length > 0 ? (
    <div className="w-screen">
      <div className="border-b-2 m-5 flex justify-center items-center gap-2">
        <h1 className="text-nowrap text-2xl">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-box-fill text-2xl"
          ></i>{" "}
          TV Shows - {category.replace("_", " ").toUpperCase()}
        </h1>

        <div className="w-[50%] justify-center flex items-center">
          <Topnav />
        </div>
        <div className="flex justify-center ml-10 items-center">
          <Dropdown
            title="Category"
            option={["airing_today", "on_the_air", "popular", "top_rated"]}
            func={(e) => {
              setCategory(e.target.value);
              setPage(1);
              setTvShows([]);
              setHasMore(true);
            }}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={tvShows?.length || 0}
        next={fetchTvShows}
        hasMore={hasMore}
        loader={<h1>Loading....</h1>}
      >
       {/* <Cards data={tvShows} title={category.replace("_", " ")} /> */}
       <Cards data={tvShows} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Tvshow;
