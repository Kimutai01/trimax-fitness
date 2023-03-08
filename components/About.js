import React from "react";
import Image from "next/image";
import aboutimage from "../public/about.jpg";
import { CgGym } from "react-icons/cg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="py-10">
        <section className="flex justify-around align-center  flex-col md:flex-row">
          {/* Right side */}
          <div className="md:shadow-2xl md:shadow-red-600 flex justify-center items-center ">
            <Image
              src={aboutimage}
              alt="aboutimage"
              className=" w-96 mx-2 px-2 md:mx-0 my-3 md:rounded-lg md:p-0 md:my-0 rounded-2xl"
            />
          </div>
          {/* Left side  */}
          <div className="ml-10 ">
            <h1 className="text-4xl font-bold krona text-red-600 flex">
              <CgGym className="text-4xl text-red-600 " /> ABOUT US
            </h1>
            <h2 className="text-2xl font-bold text-break fotnt-bebas  my-3">
              <p>World Class Trainers</p>
              <p>High Quality Equipment</p>
              <p>Best Gym in Town</p>
            </h2>

            <p className="text-lg text-gray-500 w-80 my-3 ">
              Trimax fitness is a gym that is located at Juja. We have the best
              trainers and the best equipment. We are the best gym in town if
              you want to look good and feel good.
            </p>
            <p className="text-md text-gray-500 w-80 my-3 krona">
              Don't be left behind, join us today and get the best out of your
            </p>

            <button className="bg-red-600 text-white px-6 py-4 my-3 ">
              We Are The Best
            </button>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default About;
