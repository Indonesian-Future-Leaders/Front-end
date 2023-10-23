import { programs, project } from "../../assets";
import { Links } from "../../components/button";
import Container from "../../components/container";
import Image from "../../components/image";

const Programs = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-semibold tracking-wide text-dark-1">Program Kerja</h1>
        <i className="w-64 h-1 bg-primary-3"></i>
      </div>
      <div className="w-full gap-8 flex flex-col mt-12 text-dark-1">
        <div className="flex gap-4 flex-col md:flex-row">
          <Image src={programs} className="min-h-300 flex-1" />
          <div className="flex-1 py-0 md:py-8 flex flex-col justify-between gap-4">
            <h3 className="font-bold text-primary-3 text-2xl">Programs</h3>
            <p className="tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero accusamus iusto quam
              voluptas, perferendis, sit quod accusantium consequuntur odit, commodi quia repellat
              iste molestias sunt explicabo alias numquam eligendi atque!
            </p>
            <Links intent="secondary" to="/program" className="ms-0 md:ms-auto">
              Read More
            </Links>
          </div>
        </div>
        <div className="flex gap-4 flex-col-reverse md:flex-row">
          <div className="flex-1 py-0 md:py-8 flex flex-col justify-between gap-4">
            <h3 className="font-bold text-primary-3 text-2xl">Projects</h3>
            <p className="tracking-wide">
              Iusto beatae harum fugiat placeat nobis eveniet consequuntur quibusdam praesentium
              adipisci illo ullam laborum eligendi libero delectus expedita ex necessitatibus nam
              sequi, esse blanditiis sint provident ut! Illum consequuntur debitis eos.
            </p>
            <Links intent="secondary" to="/project">
              Read More
            </Links>
          </div>
          <Image src={project} className="min-h-300 flex-1" />
        </div>
      </div>
    </Container>
  );
};

export default Programs;
