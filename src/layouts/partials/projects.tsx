"use client";

import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Testimonial,TechStack } from "@/types";
import Image from "next/image";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { FaCode, FaTools } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import projects from "../../../config/projects.json";

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

const TechStackEl = ({ data }: { data: PageData }) => {
  return (
    <>
      {
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="mx-auto mb-12 text-left md:col-10 lg:col-8 xl:col-6">
                <h2
                 
                  className="mb-4"
                >
                  Our Projects
                </h2>
                
                <p
                 
                >
                  Explore our diverse portfolio showcasing innovative solutions
                  across various industries.
                </p>
              </div>
              <div style={{
                height:"100%"
              }} className="col-12">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  pagination={{ clickable: true }}
                  loop={true}
                  centeredSlides={false}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={24}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                     
                      
                    },
                  }}
                >


                  {projects.map(
                    (item: any, index: number) => (
                      <SwiperSlide key={index}>
                        <div style={{
                          height:"100%",
                          minHeight:50
                        }} className="rounded-lg  bg-theme-light px-7 py-10 dark:bg-darkmode-theme-light">

                          {/* <blockquote
                            className="mt-8"
                            dangerouslySetInnerHTML={markdownify(item.content)}
                          /> */}


<div style={{marginBottom:20}} onClick={()=>{

}} className="mt-11 flex items-start">
  <div className="text-dark dark:text-white">
 <FaCode
 style={{
  color: "#EB8722",
  fontSize:17,
 }}
 />
  </div>
  <div className="ml-2">
    <h3
   
      className="h5 font-primary font-semibold"
    >{
      item.title
    }</h3>
    <p
  
      className="text-dark dark:text-white"
    >
      {item.description}
    </p>

  </div>

  <div className="w-full  rounded-md bg-red-50 ">
 <Image
                    src={item.client_logo}
                    width={200}
                    height={0}
                    style={{height:"auto"}}
                    alt={item.name}
                    />
</div>
</div>


               






                        </div>
                      </SwiperSlide>
                    ),
                  )}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      }
    </>
  );
};

export default TechStackEl;
