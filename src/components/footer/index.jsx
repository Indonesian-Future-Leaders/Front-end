import { Link } from "react-router-dom";

import { logotext } from "../../assets/icons";

import Container from "../container";
import Image from "../image";

import { socialIconsList, socialIconsTextList } from "../../utilities/static/data";
import { LazyMotion, domAnimation, m } from "framer-motion";

const Footer = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.footer className="bg-primary-1">
        <Container className="!my-0 py-8">
          <div className="flex flex-wrap justify-between gap-4">
            <menu className="space-y-2">
              {socialIconsTextList.map((item, index) => (
                <a key={index} href={item.path} className="social_icon_text" rel="noreferrer" target="_blank">
                  <Image src={item.image} className="!w-4 h-4 sm:h-5 sm:!w-5" />
                  {item.title}
                </a>
              ))}
            </menu>
            <Link href="/" className="flex items-center md:pr-10">
              <Image src={logotext} className="!w-32 h-12 !bg-contain" />
            </Link>
            <menu className="flex items-center gap-4">
              {socialIconsList.map((item, index) => (
                <a key={index} href={item.path} className="social_icon" rel="noreferrer" target="_blank">
                  <Image src={item.image} className="!w-4 h-4 sm:h-6 sm:!w-6" />
                </a>
              ))}
            </menu>
          </div>
          <menu className="mt-4 text-center sm:mt-10 text-light-1">
            <li className="text-sm font-medium sm:text-base">COPYRIGHT &copy; 2023 INDONESIA FUTURE LEADERS</li>
          </menu>
        </Container>
      </m.footer>
    </LazyMotion>
  );
};

export default Footer;
