import React from "react";
import { Link } from "react-router-dom";
import { logo_ifl } from "../../assets";
import { CaretDown, List, X } from "@phosphor-icons/react";
import { Button, Links } from "../button";
import Image from "../image";

const Navbar = () => {
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
          <div className="relative group">
            <Button intent="navigation" className="!px-0 !shadow-none flex gap-1 items-center">
              Events <CaretDown size={16} className="group-hover:rotate-180 transition-all mt-1" />
            </Button>
            <div className="dropdown_content">
              <Link to="/program">
                <Button intent="outline" size="small" className="!w-full !rounded !px-4">
                  Program
                </Button>
              </Link>
              <Link to="/project">
                <Button intent="outline" size="small" className="!w-full !rounded !px-4">
                  Project
                </Button>
              </Link>
            </div>
          </div>

          <Links to="/about" intent="navigation">
            About Us
          </Links>

          <Links to="/" intent="navigation">
            Buy & Donate
          </Links>

          <Link to="/donate">
            <Button size="medium">DONATE</Button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
