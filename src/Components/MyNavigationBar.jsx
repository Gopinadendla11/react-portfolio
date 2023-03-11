import React, { useState } from "react";
import { MdMenu, MdClear } from "react-icons/md";
import AvatarImg from "../assets/images/Avatar.jpg";

const MyNavigationBar = () => {
  let navLinks = [
    { name: "Home", link: "#Home" },
    { name: "About", link: "#About" },
    { name: "Skills", link: "#Skills" },
    { name: "Experience", link: "#Experience" },
    { name: "Projects", link: "#Projects" },
    { name: "Contact Me", link: "#Contact" },
  ];

  function setdropdownVisible() {
    setNavDropdownVisibility(!isNavDropdownVisible);
  }

  const [isNavDropdownVisible, setNavDropdownVisibility] = useState(false);

  return (
    <div className="sticky top-0">
      <div className="text-white w-screen h-20 p-4 flex justify-between items-center  bg-black ">
        <div className="flex">
          <img
            src={AvatarImg}
            alt="Avatar"
            className="border-solid w-10 h-10 rounded-full border-2 border-secondary p-0.5"
          ></img>

          <span className="self-center ml-3 whitespace-nowrap text-xl font-semibold text-white">
            Gopi Krishna
          </span>
        </div>
        <div className="flex">
          <div className="pr-16 hidden md:inline-block">
            <ul>
              {navLinks.map((navLink) => {
                return (
                  <li className="list-none inline-block text-white text-[14px] md:px-5 md:py-2 md:hover:bg-secondary rounded-md md:hover:text-white font-Poppins ">
                    <a href={navLink.link}> {navLink.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          {isNavDropdownVisible ? (
            <MdClear
              className="mr-3 w-6 h-6 inline-block md:hidden"
              onClick={setdropdownVisible}
            ></MdClear>
          ) : (
            <MdMenu
              className="mr-3 w-6 h-6 inline-block md:hidden"
              onClick={setdropdownVisible}
            ></MdMenu>
          )}
        </div>
      </div>
      {isNavDropdownVisible && (
        <div className="w-screen px-5 border-white ">
          <div className="flex flex-col items-center">
            <ul>
              {navLinks.map((navLink) => {
                return (
                  <li className=" text-white w-screen text-[14px] p-3 font-Poppins border-black border-[1px] text-center bg-matt">
                    <a href={navLink.link}> {navLink.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyNavigationBar;
