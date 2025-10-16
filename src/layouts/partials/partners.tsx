"use client";
import React from "react";
import projects from "../../../config/projects.json"; // ✅ your local data file

export default function PartnersSlider() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16">
          Our Trusted Partners
        </h2>

        {/* Infinite scroll row */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_80px,_black_calc(100%-80px),transparent_100%)]">
          {/* Original logos */}
          <ul className="flex items-center [&_li]:mx-10 [&_img]:max-w-none animate-scroll">
            {projects.map((item, i) => (
              <li key={i} className="flex flex-col items-center space-y-2">
                <img
                  src={item.client_logo}
                  alt={item.client}
                  className="h-20 w-auto opacity-90 hover:opacity-100 transition"
                />
                <p className="text-gray-700 text-sm font-medium">{item.client}</p>
              </li>
            ))}
          </ul>

          {/* Duplicate list for seamless infinite scroll */}
          <ul
            className="flex items-center [&_li]:mx-10 [&_img]:max-w-none animate-scroll"
            aria-hidden="true"
          >
            {projects.map((item, i) => (
              <li key={`dup-${i}`} className="flex flex-col items-center space-y-2">
                <img
                  src={item.client_logo}
                  alt=""
                  className="h-20 w-40 object-contain opacity-90 hover:opacity-100 transition"
                  />
                <p className="text-gray-700 text-sm font-medium">{item.client}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
