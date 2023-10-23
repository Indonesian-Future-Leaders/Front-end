import { cva } from "class-variance-authority";

const filter = cva("filter", {
  variants: {
    intent: {
      primary:
        "bg-gradient-to-t from-[#03055e25] to-[#0096C725] absolute left-0 top-0 w-full h-full",
      secondary:
        "bg-gradient-to-t from-primary-3 from-5% via-transparent via-50% to-light-1 to-100% absolute left-0 top-0 w-full h-full",
      default:
        "bg-gradient-to-t from-[#000000d9] to-[#f8f9fa10] absolute left-0 top-0 w-full h-full",
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
