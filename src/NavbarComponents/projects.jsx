import React from "react";
import Assets from "../Assets/assets";

const projects = () => {
  const projectsData = [
    {
      image: Assets.Agency_Ai,
      title: "Agency.AI",
      description:
        "Designed a fully responsive agency landing page with interactive animations using React and Tailwind CSS. Focused on seamless user experience and consistent performance across all devices.",
      technologies: ["JavaScript", "HTML/CSS", "Tailwind", "React"],
      liveLink: "https://reddy-hanumanth.github.io/Digita-_Agency/",
      codeLink: "https://github.com/Reddy-Hanumanth/Digita-_Agency",
    },
    {
      image: Assets.E_Commerce,
      title: "E-Commerce Platform",
      description:
        "Developed a responsive e-commerce platform with product filtering, cart functionality using Tailwind CSS and React.",
      technologies: ["JavaScript", "HTML/CSS", "Tailwind", "React"],
      liveLink: "https://e-commerce-g2cdxz5cb-hanumanth-reddys-projects.vercel.app/",
      codeLink: "https://github.com/Reddy-Hanumanth/E-commerce",
    },
    {
      image: Assets.TextToSpeech,
      title: "Text to Speech Converter",
      description:
        "Developed a responsive text-to-speech converter with customizable voice options using JavaScript and HTML/CSS",
      technologies: ["JavaScript", "HTML", "CSS"],
      liveLink: "https://text-to-speech-nine-henna.vercel.app/",
      codeLink: "https://github.com/Reddy-Hanumanth/Text_to_Speech",
    },
    {
      image: Assets.QuickSign,
      title: "QuickSign",
      description:
        "Developed a Digital Sign App with customizable color, font size, and background options using JavaScript and HTML/CSS.",
      technologies: ["JavaScript", "HTML", "CSS"],
      liveLink: "https://quick-sign-app-three.vercel.app/",
      codeLink: "https://github.com/Reddy-Hanumanth/Quick_sign-app",
    },
    {
      image: Assets.Google_Gemini,
      title: "Google_Gemini_Clone",
      description:
        "Designed a Google Gemini clone with interactive UI elements using React.",
      technologies: ["JavaScript", "HTML/CSS", "React"],
      liveLink: "https://google-gemini-clone-ncy2.vercel.app/",
      codeLink: "https://github.com/Reddy-Hanumanth/google_gemini_clone",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[#f6f8f6] rounded-xl p-10">
        <div className="flex flex-col items-center justify-center gap-20 p-3">
          <div className="flex flex-col gap-3">
          <h3 className="text-[#0F766E]  text-center font-semibold">
            PORTFOLIO
          </h3>
          <h1 className="text-3xl font-bold text-center">Featured Projects</h1>
          <hr className="w-14 h-[6px] mx-auto bg-blue-600 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 max-w-[1200px] ">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group relative mb-6 bg-white border-2 border-gray-300 rounded-lg p-5 flex flex-col gap-4 justify-evenly shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* <div className="transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative rounded-md object-cover h-48 w-full"
                />
              </div> */}

              <div className="space-y-4">
                <h2 className="mt-5 text-xl">{project.title}</h2>
                <p className="mt-19 text-black/60">{project.description}</p>
              </div>

              {/* <div className="flex flex-wrap gap-2 text-green-500/70 border-t border-gray-300 pt-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="text-[#0F766E]">
                          {tech}
                        </span>
                      ))}
                    </div> */}

              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0F766E] hover:scale-105 text-white rounded-xl
               px-4 py-2 transition-transform duration-300 font-semibold"
                >
                  Live Site
                </a>

                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-400/60 text-black rounded-xl
                 px-4 py-2 font-semibold hover:bg-gray-200 transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
};

export default projects