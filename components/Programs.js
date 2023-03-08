import React, { useState, useEffect } from "react";
import programmes from "./ProgramList";
import { CgGym } from "react-icons/cg";

const Programs = () => {
  const date = new Date();
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const [selectedDay, setSelectedDay] = useState(days[date.getDay() - 1]);

  useEffect(() => {
    if (date.getDay() === 0 || date.getDay() === 6) {
      setSelectedDay("free");
    }
  }, [date.getDay()]);
 

  return (
    <div
      id="programs"
      className="program-img bg-cover bg-center bg-fixed h-[600px] md:h-[500px] w-full"
    >
      <div className="bg-black/75 h-full">
        <section className="flex flex-col justify-start ml-10 pt-10">
          <h1 className="flex text-4xl  text-red-600 font-extrabold flex-row">
            {" "}
            <CgGym className="text-4xl mx-2  text-red-600" /> Our Programs
          </h1>

          <h1 className="  text-white font-bold text-4xl">WE OFFER TO YOU</h1>
        </section>

        <section className=" mt-4 flex justify-center  flex-wrap md:gap-6">
          {days.map((day) => (
            <p
              key={day}
              onClick={(e) => {
                setSelectedDay(e.target.innerText);
              }}
              className={
                day === selectedDay
                  ? "bg-red-600  text-white px-4 py-2 my-2  mx-2 cursor-pointer"
                  : "text-black bg-gray-100 px-4 py-2 my-2   mx-2 cursor-pointer"
              }
            >
              {day}
            </p>
          ))}
        </section>

        {programmes.programmes.map(
          (program) =>
            program.day === selectedDay &&
            selectedDay !== "free" && (
              <div
                className="flex justify-center transition-all duration-500 ease-in-out"
                key={program.day}
              >
                <div className="flex flex-col justify-center items-center border-4 border-red-500 md:w-96 w-80 p-4 m-4 bg-black rounded-md">
                  <p className="text-white font-bold text-2xl p-4">
                    Our Aerobic classes
                  </p>
                  <div className="p-4  w-72 md:w-80 text-center bg-gray-200 rounded-2xl">
                    <p className=" font-bold text-red-600">
                      Day : <span className="text-black">{program.day}</span>
                    </p>
                    <p className=" font-bold text-red-600">
                      Class :{" "}
                      <span className="text-black ">{program.exercise}</span>
                    </p>
                    {program.time && (
                      <p className=" font-bold text-red-600">
                        Time :{" "}
                        <span className="text-black">{program.time}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
        )}
        {selectedDay === "free" && (
          <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center border-4 border-red-500 md:w-96 w-80 p-4 m-4 bg-black rounded-md">
             
              <div className="p-4  w-72 md:w-80 text-center bg-gray-200 rounded-2xl">
                We do not have any classes on weekends.
                Join us for Classes from Monday to Friday
                from 6:00 am to 7:00 pm
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Programs;
