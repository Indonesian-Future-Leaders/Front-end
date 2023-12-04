import { AppWindow, ProjectorScreenChart, Users } from "@phosphor-icons/react";

import { Button } from "../../components/button";
import Container from "../../components/container";
import { Link } from "react-router-dom";

const dataList = [
  {
    icon: <Users weight="bold" size={32} />,
    title: "50+",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, aperiam? Lorem ipsum dolor sit amet.",
  },
  {
    icon: <ProjectorScreenChart weight="bold" size={32} />,
    title: "30",
    desc: "Cum culpa eos debitis et laborum esse placeat saepe magni amet ab! Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ipsam.",
  },
  {
    icon: <AppWindow weight="bold" size={32} />,
    title: "20+",
    desc: "Distinctio architecto illo error aut vero illum, aspernatur dolor. Lorem ipsum dolo sit amet consectetur adipisicing elit.",
  },
];

const Data = () => {
  return (
    <Container className="flex flex-col gap-8 md:flex-row md:gap-16 text-dark-1">
      <menu className="flex-1 space-y-4 sm:space-y-8">
        <h1 className="text-2xl font-bold sm:text-4xl text-primary-1">Indonesian Future Leaders Chapter Malang</h1>
        <p className="text-base font-normal md:text-lg text-justify">
          IFL Chapter Malang menjadi cabang ke-6 yang merupakan chapter terakhir setelah Bandung, Yogyakarta, Bali, Bulukumba, dan Lampung. IFL
          Chapter Malang merupakan inisiatif dari 8 anak muda yang resmi dibentuk tanggal 21 September 2014 sebagai organisasi kepemudaan di bawah
          naungan IFL Pusat.
        </p>
        <Link to="/about" className="block" aria-label="navigate-about-us">
          <Button intent="outline" className="px-8 uppercase">
            Learn More About Us
          </Button>
        </Link>
      </menu>
      <menu className="flex-1 space-y-4 sm:space-y-8">
        {dataList.map((item, index) => (
          <li key={index} className="flex gap-2 sm:gap-4 align-items-start">
            <i className="block mt-1 text-primary-1">{item.icon}</i>
            <div className="space-y-2">
              <h1 className="text-xl font-semibold sm:text-3xl text-primary-1">{item.title}</h1>
              <p className="text-base font-normal sm:text-lg">{item.desc}</p>
            </div>
          </li>
        ))}
      </menu>
    </Container>
  );
};

export default Data;
