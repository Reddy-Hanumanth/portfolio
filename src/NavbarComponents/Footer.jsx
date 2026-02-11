import React from "react";
import Assets from '../Assets/assets'

const Footer = () => {
  return (
    <>
      <div className="mt-20 border w-full p-4 bg-[#f6f8f6]">
        <div className="flex items-center h-[50px] ">
          <div><img src={Assets.Logo} alt="" className="h-20 opacity-80"/></div>
          {/* <div><p className="font-semibold opacity-30">©2026 Portfolio. All rights reserved.</p></div> */}
          <div>
            <div className="flex gap-4">
              <a href="https://github.com/Reddy-Hanumanth" className="hover:border-b border-gray-500 cursor-ponter font-semibold opacity-30 hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300">GitHub</a>
              <a href="https://www.linkedin.com/in/hanumanthreddy810/" className="hover:border-b border-gray-500 cursor-ponter font-semibold opacity-30 hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300">LinkedIn</a>
              <a href="mailto:reddyhanumanth810@gmail.com" className="hover:border-b border-gray-500 cursor-pointer font-semibold opacity-30 hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300">Mail</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
