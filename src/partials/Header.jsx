// import React from "react";

// const Header = ({ data }) => {
//   console.log(data);
//   return (
//     <div
//       style={{
//         background: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.9),rgba(0,0,0,0.8)),url(https://image.tmdb.org/t/p/original/${
//           data.backdrop_path || data.profile_path
//         })`,

//         backgroundPosition: "center",
//         backgroundSize: "cover",
//       }}
//       className="w-full h-[50vh]"
//     ></div>
//   );
// };

// export default Header;

// import React from "react";
// import noimage from "/noimage.png";

// const Header = ({ data }) => {
//   console.log(data);
//   if (!data) {
//     return <div className="w-full h-[50vh] bg-red-100"></div>; // Placeholder while loading
//   }

//   return (
//     <div
     
//       style={{
//         background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4),rgba(0,0,0,0.4)),
//                      url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path })`,
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//       }}
//       className="w-full h-[50vh]"
//     ></div>
//   );
// };

// export default Header;

// import React from "react";

// const Header = ({ data }) => {
//   const fallbackImage = "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg";
//   const imageUrl = data?.backdrop_path || data?.profile_path
//     ? `https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path}`
//     : fallbackImage;

//   return (
//     <div
//       style={{
//         background: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9), rgba(0,0,0,0.8)), url(${imageUrl})`,
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
        
        
        
        
//       }}
//       className=" m-10 w-full   h-[60vh]"
//     > <div/>
    
//     <h1 className="text-white">

//     </h1>
    

//     </div>
//   );
// };

// export default Header;
import React from "react";
import { Link } from "react-router-dom";


const Header = ({ data }) => {
  const fallbackImage = "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg";
  const imageUrl = data?.backdrop_path || data?.profile_path
    ? `https://image.tmdb.org/t/p/original/${data.backdrop_path}`
    : fallbackImage;

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(${imageUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        
        
      }}
      className=" rounded-md object-cover  w-full h-[50vh] flex flex-col justify-center items-start p-10"
    >
      {/* Title */}
      <h1 className="text-white text-3xl font-bold mb-2">{data?.title || data?.original_title || data?.original_name}</h1>
      
      {/* Overview */}
      <p className="w-[50%]  tracking-tighter text-start text-white text-lg mb-4 max-w-2xl ">
        {data?.overview.slice(0,200) || "No description available."}
        <hr />
        <Link to={`${data.media_type}/details/:${data.id}`} className="text-blue-400 bg-zinc-900 border p-[0.8px] rounded-full hover:bg-red-950 duration-500">more details</Link>
      </p>

      {/* Release Date */}
      {data?.release_date && (
        <p className=" bg-white text-black m-2 text-md opacity-75">
          Release Date: {data.release_date || "No Info"} </p>
        
      )}
      {data?.release_date && (
        <p className=" ml-2 bg-white text-black text-md opacity-75">
          Type:{data.media_type || "No Info"} 
        </p>
        
        
      )}

      <Link className="bg-[#6556CD] hover:bg-red-950 duration-300  ease-linear hover:transition-transform hover:scale-[1.1] m-2 p-2 rounded text-white font-semibold" >
      
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;

