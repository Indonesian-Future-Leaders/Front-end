import * as React from "react";

import { background_program_project } from "../../assets";

import Hero from "../../components/hero";
import Container from "../../components/container";
import Tab from "../../components/tab";
import Image from "../../components/image";

import { projectList, projectDescriptions as project } from "../../static/data";

const ProjectSection = () => {
  const [currentTab, setCurrentTab] = React.useState(0);

  const lastIndex = currentTab + 1;

  const itemsToDisplay = projectList.slice(currentTab, lastIndex);
  return (
    <>
      <Hero type="text" title={project.title} description={project.description} image={project.image} />
      <Image src={background_program_project} className="min-h-fit">
        <Container className="!my-4 text-center !mb-16">
          <Tab type="underline" currentTab={currentTab} totalTabs={projectList} onTabChange={(tab) => setCurrentTab(tab)} />
          <div className="mt-12 overflow-hidden">
            {itemsToDisplay.map((item, index) => (
              <div key={index} className="space-y-8 text-dark-1">
                <h1 className="text-5xl font-bold tracking-wide">{item.title}</h1>
                <Image src={item.image} className="max-w-screen-md mx-auto min-h-300 sm:min-h-500" />
                <p className="text-base sm:text-xl leading-relaxed text-justify">{item.desc}</p>
                <menu className="space-y-2">
                  <p className="text-base sm:text-xl leading-relaxed text-justify">
                    <strong>Waktu Pelaksanaan: </strong>
                    {item.timeline}
                  </p>
                  <p className="text-base sm:text-xl leading-relaxed text-justify">
                    <strong>Target Sasaran: </strong>
                    {item.target}
                  </p>
                </menu>
              </div>
            ))}
          </div>
        </Container>
      </Image>
    </>
  );
};

export default ProjectSection;
