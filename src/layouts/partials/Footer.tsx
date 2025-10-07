"use client";

import Logo from "@/components/Logo";
import Social from "@/components/Social";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import social from "@/config/social.json";
import { markdownify } from "@/lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { copyright } = config.params;

  return (
    <footer className="bg-theme-light dark:bg-darkmode-theme-light">
      <div className="container">
        <div className="row items-center py-10">
          <div className="mb-8 text-center lg:col-3 lg:mb-0 lg:text-left">
            <Logo />
          </div>
          <div className="mb-8 text-center lg:col-6 lg:mb-0">
            <ul>
              {menu.footer.map((menu) => (
                <li className="m-3 inline-block" key={menu.name}>
                  <Link
                    href={menu.url}
                    className="text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8 dark:text-orange-300 lg:col-3 lg:mb-0 lg:mt-0 lg:text-right">
            <Social
              source={social.main}
              className="social-icons text-gray-700 hover:text-orange-500 dark:text-orange-400 dark:hover:text-orange-300 transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-border py-7 dark:border-darkmode-border">
        <div className="container text-center text-light dark:text-orange-400">
          <p dangerouslySetInnerHTML={markdownify(copyright)} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
