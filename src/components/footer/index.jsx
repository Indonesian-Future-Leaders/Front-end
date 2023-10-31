import { Envelope, Phone } from "@phosphor-icons/react";
import Container from "../container";
import Image from "../image";
import { instagram, linkedin, logo_ifl, twitter } from "../../assets";

const Footer = () => {
  return (
    <footer className="bg-primary-1">
      <Container className="!my-0 py-8">
        <div className="flex justify-between flex-wrap gap-4">
          <div className="flex flex-col gap-3">
            <span className="flex gap-1 sm:gap-2 text-light-1">
              <Envelope size={24} weight="bold" />
              <h6 className="font-medium text-sm sm:text-base">testing.5@gmail.com</h6>
            </span>
            <span className="flex gap-1 sm:gap-2 text-light-1">
              <Phone size={24} weight="bold" />
              <h6 className="font-medium text-sm sm:text-base">+62 813 3410 5663</h6>
            </span>
          </div>
          <a href="/" className="flex items-center md:pl-8">
            <Image src={logo_ifl} className="!w-28 h-12 sm:!w-32 sm:h-14" />
          </a>
          <div className="flex gap-4 items-center">
            <a href="#" className="social_icon">
              <Image src={instagram} className="!w-4 h-4 sm:h-6 sm:!w-6" />
            </a>
            <a href="#" className="social_icon">
              <Image src={linkedin} className="!w-4 h-4 sm:h-6 sm:!w-6" />
            </a>
            <a href="#" className="social_icon">
              <Image src={twitter} className="!w-4 h-4 sm:h-6 sm:!w-6" />
            </a>
          </div>
        </div>
        <div className="flex justify-between mt-4 sm:mt-10 flex-wrap gap-4">
          <h6 className="font-medium text-sm sm:text-base text-light-1">
            Jl. Kembang Turi No.18, RT.02/RW.04, Jatimulyo, Kec. Lowokwaru
          </h6>
          <h6 className="font-medium text-sm sm:text-base text-light-1">
            COPYRIGHT &copy; 2023 INDONESIA FUTURE LEADERS
          </h6>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
