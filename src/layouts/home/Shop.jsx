import { instagram, shopee, tokopedia } from "../../assets/icons";
import { shop } from "../../assets";

import { Button } from "../../components/button";
import Container from "../../components/container";
import Filter from "../../components/filter";
import Image from "../../components/image";

const iconsList = [
  { title: "Instagram", icon: instagram },
  { title: "Shopee", icon: shopee },
  { title: "Tokopedia", icon: tokopedia },
];

const Shop = () => {
  return (
    <section className="relative">
      <Filter className="!from-dark-fade-2 from-0% to-50%" />
      <Container className="flex flex-col md:flex-row gap-8 py-16 !my-0">
        <Image src={shop} className="flex-1 min-h-300 z-1" />
        <div className="flex flex-col flex-1 max-w-full gap-8 justify-evenly z-1 lg:max-w-md text-dark-1">
          <h1 className="text-2xl font-bold text-primary-1">Buy & Donate</h1>
          <p className="font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis voluptatum architecto sapiente quas totam nihil ex voluptatibus labore
            odit vitae
          </p>
          <div className="flex flex-wrap gap-4">
            {iconsList.map((item, index) => (
              <Button key={index} intent="secondary" className="flex items-center gap-1 sm:gap-2">
                <Image src={item.icon} className="!w-4 h-4 sm:h-6 sm:!w-6" />
                {item.title}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Shop;
