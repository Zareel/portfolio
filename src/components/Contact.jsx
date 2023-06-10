import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen  md:mt-10">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 font-poppins text-lg">
            Please leave your message here...
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/3fff6338-7520-4418-9c91-e0bc5b422e99"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2  border-2 rounded-md outline-none shadow-md font-poppins text-lg tracking-wide"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 border-2 rounded-md outline-none shadow-md font-poppins text-lg tracking-wide"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="enter your message"
              className=" p-2  border-2 rounded-md outline-none shadow-md font-poppins text-lg tracking-wide"
            ></textarea>
            <div className="w-full flex justify-center mt-6">
              <button
                type="submit"
                className=" text-white cursor-pointer font-poppins px-8 py-3 text-md rounded-md  bg-gradient-to-r from-yellow-300 via-pink-600 to-blue-600  hover:from-blue-600 hover:via-pink-600 hover:to-yellow-300 duration-400"
              >
                Let's Talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
