import React from "react";

const partners = [
  { name: "go", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Vo8aSdrGbdaU7iwpUt2zARkrbjvA3sBgTg&s" },
  { name: "Duke", img: "https://i.pinimg.com/474x/36/fc/69/36fc69b3da7e33edcb1e78efc992d31a.jpg" },
  { name: "Google", img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Michigan", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmLp9yXTvTATawfWFJUlvnVbIaSBHWiwaGHA&s" },
  { name: "IBM", img: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Imperial", img: "data:image/png;base64,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" },
  { name: "Stanford", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe-FtYNV1mHgiXl7zThflmnzo1irClzlNGaQ&s" },
  { name: "Penn", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV4Ry1gLVKeHg3HRtTgFQRY18J81tuQbx3OA&s" },
];


export default function Hero() {
  return (
    <section className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight text-left">
            Learn without limits
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-xl text-left">
            Start, switch, or advance your career with more than 10,000 courses, Professional Certificates, and degrees from world-class universities and companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition">
              Join for Free
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md font-semibold text-lg hover:bg-blue-50 transition">
              Try Coursera for Business
            </button>
          </div>
        </div>
        <div className="w-full flex-1 flex items-center justify-center min-h-[320px] lg:min-h-[400px] relative">
          <div className="relative flex items-center justify-center w-full">
            <div className="absolute w-64 h-64 lg:w-80 lg:h-80 bg-blue-600 rounded-full z-0" style={{ clipPath: 'path("M 0 0 C 80 0 160 80 160 160 C 160 240 80 320 0 320 Z")' }}></div>
            <img
              src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L3Jhd3BpeGVsb2ZmaWNlMV9waG90b19vZl9hX3NtaWxpbmdfd29tYW5fd2l0aF9sYXB0b3Bfb25fYV90YWJsZV9iNmUxMWQ1YS0yYmJiLTQxOWYtYjVkZC05NTMyMDBjZTBkOTAucG5n.png"
              alt="Instructor"
              className="relative z-10 rounded-full w-48 h-48 lg:w-64 lg:h-64 object-cover border-4 border-white shadow-xl"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8">
        <p className="text-center text-lg text-blue-600 mb-4">
          We collaborate with 350+ leading universities and companies
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {partners.map(partner => (
            <img
              key={partner.name}
              src={partner.img}
              alt={partner.name}
              className="h-8 object-contain opacity-80 hover:opacity-100 transition-all duration-200"
              style={{ maxWidth: 100 }}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}