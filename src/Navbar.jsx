/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Logo from "../public/boston-public-library-YoK5pBcSY8s-unsplash-removebg-preview.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="navbar flex items-center justify-between px-10 border-b-2">
        <div className="logo">
          <Link to="/">
            <img className="w-[5vw]" src={Logo} alt="" />
          </Link>
        </div>
        <div className="nav-links flex gap-10">
          <Link to="/">Home</Link>
          <div className="Dropdown relative">
            <button onClick={() => setIsOpen(!isOpen)}>Other Projects</button>
            {isOpen && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-200">
                <Link to="/todo" className="block px-4 py-2">
                  Todo List
                </Link>
                <Link to="/searchbar" className="block px-4 py-2">
                  Searchbar
                </Link>
              </div>
            )}
          </div>
          <Link to="/Login">Login</Link>
          <Link to="/Register">Register</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
