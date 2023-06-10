import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import profileImaga from "../whitebg.png";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-white pb-28 md:pb-0  md:mt-[-40px] lg:mt-[-80px]"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="text-slate-600 flex flex-col gap-4 xl:mt-24   justify-center h-full ">
          <h2 className="text-3xl xl:text-6xl font-roboto font-bold ">
            I'm a Web Developer
          </h2>
          <p className="text-lg  text-gray-400 font-base font-poppins lg:w-[550px]">
            I am a passionate developer, love to work on web applications,
            ReactJS and TailwindCSS. Currently doing internship at iNeuron,
            Bangalore and also learning MERN Stack Web Development.
          </p>
          <div>
            <button className="group text-white cursor-pointer font-poppins px-6 py-3 text-md rounded-md  bg-gradient-to-r from-yellow-300 via-pink-600 to-blue-600  hover:from-blue-600 hover:via-pink-600 hover:to-yellow-300 duration-400">
              Portfolio
              <span>
                <ArrowRightIcon className="group-hover:rotate-90 " />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            className="w-[750px] rounded-2xl mx-auto"
            src={profileImaga}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
