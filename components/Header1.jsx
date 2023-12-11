import Image from "next/image";
import React from "react";
import Block from "./Block";
import Link from "next/link";

const Header1 = () => {
  return (
    <div className=" flex h-24 border-b-2 px-3 border-gray-300 justify-between ">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={200}
        height={200}
        className=" w-24 h-full"
      />
      <div className="h-full border-r-2 border-gray-300 flex ">
        <Block title={"Become a member"} para={"Additional 10% off on stays"} />
        <Block title={"OYO for bussiness"} para={"Trusted by 5000 companies"} />
        <Block title={"List your property"} para={"Start earning in 30 min"} />
        <Block title={"987654321"} para={"Call us to book now"} />
        <div className=" flex items-center px-3 ">
          <Image
            src={"/demo.svg"}
            alt="demo"
            width={200}
            height={200}
            className="w-10 h-10 rounded-full mr-5"
          />
          <Link href={"/loginn"}>
            <h3 className=" font-bold">Login / Signup</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header1;
