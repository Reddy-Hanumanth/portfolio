import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo.png";
import Menu from "./menu_icon.png";
import Close from "./closeimg.svg";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const menuHandler = () => {setMenu(!menu)};

  const navlinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];



  return (
    <div>
      <nav className="top-0 x-50 shadow-md font-extralight animate-slideDown">
        <div className="w-full mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
              <Link to="/">
                <img
                  src={Logo}
                  alt="logo"
                  width="70px"
                  className="rounded-full"
                />
              </Link>
              {/* <h4 className="max-[600px]:hidden text-xl font-normal">Hanumanth Reddy</h4> */}
          </div>

          <div>
              <button
                onClick={menuHandler}
                aria-expanded = {menu}
                target="_blank"
                id="menu-button"
                className={` min-[765px]:hidden text-white focus:outline-none cursor-pointer pl-12`}
              >
                <img src={menu ? Close : Menu} alt="Menu" className="w-6 h-6" />
              </button>


            

            <ul className={`flex max-[765px]:hidden space-x-6 `}>
              {navlinks.map((link) => (
                <li
                  key={link.path}
                  className="hover:text-cyan-400 cursor-pointer"
                >
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}

              <li className="bg-purple-500 px-3 py-1 rounded-xl cursor-pointer text-white hover:text-cyan-400">
                <a
                  href="/hanumanth_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
              </li>
            </ul>


            {menu ? (
              <ul className=" z-10  top-4 right-24 flex justify-center items-center flex-col gap-4 duration-300 ease-in min-[765px]:hidden">
                {navlinks.map((link) => (
                  <li
                    key={link.path}
                    className="hover:text-cyan-400 cursor-pointer"
                  >
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
                <li className="bg-purple-500 px-3 py-1 rounded-xl cursor-pointer text-white">
                  <a
                    href="/HanumanthResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Resume
                  </a>
                </li>
              </ul>
            ) : (
              <div className=" z-20  top-0 left-0 flex justify-center items-center flex-col gap-5 duration-300 ease-in"></div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;