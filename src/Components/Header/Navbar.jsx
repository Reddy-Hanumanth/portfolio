import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import Menu from "./menu_icon.png";
import Close from './closeimg.svg'
const Header = () => {
  const [menu, setMenu] = useState(false);
  const menuHandler = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <nav className="shadow-md font-extralight">
        <div className="w-full mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex justify-center items-center space-x-2">
            <div>
              <Link to="/">
                <img
                  src={Logo}
                  alt="logo"
                  width="70px"
                  className="rounded-full"
                />
              </Link>
            </div>
            <div>
              <h4 className="max-[600px]:hidden text-xl">Hanumanth Reddy</h4>
            </div>
          </div>

          <div>
            {!menu && (
              <button
                onClick={menuHandler}
                id="menu-button"
                className={` min-[765px]:hidden text-white focus:outline-none`}
              >
                <img src={Menu} alt="Menu" className="w-6 h-6" />
              </button>
            )}

            {menu && (
              <button
                onClick={menuHandler}
                id="menu-button"
                className={` min-[765px]:hidden text-white focus:outline-none cursor-pointer pl-12`}
              >
                <img src={Close} alt="Menu" className="w-6 h-6" />
              </button>
            )}

            {menu ? (
              <ul className="overflow-y-hidden z-10  top-4 right-24 flex justify-center items-center flex-col gap-4 duration-800 ease-in min-[765px]:hidden">
                <li className="bg-purple-500 px-3 py-1 rounded-xl hover:text-cyan-400 cursor-pointer text-white">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-cyan-400 cursor-pointer">
                  <Link to="/about">About</Link>
                </li>
                <li className="hover:text-cyan-400 cursor-pointer">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="hover:text-cyan-400 cursor-pointer">
                  <Link to="/projects">Projects</Link>
                </li>
                <li className="bg-purple-500 px-3 py-1 rounded-xl cursor-pointer text-white">
                  <a href="/HanumanthResume.pdf" aria-label="Download resume">
                    View Resume
                  </a>
                </li>
              </ul>
            ) : (
              <div className="overflow-y-hidden z-20 fixed top-0 left-0 flex justify-center items-center flex-col gap-5 duration-300 ease-in"></div>
            )}

            <ul className={`flex max-[765px]:hidden  space-x-6 `}>
              <li className="bg-purple-500 px-3 py-1 rounded-xl hover:text-cyan-400 cursor-pointer text-white">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-cyan-400 cursor-pointer">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:text-cyan-400 cursor-pointer">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="hover:text-cyan-400 cursor-pointer">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="bg-purple-500 px-3 py-1 rounded-xl cursor-pointer text-white">
                <a href="/HanumanthResume.pdf" aria-label="Download resume">
                  View Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
