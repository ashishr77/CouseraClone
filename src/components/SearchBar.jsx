import React from "react";

export default function SearchBar() {
  return (
    <section className="bg-white py-6 px-4 border-b">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-3 items-center justify-center">
        <input
          type="text"
          placeholder="What do you want to learn?"
          className="flex-1 px-5 py-3 border border-gray-300 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
        />
        <button className="mt-2 sm:mt-0 px-7 py-3 bg-indigo-700 text-white font-semibold rounded-full hover:bg-indigo-800 transition">
          Search
        </button>
      </div>
    </section>
  );
}
