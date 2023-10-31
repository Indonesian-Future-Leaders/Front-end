import Image from "../../components/image";
import { head_blog } from "../../assets";
import Filter from "../../components/filter";
import Container from "../../components/container";

const HeadDonate = () => {
  return (
    <>
      <Image src={head_blog} className="min-h-500 md:min-h-700 relative !bg-bottom">
        <Filter intent="primary" />
      </Image>
      <Container className="text-dark-1 text-center !my-8">
        <h1 className="text-dark-1 font-bold text-4xl">
          Your <span className="text-primary-1">Donation</span> Matters
        </h1>
        <p className="mt-4 text-lg leading-snug">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cumque consequuntur
          expedita cupiditate nobis. Reprehenderit dolores iure dolor error voluptate, a impedit
          quod illum quasi, quo aspernatur adipisci distinctio aperiam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Accusantium magni optio aliquam, officiis quisquam debitis
          sit recusandae iusto cum qui!
        </p>
      </Container>
    </>
  );
};

export default HeadDonate;
