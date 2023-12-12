import Image from "next/image";
import Link from "next/link";

const Hotel = () => {
  return (
    <div className="  border-2 border-red-500 rounded-lg mb-5 p-3 w-full h-72">
      <div className="flex">
        <Image
          src={
            "https://img.freepik.com/premium-photo/beautiful-luxury-bedroom-suite-hotel-with-tv_105762-1637.jpg?size=626&ext=jpg"
          }
          alt="hotel"
          width={400}
          height={400}
          className="w-96 h-60 mr-2"
        />
        <div className="grid grid-rows-3">
          <Image
            src={
              "https://img.freepik.com/premium-photo/beautiful-luxury-bedroom-suite-hotel-with-tv_105762-1637.jpg?size=626&ext=jpg"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28"
          />
          <Image
            src={
              "https://img.freepik.com/premium-photo/beautiful-luxury-bedroom-suite-hotel-with-tv_105762-1637.jpg?size=626&ext=jpg"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28"
          />
          <Image
            src={
              "https://img.freepik.com/premium-photo/beautiful-luxury-bedroom-suite-hotel-with-tv_105762-1637.jpg?size=626&ext=jpg"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28"
          />
        </div>
        <div className=" ml-20">
          <h2 className=" font-bold text-2xl line-clamp-1 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, autem.
          </h2>
          <p className=" text-justify my-5 text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quasi
            tempora veniam, impedit possimus quas cupiditate quo quam saepe
            perspiciatis asperiores excepturi a? Molestias, rerum.
          </p>
          <div className=" text-2xl my-5">
            <span className=" font-bold">Facilits: </span>
            <span> Bedroom, Washroom, dinnigrom </span>
          </div>
          <div>
            <button className=" mr-6 w-60 h-14 text-lg bg-purple-600 rounded-lg">
              Price : 4500
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
