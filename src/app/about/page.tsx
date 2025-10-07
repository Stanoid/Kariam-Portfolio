"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface AboutStoryProps {
  locale?: "en" | "ar";
}

const content = {
  en: [
    "Kariam Digital started as a small team with a big dream: to turn bold ideas into meaningful digital experiences across the Gulf.",
    "We began with humble projects, each one a stepping stone, pushing our creativity and problem-solving skills to the limit.",
    "As we grew, so did our vision. Today, we are a full-service digital agency crafting custom software, intuitive platforms, and experiences that delight users.",
    "Every project is more than code—it's a story of transformation, collaboration, and measurable success for our clients.",
    "We believe technology should empower people, simplify lives, and inspire growth. That belief guides every line of code we write.",
    "Through the years, we've partnered with startups, SMEs, and large enterprises, helping them innovate, streamline, and scale.",
    "Our team is a blend of storytellers, designers, and problem-solvers, committed to turning challenges into opportunities and ideas into reality.",
    "Join us and discover how Kariam Digital can help your business thrive in a constantly evolving digital world.",
  ],
  ar: [
    "بدأت كاريام ديجيتال كفريق صغير بحلم كبير: تحويل الأفكار الجريئة إلى تجارب رقمية ملهمة في جميع أنحاء الخليج.",
    "بدأنا بمشاريع متواضعة، كل مشروع كان خطوة تقودنا لتحدي إبداعنا ومهاراتنا في حل المشكلات.",
    "ومع نمو فريقنا، نما رؤيتنا أيضًا. اليوم، نحن وكالة رقمية متكاملة تصنع حلول برمجية مخصصة ومنصات مبتكرة وتجارب تُسعد المستخدمين.",
    "كل مشروع لدينا ليس مجرد كود، بل هو قصة تحول وتعاون ونجاح ملموس لعملائنا.",
    "نؤمن بأن التكنولوجيا يجب أن تمكّن الناس، وتبسط حياتهم، وتلهم النمو. هذا الإيمان يوجه كل سطر نكتبه.",
    "على مر السنين، تعاونّا مع الشركات الناشئة والمتوسطة والكبيرة، لمساعدتهم على الابتكار والتطوير والنمو.",
    "فريقنا مزيج من رواة القصص والمصممين وحلالي المشاكل، ملتزمون بتحويل التحديات إلى فرص والأفكار إلى واقع.",
    "انضموا إلينا واكتشفوا كيف يمكن لكاريام ديجيتال مساعدة أعمالكم على الازدهار في عالم رقمي متغير باستمرار.",
  ],
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.5 } },
};

const paragraphVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const ctaVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function AboutStory({ locale = "en" }: AboutStoryProps) {
  return (
    <section className="section-lg bg-theme-light dark:bg-darkmode-theme-light">
      <div className="container mx-auto">
        <motion.h2
          className="text-center mb-12 text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {locale === "en" ? "Our Story" : "قصتنا"}
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto space-y-8 text-lg leading-relaxed"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {content[locale].map((paragraph, index) => (
            <motion.p key={index} variants={paragraphVariants}>
              {paragraph}
            </motion.p>
          ))}

          {/* Call-to-action */}
          <motion.div
            className="text-center mt-8"
            variants={ctaVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-block bg-theme-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-theme-primary transition-colors"
            >
              {locale === "en" ? "Get in Touch" : "تواصل معنا"}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
