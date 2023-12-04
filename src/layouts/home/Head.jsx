import { Link } from "react-router-dom";
import { image_iflta } from "../../assets";

import { Button } from "../../components/button";
import Container from "../../components/container";
import Filter from "../../components/filter";
import Image from "../../components/image";

const Hero = () => {
  return (
    <Image src={image_iflta} className="min-h-400 sm:min-h-500 md:min-h-700">
      <Filter intent="primary" />
      <Container className="space-y-6 z-1 !my-8 md:!my-16 text-light-1">
        <h1 className="text-2xl font-semibold sm:text-4xl md:text-6xl">Empower change with a small act of kindness</h1>
        <p className="text-lg font-medium leading-relaxed sm:text-xl md:text-2xl">
          Your donation can make a big difference. Join us in making a positive impact. Every contribution counts!
        </p>
        <Link to="/donate" className="block" aria-label="navigate-donate">
          <Button intent="outlineTransparent" size="large">
            Donate Now
          </Button>
        </Link>
      </Container>
    </Image>
  );
};

export default Hero;
