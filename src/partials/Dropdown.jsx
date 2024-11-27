import React from "react";

const Dropdown = ({title,option,func}) => {
  return (
    <div className=" m-5 left-[2%] absolute w-[20vw] h-[20vh] select ">
      <select  onChange={func}name="format" defaultValue="0" id="format">
      <option value="0" disabled>
          {title}
        </option>
        {option.map((o,i)=>(
            <option  key={i}value={o}>{o.toUpperCase()}</option>
          
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
