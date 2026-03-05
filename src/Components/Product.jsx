import React from "react";
import { FaBoxOpen, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Product = ({ product }) => {
  const {
    _id,
    productImage,
    productName,
    originCountry,
    rating,
    availableQuantity,
    price,
  } = product;
  return (
<div
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
      style={{
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(18px)",
      }}
    >

      {/* Image Section */}
      <div className="relative h-60 overflow-hidden">

        <img
          src={productImage}
          alt={productName}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        {/* Rating */}
        <div className="absolute top-4 left-4 flex items-center gap-1 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          <FaStar />
          {rating}
        </div>

        {/* Country */}
        <div className="absolute top-4 right-4 px-3 py-1 text-xs font-medium text-white rounded-full backdrop-blur-md bg-black/50 border border-white/30">
          🌍 {originCountry}
        </div>

      </div>


      {/* Content */}
     {/* Content */}
<div className="flex flex-col flex-grow p-6">

  {/* Title */}
  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition">
    {productName}
  </h3>

  {/* Quantity */}
  <div className="flex items-center justify-between mb-4">

    <div className="flex items-center gap-2 text-sm text-gray-300">
      <FaBoxOpen className="text-purple-400"/>
      <span>Available</span>
    </div>

    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
      {availableQuantity}
    </span>

  </div>


  {/* Price Card */}
<div className="mb-5 flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">

  <div className="flex flex-col">
    <span className="text-xs text-gray-400">Starting Price</span>
    <span className="text-3xl font-bold text-white">${price}</span>
  </div>

  <span className="text-sm font-medium text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
   Best Price
  </span>

</div>


  {/* Button */}
  <Link
    to={`/productDetails/${_id}`}
    className="w-full text-center py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
  >
    View Details
  </Link>

</div>

    </div>

  );
};

export default Product;
