import React from "react";
import { wct_1, wct_2 } from "../../assets";
import Container from "../../components/container";
import Tab from "../../components/tab/Tab";
import Image from "../../components/image";

const programList = [
  {
    title: "We Care Them",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi consequatur asperiores sequi a ipsum neque, dolore repellendus atque optio facilis, enim velit blanditiis tempore perspiciatis nobis minus sunt accusantium veniam aspernatur nemo eos ab possimus dolores. Nobis modi iusto facilis? Error saepe nulla maxime delectus, magni veritatis esse animi nostrum veniam doloremque aliquid. Voluptate ad hic libero quasi odit totam quod velaccusantium, illo molestiae, repellendus officia eligendi ducimus magnam. Aperiam assumenda deleniti minima similique culpa",
    image: wct_1,
  },
  {
    title: "Aku Pintar",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi consequatur asperiores sequi a ipsum neque, dolore repellendus atque optio facilis, enim velit blanditiis tempore perspiciatis nobis minus sunt accusantium veniam aspernatur nemo eos ab possimus dolores. Nobis modi iusto facilis? Error saepe nulla maxime delectus, magni veritatis esse animi nostrum veniam doloremque aliquid. Voluptate ad hic libero quasi odit totam quod velaccusantium, illo molestiae, repellendus officia eligendi ducimus magnam. Aperiam assumenda deleniti minima similique culpa",
    image: wct_2,
  },
];

const FieldProgram = () => {
  const [currentTab, setCurrentTab] = React.useState(0);

  const itemsPerTab = 1;

  const onTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const startIndex = currentTab * itemsPerTab;

  const endIndex = startIndex + itemsPerTab;

  const itemsToDisplay = programList.slice(startIndex, endIndex);

  return (
    <Container className="!my-4 text-center !mb-16">
      <Tab
        type="underline"
        currentTab={currentTab}
        totalTabs={programList}
        onTabChange={onTabChange}
      />
      <div className="mt-12  overflow-hidden">
        {itemsToDisplay.map((item, index) => (
          <div key={index} className="flex flex-col gap-8 text-dark-1">
            <h1 className="text-5xl font-bold tracking-wide">{item.title}</h1>
            <Image src={item.image} className="min-h-500 max-w-screen-md mx-auto" />
            <p className="text-justify text-xl leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FieldProgram;
