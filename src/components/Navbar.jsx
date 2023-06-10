import React, { useState } from "react";
import { links } from "../data/index.js";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <div className="w-full h-[100px] bg-white py-2 flex justify-between items-center sticky top-0 left-0 px-24 z-50">
      <div>
        <h1 className=" font-bold text-6xl cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-600  to-blue-600">
          Zareel
        </h1>
      </div>
      <ul
        className={` ${
          extendNavbar
            ? "flex flex-col justify-center items-center  gap-4 absolute top-20 left-0 w-full h-56 z-50 bg-white"
            : "   hidden md:flex"
        }`}
      >
        {links.map((item) => {
          return (
            <li
              key={item.id}
              className="px-4 cursor-pointer text-slate-600 capitalize font-medium font-poppins text-lg hover:text-slate-900 hover:scale-105 duration-300"
            >
              <Link to={item.link} smooth duration={500}>
                {item.link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => {
          setExtendNavbar((open) => !open);
        }}
        className="md:hidden cursor-pointer pr-4 z-10 text-slate-600 hover:text-slate-800 hover:scale-105 duration-300"
      >
        {extendNavbar ? <CloseIcon /> : <MenuIcon />}
      </div>
    </div>
  );
};

export default Navbar;
