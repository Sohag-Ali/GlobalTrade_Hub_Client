import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroBanner = () => {

  
   const slides = [
  {
    img: "https://media.istockphoto.com/id/1299342760/photo/glass-cup-of-green-tea-with-fresh-tea-leaves-on-wooden-table-hot-drink-concept.jpg?s=612x612&w=0&k=20&c=Lxa6BAivj5hcdjTXISqulVZIah8C8sl7Vjxs3qm0G20=",
    title: "Japanese Green Tea Export",
    text: "Premium quality Japanese green tea directly sourced from trusted exporters in Tokyo. Perfect for international importers.",
  },
  {
    img: "https://media.istockphoto.com/id/861291240/photo/still-life-of-electrical-components-arranged-on-plans.jpg?s=612x612&w=0&k=20&c=B-NBoA2vRO402p2B1Nd40s-effcq573jB-MScu2Pd7A=",
    title: "German Industrial Tools",
    text: "High precision industrial tools manufactured in Germany. Reliable performance for factories and construction industries.",
  },
  {
    img: "https://media.istockphoto.com/id/1057494954/photo/pouring-fresh-coconut-milk-in-bowl-and-coconut-fruit-ingredient.jpg?s=1024x1024&w=is&k=20&c=66_72jFN12_O2uVFhwhcf5rOFa84qkRRlw69_7EOjrI=",
    title: "Pure Thai Coconut Oil",
    text: "Natural and organic coconut oil exported from Thailand. Ideal for health, beauty, and cooking industries worldwide.",
  },
  {
    img: "https://tse2.mm.bing.net/th/id/OIP.pUCLOhrVZfmo6X3OrJWASgHaE8?rs=1&pid=ImgDetMain",
    title: "Bangladeshi Natural Products",
    text: "High-quality natural export products from Bangladesh, trusted by global buyers for purity and reliability.",
  },
];
    return (
        <div className="w-full h-[85vh] relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Glassmorphism Card */}
              <div className="relative w-full h-full overflow-hidden">
                {/* Background Image with Overlay - More Transparent */}
                <div
                  className="absolute inset-0 bg-center bg-cover opacity-30"
                  style={{ backgroundImage: `url(${slide.img})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black/60 to-blue-900/40"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 md:p-12">
                  {/* Glass Card for Text */}
                  <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 max-w-2xl shadow-xl">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                      {slide.title}
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 leading-relaxed">
                      {slide.text}
                    </p>
                    <Link to='/products' className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        :global(.swiper-button-next),
        :global(.swiper-button-prev) {
          color: white;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        :global(.swiper-button-next:hover),
        :global(.swiper-button-prev:hover) {
          background: rgba(255, 255, 255, 0.2);
        }

        :global(.swiper-button-next::after),
        :global(.swiper-button-prev::after) {
          font-size: 20px;
        }

        :global(.swiper-pagination-bullet) {
          background: white;
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }

        :global(.swiper-pagination-bullet-active) {
          opacity: 1;
          background: linear-gradient(to right, #9333ea, #3b82f6);
        }
      `}</style>
    </div>
    );
};

export default HeroBanner;