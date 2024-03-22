import * as React from "react";

import { useLogin, useLoginGoogle } from "../../features/authentication";

import { useForm } from "react-hook-form";

import { google } from "../../assets/icons";

import { Envelope } from "@phosphor-icons/react";

import AuthBackgroundLayout from "../../layouts/authentication";

import Icon from "../../components/icon";
import { Button, Links } from "../../components/button";
import { InputField, InputPasswordField } from "../../components/input";
import Loading from "../../components/loader";

const Link = (
  <Links ariaLabel="navigate-register" to="/register" intent="secondary" className="!no-underline !text-sm">
    Register here!
  </Links>
);

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const { mutate, isPending } = useLogin();

  const { data } = useLoginGoogle();

  const onSubmit = (data) => {
    const { email_login: email, password_login: password } = data;
    const body = { email, password };
    mutate(body);
  };

  const handleButtonLoginGoogle = (e) => {
    e.preventDefault();
    window.location.href = data;
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ email_login: "", password_login: "" });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <AuthBackgroundLayout>
      <div className="card_form">
        {isPending ? (
          <Loading height={100} width={100} />
        ) : (
          <>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4 space-y-4">
              <h5 className="text-2xl font-bold text-center text-dark-1">Sign in</h5>
              <menu className="space-y-2 text-sm text-center text-dark-1">
                <li>If you don`t have an account to login</li>
                <li>You can {Link}</li>
              </menu>

              <InputField
                register={register}
                type="email"
                title="Email"
                name="email_login"
                placeholder="Enter your email address"
                icon={<Envelope size={24} weight="bold" />}
              />
              {errors.email_login && <small className="text-red-600">{errors.email_login?.message}</small>}

              <InputPasswordField register={register} title="Password" name="password_login" placeholder="Enter your Password" />
              {errors.password_login && <small className="text-red-600">{errors.password_login?.message}</small>}

              <div className="flex justify-end">
                <Links to="/forgot-password" intent="noUnderline" className="!text-xs hover:text-primary-1">
                  Forgot Password?
                </Links>
              </div>

              <Button ariaLabel="submit-form" type="submit" intent="secondary" className="!w-full !mt-8">
                Login
              </Button>
              <p className="font-semibold text-center">OR</p>
            </form>
            <Button ariaLabel="sign-in-google" onClick={handleButtonLoginGoogle} intent="google">
              <Icon src={google} description="google" />
              Sign in with Google
            </Button>
          </>
        )}
      </div>
    </AuthBackgroundLayout>
  );
};

export default LoginPage;

{
  /* <div className="flex items-center">
  <input id="remember" type="checkbox" className="w-4 h-4 accent-primary-1" />
  <label htmlFor="remember" className="ml-2 text-xs font-medium text-dark-1">
    Remember me
  </label>
</div>; */
}
