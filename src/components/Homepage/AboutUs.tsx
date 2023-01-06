import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function AboutUs() {
  return (
    <div className="my-32 h-screen flex flex-row items-center justify-center px-32">
      <section className="w-1/2 pr-10 flex flex-col gap-8">
        <h2 className="text-teal-400 text-2xl font-bold">ABOUT US</h2>
        <h1 className="font-bold text-slate-700 text-5xl">
          Boost your business with GreenBear
          <span className="text-teal-400">.</span>
        </h1>
        <p className="text-slate-500">
          Greenbear has a team of ambitious, hardworking and dedicated employees
          working with together in harmony to meet you needs. <br /> We bring
          light to your business and pave way to success by making your product
          production ready for the competitive market.
        </p>
        <button className=" w-1/4 py-2 self-start rounded-xxl flex flex-row gap-2 items-center justify-center bg-green-100">
          More Details{" "}
          <BsFillArrowRightCircleFill className="text-green-800 text-xl" />
        </button>
      </section>
      <img
        className="w-1/2 h-4/6 object-cover rounded-xxl "
        src={require("../../Assets/Images/group.jpg")}
        alt=""
      />
    </div>
  );
}

export default AboutUs;
