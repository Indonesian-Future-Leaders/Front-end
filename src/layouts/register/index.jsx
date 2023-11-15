import { useForm } from "react-hook-form";

import { Envelope, User } from "@phosphor-icons/react";

import { Button, Links } from "../../components/button";
import { InputField, InputPasswordField } from "../../components/input";
import Background from "../../components/background";

const Link = () => (
  <Links to="/login" intent="secondary" className="!no-underline !text-sm">
    Login here!
  </Links>
);

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <Background>
      <div className="card_form">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <h5 className="text-2xl font-bold text-center text-dark-1">Sign Up</h5>
          <menu className="space-y-2 text-sm text-center text-dark-1">
            <li>If you already have an account register</li>
            <li>
              You can <Link />
            </li>
          </menu>

          <InputField
            register={register}
            type="email"
            title="Email"
            name="email_register"
            placeholder="Enter your email address"
            icon={<Envelope size={24} weight="bold" />}
          />

          <InputField
            register={register}
            type="text"
            title="Username"
            name="username_register"
            placeholder="Enter your username"
            icon={<User size={24} weight="bold" />}
          />

          <InputPasswordField register={register} title="Password" name="password_register" placeholder="Enter your Password" />

          <InputPasswordField register={register} title="Confirm Password" name="confirmPassword_register" placeholder="Confirm your Password" />

          <Button type="submit" intent="secondary" className="!w-full !mt-8">
            Register
          </Button>
        </form>
      </div>
    </Background>
  );
};

export default Register;
