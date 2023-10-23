import { header } from "../../assets";
import { Button } from "../../components/button";
import Container from "../../components/container";
import Filter from "../../components/filter";
import Image from "../../components/image";

const Header = () => {
  return (
    <Image src={header} className="min-h-500 md:min-h-700 flex items-end relative">
      <Filter intent="primary" />
      <Container className="flex flex-col gap-6 z-1">
        <h1 className="text-light-1 font-bold text-2xl sm:text-4xl md:text-6xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </h1>
        <h3 className="text-light-1 font-medium text-lg sm:text-xl md:text-3xl">
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen book.
        </h3>
        <Button intent="outlineSecondary" size="large">
          Donate Now
        </Button>
      </Container>
    </Image>
  );
};

export default Header;
