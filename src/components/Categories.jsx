import React from "react";

const categories = [
  { 
    name: "Data Science", 
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    description: "Learn data analysis, machine learning, and AI to drive insights."
  },
  { 
    name: "Business", 
    img: "https://images.unsplash.com/photo-1465101178521-c1a9136a5257?auto=format&fit=crop&w=400&q=80",
    description: "Master leadership, strategy, and entrepreneurship skills."
  },
  { 
    name: "Computer Science", 
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    description: "Dive into programming, algorithms, and software development."
  },
  { 
    name: "Health", 
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description: "Explore public health, medicine, and wellness practices."
  },
  { 
    name: "Personal Development", 
    img: "https://images.unsplash.com/photo-1485841890310-6a055c88698a?auto=format&fit=crop&w=400&q=80",
    description: "Enhance communication, productivity, and self-growth."
  },
  { 
    name: "Physical Science & Engineering", 
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    description: "Study physics, engineering, and environmental sciences."
  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-16 px-4 bg-gradient-to-r from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-900 mb-4">Explore Popular Categories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover a wide range of subjects to advance your career or pursue your passions with expert-led courses.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6">
          {categories.map((cat) => (
            <div 
              key={cat.name} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1"
            >
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="h-20 w-20 object-cover mb-4 rounded-full border-2 border-indigo-100"
              />
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">{cat.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{cat.description}</p>
              <button className="text-indigo-600 font-medium text-sm hover:underline">
                Explore Courses
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-700 transition shadow-md">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
}