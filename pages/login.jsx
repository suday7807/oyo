"use client";

import Head from "next/head";
import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const router = useRouter();

  const handleSignUp = async () => {
    const res = await axios.post("/api/user/register", {
      name,
      email,
      password,
    });
    if (res?.data) {
      Cookies.set("user", res.data.token);
      alert(res.data.msg);
      router.push("/");
    }
  };
  const handleLogin = async () => {
    const res = await axios.post("/api/user/login", {
      email,
      password,
    });
    if (res?.data) {
      Cookies.set("user", res.data.token);
      alert(res.data.msg);
      router.push("/");
    }
  };
  const handleToogle = () => {
    setLogin(!login);
  };
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
              {login ? (
                ""
              ) : (
                <input
                  type="name"
                  placeholder="Enter your name"
                  className=" outline-none border py-1 px-3 w-96 h-10 border-gray-300 my-5 rounded-sm"
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <input
                type="email"
                placeholder="Enter your email..."
                className=" outline-none border py-1 px-3 w-96 h-10 border-gray-300 my-5 rounded-sm"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter your password"
                className=" outline-none border py-1 px-3 w-96 h-10 border-gray-300 my-5 rounded-sm"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className=" h-23 w-52 py-3 mt-3 rounded-md text-xl bg-gray-400 text-white font-semibold cursor-pointer "
                onClick={login ? handleLogin : handleSignUp}
              >
                {login ? "Login" : "Sign Up"}
              </button>
              <div className=" text-xl font-bold flex m-5 w-[100%] ">
                <p className=" mr-2">
                  {" "}
                  {login ? "Don't have a account" : "Already have an account?"}
                </p>

                <button
                  className=" cursor-pointer text-red-600"
                  onClick={handleToogle}
                >
                  {login ? "Sign Up" : "Login"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
