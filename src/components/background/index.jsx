import { LazyMotion, domAnimation, m } from "framer-motion";
import { background_login_register } from "../../assets";
import { logotext } from "../../assets/icons";
import Filter from "../filter";
import { Icon } from "../icon";
import Image from "../image";

const Background = ({ children }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <Image src={background_login_register} className="min-h-screen !bg-bottom !justify-center p-4">
          <Icon src={logotext} size="logo" className="z-1 absolute left-8 top-8 hidden md:block" />
          <Filter intent="primary" />
          {children}
        </Image>
      </m.section>
    </LazyMotion>
  );
};

export default Background;
