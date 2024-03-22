<<<<<<< HEAD
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
=======
const Image = ({ className, src, description, ...props }) => (
  <img loading="lazy" src={src} alt={`image ${description}`} className={`${className ?? ""} transition-all duration-300`} {...props} />
);
>>>>>>> 7b9098b190604f11c817c013f31a26b42235d565

export default Image;
