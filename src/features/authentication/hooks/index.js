import API from "../../../libs/api";
import SweatAlert from "../../../utils/sweet-alert";

const MESSAGE_TEMPLATE = "There was an error in authentication, please try again";

export const register = async (body) => {
  return await API.post("/auth/register", body)
    .then((response) => {
      SweatAlert(response.data?.message, "success");
    })
    .catch((error) => {
      const { email, username, password, detail } = error.response.data.error;
      const message = email || username || password || detail;
      SweatAlert(message[0] || MESSAGE_TEMPLATE, "error");
    });
};

export const login = async (body) => {
  return await API.post("/auth/login", body)
    .then(async (response) => {
      const isError = response.data?.error?.email || response.data?.error?.password;
      if (isError) {
        SweatAlert(isError[0], "error");
        return;
      }

      localStorage.setItem("token", response.data?.data?.token?.token?.access_token);
      SweatAlert(response.data?.message, "success");

      setTimeout(() => {
        window.location.href = `/`;
      }, 2200);
    })
    .catch((error) => {
      console.log(error);
      const message = error.response?.data?.error_detail || MESSAGE_TEMPLATE;
      SweatAlert(message, "error");
    });
};

export const resend = async (body) => {
  return await API.post("/auth/email/resend", body)
    .then((response) => {
      if (response.status === 200) {
        SweatAlert(response.data?.message, "error");
        return;
      }
      SweatAlert(response.data?.message, "success");
    })
    .catch((error) => {
      const message = error.response.data?.error?.email[0] || MESSAGE_TEMPLATE;
      SweatAlert(message, "error");
    });
};

export const logout = async () => {
  return await API.post("/auth/logout")
    .then((response) => {
      SweatAlert(response.data?.message, "success");
      localStorage.clear();
      setTimeout(() => {
        window.location.href = `/login`;
      }, 2200);
    })
    .catch((error) => {
      const message = error.response?.data?.error_detail || MESSAGE_TEMPLATE;
      SweatAlert(message, "error");
    });
};

export const forgotPassword = async (body) => {
  return await API.post("/auth/password/email", body)
    .then((response) => {
      SweatAlert(response.data?.message, "success");
    })
    .catch((error) => {
      const message = error.response?.data?.message;
      SweatAlert(message, "error");
    });
};

export const resetPassword = async (body) => {
  return await API.post("/auth/password/reset", body)
    .then((response) => {
      SweatAlert(`${response.data?.message} and go back to main page`, "success");
    })
    .catch((error) => {
      const message = error.response?.data?.error;
      SweatAlert(message, "error");
    });
};

export const refreshToken = async () => {
  localStorage.removeItem("token");
  return await API.get("/auth/refresh-token")
    .then((response) => {
      localStorage.setItem("token", response.data?.token);
      return response.data;
    })
    .catch((error) => {
      const message = error.response?.data?.message;
      SweatAlert(message, "error");
    });
};

export const loginWithGoogle = async () => {
  return await API.get("/auth/google")
    .then((response) => {
      return response.data?.auth_url;
    })
    .catch(() => {
      SweatAlert(MESSAGE_TEMPLATE, "error");
    });
};
