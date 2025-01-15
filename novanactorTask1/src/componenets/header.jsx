import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className=" bg-teal-900 text-white flex flex-col items-center justify-center">
      {/* Navigation Bar */}
      <header className="w-full flex justify-between items-center px-10 py-4 bg-teal-800">
        <h1 className="hidden sm:block text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          Yash Vardhan Singh
        </h1>
        <nav>
          <ul className="flex gap-6 text-lg">
            <li>
              <Link to="/" className="hover:text-teal-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-teal-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-teal-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
