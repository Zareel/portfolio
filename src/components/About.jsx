import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen pb-20 md:py-0 mt-28 md:mt-0 ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-[18px] lg:mt-10 font-poppins text-gray-600">
          Name:
          <span className="font-semibold text-gray-500">Zareel Kalam</span>{" "}
          <br /> I'm from Ernakulam, Kerala. I worked at Middle East
          Communication network, Dubai as a Senior Executive accountant from
          2009 to 2018.
        </p>
        <br />
        <p className="text-[18px] lg:mt-4 font-poppins text-gray-600">
          I started learning coding from August 2022, Enrolled for Full Stack
          JavaScript Web Developer Bootcamp (August 2022 - 2023) at iNeuron,
          Bangalore. Currently learning DSA at Unique Occassio Tech, Ernakulam.
          <br />
          <br />
          My Family members consist of my Father, Mother, my two children and
          myself. <br />
          Hobbies: Watching movies, listening to music, travelling, reading and
          coding <br /> <br /> Favorite Quotes: "If you want to shine like a
          sun, first burn like a sun" - AP J Abdul Kalam <br /> "Don’t put off
          doing the hard things. If not now,, then when? Now is the new later,
          so let’s do it now." <br /> - Dr Joe Dispenza
        </p>
      </div>
    </div>
  );
};

export default About;
