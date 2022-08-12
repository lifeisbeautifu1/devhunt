import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaDribbble,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="lg:px-28 px-8 pt-8 pb-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-8">
      <h1>Paul Bratslavsky | 2022</h1>
      <ul className="flex items-center gap-6 text-[22px] text-gray-400">
        <li className="hover:text-gray-600">
          <Link to="/">
            <FaFacebook />
          </Link>
        </li>
        <li className="hover:text-gray-600">
          <Link to="/">
            <FaInstagram />
          </Link>
        </li>
        <li className="hover:text-gray-600">
          <Link to="/">
            <FaTwitter />
          </Link>
        </li>
        <li className="hover:text-gray-600">
          <Link to="/">
            <FaGithub />
          </Link>
        </li>
        <li className="hover:text-gray-600">
          <Link to="/">
            <FaDribbble />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
