import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import useTitle from "../Hooks/useTitle";

const Register = () => {
  const navigate = useNavigate();
  const { googleSignIn, register, user, logOut } = use(AuthContext);
  const [passValidation, setPassValidation] = useState("");
  console.log(user);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, password, email);

    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    const minLength = 6;

    if (!upperCaseRegex.test(password)) {
      setPassValidation("Password Must be Uppercase!!");
      return;
    } else if (!lowerCaseRegex.test(password)) {
      setPassValidation("Password Must be Loawercase!!");
      return;
    } else if (password.length < minLength) {
      setPassValidation("Password Must be More then 6 Charecter!!");
      return;
    }

    register(email, password)
      .then((result) => {
        const userInfo = {
          name: name,
          email: email,
          photo: photo,
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

        logOut();
        Swal.fire({
          title: "Success",
          text: "Registered Successfully",
          icon: "success",
          background: "rgba(255,255,255,0.08)",
          color: "white",
          backdrop: "rgba(0,0,0,0.3)",
        });

        navigate("/login");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Swal.fire({
            title: "Error",
            text: "This email is already registered!",
            icon: "error",
            background: "rgba(255,255,255,0.08)",
            color: "white",
            backdrop: "rgba(0,0,0,0.3)",
          });
        } else {
          Swal.fire({
            title: "Error",
            text: error.message,
            icon: "error",
            background: "rgba(255,255,255,0.08)",
            color: "white",
            backdrop: "rgba(0,0,0,0.3)",
          });
        }
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
          text: "Registered Successful",
          icon: "success",
          background: "rgba(255,255,255,0.08)",
          color: "white",
          backdrop: "rgba(0,0,0,0.3)",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log("error found from google Sign In", error);
      });
  };

  const inputClasses =
    "w-full p-3 rounded-full border border-white/20 bg-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-300";

  return (
    useTitle("Register"),
    <div className="min-h-screen flex items-center justify-center px-4">
      <div
        className="w-full max-w-md p-8 rounded-2xl shadow-xl backdrop-blur-lg border border-white/20"
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(14px)",
          boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h2 className="text-3xl font-bold text-base-content text-center mb-6">
          Registation Now
        </h2>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className={inputClasses}
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className={inputClasses}
          />

          <input
            name="photo"
            type="text"
            placeholder="Photo URL"
            className={inputClasses}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className={inputClasses}
          />
          <p className="text-red-500 text-center">{passValidation}</p>

          <button
            type="submit"
            className="mt-4 w-full py-3 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-base-content font-semibold rounded-full shadow-lg transition-all"
          >
            Register
          </button>

          <button
            onClick={handleGoogleSign}
            type="button"
            className="mt-2 w-full py-3 bg-base-200/40 hover:bg-base-300 text-base-content font-semibold rounded-full shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <FcGoogle size={20} /> Register with Google
          </button>
        </form>

        <p className="text-base-content/70 text-sm mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-400 hover:text-purple-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
