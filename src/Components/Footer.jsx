import React from "react";
import Container from "./Container";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#0b0f19] border-t border-white/10 mt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          {/* Logo & About */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">
              GlobalTradeHub
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed">
              GlobalTradeHub is a modern import-export platform where businesses
              connect globally to trade products securely and efficiently.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 text-gray-400">
              <a className="hover:text-purple-400 transition">
                <FaFacebookF />
              </a>

              <a className="hover:text-purple-400 transition">
                <FaLinkedinIn />
              </a>

              <a className="hover:text-purple-400 transition">
                <FaTwitter />
              </a>

              <a className="hover:text-purple-400 transition">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-purple-400">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-purple-400">
                  All Products
                </Link>
              </li>

              <li>
                <Link to="/myImports" className="hover:text-purple-400">
                  My Imports
                </Link>
              </li>

              <li>
                <Link to="/myExports" className="hover:text-purple-400">
                  My Exports
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>

            <div className="space-y-3 text-gray-400 text-sm">
              <p className="flex items-center gap-2">
                <MdEmail /> support@globaltradehub.com
              </p>

              <p className="flex items-center gap-2">
                <MdLocationOn /> Dhaka, Bangladesh
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>

            <p className="text-gray-400 text-sm mb-4">
              Get the latest export products and trade updates.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 w-full rounded-l-lg bg-white/10 border border-white/20 text-white focus:outline-none"
              />

              <button className="px-4 bg-purple-600 hover:bg-purple-700 rounded-r-lg">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}

        <div className="border-t border-white/10 py-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} GlobalTradeHub. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
