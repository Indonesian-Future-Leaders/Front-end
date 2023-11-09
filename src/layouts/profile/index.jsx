import Hero from "../../components/hero";
import { head_program } from "../../assets";
import Container from "../../components/container";
import Image from "../../components/image";
import { CameraPlus, Envelope, Pencil, User, IdentificationCard } from "@phosphor-icons/react";
import Filter from "../../components/filter";

const ProfileSection = () => {
  const inputFieldValue = [
    { title: "Email", value: "helmyfadlail.5@gmail.com", icon: <Envelope size={24} weight="bold" /> },
    { title: "Username", value: "helmy_fadlail", icon: <User size={24} weight="bold" />, editIcon: <Pencil size={20} weight="bold" /> },
    {
      title: "Name",
      value: "Helmy Fadlail Albab",
      icon: <IdentificationCard size={24} weight="bold" />,
      editIcon: <Pencil size={20} weight="bold" />,
    },
  ];
  return (
    <>
      <Hero image={head_program} />
      <Container className="flex flex-col items-center gap-8 sm:justify-start sm:flex-row">
        <div className="flex-1 w-full max-w-sm">
          <Image className="min-h-300 max-w-xs mx-auto !bg-slate-300 !flex-row !items-end !justify-between p-8 text-light-1 rounded-lg">
            <Filter />
            <h1 className="text-3xl font-bold z-1">Helmy</h1>
            <CameraPlus size={36} weight="bold" className="z-1" />
          </Image>
        </div>
        <div className="flex-1 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-primary-1 sm:text-start">PROFILE</h1>
          <menu className="px-8 mt-4 space-y-4">
            {inputFieldValue.map((item, index) => (
              <li key={index} className="relative">
                <label htmlFor={item.title} className="font-medium text-dark-1">
                  {item.title}
                </label>
                <i className="absolute left-0 bottom-2">{item.icon}</i>
                <input type="text" id={item.title} className="font-medium input_form" defaultValue={item.value} />
                {item.title !== "Email" && <i className="absolute right-0 pl-1 bottom-2 bg-light-1">{item.editIcon}</i>}
              </li>
            ))}
          </menu>
        </div>
      </Container>
    </>
  );
};

export default ProfileSection;
