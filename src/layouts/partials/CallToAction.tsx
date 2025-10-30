import { markdownify } from "@/lib/utils/textConverter";
import { Call_to_action } from "@/types";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: Call_to_action;
}

const CallToAction = ({ data }: { data: PageData }) => {
  if (!data.frontmatter.enable) return null;

  const whatsappLink = "https://wa.me/251933955241";

  return (
    <section className="relative py-24  bg-theme-light dark:bg-darkmode-theme-light overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-[-60px] right-[-40px] w-[300px] h-[300px] bg-primary/5 rounded-3xl rotate-[25deg]" />
      <div className="absolute bottom-[-80px] left-[-60px] w-[250px] h-[250px] bg-gray-200/40 rounded-3xl rotate-[-15deg]" />

      <div className="relative container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="md:flex-1 space-y-6">
          <h2
            dangerouslySetInnerHTML={markdownify(data.frontmatter.title)}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight"
          />
          <p
            dangerouslySetInnerHTML={markdownify(data.frontmatter.description)}
            className="text-gray-700 text-lg md:text-xl max-w-2xl leading-relaxed"
          />

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-10 py-4 bg-primary text-white font-semibold rounded-full shadow-md hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300"
          >
            Chat With Us on WhatsApp
          </a>
        </div>

        {/* Optional accent shapes */}
        <div className="md:flex-1 relative hidden md:block">
          <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-primary/10 rounded-full animate-pulse" />
          <div className="absolute bottom-[-20px] left-[-20px] w-32 h-32 bg-primary/5 rounded-3xl rotate-[15deg]" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
