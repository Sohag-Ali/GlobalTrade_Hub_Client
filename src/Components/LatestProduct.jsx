import React, { use } from 'react';
import Product from './Product';

const LatestProduct = ({products}) => {
    // const productl = use(products);
    // console.log('Latest Product:', productl);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {products.length > 0 ? (

        products.map((product) => (
          <Product key={product._id} product={product} />
        ))

      ) : (

        <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">

          <img
            src="https://cdn-icons-png.flaticon.com/512/7486/7486803.png"
            alt="No products"
            className="w-32 mb-6 opacity-80"
          />

          <h3 className="text-2xl font-bold text-base-content mb-2">
            No Latest Products Found
          </h3>

          <p className="text-base-content/70">
            Currently there are no products available.
          </p>

        </div>

      )}

    </div>
  );
};

export default LatestProduct;