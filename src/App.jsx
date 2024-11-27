import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import Home from "./Component/Home";
import Trending from "./Component/Trending";
import Popular from "./Component/Popular";
import Movie from "./Component/Movies";
import People from "./Component/People";
import Tvshow from "./Component/Tvshows";
import PersonDetails from "./Component/PersonDetails";
import MovieDetails from "./Component/MovieDetails";
import TvDetails from "./Component/TvDetails";
function App() {
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-l from-red-950 via-red-800 to-red-500 bg-red-800  text-white flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        
        {/* Movies Routes */}
        <Route path="/movies" element={<Movie />} />
        <Route path="/movie/details/:id" element={<MovieDetails />} />

        {/* TV Shows Routes */}
        <Route path="/tvshow" element={<Tvshow />} />
        <Route path="/tv/details/:id" element={<TvDetails />} />

        {/* People Routes */}
        <Route path="/people" element={<People />} />
        <Route path="/person/details/:id" element={<PersonDetails />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
