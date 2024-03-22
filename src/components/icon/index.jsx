import { cva } from "class-variance-authority";

const icon = cva("icon", {
  variants: {
    size: {
      small: "w-6 h-6 sm:h-8 sm:w-8",
      medium: "w-8 h-8 sm:h-10 sm:w-10",
      large: "w-10 h-10 sm:w-12 sm:h-12",
      logo: "w-28 h-14 sm:w-32 sm:h-16",
    },
  },
  defaultVariants: {
    size: "small",
  },
});

const Icon = ({ className, size, src, description, ...props }) => (
  <img
    loading="lazy"
    src={src}
    alt={`Icon ${description}`}
    className={`${icon({
      size,
      className,
    })} transition-all duration-300`}
    {...props}
  />
);
export default Icon;
