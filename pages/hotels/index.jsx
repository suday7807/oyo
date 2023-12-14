import React from "react";
import Header1 from "src/components/Header1";
import Hotel from "src/components/Hotel";

const Hotels = ({ hotels }) => {
  return (
    <>
      <Header1 />
      {hotels
        ? hotels.map((e) => {
            return (
              <div className=" m-5" key={e._id}>
                <Hotel e={e} />
              </div>
            );
          })
        : ""}
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(
    `http://localhost:3000/api/hotels?city=${ctx.query.city}`
  );
  const data = await res.json();

  return {
    props: {
      hotels: data.hotels ? data.hotels : data.allhotels,
    },
  };
}

export default Hotels;
