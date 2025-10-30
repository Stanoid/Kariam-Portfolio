"use client";

import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Testimonial,TechStack } from "@/types";
import Image from "next/image";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { FaTools } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
 import { Cloud, Database, TabletSmartphone, WandSparkles } from "lucide-react";

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
      {data.frontmatter.enable && (
        <section className="section mt-4">
          <div className="container">
            <div className="row">
              <div className="mx-auto mb-12 text-left md:col-10 lg:col-8 xl:col-6">
                <h2
                  dangerouslySetInnerHTML={markdownify(data.frontmatter.title)}
                  className="mb-4"
                />
                <p
                  dangerouslySetInnerHTML={markdownify(
                    data.frontmatter.description!,
                  )}
                />
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


                  {data.frontmatter.testimonials.map(
                    (item: Testimonial, index: number) => (
                      <SwiperSlide key={index}>
                        <div style={{
                          height:"100%",
                          minHeight:400
                        }} className="rounded-lg  px-7 py-10  bg-theme-light dark:bg-darkmode-theme-light">

                          {/* <blockquote
                            className="mt-8"
                            dangerouslySetInnerHTML={markdownify(item.content)}
                          /> */}

<div style={{marginBottom:20}} onClick={()=>{

}} className="mt-11 flex items-center">
  <div className="text-dark dark:text-white">
 <FaTools
 style={{
  color: "#EB8722",
  fontSize:17,
 }}
 />
  </div>
  <div className="ml-2">
    <h3
      dangerouslySetInnerHTML={markdownify(item.name)}
      className="h5 font-primary font-semibold"
    />
    <p
      dangerouslySetInnerHTML={markdownify(
        item.designation,
      )}
      className="text-dark dark:text-white"
    />
  </div>
</div>


                          <div style={{
                            display:"grid",

                            gridTemplateColumns:"auto auto auto",

                          }}>
                          {item.content.data.map(
                    (item: any, index: number) => (
                     <div className="" style={{margin:15,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} key={index}>
                    <Image
                    src={item.icon}
                    width={50}
                    height={0}
                    style={{height:"auto"}}
                    alt={item.name}
                    />
                    <div style={{
                      marginTop:5,
                      textAlign:"center",
                      fontSize:13,

                    }}>
                      {item.name}
                    </div>
                     </div>
                    ),
                  )}

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
      )}
    </>
  );
};

export default TechStackEl;
