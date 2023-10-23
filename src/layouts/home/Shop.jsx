import { InstagramLogo, ShoppingBag, Storefront } from "@phosphor-icons/react";
import { shop } from "../../assets";
import { Button } from "../../components/button";
import Container from "../../components/container";
import Filter from "../../components/filter";
import Image from "../../components/image";

const Shop = () => {
  return (
    <div className="relative">
      <Filter className="filter_custom_black" />
      <Container className="flex flex-col md:flex-row gap-8 py-16 !my-0">
        <Image src={shop} className="min-h-300 flex-1 z-1" />
        <div className="flex flex-col gap-8 justify-evenly flex-1 z-1 max-w-full md:max-w-xs lg:max-w-md text-dark-1">
          <h1 className="font-bold text-2xl text-primary-3">Buy & Donate</h1>
          <p className="font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis voluptatum architecto
            sapiente quas totam nihil ex voluptatibus labore odit vitae
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button intent="secondary" className="flex items-center gap-2 bg-primary-3">
              <InstagramLogo size={24} />
              Instagram
            </Button>
            <Button intent="secondary" className="flex items-center gap-2 bg-primary-3">
              <ShoppingBag size={24} />
              Shopee
            </Button>
            <Button intent="secondary" className="flex items-center gap-2 bg-primary-3">
              <Storefront size={24} />
              Tokopedia
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
