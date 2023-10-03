import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className="w-full text-black bg-white">
      <div className="flex flex-col lg:flex-row">
        {/* Left Column */}
        <div className="lg:w-1/2 p-0">
          <img src="/assets/about.png" alt="About Us" className="w-full h-auto lg:h-full" />
        </div>
        {/* Right Column */}
        <div className="lg:w-1/2">
          <div
            className="h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${'/assets/about2.png'})`,
            }}
          >
            <div className="h-full flex flex-col text-white bg-opacity-75 p-4 lg:p-8">
              <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-[#ed6c0e]">
                About Us
              </h2>
              <h3 className="text-xl lg:text-2xl font-bold mb-2 text-black">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit
              </h3>
              <p className="text-black text-lg lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-4 lg:p-8 bg-[#031237]">
        <h2 className="text-xl lg:text-4xl sm:mr-4 font-bold text-white mb-4 lg:mb-0 lg:mr-8">
          Find your Partner here
        </h2>
        <button className="bg-transparent border border-white text-white py-2 px-4 ml-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default About;
