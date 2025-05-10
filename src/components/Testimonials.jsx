import React from "react";

const testimonials = [
  {
    name: "Sarah J.",
    text: "Coursera changed my life! The courses were top-notch and allowed me to switch careers into tech.",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Vikram S.",
    text: "I love the flexibility of learning online and earning certificates from real universities.",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Jane Y.",
    text: "The instructors make complex subjects simple and engaging. Absolutely recommended!",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Carlos M.",
    text: "Studying at Coursera was the best decision for my career. I got promoted and feel empowered!",
    img: "https://randomuser.me/api/portraits/men/67.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-indigo-50 py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-extrabold text-indigo-800 mb-10 text-center">What our learners say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white p-7 rounded-2xl shadow flex flex-col items-center text-center hover:shadow-lg transition">
              <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full mb-3 object-cover" />
              <div className="text-gray-800 font-semibold mb-2">{t.name}</div>
              <div className="text-gray-600 text-sm">“{t.text}”</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
