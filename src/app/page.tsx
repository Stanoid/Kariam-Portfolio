import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { Button, Feature } from "@/types";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

// Component Imports (alphabetical for clean imports)
import CallToAction from "@/partials/CallToAction";
import FeatureGrid from "@/partials/feat";
import Partners from "@/partials/partners";
import Projects from "@/partials/projects";
import TechStack from "@/partials/techstack";
import Testimonials from "@/partials/Testimonials";
import Vanta from "@/components/vanta";

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

      {/* 1. TOP OF FUNNEL (TOFU): AWARENESS & INTEREST
          Goal: Hook the visitor with the core value proposition. */}
      <section className="section pt-14">
        <div style={{}}>
          <Vanta />
        </div>
      </section>

          <TechStack data={techstack} />
      <Partners />

      <a
      href="https://wa.me/251933955241"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-500"
    >
      <FaWhatsapp size={28} />
  </a>


      <FeatureGrid />

      <Projects />

      <Testimonials data={testimonial} />




      <CallToAction data={callToAction} />

    </>
  );
};

export default Home;
