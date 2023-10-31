import { cva } from "class-variance-authority";
import { Link } from "react-router-dom";

const button = cva("button", {
  variants: {
    intent: {
      primary: "bg-light-1 text-primary-1 rounded-3xl hover:bg-light-2",
      secondary: "text-light-1 rounded-3xl hover:bg-primary-2",
      navigation: "!text-lg text-light-1 scale-100 hover:text-light-2 hover:scale-110",
      outline:
        "bg-transparent text-primary-1 border-2 border-primary-1 hover:bg-primary-1 hover:text-light-1",
      outlineSecondary:
        "bg-transparent text-light-1 border-2 border-light-1 hover:bg-light-1 hover:text-primary-1",
      underline:
        "bg-light-1 !shadow-none border-none before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-0 before:transition-all before:h-1 before:bg-primary-1 hover:before:w-1/2 hover:text-primary-1",
    },
    size: {
      small: "text-sm py-1 px-2",
      medium: "text-xs sm:text-sm py-2 md:text-base px-4",
      large: "text-lg sm:text-xl py-2 px-6 md:text-2xl md:py-4 md:px-8",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

const link = cva("link", {
  variants: {
    intent: {
      primary: "text-light-1 hover:text-light-2 underline",
      secondary: "text-primary-1 hover:text-primary-2 underline",
      navigation: "text-light-1 scale-100 hover:text-light-2 hover:scale-110 py-2",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

export const Button = ({ className, intent, size, ...props }) => (
  <button
    className={`${button({
      intent,
      size,
      className,
    })} transition-all duration-300 shadow-sm font-medium cursor-pointer w-max relative`}
    {...props}
  />
);

export const Links = ({ className, intent, ...props }) => (
  <Link
    className={`${link({
      intent,
      className,
    })} text-lg transition-all duration-300 font-medium cursor-pointer w-max relative`}
    {...props}
  />
);
