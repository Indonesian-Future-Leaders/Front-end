import { instagram, shop, shopee, tokopedia } from "../../assets";
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
    <div className="relative">
      <Filter className="!from-dark-fade-2 from-0% to-50%" />
      <Container className="flex flex-col md:flex-row gap-8 py-16 !my-0">
        <Image src={shop} className="min-h-300 flex-1 z-1" />
        <div className="flex flex-col gap-8 justify-evenly flex-1 z-1 max-w-full lg:max-w-md text-dark-1">
          <h1 className="font-bold text-2xl text-primary-1">Buy & Donate</h1>
          <p className="font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis voluptatum architecto
            sapiente quas totam nihil ex voluptatibus labore odit vitae
          </p>
          <div className="flex gap-4 flex-wrap">
            {iconsList.map((item, index) => (
              <Button
                key={index}
                intent="secondary"
                className="flex items-center gap-1 sm:gap-2 bg-primary-1"
              >
                <Image src={item.icon} className="!w-4 h-4 sm:h-6 sm:!w-6" />
                {item.title}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
