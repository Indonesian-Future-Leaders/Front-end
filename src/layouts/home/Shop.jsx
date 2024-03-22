import { instagram, shopee } from "../../assets/icons";
import { image_tumbler } from "../../assets";

import { Button } from "../../components/button";
import Container from "../../components/container";
import Filter from "../../components/filter";
import Image from "../../components/image";
import Background from "../../components/background";
import Icon from "../../components/icon";

const iconsList = [
  { title: "Instagram", icon: instagram, path: "https://www.instagram.com/buyndonate.id/" },
  { title: "Shopee", icon: shopee, path: "https://shopee.co.id/buyndonate" },
];

const Shop = () => {
  return (
    <Background src={image_tumbler} className="relative" id="shop">
      <Filter intent="primary" />
      <Container className="flex flex-col gap-8 md:flex-row md:gap-16 z-1 text-light-1">
        <Image src={image_tumbler} className="flex-1 w-96" description="IFL Malang tumblr" />
        <div className="flex flex-col flex-1 max-w-full gap-8 justify-evenly lg:max-w-lg">
          <h1 className="text-2xl font-bold md:text-4xl">Buy & Donate</h1>
          <p className="text-xl font-semibold">
            Penjualan merch dari IFL Chapter Malang yang 100% keuntungan akan diberikan untuk charity melalui Program-Project IFL Chapter Malang.
          </p>
          <div className="flex flex-wrap gap-4">
            {iconsList.map((item, index) => (
              <Button onClick={() => window.open(item.path, "_blank")} key={index} intent="primary" className="flex items-center gap-1 sm:gap-2">
                <Icon src={item.icon} description={item.title} />
                {item.title}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </Background>
  );
};

export default Shop;
