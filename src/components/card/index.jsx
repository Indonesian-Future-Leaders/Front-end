import Image from "../image";
import { Button } from "../button";

const Card = ({ className, type, path, category, title, desc, ...props }) => {
  return (
    <div
      className={`${className} text-dark-1 flex flex-col justify-between items-center gap-4 p-4 shadow-lg max-w-sm rounded-lg`}
      {...props}
    >
      <Image src={path} className="min-h-300 max-w-xs relative rounded-sm overflow-hidden">
        <h6 className="font-medium text-sm absolute top-0 right-0 p-2 bg-black/50 text-light-1 rounded-es-lg">
          {category}
        </h6>
      </Image>
      <h2 className="text-2xl text-primary-3 font-semibold">{title}</h2>
      <p className="">{desc}</p>
      <Button intent="outline" size="small" className="rounded-full px-4">
        {type === "blog" ? "Read More" : "Donate Now"}
      </Button>
    </div>
  );
};

export default Card;
