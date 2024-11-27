import React from "react";
import Sidenav from "../partials/Sidenav";
import Topnav from "../partials/Topnav";
import Header from "../partials/Header";
import axios from "../Utils/axios";

import { useState, useEffect } from "react";
import HorizontalCards from "../partials/HorizontalCards";
import Dropdown from "../partials/Dropdown";

const Home = () => {
  document.title = "Movie Mania|Home Page";

  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");

  const GetHeaderWalpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);

      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];

      setwallpaper(randomdata);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // here below code is used to display all data without filter
  // const GetTrending = async () => {
  //   try {
  //     const { data } = await axios.get(`/trending/all/day`);
  //     settrending(data.results);
  //   } catch (error) {
  //     console.log("Error: ", error);
  //   }
  // };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // console.log(wallpaper);
  // console.log(" trending data: ", trending);
  //here use effect format for displaying all data without filtering
  // useEffect(() => {
  //   !wallpaper && GetHeaderWalpaper();
  //   !trending && GetTrending();
  // }, []);

  useEffect(() => {
    GetTrending();
    !wallpaper && GetHeaderWalpaper();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[84%] p-5 h-full overflow-auto overflow-x-hidden ">
        <Topnav />
        <Header data={wallpaper} />

        <div className="mb-5  h-[5vh] flex justify-between">
          <h1 className="text-xl  bg-white h-fit  ml-10 m-4 rounded-md font-semibold p-4 text-red-800">
            Trending
          </h1>

          <Dropdown
            title="filter"
            option={["tv", "movie", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>

        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <h1 className="  border-b-4  text-5xl m-auto font-serif ">
      <span className="text-white text-9xl font-extrabold">L</span>
      oading.......
    </h1>
  );
};

export default Home;
