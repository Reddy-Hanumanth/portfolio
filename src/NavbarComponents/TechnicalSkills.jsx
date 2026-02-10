import React from "react";

const TechnicalSkills = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-20 mt-20  py-20">
        <div className="bg-[#f6f8f6] p-12 rounded-2xl shadow-lg max-w-[1200px] w-full">
          <div className="text-center mb-10 flex flex-col gap-3">
            <h3 className="text-[#0F766E] text-center font-semibold">
              EXPERTISE
            </h3>
            <h1 className="text-3xl font-bold">Technical Skills</h1><hr className="w-14 h-[5px] mx-auto bg-blue-600 rounded-full "/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] p-6 ">
            <div className="bg-white border-2 border-gray-300 rounded-lg p-4 flex flex-col justify-evenly gap-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div>logo</div>
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-gray-900/70">
                  Frontend
                </h3>
                <p className="text-gray-500/70">
                  Crafting responsive and interactive user interfaces using
                  modern frameworks.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-green-500/70 border-t border-gray-300 pt-4">
                <h2 className="text-[#0F766E]  font-semibold rounded-full px-2">
                  Java Script
                </h2>
                <h2 className="text-[#0F766E]  font-semibold rounded-full px-2">
                  HTML/CSS
                </h2>
                <h2 className="text-[#0F766E]  font-semibold rounded-full px-2">
                  Tailwind{" "}
                </h2>
                <h2 className="text-[#0F766E]  font-semibold rounded-full px-2">
                  React
                </h2>
              </div>
            </div>
            <div className="bg-white border-2 border-gray-300 rounded-lg p-4 flex flex-col justify-evenly gap-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div>logo</div>
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-gray-900/70">
                  Backend
                </h3>
                <p className="text-gray-500/70">
                  Build scalable server-side logic and managing efficient data
                  flow.
                </p>
              </div>
              <div className="flex flex-wrap gap-2  border-t border-gray-300 pt-4">
                <h2 className="text-[#0F766E] font-semibold rounded-full px-2">
                  Python
                </h2>
                <h2 className="text-[#0F766E]  font-semibold rounded-full px-2">
                  Django
                </h2>
                <h2 className="text-[#0F766E]  font-semibold rounded-full px-2">
                  REST APIs{" "}
                </h2>
              </div>
            </div>
            <div className="bg-white border-2 border-gray-300 rounded-lg p-4 flex flex-col justify-evenly gap-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div>logo</div>
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-gray-900/70">
                  Tools
                </h3>
                <p className="text-gray-500/70">
                  Using modern development tools and platforms to enhance
                  productivity and streamline workflows.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-green-500/70 border-t border-gray-300 pt-4">
                <h2 className="text-[#0F766E]  font-semibold rounded-full px-2">
                  Git
                </h2>
                <h2 className="text-[#0F766E]  font-semibold rounded-full px-2">
                  VS code
                </h2>
                <h2 className="text-[#0F766E]  font-semibold rounded-full px-2">
                  Docker
                </h2>
                <h2 className="text-[#0F766E]  font-semibold rounded-full px-2">
                  web3 Forms
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnicalSkills;
