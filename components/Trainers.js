import React from "react";
import { CgGym } from "react-icons/cg";
import Image from "next/image";
import selfie1 from "../public/selfie1.png";
import selfie3 from "../public/selfie3.png";
import selfie4 from "../public/selfie4.png";
const Trainers = () => {
  return (
    <div id="trainers" className=" h-full">
      <section className="flex flex-col justify-start ml-10 pt-10 ">
        <h1 className="flex text-4xl text-red-600 font-semibold  flex-row">
          {" "}
          <CgGym className="text-4xl text-red-600 mx-2 " /> Our Team
        </h1>
        <h1 className=" font-bold  text-4xl">MEET OUR MOST</h1>
        <h1 className=" font-bold  text-4xl">EXPERIENCED TRAINERS</h1>
      </section>
      <section className="flex justify-around mb-10 mt-10 flex-col items-center max-w-[1240px] mx-auto md:flex-row">
        <div className="flex justify-center relative bg-gradient-to-b   from-red-600  overflow-hidden rounded-full w-80 h-80 mt-5 hover:scale-110 transform transition-all duration-500 ease-in-out">
          <Image
            src={selfie1}
            alt="kimani"
            layout="fill"
            objectFit="cover"
            className="flex justify-center rounded-full"
          />
          <p className="absolute -bottom-32  w-48 h-48  text-white bg-gradient-to-b from-red-600 to-gray-100 rounded-full">
            <span className="flex justify-center font-bold   p-4 text-2xl items-center ">
              John Doe
            </span>
          </p>
        </div>

        <div className="flex justify-center relative bg-gradient-to-b   from-red-600  overflow-hidden rounded-full w-80 h-80 mt-5 hover:scale-110 transform transition-all duration-500 ease-in-out">
          <Image
            src={selfie3}
            alt="kimani"
            layout="fill"
            objectFit="cover"
            className="flex justify-center rounded-full"
          />
          <p className="absolute -bottom-32   w-48 h-48  text-white bg-gradient-to-b from-red-600 to-gray-100 rounded-full">
            <span className="flex justify-center font-bold  p-4 text-2xl items-center ">
              John Doe
            </span>
          </p>
        </div>

        <div className="flex justify-center relative bg-gradient-to-b   from-red-600  overflow-hidden rounded-full w-80 h-80 mt-5 hover:scale-110 transform transition-all duration-500 ease-in-out">
          <Image
            src={selfie4}
            alt="kimani"
            layout="fill"
            objectFit="cover"
            className="flex justify-center rounded-full"
          />
          <p className="absolute -bottom-32  w-48 h-48  text-white bg-gradient-to-b from-red-600 to-gray-100 rounded-full">
            <span className="flex justify-center font-bold  p-4 text-2xl items-center ">
              John Doe
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Trainers;
