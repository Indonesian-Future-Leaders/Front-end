import { useMutation, useQuery } from "@tanstack/react-query";
import { forgotPassword, login, loginWithGoogle, logout, register, resend, resetPassword } from "../hooks";

export const useRegistration = () => {
  return useMutation({
    mutationFn: (body) => {
      const registrationResponse = register(body);
      return registrationResponse;
    },
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (body) => {
      const loginResponse = login(body);
      return loginResponse;
    },
  });
};

export const useResendEmail = () => {
  return useMutation({
    mutationFn: (body) => {
      const resendResponse = resend(body);
      return resendResponse;
    },
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: () => {
      const logoutResponse = logout();
      return logoutResponse;
    },
  });
};

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: (body) => {
      const forgotPasswordResponse = forgotPassword(body);
      return forgotPasswordResponse;
    },
  });
};

export const useResetPassword = () => {
  return useMutation({
    mutationFn: (body) => {
      const resetPasswordResponse = resetPassword(body);
      return resetPasswordResponse;
    },
  });
};

export const useLoginGoogle = () => {
  return useQuery({
    queryKey: ["getUrlLoginGoogle"],
    queryFn: async () => {
      const responseLoginWithGoogle = await loginWithGoogle();
      return responseLoginWithGoogle || "";
    },
  });
};
