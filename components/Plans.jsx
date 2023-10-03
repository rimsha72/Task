import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const Plans = () => {
  return (
    <div className="py-8 md:py-20 px-4 md:px-16 bg-white">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2">
          <div className="text-lg font-bold text-left text-[#ed6c0e] mb-2 md: mb-2">
            Our Plans
          </div>
          <div className="md:flex-row justify-between items-center mb-2 md: mb-2">
            <h2 className="text-2xl md:text-3xl font-bold">
              Explore Current top deals
            </h2>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
          <div className="text-black mt-4 md:mt-8 bg-[#fae7d9] p-4 md:p-4 rounded">
            <ul className="flex flex-wrap text-sm font-medium text-center text-black mb-2">
              <div className="bg-white p-2 flex flex-wrap rounded">
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-block px-4 py-3 text-white bg-[#0f2354] rounded-lg active"
                    aria-current="page"
                  >
                    Monthly
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    Monthly
                  </a>
                </li>
              </div>
            </ul>
            <div>
              <li className="mt-2">View Mobile Numbers-50+50 varified</li>
              <li className="mt-2">Persalised message to 50+10 persons</li>
              <li className="mt-2">Chat with proposals directly</li>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-[#fae7d9] p-4 rounded shadow-lg">
              <h3 className="text-md font-semibold text-black mb-2">Basic</h3>
              <h4 className="text-lg font-bold mb-2">
                {" "}
                1500/<span className="text-sm"> 2 month</span>
              </h4>
              <p>
                <span className="bg-[#facba8] text-black text-sm py-1 px-2 rounded-full mr-2">
                  Save 10%
                </span>
              </p>
              <div className="flex items-center">
                <p className="text-[#0f2354] text-sm mt-3 font-semibold mr-2">
                  Get Started
                </p>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-[#0f2354] mt-3"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#fae7d9] p-4 rounded shadow-lg">
              <h3 className="text-md font-semibold text-black mb-2">Silver</h3>
              <h4 className="text-lg font-bold mb-2">
                {" "}
                1500/<span className="text-sm"> 2 month</span>
              </h4>
              <p>
                <span className="bg-[#facba8] text-black text-sm py-1 px-2 rounded-full mr-2">
                  Save 10%
                </span>
              </p>
              <div className="flex items-center">
                <p className="text-[#0f2354] text-sm mt-3 font-semibold mr-2">
                  Get Started
                </p>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-[#0f2354] mt-3"
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#fae7d9] p-4 rounded shadow-lg">
              <h3 className="text-md font-semibold text-black mb-2">Gold</h3>
              <h4 className="text-lg font-bold mb-2">
                {" "}
                1500/<span className="text-sm"> 2 month</span>
              </h4>
              <p>
                <span className="bg-[#facba8] text-black text-sm py-1 px-2 rounded-full mr-2">
                  Save 10%
                </span>
              </p>
              <div className="flex items-center">
                <p className="text-[#0f2354] text-sm mt-3 font-semibold mr-2">
                  Get Started
                </p>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-[#0f2354] mt-3"
                />
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#fae7d9] p-4 rounded shadow-lg">
              <h3 className="text-md font-semibold text-black mb-2">
                Platanium
              </h3>
              <h4 className="text-lg font-bold mb-2">
                {" "}
                1500/<span className="text-sm"> 2 month</span>
              </h4>
              <p>
                <span className="bg-[#facba8] text-black text-sm py-1 px-2 rounded-full mr-2">
                  Save 10%
                </span>
              </p>
              <div className="flex items-center">
                <p className="text-[#0f2354] text-sm mt-3 font-semibold mr-2">
                  Get Started
                </p>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-[#0f2354] mt-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
