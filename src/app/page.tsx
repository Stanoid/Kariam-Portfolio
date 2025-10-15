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
import ProjectSlider from "../components/ProjectSlider";
import OurClients from "../components/OurClients";
import Projects from "@/partials/projects";
import Partners from "@/partials/partners";



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
    <>
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

        <div style={{}}>
          <Vanta />
        </div>
      </section>

      <TechStack data={techstack} />



    <Projects data={techstack} />

   <Partners data={techstack} />


      {features.map((feature, index: number) => (
        <section
          key={index}
          className={`section-sm ${index % 2 === 0 && "bg-gradient"}`}
        >
          <div className="container">
            <div className="row items-center justify-between">
              <div
                className={`mb:md-0 mb-6 md:col-5 ${
                  index % 2 !== 0 && "md:order-2"
                }`}
              >
                {/* <ImageFallback
                  src={feature.image}
                  height={480}
                  width={520}
                  alt={feature.title}
                /> */}
              </div>
              <div
                className={`md:col-7 lg:col-6 ${
                  index % 2 !== 0 && "md:order-1"
                }`}
              >
                <h2
                  className="mb-4"
                  dangerouslySetInnerHTML={markdownify(feature.title)}
                />
                <p
                  style={{ textAlign: "justify" }}
                  className="mb-8 text-lg"
                  dangerouslySetInnerHTML={markdownify(feature.content)}
                />
                <ul>
                  {/* {feature.bulletpoints.map((bullet: string) => (
                    <li className="relative mb-4 pl-6" key={bullet}>
                      <FaCheck className={"absolute left-0 top-1.5"} />
                      <span dangerouslySetInnerHTML={markdownify(bullet)} />
                    </li>
                  ))} */}
                </ul>
                {feature.button.enable && (
                  <Link
                    className="btn btn-primary mt-5"
                    href={feature.button.link}
                  >
                    {feature.button.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;
