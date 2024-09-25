"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

import Link from "next/link";
export default function Hero() {
  return (
    <section className="py-14 min-h-screen flex items-center ">

    <div className="grid grid-cols-1 sm:grid-cols-12  w-full text-black dark:text-white ">
        <div

          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
          <h1 className="  text-3xl sm:text-4xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className=" bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>

          </h1>
          <h1 className="text-main mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">

            <TypeAnimation
              sequence={[
                "Jaden",
                1500,
                "Web Developer",
                1500
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              />
          </h1>
          <p className=" text-base sm:text-lg mb-6 lg:text-xl">
          Crafting dynamic, user-centric web experiences with React—building fast, scalable, and visually engaging interfaces.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-lg mr-4 border-2 border-red-500 bg-red-500 text-white hover:bg-red-600 mb-4 sm:mb-0"
              >
             Learn More
            </Link>
            <Link
              href="/"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-lg border-2 border-red-500 text-red-500 bg-mainBg hover:bg-[#e5e5e5] "
            >
              
                Download CV
              
            </Link>
          </div>
        </div>
        <div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
          <div className="rounded-full overflow-hidden bg-main w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/me.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
              />
          </div>
        </div>
      </div>
              </section>
  )
}
