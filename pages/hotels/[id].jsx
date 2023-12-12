import Image from "next/image";
import React from "react";

const SingleHotel = () => {
  return (
    <div className=" my-10 h-screen mx-auto w-[90%]">
      <Image
        src={
          "https://img.freepik.com/premium-photo/beautiful-luxury-bedroom-suite-hotel-with-tv_105762-1637.jpg?size=626&ext=jpg"
        }
        alt="hotel"
        width={1100}
        height={1100}
        className=" mt-10 mx-auto h-80 pb-5"
      />
      <div className=" space-y-6 ">
        <h1 className=" text-2xl font-bold">
          Lorem ipsum dolor sit amet consectetur enim ullam soluta at illum
          tenetur dolor culpa ips
        </h1>
        <p className=" font-semibold">
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
        <div className=" text-2xl my-5">
          <span className=" font-bold">Facilits: </span>
          <span> Bedroom, Washroom, dinnigrom </span>
        </div>
      </div>
    </div>
  );
};

export default SingleHotel;
