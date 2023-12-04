import { useMutation, useQuery } from "@tanstack/react-query";
import { getProfile, updateProfile } from "../hooks";

export const useGetProfile = () => {
  return useQuery({
    queryKey: ["getProfile"],
    queryFn: async () => {
      const responseProfile = await getProfile();
      return responseProfile || "";
    },
  });
};

export const useUpdateProfile = () => {
  return useMutation({
    mutationFn: (body) => {
      const responseUpdateProfile = updateProfile(body);
      return responseUpdateProfile;
    },
  });
};
