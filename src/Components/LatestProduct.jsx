import React, { use } from 'react';
import Product from './Product';

const LatestProduct = ({ latestProductPromise}) => {
    const products = use(latestProductPromise  );
    console.log('Latest Product:', products);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                products.map(product => 
                    <Product key={product._id} 
                    product={product}></Product>
                )
            }
        </div>
    );
};

export default LatestProduct;