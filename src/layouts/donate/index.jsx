import { ctg_1, ctg_2, wct_1, wct_2, image_donation } from "../../assets";
import { BCA, BNI, BRI, BSI, Mandiri, dana, flip, gopay, ovo, shopeepay } from "../../assets/icons";

import Hero from "../../components/hero";
import Card from "../../components/card";
import Container from "../../components/container";
import { Icon } from "../../components/icon";

const donateList = [
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

const desc =
  "Donating is not merely a transaction; it's a profound impact we can create by extending a helping hand to those in need. It has power to bring warmth to the hearts of those facing adversity";

const iconPayment = [BRI, BSI, BNI, Mandiri, BCA, gopay, flip, shopeepay, dana, ovo];

const DonateSection = () => {
  return (
    <>
      <Hero title="Your Donation Matters" description={desc} image={image_donation} />
      <Container>
        <menu className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {donateList.map((item, index) => (
            <Card
              key={index}
              keys={item}
              path={item.image}
              category={item.category}
              title={item.title}
              desc={item.desc}
              type="donate"
              className="!rounded-3xl"
            />
          ))}
        </menu>
        <menu className="mt-24 space-y-10 text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Our Payment Methods</h1>
          <div className="grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-5 place-items-center">
            {iconPayment.map((item, index) => (
              <Icon key={index} src={item} size="large" />
            ))}
          </div>
        </menu>
      </Container>
    </>
  );
};

export default DonateSection;
