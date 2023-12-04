import { useEffect } from "react";

import { useRegistration } from "../features/authentication";

import { useForm } from "react-hook-form";

import { Envelope, User } from "@phosphor-icons/react";

import { Button, Links } from "../components/button";
import { InputField, InputPasswordField } from "../components/input";
import Background from "../components/background";
import Loading from "../components/loader";

const Link = (
  <Links to="/login" intent="secondary" className="!no-underline !text-sm">
    Login here!
  </Links>
);

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const { mutate, isPending } = useRegistration();

  const onSubmit = (data) => {
    const { email_register: email, username_register: username, password_register: password, confirmPassword_register: password_confirmation } = data;
    const body = {
      email,
      username,
      password,
      password_confirmation,
    };
    mutate(body);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ email_register: "", username_register: "", password_register: "", confirmPassword_register: "" });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <Background>
      <div className="card_form">
        {isPending ? (
          <Loading height={100} width={100} />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <h5 className="text-2xl font-bold text-center text-dark-1">Sign Up</h5>
            <menu className="space-y-2 text-sm text-center text-dark-1">
              <li>If you already have an account register</li>
              <li>You can {Link}</li>
            </menu>

            <InputField
              register={register}
              type="email"
              title="Email"
              name="email_register"
              placeholder="Enter your email address"
              icon={<Envelope size={24} weight="bold" />}
            />
            {errors.email_register && <small className="text-red-600">{errors.email_register?.message}</small>}

            <InputField
              register={register}
              type="text"
              title="Username"
              name="username_register"
              placeholder="Enter your username"
              icon={<User size={24} weight="bold" />}
            />
            {errors.username_register && <small className="text-red-600">{errors.username_register?.message}</small>}

            <InputPasswordField register={register} title="Password" name="password_register" placeholder="Enter your Password" />
            {errors.password_register && <small className="text-red-600">{errors.password_register?.message}</small>}

            <InputPasswordField register={register} title="Confirm Password" name="confirmPassword_register" placeholder="Confirm your Password" />
            {errors.confirmPassword_register && <small className="text-red-600">{errors.confirmPassword_register?.message}</small>}

            <Button type="submit" intent="secondary" className="!w-full !mt-8">
              Register
            </Button>
          </form>
        )}
      </div>
    </Background>
  );
};

export default Register;
