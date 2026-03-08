import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FaStar, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const MyImports = () => {

    const { user } = useContext(AuthContext);
  const [imports, setImports] = useState([]);

  useEffect(() => {

    fetch(`http://localhost:3000/imports?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setImports(data));

  }, [user]);

  const handleRemove = (id) => {

    fetch(`http://localhost:3000/imports/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {

        if (data.deletedCount > 0) {

          const remaining = imports.filter(item => item._id !== id);
          setImports(remaining);

        }

      });

  };

    return (

    <div className="py-12">

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">
          My Imported Products
        </h2>
        <p className="text-gray-400">
          All products you have imported from the global marketplace
        </p>
      </div>


      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {
          imports.map(item => (

            <div
              key={item._id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
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

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Rating */}
                <div className="absolute top-4 left-4 flex items-center gap-1 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  <FaStar />
                  {item.rating}
                </div>

                {/* Country */}
                <div className="absolute top-4 right-4 px-3 py-1 text-xs font-medium text-white rounded-full backdrop-blur-md bg-black/50 border border-white/30">
                  🌍 {item.originCountry}
                </div>

              </div>


              {/* Content */}
              <div className="flex flex-col flex-grow p-6">

                {/* Product Name */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.productName}
                </h3>


                {/* Price Card */}
                <div className="mb-4 flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">

                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400">Price</span>
                    <span className="text-2xl font-bold text-white">
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
                    className="flex-1 text-center py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white transition-all duration-300"
                  >
                    See Details
                  </Link>

                  <button
                    onClick={() => handleRemove(item._id)}
                    className="flex items-center justify-center px-4 rounded-xl bg-red-500 hover:bg-red-600 text-white transition"
                  >
                    <FaTrashAlt />
                  </button>

                </div>

              </div>

            </div>

          ))
        }

      </div>

    </div>

  );
};

export default MyImports;