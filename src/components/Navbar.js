/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: 'hidden',
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: '',
            })
          : this.setState({
              navBarActiveClass: 'hidden',
            });
      },
    );
  };

  render() {
    return (
      <nav
        className="flex items-center justify-between flex-wrap bg-teal-500 p-6"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/" title="Logo">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>
        </div>
        {/* Hamburger menu */}
        <div
          role="menu"
          className="block lg:hidden"
          onClick={() => this.toggleHamburger()}
        >
          <button
            type="button"
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          id="navMenu"
          className={`w-full flex-grow ${this.state.navBarActiveClass} lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow">
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              to="/about"
            >
              About
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              to="/products"
            >
              Products
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              to="/blog"
            >
              Blog
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              to="/contact"
            >
              Contact
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              to="/contact/examples"
            >
              Form Examples
            </Link>
          </div>
          <div>
            <a
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <img className="h-8" src={github} alt="Github" />
              </span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
