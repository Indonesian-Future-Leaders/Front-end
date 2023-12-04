import * as React from "react";

import { ctg_1, ctg_2, wct_1, wct_2 } from "../../assets";

import Container from "../../components/container";
import Tab from "../../components/tab";
import Card from "../../components/card";
import Hero from "../../components/hero";
import { headBlog } from "../../static/data";

const programList = [
  {
    title: "Consectetur adipisicing elit",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi consequatur asperiores sequi a ipsum neque,",
    category: "Category A",
    image: wct_1,
  },
  {
    title: "Quasi consequatur asperiores",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi consequatur asperiores sequi a ipsum neque,",
    category: "Category B",
    image: wct_2,
  },
  {
    title: "Sequi a ipsum neque",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi consequatur asperiores sequi a ipsum neque,",
    category: "Category C",
    image: ctg_2,
  },
  {
    title: "Dolor sit amet",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi consequatur asperiores sequi a ipsum neque,",
    category: "Category D",
    image: ctg_1,
  },
  {
    title: "Sit amet consectetur",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi consequatur asperiores sequi a ipsum neque,",
    category: "Category E",
    image: wct_2,
  },
];

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const categories = ["All", ...new Set(programList.map((item) => item.category))];

  const filteredItems = selectedCategory === "All" ? programList : programList.filter((item) => item.category === selectedCategory);

  const onCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Hero title={headBlog.title} description={headBlog.description} image={headBlog.image} />

      <Container>
        <Tab type="secondary" currentTab={selectedCategory} totalTabs={categories} onTabChange={onCategoryChange} />
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {filteredItems.map((item, index) => (
            <Card
              key={index}
              className="cursor-pointer hover:scale-105 duration-300"
              keys={item}
              path={item.image}
              category={item.category}
              title={item.title}
              desc={item.desc}
              type="blog"
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default BlogSection;
