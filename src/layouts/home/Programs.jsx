import { image_program, image_project } from "../../assets";

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
          <Image src={image_program} className="flex-1 min-h-300" />
          <div className="flex flex-col justify-between flex-1 gap-4 py-0 sm:py-8">
            <h1 className="text-2xl font-bold text-primary-1">Programs</h1>
            <p className="tracking-wide text-justify">
              Kegiatan berlandaskan urgensi Sustainable Development Goals yang dilakukan secara periodik dengan jangka waktu tertentu untuk
              berkontribusi satu arah terhadap kelompok masyarakat bertujuan untuk menyelesaikan atau mengurangi masalah di Malang melalui penerapan 3
              pilar aksi IFL Chapter Malang.
            </p>
            <Links intent="secondary" to="/program" className="ms-auto">
              Read More
            </Links>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-4 sm:flex-row">
          <div className="flex flex-col justify-between flex-1 gap-4 py-0 sm:py-8">
            <h1 className="text-2xl font-bold text-primary-1">Projects</h1>
            <p className="tracking-wide text-justify">
              Kegiatan berlandaskan urgensi Sustainable Development Goals yang dilakukan secara non-periodik dengan jangka waktu tertentu untuk
              berkontribusi dua arah dalam menyelesaikan atau mengurangi masalah di Malang melalui penerapan 3 pilar aksi IFL Chapter Malang.
            </p>
            <Links intent="secondary" to="/project" className="ms-auto sm:ms-0">
              Read More
            </Links>
          </div>
          <Image src={image_project} className="flex-1 min-h-300 !bg-bottom" />
        </div>
      </div>
    </Container>
  );
};

export default Programs;
