import { ctg_1, ctg_2, wct_1, wct_2 } from "../../assets";
import Card from "../../components/card";
import Container from "../../components/container";

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
const FieldDonate = () => {
  return (
    <Container className="text-center">
      <div className="mt-8 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
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
      </div>
    </Container>
  );
};

export default FieldDonate;
