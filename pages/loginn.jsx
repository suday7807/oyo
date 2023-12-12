import Head from "next/head";
import React from "react";

const Loginn = () => {
  return (
    <div className="">
      <Head>
        <title>OYO - Login</title>
      </Head>
      <div className="flex bg-Iogin-background bg-no-repeat bg-cover justify-center h-screen  items-center relative">
        <div className=" absolute font-bold top-7  left-7 flex items-center ">
          <h1 className=" mr-2 text-4xl text-white">OYO</h1>
          <p className=" text-xl text-white">
            Hotels and homes across 800 cities, 24+ countries
          </p>
        </div>
        <div className=" mt-32 flex justify-center w-9/12 pb-40 ">
          <div>
            <p className=" text-white font-bold text-5xl text-justify">
              There’s a smarter way to OYO around
            </p>
            <p className=" text-white text-2xl mt-5 text-justify">
              Sign up with your phone number and get exclusive access to
              discounts and savings on OYO stays and with our many travel
              partners.
            </p>
          </div>
          <div className=" ml-20 w-9/12 border-2 pb-50 bg-white h-120">
            <p className="h-10 flex items-center px-10 bg-gradient-to-r from-red-600 to-red-300 text-lg font-bold text-white">
              Sign up & Get ₹500 OYO Money
            </p>
            <div className=" px-10">
              <h3 className=" text-5xl font-bold my-5">Login / Signup</h3>
              <p className=" font-bold text-lg mb-1">
                Please enter your phone number to continue
              </p>
              <input
                type="text"
                placeholder="Enter your name"
                className=" outline-none border py-1 px-3 w-96 h-10 border-gray-300 my-5 rounded-sm"
              />
              <input
                type="email"
                placeholder="Enter your email..."
                className=" outline-none border py-1 px-3 w-96 h-10 border-gray-300 my-5 rounded-sm"
              />
              <input
                type="password"
                placeholder="Enter your password"
                className=" outline-none border py-1 px-3 w-96 h-10 border-gray-300 my-5 rounded-sm"
              />
              <button
                type="submit"
                className=" h-23 w-52 py-3 mt-3 rounded-md text-xl bg-gray-400 text-white font-semibold cursor-pointer "
              >
                Sign Up
              </button>
              <div className=" text-xl font-bold flex m-5 w-[100%] ">
                <p className=" mr-2">Already have an account?</p>

                <button className=" cursor-pointer text-red-600">
                  Click here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginn;
