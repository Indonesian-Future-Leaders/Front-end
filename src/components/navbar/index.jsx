import * as React from "react";

import { Link } from "react-router-dom";

import { useGetProfile } from "../../features/profile";
import { useLogout } from "../../features/authentication";

import { CloseMenu } from "../../utils/closeMenu";

import { CaretDown, List, X } from "@phosphor-icons/react";

import { logo_text } from "../../assets/icons";
import { Button, Links } from "../button";
import Icon from "../icon";
import Loading from "../loader";

const navList = [
  { title: "About Us", path: "/about" },
  { title: "Buy & Donate", path: "/#shop" },
  { title: "Donate", path: "/donate" },
];

const eventsDropdown = (
  <li className="relative group">
    <Button intent="navigation" className="!p-0 !shadow-none gap-1">
      Events <CaretDown size={16} className="mt-1 transition-all group-hover:rotate-180" />
    </Button>
    <div className="dropdown_content">
      <i className="absolute w-4 h-4 rotate-45 -translate-x-1/2 -top-1 left-1/2 bg-light-1"></i>
      <Link to="/program" aria-label="navigate-program">
        <Button intent="outline" size="small" className="!w-full !rounded !px-6">
          Program
        </Button>
      </Link>
      <Link to="/project" aria-label="navigate-program">
        <Button intent="outline" size="small" className="!w-full !rounded !px-6">
          Project
        </Button>
      </Link>
    </div>
  </li>
);

const EventsClickDropdown = ({ data, isPopoverOpen, handleLogout, setPopoverOpen, isPending }) => {
  const dropdownRef = React.useRef(null);
  CloseMenu({ setPopoverOpen, dropdownRef });

  return (
    <li ref={dropdownRef} className="relative">
      <Button onClick={() => setPopoverOpen(!isPopoverOpen)} size="medium">
        {data?.username} <CaretDown size={16} className={`ml-1 transition-all ${isPopoverOpen && "rotate-180"}`} />
      </Button>
      {isPopoverOpen && (
        <div className="popover !top-12">
          {isPending ? (
            <Loading height={50} width={50} />
          ) : (
            <div className="space-y-2">
              <Links className="!px-4" to={`/profile/${data?.id}`} intent="dropdown" aria-label="navigate-profile">
                Profile
              </Links>
              {data?.role === "admin" && (
                <Links className="!px-4" to={`/dashboards?${data?.id}`} intent="dropdown" aria-label="navigate-profile">
                  Dashboard
                </Links>
              )}
              <Button className="!px-4" onClick={handleLogout} intent="logout" size="small">
                Logout
              </Button>
            </div>
          )}
        </div>
      )}
    </li>
  );
};

const Navbar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const [isPopoverOpen, setPopoverOpen] = React.useState(false);

  const navbarRef = React.useRef(null);

  const { data } = useGetProfile();

  const { mutate, isPending } = useLogout();

  const handleLogout = (e) => {
    e.preventDefault();
    mutate();
  };

  React.useEffect(() => {
    if (navbarRef.current == null) return;

    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;
      if (container == null) return;

      setOpenNav(container.clientWidth > 853);
      setPopoverOpen(container.clientWidth > 100000);
      console.log();
    });
    observer.observe(navbarRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <menu className="navbar_child">
        <Link to="/" className="z-30 block cursor-pointer" aria-label="navigate-root-page">
          <Icon src={logo_text} size="logo" description="logo-ifl" />
        </Link>

        <Button size="small" className="z-20 md:hidden" onClick={() => setOpenNav(!openNav)}>
          {openNav ? <X size={36} /> : <List size={36} />}
        </Button>

        <ul className={`navbar_field ${openNav ? "left-0" : "left-[-200%]"}`}>
          {eventsDropdown}

          {navList.map((item, index) => (
            <li key={index} className="transition-all duration-300 scale-100 hover:scale-110">
              <Links to={item.path} intent="navigation">
                {item.title}
              </Links>
            </li>
          ))}

          {data ? (
            <EventsClickDropdown
              data={data}
              isPopoverOpen={isPopoverOpen}
              handleLogout={handleLogout}
              setPopoverOpen={setPopoverOpen}
              isPending={isPending}
            />
          ) : (
            <Link to="/login" aria-label="navigate-sign-in">
              <Button size="medium">SIGN IN</Button>
            </Link>
          )}
        </ul>
      </menu>
    </nav>
  );
};

export default Navbar;
