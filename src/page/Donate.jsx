import Footer from "../components/footer";
import Navbar from "../components/navbar";
import DonateSection from "../layouts/donate";
// const LazyDonateSection = React.lazy(() => import("../layouts/donate"));

const Donate = () => {
  return (
    <>
      <Navbar />
      {/* <React.Suspense fallback={<div>...Loading</div>}>
        <LazyDonateSection />
      </React.Suspense> */}
      <DonateSection />
      <Footer />
    </>
  );
};

export default Donate;
