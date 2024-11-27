import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";

const MovieDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const fallbackImage =
    "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg";

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [dispatch, id]);

  const imageUrl =
    info?.detail?.backdrop_path || info?.detail?.profile_path
      ? `https://image.tmdb.org/t/p/original/${
          info.detail.backdrop_path || info.detail.profile_path
        }`
      : fallbackImage;

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(${imageUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen object-cover h-screen px-[10%]"
    >
      <nav className="h-[10vh] text-2xl w-full flex items-center gap-10">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-box-fill text-2xl"
        ></Link>

        {info.detail.homepage && (
          <a href={info.detail.homepage} target="_blank" rel="noopener noreferrer">
            <i className="ri-external-link-fill"></i>
          </a>
        )}

        {info.externalids?.wikidata_id && (
          <a
            href={`https://www.wikidata.org/wiki/${info.externalids.wikidata_id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-earth-fill"></i>
          </a>
        )}

        {info.externalids?.imdb_id && (
          <a
            href={`https://www.imdb.com/title/${info.externalids.imdb_id}/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            IMDb
          </a>
        )}
      </nav>

      <div className="w-full h-[30vh] flex-col">
        <img
          className="w-[50%] h-[20vh] border-2 object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.profile_path || fallbackImage
          }`}
          alt="Movie Poster"
        />

        
      </div>

      <div className="w-[50%] h-[10vh]  ">
      <div className="text-sm w-[50%] ">Watch Provider</div>
         <div className="flex gap-2 flex-wrap">
          {info.watchProviders &&
            info.watchProviders.results?.AU?.flatrate &&
            info.watchProviders.results.AU.flatrate.map((w) => (
              <img
              className="w-[5vh] h-[5vh] border-2"
                key={w.provider_id}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt={w.provider_name}
              />
            ))}
            </div>

            <div className="text-sm w-[50%]">Available on rent</div>
           <div className=" w-[50%] flex gap-2 flex-wrap">
            {info.watchProviders &&
            info.watchProviders.results?.AU?.rent  &&
            info.watchProviders.results.AU.rent.map((w) => (
              <img
              className="w-[5vh] h-[5vh] "
                key={w.provider_id}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt={w.provider_name}
              />
            ))}
            </div>
        </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default MovieDetails;
