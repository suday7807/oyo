import React from "react";
import Header1 from "src/components/Header1";
import Hotel from "src/components/Hotel";

const Hotels = () => {
  return (
    <>
      <Header1 />
      <div className="m-5">
        <Hotel />
        <Hotel />
      </div>
    </>
  );
};

export default Hotels;
