import * as React from "react";

import { background_program_project } from "../../assets";

import Container from "../../components/container";
import Image from "../../components/image";
import Tab from "../../components/tab";
import Hero from "../../components/hero";
import Background from "../../components/background";

import { programList, programDescriptions as program } from "../../static/data";

const ProgramSection = () => {
  const [currentTab, setCurrentTab] = React.useState(0);

  const lastIndex = currentTab + 1;

  const itemsToDisplay = programList.slice(currentTab, lastIndex);
  return (
    <>
      <Hero type="text" title={program.title} description={program.description} image={program.image} />

      <Background src={background_program_project} className="min-h-fit">
        <Container className="!my-4 text-center !mb-16">
          <Tab type="underline" currentTab={currentTab} totalTabs={programList} onTabChange={(tab) => setCurrentTab(tab)} />
          <div className="mt-12 overflow-hidden">
            {itemsToDisplay.map((item, index) => (
              <div key={index} className="space-y-8 text-dark-1">
                <h1 className="text-5xl font-bold tracking-wide">{item.title}</h1>
                <Image src={item.image} className="w-full max-w-screen-md mx-auto" description={item.title} />
                <p className="text-base leading-relaxed text-justify sm:text-xl">{item.desc}</p>
                <menu className="space-y-2">
                  <p className="text-base leading-relaxed text-justify sm:text-xl">
                    <strong>Waktu Pelaksanaan: </strong>
                    {item.timeline}
                  </p>
                  <p className="text-base leading-relaxed text-justify sm:text-xl">
                    <strong>Target Sasaran: </strong>
                    {item.target}
                  </p>
                </menu>
              </div>
            ))}
          </div>
        </Container>
      </Background>
    </>
  );
};

export default ProgramSection;
