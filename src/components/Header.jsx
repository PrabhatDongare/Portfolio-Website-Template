// import React from 'react'

import { Link } from "react-router-dom";
import "@fontsource/roboto";

const Header = () => {
  return (
    <ul className="flex flex-wrap justify-center gap-5 pt-10 font-roboto text-sm md:justify-end md:gap-12 md:pr-10 md:text-lg">
      <li>
        <Link to="/" className="font-semibold text-blue-400">
          HOME
        </Link>
      </li>
      <li>
        <a href="#aboutMe">ABOUT ME</a>
      </li>
      <li>
        <a href="#experience">EXPERIENCE</a>
      </li>
      <li>
        <a href="#projects">PROJECTS</a>
      </li>
      <li>
        <a href="#skills">SKILLS</a>
      </li>
      <li>
        <a href="#education">EDUCATION</a>
      </li>
      <li>
        <a href="#contact">CONTACT</a>
      </li>
    </ul>
  );
};

export default Header;
