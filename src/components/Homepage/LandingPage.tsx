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
    <div className="relative px-20 flex flex-row h-screen justify-between pt-6 pb-20 bg-green-50">
      <section className=" flex flex-col justify-start items-center">
        <div className=" flex flex-row items-center gap-4 self-start mb-32">
          <img
            className="h-16 object-contain"
            src={require("../../Assets/Icons/logo.png")}
            alt=""
          />
          <h2 className=" font-bold text-2xl text-gray-500">GreenBear</h2>
        </div>
        <section className="flex flex-col gap-5">
          <h4>Best Agency In Africa</h4>
          <h1>Digital Agency</h1>
          <h1>& Solutions</h1>
          <p>
            Quickly grow your business & boost up sale with professiona startup
          </p>
        </section>
        <div>
          <button>
            Get Started
            <FaGreaterThan />
          </button>
          <button>
            Live Demos
            <AiFillPlayCircle />
          </button>
        </div>
      </section>
      <section>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Our Work</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
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
