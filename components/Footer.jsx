import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="md:py-5 bg-[#031237] text-white">
      <div className="px-4 pt-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <Image
                src="/assets/footerLogo.png"
                alt=""
                width={117} 
                height={69} 
              />
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-white font-bold tracking-wide text-lg">
              Terms & Conditions
            </p>
            <div className="flex">
              <a
                href="tel:850-123-5021"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Terms & Conditions
              </a>
            </div>
            <div className="flex">
              <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Privacy & Policy
              </a>
            </div>
          </div>
          <div>
            <span className="font-bold tracking-wide text-lg">Contact Us</span>
            <p className="mt-4 text-sm">
              Feel free to get in touch with us via call or message
            </p>
            <p className="mb-4 mt-4 flex items-center justify-center md:justify-start">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-3 text-[#ed6c0e]"
              />
              info@example.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <FontAwesomeIcon icon={faPhone} className="mr-3 text-[#ed6c0e]" />
              + 01 234 567 88
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 border-t lg:flex-row">
          <p className="text-sm">Copyright © 2023 company Pvt Ltd</p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            Design 7 developed by ZySoftec
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
