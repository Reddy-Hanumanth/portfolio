import React, { useState } from "react";
import { Link } from "react-router-dom";
import Assets from "../../Assets/assets";


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
    <div className="sticky top-0 z-50 bg-[#f6f8f6] shadow-md flex items-center justify-between px-6 h-20">

      {/* Logo */}
      <div className="flex items-center justify-center">
        <img src={Assets.Logo} alt="Logo" className="h-20"/>
        <h1 className="font-semibold">Hanumanth</h1>
      </div>


      {/* Desktop Menu */}
      <div className="hidden sm:flex gap-8 items-center">
        {navlinks.map((link) => (
          <Link key={link.path} to={link.path} className="text-gray-500 hover:text-gray-900 hover:border-b border-black transition-colors duration-300 ">
            <span>{link.label}</span>
          </Link>
        ))}
        <button className="bg-[#39FF14] hover:bg-[#28CC00] text-black rounded-xl px-4 py-2"><a href="HanumanthReddy.pdf" target="_blank" rel="noopener noreferrer">resume</a></button>
      </div>


      {/* Mobile Menu Icon */}
      {menu ? <img src={Assets.Close} alt="Close Menu" className="sm:hidden w-6 cursor-pointer" onClick={menuHandler} /> : <img src={Assets.Menu} alt="Open Menu" className="sm:hidden w-6 cursor-pointer" onClick={menuHandler} />}

      {menu ? (
        <div className="absolute top-20 right-0 bg-white shadow-md rounded-lg p-4 w-40 flex flex-col gap-4 sm:hidden">
          {navlinks.map((link) => (
            <Link key={link.path} to={link.path} className="text-gray-700 hover:text-gray-900  transition-colors duration-300" onClick={menuHandler}> 
              {link.label}
            </Link>
          ))}
          <button className=" bg-[#39FF14] hover:bg-[#28CC00] text-black rounded-xl px-4 py-2 mt-4"><a href="HanumanthReddy.pdf" target="_blank" rel="noopener noreferrer">resume</a></button>
        </div> 
      ) : null }

    </div>
  );
};
export default Header;