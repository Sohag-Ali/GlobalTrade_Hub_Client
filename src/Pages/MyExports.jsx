import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEdit, FaStar, FaTrash, FaTrashAlt } from "react-icons/fa";
import useTitle from "../Hooks/useTitle";

const MyExports = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/my-exports?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user]);

  // DELETE PRODUCT
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = products.filter((p) => p._id !== id);
          setProducts(remaining);
        }
      });
  };

  // UPDATE PRODUCT
  const handleUpdate = (e, id) => {
    e.preventDefault();

    const form = e.target;

    const updatedProduct = {
      productName: form.productName.value,
      productImage: form.productImage.value,
      price: form.price.value,
      originCountry: form.originCountry.value,
      rating: form.rating.value,
      availableQuantity: form.availableQuantity.value,
    };

    fetch(`http://localhost:3000/products/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then(() => {
        window.location.reload();
      });
  };

  const downloadCSV = () => {
    if (products.length === 0) return;

    const headers = [
      "Product Name",
      "Price",
      "Origin Country",
      "Rating",
      "Available Quantity",
    ];

    const rows = products.map((p) => [
      p.productName,
      p.price,
      p.originCountry,
      p.rating,
      p.availableQuantity,
    ]);

    let csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((e) => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);

    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my-exports.csv");

    document.body.appendChild(link);
    link.click();
  };

  return (
    useTitle("My Exports"),
    <div className=" py-12">
      <h2 className="text-4xl text-base-content font-bold text-center mb-10">
        My Exported Products
      </h2>
      <div className="flex justify-center mb-8">
        <button
          onClick={downloadCSV}
          className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-base-content rounded-lg"
        >
          Download CSV
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
       {products.map((product) => (
  <div
    key={product._id}
    className="group relative flex flex-col overflow-hidden rounded-3xl border border-base-300 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-base-200/40 backdrop-blur-xl"
  >

    {/* Image Section */}
    <div className="relative h-60 overflow-hidden">

      <img
        src={product.productImage}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-base-content/60 via-base-content/20 to-transparent"></div>

      {/* Rating */}
      <div className="absolute top-4 left-4 flex items-center gap-1 bg-warning text-warning-content text-xs font-semibold px-3 py-1 rounded-full shadow-md">
        <FaStar />
        {product.rating}
      </div>

      {/* Country */}
      <div className="absolute top-4 right-4 px-3 py-1 text-xs font-medium text-base-content rounded-full backdrop-blur-md bg-base-200/70 border border-base-300">
        🌍 {product.originCountry}
      </div>

    </div>

    {/* Content */}
    <div className="flex flex-col flex-grow p-6">

      {/* Title */}
      <h3 className="text-xl font-semibold text-base-content mb-3 group-hover:text-primary transition">
        {product.productName}
      </h3>

      {/* Quantity */}
      <div className="flex items-center justify-between mb-4">

        <div className="flex items-center gap-2 text-sm text-base-content/80">
          Stock
        </div>

        <span className="px-3 py-1 text-sm font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">
          {product.availableQuantity}
        </span>

      </div>

      {/* Price Card */}
      <div className="mb-5 flex items-center justify-between p-4 rounded-xl bg-base-200/40 border border-base-300 backdrop-blur-md">

        <div className="flex flex-col">
          <span className="text-xs text-base-content/70">Price</span>
          <span className="text-3xl font-bold text-base-content">
            ${product.price}
          </span>
        </div>

        <span className="text-sm font-medium text-success bg-success/20 border border-success/30 px-3 py-1 rounded-full">
          Export
        </span>

      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-auto">

        <button
          onClick={() =>
            document.getElementById(product._id).showModal()
          }
          className="flex-1 py-2 rounded-xl bg-primary text-primary-content hover:bg-primary/90 flex items-center justify-center gap-2"
        >
          <FaEdit /> Update
        </button>

        <button
          onClick={() => handleDelete(product._id)}
          className="px-4 rounded-xl bg-error text-error-content hover:bg-error/90 flex items-center justify-center"
        >
          <FaTrash />
        </button>

      </div>

    </div>

  </div>
))}
      </div>
    </div>
  );
};

export default MyExports;
