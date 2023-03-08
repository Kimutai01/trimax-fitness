import React from "react";
import { BiDumbbell } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
const Pricing = () => {
  return (
    <div id="pricing" className="bg-black h-full pb-20 md:h-[90vh]">
      <h1 className="text-white text-5xl text-center pt-20 font-bold font-roboto">
        PRICING
      </h1>
      <div className="flex justify-around flex-col items-center max-w-[1240px] mx-auto mt-10 md:flex-row">
        <div className="h-96 w-80 mt-10 md:mt-0 border-2 border-white">
          <div className="bg-red-600 h-20 w-20 flex rounded-full my-2 mx-2">
            <BiDumbbell className="text-6xl text-white mx-2 my-2" style={{rotate: "45deg"}} />
          </div>
          <p className="text-white mx-2">1 Month</p>
          <p className="text-red-600 mx-2 mb-2">3500/=<span className="text-white ml-2">(1 Person) </span></p>

          <div className="mx-2">
            <p className="text-white flex ">
              {" "}
              <AiOutlineCheck className="text-red-600 mr-2 text-2xl" /> Free
              Riding
            </p>
            <p className="text-white flex ">
              {" "}
              <AiOutlineCheck className="text-red-600 mr-2 text-2xl" />{" "}
              Unlimited Equipment
            </p>
            <p className="text-white flex ">
              {" "}
              <AiOutlineCheck className="text-red-600 mr-2  text-2xl" />
              Personal Training
            </p>
            <p className="text-white flex ">
              {" "}
              <AiOutlineCheck className="text-red-600  mr-2 text-2xl" /> Daily
              Aerobics Classes{" "}
            </p>
            <p className="text-white flex ">
              {" "}
              <AiOutlineCheck className=" text-red-600 mr-2 text-2xl" /> Weight
              Losing Classes
            </p>
            <p className="text-white flex ">
              {" "}
              <AiOutlineCheck className="text-red-600 mr-2 text-2xl" /> Diet
              Plan
            </p>
          </div>
        </div>
        <div className="h-96 w-80 mt-10 md:mt-0 border-2 border-white">
          <div className="bg-red-600 h-20 w-20 flex rounded-full my-2 mx-2">
            <BiDumbbell className="text-6xl text-white mx-2 my-2" style={{rotate: "45deg"}} />
          </div>
          <p className="text-white mx-2">1 Month</p>
          <p className="text-red-600 mx-2 mb-2">6500/=<span className="text-white ml-2">(Couple rate , 2 people) </span></p>
          <div className="mx-2">
            <p className="text-white flex ">
              {" "}
              <AiOutlineCheck className="text-red-600 mr-2 text-2xl" /> Free
              Riding
            </p>
            <p className="text-white flex ">
              {" "}
              <AiOutlineCheck className="text-red-600 mr-2 text-2xl" />{" "}
              Unlimited Equipment
            </p>
            <p className="text-white flex ">
              {" "}
              <AiOutlineCheck className="text-red-600 mr-2  text-2xl" />
              Personal Training
            </p>
            <p className="text-white flex ">
              {" "}
              <AiOutlineCheck className="text-red-600  mr-2 text-2xl" /> Daily
              Aerobics Classes{" "}
            </p>
            <p className="text-white flex ">
              {" "}
              <AiOutlineCheck className=" text-red-600 mr-2 text-2xl" /> Weight
              Losing Classes
            </p>
            <p className="text-white flex ">
              {" "}
              <AiOutlineCheck className="text-red-600 mr-2 text-2xl" /> Diet
              Plan
            </p>
          </div>
        </div>
        <div className="h-96 w-80 mt-10 md:mt-0 border-2 border-white">
          <div className="bg-red-600 h-20 w-20 flex rounded-full my-2 mx-2">
            <BiDumbbell className="text-6xl text-white mx-2 my-2" style={{rotate: "45deg"}} />
          </div>
          <p className="text-white mx-2">1 Month</p>
          <p className="text-red-600 mx-2 mb-2">3000/=<span className="text-white ml-2">(Students and Senior Citizens) </span></p>

          <div className="mx-2">
            <p className="text-white flex ">
              {" "}
              <AiOutlineCheck className="text-red-600 mr-2 text-2xl" /> Free
              Riding
            </p>
            <p className="text-white flex ">
              {" "}
              <AiOutlineCheck className="text-red-600 mr-2 text-2xl" />{" "}
              Unlimited Equipment
            </p>
            <p className="text-white flex ">
              {" "}
              <AiOutlineCheck className="text-red-600 mr-2  text-2xl" />
              Personal Training
            </p>
            <p className="text-white flex ">
              {" "}
              <AiOutlineCheck className="text-red-600  mr-2 text-2xl" /> Daily
              Aerobics Classes{" "}
            </p>
            <p className="text-white flex ">
              {" "}
              <AiOutlineCheck className=" text-red-600 mr-2 text-2xl" /> Weight
              Losing Classes
            </p>
            <p className="text-white flex ">
              {" "}
              <AiOutlineCheck className="text-red-600 mr-2 text-2xl" /> Diet
              Plan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
