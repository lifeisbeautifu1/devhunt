import logo from '../images/logo.jpeg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="shadow flex px-8 lg:px-28 py-4 gap-8">
      <img src={logo} alt="DevHunt" className="cursor-pointer" />
      <ul className="hidden md:flex items-center gap-8 text-sm font-[400]">
        <li className="hover:text-gray-900 text-gray-500">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:text-gray-900 text-gray-500">
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li className="hover:text-gray-900 text-gray-500">
          <NavLink to="/developers">Developers</NavLink>
        </li>
        <li className="hover:text-gray-900 text-gray-500">
          <NavLink to="/community">Community</NavLink>
        </li>
        <li className="hover:text-gray-900 text-gray-500">
          <NavLink to="/blog">Blog</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
