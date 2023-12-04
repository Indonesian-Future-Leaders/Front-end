import Container from "../../../components/container";
import Image from "../../../components/image";
import formatDate from "../../../utils/formatDate";

const SingleBlog = ({ id, heading, author, image, description, topic, conclusion, date }) => {
  return (
    <section key={id}>
      <Container className="!my-0 !mt-16">
        <Image src={image} className="min-h-600" />
      </Container>
      <Container className="max-w-container-2 text-dark-1 leading-loose !mt-4">
        <div className="space-y-6 border-b-4 border-b-gray-200 pb-4 mb-4 tracking-wide">
          <h1 className="font-bold text-4xl">{heading}</h1>
          <div className="flex justify-between">
            <span className="font-bold text-lg">{author}</span>
            <span className="text-gray-500 font-medium">{formatDate(date)}</span>
          </div>
        </div>
        <div className="text-justify space-y-4">
          {description.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        {topic?.map((item, index) => {
          const { subheading, description, image } = item;
          const descSlice = description.slice(1, description.length);
          return (
            <div key={index} className="text-justify space-y-8 mt-8">
              <h1 className="font-bold text-2xl tracking-wide">{subheading}</h1>
              <div className={`flex gap-4 ${index % 2 !== 0 && "flex-row-reverse"}`}>
                <p className="flex-1">{description[0]}</p>
                <Image src={image} className="flex-1 min-h-fit max-w-sm" />
              </div>
              <p>{descSlice}</p>
            </div>
          );
        })}
        <div className="text-justify space-y-4 mt-8">
          <h1 className="font-bold text-2xl tracking-wide">Penutup</h1>
          <p>{conclusion}</p>
        </div>
      </Container>
    </section>
  );
};

export default SingleBlog;
