import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const { googleSignIn, login } = use(AuthContext);
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
  const handleGoogleSign = () => {
    googleSignIn()
      .then((result) => {
        const userInfo = {
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        };
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
        .then((res) => res.json())
        .then((data) => {
          console.log("User created:", data);
        });
        
        Swal.fire({
          title: "Success",
          text: "Login Successful",
          icon: "success",
          background: "rgba(255,255,255,0.08)",
          color: "white",
          backdrop: "rgba(0,0,0,0.3)",
        });
        // navigate("/");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log("error found from google Sign In", error);
      });
  };
  const inputClasses =
    "w-full p-3 rounded-full border border-white/20 bg-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-300";

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div
        className="w-full max-w-md p-8 rounded-2xl shadow-xl relative backdrop-blur-lg border border-white/20"
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          WebkitBackdropFilter: "blur(14px)",
          backdropFilter: "blur(14px)",
          boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={inputClasses}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={inputClasses}
            required
          />
          <p className="text-green-500 text-center">{success}</p>
          {/* Register Button */}
          <button
            type="submit"
            className="mt-4 w-full py-3 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold rounded-full shadow-lg transition-all flex items-center justify-center gap-2"
          >
            Login
          </button>

          {/* Google Register */}
          <button
            onClick={handleGoogleSign}
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