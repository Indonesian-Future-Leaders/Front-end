import * as React from "react";

import { useNavigate, useParams } from "react-router-dom";

import { default_background_profile, default_user_profile } from "../../assets";

// CameraPlus
import { Envelope, User, IdentificationCard, PencilSimple, PhoneCall, AddressBook } from "@phosphor-icons/react";

import Container from "../../components/container";
import Filter from "../../components/filter";
import { Button } from "../../components/button";
import Loading from "../../components/loader";
import Background from "../../components/background";

const ProfileSection = ({ dataProfile, mutate, isPending, mutateAboutMe, isAboutMePending }) => {
  const [isInput, setChangeToInput] = React.useState(false);
  const [isErrorAbout, setErrorAbout] = React.useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (id !== dataProfile.id) {
      navigate("/");
    }
  }, [id, navigate, dataProfile.id]);

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
    if (about_me.split("").length > 300) {
      setErrorAbout(true);
      return;
    }
    setErrorAbout(false);

    mutateAboutMe({ about_me });
  };

  const inputFieldValue = [
    { title: "Email", type: "email", value: dataProfile?.email, icon: <Envelope size={24} weight="bold" /> },
    {
      title: "Username",
      name: "username",
      type: "text",
      value: dataProfile?.username,
      icon: <User size={24} weight="bold" />,
      editIcon: <PencilSimple size={20} weight="bold" />,
    },
    {
      title: "Name",
      name: "name",
      type: "text",
      value: dataProfile?.name,
      icon: <IdentificationCard size={24} weight="bold" />,
      editIcon: <PencilSimple size={20} weight="bold" />,
    },
    {
      title: "Phone Number",
      name: "phone_number",
      type: "number",
      value: dataProfile?.phone_number,
      icon: <PhoneCall size={24} weight="bold" />,
      editIcon: <PencilSimple size={20} weight="bold" />,
    },
    {
      title: "Address",
      name: "address",
      type: "text",
      value: dataProfile?.address,
      icon: <AddressBook size={24} weight="bold" />,
      editIcon: <PencilSimple size={20} weight="bold" />,
    },
  ];

  return (
    <>
      <Background src={dataProfile?.background_picture || default_background_profile} className="min-h-400 text-light-1">
        <Filter />
        <Container className="z-1 flex gap-20 !my-8">
          <div className="flex-1 w-full space-y-2">
            <h1 className="text-3xl">Welcome to your profile,</h1>
            <h1 className="text-4xl font-bold tracking-wide">{dataProfile?.name || dataProfile?.username}</h1>
          </div>
          {/* <button>
            <CameraPlus size={36} weight="bold" />
          </button> */}
        </Container>
      </Background>

      <Container className="container_profile_section">
        <div className="flex-1 w-full max-w-sm mx-auto shadow-lg">
          <Background
            src={dataProfile?.profile_picture || default_user_profile}
            className="min-h-400 w-full !bg-slate-300 !flex-row !items-end !justify-between p-4 text-light-1"
          >
            <Filter />
            <h1 className="text-2xl font-bold z-1">{dataProfile?.username}</h1>
            {/* <button className="z-1">
              <CameraPlus size={28} weight="bold" />
            </button> */}
          </Background>
          <div className="px-4 pt-2 pb-4 space-y-2">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold uppercase text-primary-1">About</h1>
              <Button ariaLabel="edit-description" className="!p-1" onClick={() => setChangeToInput((prevState) => !prevState)}>
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
                      defaultValue={dataProfile?.about_me}
                      onChange={handleChangeInput}
                      name="about_me"
                    ></textarea>
                    {isErrorAbout && (
                      <span className="text-xs text-red-500 duration-300">
                        Sorry, your description exceeds the maximum character limit of 300 characters.
                      </span>
                    )}
                    <Button ariaLabel="submit-description" type="submit" intent="secondary" className="!text-sm">
                      Save Changes
                    </Button>
                  </form>
                )}
              </>
            ) : (
              <p className="text-sm leading-6 text-justify">{dataProfile?.about_me}</p>
            )}
            {!isInput && !dataProfile.about_me && (
              <p className="text-sm leading-6 text-gray-500">Input your description by pressing the edit button!</p>
            )}
          </div>
        </div>
        <div className="flex-1 w-full min-h-500">
          <h1 className="text-3xl font-bold text-center text-primary-1 sm:text-start">PROFILE</h1>
          {isPending ? (
            <Loading height={100} width={100} className="min-h-400" />
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
                <Button ariaLabel="submit-profile" intent="secondary" className="ms-auto">
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
