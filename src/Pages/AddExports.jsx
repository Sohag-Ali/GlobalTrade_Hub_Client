import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useTitle from "../Hooks/useTitle";
import Swal from "sweetalert2";

import axios from "axios";


const AddExports = () => {
  const { user } = useContext(AuthContext);
  // const axiosInstance = useAxios();
 

 const handleAddProduct = async (e) => {
  e.preventDefault();

  const form = e.target;

  const productName = form.productName.value;
  const productImage = form.productImage.value;
  const price = form.price.value;
  const originCountry = form.originCountry.value;
  const rating = form.rating.value;
  const availableQuantity = form.availableQuantity.value;

  const newProduct = {
    productName,
    productImage,
    price: parseFloat(price),
    originCountry,
    rating: parseFloat(rating),
    availableQuantity: parseInt(availableQuantity),
    exporterEmail: user?.email,
    exporterName: user?.displayName,
    createdAt: new Date(),
  };

  try {
    const res = await axios.post(
      "http://localhost:3000/products",
      newProduct
    );

    if (res.data.insertedId) {
      Swal.fire({
        title: "Success!",
        text: "Product Added Successfully",
        icon: "success",
        confirmButtonText: "OK",
      });

      form.reset();
    }

  } catch (error) {
    console.log(error);
  }
};

  return (
    useTitle("Add Export"),
    <div className="py-12">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-base-content mb-2">
          Add Export Product
        </h2>
        <p className="text-base-content/70">
          List a new product for global export marketplace
        </p>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleAddProduct}
        className="bg-base-200/40 backdrop-blur-xl border border-base-300 rounded-3xl p-8 md:p-10 shadow-xl space-y-6"
      >
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Name */}
          <div>
            <label className="text-sm text-base-content/70 mb-1 block">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              placeholder="Enter product name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="text-sm text-base-content/70 mb-1 block">
              Product Image URL
            </label>
            <input
              type="text"
              name="productImage"
              placeholder="Paste image URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="text-sm text-base-content/70 mb-1 block">
              Price ($)
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Country */}
          <div>
            <label className="text-sm text-base-content/70 mb-1 block">
              Origin Country
            </label>
            <input
              type="text"
              name="originCountry"
              placeholder="Country of origin"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Rating */}
          <div>
            <label className="text-sm text-base-content/70 mb-1 block">
              Product Rating
            </label>
            <input
              type="number"
              step="0.1"
              name="rating"
              placeholder="Rating (1 - 5)"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="text-sm text-base-content/70 mb-1 block">
              Available Quantity
            </label>
            <input
              type="number"
              name="availableQuantity"
              placeholder="Enter stock quantity"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 rounded-xl text-lg font-semibold bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-base-content transition-all duration-300 shadow-lg"
          >
            Add Export/Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddExports;
