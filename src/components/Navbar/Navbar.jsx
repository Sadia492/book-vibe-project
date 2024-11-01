import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const links = (
    <>
      <NavLink to="/">
        <li className="p-2">Home</li>
      </NavLink>

      <NavLink to="/listedBooks">
        <li className="p-2">Listed Books</li>
      </NavLink>
      <NavLink to="/read">
        <li className="p-2">Pages to Read</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 w-11/12 mx-auto py-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm nav dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center nav gap-6 px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <a className="btn bg-[#23BE0A]">Sign In</a>
        <a className="btn bg-[#59C6D2]">Sign Up</a>
      </div>
    </div>
  );
}
