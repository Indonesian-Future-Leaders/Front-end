import * as React from "react";

import { head_program, profile_picture } from "../../assets";

import Container from "../../components/container";
import Image from "../../components/image";
import Filter from "../../components/filter";
// CameraPlus
import { Envelope, User, IdentificationCard, PencilSimple, PhoneCall, AddressBook } from "@phosphor-icons/react";
import { Button } from "../../components/button";
import Loading from "../../components/loader";

const ProfileSection = ({ data, mutate, isPending, mutateAboutMe, isAboutMePending }) => {
  const [isInput, setChangeToInput] = React.useState(false);

  const [input, setInput] = React.useState({
    username: "",
    name: "",
    phone_number: "",
    address: "",
    about_me: "",
  });

  const handleChangeInput = (e) => {
    let newState = { ...input };
    let { name, value } = e.target;
    newState[name] = value;
    setInput(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, name, phone_number, address } = input;
    mutate({
      username,
      name,
      phone_number,
      address,
    });
  };

  const handleAboutSubmit = (e) => {
    e.preventDefault();
    const { about_me } = input;
    mutateAboutMe({ about_me });
  };

  const inputFieldValue = [
    { title: "Email", type: "email", value: data?.email, icon: <Envelope size={24} weight="bold" /> },
    {
      title: "Username",
      name: "username",
      type: "text",
      value: data?.username,
      icon: <User size={24} weight="bold" />,
      editIcon: <PencilSimple size={20} weight="bold" />,
    },
    {
      title: "Name",
      name: "name",
      type: "text",
      value: data?.name,
      icon: <IdentificationCard size={24} weight="bold" />,
      editIcon: <PencilSimple size={20} weight="bold" />,
    },
    {
      title: "Phone Number",
      name: "phone_number",
      type: "number",
      value: data?.phone_number,
      icon: <PhoneCall size={24} weight="bold" />,
      editIcon: <PencilSimple size={20} weight="bold" />,
    },
    {
      title: "Address",
      name: "address",
      type: "text",
      value: data?.address,
      icon: <AddressBook size={24} weight="bold" />,
      editIcon: <PencilSimple size={20} weight="bold" />,
    },
  ];

  return (
    <>
      <Image src={data?.background_picture || head_program} className="min-h-400 text-light-1">
        <Filter />
        <Container className="z-1 flex gap-20 !my-8">
          <div className="flex-1 w-full space-y-2">
            <h1 className="text-3xl">Welcome to your profile,</h1>
            <h1 className="text-4xl font-bold tracking-wide">{data?.name}</h1>
          </div>
          {/* <button>
            <CameraPlus size={36} weight="bold" />
          </button> */}
        </Container>
      </Image>

      <Container className="container_profile_section">
        <div className="flex-1 w-full max-w-sm shadow-lg">
          <Image
            src={data?.profile_picture || profile_picture}
            className="min-h-400 w-full !bg-slate-300 !flex-row !items-end !justify-between p-4 text-light-1"
          >
            <Filter />
            <h1 className="text-2xl font-bold z-1">{data?.username}</h1>
            {/* <button className="z-1">
              <CameraPlus size={28} weight="bold" />
            </button> */}
          </Image>
          <div className="px-4 pt-2 pb-4 space-y-2">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold uppercase text-primary-1">About</h1>
              <Button className="!p-1" onClick={() => setChangeToInput((prevState) => !prevState)}>
                <PencilSimple size={24} weight="bold" />
              </Button>
            </div>
            {isInput ? (
              <>
                {isAboutMePending ? (
                  <Loading height={50} width={50} />
                ) : (
                  <form onSubmit={handleAboutSubmit} className="space-y-2">
                    <textarea
                      id="message"
                      rows="5"
                      className="block p-2.5 w-full text-sm leading-relaxed text-dark-1 bg-light-1 rounded-lg border border-gray-300 outline-primary-1"
                      defaultValue={data?.about_me}
                      onChange={handleChangeInput}
                      name="about_me"
                    ></textarea>
                    <Button type="submit" intent="secondary" className="!text-sm">
                      Save Changes
                    </Button>
                  </form>
                )}
              </>
            ) : (
              <p className="text-sm leading-6 text-justify">{data?.about_me}</p>
            )}
          </div>
        </div>
        <div className="flex-1 w-full">
          <h1 className="text-3xl font-bold text-center text-primary-1 sm:text-start">PROFILE</h1>
          {isPending ? (
            <Loading height={100} width={100} />
          ) : (
            <form onSubmit={handleSubmit}>
              <menu className="mt-4 space-y-4">
                {inputFieldValue.map((item, index) => {
                  const { title, name, type, value, icon, editIcon } = item;
                  return (
                    <li key={index} className="relative">
                      <label htmlFor={title} className="text-lg font-medium text-dark-1">
                        {title}
                      </label>
                      <i className="absolute left-0 bottom-2">{icon}</i>
                      {title === "Email" && <input type={type} id={title} className="font-medium input_form" value={value} readOnly />}
                      {title !== "Email" && (
                        <input
                          onChange={handleChangeInput}
                          type={type}
                          id={title}
                          name={name}
                          placeholder={title}
                          className="font-medium input_form"
                          defaultValue={value}
                        />
                      )}
                      {title !== "Email" && <span className="absolute right-0 px-1 py-2 bottom-1 bg-light-1">{editIcon}</span>}
                    </li>
                  );
                })}
                <Button intent="secondary" className="ms-auto">
                  Save Changes
                </Button>
              </menu>
            </form>
          )}
        </div>
      </Container>
    </>
  );
};

export default ProfileSection;
