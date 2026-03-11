import React, { useContext, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import Container from "./Container";
import { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const NavBar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  // Apply theme on initial load
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle theme and save preference
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Handle user logout
  const handleLogOut = () => {
    logOut().then(() => {
      Swal.fire({
        title: "Success",
        text: "Logout Successful",
        icon: "success",
      });
    });
  };

  // Define navigation links
  const navLinks = (
    <>
      <NavLink
        to="/"
        onClick={() => setMobileOpen(false)}
        className={({ isActive }) =>
          isActive
            ? "text-purple-500 font-semibold border-b-2 border-purple-500 pb-1"
            : "hover:text-purple-400"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/products"
        onClick={() => setMobileOpen(false)}
        className={({ isActive }) =>
          isActive
            ? "text-purple-500 font-semibold border-b-2 border-purple-500 pb-1"
            : "hover:text-purple-400"
        }
      >
        All Products
      </NavLink>

      {user && (
        <>
          <NavLink
            to="/myExports"
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-purple-500 font-semibold border-b-2 border-purple-500 pb-1"
                : "hover:text-purple-400"
            }
          >
            My Exports
          </NavLink>
          <NavLink
            to="/myImports"
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-purple-500 font-semibold border-b-2 border-purple-500 pb-1"
                : "hover:text-purple-400"
            }
          >
            My Imports
          </NavLink>
          <NavLink
            to="/addProduct"
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-purple-500 font-semibold border-b-2 border-purple-500 pb-1"
                : "hover:text-purple-400"
            }
          >
            Add Export
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <nav className="w-full fixed top-0 bg-base-100 text-base-content border-b border-base-300 z-50">
      <Container>
        <div className=" flex justify-between items-center  py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-1 text-2xl font-extrabold"
          >
            {/* Logo Icon */}
            <span className=" text-white px-1 py-1 rounded-lg shadow">🌍</span>

            {/* Logo Text */}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
              GlobalTradeHub
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8">{navLinks}</ul>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="btn btn-circle bg-base-200 border border-base-300 text-lg"
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>

            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : user ? (
              <div ref={dropdownRef} className="relative">
                <img
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="w-10 h-10 rounded-full cursor-pointer"
                  src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  alt="user"
                />

                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-base-100 text-base-content rounded-lg shadow-lg py-2">
                    <NavLink
                      to="/profile"
                      onClick={() => {
                        setTimeout(() => {
                          setProfileOpen(false);
                        }, 200);
                      }}
                      className="block px-4 py-2 hover:bg-base-300"
                    >
                      Profile
                    </NavLink>

                    <NavLink
                      to="/update-profile"
                      onClick={() => {
                        setTimeout(() => {
                          setProfileOpen(false);
                        }, 200);
                      }}
                      className="block px-4 py-2 hover:bg-base-300"
                    >
                      Edit Profile
                    </NavLink>
                    <NavLink
                      to="/myImports"
                      onClick={() => {
                        setTimeout(() => {
                          setProfileOpen(false);
                        }, 200);
                      }}
                      className="block px-4 py-2 hover:bg-base-300"
                    >
                      My Import
                    </NavLink>
                    <NavLink
                      to="/myExports"
                      onClick={() => {
                        setTimeout(() => {
                          setProfileOpen(false);
                        }, 200);
                      }}
                      className="block px-4 py-2 hover:bg-base-300"
                    >
                      My Exports
                    </NavLink>

                    <button
                      onClick={() => {
                        handleLogOut();
                        setTimeout(() => {
                          setMobileOpen(false);
                        }, 200);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-base-300"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="px-4 py-1 border rounded">
                  Login
                </Link>

                <Link to="/register" className="px-4 py-1 bg-primary rounded">
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
      </Container>
    </nav>
  );
};

export default NavBar;
