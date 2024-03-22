import * as React from "react";

import { CloseMenu } from "../../utils/closeMenu";

import { CaretDown, List } from "@phosphor-icons/react";

// import SearchBar from "../searchbar";
import { Button, Links } from "../button";
import Icon from "../icon";
import Loading from "../loader";

import { default_user_profile } from "../../assets";
import ProfileSkeleton from "../skeleton/ProfileSkeleton";

const ProfilePicture = ({ data, isPopoverOpen, setPopoverOpen, isLoading }) => {
  if (isLoading) {
    return <ProfileSkeleton />;
  }

  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPopoverOpen(!isPopoverOpen)}>
      <Icon src={data?.profile_picture || default_user_profile} className="rounded-full" description="user profile" />
      <div className="flex flex-col justify-between">
        <p className="text-xs font-bold sm:text-sm">{data?.username || ""}</p>
        <p className="text-xs">{data?.role || ""}</p>
      </div>
      <button className={`p-0.5 border rounded-full duration-300 ${isPopoverOpen && "rotate-180"}`}>
        <CaretDown size={16} />
      </button>
    </div>
  );
};

const EventsClickDropdown = ({ isPopoverOpen, handleLogout, setPopoverOpen, isPending, data, isLoading }) => {
  const dropdownRef = React.useRef(null);

  CloseMenu({ setPopoverOpen, dropdownRef });

  return (
    <div ref={dropdownRef} className="relative flex">
      <ProfilePicture data={data} isPopoverOpen={isPopoverOpen} setPopoverOpen={setPopoverOpen} isLoading={isLoading} />
      {isPopoverOpen && (
        <div className="popover">
          {isPending ? (
            <Loading height={50} width={50} />
          ) : (
            <div className="space-y-2">
              <Links className="!px-8" to="/" aria-label="navigate-home" intent="dropdown">
                Home
              </Links>
              <Links className="!px-8" to={`/profile/${data?.id}`} aria-label="navigate-profile" intent="dropdown">
                Profile
              </Links>
              <Button className="!px-8" onClick={handleLogout} intent="logout" size="small" ariaLabel="logout">
                Logout
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const TopBar = ({ openNav, setOpenNav, data, isLoading, mutate, isPending }) => {
  const handleLogout = (e) => {
    e.preventDefault();
    mutate();
  };
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
  return (
    <div className="fixed z-50 w-full duration-300 shadow md:relative bg-light-1 text-dark-1">
      <div className="flex justify-between p-2 mx-4">
        <div className="flex gap-4">
          <Button size="small" className="z-20 lg:hidden" onClick={() => setOpenNav(!openNav)} ariaLabel="list">
            <List size={28} />
          </Button>
          {/* <SearchBar className="hidden sm:block" /> */}
        </div>
        <div className="flex gap-4">
          {/* <Button size="small" className="z-20 hidden md:block" ariaLabel="setting">
            <Gear size={28} />
          </Button> */}
          <EventsClickDropdown
            isPopoverOpen={isPopoverOpen}
            setPopoverOpen={setIsPopoverOpen}
            data={data}
            isLoading={isLoading}
            handleLogout={handleLogout}
            isPending={isPending}
          />
        </div>
      </div>

      {/* <SearchBar className="mx-8 mb-2 sm:hidden" /> */}
    </div>
  );
};

export default TopBar;
