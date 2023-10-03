import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
const Testimonial = () => {
  return (
    <div className="py-8 md:py-20 px-4 md:px-16 bg-white">
      <div className="text-xl font-bold text-left text-[#ed6c0e] mb-4 md:mb-6">
        Testimonials
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          What People Are Saying
        </h2>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <button className="bg-gray-400 text-white text-2xl rounded w-8 h-8 flex items-center justify-center">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="bg-[#0f2354] hover:bg-gray-400 text-white text-2xl rounded w-8 h-8 flex items-center justify-center">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2">
          <div className="flex items-center space-x-4">
            <div>
            <Image
                src="/assets/testimonial1.png"
                alt="Testimonial 1"
                width={48} 
                height={48} 
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">James Williams</h3>
              <p>business men</p>
            </div>
          </div>
          <p className="text-white mt-4 md:mt-8 bg-[#ed6c0e] p-4 md:p-6 rounded">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex items-center space-x-4">
            <div>
            <Image
                src="/assets/testimonial1.png" 
                alt="Testimonial 2"
                width={48} 
                height={48} 
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Jane Doe</h3>
              <p>business women</p>
            </div>
          </div>
          <p className="text-gray-600 mt-4 md:mt-8 bg-[#fae7d9] p-4 md:p-6 rounded">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
