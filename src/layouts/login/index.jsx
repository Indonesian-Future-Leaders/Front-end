import { useForm } from "react-hook-form";

import { google } from "../../assets/icons";
import { head } from "../../assets";

import { Envelope } from "@phosphor-icons/react";

import Image from "../../components/image";
import Filter from "../../components/filter";
import { Button, Links } from "../../components/button";
import { InputField, InputPasswordField } from "../../components/input";

const Link = () => (
  <Links to="/register" intent="secondary" className="!no-underline !text-sm">
    Register here!
  </Links>
);

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <Image src={head} className="min-h-screen !bg-bottom !justify-center p-4">
      <Filter intent="primary" />
      <div className="card_form">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <h5 className="text-2xl font-bold text-center text-dark-1">Sign in</h5>
          <menu className="space-y-2 text-sm text-center text-dark-1">
            <li>If you don`t have an account to login</li>
            <li>
              You can <Link />
            </li>
          </menu>

          <InputField
            register={register}
            type="email"
            title="Email"
            name="email_login"
            placeholder="Enter your email address"
            icon={<Envelope size={24} weight="bold" />}
          />

          <InputPasswordField register={register} title="Password" name="password_login" placeholder="Enter your Password" />

          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4" />
              </div>
              <label htmlFor="remember" className="ml-2 text-xs font-medium text-dark-1">
                Remember me
              </label>
            </div>
            <Links intent="noUnderline" className="!text-xs">
              Forgot Password?
            </Links>
          </div>

          <Button type="submit" intent="secondary" className="!w-full !mt-8">
            Login
          </Button>
          <p className="font-semibold text-center">OR</p>
          <Button type="submit" intent="secondary" className="!bg-dark-1 hover:!bg-gray-900 flex items-center gap-2 mx-auto">
            <Image src={google} className="!w-5 !h-5" />
            Sign in with Google
          </Button>
        </form>
      </div>
    </Image>
  );
};

export default Login;
