import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import PartnersSlider from "@/partials/partners";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import { FaCode, FaHandshake, FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";
import projects from "../../../config/projects.json";
import CallToAction from "@/partials/CallToAction";
const About = () => {
  const data: RegularPage = getListPage("about/_index.md");
  const { frontmatter } = data;
  const { title, meta_title, description, image } = frontmatter;
  const callToAction = getListPage("sections/call-to-action.md");

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />

      <main className=" bg-theme-light dark:bg-darkmode-theme-light text-gray-800">
        {/* --- HERO SECTION --- */}

    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden  bg-theme-light dark:bg-darkmode-theme-light">
      {/* --- Minimal Background Shapes --- */}
      <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-gray-200/10 rounded-3xl rotate-[30deg]"></div>
      <div className="absolute bottom-[-25%] right-[-15%] w-[450px] h-[450px] bg-gray-300/5 rounded-3xl rotate-[-25deg]"></div>
      <div className="absolute top-10 right-[-50px] w-32 h-32 border-2 border-gray-200 rounded-lg rotate-12"></div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl grid md:grid-cols-12 items-center gap-6">
        <div className="col-span-7 relative md:translate-x-8 flex flex-col gap-6">
  <div className="absolute -top-12 left-[-30px] dark:hidden text-[6rem] md:text-[10rem] font-black text-gray-100/40 -rotate-6 select-none tracking-tighter leading-none">
    Kariam
  </div>

  <h1 className="text-[2.5rem] md:text-[4.5rem] font-extrabold text-gray-900 leading-[1.1] relative z-10 tracking-tight">
    Redefining how <span className="inline-block text-primary rotate-1">work</span> <br className="hidden md:block" />
    gets <span className="text-gray-900 dark:text-primary italic">done</span>.
  </h1>

  <p className="mt-2 text-gray-600 text-lg md:text-xl max-w-xl relative z-10 leading-relaxed">
    We craft software that simplifies complexity — designing, developing, and integrating
    custom solutions that drive focus, speed, and real business impact. From adaptive
    systems to full-scale IT outsourcing, we build digital momentum.
  </p>

  <a
    href="#partners"
    className="self-start mt-6 px-10 py-4 bg-primary text-white font-semibold rounded-full shadow-md hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 relative z-10"
  >
    contact us
  </a>

  <div className="absolute bottom-0 right-[-20px] w-[140px] h-[2px] bg-primary/70 rotate-[15deg]"></div>
</div>


        <div className="col-span-5 relative -translate-x-10 md:-translate-x-0">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
            <img
              src="/images/MANCOD.jpg"
              alt="Gulf Innovation"
              className="w-full h-[400px] object-cover object-center"
            />
          </div>

          <div className="absolute -bottom-10 -right-10 bg-gray-100/70 backdrop-blur-md p-4 rounded-2xl shadow-lg w-[200px]">
            <p className="text-gray-900 font-bold text-base mb-1">
              Experimental Lab
            </p>
            <p className="text-gray-600 text-sm leading-snug">
              We create software that defies ordinary conventions.
            </p>
          </div>


          <div className="absolute top-[-20px] left-[-30px] w-16 h-16 bg-gray-200/20 rotate-45 rounded-lg"></div>
        </div>
      </div>
    </section>


    <section
  id="partners"
  className="relative py-24 bg-primary/90 border-t border-gray-200 overflow-hidden"
>

  <div className="absolute top-[-50px] left-[-60px] w-[300px] h-[300px] bg-white/10 rounded-3xl rotate-[25deg]"></div>
  <div className="absolute bottom-[-70px] right-[-50px] w-[250px] h-[250px] bg-white/5 rounded-3xl rotate-[-20deg]"></div>

  <div className="relative container mx-auto px-6 max-w-7xl grid md:grid-cols-12 gap-12 items-start">

    <div className="col-span-5 md:col-span-4 text-left relative z-10">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
        Our <span className="text-white/80">Trusted</span> Partners
      </h2>
      <p className="text-lg md:text-xl text-white/90 max-w-lg leading-relaxed">
        We proudly collaborate with forward-thinking brands, startups, and innovators who share our passion for bold, impactful technology.
      </p>
    </div>


      <div className="col-span-7 md:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center relative z-10">
      {projects.slice(0, 16).map((item, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center text-center space-y-3 hover:scale-110 transition-transform duration-300"
        >
          <img
            src={item.client_logo}
            alt={item.client}
            className="h-12 w-40 object-contain grayscale opacity-80 hover:opacity-100 transition-all duration-300"
          />
          {/* Optional small label */}
          {/* <p className="text-white/70 text-sm font-medium">{item.client}</p> */}
        </div>
      ))}
    </div>
  </div>

  {/* Floating decorative line */}
  <div className="absolute top-20 right-[-40px] w-[200px] h-[2px] bg-white/50 rotate-[15deg]"></div>
</section>

<section className="py-24  bg-theme-light dark:bg-darkmode-theme-light">
  <div className="container mx-auto px-6 max-w-5xl text-left">
    {/* Header */}
    <div className="mb-16 text-left">
      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
        How We Deliver Impact
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
        Our process is designed for efficiency, clarity, and measurable results.
        From strategy to delivery, we help businesses achieve their goals with precision and professionalism.
      </p>
    </div>

    {/* Steps */}
    <div className="relative">
      <div className="hidden md:block absolute left-10 top-1/2 w-[2px] h-[70%] bg-primary/20 transform -translate-y-1/2"></div>

      <div className="space-y-14 md:space-y-20">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-8">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-6 md:mb-0">
            1
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Understand Your Objectives
            </h3>
            <p className="text-gray-700 max-w-xl">
              We begin by analyzing your business goals and challenges to create a tailored plan that aligns with your vision.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-8">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-6 md:mb-0">
            2
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Execute with Precision
            </h3>
            <p className="text-gray-700 max-w-xl">
              Our expert team designs and develops custom solutions using the latest technologies to ensure scalable and reliable results.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-8">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-6 md:mb-0">
            3
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Deliver Measurable Outcomes
            </h3>
            <p className="text-gray-700 max-w-xl">
              We launch your solution and provide ongoing support, monitoring, and optimization so your business achieves tangible growth and efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="mt-16 text-left">
      <a
        href="#contact"
        className="inline-block px-10 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary/90 transition-all"
      >
        Start Your Project
      </a>
    </div>
  </div>
</section>





<CallToAction data={callToAction} />

        <div className="h-1 bg-primary/80 w-full"></div>
      </main>
    </>
  );
};

export default About;
