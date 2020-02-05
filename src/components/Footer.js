import React from 'react';
import { Link } from 'gatsby';

import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const Footer = () => (
  <footer className="flex items-center justify-between flex-wrap p-10 mx-auto bg-blue-700">
    <div className="w-1/3 flex flex-no-wrap">
      <ul>
        <li>
          <Link to="/" className="text-blue-500 hover:text-blue-800">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-blue-500 hover:text-blue-800" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="text-blue-500 hover:text-blue-800" to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-500 hover:text-blue-800"
            to="/contact/examples"
          >
            Form Examples
          </Link>
        </li>
        <li>
          <a
            className="text-blue-500 hover:text-blue-800"
            href="/admin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Admin
          </a>
        </li>
      </ul>
    </div>
    <div className="w-1/3 flex flex-no-wrap">
      <ul>
        <li>
          <Link className="text-blue-500 hover:text-blue-800" to="/blog">
            Latest Stories
          </Link>
        </li>
        <li>
          <Link className="text-blue-500 hover:text-blue-800" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
    <div className="w-1/3 flex flex-no-wrap">
      <a title="facebook" href="https://facebook.com">
        <img src={facebook} alt="Facebook" className="mr-4 w-4 h-4" />
      </a>
      <a title="twitter" href="https://twitter.com">
        <img src={twitter} alt="Twitter" className="mr-4 w-4 h-4" />
      </a>
      <a title="instagram" href="https://instagram.com">
        <img src={instagram} alt="Instagram" className="mr-4 w-4 h-4" />
      </a>
      <a title="vimeo" href="https://vimeo.com">
        <img src={vimeo} alt="Vimeo" className="w-4 h-4" />
      </a>
    </div>
  </footer>
);

export default Footer;
