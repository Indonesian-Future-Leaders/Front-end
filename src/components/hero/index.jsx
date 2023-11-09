import Container from "../container";
import Filter from "../filter";
import Image from "../image";

const Hero = ({ type, title, description, image }) => {
  const HeroWithText = () => (
    <Image src={image} className="min-h-500 md:min-h-700">
      <Filter intent="primary" />
      <Container className="space-y-6 z-1 !my-8 md:!my-16 text-light-1">
        <h1 className="text-2xl font-semibold sm:text-4xl md:text-6xl">{title}</h1>
        <p className="text-lg font-medium leading-relaxed sm:text-xl md:text-2xl">{description}</p>
      </Container>
    </Image>
  );

  const HeroNoText = () => {
    return (
      <>
        <Image src={image} className="min-h-300">
          <Filter intent="primary" />
        </Image>
        <Container className="text-dark-1 text-center !my-8">
          <h1 className="text-4xl font-bold text-primary-1">{title}</h1>
          <p className="mt-4 text-lg leading-relaxed">{description}</p>
        </Container>
      </>
    );
  };

  return type === "text" ? <HeroWithText /> : <HeroNoText />;
};

export default Hero;
