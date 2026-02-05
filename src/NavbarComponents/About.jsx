import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
      // <div className="font-extralight flex flex-col  justify-center items-center h-screen w-50">
      //   <div className="flex flex-col space-y-6 max-w-[600px]">
      //     <div>
      //       <h1 className="text-5xl animate-slideDown delay-600">
      //         Hello, I'm <br />
      //         Hanumanth Reddy
      //       </h1>
      //     </div>
      //     <div>
      //       <p className=" text-black/80 animate-fadeIn delay-200 text-center">
      //         I’m a full-stack developer who loves building clean, fast, and
      //         interactive web applications. I enjoy turning ideas into smooth,
      //         user-friendly experiences that look great and work even better. I
      //         focus on writing efficient code, improving performance, and
      //         creating projects that feel modern and meaningful. I’m always
      //         learning, experimenting, and finding new ways to make the web a
      //         little more awesome.
      //       </p>
      //     </div>
      //   </div>

      //   {/* Toolkit Section */}
      //   <div className="flex flex-col gap-4 py-8 justify-center w-full max-w-[800px] items-center">
      //     <h4 className="text-lg font-bold  dark:text-slate-50 animate-fadeIn">My Toolkit</h4>
      //     <div className="flex flex-wrap gap-4 justify-center animate-slideUp">
      //       <div className="flex items-center gap-2 p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
      //         <img
      //           className="size-6"
      //           data-alt="React logo"
      //           src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQTs0mcTgi5PIlKFaM6YDxAZ_eyWX5EzmAdysJGWz0hogbmgvlB5fs_2V0JZgpA_BP75Ew0YqHYPfopj5kng_7PphLWZCVu2opXv19sp58TTlF6AeTTyD1w0soKqP0Ph33Oe_yo1gpzMByAgL7PJbqcOJpBetFnlJeS0n3H-lEZl0pI9ocID5aD2A1235Wwi2PwVhbIBUID3JLCm1BsGVc9YhNDgns-tfEDF8cQlLaB8zbo4DPe3UnxNRwEX0g5RP9hyBd6LkAZoX3"
      //         />{" "}
      //         <span className="font-medium text-sm text-[#333333] dark:text-slate-200">
      //           React JS
      //         </span>
      //       </div>
      //       <div className="flex items-center gap-2 p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
      //         <img
      //           className="size-6"
      //           data-alt="Node.js logo"
      //           src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTrY85u-nvkaHgWqswSFXqLQt2hOSuE7jH4usIC9nSbTbpUVRtPVczpAnFidrD1vYZABR8CMkj6mp_yzgGF4xLJtdXg8ZNq34d0gCIRJEwpWh5RnORb-HbCeW0Gdh6fgZmNhbbs_-OCLo3TVxSAdJEI8NQKPmxVYXxMt9yMJKCXeG_v1cpNk9pxT7aIcT89NfgDO75stzdyhcI8VSRno6kYXwGpIAXemKUkZwJ8ZLXm89bZmaNbRzUFec88hRyewp2gnZZPrxcjrsn"
      //         />{" "}
      //         <span className="font-medium text-sm text-[#333333] dark:text-slate-200">
      //           Node.js
      //         </span>
      //       </div>
      //       <div className="flex items-center gap-2 p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
      //         <svg
      //           className="size-6 text-[#F7DF1E]"
      //           fill="currentColor"
      //           role="img"
      //           viewBox="0 0 24 24"
      //           xmlns="http://www.w3.org/2000/svg"
      //         >
      //           <title>JavaScript</title>
      //           <path d="M0 0h24v24H0V0zm22.034 18.262c.385-1.127.523-2.31.43-3.522l-1.745-.298c-.044.523-.14 1.033-.28 1.528l1.62 1.04-.025 1.252zm-3.235-3.322c.48-1.02.77-2.126.86-3.28l-1.84-.18c-.04.42-.13.826-.26 1.22l1.58 1.56-.34 1.68zm-3.4-3.453c.493-.89.82-1.85.95-2.84l-1.88-.06c-.07.38-.19.74-.33 1.08l1.4 1.42.86.4zm-2.16-11.41c1.23.23 2.38.69 3.42 1.32l-1.06 1.62c-.73-.47-1.53-.84-2.39-1.09l.03-1.85zM3.75 6.42l1.06-1.62c1.04-.63 2.19-1.09 3.42-1.32l.03 1.85c-.86.25-1.66.62-2.39 1.09L3.75 6.42zM1.965 18.262c.385-1.127.523-2.31.43-3.522l-1.745-.298c-.044.523-.14 1.033-.28 1.528l1.62 1.04-.025 1.252zm3.23-3.322c.48-1.02.77-2.126.86-3.28l-1.84-.18c-.04.42-.13.826-.26 1.22l1.58 1.56-.34 1.68zm3.4-3.453c.493-.89.82-1.85.95-2.84l-1.88-.06c-.07.38-.19.74-.33 1.08l1.4 1.42.86.4zM12 21.05c-1.28 0-2.5-.27-3.63-.79l.69-1.74c.89.41 1.86.63 2.87.63.94 0 1.83-.19 2.68-.56l.69 1.74c-1.15.5-2.38.72-3.6.72zM12 4.09c-1.28 0-2.5.27-3.63.79l.69-1.74c.89.41 1.86.63 2.87.63.94 0 1.83-.19 2.68-.56l.69 1.74c-1.15.5-2.38.72-3.6.72z"></path>
      //         </svg>
      //         <span className="font-medium text-sm text-[#333333] dark:text-slate-200">
      //           JavaScript
      //         </span>
      //       </div>
      //       <div className="flex items-center gap-2 p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
      //         <img
      //           className="size-6"
      //           data-alt="Python logo"
      //           src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSrjojXstaYRwISSZw4474y3UrAjYaZ5GfgHjqAVBCsKf9D5ZS4Qv42AjWjKXH1-bg0_D4jWB-vcRVLn8vxy4ZF6lmxx3Z59BmqIdCFk_iG3zZOiAcGni0rS8i9auTwmOr0wypXwjancqkeU6_O78uwokOVkS9AHXu82dXBO1_-M_i4pgqQBpyR0uQALrruQIBAX_GyZtn5hZF654_FpriztJUZIQard_NY31HMY6w98PhjtoMNrayXR_FFNIKmHRhAiTC1937J1o_"
      //         />{" "}
      //         <span className="font-medium text-sm text-[#333333] dark:text-slate-200">
      //           Python
      //         </span>
      //       </div>
      //       <div className="flex items-center gap-2 p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
      //         <img
      //           className="size-6"
      //           data-alt="Tailwind CSS logo"
      //           src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtq5oATWvfB2O_DRc8k2ZqgznI-UeMB_szNS8KNuoLphJKGX3JDYhnEdZHksPSQ8-FLjDsiwZDAlGB58wzYinCc68mtFQ3Qyg9CRA-EkeuVcw3NMGDEPQeeUCtBh_7GDxurOyZn13e474wxjRiUKjQoCVYJAlZh5UOSxlh85NubcWLHZyOo_pKLNHnkWXAaJgmH0QDwU4ZDljXTFrVYRdC4eUpOEbHQ_-yUFeZycExGQ5yQBq0C3I6AA1QtXmdMu51NYuYvYWNTbaH"
      //         />{" "}
      //         <span className="font-medium text-sm text-[#333333] dark:text-slate-200">
      //           Tailwind
      //         </span>
      //       </div>
      //       {/* <div className="flex items-center gap-2 p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
      //         <svg
      //           className="size-6 text-[#7952B3]"
      //           fill="currentColor"
      //           role="img"
      //           viewBox="0 0 24 24"
      //           xmlns="http://www.w3.org/2000/svg"
      //         >
      //           <title>Bootstrap</title>
      //           <path d="M12.001 0C5.373 0 0 5.373 0 12s5.373 12 12.001 12C18.627 24 24 18.627 24 12S18.627 0 12.001 0zM8.85 5.373h6.302c1.48 0 2.221.74 2.221 2.221s-.74 2.221-2.221 2.221H8.85V5.373zm6.302 13.254H8.85V12.15h6.302c1.849 0 2.59 1.11 2.59 2.59s-.74 2.59-2.59 2.59z"></path>
      //         </svg>
      //         <span className="font-medium text-sm text-[#333333] dark:text-slate-200">
      //           Bootstrap
      //         </span>
      //       </div> */}
      //     </div>
      //   </div>

      //   {/* Buttons Section */}
      //   <div className="flex felx-wrap space-x-4 justify-center">
      //     <button className="bg-gradient-to-r from-purple-800 to-purple-500 px-3 py-2 mt-10 rounded cursor-pointer hover:bg-opacity-90 text-white transition hover:-translate-y-2 duration-300 eas-in hover:shadow-2xl animate-fadeIn delay-1200">
      //       <Link to="/contact">Say Hello!</Link>
      //     </button>
      //     <button className="bg-purple-500 px-3 py-2 mt-10 rounded cursor-pointer hover:bg-opacity-90 text-white transition hover:-translate-y-2 duration-300 eas-in hover:shadow-2xl animate-fadeIn delay-1400">
      //       <Link to="https://github.com/Reddy-Hanumanth">
      //         <i className="fa-brands fa-github"></i> Github
      //       </Link>
      //     </button>
      //     <button className="bg-gradient-to-r from-purple-500 to-purple-800 px-3 py-2 mt-10 rounded cursor-pointer hover:bg-opacity-90 text-white transition hover:-translate-y-2 duration-300 eas-in hover:shadow-2xl animate-fadeIn delay-1600">
      //       <Link to="https://www.linkedin.com/feed/">
      //         <i className="fa-brands fa-square-linkedin"></i> Linkedin
      //       </Link>
      //     </button>
      //   </div>
      // </div>

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

