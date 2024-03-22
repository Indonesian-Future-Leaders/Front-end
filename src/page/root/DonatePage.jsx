import { useGetAllCampaign } from "../../features/campaign";

import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import DonateSection from "../../layouts/donate";

const DonatePage = () => {
  const { data: campaignData, isLoading } = useGetAllCampaign();

  return (
    <>
      <Navbar />
      <DonateSection campaignData={campaignData} isLoading={isLoading} />
      <Footer />
    </>
  );
};

export default DonatePage;
