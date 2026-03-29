import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FaStar, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router';
import useTitle from '../Hooks/useTitle';
import notFoungImg from "../assets/not found.jpeg";
import Swal from 'sweetalert2';

import useAxiosSecure from '../Hooks/useAxiosSecure';

const MyImports = () => {

    const { user } = useContext(AuthContext);
  const [imports, setImports] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {

   axiosSecure
    .get(`/imports?email=${user?.email}`)
    .then((res) => {
      setImports(res.data);
    })
    .catch((error) => {
      console.log("Error fetching imports:", error);
    });

  }, [user]);

const handleRemove = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "This imported product will be removed!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#ef4444",
    cancelButtonColor: "#6b7280",
    confirmButtonText: "Yes, Remove",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const res = await axiosSecure.delete(
          `/imports/${id}`
        );

        if (res.data.deletedCount > 0) {
          const remaining = imports.filter(
            (item) => item._id !== id
          );
          setImports(remaining);

          Swal.fire({
            icon: "success",
            title: "Removed!",
            text: "Product removed from your imports.",
            timer: 1500,
            showConfirmButton: false,
          });
        }
      } catch (error) {
        console.log("Remove error:", error.response || error.message);
      }
    }
  });
};

    return (
      useTitle("My Imports"),

    <div className="py-12">

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-base-content mb-2">
          My Imported Products
        </h2>
        <p className="text-base-content/70">
          All products you have imported from the global marketplace
        </p>
      </div>


      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {
  imports.length === 0 ? (

    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
      
      <img
        src={notFoungImg}
        className="w-40 opacity-80 mb-6"
        alt="No imports"
      />

      <h2 className="text-2xl font-bold text-base-content mb-2">
        No Imported Products Found
      </h2>

      <p className="text-base-content/70 mb-6">
        You haven't imported any products yet.
      </p>

      <Link
        to="/allProducts"
        className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold"
      >
        Browse Products
      </Link>

    </div>

  ) : (

    imports.map(item => (

            <div
              key={item._id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-base-300 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(18px)",
              }}
            >

              {/* Image */}
              <div className="relative h-56 overflow-hidden">

                <img
                  src={item.productImage}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-base-content/70 via-base-content/20 to-transparent"></div>

                {/* Rating */}
                <div className="absolute top-4 left-4 flex items-center gap-1 bg-yellow-400 text-warning-content text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  <FaStar />
                  {item.rating}
                </div>

                {/* Country */}
                <div className="absolute top-4 right-4 px-3 py-1 text-xs font-medium text-base-content rounded-full backdrop-blur-md bg-base-200/60 border border-base-300">
                  🌍 {item.originCountry}
                </div>

              </div>


              {/* Content */}
              <div className="flex flex-col flex-grow p-6">

                {/* Product Name */}
                <h3 className="text-xl font-semibold text-base-content mb-3">
                  {item.productName}
                </h3>


                {/* Price Card */}
                <div className="mb-4 flex items-center justify-between p-4 rounded-xl bg-base-200/40 border border-base-300 backdrop-blur-md">

                  <div className="flex flex-col">
                    <span className="text-xs text-base-content/70">Price</span>
                    <span className="text-2xl font-bold text-base-content">
                      ${item.price}
                    </span>
                  </div>

                  <span className="text-sm font-medium text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                    Imported
                  </span>

                </div>


                {/* Imported Quantity */}
                <p className="text-sm text-purple-300 font-semibold mb-4">
                  Imported Quantity: {item.importedQuantity}
                </p>


                {/* Buttons */}
                <div className="flex gap-3 mt-auto">

                  <Link
                    to={`/productDetails/${item.productId}`}
                    className="flex-1 text-center py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-base-content transition-all duration-300"
                  >
                    See Details
                  </Link>

                  <button
                    onClick={() => handleRemove(item._id)}
                    className="flex items-center justify-center px-4 rounded-xl bg-red-500 hover:bg-red-600 text-base-content transition"
                  >
                    <FaTrashAlt />
                  </button>

                </div>

              </div>

            </div>

          ))

  )
}


      </div>

    </div>

  );
};

export default MyImports;