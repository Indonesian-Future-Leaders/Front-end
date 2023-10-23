import Image from "../../components/image";
import Filter from "../../components/filter";
import { artikel, content } from "../../assets";
import Container from "../../components/container";
import { Links } from "../../components/button";

const Artikel = () => {
  return (
    <>
      <Image src={artikel} className="min-h-500 md:min-h-700 relative !bg-center">
        <Filter intent="secondary" />
      </Image>
      <div className="bg-primary-3 py-4 text-dark-1">
        <Container className="flex flex-col md:flex-row gap-8">
          <Image
            src={content}
            className="relative min-h-300 md:min-h-300 flex items-end p-8 flex-1"
          >
            <Filter />
            <h3 className="text-light-1 font-bold z-1 text-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </h3>
          </Image>
          <div className="flex-1 flex gap-4 justify-between flex-col">
            {Array(3)
              .fill()
              .map((_, index) => (
                <div key={index} className="flex bg-light-1 rounded overflow-hidden">
                  <div className="p-4">
                    <h4 className="font-bold text-xl">Category</h4>
                    <p className="font-medium">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor
                      sit amet.
                    </p>
                  </div>
                  <Image src={content} />
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

export default Artikel;
