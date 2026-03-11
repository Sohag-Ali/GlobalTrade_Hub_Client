import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import useTitle from "../Hooks/useTitle";

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
    useTitle("Update Profile"),

    <div className="min-h-screen flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        {/* Card */}
        <div className="p-8 rounded-3xl border border-base-300 shadow-xl backdrop-blur-xl bg-base-200/40">

          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-base-content mb-6">
            Update Profile
          </h2>

          {/* Avatar Preview */}
          <div className="flex justify-center mb-6">
            <img
              src={photo || "https://i.ibb.co/2kRZC8K/default-avatar.png"}
              className="w-24 h-24 rounded-full object-cover border-4 border-purple-500 shadow-lg"
            />
          </div>

          {/* Form */}
          <form onSubmit={handleUpdateProfile} className="space-y-4">

            {/* Name */}
            <div>
              <label className="text-sm text-base-content/70">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="input input-bordered w-full bg-base-200/50 border-base-300 focus:border-purple-500"
              />
            </div>

            {/* Photo */}
            <div>
              <label className="text-sm text-base-content/70">Photo URL</label>
              <input
                type="text"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                placeholder="Paste image URL"
                className="input input-bordered w-full bg-base-200/50 border-base-300 focus:border-purple-500"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full mt-4 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transition-all shadow-lg"
            >
              Update Profile
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};
export default UpdateProfile;
