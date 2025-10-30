"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import projects from "../../../config/projects.json";
import "swiper/css";
import "swiper/css/pagination";

export default function OurWork() {
  return (
    <section className="relative py-24 bg-theme-light dark:bg-darkmode-theme-light border-t border-gray-200 dark:border-gray-800 overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-[-60px] left-[-40px] w-[200px] h-[200px] bg-primary/10 rounded-3xl rotate-[25deg] dark:hidden" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[180px] h-[180px] bg-gray-200/20 rounded-3xl rotate-[-15deg] dark:hidden" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Our Work
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A showcase of our proudest collaborations — where creativity meets
            code to craft elegant digital experiences.
          </p>
          <div className="mt-6 w-20 h-[3px] bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={40}
          slidesPerView={1}
          className="overflow-visible"
        >
          {projects.map((item, i) => (
            <SwiperSlide key={item.id}>
              <div
                className={`relative grid md:grid-cols-2 gap-12 items-center bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 transition-transform hover:scale-[1.01]`}
              >
                {/* Image */}
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={360}
                      className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Location */}
                  <div className="absolute -bottom-3 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full shadow-md animate-pulse">
                    <FaMapMarkerAlt className="inline mr-1" />
                    {item.client_location}
                  </div>

                  {/* Date */}
                  <div className="absolute -top-3 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full shadow text-gray-800 dark:text-gray-100 text-xs font-semibold">
                    <FaCalendarAlt className="inline mr-1" />
                    {item.project_date}
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-widest text-primary font-medium">
                    Featured Project
                  </span>
                  <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
                    {item.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 border border-gray-300 dark:border-gray-700 rounded-full text-xs text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <Link
                    href={`/projects/view?projectId=${item.id}`}
                    className="inline-block mt-2 font-semibold text-primary border-b border-transparent hover:border-primary transition-colors"
                  >
                    View Project →
                  </Link>
                </div>

                {/* Floating Shape (hidden in dark mode) */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/10 rounded-2xl rotate-[25deg] hidden dark:hidden md:block"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination styling */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #c9c9c9;
          opacity: 0.7;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #111;
          width: 18px;
          border-radius: 8px;
          opacity: 1;
        }
        html.dark .swiper-pagination-bullet {
          background: #555;
        }
        html.dark .swiper-pagination-bullet-active {
          background: #fff;
        }
      `}</style>
    </section>
  );
}
