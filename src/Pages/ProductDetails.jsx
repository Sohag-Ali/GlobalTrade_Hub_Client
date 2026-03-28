import React, { useContext, useRef, useState } from "react";
import { useLoaderData, useRevalidator } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";
import { FaBoxOpen, FaStar } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import useTitle from "../Hooks/useTitle";
import Swal from "sweetalert2";
import axios from "axios";

const ProductDetails = () => {
  const product = useLoaderData();
//   const { revalidate } = useRevalidator();
//   const [stock, setStock] = useState(availableQuantity);
  const { user } = useContext(AuthContext);
  console.log(product);
  const ModalRef = useRef(null);

  if (!product) {
    return <LoadingSpinner> </LoadingSpinner>;
  }

  const {
    productImage,
    productName,
    price,
    originCountry,
    rating,
    availableQuantity,
    exporterName,
    exporterEmail,
    createdAt,
  } = product;
  const [stock, setStock] = useState(availableQuantity);
  const [quantity, setQuantity] = useState("");

  const handleModalOpen = () => {
    if (ModalRef.current) {
      ModalRef.current.showModal();
    }
  };

  const handleImportSubmit = async (e) => {
  e.preventDefault();

  const importData = {
    productId: product._id,
    productName: productName,
    productImage: productImage,
    price: price,
    rating: rating,
    originCountry: originCountry,

    importerName: user?.displayName,
    importerEmail: user?.email,

    importedQuantity: parseInt(quantity),
    createdAt: new Date(),
  };

  try {
    const res = await axios.post("http://localhost:3000/imports", importData);

    if (res.data.insertedId) {
       Swal.fire({
        icon: "success",
        title: "Import Successful!",
        text: "Product imported successfully",
        timer: 1500,
        showConfirmButton: false,
      });

      await axios.patch(
        `http://localhost:3000/products/import/${product._id}`,
        {
          quantity: parseInt(quantity),
        }
      );

      setStock(stock - parseInt(quantity));

      ModalRef.current.close();

      Swal.fire({
        title: "Import Successful!",
        text: "Product Imported Successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
    }

  } catch (error) {
    console.log(error);
  }
};

//   const handleImportSubmit = async (e) => {
//     e.preventDefault();

//     const importData = {
//       productId: product._id,
//       productName: productName,
//       productImage: productImage,
//       price: price,
//       rating: rating,
//       originCountry: originCountry,

//       importerName: user?.displayName,
//       importerEmail: user?.email,

//       importedQuantity: parseInt(quantity),

//       createdAt: new Date(),
//     };

   
//   fetch("http://localhost:3000/imports", {
//   method: "POST",
//   headers: { "content-type": "application/json" },
//   body: JSON.stringify(importData),
// })
//   .then((res) => res.json())
//   .then((data) => {
//     if (data.insertedId) {

//       fetch(`http://localhost:3000/products/import/${product._id}`, {
//         method: "PATCH",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify({
//           quantity: parseInt(quantity),
//         }),
//       })
//         .then((res) => res.json())
//         .then(() => {

//           setStock(stock - parseInt(quantity));

//           ModalRef.current.close();
//           Swal.fire({
//   title: "Import Successful!",
//   text: "Product Imported Successfully",
//   icon: "success",
//   confirmButtonText: "OK",
// });

//         });

//     }
//   })
//   .catch((error) => console.log(error));
//   };

  return (
     useTitle(productName),
    <div className="py-12">
      {/* MAIN PRODUCT CARD */}
     

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-base-200/40 backdrop-blur-lg border border-base-300 p-8 rounded-3xl shadow-xl">
        {/* IMAGE */}

        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={productImage}
            alt={productName}
            className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover transition-transform duration-500 hover:scale-105"
          />

          {/* Top badges */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            {/* Rating */}
            <div className="bg-yellow-400 text-base-content text-xs px-3 py-1 rounded-full flex items-center gap-1 font-semibold shadow-md">
              <FaStar /> {rating}
            </div>

            {/* Sold Out */}
            {availableQuantity === 0 && (
              <div className="bg-gradient-to-r from-red-500 to-pink-500 text-base-content text-xs px-3 py-1 rounded-full font-semibold shadow-lg animate-pulse">
                SOLD OUT
              </div>
            )}
          </div>

          {/* Country badge */}
          <div className="absolute top-4 right-4 bg-base-200/60 text-base-content text-xs px-3 py-1 rounded-full backdrop-blur">
            🌍 {originCountry}
          </div>
        </div>

        {/* PRODUCT INFO */}

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-base-content">
              {productName}
            </h1>

            <p className="text-base-content/70 mb-6 leading-relaxed">
              Premium export quality product sourced from trusted suppliers.
              Ideal for international importers looking for consistent supply
              and superior quality goods.
            </p>

            {/* DETAILS GRID */}

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-base-200/40  p-3 rounded-lg">
                <p className="text-base-content/70">Price</p>
                <p className="font-bold text-lg text-base-content">${price}</p>
              </div>

              <div className="bg-base-200/40 p-3 rounded-lg">
                <p className="text-base-content/70">Stock</p>
                <p className="font-bold text-green-400 flex items-center gap-2">
                  <FaBoxOpen /> {stock}
                </p>
              </div>

              <div className="bg-base-200/40 p-3 rounded-lg">
                <p className="text-base-content/70">Exporter</p>
                <p className="font-semibold text-base-content">{exporterName}</p>
              </div>

              <div className="bg-base-200/40 p-3 rounded-lg">
                <p className="text-base-content/70">Contact</p>
                <p className="font-semibold text-base-content text-xs">
                  {exporterEmail}
                </p>
              </div>

              <div className="bg-base-200/40 p-3 rounded-lg col-span-2">
                <p className="text-base-content/70">Added On</p>
                <p className="font-semibold text-base-content">
                  {new Date(createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* IMPORT BUTTON */}

          <button
            disabled={availableQuantity === 0}
            onClick={handleModalOpen}
            className={`mt-6 w-full py-3 rounded-xl text-base-content font-semibold text-lg shadow-lg transition
           ${
             availableQuantity === 0
               ? "bg-base-300 cursor-not-allowed"
               : "bg-gradient-to-r from-purple-500 to-indigo-600 hover:scale-[1.02]"
           }`}
          >
            Import Now
          </button>
        </div>
      </div>

      {/* DESCRIPTION CARD */}

      <div className="mt-12 bg-base-200/40 backdrop-blur-lg border border-base-300  rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Product Description
        </h2>

        <p className="text-gray-400 leading-relaxed">
          {productName} is a premium export-quality product originating from{" "}
          {originCountry}. It meets international standards and is widely
          demanded across global markets. Importers can confidently source this
          product for wholesale distribution, retail businesses, or industrial
          use. Reliable supply chain and high quality make this product an
          excellent choice for international trade.
        </p>
      </div>

      {/* IMPORT MODAL */}
      <dialog ref={ModalRef} id="import_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Import Product</h3>

          <form onSubmit={handleImportSubmit}>
            {/* User Name */}
            <div className="mb-3">
              <label className="text-sm font-medium">Importer Name</label>
              <input
                type="text"
                value={user?.displayName}
                readOnly
                className="input input-bordered w-full bg-base-200 text-base-content  border-base-300"
              />
            </div>

            {/* User Email */}
            <div className="mb-3">
              <label className="text-sm font-medium">Importer Email</label>
              <input
                type="email"
                value={user?.email}
                readOnly
                className="input input-bordered w-full bg-base-200 text-base-content  border-base-300"
              />
            </div>

            {/* Quantity */}
            <div className="mb-3">
              <label className="text-sm font-medium">Import Quantity</label>
              <input
                type="number"
                placeholder="Enter Import Quantity"
                className="input input-bordered w-full"
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>

            {quantity > availableQuantity && (
              <p className="text-red-500 text-sm mt-2">
                Quantity cannot exceed available stock
              </p>
            )}

            <div className="modal-action">
             <button
  type="submit"
  disabled={quantity > availableQuantity}
  className="btn bg-gradient-to-r from-purple-500 to-indigo-600 text-base-content border-none hover:from-purple-600 hover:to-indigo-700"
>
  Submit
</button>

              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ProductDetails;
