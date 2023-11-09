import { LazyMotion, domAnimation, m } from "framer-motion";

const Container = ({ className, children }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.section className={`max-w-1124 w-full mx-auto my-16 px-4 sm:px-8 ${className}`}>{children}</m.section>
    </LazyMotion>
  );
};

export default Container;
