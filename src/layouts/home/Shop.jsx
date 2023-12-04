import { instagram, shopee } from "../../assets/icons";
import { image_tumbler } from "../../assets";

import { Button } from "../../components/button";
import Container from "../../components/container";
import Filter from "../../components/filter";
import Image from "../../components/image";

const iconsList = [
  { title: "Instagram", icon: instagram, path: "https://www.instagram.com/buyndonate.id/" },
  { title: "Shopee", icon: shopee, path: "https://shopee.co.id/buyndonate" },
];

const Shop = () => {
  return (
    <Image src={image_tumbler} className="relative" id="shop">
      <Filter intent="primary" />
      <Container className="flex flex-col md:flex-row gap-8 md:gap-16 z-1 text-light-1">
        <Image src={image_tumbler} className="flex-1 min-h-300 max-w-md" />
        <div className="flex flex-col flex-1 max-w-full gap-8 justify-evenly lg:max-w-lg">
          <h1 className="text-2xl md:text-4xl font-bold">Buy & Donate</h1>
          <p className="font-semibold text-xl">
            Penjualan merch dari IFL Chapter Malang yang 100% keuntungan akan diberikan untuk charity melalui Program-Project IFL Chapter Malang.
          </p>
          <div className="flex flex-wrap gap-4">
            {iconsList.map((item, index) => (
              <Button onClick={() => window.open(item.path, "_blank")} key={index} intent="primary" className="flex items-center gap-1 sm:gap-2">
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
