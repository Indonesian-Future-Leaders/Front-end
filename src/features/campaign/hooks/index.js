import API from "../../../libs/api";
import reloadPage from "../../../utils/reloadPage";
import SweatAlert from "../../../utils/sweet-alert";

export const getAllCategories = async () => {
  return await API.get("/admin/category").then((response) => {
    const data = response.data?.data;
    return data;
  });
};

export const getAllCampaign = async () => {
  return await API.get("/campaign").then((response) => {
    const data = response.data?.data;
    return data;
  });
};

export const getCampaignById = async (campaignId) => {
  return await API.get(`/campaign/${campaignId}`).then((response) => {
    const data = response.data?.data;
    return data;
  });
};

export const addCampaignByAdmin = async (body) => {
  return await API.post("/admin/campaign", body, { headers: { "Content-Type": "multipart/form-data" } })
    .then((response) => {
      const data = response.data?.data;
      SweatAlert(response.data?.message, "success");
      reloadPage(2200);
      return data;
    })
    .catch((error) => {
      if (error.response.status === 422) {
        SweatAlert(error.response?.data?.message, "error");
        return;
      }
      SweatAlert(error.response?.data?.message, "error");
    });
};

export const editCampaignByAdmin = async (body) => {
  return await API.patch(`/admin/campaign/${body?.id}`, body, { headers: { "Content-Type": "multipart/form-data" } })
    .then((response) => {
      const data = response.data?.data;
      SweatAlert(response.data?.message, "success");
      // reloadPage(2200);
      return data;
    })
    .catch((error) => {
      if (error.response.status === 422) {
        SweatAlert(error.response?.data?.message, "error");
        return;
      }
      SweatAlert(error.response?.data?.message, "error");
    });
};

export const deleteCampaignByAdmin = async (campaignId) => {
  return await API.delete(`/admin/campaign/${campaignId}`)
    .then((response) => {
      const data = response.data?.data;
      SweatAlert(response.data?.message, "success");
      reloadPage(2200);
      return data;
    })
    .catch((error) => {
      if (error.response.status === 404) {
        SweatAlert(error.response?.data?.detail, "error");
        return;
      }
      SweatAlert(error.response?.data?.message, "error");
    });
};
