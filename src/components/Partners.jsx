import React from "react";

const partners = [
  {
    name: "Stanford",
    img: "https://upload.wikimedia.org/wikipedia/en/b/b7/Stanford_University_seal_2003.svg",
  },
  {
    name: "Google",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "IBM",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    name: "Meta",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Logo.png",
  },
  {
    name: "Imperial College London",
    img: "https://upload.wikimedia.org/wikipedia/en/6/68/Imperial_College_London_logo.svg",
  },
  {
    name: "Yale",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/47/Yale_University_Shield_1.svg",
  },
];

export default function Partners() {
  return (
    <section className="py-11 px-4 bg-gradient-to-r from-white via-indigo-50 to-white">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-lg font-semibold text-center mb-5 text-gray-700">In partnership with world-class universities and companies</h3>
        <div className="flex flex-wrap items-center justify-center gap-7">
          {partners.map((partner) => (
            <img
              key={partner.name}
              src={partner.img}
              alt={partner.name}
              className="max-h-12 w-auto grayscale hover:grayscale-0 bg-white py-2 px-4 rounded-md shadow"
              style={{ maxWidth: 120 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
