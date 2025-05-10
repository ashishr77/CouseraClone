import React from "react";

const partners = [
  { name: "L'Oréal", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/L%27Or%C3%A9al_logo.svg/1280px-L%27Or%C3%A9al_logo.svg.png" },
  { name: "P&G", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/P%26G_logo.svg/1280px-P%26G_logo.svg.png" },
  { name: "Tata", img: "https://1000logos.net/wp-content/uploads/2020/04/Tata-Logo-1988.png" },
  { name: "Danone", img: "https://cdn.freebiesupply.com/logos/large/2x/danone-2-logo-png-transparent.png" },
  { name: "Emirates NBD", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxkHtE0shWRImb0KOmO9bdp8Mn3L_wr175Og&s" },
  { name: "Reliance", img: "https://images.fonearena.com/blog/wp-content/uploads/2011/09/Reliance-Logo.jpg" },
  { name: "Capgemini", img: "https://www.cdnlogo.com/logos/c/78/capgemini-201x.svg" },
  { name: "Petrobras", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Petrobras_horizontal_logo.svg/2560px-Petrobras_horizontal_logo.svg.png" },
  { name: "GE", img: "https://upload.wikimedia.org/wikipedia/commons/d/d1/GE_Aviation_logo.svg" },
];

export default function Partners() {
  return (
    <section className="py-14 px-10 bg-blue-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Drive your business forward by empowering your talent
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Train teams with industry-leading experts and universities, enhanced by AI tools and recognized credentials.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold text-base hover:bg-blue-700 transition mb-4">
            Discover Coursera for Business
          </button>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Upskill a small team? <span className="underline">Check out Coursera for Teams</span> →
          </a>
        </div>
        <div className="w-full lg:w-1/2 grid grid-cols-3 gap-6">
          {partners.map((partner) => (
            <img
              key={partner.name}
              src={partner.img}
              alt={partner.name}
              className="h-12 w-auto object-contain mx-auto"
              style={{ maxWidth: 120 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}