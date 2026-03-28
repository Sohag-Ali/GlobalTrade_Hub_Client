import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import useTitle from "../Hooks/useTitle";
import axios from "axios";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { googleSignIn, login, resetPassword } = use(AuthContext);
  const [success, setSuccess] = useState(null);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
      .then((result) => {
        Swal.fire({
          title: "Success",
          text: `Login Successfull`,
          icon: "success",
          background: "rgba(255,255,255,0.08)",
          color: "white",
          backdrop: "rgba(0,0,0,0.3)",
        });
        setSuccess("User Login Successfully!!");
        e.target.reset();
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
          background: "rgba(255,255,255,0.08)",
          color: "white",
          backdrop: "rgba(0,0,0,0.3)",
        });
      });
  };

  const handleForgotPassword = () => {
    const email = document.querySelector("input[name='email']").value;

    if (!email) {
      Swal.fire({
        icon: "warning",
        text: "Please enter your email first",
      });
      return;
    }

    resetPassword(email)
      .then(() => {
        Swal.fire({
          icon: "success",
          text: "Password reset email sent!",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          text: error.message,
        });
      });
  };

const handleGoogleSign = async () => {
  try {
    const result = await googleSignIn();

    const userInfo = {
      name: result.user.displayName,
      email: result.user.email,
      photo: result.user.photoURL,
    };

    const res = await axios.post(
      "http://localhost:3000/users",
      userInfo
    );

    console.log("User created:", res.data);

    Swal.fire({
      title: "Success",
      text: "Login Successful",
      icon: "success",
      background: "rgba(255,255,255,0.08)",
      color: "white",
      backdrop: "rgba(0,0,0,0.3)",
    });

    navigate(`${location.state ? location.state : "/"}`);

  } catch (error) {
    console.log("Google Sign Error:", error.response || error.message);
  }
};

  
  const inputClasses =
    "w-full p-3 rounded-full border border-white/20 bg-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-300";

 useTitle("Login");

return (
  <div className="min-h-screen flex items-center justify-center px-4 bg-base-200">
    <div className="w-full max-w-md p-8 rounded-2xl shadow-xl border border-base-300 bg-base-100">

      <h2 className="text-3xl font-bold text-base-content text-center mb-6">
        Login
      </h2>

      <form onSubmit={handleLogin} className="flex flex-col gap-4">

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg border border-base-300 bg-base-200 text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg border border-base-300 bg-base-200 text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />

        <p className="text-green-500 text-center">{success}</p>

        {/* Forgot Password */}
        <p
          onClick={handleForgotPassword}
          className="text-sm text-right text-primary cursor-pointer hover:underline"
        >
          Forgot Password?
        </p>

        {/* Login Button */}
        <button
          type="submit"
          className="mt-2 w-full py-3 bg-primary hover:bg-primary-focus text-white font-semibold rounded-lg transition-all"
        >
          Login
        </button>

        {/* Google Login */}
        <button
          onClick={handleGoogleSign}
          type="button"
          className="mt-2 w-full py-3 border border-base-300 bg-base-200 hover:bg-base-300 text-base-content font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
        >
          <FcGoogle size={20} /> Login with Google
        </button>

      </form>

      <p className="text-base-content/70 text-sm mt-6 text-center">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-primary hover:underline"
        >
          Register
        </Link>
      </p>

    </div>
  </div>
);
};
export default Login;
