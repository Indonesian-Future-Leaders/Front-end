import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Data, Artikel, Action, Programs, Shop, Hero } from "../layouts";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Data />
      <Artikel />
      <Action />
      <Programs />
      <Shop />
      <Footer />
    </>
  );
};

export default Home;
