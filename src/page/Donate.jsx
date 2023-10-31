import Footer from "../components/footer";
import Navbar from "../components/navbar";
import FieldDonate from "../layouts/donate/FieldDonate";
import HeadDonate from "../layouts/donate/HeadDonate";

const Donate = () => {
  return (
    <>
      <Navbar />
      <HeadDonate />
      <FieldDonate />
      <Footer />
    </>
  );
};

export default Donate;
