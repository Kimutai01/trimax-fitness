import React from "react";
import { GiWeightLiftingUp } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
import { BiDumbbell } from "react-icons/bi";
import { FaRunning } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import { GiHealthPotion } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { CgGym } from "react-icons/cg";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
const Services = () => {
  return (
    <div
      id="services"
      className="service-img bg-cover bg-center bg-fixed h-[700px] w-full"
    >
      <div className="bg-black/60 h-full">
        <section className="flex flex-col justify-start ml-10 pt-10">
          <h1 className=" krona font-bold flex text-4xl text-red-600 flex-row">
            {" "}
            <CgGym className="text-4xl mx-2 text-red-600" /> Our Services
          </h1>
          <h1 className="text-white font-semibold  text-4xl">
            WE OFFER TO YOU
          </h1>
        </section>

        <section className="mt-10 max-w-[1240px] m-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop="true"
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              // when window width is >= 1024px
            }}
          >
            <SwiperSlide>
              <div className="bg-white  shadow-xl p-4 h-80 md:mx-0 mx-4">
                <div className="flex flex-col justify-center items-center text-gray-500 hover:hover:text-red-600">
                  <GiWeightLiftingUp className="text-6xl" />
                  <h1 className="text-2xl text-center font-bold ">
                    Weight Loss
                  </h1>
                  <p className=" text-center">
                    We offer a wide range of weight loss programs to help you
                    achieve your goals.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white  shadow-xl p-4 h-80 md:mx-0 mx-4">
                <div className="flex flex-col justify-center items-center text-gray-500 hover:hover:text-red-600">
                  <GiHealthPotion className="text-6xl " />
                  <h1 className="text-2xl text-center font-bold ">
                    Cardio Vascular Training
                  </h1>
                  <p className=" text-center">
                    With our cardio vascular training and daily aerobics classes
                    you will be able to achieve your goals.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white  shadow-xl p-4 h-80 md:mx-0 mx-4">
                <div className="flex flex-col justify-center items-center text-gray-500 hover:hover:text-red-600">
                  <FaRunning className="text-6xl " />
                  <h1 className="text-2xl font-bold ">
                    Cardio Training
                  </h1>
                  <p className=" text-center">
                    We have a wide range of cardio training equipment to help
                    you achieve your goals.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white  shadow-xl p-4 h-80  md:mx-0 mx-4">
                <div className="flex flex-col justify-center items-center text-gray-500 hover:hover:text-red-600">
                  <MdOutlineFoodBank className="text-6xl " />
                  <h1 className="text-2xl font-bold ">
                    Nutrition
                  </h1>
                  <p className=" text-center">
                    We offer a wide range of nutrition programs to help you
                    achieve your goals.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white  shadow-xl p-4 h-80  md:mx-0 mx-4">
                <div className="flex flex-col justify-center items-center text-gray-500 hover:hover:text-red-600">
                  <BiDumbbell className="text-6xl " />
                  <h1 className="text-2xl font-bold ">Strength</h1>
                  <p className=" text-center">
                    We offer a wide range of strength training programs to help
                    you achieve your goals.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default Services;
