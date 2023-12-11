import React from "react";
import Header1 from "../components/Header1";
import Header2 from "src/components/Header2";
import Header3 from "src/components/Header3";
import Image from "next/image";
import Header4 from "src/components/Header4";
import Footer from "src/components/Footer";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>OYO: India's best Online Hotel Booking App</title>
      </Head>
      <Header1 />
      <Header2 />
      <Header3 />
      <div className=" mx-40">
        <div className=" my-14 ">
          <Image
            src={"/banner1.avif"}
            alt="bannner"
            width={200}
            height={200}
            className=" h-80 w-full"
          />
        </div>
        <div className=" mb-8 ">
          <Image
            src={"/banner2.avif"}
            alt="bannner"
            width={200}
            height={200}
            className=" h-40 w-full"
          />
        </div>
      </div>
      <Header4 />
      <Footer />
    </div>
  );
};

export default Home;
