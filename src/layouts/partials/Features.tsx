"use client";

import Link from "next/link";
import { FaLaptopCode, FaMobileAlt, FaTools } from "react-icons/fa";
import { GoRocket } from "react-icons/go";
import { motion, Variants } from "framer-motion";
import { VscTools } from "react-icons/vsc";
import { CiMobile3 } from "react-icons/ci";
import { LiaHandshake } from "react-icons/lia";
import { PiCodeThin } from "react-icons/pi";

interface Feature {
  title: string;
  content: string;
  icon?: React.ReactNode;
  button: { enable: boolean; label: string; link: string };
}

interface FeaturesGridProps {
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    title: "Custom Software",
    content:
      "Build experiences, not just apps. Our custom software transforms ideas into intuitive, high-performing digital solutions.",
    icon: <PiCodeThin className="text-6xl mb-6" />,
    button: { enable: true, label: "Discover", link: "#" },
  },
  {
    title: "Web & Mobile Apps",
    content:
      "Seamless experiences across devices. We craft web and mobile apps that users love and remember.",
    icon: <CiMobile3 className="text-6xl mb-6" />,
    button: { enable: true, label: "Explore", link: "#" },
  },
  {
    title: "Startup Support",
    content:
      "Launch faster, grow smarter. Affordable solutions that help startups scale efficiently without compromising quality.",
    icon: <GoRocket className="text-6xl mb-6" />,
    button: { enable: true, label: "Start Now", link: "#" },
  },
  {
    title: "Technical Consultation",
    content:
      "Guiding you to success. Our expert advice ensures your systems are optimized and your business processes excel.",
    icon: <LiaHandshake className="text-6xl mb-6" />,
    button: { enable: true, label: "Get Advice", link: "#" },
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function FeaturesGrid({ features = defaultFeatures }: FeaturesGridProps) {
  return (
    <section className="section-lg py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">Innovative Solutions</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          We provide forward-thinking technical solutions that empower startups and small businesses to innovate and scale.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="group relative flex flex-col justify-between p-12 border  bg-white text-gray-900 cursor-pointer transform transition-all duration-500 hover:bg-primary/80"
            variants={cardVariants}
            style={{
              clipPath: "polygon(0 0, calc(100% - 80px) 0, 100% 80px, 100% 100%, 0 100%)",
            }}
          >
            {/* Transparent number */}
            <div className="absolute bottom-4 right-4 text-[12rem] font-bold text-gray-300 opacity-10 pointer-events-none select-none">
              {`0${index + 1}`}
            </div>

            {/* Icon */}
            {feature.icon && (
              <div className="flex justify-center mb-6 text-gray-400 group-hover:text-white transition-colors duration-500">
                {feature.icon}
              </div>
            )}

            {/* Title */}
            <h3 className="text-3xl font-semibold mb-6 text-center group-hover:text-white transition-colors duration-500">
              {feature.title}
            </h3>

            {/* Content */}
            <p className="text-center mb-8 text-gray-700 group-hover:text-white dark:text-gray-300 transition-colors duration-500">
              {feature.content}
            </p>

            {/* Button */}
            {feature.button.enable && (
              <Link
                href={feature.button.link}
                className="mt-auto inline-block px-6 py-3 rounded-full border border-gray-300 group-hover:border-white group-hover:bg-white group-hover:text-primary transition-all duration-500"
              >
                {feature.button.label}
              </Link>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
