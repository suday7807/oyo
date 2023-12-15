"use client";

import Link from "next/link";
import { useState } from "react";

const Header3 = () => {
  const [city, setCity] = useState("");
  return (
    <div className=" bg-gradient-to-r from-red-600 to-red-400 h-90 ">
      <div className="p-5 ">
        <h1 className=" text-center font-bold text-4xl text-white py-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </h1>
      </div>
      <div className=" grid grid-cols-12 my-5 mx-20">
        <input
          type="text"
          className=" col-span-10 h-16 outline-none px-3 text-lg border-r-2 border-gray-400 "
          placeholder="Search.."
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        {/* <input
          type="date"
          className=" col-span-1 h-16 outline-none px-3 text-lg border-r-2 border-gray-400 "
          placeholder="Search.."
        />
        <input
          type="date"
          className=" col-span-1 h-16 outline-none px-3 text-lg border-r-2 border-gray-400 "
          placeholder="Search.."
        /> */}
        <button className=" col-span-2 h-16 px-3 py-2 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white text-xl">
          <Link href={`/hotels?city=${city}`}>Search</Link>
        </button>
      </div>
      <div className=" flex mx-20 py-4  font-bold">
        <button className="  h-16 px-3 py-2 hover:cursor-pointer mr-5 text-white ">
          continue your Search
        </button>
        <button
          type="submit"
          className="  h-16 px-3 py-2 border-white mr-5 hover:cursor-pointer border-2 text-white hover:bg-gray-500 rounded-2xl"
        >
          Home stay in Indian hotels
        </button>
      </div>
    </div>
  );
};

export default Header3;
