import * as React from "react";
import { Link } from "react-router-dom";

import { LazyMotion, m, domAnimation } from "framer-motion";

import { CaretDown, List, X } from "@phosphor-icons/react";

import { logotext } from "../../assets/icons";
import { Button, Links } from "../button";
import { Icon } from "../icon";

const navList = [
  { title: "About Us", path: "/about" },
  { title: "Buy & Donate", path: "/#shop" },
  { title: "Donate", path: "/donate" },
];

const EventsDropdown = () => {
  return (
    <div className="relative group">
      <Button intent="navigation" className="!px-0 !shadow-none gap-1">
        Events <CaretDown size={16} className="mt-1 transition-all group-hover:rotate-180" />
      </Button>
      <div className="dropdown_content">
        <i className="absolute w-4 h-4 rotate-45 -translate-x-1/2 -top-1 left-1/2 bg-light-1"></i>
        <Link to="/program">
          <Button intent="outline" size="small" className="!w-full !rounded !px-6">
            Program
          </Button>
        </Link>
        <Link to="/project">
          <Button intent="outline" size="small" className="!w-full !rounded !px-6">
            Project
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 768 && setOpenNav(false));
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <m.nav className="navbar">
        <menu className="navbar_child">
          <Link to="/" className="z-30 block cursor-pointer">
            <Icon src={logotext} size="logo" />
          </Link>

          <Button size="small" className="z-20 md:hidden" onClick={() => setOpenNav(!openNav)}>
            {openNav ? <X size={36} /> : <List size={36} />}
          </Button>

          <ul className={`navbar_field ${openNav ? "left-0" : "left-[-200%]"}`}>
            <EventsDropdown />

            {navList.map((item, index) => (
              <Links key={index} to={item.path} intent="navigation">
                {item.title}
              </Links>
            ))}

            <Link to="/login">
              <Button size="medium">SIGN IN</Button>
            </Link>
          </ul>
        </menu>
      </m.nav>
    </LazyMotion>
  );
};

export default Navbar;
