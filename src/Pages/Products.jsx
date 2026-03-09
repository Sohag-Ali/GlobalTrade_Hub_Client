import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { FaSearch } from "react-icons/fa";
import Product from "../Components/Product";
import useTitle from "../Hooks/useTitle";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/products?search=${search}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [search]);
  return (
    useTitle("Products"),

 <div className="py-16">

      {/* Header Section */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14 ">

        {/* Title */}

        <div >
          <h2 className="text-4xl font-bold text-base-content mb-2">
            All Products
          </h2>

          <p className="text-base-content/70">
            Explore export products from around the world
          </p>
        </div>


        {/* Search Bar (Right Side) */}

        <div className="relative w-full md:w-80 mt-6 md:mt-0">

          <input
            type="text"
            placeholder="Search product..."
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-base-200/40 text-base-content border border-base-300 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setSearch(e.target.value)}
          />

          <FaSearch className="absolute left-3 top-3.5 text-base-content/70" />

        </div>

      </div>


      {/* Product Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">

        {products.length > 0 ? (
          products.map((product) => (
            <Product
              key={product._id}
              product={product}
            />
          ))
        ) : (
          <p className="text-center text-base-content/70 col-span-3">
            No Products Found
          </p>
        )}

      </div>

    </div>
  );
};


export default Products;
