import API from "../../../libs/api";
import SweatAlert from "../../../utils/sweet-alert";

const MESSAGE_TEMPLATE = "There was an error when provide data, please check again";

export const getProfile = async () => {
  return await API.get("/profile")
    .then((response) => {
      const data = response?.data?.data;
      return data;
    })
    .catch(() => {
      SweatAlert(MESSAGE_TEMPLATE, "error");
    });
};

export const updateProfile = async (body) => {
  return await API.put("/profile/edit", body)
    .then((response) => {
      SweatAlert(response.data?.message, "success");
      setTimeout(() => {
        window.location.reload();
      }, 2200);
    })
    .catch((error) => {
      if (error.response.status === 422) {
        SweatAlert(error.response?.data?.error.username[0], "error");
        return;
      }
      const message = error.response?.data?.message || MESSAGE_TEMPLATE;
      SweatAlert(message, "error");
    });
};
