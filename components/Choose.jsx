import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as farHeart,
  faComments as farComments,
  faImages as farImages,
  faBell as farBell,
} from "@fortawesome/free-regular-svg-icons";

const Choose = () => {
  return (
    <div className="w-full bg-white py-16 px-16">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Why Choose Online Vaishakhi <br /> Matrimony
      </h1>
      <p className="text-center mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor <br /> incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="max-w-[1240px] mx-auto grid gap-8 md:grid-cols-4">
        {/* Card 1 */}
        <div className="bg-[#ffeee1] border border-gray rounded-lg p-8 hover:bg-[#ed6c0e] hover:text-white transition duration-300 ease-in-out">
          <div className="relative">
            <div className="h-15 w-15 bg-[#ed6c0e] rounded absolute top-0 left-0 p-2">
              <FontAwesomeIcon icon={farHeart} size="2x" color="white" />
            </div>
          </div>
          <h3 className="text-md font-bold mt-16">Find your best match</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#ffeee1] border border-gray rounded-lg p-8 hover:bg-[#ed6c0e] hover:text-white transition duration-300 ease-in-out">
          <div className="relative">
            <div className="h-15 w-15 bg-[#ed6c0e] rounded absolute top-0 left-0 p-2">
              <FontAwesomeIcon icon={farComments} size="2x" color="white" />
            </div>
          </div>
          <h3 className="text-md font-bold mt-16">Direct Communication</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. magna
            aliqua.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#ffeee1] border border-gray rounded-lg p-8 hover:bg-[#ed6c0e] hover:text-white transition duration-300 ease-in-out">
          <div className="relative">
            <div className="h-15 w-15 bg-[#ed6c0e] rounded absolute top-0 left-0 p-2">
              <FontAwesomeIcon icon={farImages} size="2x" color="white" />
            </div>
          </div>
          <h3 className="text-md font-bold mt-16">Add More Photos</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. magna
            aliqua.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#ffeee1] border border-gray rounded-lg p-8 hover:bg-[#ed6c0e] hover:text-white transition duration-300 ease-in-out">
          <div className="relative">
            <div className="h-15 w-15 bg-[#ed6c0e] rounded absolute top-0 left-0 p-2">
              <FontAwesomeIcon icon={farBell} size="2x" color="white" />
            </div>
          </div>
          <h3 className="text-md font-bold mt-16">Get Notified</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. magna
            aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
