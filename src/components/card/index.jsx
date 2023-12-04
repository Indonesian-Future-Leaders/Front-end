import Image from "../image";
import { Button } from "../button";
import { LazyMotion, domAnimation, m } from "framer-motion";

const Card = ({ className, type, path, category, title, desc, ...props }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.article className={`${className ?? ""} card`} {...props}>
        <Image src={path} className="w-full md:max-w-xs overflow-hidden rounded-sm min-h-300">
          {type === "blog" && <h6 className="absolute top-0 right-0 p-2 text-sm font-medium bg-dark-fade text-light-1 rounded-es-lg">{category}</h6>}
        </Image>
        <h2 className="text-xl font-semibold text-primary-1">{title}</h2>
        <p className="leading-snug">{desc}</p>
        {type === "blog" ? null : (
          <Button intent="outline" size="small" className="px-4 rounded-full mx-auto">
            Donate Now
          </Button>
        )}
      </m.article>
    </LazyMotion>
  );
};

export default Card;
