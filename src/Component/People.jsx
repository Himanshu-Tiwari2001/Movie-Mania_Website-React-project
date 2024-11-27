import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Topnav from "../partials/Topnav";
import Dropdown from "../partials/Dropdown";
import axios from "../Utils/axios";
import Cards from "../partials/Cards";
import InfiniteScroll from 'react-infinite-scroll-component';

const People = () => {

    const navigate = useNavigate();

   const [category, setcategory] = useState("popular");
   const [person, setperson] = useState([]);
   const [page, setpage] = useState(1);
   const[hasMore,sethasMore]=useState(true);
   
   const GetPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      //below set person is used to display single time loaded data and changes after every refresh
      // setperson(data.results);  

      //the below setperson is use a call back  to display the previous as well as well as the new data
      
      if (data.results.length>0){

      setperson((prevState)=>[...prevState, ...data.results]);
      setpage(page+1);
      }else{
        sethasMore(false)
      }
      console.log(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  console.log(person);

   const refershHandler=()=>{
      if(person.length==0) {
         GetPerson();
      }else{
        setpage(1);
        setperson([])
        GetTrending();
      }
 }



  useEffect(() => {
    refershHandler();
  }, [category]);



    return person.length >0 ? (
    
        <div className="w-screen  ">
          <div className=" border-b-2 m-5 flex justify-center items-center gap-2">
           
    
            <h1 className=" text-nowrap text-2xl">
              <i
                onClick={() => navigate(-1)}
                className=" ri-arrow-left-box-fill text-2xl"
              ></i>{" "}
             Actors
            </h1>
    
            <div className=" w-[50%] justify-center flex items-center">
              <Topnav />
            </div>
            
          </div>
         
          <InfiniteScroll
      dataLength={person?.length || 0}  // Ensure dataLength is always defined
      next={() => console.log("Fetching more...") || GetPerson()}  // Test to see if it logs as expected
      hasMore={true}  // Simplify temporarily to test
      loader={<h1>Loading....</h1>}
    >
      {/* <Cards data={person} title={category} /> */}
      <Cards data={person} title="person" />
    </InfiniteScroll>
    
    
          
        </div>
        
      ) : (
        <div>Loading...</div>
      );
}

export default People