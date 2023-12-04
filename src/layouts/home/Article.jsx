import { article, raising_awareness_cfd } from "../../assets";

import Image from "../../components/image";
import Filter from "../../components/filter";
import Container from "../../components/container";
// import { Links } from "../../components/button";
import { Link } from "react-router-dom";
import { otherArticle } from "../../static/article";

const Article = () => {
  const id = "a4daf741-a667-4fc4-b9b0-5b80b9614367";
  return (
    <>
      <Image src={article} className="min-h-700 md:min-h-1000">
        <Filter intent="secondary" />
      </Image>
      <div className="py-4 bg-primary-1 text-dark-1">
        <Container className="flex flex-col gap-8 md:flex-row">
          <Link to={`/blog/${id}`} className="cursor-pointer flex-1 duration-300 hover:scale-105 shadow-xl">
            <Image src={raising_awareness_cfd} className="relative p-8 min-h-400 md:min-h-full">
              <Filter />
              <h1 className="text-2xl font-bold text-light-1 z-1">Raising Awareness at CFD Ijen Malang</h1>
            </Image>
          </Link>
          <div className="flex flex-col justify-between flex-1 gap-4">
            {otherArticle.map((item, index) => {
              const { category, heading, image } = item;
              return (
                <Link to="/coming-soon" key={index} className="flex overflow-hidden rounded bg-light-1 duration-300 hover:scale-105 shadow-xl">
                  <div className="p-4 flex flex-col gap-4 justify-center">
                    <h1 className="text-xl font-bold">{category}</h1>
                    <p className="text-sm font-medium">{heading}</p>
                  </div>
                  <Image src={image} className="max-w-100 md:max-w-200 w-full min-h-fit" />
                </Link>
              );
            })}
            {/* <div className="text-end">
              <Links to="/blog">Read More</Links>
            </div> */}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Article;
