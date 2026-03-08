import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FaEdit, FaStar, FaTrash, FaTrashAlt } from 'react-icons/fa';

const MyExports = () => {

    const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch(`http://localhost:3000/my-exports?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setProducts(data));

  }, [user]);

  // DELETE PRODUCT
  const handleDelete = (id) => {

    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {

        if (data.deletedCount > 0) {

          const remaining = products.filter(p => p._id !== id);
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
    availableQuantity: form.availableQuantity.value
  };

  fetch(`http://localhost:3000/products/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(updatedProduct)
  })
  .then(res => res.json())
  .then(() => {
    window.location.reload();
  });

};


     return (

    <div className=" py-12">

      <h2 className="text-4xl text-white font-bold text-center mb-10">
        My Exported Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {products.map(product => (

          <div
            key={product._id}
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl overflow-hidden hover:scale-[1.02] transition"
          >

            {/* IMAGE */}
            <div className="relative h-52">

              <img
                src={product.productImage}
                className="w-full h-full object-cover"
              />

              <div className="absolute top-3 left-3 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full flex items-center gap-1 font-semibold">
                <FaStar /> {product.rating}
              </div>

            </div>

            {/* CONTENT */}
            <div className="p-5 space-y-2">

              <h3 className="text-xl text-white font-semibold">
                {product.productName}
              </h3>

              <p className="text-gray-300">
                Price: ${product.price}
              </p>

              <p className="text-gray-300">
                Country: {product.originCountry}
              </p>

              <p className="text-green-400">
                Stock: {product.availableQuantity}
              </p>

              {/* BUTTONS */}
              <div className="flex gap-3 mt-4">

                <button
                  onClick={() =>
                    document.getElementById(product._id).showModal()
                  }
                  className="flex-1 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white flex items-center justify-center gap-2"
                >
                  <FaEdit /> Update
                </button>

                <button
                  onClick={() => handleDelete(product._id)}
                  className="px-4 rounded-lg bg-red-500 hover:bg-red-600 text-white flex items-center justify-center"
                >
                  <FaTrash />
                </button>

              </div>

            </div>


            {/* UPDATE MODAL */}
         <dialog id={product._id} className="modal">

  <div className="modal-box max-w-2xl">

    <h3 className="text-xl font-bold mb-5">
      Update Export Product
    </h3>

    <form onSubmit={(e) => handleUpdate(e, product._id)}>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Product Name */}
        <input
          name="productName"
          defaultValue={product.productName}
          placeholder="Product Name"
          className="input input-bordered w-full"
          required
        />

        {/* Product Image */}
        <input
          name="productImage"
          defaultValue={product.productImage}
          placeholder="Product Image URL"
          className="input input-bordered w-full"
          required
        />

        {/* Price */}
        <input
          name="price"
          type="number"
          defaultValue={product.price}
          placeholder="Price"
          className="input input-bordered w-full"
          required
        />

        {/* Origin Country */}
        <input
          name="originCountry"
          defaultValue={product.originCountry}
          placeholder="Origin Country"
          className="input input-bordered w-full"
          required
        />

        {/* Rating */}
        <input
          name="rating"
          type="number"
          step="0.1"
          defaultValue={product.rating}
          placeholder="Rating"
          className="input input-bordered w-full"
          required
        />

        {/* Quantity */}
        <input
          name="availableQuantity"
          type="number"
          defaultValue={product.availableQuantity}
          placeholder="Available Quantity"
          className="input input-bordered w-full"
          required
        />

      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-6">

        <button
          type="submit"
          className="btn btn-primary"
        >
          Update
        </button>

        <form method="dialog">
          <button className="btn btn-outline">
            Cancel
          </button>
        </form>

      </div>

    </form>

  </div>

</dialog>

          </div>

        ))}

      </div>

    </div>

  );

};

export default MyExports;