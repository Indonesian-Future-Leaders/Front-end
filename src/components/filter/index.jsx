import { cva } from "class-variance-authority";

const filter = cva("filter", {
  variants: {
    intent: {
      primary: "from-filter-2 to-filter-1",
      secondary: "from-primary-1 from-0% via-transparent via-80% to-light-1 to-100%",
      default: "from-dark-fade to-light-fade",
    },
  },
  defaultVariants: {
    intent: "default",
  },
});

const Filter = ({ intent, className, ...props }) => {
  return (
    <figcaption
      className={`${filter({
        intent,
        className,
      })} absolute left-0 top-0 w-full h-full bg-gradient-to-t`}
      {...props}
    />
  );
};

export default Filter;
