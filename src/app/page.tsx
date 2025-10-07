import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import TechStack from "@/partials/techstack";
import { Button, Feature } from "@/types";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import Vanta from "@/components/vanta";
import CustomCursor from "./customcursor";
import AnimatedCursor from "react-animated-cursor"
import FeaturesGrid from "@/partials/Features";

const Home = () => {
  const homepage = getListPage("homepage/_index.md");
  const testimonial = getListPage("sections/testimonial.md");
  const techstack = getListPage("sections/techstack.md");
  const callToAction = getListPage("sections/call-to-action.md");
  const { frontmatter } = homepage;
  const {
    banner,
    features,
  }: {
    banner: { title: string; image: string; content?: string; button?: Button };
    features: Feature[];
  } = frontmatter;

  return (
    <div className="">
        <AnimatedCursor />
      <SeoMeta />


      <section className="section pt-14">
        {/* <div >
          <div className="row justify-center">



            {banner.image && (
              <div className="col-12">

              </div>
            )}
          </div>
        </div> */}

<div style={{

          }}>
         <Vanta  />
          </div>
      </section>


      <TechStack data={techstack} />

      <FeaturesGrid  />

<Testimonials  data={testimonial}/>

      <CallToAction data={callToAction} />
    </div>
  );
};

export default Home;
