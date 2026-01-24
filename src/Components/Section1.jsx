import React from "react";
import { FaCode, FaArrowDown } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Section1() {
  return (
  <div
  id="home"
  className="
    scroll-smooth
    w-full
    overflow-x-hidden
    bg-gradient-to-r from-blue-50 via-white to-blue-100
    min-h-screen mt-20"
>
      <div className="flex flex-col md:flex-row justify-between items-center py-10 px-10 md:px-20">
        <div className="flex flex-col gap-4 text-black justify-center mt-10 ">
          <p className="text-2xl text-gray-600 font-semibold">
            Bonjour, je suis
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            MOHAMED <span className="text-blue-700">TONZAR</span>
          </h1>

          <h2 className="mt-2 text-xl md:text-2xl flex items-center font-bold text-blue-800">
            <FaCode className="inline text-blue-600 mr-2" />
            Développeur Full Stack
          </h2>

          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="flex items-center gap-2 w-fit mt-6 px-6 py-3 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 transition rounded  shadow-lg"
          >
            En savoir plus <FaArrowDown className="animate-bounce" />
          </Link>
        </div>

        <div className="flex justify-center  mt-10 md:mt-0 w-full md:w-[800px]">
          <img
            src="/imagee.png"
            alt="photo"
            className=" w-[600px] md:w-[1000px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
