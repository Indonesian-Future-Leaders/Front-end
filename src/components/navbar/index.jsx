import React from "react";
import { useLocation } from "react-router-dom";
import { logo_ifl } from "../../assets";
import { List, X } from "@phosphor-icons/react";
import { Button, Links } from "../button";
import Image from "../image";

const listMenu = [
  { title: "Events", path: "/events" },
  { title: "About Us", path: "/about" },
  { title: "Buy & Donate", path: "/shop" },
];

const Navbar = () => {
  const pathname = useLocation().pathname;

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 640 && setOpenNav(false));
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar_child">
        <a href="/" className="block cursor-pointer z-30">
          <Image src={logo_ifl} className="!w-32 h-16" />
        </a>

        <button
          className="relative text-center text-xs sm:hidden z-20"
          onClick={() => setOpenNav(!openNav)}
          type="button"
        >
          {openNav ? <X size={36} /> : <List size={36} />}
        </button>

        <ul className={`navbar_field ${openNav ? "left-0" : "left-[-200%]"}`}>
          {listMenu.map((item, index) => (
            <Links
              key={index}
              to={item.path}
              intent="underline"
              className={`${
                item.path === pathname ? "before:w-full text-light-2" : "before:w-0 text-light-1"
              }`}
            >
              {item.title}
            </Links>
          ))}
          <li className="text-xl font-medium p-1 relative group">
            <Button size="medium">DONATE</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
