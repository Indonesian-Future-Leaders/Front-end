import { useForm } from "react-hook-form";

import { useGetProfile } from "../../features/profile";
import { useAddDonationForCampaign } from "../../features/donation";

import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import PaymentDonate from "../../layouts/donate/PaymentDonate";

const PaymentDonatePage = () => {
  const { register, handleSubmit } = useForm();

  const { data: dataProfile } = useGetProfile();

  const { mutate, isPending } = useAddDonationForCampaign();

  return (
    <>
      <Navbar />
      <PaymentDonate mutate={mutate} isPending={isPending} register={register} dataProfile={dataProfile} handleSubmit={handleSubmit} />
      <Footer />
    </>
  );
};

export default PaymentDonatePage;
