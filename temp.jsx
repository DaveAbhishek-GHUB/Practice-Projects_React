import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar flex items-center justify-between px-10 border-b-2">
      <div className="logo">
        <Link to="/">
          <img className='w-[5vw]' src={Logo} alt="" />
        </Link>
      </div>
      <div className="nav-links flex gap-10">
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Register">Register</Link>
        <div className="relative">
          <button onClick={() => setIsOpen(!isOpen)}>
            More ▼
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-200">
              <Link to="/about" className="block px-4 py-2">About</Link>
              <Link to="/contact" className="block px-4 py-2">Contact</Link>
              <Link to="/faq" className="block px-4 py-2">FAQ</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;