import React from "react";
import { Navbar } from "flowbite-react";

function NavigationBar() {
  let navLinks = [
    { name: "Home", link: "#Home" },
    { name: "About", link: "#About" },
    { name: "Skills", link: "#Skills" },
    { name: "Education", link: "#Education" },
    { name: "Experience", link: "#Experience" },
    { name: "Contact Me", link: "#Contact" },
  ];
  return (
    <Navbar fluid={true} className="bg-primary sticky top-0 md:pr-28 md:py-5">
      <Navbar.Brand>
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          Gopi Krishna
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {navLinks.map((navLink) => {
          return (
            <Navbar.Link
              href={navLink.link}
              className="text-white md:px-3 md:py-2 md:hover:bg-secondary rounded-md md:hover:text-white font-Poppins "
            >
              {navLink.name}
            </Navbar.Link>
          );
        })}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
