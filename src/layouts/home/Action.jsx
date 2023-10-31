import { ACT, INITIATE, INSPIRE, SHARE } from "../../assets";
import Container from "../../components/container";
import Image from "../../components/image";

const actionList = [
  {
    icon: INITIATE,
    title: "INITIATE",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit cupiditate quaerat accusamus, quasi vero",
  },
  {
    icon: ACT,
    title: "ACT",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit cupiditate quaerat accusamus, quasi vero",
  },
  {
    icon: SHARE,
    title: "SHARE",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit cupiditate quaerat accusamus, quasi vero",
  },
  {
    icon: INSPIRE,
    title: "INSPIRE",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit cupiditate quaerat accusamus, quasi vero",
  },
];

const Action = () => {
  return (
    <Container className="text-center">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-semibold tracking-wide text-dark-1">4 Pilar Aksi</h1>
        <i className="w-52 h-1 bg-primary-1"></i>
      </div>
      <div className="w-full gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12 text-dark-1">
        {actionList.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 items-center text-center">
            <Image src={item.icon} className="h-28 !w-28" />
            <h3 className="font-bold text-primary-1 text-2xl">{item.title}</h3>
            <p className="tracking-wide">{item.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Action;
