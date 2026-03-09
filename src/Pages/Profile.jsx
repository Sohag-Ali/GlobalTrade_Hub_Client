import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import LoadingSpinner from "../Components/LoadingSpinner";
import useTitle from "../Hooks/useTitle";

const Profile = () => {
  const { user, loading } = useContext(AuthContext);
  console.log("User in Profile:", user);
 


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {/* <p>Loading...</p> */}
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }
  return (
    useTitle("Profile"),
    <div className="min-h-screen flex items-center justify-center px-4">
      <div
        className="w-full max-w-sm p-8 rounded-3xl shadow-lg"
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      >
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          My Profile
        </h2>
        <div className="flex justify-center mb-6">
          <img
            className="w-30 h-30 object-cover rounded-full"
            src={user?.photoURL || "https://placehold.co/150"}
            alt="User"
          />
        </div>

        <p className="text-white mb-4">
          Creation Time: {user?.metadata?.creationTime}
        </p>
        <p className="text-white mb-4">
          Last Login: {user?.metadata?.lastSignInTime}
        </p>
        <p className="text-white font-bold mb-4">User ID: {user?.uid}</p>
        <p className="text-white font-bold mb-4">Name: {user?.displayName}</p>
        <p className="text-white font-bold mb-4">Email: {user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
