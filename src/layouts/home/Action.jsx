import Container from "../../components/container";
import Image from "../../components/image";
import { pillarsActionList } from "../../static/data";

const Action = () => {
  return (
    <Container className="text-center">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-semibold tracking-wide text-dark-1">3 Pilar Aksi</h1>
        <i className="h-1 w-52 bg-primary-1"></i>
      </div>
      <div className="grid w-full grid-cols-1 gap-12 mt-12 sm:grid-cols-2 lg:grid-cols-3 text-dark-1">
        {pillarsActionList.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2 text-center">
            <Image src={item.icon} className="h-28 !w-28" />
            <h1 className="text-2xl font-bold text-primary-1">{item.title}</h1>
            <p className="tracking-wide">{item.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Action;
