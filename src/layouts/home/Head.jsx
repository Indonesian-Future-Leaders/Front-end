import { header } from "../../assets";

import { Button } from "../../components/button";
import Container from "../../components/container";
import Filter from "../../components/filter";
import Image from "../../components/image";

const Hero = () => {
  return (
    <Image src={header} className="min-h-500 md:min-h-700">
      <Filter intent="primary" />
      <Container className="space-y-6 z-1 !my-8 md:!my-16 text-light-1">
        <h1 className="text-2xl font-semibold sm:text-4xl md:text-6xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
        <p className="text-lg font-medium leading-relaxed sm:text-xl md:text-2xl">
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Button intent="outline" size="large" className="!text-light-1 !border-light-1 hover:!bg-light-1 hover:!text-primary-1">
          Donate Now
        </Button>
      </Container>
    </Image>
  );
};

export default Hero;
