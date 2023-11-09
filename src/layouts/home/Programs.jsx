import { programs, project } from "../../assets";

import { Links } from "../../components/button";
import Container from "../../components/container";
import Image from "../../components/image";

const Programs = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-semibold tracking-wide text-dark-1">Program Kerja</h1>
        <i className="w-64 h-1 bg-primary-1"></i>
      </div>
      <div className="w-full mt-12 space-y-8 text-dark-1">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Image src={programs} className="flex-1 min-h-300" />
          <div className="flex flex-col justify-between flex-1 gap-4 py-0 sm:py-8">
            <h3 className="text-2xl font-bold text-primary-1">Programs</h3>
            <p className="tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero accusamus iusto quam voluptas, perferendis, sit quod accusantium
              consequuntur odit, commodi quia repellat iste molestias sunt explicabo alias numquam eligendi atque!
            </p>
            <Links intent="secondary" to="/program" className="ms-auto">
              Read More
            </Links>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-4 sm:flex-row">
          <div className="flex flex-col justify-between flex-1 gap-4 py-0 sm:py-8">
            <h3 className="text-2xl font-bold text-primary-1">Projects</h3>
            <p className="tracking-wide">
              Iusto beatae harum fugiat placeat nobis eveniet consequuntur quibusdam praesentium adipisci illo ullam laborum eligendi libero delectus
              expedita ex necessitatibus nam sequi, esse blanditiis sint provident ut! Illum consequuntur debitis eos.
            </p>
            <Links intent="secondary" to="/project" className="ms-auto sm:ms-0">
              Read More
            </Links>
          </div>
          <Image src={project} className="flex-1 min-h-300" />
        </div>
      </div>
    </Container>
  );
};

export default Programs;
