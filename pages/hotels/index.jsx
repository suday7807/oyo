import axios from "axios";
import React, { useState } from "react";
import Filters from "src/components/Filters";
import Header1 from "src/components/Header1";
import Hotel from "src/components/Hotel";

const Hotels = ({ hotels }) => {
  const [price, setPrice] = useState(3500);
  const [list, setList] = useState([]);
  const handlePrice = async () => {
    const { data } = await axios.get("/api/facilities/range?price=${price}");
    if (data?.hotels) {
      setList(data.hotels);
    }
  };
  return (
    <>
      <Header1 />
      <div className=" grid grid-cols-12">
        <div className=" col-span-3">
          <Filters
            price={price}
            setPrice={setPrice}
            handlePrice={handlePrice}
          />
        </div>
        <div className="col-span-9">
          {hotels
            ? hotels.map((e) => {
                return (
                  <div className=" m-5 " key={e._id}>
                    <Hotel e={e} />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(
    `${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`
  );
  const data = await res.json();

  return {
    props: {
      hotels: data.hotels ? data.hotels : data.allhotels,
    },
  };
}

export default Hotels;
