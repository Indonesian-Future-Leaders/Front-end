import Background from "../background";
import { Button } from "../button";
import { Link } from "react-router-dom";
import ProgressBar from "../progressbar";

const CategoryLabel = ({ category }) => (
  <h6 className="absolute top-0 right-0 p-2 text-sm font-medium bg-dark-fade text-light-1 rounded-es-lg">{category}</h6>
);

const Card = ({ className, id, type, path, category, title, description, donation_collected, ...props }) => {
  return (
    <article className={`${className ?? ""} card`} {...props}>
      <Background src={path} className="w-full overflow-hidden rounded-sm md:max-w-xs min-h-300">
        {type === "blog" && <CategoryLabel category={category} />}
      </Background>
      {type !== "blog" && <p className="text-xs font-bold">{category}</p>}
      <Link className="cursor-pointer" aria-label="navigate" to={type === "blog" ? `/blog/${id}` : `/donate/${id}`}>
        <h1 className="text-lg font-semibold text-primary-1 line-clamp-2">{title}</h1>
      </Link>
      {type === "blog" && <p className="leading-snug">{description}</p>}
      {type !== "blog" && <ProgressBar target={donation_collected} />}
      {type !== "blog" && (
        <Link className="mx-auto cursor-pointer w-max" aria-label="navigate" to={type === "blog" ? `/blog/${id}` : `/donate/${id}`}>
          <Button intent="outline" size="small" className="px-4 mt-2 rounded-full" ariaLabel={`donate-${category}`}>
            Donate Now
          </Button>
        </Link>
      )}
    </article>
  );
};

export default Card;
