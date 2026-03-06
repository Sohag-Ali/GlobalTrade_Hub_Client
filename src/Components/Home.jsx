import React, { useEffect, useState } from "react";
import LatestProduct from "./LatestProduct";

// const latestProductPromise = fetch(
//   "http://localhost:3000/latest-products",
// ).then((response) => response.json());
// .then(data => {
//     console.log('Latest Product:', data);
// })
// .catch(error => {
//     console.error('Error fetching latest product:', error);
// });


const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/latest-products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">Latest Products</h2>
        <p className="text-gray-300">
          Discover the newest export products from around the world
        </p>
      </div>
      <LatestProduct
        products={products}
      ></LatestProduct>
    </div>
  );
};

export default Home;
