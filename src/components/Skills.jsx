import React from "react";
import { techs } from "../data/index";
import { learning } from "../data/index";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-full pt-6">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pt-16">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
          {learning.map((item) => {
            return (
              <div
                key={item.id}
                className={`hover:scale-105 duration-500 py-2 rounded-lg ${item.style}`}
              >
                <img className="w-28 mx-auto" src={item.src} alt="logo" />
                <p className="mt-4 font-poppins">{item.title}</p>
              </div>
            );
          })}
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
          {techs.map((item) => {
            return (
              <div
                key={item.id}
                className={`hover:scale-105 duration-500 py-2 rounded-lg ${item.style}`}
              >
                <img className="w-28 mx-auto" src={item.src} alt="logo" />
                <p className="mt-4 font-poppins">{item.title}</p>
              </div>
            );
          })}
        </div>
        {/*  
        <div className="pt-16 w-full">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6 text-lg font-poppins font-semibold text-gray-500">
            Currently Learning
          </p>
        </div>
      */}
      </div>
    </div>
  );
};

export default Skills;
