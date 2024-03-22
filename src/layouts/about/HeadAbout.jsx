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

const founder = [
  { name: "M. Imam usman", image: imam_usman },
  { name: "Andhyta F. Utami", image: andhyta },
  { name: "Niwa R. Dwitama", image: niwa },
];

const HeadAbout = () => {
  // const [currentTab, setCurrentTab] = React.useState(0);

  // const lastIndex = currentTab + 1;

  // const itemsToDisplay = programList.slice(currentTab, lastIndex);
  return (
<<<<<<< HEAD
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
          {founder.map((item, index) => {
            const { name, image } = item;
            return (
              <div key={index} className="space-y-2 text-dark-1 text-center">
                <Image src={image} className="min-h-200 min-w-200" />
                <h1 className="font-bold">{name}</h1>
              </div>
            );
          })}
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
=======
    <Container className="text-dark-1 !my-8 space-y-10">
      <h1 className="text-4xl font-bold text-center text-primary-1">About Us</h1>
      <p className="text-lg leading-relaxed">
        Indonesia Future Leaders merupakan lembaga swadaya masyarakat dari pemuda, oleh pemuda, dan untuk pemuda yang didedikasikan untuk
        mengembangkan kualitas dan kapabilitas pemuda dalam menciptakan perubahan sosial untuk Indonesia yang lebih baik. Indonesian Future Leaders
        berdiri secara resmi sebagai sebuah Lembaga Swadaya Masyarakat yang digerakkan oleh kaum muda, pada tahun 2009, oleh sekelompok anak muda
        berusia 17-18 tahun yang terdiri atas :
      </p>
      <div className="flex flex-wrap items-center justify-center gap-16">
        {founder.map((item, index) => {
          const { name, image } = item;
          return (
            <div key={index} className="space-y-2 text-center text-dark-1">
              <Image src={image} className="w-60" description={name} />
              <h1 className="font-bold">{name}</h1>
            </div>
          );
        })}
      </div>
      <p className="text-lg leading-relaxed">
        Serta 3 pemuda lainnya yaitu Dian Aditya Ning Lestari, Stephanie Herdjo, dan Audry Maulana. Mereka percaya bahwa untuk memajukan Indonesia,
        bukan hanya menjadi tanggung jawab pemerintah, tetapi seluruh elemen masyarakat, termasuk pemuda. Melalui Indonesian Future Leaders,
        diharapkan akan lahir generasi muda Indonesia yang capable dan berdampak bagi perubahan positif di masyarakat. Sehingga kaum muda, tidak hanya
        menjadi objek dari pembangunan, tetapi juga menjadi motor penggerak dari pembangunan itu sendiri.
      </p>
      {/* <Tab type="underline" currentTab={currentTab} totalTabs={aboutList} onTabChange={(tab) => setCurrentTab(tab)} /> */}
    </Container>
>>>>>>> 7b9098b190604f11c817c013f31a26b42235d565
  );
};

export default HeadAbout;
