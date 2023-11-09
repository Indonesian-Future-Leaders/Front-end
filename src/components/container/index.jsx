import { LazyLoadComponent } from "react-lazy-load-image-component";

import { motion } from "framer-motion";

const Container = ({ className, children }) => {
  return (
    <LazyLoadComponent>
      <motion.section
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
        viewport={{ once: true }}
        className={`max-w-1124 w-full mx-auto my-16 px-4 sm:px-8 ${className}`}
      >
        {children}
      </motion.section>
    </LazyLoadComponent>
  );
};

export default Container;
