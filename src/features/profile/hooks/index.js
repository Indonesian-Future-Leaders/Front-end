import API from "../../../libs/api";
import reloadPage from "../../../utils/reloadPage";
import SweatAlert, { SweatAlertWithContent } from "../../../utils/sweet-alert";

const MESSAGE_TEMPLATE = "There was an error when provide data, please check again";

export const getProfile = async () => {
  return await API.get("/profile")
    .then((response) => {
      const data = response?.data?.data;
      return data;
    })
    .catch(() => {
      SweatAlertWithContent("Your session is about to time out. Do you want to extend your current session?");
    });
};

export const editProfile = async (body) => {
  return await API.put("/profile/edit", body)
    .then((response) => {
      SweatAlert(response.data?.message, "success");
      reloadPage(2200);
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

export const getAllRoles = async () => {
  return await API.get("/admin/role").then((response) => {
    const data = response.data?.data;
    return data;
  });
};

export const getAllUsers = async () => {
  return await API.get("/admin/user").then((response) => {
    const data = response.data?.data;
    return data;
  });
};

export const getUserById = async (userId) => {
  return await API.get(`/admin/user/id/${userId}`).then((response) => {
    const data = response.data?.data;
    return data;
  });
};

export const editUserByAdmin = async (body) => {
  return await API.put(`/admin/user/${body.id}`, body)
    .then((response) => {
      const data = response.data?.data;
      SweatAlert(response.data?.message, "success");
      reloadPage(2200);
      return data;
    })
    .catch((error) => {
      if (error.response.status === 404) {
        SweatAlert(error.response?.data?.message, "error");
        return;
      }
      SweatAlert(error.response?.data?.message, "error");
    });
};

export const deleteUserByAdmin = async (userId) => {
  return await API.delete(`/admin/user/${userId}`)
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
