import { LazyLoadComponent } from "react-lazy-load-image-component";

import { motion } from "framer-motion";

const Image = ({ className, src, children }) => {
  return (
    <LazyLoadComponent>
      <motion.figure
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        viewport={{ once: true }}
        style={{ backgroundImage: `url(${src})` }}
        className={`${className} w-full bg-cover bg-no-repeat bg-center flex flex-col items-center justify-end relative overflow-hidden`}
      >
        {children ? children : null}
      </motion.figure>
    </LazyLoadComponent>
  );
};

export default Image;
