import React from "react";

const courses = [
  {
    title: "Google Data Analytics",
    partner: "Google",
    img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
    badge: "New AI skills",
    tag: "Build toward a degree",
  },
  {
    title: "Google Project Management",
    partner: "Google",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    badge: "New AI skills",
    tag: "Build toward a degree",
  },
  {
    title: "Google IT Support",
    partner: "Google",
    img: "https://thehubbackend.com/media/Google_employee_benefits.jpg",
    badge: "New AI skills",
    tag: "Build toward a degree",
  },
  {
    title: "Google UX Design",
    partner: "Google",
    img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
    badge: "New AI skills",
    tag: "Build toward a degree",
  },
];

export default function TopCourses() {
  return (
    <section id="certificates" className="py-14 px-4 mx-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
            Specializations and Professional Certificates
          </h2>
          <p className="text-base text-gray-600">
            Explore our most popular programs, get job-ready for an in-demand career.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div key={course.title} className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden flex flex-col">
              <div className="relative">
                <img src={course.img} alt={course.title} className="h-40 w-full object-cover" />
                <span className="absolute top-3 right-3 bg-white text-gray-700 text-xs font-semibold px-2 py-1 rounded flex items-center">
                  <span className="mr-1">★</span> {course.badge}
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-center mb-2">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIl8zC8WAMHi5JVmKUb3YVvZd5gvoCdy-NQ&s"
                    alt={course.partner}
                    className="h-4 mr-2"
                  />
                  <div className="text-base font-semibold text-gray-900">{course.title}</div>
                </div>
                <span className="text-xs text-blue-600 flex items-center">
                  <span className="mr-1">🏫</span> {course.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold text-sm hover:bg-blue-700 transition">
            Show 8 more
          </button>
          <button className="text-blue-600 font-semibold text-sm hover:underline">
            View all →
          </button>
        </div>
      </div>
    </section>
  );
}