import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      await updateUser({ displayName: name, photoURL: photo });
      navigate("/profile");
      Swal.fire({
        title: "Success",
        text: "Profile updated successfully!",
        icon: "success",
        background: "rgba(255,255,255,0.08)",
        color: "white",
        backdrop: "rgba(0,0,0,0.3)",
      });
    } catch (err) {
      console.error("Profile update error:", err);
      Swal.fire({
        title: "Error",
        text: "Failed to update profile",
        icon: "error",
        background: "rgba(255,255,255,0.08)",
        color: "white",
        backdrop: "rgba(0,0,0,0.3)",
      });
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form className="space-y-4" onSubmit={handleUpdateProfile}>
        <div className="text-white">
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-purple-400"
          />
        </div>

        <div className="text-white">
          <label className="block text-sm mb-1">Photo URL</label>
          <input
            type="text"
            onChange={(e) => setPhoto(e.target.value)}
            className="w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-purple-400"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full py-3 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold rounded-full shadow-lg transition-all"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
