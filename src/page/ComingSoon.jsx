import { image_comsoon } from "../assets";
import Filter from "../components/filter";
import Footer from "../components/footer";
import Image from "../components/image";
import Navbar from "../components/navbar";

const ComingSoon = () => {
  return (
    <>
      <Navbar />
      <Image src={image_comsoon} className="gap-4 !justify-center text-light-1 min-h-700">
        <Filter intent="primary" />
        <h1 className="text-5xl font-bold z-1">COMING SOON</h1>
        <p className="text-2xl font-medium z-1">STAY TUNED!</p>
      </Image>
      <Footer />
    </>
  );
};

export default ComingSoon;
