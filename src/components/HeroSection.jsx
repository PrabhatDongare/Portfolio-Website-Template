// import React from 'react'

import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div className="flex h-[80vh] flex-col justify-around tracking-wider md:flex-row">
        <div className="flex flex-col items-center gap-2 pt-[10%] md:items-start">
          <p className="text-4xl font-semibold text-slate-400 md:text-3xl">
            I&apos;m a
          </p>
          <p className="font-serif text-4xl font-bold md:text-6xl">
            FULL STACK
          </p>
          <p className="font-serif text-4xl font-bold md:text-6xl">SOFTWARE</p>
          <p className="font-serif text-4xl font-bold md:text-6xl">DEVELOPER</p>
          <p className="pt-8">
            <Link to="/" className="custom-blue rounded-xl px-7 py-3 text-xl">
              RESUME
            </Link>
          </p>
        </div>
        <div className="pt-[5%]">
          <img
            className="mx-auto w-[80%] rounded-full"
            src="https://www.galtechlearning.com/wp-content/uploads/2023/01/third.gif"
            alt="gif"
          />
        </div>
      </div>
      {/* ABOUT ME */}
      <div
        id="aboutMe"
        className="flex flex-col items-center justify-center pb-5 pt-10 md:flex-row md:items-start md:gap-28 md:pt-44"
      >
        <div className="relative h-96 w-80 rounded-xl border-[15px] border-blue-400">
          <img
            className="absolute bottom-8 right-10 h-72 w-52 rounded-xl object-cover md:h-96 md:w-80"
            alt="photo"
            src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="px-7 md:w-1/2 md:px-0">
          <h1 className="mx-a pb-3 pt-12 text-3xl font-bold md:pb-6">
            ABOUT ME
          </h1>
          <p className="md:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae ratione molestias minus repellat blanditiis. Quas
            expedita non vel laudantium dolorem nostrum soluta natus totam
            consequatur, repudiandae animi adipisci tenetur iure ipsum corporis.
            Nemo corporis aliquam rerum sint doloremque voluptates temporibus
            Nemo corporis aliquam rerum sint doloremque
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
