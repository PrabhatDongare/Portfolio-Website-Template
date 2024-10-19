// import React from "react";
import { IoRocketSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div id="projects" className="my-5 py-14">
      <h1 className="mb-8 text-center text-4xl font-bold md:mb-24">PROJECTS</h1>
      <div className="flex flex-col gap-10 md:gap-40">
        {/* Project 1 */}
        <div className="flex flex-col justify-center md:flex-row md:gap-28">
          {/* Image for Phone */}
          <div className="relative w-full rounded-xl border-[8px] border-blue-400 p-2 md:hidden">
            <img
              className="h-60 w-full rounded-lg object-cover"
              alt="photo"
              src="https://images.klipfolio.com/website/public/141b88a0-7222-45fd-8349-cadd876a5b03/Business-Dashboard-example.jpg"
            />
          </div>
          {/* Project Content */}
          <div className="md:w-1/2">
            <h1 className="pb-3 pt-8 text-2xl font-bold">Project 1 - NAME</h1>
            <p className="pb-8 text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae ratione molestias minus repellat blanditiis. Quas
              expedita non vel laudantium dolorem nostrum soluta natus totam
              consequatur, repudiandae animi adipisci tenetur iure ipsum
              corporis. Nemo corporis aliquam rerum sint doloremque voluptates
              temporibus Nemo corporis aliquam rerum sint doloremque
            </p>
            <div className="flex justify-center gap-10 md:justify-start">
              <Link
                target="_blank"
                to="https://github.com"
                className="custom-blue flex w-32 items-center justify-center gap-3 rounded-xl py-3 text-xl"
              >
                <span>CODE</span>
                <FaGithub className="text-2xl text-black" />
              </Link>

              <Link
                target="_blank"
                to="https://github.com"
                className="flex w-32 items-center justify-center gap-3 rounded-xl border-2 border-[#4345ab] py-3 text-xl"
              >
                <span>LIVE</span>
                <IoRocketSharp className="text-2xl text-purple-500" />
              </Link>
            </div>
          </div>
          {/* Img for DESKTOP */}
          <div className="relative hidden h-80 w-[35%] rounded-xl border-[15px] border-blue-400 md:inline-block">
            <img
              className="absolute bottom-8 left-10 h-80 w-full rounded-xl object-cover"
              alt="photo"
              src="https://images.klipfolio.com/website/public/141b88a0-7222-45fd-8349-cadd876a5b03/Business-Dashboard-example.jpg"
            />
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col justify-center md:flex-row md:gap-28">
          <div className="relative rounded-xl border-[8px] border-blue-400 p-2 md:h-80 md:w-[35%] md:border-[15px] md:p-0">
            <img
              className="bottom-2 right-3 h-60 w-full rounded-xl object-cover md:absolute md:bottom-8 md:right-10 md:h-80"
              alt="photo"
              src="https://images.klipfolio.com/website/public/141b88a0-7222-45fd-8349-cadd876a5b03/Business-Dashboard-example.jpg"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="pb-3 pt-8 text-2xl font-bold">Project 2 - NAME</h1>
            <p className="pb-8 text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae ratione molestias minus repellat blanditiis. Quas
              expedita non vel laudantium dolorem nostrum soluta natus totam
              consequatur, repudiandae animi adipisci tenetur iure ipsum
              corporis. Nemo corporis aliquam rerum sint doloremque voluptates
              temporibus Nemo corporis aliquam rerum sint doloremque
            </p>
            <div className="flex justify-center gap-10 md:justify-start">
              <Link
                target="_blank"
                to="https://github.com"
                className="custom-blue flex w-32 items-center justify-center gap-3 rounded-xl py-3 text-xl"
              >
                <span>CODE</span>
                <FaGithub className="text-2xl text-black" />
              </Link>

              <Link
                target="_blank"
                to="https://github.com"
                className="flex w-32 items-center justify-center gap-3 rounded-xl border-2 border-[#4345ab] py-3 text-xl"
              >
                <span>LIVE</span>
                <IoRocketSharp className="text-2xl text-purple-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
