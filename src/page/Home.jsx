import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Programs from "../layouts/home/Programs";
import Article from "../layouts/home/Article";
import Shop from "../layouts/home/Shop";
import Action from "../layouts/home/Action";
import Head from "../layouts/home/Head";
import Data from "../layouts/home/Data";

const Home = () => {
  return (
    <>
      <Navbar />
      <Head />
      <Data />
      <Article />
      <Action />
      <Programs />
      <Shop />
      <Footer />
    </>
  );
};

export default Home;
