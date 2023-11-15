import * as React from "react";
import Container from "../../components/container";
import Tab from "../../components/tab";

const aboutList = [
  { title: "Consectetur elit" },
  { title: "Simply dummy" },
  { title: "Long established" },
  { title: "Readable content" },
  { title: "Lorem Ipsum" },
  { title: "Remaining essentially" },
  { title: "Have evolved" },
  { title: "Many variations" },
];

const HeadAbout = () => {
  const [currentTab, setCurrentTab] = React.useState(0);

  // const lastIndex = currentTab + 1;

  // const itemsToDisplay = programList.slice(currentTab, lastIndex);
  return (
    <>
      <Container className="text-dark-1 text-center !my-8 space-y-4">
        <h1 className="text-primary-1 font-bold text-4xl">About Us</h1>
        <p className="mt-4 text-lg leading-snug">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cumque consequuntur expedita cupiditate nobis. Reprehenderit dolores iure
          dolor error voluptate, a impedit quod illum quasi, quo aspernatur adipisci distinctio aperiam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Accusantium magni optio aliquam, officiis quisquam debitis sit recusandae iusto cum qui!
        </p>
        <Tab type="underline" currentTab={currentTab} totalTabs={aboutList} onTabChange={(tab) => setCurrentTab(tab)} />
      </Container>
    </>
  );
};

export default HeadAbout;
