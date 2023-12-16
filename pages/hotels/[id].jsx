"use client";
import Image from "next/image";
import React from "react";
import Head from "next/head";
import Cookies from "js-cookie";
import Link from "next/link";

const SingleHotel = ({ hotel }) => {
  let auth;
  if (typeof window !== "undefined") {
    auth = Cookies.get("user");
  }
  return (
    <>
      <Head>
        <title>{hotel?.name}</title>
      </Head>
      <div className=" my-10 h-screen mx-auto w-7/12">
        <Image
          src={hotel.banner}
          alt="hotel"
          width={1100}
          height={1100}
          className=" w-full mx-auto h-80 my-5"
        />
        <div className="  ">
          <h1 className=" text-3xl font-bold text-justify">{hotel.name}</h1>
          <p className=" font-semibold text-justify my-5">
            {hotel.description}
          </p>
          <button className=" mr-6 w-60 h-14 font-bold  text-lg bg-purple-600 rounded-lg">
            Price : {hotel.price} &#8377;
          </button>

          <p className=" text-3xl my-5 font-bold">Facilits: </p>
          <ul className=" flex text-xl justify-between">
            {hotel
              ? hotel.facilities.map((item) => {
                  return (
                    <li>
                      <span>
                        <Image
                          src={item.img}
                          width={200}
                          height={200}
                          className="w-8 h-8 rounded-full"
                        />
                      </span>
                      <span>{item.name}</span>
                    </li>
                  );
                })
              : ""}
          </ul>
          {auth ? (
            <button className=" mr-6 my-5 mt-3 w-60 h-14 font-bold  text-lg bg-red-600 rounded-lg">
              Book Now
            </button>
          ) : (
            <span className=" text-2xl">
              Please{" "}
              <Link href={"/login"} className=" text-blue-500">
                Log in
              </Link>{" "}
              to get new offers
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(`${process.env.BASE_URL}/api/hotels/${ctx.query.id}`);
  const data = await res.json();
  return {
    props: {
      hotel: data.hotel,
    },
  };
}

export default SingleHotel;
