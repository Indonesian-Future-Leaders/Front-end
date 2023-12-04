import { LazyMotion, domAnimation, m } from "framer-motion";

const Image = ({ className, src, children, ...props }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.figure
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: { duration: 0.4 } }}
        style={{
          backgroundImage: `url(${src})`,
        }}
        className={`${className ?? ""} w-full bg-cover bg-no-repeat bg-center flex flex-col items-center justify-end relative overflow-hidden`}
        {...props}
      >
        {children}
      </m.figure>
    </LazyMotion>
  );
};

export default Image;
