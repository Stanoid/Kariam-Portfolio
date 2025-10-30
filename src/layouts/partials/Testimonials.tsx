"use client";

import { markdownify } from "@/lib/utils/textConverter";
import { Testimonial } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: {
    enable?: boolean;
    title: string;
    description?: string;
    testimonials: Array<Testimonial>;
  };
}

const Testimonials = ({ data }: { data: PageData }) => {
  if (!data.frontmatter.enable) return null;

  return (
    <section className="py-16  bg-theme-light dark:bg-darkmode-theme-light">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3"
            dangerouslySetInnerHTML={markdownify(data.frontmatter.title)}
          />
          {data.frontmatter.description && (
            <p
              className="text-gray-600 dark:text-gray-300 text-lg md:text-base max-w-2xl mx-auto leading-relaxed"
              dangerouslySetInnerHTML={markdownify(data.frontmatter.description)}
            />
          )}
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.frontmatter.testimonials.map((item: Testimonial, index: number) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className=" bg-theme-light dark:bg-darkmode-theme-light rounded-2xl shadow-md border hover:border-primary border-gray-100  p-6 md:p-8 flex flex-col justify-between h-full cursor-pointer group hover:shadow-xl transition-shadow duration-300"
              >
                {/* Quote Icon */}
                <div className="text-gray-300 dark:text-gray-500 mb-4 group-hover:text-primary transition-colors duration-300">
                  <svg
                    width="30"
                    height="18"
                    viewBox="0 0 33 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.28375 19.41L0.79375 18.64C1.21375 17.0067 1.75042 15.07 2.40375 12.83C3.05708 10.5433 3.75708 8.28 4.50375 6.04C5.29708 3.75333 6.06708 1.77 6.81375 0.0899959H15.3538C14.9338 2.09666 14.4904 4.26667 14.0238 6.6C13.5571 8.88666 13.1371 11.15 12.7638 13.39C12.4371 15.5833 12.1571 17.59 11.9238 19.41H1.28375ZM31.69 0.0899959L32.18 0.859998C31.76 2.54 31.2233 4.5 30.57 6.74C29.9167 8.98 29.2167 11.2433 28.47 13.53C27.7233 15.77 26.9533 17.73 26.16 19.41H17.69C18.0167 17.9167 18.3433 16.33 18.67 14.65C18.9967 12.9233 19.3 11.22 19.58 9.54C19.9067 7.81333 20.1867 6.15667 20.42 4.57C20.7 2.93666 20.91 1.44333 21.05 0.0899959H31.69Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                {/* Testimonial Content */}
                <blockquote
                  className="text-gray-700 dark:text-gray-200 italic mb-6 leading-relaxed flex-1"
                  dangerouslySetInnerHTML={markdownify(item.content)}
                />

                {/* Author Info */}
                <div className="mt-4 flex items-center gap-3">
                  <div>
                    <h3
                      className="text-md md:text-lg font-semibold text-gray-900 dark:text-white"
                      dangerouslySetInnerHTML={markdownify(item.name)}
                    />
                    <p
                      className="text-sm text-gray-500 dark:text-gray-400"
                      dangerouslySetInnerHTML={markdownify(item.designation)}
                    />
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Pagination Styling */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #c0c0c0;
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #111;
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
