import * as React from "react";

import { useNavigate } from "react-router-dom";

import { useForgotPassword } from "../features/authentication";

import { useForm } from "react-hook-form";

import { ArrowCircleLeft, Envelope } from "@phosphor-icons/react";

import { Button } from "../components/button";
import { InputField } from "../components/input";
import Background from "../components/background";
import Loading from "../components/loader";

const ForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const navigate = useNavigate();

  const { mutate, isPending } = useForgotPassword();

  const onSubmit = (data) => {
    const { email_forgot_password: email } = data;
    const body = { email };
    mutate(body);
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ email_forgot_password: "" });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <Background>
      <div className="card_form">
        {isPending ? (
          <Loading height={100} width={100} />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="relative flex justify-center">
              <Button onClick={() => navigate(-1)} className="font-bold !p-1 absolute left-0">
                <ArrowCircleLeft size={24} weight="bold" />
              </Button>
              <h5 className="text-2xl font-bold text-dark-1">Forgot Password</h5>
            </div>

            <InputField
              register={register}
              type="email"
              title="Email"
              name="email_forgot_password"
              placeholder="Enter your email address"
              icon={<Envelope size={24} weight="bold" />}
            />
            {errors.email_forgot_password && <small className="text-red-600">{errors.email_forgot_password?.message}</small>}

            <Button type="submit" intent="secondary" className="!w-full !mt-8">
              Submit
            </Button>
          </form>
        )}
      </div>
    </Background>
  );
};

export default ForgotPasswordPage;
