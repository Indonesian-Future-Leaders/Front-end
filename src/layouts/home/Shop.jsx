import { instagram, shopee, tokopedia } from "../../assets/icons";
import { image_tumbler } from "../../assets";

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
    <Image src={image_tumbler} className="relative" id="shop">
      <Filter intent="primary" />
      <Container className="flex flex-col md:flex-row gap-8 z-1 text-light-1">
        <Image src={image_tumbler} className="flex-1 min-h-300" />
        <div className="flex flex-col flex-1 max-w-full gap-8 justify-evenly lg:max-w-md">
          <h1 className="text-2xl font-bold">Buy & Donate</h1>
          <p className="font-medium text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis voluptatum architecto sapiente quas totam nihil ex voluptatibus labore
            odit vitae
          </p>
          <div className="flex flex-wrap gap-4">
            {iconsList.map((item, index) => (
              <Button key={index} intent="primary" className="flex items-center gap-1 sm:gap-2">
                <Image src={item.icon} className="!w-4 h-4 sm:h-6 sm:!w-6" />
                {item.title}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </Image>
  );
};

export default Shop;