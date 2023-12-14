import Image from "next/image";
import Link from "next/link";

const Hotel = ({ e }) => {
  return (
    <div className="  border-2 border-red-500 rounded-lg mb-5 p-3 w-full h-80">
      <div className="flex">
        <Image
          src={e?.banner}
          alt="hotel"
          width={400}
          height={400}
          className="w-96 h-70 mr-2"
        />
        <div className=" flex flex-col gap-14">
          {e
            ? e.gallery?.map((ele) => {
                return (
                  <Image
                    key={ele}
                    src={ele}
                    alt="hotel"
                    width={200}
                    height={200}
                    className="w-24 h-14"
                  />
                );
              })
            : ""}
        </div>
        <div className=" ml-20">
          <h2 className=" font-bold text-2xl line-clamp-1 ">{e?.name}</h2>
          <p className=" text-justify my-5 text-lg">{e?.description}</p>
          <div className=" text-2xl my-5">
            <span className=" font-bold">Facilits: </span>
            <ul className=" flex">
              {e
                ? e.facilities?.map((ele) => {
                    return (
                      <li
                        key={ele.name}
                        className=" mr-10 mb-3 flex items-center"
                      >
                        <span>
                          <Image
                            src={ele.img}
                            width={200}
                            height={200}
                            className="w-8 h-8 rounded-full"
                          />
                        </span>
                        <span className="ml-5">{ele.name}</span>
                      </li>
                    );
                  })
                : ""}
            </ul>
          </div>
          <div>
            <button className=" mr-6 w-60 h-14 text-lg bg-purple-600 rounded-lg">
              {e?.price}
            </button>
            <Link
              href={"/hotels/1"}
              className=" font-semibold text-xl text-red-500"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
