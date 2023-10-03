"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-20 px-4">
          <Image src="/assets/logo.png" alt="logo" width={135} height={80} /> 
          <div onClick={handleNav} className="md:hidden">
            {nav ? (
              <FontAwesomeIcon icon={faTimes} size="lg" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="lg" />
            )}
          </div>
          <ul
            className={`${
              nav
                ? "fixed inset-0 w-3/4 h-screen bg-[#CB8475] text-white ease-in-out transition-transform duration-500 transform translate-x-0 z-10"
                : "hidden md:flex"
            } md:flex md:space-x-4 md:items-center font-semibold md:pt-0`}
          >
            <li className="p-4">Browse Profile</li>
            <li className="p-4">Member Login</li>
            <button className="bg-[#ed6c0e] hover:bg-[#ed6c0e] text-white py-2 px-4 rounded ml-4">
              Register Free
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
