"use client";

import Image from "next/image";

const Header4 = () => {
  return (
    <div className=" flex justify-between items-center my-14 border-2 rounded-lg border-gray-400 px-5 mx-40 ">
      <div className="flex items-center">
        <Image
          src={"/fire.jpg"}
          alt="demo"
          width={200}
          height={200}
          className="w-32 h-32 rounded-full mr-5"
        />
        <div>
          <h3 className="font-bold">Lorem ipsum dolor sit amet.</h3>
          <p className=" text-gray-400 text-sm line-clamp-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non!
          </p>
        </div>
      </div>
      <div className=" flex items-center gap-3 ">
        <input
          type="email"
          placeholder="e.g. Uday Money Boy.com"
          className="border w-[300px]  border-gray-200 px-6 py-3 outline-none rounded-md"
        />
        <button className="px-6 py-3 rounded-md cursor-pointer text-white text-xl bg-red-500">
          Notify me
        </button>
      </div>
    </div>
  );
};

export default Header4;
