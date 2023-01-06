import React from "react";
import { ServiceCard_I } from "../../Types/Global";
import { FaGreaterThan } from "react-icons/fa";
function Servicecard({ iconName, title, description }: ServiceCard_I) {
  return (
    <div className="w-4/5 bg-white p-5 pt-8 rounded-xxl flex flex-col items-center gap-3 hover:bg-green-500 hover:scale-105 duration-500 cursor-pointer ">
      {iconName} <h2 className="self-start">{title}</h2> <p>{description}</p>{" "}
      <button className="text-white text-md font-bold rounded-xxl bg-green-400 flex flex-row gap-2 items-center justify-center h-8 px-3 ">
        More Details <FaGreaterThan className="text-white" />{" "}
      </button>{" "}
    </div>
  );
}

export default Servicecard;
