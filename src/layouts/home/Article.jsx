import { artikel, content } from "../../assets";

import Image from "../../components/image";
import Filter from "../../components/filter";
import Container from "../../components/container";
import { Links } from "../../components/button";

const Article = () => {
  return (
    <>
      <Image src={artikel} className="min-h-700 md:min-h-1000">
        <Filter intent="secondary" />
      </Image>
      <div className="py-4 bg-primary-1 text-dark-1">
        <Container className="flex flex-col gap-8 md:flex-row">
          <Image src={content} className="relative flex-1 p-8 min-h-400">
            <Filter />
            <h3 className="text-2xl font-bold text-light-1 z-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
          </Image>
          <div className="flex flex-col justify-between flex-1 gap-4">
            {Array(3)
              .fill()
              .map((_, index) => (
                <div key={index} className="flex overflow-hidden rounded bg-light-1">
                  <div className="p-4 space-y-2">
                    <h4 className="text-xl font-bold">Category</h4>
                    <p className="text-sm font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
                  </div>
                  <Image src={content} className="max-w-xs" />
                </div>
              ))}
            <div className="text-end">
              <Links to="/blog">Read More</Links>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Article;
