import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Topnav from "../partials/Topnav";
import Dropdown from "../partials/Dropdown";
import axios from "../Utils/axios";
import Cards from "../partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const Popular = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("all");
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const GetPopular = async () => {
    try {
      const { data } = await axios.get(
        `/tv/popular?page=${page}`
      );

      if (data.results.length > 0) {
        setPopular((prevState) => [...prevState, ...data.results]);
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
    if (popular.length === 0) {
      GetPopular();
    } else {
      setPage(1);
      setPopular([]);
      GetPopular();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className="w-screen">
      <div className="border-b-2 m-5 flex justify-center items-center gap-2">
        <h1 className="text-nowrap text-2xl">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-box-fill text-2xl"
          ></i>{" "}
          Popular TV Shows
        </h1>

        <div className="w-[50%] justify-center flex items-center">
          <Topnav />
        </div>
        <div className="flex justify-center ml-10 items-center">
          <Dropdown
            title="Category"
            option={["tv", "movie", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={popular?.length || 0}
        next={GetPopular}
        hasMore={hasMore}
        loader={<h1>Loading....</h1>}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Popular;
