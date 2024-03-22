import { useParams } from "react-router-dom";

import { useGetCampaignById } from "../../features/campaign";
import { useGetDonationByCampaignId } from "../../features/donation";

import SingleDonation from "../../layouts/donate/id";

import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const SingleDonationPage = () => {
  const { id } = useParams();

  const { data: singleDataCampaign } = useGetCampaignById(id);

  const { data: donators } = useGetDonationByCampaignId(singleDataCampaign?.id);
  return (
    <>
      <Navbar />
      <SingleDonation singleDataCampaign={singleDataCampaign} donators={donators?.donations?.length} />
      <Footer />
    </>
  );
};

export default SingleDonationPage;
