import React from "react";

const links = [
  {
    title: "Coursera",
    items: ["About", "Careers", "Press", "Blog"],
  },
  {
    title: "Community",
    items: ["Learners", "Partners", "Developers", "Beta Testers"],
  },
  {
    title: "More",
    items: ["Privacy", "Terms", "Help Center"],
  },
];
const social = [
  { icon: "fab fa-facebook-f", label: "Facebook" },
  { icon: "fab fa-x-twitter", label: "X/Twitter" },
  { icon: "fab fa-linkedin-in", label: "LinkedIn" },
  { icon: "fab fa-instagram", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t pt-8 pb-6 mt-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 justify-between">
        <div className="flex-1">
          <a href="#" className="flex items-center gap-2 mb-4">
            <span className="font-bold text-xl text-indigo-700">Coursera</span>
          </a>
          <div className="text-gray-500 mb-6 text-sm">© {new Date().getFullYear()} Coursera clone. All rights reserved.</div>
          <div className="flex gap-3">
            {/* Use regular social SVGs */}
            <a href="#" className="group text-gray-400 hover:text-indigo-700 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.494v-9.294h-3.127v-3.622h3.127v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.462.099 2.797.143v3.24h-1.918c-1.504 0-1.797.715-1.797 1.763v2.314h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.322-.593 1.322-1.326V1.326C24 .592 23.405 0 22.675 0z"/></svg>
            </a>
            <a href="#" className="group text-gray-400 hover:text-indigo-700 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-3.179 0-5.515 2.966-4.797 6.045C7.69 8.095 4.066 6.13 1.64 3.161c-.35.602-.554 1.298-.554 2.042 0 1.41.72 2.655 1.813 3.379-.673-.021-1.308-.206-1.863-.513v.052c0 1.968 1.393 3.617 3.233 3.993-.339.092-.696.142-1.065.142-.261 0-.515-.025-.764-.073.516 1.607 2.015 2.773 3.793 2.805-1.39 1.09-3.146 1.74-5.045 1.74-.325 0-.646-.019-.962-.056C2.29 19.29 5.019 20 7.775 20c9.054 0 14-7.496 14-13.986 0-.21 0-.423-.016-.634.962-.689 1.797-1.56 2.457-2.548l-.047-.02z"/></svg>
            </a>
            <a href="#" className="group text-gray-400 hover:text-indigo-700 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554V14.74c0-1.364-.024-3.125-1.904-3.125-1.904 0-2.196 1.49-2.196 3.017v5.821h-3.554V9.001h3.414v1.561h.049c.476-.9 1.636-1.847 3.369-1.847 3.602 0 4.266 2.368 4.266 5.455v6.282zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.066 0-1.142.925-2.066 2.069-2.066 1.142 0 2.069.924 2.069 2.066 0 1.14-.927 2.066-2.069 2.066zm1.777 13.019H3.56V9h3.554v11.452z"/></svg>
            </a>
            <a href="#" className="group text-gray-400 hover:text-indigo-700 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.34 3.608 1.314.974.973 1.251 2.24 1.314 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.062 1.366-.339 2.633-1.314 3.608-.973.974-2.24 1.251-3.608 1.314-1.265.058-1.645.069-4.849.069s-3.584-.011-4.849-.069c-1.366-.063-2.633-.34-3.608-1.314C2.479 19.784 2.202 18.517 2.14 17.15c-.058-1.265-.069-1.645-.069-4.849s.012-3.584.07-4.849C2.202 5.483 2.478 4.216 3.452 3.241 4.426 2.267 5.693 1.99 7.061 1.927c1.265-.058 1.645-.07 4.849-.07m0-2.163C8.691 0 8.266.012 7.151.07c-1.682.08-3.142.993-4.12 1.971C1.056 3.799.144 5.259.064 6.941.007 8.057 0 8.483 0 12c0 3.517.007 3.943.064 5.059.08 1.682.991 3.143 1.966 4.119.976.977 2.438 1.889 4.12 1.969 1.117.06 1.542.07 4.85.07s3.733-.011 4.85-.07c1.681-.08 3.143-.992 4.12-1.969.975-.976 1.887-2.437 1.967-4.119.057-1.116.063-1.542.063-5.059 0-3.518-.006-3.944-.063-5.06-.08-1.682-.992-3.143-1.967-4.119-.977-.977-2.438-1.889-4.12-1.969C15.733.012 15.308 0 12 0z"/></svg>
            </a>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-7">
          {links.map((group) => (
            <div key={group.title}>
              <div className="font-semibold text-gray-800 mb-2">{group.title}</div>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-indigo-700 transition text-sm block py-1">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
