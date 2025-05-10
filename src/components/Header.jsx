import React, { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 py-0 sm:py-5 z-50 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-0">
        {/* Logo and Explore */}
        <div className="flex items-center gap-4">
          <a href="#" className="text-2xl font-bold text-blue-600 tracking-tight">coursera</a>
          <div className="hidden md:flex items-center gap-2">
            <button className="text-gray-700 font-medium hover:text-blue-600 transition">
              Explore
              <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-4 max-w-xl">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="w-full px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full p-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-4">
          <a href="#" className="text-gray-700 font-medium hover:text-blue-600 transition">Online Degrees</a>
          <a href="#" className="text-gray-700 font-medium hover:text-blue-600 transition">Careers</a>
          <a href="#" className="text-gray-700 font-medium hover:text-blue-600 transition">Log In</a>
          <a href="#" className="px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-md font-semibold hover:bg-blue-50 transition">Join for Free</a>
        </nav>

        {/* Mobile Hamburger */}
        <button aria-label="Open Menu" className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden" onClick={() => setMobileOpen(false)}>
          <div className="absolute top-0 right-0 w-2/3 max-w-xs h-full bg-white shadow-xl p-6 flex flex-col gap-5 animate-slide-in">
            <button aria-label="Close" className="ml-auto mb-4" onClick={() => setMobileOpen(false)}>
              <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="What do you want to learn?"
                className="w-full px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full p-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            <a href="#" className="py-2 text-gray-900 font-medium border-b hover:text-blue-600 transition">Explore</a>
            <a href="#" className="py-2 text-gray-900 font-medium border-b hover:text-blue-600 transition">Online Degrees</a>
            <a href="#" className="py-2 text-gray-900 font-medium border-b hover:text-blue-600 transition">Careers</a>
            <a href="#" className="py-2 text-gray-900 font-medium border-b hover:text-blue-600 transition">Log In</a>
            <a href="#" className="mt-4 py-2 px-4 text-blue-600 border border-blue-600 rounded-md text-center font-semibold hover:bg-blue-50 transition">Join for Free</a>
          </div>
        </div>
      )}
    </header>
  );
}