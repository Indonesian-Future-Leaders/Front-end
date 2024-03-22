import { useGetProfile, useEditProfile } from "../../features/profile";
import { useGetDonationByUserId } from "../../features/donation";

import ProfileSection from "../../layouts/profile";
import DonationHistory from "../../layouts/donate/DonationHistory";

import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Loading from "../../components/loader";

const ProfilePage = () => {
  const { data: dataProfile, isLoading: profileLoading } = useGetProfile();

  const { data: dataDonation, isLoading: donationLoading } = useGetDonationByUserId(dataProfile?.id);

  const { mutate, isPending } = useEditProfile();

  const { mutate: mutateAboutMe, isPending: isAboutMePending } = useEditProfile();

  return (
    <>
      <Navbar />
      {profileLoading ? (
        <Loading className="min-h-screen" height={200} width={200} />
      ) : (
        <ProfileSection
          mutateAboutMe={mutateAboutMe}
          isAboutMePending={isAboutMePending}
          mutate={mutate}
          isPending={isPending}
          dataProfile={dataProfile}
        />
      )}
      <DonationHistory dataDonation={dataDonation} donationLoading={donationLoading} />
      <Footer />
    </>
  );
};

export default ProfilePage;
