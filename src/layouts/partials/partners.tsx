"use client";
import React from "react";
import projects from "../../../config/projects.json"; // ✅ your local data file

export default function PartnersSlider() {
  return (
    <section className="relative bg-primary/90 dark:bg-darkmode-theme-light py-12 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <div className="mb-16">
        <h2 className="text-xl md:text-5xl font-extrabold text-white mb-16">
        Our Clients
                </h2>
                <p>Your support has been instrumental in shaping who we are today.                </p>
</div>

        {/* Infinite scroll row */}
        <div className="relative w-full inline-flex flex-nowrap overflow-hidden">
          {/* Gradient masks on sides */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-primary/20 dark:from-darkmode-theme-light to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-primary/20 dark:from-darkmode-theme-light to-transparent z-10" />

          {/* Original logos */}
          <ul className="flex items-center [&_li]:mx-10 [&_img]:max-w-none animate-scroll">
            {projects.map((item, i) => (
              <li
                key={i}
                className="flex flex-col items-center space-y-2 transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={item.client_logo}
                  alt={item.client}
                  className="h-16 w-40 object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                />
                <p className="text-gray-700 text-sm font-medium">{item.client}</p>
              </li>
            ))}
          </ul>

          {/* Duplicate for seamless scroll */}
          <ul
            className="flex items-center [&_li]:mx-10 [&_img]:max-w-none animate-scroll"
            aria-hidden="true"
          >
            {projects.map((item, i) => (
              <li
                key={`dup-${i}`}
                className="flex flex-col items-center space-y-2 transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={item.client_logo}
                  alt=""
                  className="h-16 w-40 object-contain opacity-80 hover:opacity-100 transition-all duration-300"
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
