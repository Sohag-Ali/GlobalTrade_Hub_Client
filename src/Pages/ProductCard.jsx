import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const ProductCard = ({product}) => {

    const { _id, productName, image, price, originCountry, rating, availableQuantity } = product
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col">

      {/* Product Image */}

      <img
        src={image}
        alt={productName}
        className="w-full h-52 object-cover"
      />

      {/* Card Body */}

      <div className="p-4 flex flex-col flex-grow">

        <h2 className="text-xl font-semibold mb-2">
          {productName}
        </h2>

        <p className="text-gray-600 text-sm mb-1">
          🌍 Origin: {originCountry}
        </p>

        <p className="text-gray-600 text-sm mb-1">
          📦 Available: {availableQuantity}
        </p>

        <p className="text-gray-600 text-sm flex items-center gap-1 mb-2">
          <FaStar className="text-yellow-400" /> {rating}
        </p>

        <p className="text-lg font-bold text-blue-600 mb-4">
          ${price}
        </p>

        {/* Button */}

        <Link to={`/products/${_id}`} className="mt-auto">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition">
            See Details
          </button>
        </Link>

      </div>

    </div>
  );
};

export default ProductCard;
