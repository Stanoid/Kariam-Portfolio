"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import projects from "../../../config/projects.json";
import "swiper/css";
import "swiper/css/pagination";

export default function Projects() {
  return (
    <section className="relative py-20  bg-theme-light dark:bg-darkmode-theme-light border-t border-gray-200 overflow-hidden">
      {/* Background Abstract Shapes */}
      <div className="absolute top-[-60px] left-[-40px] w-[200px] h-[200px] bg-primary/10 rounded-3xl rotate-[25deg]" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[180px] h-[180px] bg-gray-200/20 rounded-3xl rotate-[-15deg]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Selected Projects
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Showcasing our collaborations with ambitious companies across industries, delivering clear, practical, and elegant solutions.
          </p>
          <div className="mt-6 w-16 h-[3px] bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Projects Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={40}
          slidesPerView={1}
          className="overflow-visible"
        >
          {projects.map((item, i) => (
            <SwiperSlide key={item.id}>
              <div
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  i % 2 ? "md:flex-row-reverse" : ""
                } relative  bg-theme-light dark:bg-darkmode-theme-light rounded-2xl shadow-lg p-6`}
              >
                {/* Image Card */}
                <div className="relative">
                  <div className="rounded-xl overflow-hidden shadow-md border border-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={360}
                      className="w-full h-[240px] object-cover"
                    />
                  </div>

                  {/* Location */}
                  <div className="absolute -bottom-3 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full shadow-md animate-pulse">
                    <FaMapMarkerAlt className="inline mr-1" />
                    {item.client_location}
                  </div>

                  {/* Date */}
                  <div className="absolute -top-3 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow text-gray-800 text-xs font-semibold">
                    <FaCalendarAlt className="inline mr-1" />
                    {item.project_date}
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">
                    Featured Project
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-md">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 border border-gray-300 rounded-full text-xs text-gray-700 hover:border-primary hover:text-primary transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project */}
                  <Link
                    href={`/projects/view?projectId=${item.id}`}
                    className="inline-block font-semibold text-primary border-b border-transparent hover:border-primary pt-1 text-sm transition-colors"
                  >
                    View Project →
                  </Link>
                </div>

                {/* Floating Decorative Shape */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/10 rounded-2xl rotate-[25deg] hidden md:block"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Style */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #c9c9c9;
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
          background: #111;
          width: 16px;
          border-radius: 8px;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
