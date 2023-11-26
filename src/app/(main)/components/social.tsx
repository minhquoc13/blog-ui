import Link from "next/link";
import React from "react";
import { LuFacebook } from "react-icons/lu";
import { GrInstagram } from "react-icons/gr";
import { RiTwitterXLine } from "react-icons/ri";

const Social = () => {
  return (
    <div className="w-full flex gap-3 items-center mb-4">
      <div className="w-10 h-10">
        <Link
          href="https://www.facebook.com/"
          className="w-full h-full rounded-full bg-white border border-gray-300 flex items-center justify-center hover:text-red-300 hover:border-red-300 transition-colors duration-200 ease-in-out"
          target="_blank"
        >
          <LuFacebook />
        </Link>
      </div>
      <div className="w-10 h-10">
        <Link
          href="https://www.facebook.com/"
          className="w-full h-full rounded-full bg-white border border-gray-300 flex items-center justify-center hover:text-red-300 hover:border-red-300 transition-colors duration-200 ease-in-out"
          target="_blank"
        >
          <GrInstagram />
        </Link>
      </div>
      <div className="w-10 h-10">
        <Link
          href="https://www.facebook.com/"
          className="w-full h-full rounded-full bg-white border border-gray-300 flex items-center justify-center hover:text-red-300 hover:border-red-300 transition-colors duration-200 ease-in-out"
        target="_blank">
          <RiTwitterXLine />
        </Link>
      </div>
    </div>
  );
};

export default Social;
