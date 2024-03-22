import { article, raising_awareness_cfd } from "../../assets";

import Background from "../../components/background";
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
      <Background src={article} className="min-h-700 md:min-h-1000">
        <Filter intent="secondary" />
      </Background>
      <div className="py-4 bg-primary-1 text-dark-1">
        <Container className="flex flex-col gap-8 lg:flex-row">
          <Link to={`/blog/${id}`} aria-label="navigate-blog" className="flex-1 duration-300 shadow-xl cursor-pointer hover:scale-105">
            <Background src={raising_awareness_cfd} className="relative p-8 min-h-400 lg:min-h-full">
              <Filter />
              <h1 className="text-2xl font-bold text-light-1 z-1">Raising Awareness at CFD Ijen Malang</h1>
            </Background>
          </Link>
          <div className="flex flex-col justify-between flex-1 gap-4">
            {otherArticle.map((item, index) => {
              const { category, heading, image } = item;
              return (
                <Link
                  to="/coming-soon"
                  key={index}
                  aria-label="navigate-blog"
                  className="flex justify-between overflow-hidden duration-300 rounded shadow-xl bg-light-1 hover:scale-105"
                >
                  <div className="flex flex-col justify-center gap-4 p-4">
                    <h1 className="text-xl font-bold">{category}</h1>
                    <p className="text-sm font-medium">{heading}</p>
                  </div>
                  <div className="w-full max-w-200">
                    <Image src={image} className="w-full h-full" description={heading} />
                  </div>
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
