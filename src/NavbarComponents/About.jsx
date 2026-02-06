import React from "react";
import Assets from "../Assets/assets";

const About = () => {
  return ( 
    <div className="mt-20 px-6  flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        <div className="group relative ">
          <div className="bg-[#f6f8f6] p-4 sm:p-8 rounded-2xl shadow-lg  grayscale brightness-90 hover:brightness-100 hover:grayscale-0 transition-all duration-700">
            <img
              src={Assets.Image}
              alt=""
              className="sm:h-[500px] max-w-full border-2 border-gray-300 h-[400px] w-full rounded-xl transform group-hover:scale-105 transition-transform duration-500 opac"
            />
          </div>

          <div className="absolute bottom-6 -right-4 md:-right-10 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-xl flex items-center gap-4 border border-gray-100">
            <div className="flex -space-x-2">
              {/* Replace with your actual icons */}
              <div className="w-8 h-8 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-[10px]">R</div>
              <div className="w-8 h-8 rounded-full bg-green-200 border-2 border-white flex items-center justify-center text-[10px]">P</div>
              <div className="w-8 h-8 rounded-full bg-green-300 border-2 border-white flex items-center justify-center text-[10px]">D</div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-tighter font-bold text-gray-400">
                Tech Stack
              </p>
              <p className="text-xs font-bold text-gray-700">
                JS, React, Python, Django, MySQL
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-xl flex flex-col gap-8">
          <div>
            <span className="tracking-[.2em] mb-4 uppercase text-l font-bold text-sm font-bold opacity-40">
              the story
            </span>

            <h1 className="text-2xl md:text-5xl sm:text-4xl font-extrabold">
              Driven by Clean Code & Problem Solving
            </h1>
          </div>

          <div className="flex flex-col gap-4 text-lg  leading-relaxed text-gray-800/50">
            <p>
              I am a full-stack developer focused on building clean, scalable, and user-friendly web applications. I believe great software is defined by clarity, maintainability, and thoughtful problem-solving.
            </p>

            <p className="sm:block hidden">
              I work with the React ecosystem on the front end and build reliable backend logic, APIs, and databases to deliver complete end-to-end solutions. I enjoy turning complex ideas into simple, efficient systems.
            </p>

            <p className="sm:block hidden">
              Outside of development, I explore minimalist design, work on personal and open-source projects, and document my learning journey. I’m continuously improving my full-stack skills with a strong focus on growth and quality.
            </p>
          </div>
          <hr className="" />

          <div className="flex items-center justify-between ">
            <div >
                <h1 className="sm:text-4xl md:text-3xl text-2xl text-gray-500">5+</h1>
                <p className="text-gray-800/50 text-sm sm:text-base">Projects Completed</p>
            </div>
            <div className="">
                <h1 className="sm:text-4xl md:text-3xl text-2xl text-gray-500">Fresher</h1>
                <p className="text-gray-800/50 text-sm sm:text-base">1/2 Years Coding</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;







