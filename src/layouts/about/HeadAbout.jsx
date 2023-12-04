// import * as React from "react";
import { andhyta, imam_usman, niwa } from "../../assets";
import Container from "../../components/container";
import Image from "../../components/image";
// import Tab from "../../components/tab";

// const aboutList = [
//   { title: "Consectetur elit" },
//   { title: "Simply dummy" },
//   { title: "Long established" },
//   { title: "Readable content" },
//   { title: "Lorem Ipsum" },
//   { title: "Remaining essentially" },
//   { title: "Have evolved" },
//   { title: "Many variations" },
// ];

const HeadAbout = () => {
  // const [currentTab, setCurrentTab] = React.useState(0);

  // const lastIndex = currentTab + 1;

  // const itemsToDisplay = programList.slice(currentTab, lastIndex);
  return (
    <>
      <Container className="text-dark-1 !my-8 space-y-10">
        <h1 className="text-primary-1 font-bold text-4xl text-center">About Us</h1>
        <p className="text-lg leading-relaxed">
          Indonesia Future Leaders merupakan lembaga swadaya masyarakat dari pemuda, oleh pemuda, dan untuk pemuda yang didedikasikan untuk
          mengembangkan kualitas dan kapabilitas pemuda dalam menciptakan perubahan sosial untuk Indonesia yang lebih baik. Indonesian Future Leaders
          berdiri secara resmi sebagai sebuah Lembaga Swadaya Masyarakat yang digerakkan oleh kaum muda, pada tahun 2009, oleh sekelompok anak muda
          berusia 17-18 tahun yang terdiri atas :
        </p>
        <div className="flex flex-wrap gap-16 items-center justify-center">
          <Image src={imam_usman} className="min-h-200 max-w-200" />
          <Image src={andhyta} className="min-h-200 max-w-200" />
          <Image src={niwa} className="min-h-200 max-w-200" />
        </div>
        <p className="text-lg leading-relaxed">
          Serta 3 pemuda lainnya yaitu Dian Aditya Ning Lestari, Stephanie Herdjo, dan Audry Maulana. Mereka percaya bahwa untuk memajukan Indonesia,
          bukan hanya menjadi tanggung jawab pemerintah, tetapi seluruh elemen masyarakat, termasuk pemuda. Melalui Indonesian Future Leaders,
          diharapkan akan lahir generasi muda Indonesia yang capable dan berdampak bagi perubahan positif di masyarakat. Sehingga kaum muda, tidak
          hanya menjadi objek dari pembangunan, tetapi juga menjadi motor penggerak dari pembangunan itu sendiri.
        </p>
        {/* <Tab type="underline" currentTab={currentTab} totalTabs={aboutList} onTabChange={(tab) => setCurrentTab(tab)} /> */}
      </Container>
    </>
  );
};

export default HeadAbout;
