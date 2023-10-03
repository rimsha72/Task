"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  const backgroundStyles = {
    backgroundImage: `url(${"/assets/main.png"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    zIndex: 1,
  };

  return (
    <div className="text-white" style={backgroundStyles}>
      <div className="max-w-screen-xl w-full mx-4 md:mx-auto flex flex-col justify-center relative">
        <div className="mx-auto px-4 py-16">
          <div className="bg-[#ed6c0e] p-8 rounded-lg">
            <form className="md:flex md:justify-between md:items-center">
              <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                <label
                  className="block tracking-wide text-white text-sm font-bold mb-2"
                  htmlFor="gender"
                >
                  Looking for
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="gender"
                  >
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="text-gray-700"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                <label
                  className="block tracking-wide text-white text-sm font-bold mb-2"
                  id="age"
                >
                  Age
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="text-gray-700"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                <div className="relative">
                  <select
                    className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 mt-7 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="other"
                  >
                    <option>36</option>
                    <option>37</option>
                    <option>38</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="text-gray-700"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                <label
                  className="block tracking-wide text-white text-sm font-bold mb-2"
                  htmlFor="grid-state"
                >
                  Religion
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="religion"
                  >
                    <option>Islam</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0 flex items-center">
                <button className="bg-[#0f2354] hover:bg-[#0f2354] text-white px-4 py-3 rounded mt-7 w-full">
                  <div style={{ whiteSpace: "nowrap" }}>Search Partner</div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
