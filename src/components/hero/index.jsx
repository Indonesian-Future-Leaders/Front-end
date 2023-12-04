import Container from "../container";
import Filter from "../filter";
import Image from "../image";

const Hero = ({ type, title, description, image }) => {
  const HeroWithText = () => (
    <Image src={image} className="min-h-500">
      <Filter intent="primary" />
      <Container className="space-y-6 z-1 !my-8 md:!my-16 text-light-1">
        <h1 className="text-xl font-bold sm:text-3xl md:text-5xl">{title}</h1>
        <p className="text-sm font-medium leading-relaxed text-justify sm:text-lg md:text-xl">{description}</p>
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
          <h1 className="text-2xl sm:text-4xl font-bold text-primary-1">{title}</h1>
          <p className="mt-4 text-sm sm:text-lg leading-relaxed">{description}</p>
        </Container>
      </>
    );
  };

  return type === "text" ? <HeroWithText /> : <HeroNoText />;
};

export default Hero;
