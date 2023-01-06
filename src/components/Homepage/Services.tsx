import React from "react";
import Servicecard from "./Servicecard";
import {
  BsFillArrowRightCircleFill,
  BsCheck2Circle,
  BsCircleSquare,
} from "react-icons/bs";
import { BiCodeCurly } from "react-icons/bi";
import { AiOutlineAntDesign } from "react-icons/ai";
function Services() {
  return (
    <div className=" px-32 flex flex-row h-screen">
      <section className="w-1/4 gap-5 flex flex-col items-center h-5/6 justify-end pb-20 ">
        <Servicecard
          iconName={<BiCodeCurly className="text-5xl" />}
          title="Web Developement"
          description="Our skilled IT department consist of programmers that design and code fully funnctional websites and web applications to meet your demands"
        />
        <Servicecard
          iconName={<BsCheck2Circle className="text-5xl" />}
          title="Mobile Application"
          description="A highly skilled team of mobile application developers, IOS & Android, are ready to make mobile apps to meet the market needs."
        />
      </section>
      <section className="w-1/4 gap-5 flex flex-col items-center h-2/6 justify-center ">
        <Servicecard
          iconName={<BsCircleSquare className="text-5xl" />}
          title="UI/UX Analysis"
          description="We design the best user interfaces and and user experience designs for your cover arts, softwares and poster ads"
        />
        <Servicecard
          iconName={<AiOutlineAntDesign className="text-5xl" />}
          title="Business Consultance"
          description="Get business analysis and advices from experts in our company to reduce risk and icrease profits in your company."
        />
      </section>
      <section className="w-1/2 flex flex-col gap-5 pl-10">
        <h2 className="text-xl text-teal-500 font-bold">SERVICES</h2>
        <h1 className=" text-gray-700 font-bold text-5xl">Our Services</h1>
        <h3 className="text-3xl text-gray-600 ">Include.</h3>
        <ul className="text-gray-500 list-disc px-10 flex flex-col gap-2">
          <li>
            <a href=""></a>Mobile app Developement
          </li>
          <li>
            <a href=""></a>Websites and Web Applications Developement
          </li>
          <li>
            <a href=""></a>Microfinance
          </li>
          <li>
            <a href=""></a>Business Consultations
          </li>
          <li>
            <a href=""></a>Real Estate
          </li>
        </ul>
        <button className=" flex flex-row items-center justify-center gap-3 border-2 border-teal-600 text-teal-700 rounded-xxl bg-teal-100 h-10 w-1/4 hover:bg-transparent hover:scale-105 duration-500">
          All Services{" "}
          <BsFillArrowRightCircleFill className=" text-teal-700 text-xl" />
        </button>
      </section>
    </div>
  );
}

export default Services;
