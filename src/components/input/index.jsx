import * as React from "react";

import { Eye, EyeSlash, Lock } from "@phosphor-icons/react";

const InputField = ({ type, title, name, placeholder, register, icon }) => {
  return (
    <div className="relative">
      <label htmlFor={name} className="text-sm font-medium text-dark-1">
        {title}
      </label>
      <i className="absolute left-0 bottom-2">{icon}</i>
      <input
        {...register(name, {
          required: true,
          maxLength: {
            value: 50,
            message: "Username or email too long",
          },
          pattern: { value: /^[a-zA-Z.!@#$%^&*-=_+ ]+$/i, message: "Please input true username or email." },
        })}
        type={type}
        id={name}
        className="input_form"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

const InputPasswordField = ({ title, name, placeholder, register }) => {
  const [isVisible, setVisible] = React.useState(false);

  return (
    <div className="relative">
      <label htmlFor={name} className="text-sm font-medium text-dark-1">
        {title}
      </label>
      <i className="absolute left-0 bottom-2">
        <Lock size={24} weight="bold" />
      </i>
      <input
        {...register(name, {
          required: true,
          minLength: {
            value: 8,
            message: "Password Too Short",
          },
          maxLength: {
            value: 25,
            message: "Password Too Long",
          },
        })}
        type={isVisible ? "text" : "password"}
        id={name}
        name={name}
        placeholder={placeholder}
        className="input_form"
        required
      />
      <button type="button" className="absolute right-0 p-1 bottom-1 bg-light-1" onClick={() => setVisible(!isVisible)}>
        {isVisible ? <Eye size={24} weight="bold" /> : <EyeSlash size={24} weight="bold" />}
      </button>
    </div>
  );
};

export { InputField, InputPasswordField };
