import { cva } from "class-variance-authority";

const icon = cva("icon", {
  variants: {
    size: {
      medium: "w-4 h-4 sm:h-6 sm:w-6",
      large: "w-12 h-8 sm:w-14 sm:h-10",
      logo: "w-28 h-14 sm:w-32 sm:h-16",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export const Icon = ({ className, size, src, ...props }) => (
  <img
    loading="lazy"
    src={src}
    alt="icon"
    className={`${icon({
      size,
      className,
    })} transition-all duration-300`}
    {...props}
  />
);
