import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { AiFillInstagram, AiFillPlayCircle } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

function LandingPage() {
  return (
    <div className="relative px-32 flex flex-row h-screen justify-between pt-6 pb-20 bg-green-50">
      <section className=" flex flex-col justify-start items-center text-gray-500 w-1/2">
        <div className=" flex flex-row items-center gap-4 self-start mb-32">
          <img
            className="h-16 object-contain"
            src={require("../../Assets/Icons/logo.png")}
            alt=""
          />
          <h2 className=" font-bold text-2xl ">GreenBear</h2>
        </div>
        <section className="flex flex-col gap-5">
          <h4 className="text-2xl text-gray-600 font-bold">
            Best Agency In <span className="text-teal-500">Africa</span>
          </h4>
          <h1 className="font-bold text-5xl text-gray-700">Digital Agency</h1>
          <h1 className="font-light text-4xl text-gray-700">& Solutions</h1>
          <p className=" text-xl text-gray-500">
            Quickly grow your business & boost up sale with professional startup
            by collaborating witht the best developers and entreprenual minds in
            the market.
          </p>
        </section>
        <div className="mt-10 flex flex-row gap-8 ">
          <button className="bg-green-500 rounded-20 flex flex-row items-center gap-3 px-4 rounded-xxl text-white h-10 font-bold border-2 border-green-500 hover:text-gray-500 hover:bg-transparent	 hover:border-red hover:border-2">
            Get Started
            <FaGreaterThan className="text-gray-700 hover:text-gray-500" />
          </button>
          <button className="bg-green-100 rounded-20 flex flex-row items-center gap-3 px-4 rounded-xxl text-black font-bold h-10 border-dashed border-2 border-gray-300 hover:border-gray-500">
            Live Demos
            <AiFillPlayCircle className="text-2xl" />
          </button>
        </div>
      </section>
      <section className="relative flex flex-row justify-center w-1/2 text-white font-light text-xl bg-homeBg bg-center bg-cover ">
        <div className="absolute h-full w-full bg-green-200 bg-opacity-10 pt-10 flex flex-row justify-start pl-4">
          <ul className="flex flex-row gap-4 ">
            <li className="rounded-xxl hover:bg-green-100 hover:text-black h-10 w-24 justify-center flex flex-row items-center duration-300 ease-linear">
              <a href="">Home</a>
            </li>
            <li className="rounded-xxl hover:bg-green-100 hover:text-black h-10 w-24 justify-center flex flex-row items-center duration-300 ease-linear">
              <a href="">Our Work</a>
            </li>
            <li className="rounded-xxl hover:bg-green-100 hover:text-black h-10 w-24 justify-center flex flex-row items-center duration-300 ease-linear">
              <a href="">Services</a>
            </li>
            <li className="rounded-xxl hover:bg-green-100 hover:text-black h-10 w-24 justify-center flex flex-row items-center duration-300 ease-linear">
              <a href="">About</a>
            </li>
            <li className="rounded-xxl hover:bg-green-100 hover:text-black h-10 w-24 justify-center flex flex-row items-center duration-300 ease-linear">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </section>
      <section className="absolute hidden">
        <ul>
          <li>
            <a href="">
              <BsFacebook />
              Facebook
            </a>
          </li>
          <li>
            <a href="">
              <BsTwitter /> Twitter
            </a>
          </li>
          <li>
            <a href="">
              <AiFillInstagram /> Instagram
            </a>
          </li>
          <li>
            <a href="">
              <BsLinkedin /> LinkedIn
            </a>
          </li>
          <li>
            <a href="">
              <SiGmail /> Gmail
            </a>
          </li>
          <li>
            <a href="">
              <BsFillTelephoneFill /> Call
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default LandingPage;
