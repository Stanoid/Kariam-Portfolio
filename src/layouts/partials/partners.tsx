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
                  Our Clients
                </h2>
                
                <p
                 
                >

                  
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
                    delay: 700,
                    disableOnInteraction: true,

                  }}
                  spaceBetween={24}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 6,
                     
                      
                    },
                  }}
                >


                  {projects.map(
                    (item: any, index: number) => (
                      <SwiperSlide key={index}>
                        <div style={{
                        
                        }} className=" ">

                          {/* <blockquote
                            className="mt-8"
                            dangerouslySetInnerHTML={markdownify(item.content)}
                          /> */}


<div style={{marginBottom:0}} onClick={()=>{

}} className=" flex flex-col gap-y-2 items-start">

  <div className="w-full  rounded-md ">
 <Image
                    src={item.client_logo}
                    className="rounded-2xl shadow-md"
               width={100}
               height={100}
                    style={{height:"auto",width:"100%"}}
                    alt={item.client}
                    />
</div>

{item.client}
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
