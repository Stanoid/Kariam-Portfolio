"use client";

import { motion, Variants } from "framer-motion";
import { FaRegLightbulb } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

interface WhyUsProps {
  locale?: "en" | "ar";
}

const features = {
  en: [
    {
      title: "Affordable Solutions",
      description:
        "We provide high-quality software services at prices startups and small businesses can afford.",
      icon: <FaRegLightbulb className="text-4xl text-blue-500 dark:text-blue-400" />,
    },
    {
      title: "Custom Software",
      description:
        "Tailored software solutions designed specifically to meet your business needs.",
      icon: <MdOutlineComputer className="text-4xl text-purple-500 dark:text-purple-400" />,
    },
    {
      title: "Expert Team",
      description:
        "Our team has the experience and technical know-how to bring your ideas to life.",
      icon: <HiOutlineRocketLaunch className="text-4xl text-pink-500 dark:text-pink-400" />,
    },
  ],
  ar: [
    {
      title: "حلول بأسعار مناسبة",
      description:
        "نقدم خدمات برمجية عالية الجودة بأسعار تناسب الشركات الناشئة والصغيرة.",
      icon: <FaRegLightbulb className="text-4xl text-blue-500 dark:text-blue-400" />,
    },
    {
      title: "برمجيات مخصصة",
      description: "حلول برمجية مصممة خصيصًا لتلبية احتياجات عملك.",
      icon: <MdOutlineComputer className="text-4xl text-purple-500 dark:text-purple-400" />,
    },
    {
      title: "فريق خبير",
      description: "لدينا فريق ذو خبرة عالية قادر على تحويل أفكارك إلى واقع.",
      icon: <HiOutlineRocketLaunch className="text-4xl text-pink-500 dark:text-pink-400" />,
    },
  ],
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhyUs: React.FC<WhyUsProps> = ({ locale = "en" }) => {
  const isAr = locale === "ar";

  return (
    <section
      className={`py-20 transition-colors duration-500 ${
        isAr ? "text-right" : "text-left"
      } bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {isAr ? "لماذا تختار كاريام؟" : "Why Choose Kariam?"}
        </motion.h2>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features[locale].map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.04 }}
              className="relative bg-white/80 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
              <div className="absolute -bottom-2 left-0 right-0 mx-auto w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
