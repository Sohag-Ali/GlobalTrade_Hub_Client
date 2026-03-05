import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Login = () => {

    const inputClasses =
    "w-full p-3 rounded-full border border-white/20 bg-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-300";
    return (
       <div className="min-h-screen flex items-center justify-center px-4">

      <div
        className="w-full max-w-md p-8 rounded-2xl shadow-xl backdrop-blur-lg border border-white/20"
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(14px)",
          boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Login
        </h2>

        <form className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Email"
            className={inputClasses}
          />

          <input
            type="password"
            placeholder="Password"
            className={inputClasses}
          />

          <button
            type="submit"
            className="mt-4 w-full py-3 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold rounded-full shadow-lg transition-all"
          >
            Login
          </button>

          <button
            type="button"
            className="mt-2 w-full py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <FcGoogle size={20} /> Login with Google
          </button>

        </form>

        <p className="text-gray-300 text-sm mt-4 text-center">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-purple-400 hover:text-purple-600"
          >
            Register
          </Link>
        </p>

      </div>

    </div>
    );
};

export default Login;