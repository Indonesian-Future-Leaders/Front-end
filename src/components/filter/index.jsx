import { cva } from "class-variance-authority";

const filter = cva("filter", {
  variants: {
    intent: {
      primary: "bg-gradient-to-t from-filter-2 to-filter-1 absolute left-0 top-0 w-full h-full",
      secondary:
        "bg-gradient-to-t from-primary-1 from-5% via-transparent via-50% to-light-1 to-100% absolute left-0 top-0 w-full h-full",
      default:
        "bg-gradient-to-t from-dark-fade-1 to-light-fade absolute left-0 top-0 w-full h-full",
    },
  },
  defaultVariants: {
    intent: "default",
  },
});

const Filter = ({ intent, className, ...props }) => {
  return <div className={filter({ intent, className })} {...props} />;
};

export default Filter;
