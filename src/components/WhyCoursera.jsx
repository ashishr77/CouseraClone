import React from "react";

const images = [
  "https://plus.unsplash.com/premium_photo-1683120730432-b5ea74bd9047?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwd29ya2luZyUyMGluJTIwb2ZmaWNlfGVufDB8fDB8fHww",
  "https://images.pexels.com/videos/3140468/free-video-3140468.jpg",
  "https://cdn.prod.website-files.com/62a85c75feb9bdf4905f9f24/66f5687053d7cc64b402593d_65fdbd5f3a0ed0a4c6b485f7_pexels-olia-danilevich-8145335.jpeg",
];

export default function WhyCoursera() {
  return (
    <section className="py-14 px-4 bg-blue-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="grid grid-cols-2 gap-4 max-w-md">
            <img src={images[0]} alt="Learner 1" className="w-full h-48 object-cover rounded-lg shadow-md col-span-1" />
            <img src={images[1]} alt="Learner 2" className="w-full h-48 object-cover rounded-lg shadow-md col-span-1" />
            <img src={images[2]} alt="Learner 3" className="w-full h-48 object-cover rounded-lg shadow-md col-span-2" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg className="w-3/4 h-3/4" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 20 L150 180" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Learner outcomes on Coursera
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            77% of learners report career benefits, such as new skills, increased pay, and new job opportunities. 2023 Coursera Learner Outcomes Report.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold text-base hover:bg-blue-700 transition">
            Join for Free
          </button>
        </div>
      </div>
    </section>
  );
}