import * as React from "react";

import { head_program } from "../../assets";

import Container from "../../components/container";
import Image from "../../components/image";
import Filter from "../../components/filter";

import { CameraPlus, Envelope, User, IdentificationCard, PencilSimple, Eye, EyeSlash, Lock } from "@phosphor-icons/react";
import { Button } from "../../components/button";

const ProfileSection = () => {
  const [isVisible, setVisible] = React.useState(false);

  const inputFieldValue = [
    { title: "Email", type: "email", value: "helmyfadlail.5@gmail.com", icon: <Envelope size={24} weight="bold" /> },
    {
      title: "Username",
      type: "text",
      value: "helmy_fadlail",
      icon: <User size={24} weight="bold" />,
      editIcon: <PencilSimple size={20} weight="bold" />,
    },
    {
      title: "Name",
      type: "text",
      value: "Helmy Fadlail Albab",
      icon: <IdentificationCard size={24} weight="bold" />,
      editIcon: <PencilSimple size={20} weight="bold" />,
    },
    {
      title: "Password",
      type: isVisible ? "text" : "password",
      value: "albab",
      icon: <Lock size={24} weight="bold" />,
      showPasswordIcon: <Eye size={20} weight="bold" />,
      hidePasswordIcon: <EyeSlash size={20} weight="bold" />,
      editIcon: <PencilSimple size={20} weight="bold" />,
    },
  ];

  return (
    <>
      <Image src={head_program} className="min-h-300 text-light-1">
        <Filter intent="primary" />
        <Container className="z-1 flex gap-20 !my-8">
          <div className="w-full max-w-sm flex-1 hidden sm:block"></div>
          <div className="w-full flex-1 space-y-2">
            <h1 className="text-3xl">Welcome to your profile,</h1>
            <h1 className="text-4xl font-bold tracking-wide">Helmy Fadlail Albab</h1>
          </div>
        </Container>
        <button className="z-1 absolute right-8 bottom-8">
          <CameraPlus size={36} weight="bold" />
        </button>
      </Image>

      <Container className="flex flex-col gap-8 sm:gap-4 md:gap-20 sm:justify-start sm:flex-row !my-0 h-fit sm:min-h-700 md:min-h-600">
        <div className="flex-1 relative w-full max-w-sm">
          <div className="absolute left-0 -top-20 shadow-lg">
            <Image className="min-h-400 !bg-slate-300 !flex-row !items-end !justify-between p-4 text-light-1">
              <Filter />
              <h1 className="text-3xl font-bold z-1">Helmy</h1>
              <button className="z-1">
                <CameraPlus size={28} weight="bold" />
              </button>
            </Image>
            <div className="px-4 pt-2 pb-8 space-y-2">
              <div className="flex justify-between">
                <h1 className="text-2xl text-primary-1 uppercase font-bold">About</h1>
                <button>
                  <PencilSimple size={24} weight="bold" />
                </button>
              </div>
              <p className="text-sm text-justify leading-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum alias corporis aperiam nulla, doloremque dicta adipisci nobis.
                Dolores, eligendi consequuntur aspernatur esse reiciendis obcaecati suscipit minima. Commodi nostrum est odio?
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full max-w-md mt-8">
          <h1 className="text-3xl font-bold text-center text-primary-1 sm:text-start">PROFILE</h1>
          <form action="">
            <menu className="px-8 mt-4 space-y-4">
              {inputFieldValue.map((item, index) => {
                const { title, type, value, icon, showPasswordIcon, hidePasswordIcon, editIcon } = item;
                return (
                  <li key={index} className="relative">
                    <label htmlFor={title} className="font-medium text-dark-1">
                      {title}
                    </label>
                    <i className="absolute left-0 bottom-2">{icon}</i>
                    <input type={type} id={title} className="font-medium input_form" defaultValue={value} />
                    {title === "Password" && (
                      <button type="button" onClick={() => setVisible(!isVisible)} className="absolute right-6 px-2 py-2 bottom-1 bg-light-1">
                        {isVisible ? showPasswordIcon : hidePasswordIcon}
                      </button>
                    )}
                    {title !== "Email" && (
                      <button type="button" className="absolute right-0 px-1 py-2 bottom-1 bg-light-1">
                        {editIcon}
                      </button>
                    )}
                  </li>
                );
              })}
              <Button intent="secondary" className="ms-auto">
                Save Changes
              </Button>
            </menu>
          </form>
        </div>
      </Container>
    </>
  );
};

export default ProfileSection;
