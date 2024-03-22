import { useMutation, useQuery } from "@tanstack/react-query";
import { addCampaignByAdmin, deleteCampaignByAdmin, editCampaignByAdmin, getAllCampaign, getAllCategories, getCampaignById } from "../hooks";

export const useGetAllCampaign = () => {
  return useQuery({
    queryKey: ["getAllCampaign"],
    queryFn: async () => {
      const responseGetAllCampaign = await getAllCampaign();
      return responseGetAllCampaign || "";
    },
  });
};

export const useGetAllCategories = () => {
  return useQuery({
    queryKey: ["getAllCategories"],
    queryFn: async () => {
      const responseGetAllCategories = await getAllCategories();
      return responseGetAllCategories || "";
    },
  });
};

export const useGetCampaignById = (campaignId) => {
  return useQuery({
    queryKey: ["getCampaignById", campaignId],
    queryFn: async () => {
      const responseGetCampaignById = await getCampaignById(campaignId);
      return responseGetCampaignById || "";
    },
  });
};

export const useAddCampaignByAdmin = () => {
  return useMutation({
    mutationFn: (body) => {
      const responseAddCampaignByAdmin = addCampaignByAdmin(body);
      return responseAddCampaignByAdmin;
    },
  });
};

export const useEditCampaignByAdmin = () => {
  return useMutation({
    mutationFn: (body) => {
      const responseEditCampaignByAdmin = editCampaignByAdmin(body);
      return responseEditCampaignByAdmin;
    },
  });
};

export const useDeleteCampaignByAdmin = () => {
  return useMutation({
    mutationFn: (campaignId) => {
      const responseDeleteCampaignByAdmin = deleteCampaignByAdmin(campaignId);
      return responseDeleteCampaignByAdmin;
    },
  });
};
