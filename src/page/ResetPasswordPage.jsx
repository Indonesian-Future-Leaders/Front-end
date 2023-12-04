import * as React from "react";

import { useSearchParams, useNavigate } from "react-router-dom";

import { useResetPassword } from "../features/authentication";

import { useForm } from "react-hook-form";

import { Button } from "../components/button";
import { InputPasswordField } from "../components/input";
import Background from "../components/background";
import Loading from "../components/loader";

const ResetPasswordPage = () => {
  const [searchParams] = useSearchParams();

  const email = searchParams.get("mail");
  const token = searchParams.get("token");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const { mutate, isPending } = useResetPassword();

  const onSubmit = (data) => {
    const { reset_password: password, reset_confirm_password: password_confirmation } = data;
    const body = { token, email, password, password_confirmation };
    mutate(body);
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ reset_password: "", reset_confirm_password: "" });
    }
  }, [isSubmitSuccessful, reset]);

  React.useEffect(() => {
    if (!email && !token) {
      navigate("/forgot-password");
    }
  }, [navigate, email, token]);

  return (
    <Background>
      <div className="card_form">
        {isPending ? (
          <Loading height={100} width={100} />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <h5 className="text-2xl font-bold text-center text-dark-1">Reset Password</h5>

            <InputPasswordField register={register} title="Password" name="reset_password" placeholder="Enter your Password" />
            {errors.reset_password && <small className="text-red-600">{errors.reset_password?.message}</small>}

            <InputPasswordField register={register} title="Confirm Password" name="reset_confirm_password" placeholder="Confirm your Password" />
            {errors.reset_confirm_password && <small className="text-red-600">{errors.reset_confirm_password?.message}</small>}

            <Button type="submit" intent="secondary" className="!w-full !mt-8">
              Submit
            </Button>
          </form>
        )}
      </div>
    </Background>
  );
};

export default ResetPasswordPage;
