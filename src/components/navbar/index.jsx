import * as React from "react";
import { Link } from "react-router-dom";

import { LazyLoadComponent } from "react-lazy-load-image-component";

import { logotext } from "../../assets/icons";

import { CaretDown, List, X } from "@phosphor-icons/react";

import { Button, Links } from "../button";
import Image from "../image";

const navList = [
  { title: "About Us", path: "/about" },
  { title: "Buy & Donate", path: "/" },
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
    <LazyLoadComponent>
      <nav className="navbar">
        <menu className="navbar_child">
          <Link to="/" className="z-30 block cursor-pointer">
            <Image src={logotext} className="!w-32 h-12 !bg-contain" />
          </Link>

          <button className="relative z-20 text-xs text-center md:hidden" onClick={() => setOpenNav(!openNav)} type="button">
            {openNav ? <X size={36} /> : <List size={36} />}
          </button>

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
      </nav>
    </LazyLoadComponent>
  );
};

export default Navbar;
