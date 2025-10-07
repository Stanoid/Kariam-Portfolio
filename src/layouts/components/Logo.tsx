"use client";

import config from "@/config/config.json";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Logo = ({ src }: { src?: string }) => {
  // destructuring items from config object
  const {
    logo,
    logo_darkmode,
    logo_width,
    logo_height,
    logo_text,
    title,
  }: {
    logo: string;
    logo_darkmode: string;
    logo_width: any;
    logo_height: any;
    logo_text: string;
    title: string;
  } = config.site;

  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const resolvedLogo =
    mounted && (theme === "dark" || resolvedTheme === "dark")
      ? logo_darkmode
      : logo;
  const logoPath = src ? src : resolvedLogo;

  return (
    <Link href="/" className="navbar-brand inline-block">
      {logoPath ? (
        <Image
        width={0}
        height={0}
        sizes="100vw"
          src={logoPath}
          alt={title}
          priority
          style={{
            height: "auto",
            width: logo_width.replace("px", "") + "px",
          }}
        />
      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </Link>
  );
};

export default Logo;
