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
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-base-200 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-base-200/40 backdrop-blur-xl"
      // style={{
      //   background: "rgba(255,255,255,0.06)",
      //   backdropFilter: "blur(18px)",
      // }}
    >

      {/* Image Section */}
      <div className="relative h-60 overflow-hidden">

        <img
          src={productImage}
          alt={productName}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-base-content/70 via-base-content/20 to-transparent"></div>

        {/* Rating */}
        <div className="absolute top-4 left-4 flex items-center gap-1 bg-warning text-warning-content text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          <FaStar />
          {rating}
        </div>

        {/* Country */}
        <div className="absolute top-4 right-4 px-3 py-1 text-xs font-medium text-base-content rounded-full backdrop-blur-md bg-base-200/70 border border-base-300">
          🌍 {originCountry}
        </div>

      </div>


      {/* Content */}
     {/* Content */}
<div className="flex flex-col flex-grow p-6">

  {/* Title */}
  <h3 className="text-xl font-semibold text-base-content mb-3 group-hover:text-primary transition">
    {productName}
  </h3>

  {/* Quantity */}
  <div className="flex items-center justify-between mb-4">

    <div className="flex items-center gap-2 text-sm text-base-content/80">
      <FaBoxOpen className="text-primary"/>
      <span>Available</span>
    </div>

    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">
      {availableQuantity}
    </span>

  </div>


  {/* Price Card */}
<div className="mb-5 flex items-center justify-between p-4 rounded-xl bg-base-200/40 border border-base-300 backdrop-blur-md">

  <div className="flex flex-col">
    <span className="text-xs text-base-content/70">Starting Price</span>
    <span className="text-3xl font-bold text-base-content">${price}</span>
  </div>

  <span className="text-sm font-medium text-success
bg-success/20 px-3 py-1 rounded-full">
   Best Price
  </span>

</div>


  {/* Button */}
  <Link
    to={`/productDetails/${_id}`}
    className="flex-1 text-center py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-base-content transition-all duration-300"
  >
    View Details
  </Link>

</div>

    </div>

  );
};

export default Product;
