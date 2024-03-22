import API from "../../../libs/api";

export const getDonationByUserId = async (userId) => {
  return await API.get(`/donation/user/${userId}`).then((response) => {
    const data = response.data?.data;
    return data;
  });
};

export const getDonationByCampaignId = async (campaignId) => {
  return await API.get(`/campaign/${campaignId}/donation`).then((response) => {
    const data = response.data?.data;
    return data;
  });
};

export const addDonationForCampaign = async (body) => {
  return await API.post(`/campaign/${body?.id}/donate`, body).then((response) => {
    const data = response.data?.snapToken;
    window.snap.pay(data);
    return data;
  });
};
