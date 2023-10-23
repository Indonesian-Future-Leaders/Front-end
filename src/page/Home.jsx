import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Data, Header, Artikel, Action, Programs, Shop } from "../layouts";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
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
