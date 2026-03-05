import React from 'react';
import { Link, NavLink } from 'react-router';

const NavBar = () => {

    const navLinks = (
    <>
      <NavLink to="/" className="navLink">Home</NavLink>
      <NavLink to="/products" className="navLink">All Products</NavLink>

      {/* {user && (
        <> */}
          <NavLink to="/myExports" className="navLink">My Exports</NavLink>
          <NavLink to="/myImports" className="navLink">My Imports</NavLink>
          <NavLink to="/addProduct" className="navLink">Add Export</NavLink>
        {/* </> */}
      {/* )} */}
    </>
  );
    return (
      <div className="fixed top-0 z-50 w-full bg-base-100 shadow-md">
      <div className="navbar max-w-[1440px] mx-auto px-4">

        {/* Mobile menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              ☰
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            GlobalTradeHub
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{navLinks}</ul>
        </div>

        {/* Right side */}
        <div className="navbar-end gap-3">
          <Link to="/login" className="btn btn-sm">
            Login
          </Link>

          <Link to="/register" className="btn btn-sm btn-primary">
            Register
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NavBar;