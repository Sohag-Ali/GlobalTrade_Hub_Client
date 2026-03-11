import React from 'react';
import Marquee from "react-fast-marquee";

const Sponsors = () => {
    const partners = [
    {
      name: "Alibaba",
      logo: "https://www.bing.com/th/id/OIP.hqK0YGNArG2f65HQ3sM38wHaEK?w=287&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    },
    {
      name: "Amazon Global",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
    },
    {
      name: "DHL Logistics",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ac/DHL_Logo.svg"
    },
    {
      name: "Maersk",
      logo: "https://www.bing.com/th/id/OIP.qDFFphAvUrkLAvT4-ctejAHaEK?w=361&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    },
    {
      name: "FedEx",
      logo: "https://www.bing.com/th/id/OIP.LQ4ZVwHh3VGSmcu4fsn6QwHaEK?w=216&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    },
    {
      name: "Shopify",
      logo: "https://www.bing.com/th/id/OIP.4GOajx4jkKGgy0quq3vHtwHaHa?w=209&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    },
    {
      name: "eBay",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg"
    },
    {
      name: "Stripe",
      logo: "https://www.bing.com/th/id/OIP.2Wn_QwGm8-Pw09teA3tg9gHaEK?w=277&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    }
  ];

  return (
    <section className="py-16">

      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <h3 className="text-center text-base-content/70 text-sm font-semibold tracking-wider uppercase mb-10">
          Trusted Global Partners
        </h3>

        {/* Marquee */}
        <Marquee speed={60} gradient={false} pauseOnHover={true}>

          {partners.map((partner, index) => (

            <div
              key={index}
              className="mx-10 flex items-center justify-center"
            >

              <div className="p-6 rounded-xl bg-base-200 border border-base-300 hover:shadow-lg transition duration-300">

                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 object-contain opacity-70 hover:opacity-100 transition"
                />

              </div>

            </div>

          ))}

        </Marquee>

      </div>

    </section>
  );
};

export default Sponsors;