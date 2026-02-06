import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (

      <div className=" bg-[#f6f8f6] h-[100vh] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-20">

          <div className="flex items-center justify-center border-2 border-sage-accent/20 rounded-full gap-2 px-4 py-1 gap-3 bg-gray-100">
            <span className="animate-heartBeat h-2 w-2 bg-[#39FF14] rounded-full"></span>
            <span className="text-sm opacity-60 uppercase tracking-widest">available for hire</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-10">
            <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl overflow-hidden text-center">Hanumanth Reddy, <span className="italic opacity-50"><br className="block sm:hidden"/>Full Stack</span><br/>Web Developer </h1>

            <p className="mt-8 max-w-[600px] text-lg font-medium md:text-xl text-center text-green-400/70">Building clean, scalable, and user-centric web application with modern technologies.</p>
          </div>

          <div className="justify-center gap-4">
            <button className="bg-[#39FF14] hover:scale-105 text-black rounded-xl px-6 py-3 mr-4 transition-transform duration-300 font-bold">View Projects</button>
            <button className="bg-transparent border border-gray-400/60 text-black rounded-xl px-6 py-3 font-bold hover:bg-gray-200 transition-colors duration-300">Contact Me</button>
          </div>
        </div>


      </div>
  );
};

export default About;

