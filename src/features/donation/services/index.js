import { useMutation, useQuery } from "@tanstack/react-query";
import { addDonationForCampaign, getDonationByCampaignId, getDonationByUserId } from "../hooks";

export const useGetDonationByCampaignId = (campaignId) => {
  return useQuery({
    queryKey: ["getDonationByCampaignId", campaignId],
    queryFn: async () => {
      const responseGetDonationByCampaignId = await getDonationByCampaignId(campaignId);
      return responseGetDonationByCampaignId || "";
    },
  });
};

export const useGetDonationByUserId = (userId) => {
  return useQuery({
    queryKey: ["getDonationByUserId", userId],
    queryFn: async () => {
      const responseGetDonationByUserId = await getDonationByUserId(userId);
      return responseGetDonationByUserId || "";
    },
  });
};

export const useAddDonationForCampaign = () => {
  return useMutation({
    mutationFn: (body) => {
      const responseAddDonationForCampaign = addDonationForCampaign(body);
      return responseAddDonationForCampaign;
    },
  });
};
