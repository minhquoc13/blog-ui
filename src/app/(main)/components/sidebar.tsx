import React from "react";
import Image from "next/image";
import Navbar from "./navbar";
import Social from "./social";

const SideBar = () => {
  return (
    <aside className="col-span-4 lg:col-span-1">
      <div className="max-w-full p-4 shadow-lg">
        <div className="w-16 h-16 mb-4">
          <div className="w-full h-full">
            <Image
              src="https://nartc.me/_astro/speak.ab354e6d_23CDe.webp"
              alt=""
              width={400}
              height={400}
              className="rounded-full"
            ></Image>
          </div>
        </div>
        <p className="font-bold text-xl mb-4">Minh Quoc</p>
        <p className="mb-4 leading-normal">
          I am a developer who is highly interested in TypeScript. My tech stack
          has been full-stack TS such as Angular, React with TypeScript and
          NestJS.
        </p>
        <Navbar />
        <Social />
        <div>
          <p className="text-gray-medium font-extralight text-sm">© Minh Quoc</p>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
