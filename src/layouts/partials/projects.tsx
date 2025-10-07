"use client";

import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Testimonial,TechStack } from "@/types";
import Image from "next/image";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { FaCode, FaTools,FaMap,FaCalendar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import projects from "../../../config/projects.json";
import Link from "next/link";

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
                  centeredSlides={true}

                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,

                  }}
                  spaceBetween={14}
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
  

  </div>

  <div className="w-full  rounded-md ">
 <Image
                    src={item.image}
                    className="rounded-md"
                    width={200}
                    height={0}
                    style={{height:"auto"}}
                    alt={item.name}
                    />
</div>


</div>



<div className="p-6 flex flex-col flex-grow">
                <p className=" mb-4 flex-grow">{item.description}</p>

                {/* Meta Data */}
                <div className="space-y-3 mb-6">
                  {/* Location */}
                  <div className="flex items-center text-sm text-gray-500">
                    <FaMap className="w-4 h-4 mr-2 text-indigo-500 flex-shrink-0" />
                    <span>{item.client_location}</span>
                  </div>

                  {/* Date */}
                  <div className="flex items-center text-sm text-gray-500">
                    <FaCalendar className="w-4 h-4 mr-2 text-indigo-500 flex-shrink-0" />
                    <span>Completed on {item.project_date}</span>
                  </div>

                  {/* Technologies */}
                  <div className="flex items-start text-sm text-gray-500">
                    <FaCode className="w-4 h-4 mt-1 mr-2 text-indigo-500 flex-shrink-0" />
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Link/Call to Action */}
               
              </div>
               

<div className="flex justify-end">

<Link
                    className="btn btn-primary mt-5"
                    href={`/projects/view?projectId=${item.id}`}
                  >
                    
                    View
                  </Link>
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
