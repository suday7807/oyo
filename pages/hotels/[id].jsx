import Image from "next/image";
import React from "react";

const SingleHotel = () => {
  return (
    <div className=" my-10 h-screen mx-auto w-7/12">
      <Image
        src={
          "https://img.freepik.com/premium-photo/beautiful-luxury-bedroom-suite-hotel-with-tv_105762-1637.jpg?size=626&ext=jpg"
        }
        alt="hotel"
        width={1100}
        height={1100}
        className=" w-full mx-auto h-80 my-5"
      />
      <div className="  ">
        <h1 className=" text-3xl font-bold text-justify">
          Lorem ipsum dolor sit amet consectetur enim ullam soluta at illum
          tenetur dolor culpa ips
        </h1>
        <p className=" font-semibold text-justify my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime magni
          optio provident fuga blanditiis, veritatis minima qui commodi saepe
          hic libero aut laborum dolores vitae eveniet dignissimos aliquid quod
          distinctio ad ipsum a sunt animi? Laudantium neque delectus sit qui,
          earum iure, voluptate porro velit itaque minus mollitia excepturi
          sint?
        </p>
        <button className=" mr-6 w-60 h-14 font-bold  text-lg bg-purple-600 rounded-lg">
          Price : 4500
        </button>

        <p className=" text-3xl my-5 font-bold">Facilits: </p>
        <ul className=" flex text-xl justify-between">
          <li>Dogs</li>
          <li>Garden</li>
          <li>laundary</li>
          <li>Cricket</li>
          <li>jakozi</li>
        </ul>
        <button className=" mr-6 my-5 mt-3 w-60 h-14 font-bold  text-lg bg-red-600 rounded-lg">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SingleHotel;
