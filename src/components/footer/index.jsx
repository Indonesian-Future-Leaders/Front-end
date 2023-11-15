import { LazyMotion, domAnimation, m } from "framer-motion";
import { logotext } from "../../assets/icons";

import Container from "../container";
import { Icon } from "../icon";
import { Links } from "../button";

import { socialIconsList, socialIconsTextList } from "../../static/data";

const Footer = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.footer className="bg-primary-1">
        <Container className="!my-0 py-8">
          <div className="flex flex-wrap justify-between gap-4">
            <menu className="space-y-2">
              {socialIconsTextList.map((item, index) => (
                <a key={index} href={item.path} className="social_icon_text" rel="noreferrer" target="_blank">
                  <Icon src={item.image} />
                  {item.title}
                </a>
              ))}
            </menu>
            <Links to="/" className="flex items-center md:pr-10">
              <Icon src={logotext} size="logo" />
            </Links>
            <menu className="flex items-center gap-4">
              {socialIconsList.map((item, index) => (
                <a key={index} href={item.path} className="social_icon" rel="noreferrer" target="_blank">
                  <Icon src={item.image} />
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
