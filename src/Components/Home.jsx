import React, { use, useEffect, useState } from "react";
import LatestProduct from "./LatestProduct";
import useTitle from "../Hooks/useTitle";
import axios from "axios";
import useAxios from "../Hooks/useAxios";

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

  useTitle("Home");
  const [products, setProducts] = useState([]);
  const axiosInstance = useAxios(); // Use the custom hook to get the axios instance

  useEffect(() => {
     axiosInstance
    .get("/latest-products")
    .then((res) => {
      setProducts(res.data);
    })
    .catch((error) => {
      console.log("Error fetching latest products:", error);
    });
  }, []);

  return (
    <div className=" py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-base-content mb-2">Latest Products</h2>
        <p className="text-base-content/70">
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
