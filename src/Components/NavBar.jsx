import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const NavBar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogOut = () => {
    logOut().then(() => {
      Swal.fire({
        title: "Success",
        text: "Logout Successful",
        icon: "success",
      });
    });
  };

  const navLinks = (
    <>
      <NavLink to="/" className="hover:text-purple-400">
        Home
      </NavLink>
      <NavLink to="/products" className="hover:text-purple-400">
        All Products
      </NavLink>

      {user && (
        <>
          <NavLink to="/myExports" className="hover:text-purple-400">
            My Exports
          </NavLink>
          <NavLink to="/myImports" className="hover:text-purple-400">
            My Imports
          </NavLink>
          <NavLink to="/addProduct" className="hover:text-purple-400">
            Add Export
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <nav className="w-full fixed top-0 bg-black text-white z-50">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          GlobalTradeHub
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">{navLinks}</ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : user ? (
            <div className="flex items-center gap-3">
              <img
                className="w-10 h-10 rounded-full"
                src={user?.photoURL}
                alt="user"
              />

              <button
                onClick={handleLogOut}
                className="px-4 py-1 border rounded hover:bg-white hover:text-black"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="px-4 py-1 border rounded">
                Login
              </Link>

              <Link to="/register" className="px-4 py-1 bg-purple-600 rounded">
                Register
              </Link>
            </>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          {navLinks}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
