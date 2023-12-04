import Container from "../../../components/container";
import Image from "../../../components/image";
import formatDate from "../../../utils/formatDate";

const SingleBlog = ({ id, heading, author, image, description, topic, conclusion, date }) => {
  return (
    <section key={id}>
      <Container className="!my-0 !mt-16">
        <Image src={image} className="min-h-300 sm:min-h-500 md:min-h-600" />
      </Container>
      <Container className="max-w-container-2 text-dark-1 leading-loose !mt-4">
        <div className="pb-4 mb-4 space-y-6 tracking-wide border-b-4 border-b-gray-200">
          <h1 className="text-3xl font-bold md:text-4xl">{heading}</h1>
          <menu className="flex justify-between">
            <h1 className="text-lg font-bold">{author}</h1>
            <p className="font-medium text-gray-500">{formatDate(date)}</p>
          </menu>
        </div>
        <div className="space-y-4 text-justify">
          {description?.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        {topic?.map((item, index) => {
          const { subheading, description, image } = item;
          const descSlice = description?.slice(1, description.length);
          return (
            <div key={index} className="mt-8 space-y-8 text-justify">
              <h1 className="text-2xl font-bold tracking-wide">{subheading}</h1>
              <div className={`flex gap-4 md:flex-row flex-col-reverse ${index % 2 !== 0 && "flex-col md:flex-row-reverse"}`}>
                <p className="flex-1">{description[0]}</p>
                <Image src={image} className="flex-1 w-full max-w-full md:max-w-sm min-h-200 md:min-h-fit" />
              </div>
              <p>{descSlice}</p>
            </div>
          );
        })}
        <div className="mt-8 space-y-4 text-justify">
          <h1 className="text-2xl font-bold tracking-wide">Penutup</h1>
          <p>{conclusion}</p>
        </div>
      </Container>
    </section>
  );
};

export default SingleBlog;
