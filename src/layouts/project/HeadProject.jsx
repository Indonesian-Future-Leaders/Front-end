import { head_project } from "../../assets";
import Container from "../../components/container";
import Filter from "../../components/filter";
import Image from "../../components/image";
const HeadProject = () => {
  return (
    <Image src={head_project} className="min-h-500 md:min-h-700 flex items-end relative !bg-bottom">
      <Filter intent="primary" />
      <Container className="flex flex-col gap-6 z-1">
        <h1 className="text-light-1 font-bold text-2xl sm:text-4xl md:text-6xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </h1>
        <h3 className="text-light-1 font-medium text-lg sm:text-xl md:text-3xl">
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen book.
        </h3>
      </Container>
    </Image>
  );
};

export default HeadProject;
