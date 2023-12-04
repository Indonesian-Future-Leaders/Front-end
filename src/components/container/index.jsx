import { LazyMotion, domAnimation, m } from "framer-motion";

const Container = ({ className, children }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div className={`max-w-container-1 w-full mx-auto my-16 px-4 sm:px-8 ${className ?? ""}`}>{children}</m.div>
    </LazyMotion>
  );
};

export default Container;
