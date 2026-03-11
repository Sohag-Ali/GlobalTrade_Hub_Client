import React from 'react';

import { useState } from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {

    
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rahim Traders",
      role: "Rice Exporter",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "GlobalTradeHub helped us connect with international buyers quickly. Our export business has grown significantly thanks to this platform."
    },
    {
      id: 2,
      name: "Tokyo Tea House",
      role: "Tea Exporter",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/55.jpg",
      text: "The platform is incredibly easy to use. We received multiple import requests within days of listing our products."
    },
    {
      id: 3,
      name: "Global Coffee Ltd",
      role: "Coffee Exporter",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/30.jpg",
      text: "Finding reliable buyers worldwide used to be difficult. GlobalTradeHub made the process simple and efficient."
    },
    {
      id: 4,
      name: "Sonali Jute Export",
      role: "Jute Products Exporter",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/60.jpg",
      text: "We expanded our export market using this platform. The product listing and search system is excellent."
    }
  ];

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

    return (

    <section className="py-20 px-4">

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-base-content mb-3">
            What Our Exporters Say
          </h2>
          <p className="text-base-content/70">
            Trusted by exporters and importers around the world
          </p>
        </div>

        {/* Card */}
        <div className="relative bg-base-200 border border-base-300 rounded-3xl p-10 shadow-xl">

          <Quote className="absolute top-6 left-6 text-purple-400 opacity-30 w-14 h-14"/>

          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Image */}
            <img
              src={testimonials[activeIndex].image}
              className="w-28 h-28 rounded-full object-cover border-4 border-purple-500"
            />

            {/* Info */}
            <div className="flex-1 text-center md:text-left">

              <h3 className="text-2xl font-bold text-base-content">
                {testimonials[activeIndex].name}
              </h3>

              <p className="text-base-content/70 mb-3">
                {testimonials[activeIndex].role}
              </p>

              {/* Stars */}
              <div className="flex justify-center md:justify-start gap-1 mb-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400 w-5 h-5"/>
                ))}
              </div>

              <p className="text-base-content/80 italic">
                "{testimonials[activeIndex].text}"
              </p>

            </div>

          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-8">

            <button
              onClick={prev}
              className="px-4 py-2 rounded-full bg-base-300 hover:bg-base-300/70"
            >
              ◀
            </button>

            <button
              onClick={next}
              className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700"
            >
              ▶
            </button>

          </div>

        </div>

      </div>

    </section>

  );
};

export default Testimonials;



