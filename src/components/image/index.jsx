import { LazyMotion, domAnimation, m } from "framer-motion";

const Images = ({ className, src, children, ...props }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.figure
        style={{
          backgroundImage: `url(${src})`,
        }}
        className={`${className} w-full bg-cover bg-no-repeat bg-center flex flex-col items-center justify-end relative overflow-hidden`}
        {...props}
      >
        {children}
      </m.figure>
    </LazyMotion>
  );
};

export default Images;
