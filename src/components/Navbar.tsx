import logo from '../images/logo.jpeg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="shadow flex flex-col sm:flex-row xl:px-28  sm:gap-8 gap-0 lg:p-4">
      <div className="py-4 px-6 lg:p-0 flex justify-between items-center">
        <img src={logo} alt="DevHunt" className="cursor-pointer sm:w-[150px]" />
        <div
          className="sm:hidden p-2 hover:bg-gray-100 rounded cursor-pointer outline outline-indigo-500"
          onClick={() => setShow(!show)}
        >
          {show ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
      </div>

      <ul
        className={`list sm:flex flex-col sm:flex-row items-center gap-8 sm:gap-8 text-md sm:text-sm font-[500] md:font-[400] w-full overflow-hidden ${
          show ? 'h-[200px]' : 'h-0'
        } sm:h-auto`}
      >
        <li className="hover:text-gray-900 text-gray-500 ">
          <NavLink
            className="border-l-4 sm:border-0 border-transparent block px-4 sm:px-0 py-2 w-full transition duration-200 hover:border-l-4 hover:border-gray-300 sm:hover:border-none sm:hover:bg-transparent hover:bg-gray-100"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="hover:text-gray-900 text-gray-500">
          <NavLink
            className="sm:px-0 border-l-4 sm:border-0 border-transparent block px-4 py-2 w-full transition duration-200 hover:border-l-4 hover:border-gray-300 sm:hover:border-none sm:hover:bg-transparent hover:bg-gray-100"
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li className="hover:text-gray-900 text-gray-500">
          <NavLink
            className="sm:px-0 border-l-4 sm:border-0 border-transparent block px-4 py-2 w-full transition duration-200 hover:border-l-4 hover:border-gray-300 sm:hover:border-none sm:hover:bg-transparent hover:bg-gray-100"
            to="/developers"
          >
            Developers
          </NavLink>
        </li>
        <li className="hover:text-gray-900 text-gray-500">
          <NavLink
            className="sm:px-0 border-l-4 sm:border-0 border-transparent block px-4 py-2 w-full transition duration-200 hover:border-l-4 hover:border-gray-300 sm:hover:border-none sm:hover:bg-transparent hover:bg-gray-100"
            to="/community"
          >
            Community
          </NavLink>
        </li>
        <li className="hover:text-gray-900 text-gray-500">
          <NavLink
            className="sm:px-0 border-l-4 sm:border-0 border-transparent block px-4 py-2 w-full transition duration-200 hover:border-l-4 hover:border-gray-300 sm:hover:border-none sm:hover:bg-transparent hover:bg-gray-100"
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
