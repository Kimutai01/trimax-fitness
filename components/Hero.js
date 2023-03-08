import React from "react";
import { AiFillDownCircle } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import logo1 from "../public/logo1.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className=" bg-cover custom-img bg-fixed h-[700px] w-full">
        <div className="bg-gradient-to-r from-black/75 to-transparent h-full">
          <div className="flex justify-center flex-col items-center inset-0 z-10 h-full text-white  md:text-5xl  text-center  font-bold text-2xl">
            <Image src={logo1} alt="logo" width={300} height={200} />
            <h1 className="font-roboto font-bold mb-1">
              BUILD THE PERFECT BODY AND
            </h1>
            <h1 className="font-roboto font-bold text-red-600">
              THE PERFECT LIFE
            </h1>
            <Link href="/#about">
              <AiFillDownCircle className="text-6xl animate-bounce mt-10" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
