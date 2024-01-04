import React from "react";
import { homeLinks } from "../data/index";

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex flex-col fixed top-[35%] left-0 gap-4">
      <ul>
        {homeLinks.map((item) => {
          return (
            <li
              key={item.id}
              className={
                "flex justify-between items-center w-40 h-1/4 px-4 py-2 ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-400 rounded-md "
              }
            >
              <a
                href={item.href}
                className="flex justify-between items-center gap-5 w-full text-lg text-white"
                download={item.download}
              >
                {item.child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
