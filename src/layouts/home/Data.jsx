import { AppWindow, ProjectorScreenChart, Users } from "@phosphor-icons/react";
import { Button } from "../../components/button";
import Container from "../../components/container";

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
    <Container className="flex flex-col md:flex-row gap-8 md:gap-16 text-dark-1">
      <div className="flex gap-4 md:gap-8 flex-col flex-1">
        <h1 className="font-bold text-2xl sm:text-4xl text-primary-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ea?
        </h1>
        <p className="font-normal text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae praesentium, laudantium ea
          eaque obcaecati quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          pariatur rem ab molestiae animi fuga porro dignissimos at nemo quam?
        </p>
        <Button intent="outline" className="uppercase px-8">
          Learn More About Us
        </Button>
      </div>
      <div className="flex gap-4 sm:gap-8 flex-col flex-1">
        {dataList.map((item, index) => (
          <div key={index} className="flex gap-2 sm:gap-4 align-items-start">
            <div className="block text-primary-1 mt-1">{item.icon}</div>
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-xl sm:text-3xl text-primary-1">{item.title}</h1>
              <p className="font-normal text-base sm:text-lg">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Data;
