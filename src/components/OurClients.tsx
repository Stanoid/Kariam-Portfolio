"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";

// The primary color used for accents. You can easily change this.
const COLOR_PRIMARY = "indigo"; // e.g., 'indigo', 'purple', 'blue'
const PRIMARY_CLASS = `${COLOR_PRIMARY}-500`;

const projects = [
  { client: "Client A (Innovators)", client_logo: "https://placehold.co/200x100/4F46E5/FFFFFF/png?text=Innovators" },
  { client: "Client B (Tech)", client_logo: "https://placehold.co/200x100/15803D/FFFFFF/png?text=Tech+Solutions" },
  { client: "Client C (Future)", client_logo: "https://placehold.co/200x100/9333EA/FFFFFF/png?text=Future+Group" },
  { client: "Client D (Aqua)", client_logo: "https://placehold.co/200x100/1D4ED8/FFFFFF/png?text=Aqua" },
  { client: "Client E (Eco)", client_logo: "https://placehold.co/200x100/EAB308/FFFFFF/png?text=Eco" },
  { client: "Client F (Creative)", client_logo: "https://placehold.co/200x100/C026D3/FFFFFF/png?text=Creative" },
  { client: "Client G (Marketing)", client_logo: "https://placehold.co/200x100/EF4444/FFFFFF/png?text=Marketing" },
  { client: "Client H (Health)", client_logo: "https://placehold.co/200x100/059669/FFFFFF/png?text=Health" },
];

const FALLBACK_LOGO_URL = "https://placehold.co/200x100/E5E7EB/6B7280?text=Partner";

/**
 * Calculates scale and opacity based on the item's distance from the center of the scroll container.
 * @param {number} center - The center position of the scroll container.
 * @param {number} itemCenter - The center position of the current item.
 * @returns {{scale: number, opacity: number}}
 */
const getAnimationProps = (center, itemCenter) => {
  const distance = Math.abs(center - itemCenter);
  // Max distance is half the screen/container width. Use a max distance for normalization.
  const maxDistance = 300; // Arbitrary value that gives a good falloff. Adjust as needed.
  const normalizedDistance = Math.min(distance, maxDistance) / maxDistance;

  // Scale: Max scale 1.2 (in the middle) -> Min scale 1.0 (at the edge)
  const scale = 1 + (0.2 * (1 - normalizedDistance));

  // Opacity: Max opacity 1 (in the middle) -> Min opacity 0.4 (at the edge)
  const opacity = 0.4 + (0.6 * (1 - normalizedDistance));

  return { scale, opacity };
};

