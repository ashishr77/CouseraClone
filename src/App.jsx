import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
import TopCourses from "./components/TopCourses";
import WhyCoursera from "./components/WhyCoursera";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Hero />
      {/* <SearchBar /> */}
      <Categories />
      <TopCourses />
      <WhyCoursera />
      <Partners />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
