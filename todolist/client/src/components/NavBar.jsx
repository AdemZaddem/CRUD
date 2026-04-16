import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow-sm max-w-[1200px] mx-auto">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <div className="flex gap-4">
  <Link to="/">List</Link>
  <Link to="/add">Add</Link>
</div>

        </div>
        <a className="btn btn-ghost text-xl">Todo List</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <div className="flex gap-4">
  <Link to="/">List</Link>
  <Link to="/add">Add</Link>
</div>
      </div>
    </div>
  );
}

export default NavBar;
