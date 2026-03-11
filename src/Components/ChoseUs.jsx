import React from 'react';

import { FaGlobe, FaShieldAlt, FaShippingFast, FaStar } from "react-icons/fa";



const ChoseUs = () => {

     const benefits = [
    {
      id: 1,
      icon: <FaGlobe />,
      title: "Global Marketplace",
      description:
        "Connect with exporters and importers from around the world through one trusted platform.",
    },
    {
      id: 2,
      icon: <FaShieldAlt />,
      title: "Verified Exporters",
      description:
        "All exporters are verified to ensure safe and reliable international trade.",
    },
    {
      id: 3,
      icon: <FaShippingFast />,
      title: "Fast Global Trade",
      description:
        "Discover products and trade opportunities quickly with our streamlined export system.",
    },
    {
      id: 4,
      icon: <FaStar />,
      title: "Trusted Reviews",
      description:
        "Ratings and reviews help you choose the best exporters and products with confidence.",
    },
  ];

    return (
    <section className="py-20">

      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-base-content mb-3">
            Why Choose GlobalTradeHub
          </h2>
          <p className="text-base-content/70 max-w-xl mx-auto">
            A powerful platform connecting exporters and importers globally for seamless trade.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">

          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-base-200 border border-base-300 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >

              <div className="text-purple-500 text-5xl mb-4 flex justify-center">
                {benefit.icon}
              </div>

              <h3 className="text-lg font-semibold mb-2 text-base-content">
                {benefit.title}
              </h3>

              <p className="text-sm text-base-content/70">
                {benefit.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ChoseUs;

