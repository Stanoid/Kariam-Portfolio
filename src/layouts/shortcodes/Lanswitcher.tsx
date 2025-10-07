"use client";

import { usePathname, useRouter } from "next/navigation";

const LanguageSwitcher = ({ lang }: { lang: "en" | "ar" }) => {
  const pathname = usePathname();
  const router = useRouter();

  if (!pathname) return null;

  const toggleLang = () => {
    if (lang === "ar") {
      router.push(pathname.replace(/^\/ar/, "/en"));
    } else {
      router.push("/ar" + pathname.replace(/^\/en/, ""));
    }
  };

  return (
    <button
      onClick={toggleLang}
      className="px-4 py-2 bg-primary text-white rounded-lg"
    >
      {lang === "ar" ? "English" : "عربي"}
    </button>
  );
};

export default LanguageSwitcher;