const PartnersSlider = () => {
  const scrollRef = useRef(null);
  const [animationProps, setAnimationProps] = useState({});

  // 1. Animation Logic: Auto-Scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let frame;
    let hovering = false;

    const scroll = () => {
      if (!hovering) {
        // Adjust speed here (e.g., 1.2 for smooth, 2 for faster)
        container.scrollLeft += 1.5;
        // Seamless loop by resetting scroll position when it reaches the duplicate section
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      // Re-calculate the animation properties on every scroll frame
      calculateAnimationProps();
      frame = requestAnimationFrame(scroll);
    };

    frame = requestAnimationFrame(scroll);
    container.addEventListener("mouseenter", () => (hovering = true));
    container.addEventListener("mouseleave", () => (hovering = false));

    return () => cancelAnimationFrame(frame);
  }, []);

  // 2. Center-Based Scaling/Fading Logic
  const calculateAnimationProps = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const { left: containerLeft, width: containerWidth } = container.getBoundingClientRect();
    const containerCenter = containerLeft + (containerWidth / 2);
    const newProps = {};

    container.querySelectorAll(".client-card").forEach((card, index) => {
      const { left: cardLeft, width: cardWidth } = card.getBoundingClientRect();
      const cardCenter = cardLeft + (cardWidth / 2);

      // We use the difference relative to the *container's* center
      const { scale, opacity } = getAnimationProps(containerCenter, cardCenter);
      newProps[index] = { scale, opacity };
    });

    setAnimationProps(newProps);
  }, []);

  // Recalculate on mount and when window resizes/scrolls (in case the container moves)
  useEffect(() => {
    calculateAnimationProps(); // Initial calculation
    const handleScrollOrResize = () => calculateAnimationProps();

    // Listen for manual scroll within the container (even though it's auto-scrolling)
    scrollRef.current?.addEventListener("scroll", handleScrollOrResize);
    window.addEventListener("resize", handleScrollOrResize);

    return () => {
      scrollRef.current?.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, [calculateAnimationProps]);

  // Duplicate the list for a seamless infinite scroll effect
  const duplicated = [...projects, ...projects];

  return (
    <section className="relative py-24 overflow-hidden bg-[#0B0B0D] font-sans">
      {/* subtle grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative container mx-auto px-4 max-w-7xl">
        <h2 className="text-center text-white text-4xl font-extrabold mb-16 tracking-tight">
          <span className="relative inline-block">
            <span className="relative z-10">Our Trusted Partners</span>
            <span className={`absolute bottom-0 left-0 w-full h-1 bg-${PRIMARY_CLASS}`} />
          </span>
        </h2>

        <div className="relative">
          {/* Fading Edges - Crucial for the fading effect to work with the scaling */}
          <div className={`absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0B0B0D] to-transparent z-10`} />
          <div className={`absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0B0B0D] to-transparent z-10`} />

          <div
            ref={scrollRef}
            className="flex space-x-12 sm:space-x-16 overflow-x-scroll will-change-scroll pb-4 -mb-4 scrollbar-hide"
            // Adding a class to hide scrollbar while allowing scroll
          >
            {duplicated.map((client, i) => {
              const { scale = 1, opacity = 0.4 } = animationProps[i] || {};
              const isCentered = scale > 1.15; // Threshold for the "center" look

              return (
                <div
                  key={i}
                  className="client-card relative flex flex-col items-center justify-center flex-shrink-0 w-52 sm:w-64 h-40 rounded-2xl bg-[#131316] border border-[#1F1F22] overflow-hidden group transition-all duration-300 ease-out"
                  style={{
                    transform: `scale(${scale})`,
                    opacity: opacity,
                    // Use a subtle shadow only for the centered element
                    boxShadow: isCentered ? `0 0 30px rgba(79, 70, 229, 0.4)` : 'none',
                  }}
                >
                  {/* Highlight only for the centered/scaled element */}
                  {isCentered && (
                      <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-${PRIMARY_CLASS}/20 to-transparent animate-scan`} />
                  )}

                  {/* diagonal glowing slice (on hover) */}
                  <div className={`absolute inset-0 bg-${PRIMARY_CLASS}/20 clip-blade translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out`}></div>

                  {/* logo */}
                  <img
                    src={client.client_logo || FALLBACK_LOGO_URL}
                    alt={client.client}
                    className="object-cover w-full h-full transition-all duration-700"
                    style={{ opacity: isCentered ? 1 : 0.8 }} // Make the centered logo brighter
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = FALLBACK_LOGO_URL;
                    }}
                  />

                  {/* overlay text */}
                  <div className="absolute bottom-0 left-0 w-full py-2 text-center bg-black/60 backdrop-blur-sm">
                    <p className="text-gray-100 text-xs sm:text-sm font-medium">{client.client}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <style jsx>{`
          /* Custom style to hide scrollbar (for a cleaner look) */
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }

          @keyframes scan {
            0% {
              transform: translateY(100%);
              opacity: 0.1;
            }
            50% {
              transform: translateY(-100%);
              opacity: 0.3;
            }
            100% {
              transform: translateY(100%);
              opacity: 0.1;
            }
          }
          .animate-scan {
            animation: scan 6s linear infinite;
          }
          .clip-blade {
            clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
          }
        `}</style>
      </div>
    </section>
  );
};

export default PartnersSlider;
