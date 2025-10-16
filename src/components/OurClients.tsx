"use client";
import React from "react";

const projects = [
  { logo: "https://placehold.co/200x100/4F46E5/FFFFFF/png?text=Innovators" },
  { logo: "https://placehold.co/200x100/15803D/FFFFFF/png?text=Tech" },
  { logo: "https://placehold.co/200x100/9333EA/FFFFFF/png?text=Future" },
  { logo: "https://placehold.co/200x100/1D4ED8/FFFFFF/png?text=Aqua" },
  { logo: "https://placehold.co/200x100/EAB308/FFFFFF/png?text=Eco" },
  { logo: "https://placehold.co/200x100/C026D3/FFFFFF/png?text=Creative" },
  { logo: "https://placehold.co/200x100/EF4444/FFFFFF/png?text=Marketing" },
  { logo: "https://placehold.co/200x100/059669/FFFFFF/png?text=Health" },
];

const PartnersSlider = () => {
  return (
    <section className="relative bg-[#0B0B0D] py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16">
          Our Trusted Partners
        </h2>

        {/* Infinite scroll container */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_120px,_black_calc(100%-120px),transparent_100%)]">
          <ul className="flex items-center justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {projects.map((p, i) => (
              <li key={i}>
                <img
                  src={p.logo}
                  alt={`Partner ${i + 1}`}
                  className="h-20 w-auto rounded-lg opacity-90 hover:opacity-100 transition"
                />
              </li>
            ))}
          </ul>

          {/* duplicate list for seamless loop */}
          <ul
            className="flex items-center justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            {projects.map((p, i) => (
              <li key={`dup-${i}`}>
                <img
                  src={p.logo}
                  alt=""
                  className="h-20 w-auto rounded-lg opacity-90 hover:opacity-100 transition"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PartnersSlider;
