import { useGetProfile, useUpdateProfile } from "../features/profile";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ProfileSection from "../layouts/profile";
import Loading from "../components/loader";

const Profile = () => {
  const { data, isLoading } = useGetProfile();

  const { mutate, isPending } = useUpdateProfile();

  const { mutate: mutateAboutMe, isPending: isAboutMePending } = useUpdateProfile();

  return (
    <>
      <Navbar />
      {isLoading ? (
        <Loading className="min-h-screen" height={200} width={200} />
      ) : (
        <ProfileSection mutateAboutMe={mutateAboutMe} isAboutMePending={isAboutMePending} mutate={mutate} isPending={isPending} data={data} />
      )}
      <Footer />
    </>
  );
};

export default Profile;
