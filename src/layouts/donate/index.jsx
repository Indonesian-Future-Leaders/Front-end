import { ctg_1, ctg_2, wct_1, wct_2, head_blog } from "../../assets";

import Hero from "../../components/hero";
import Card from "../../components/card";
import Container from "../../components/container";
import { BCA, BNI, BRI, BSI, Mandiri, dana, flip, gopay, ovo, shopeepay } from "../../assets/icons";
import Image from "../../components/image";

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
  "Culpa dolor a qui quibusdam, delectus, similique sint deleniti labore molestias asperiores numquam obcaecati corporis, officiis impedit sit mollitia praesentium consequuntur sapiente consectetur ullam? Omnis tempore eos ullam reprehenderit sed unde. Quas quasi rerum voluptatem incidunt et dignissimos delectus aperiam voluptatum maiores.";

const iconPayment = [BRI, BSI, BNI, Mandiri, BCA, gopay, flip, shopeepay, dana, ovo];

const DonateSection = () => {
  return (
    <>
      <Hero title="Your Donation Matters" description={desc} image={head_blog} />
      <Container className="text-center">
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
              className="!rounded-xl"
            />
          ))}
        </menu>
        <menu className="space-y-10 text-center mt-24">
          <h1 className="text-2xl sm:text-3xl font-bold">Our Payment Methods</h1>
          <div className="grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-5 place-items-center">
            {iconPayment.map((item, index) => (
              <Image key={index} src={item} className="!w-14 h-10 rounded-md" />
            ))}
          </div>
        </menu>
      </Container>
    </>
  );
};

export default DonateSection;
