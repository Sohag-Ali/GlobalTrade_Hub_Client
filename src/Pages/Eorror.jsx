import React from 'react';
import { useNavigate } from 'react-router';
import errorImg from "../assets/error.jpeg";

const Eorror = () => {
     const navigate = useNavigate();
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4">
      
      <div className="text-center max-w-xl">

        {/* Image */}
        <img
          src={errorImg}
          alt="404 Error"
          className="mx-auto w-64 md:w-80 animate-bounce"
        />

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-6">
          Oops! Page Not Found
        </h1>

        {/* Description */}
        <p className="text-gray-500 mt-4 text-sm md:text-base">
          The page you are looking for might have been removed,
          had its name changed, or is temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-lg hover:scale-105 transition duration-300"
          >
            Go Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Go Back
          </button>

        </div>

      </div>

    </div>
  );
};

export default Eorror;