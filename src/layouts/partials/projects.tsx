"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import projects from "../../../config/projects.json";
import "swiper/css";
import "swiper/css/pagination";

export default function OrigamiCraneProjects() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light tracking-tight mb-3">Our Projects</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Projects unfold like origami cranes — clean folds, subtle wings, and refined layers.
          </p>
          <div className="mt-6 w-20 h-[2px] bg-gray-900 mx-auto"></div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={50}
          loop
          slidesPerView={1}
        >
          {projects.map((item, i) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.2 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Crane Origami Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-2xl overflow-hidden bg-white border border-gray-100"
                >
                  {/* Subtle crane fold overlay */}
                  {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-white/50 transform -rotate-6 origin-top-left"></div>
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-white/50 transform rotate-6 origin-bottom-right"></div>
                  </div> */}

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1000}
                    height={600}
                    className="w-full h-[400px] md:h-[400px] object-contain"
                  />

                  {/* Flap corners */}
                  <div className="absolute top-0 right-0 w-14 h-14 bg-white/60 border-t border-r border-gray-200 rotate-45 origin-top-right"></div>
                  <div className="absolute bottom-0 left-0 w-14 h-14 bg-white/60 border-b border-l border-gray-200 -rotate-45 origin-bottom-left"></div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="space-y-5"
                >
                  <span className="uppercase tracking-[0.25em] text-sm text-gray-400">
                    Featured Project
                  </span>
                  <h3 className="text-4xl md:text-5xl font-light">{item.title}</h3>
                  <p className="text-gray-500 text-lg max-w-lg">{item.description}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 border border-gray-200 rounded-full text-sm text-gray-600 hover:text-[#EB8722] hover:border-[#EB8722] transition-all duration-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 text-sm text-gray-400 pt-6">
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#EB8722]" />
                      {item.client_location}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt className="text-[#EB8722]" />
                      {item.project_date}
                    </span>
                  </div>

                  <Link
                    href={`/projects/view?projectId=${item.id}`}
                    className="inline-block mb-44 text-[#EB8722] font-medium border-b border-transparent hover:border-[#EB8722] transition-all duration-500 pt-4"
                  >
                    View Project
                  </Link>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
