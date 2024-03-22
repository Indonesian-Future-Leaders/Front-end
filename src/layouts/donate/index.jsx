import { Link } from "react-router-dom";
// import { BCA, BNI, BRI, BSI, Mandiri, dana, flip, gopay, ovo, shopeepay } from "../../assets/icons";

import { image_donation } from "../../assets";

import Hero from "../../components/hero";
import Container from "../../components/container";
import Loading from "../../components/loader";
import Image from "../../components/image";
import ProgressBar from "../../components/progressbar";
import { Button } from "../../components/button";
// import Icon from "../../components/icon";

const desc =
  "Donating is not merely a transaction; it's a profound impact we can create by extending a helping hand to those in need. It has power to bring warmth to the hearts of those facing adversity";

// const iconPayment = [BRI, BSI, BNI, Mandiri, BCA, gopay, flip, shopeepay, dana, ovo];

const DonateSection = ({ campaignData, isLoading }) => {
  return (
    <section className="text-dark-1">
      <Hero title="Your Donation Matters" description={desc} image={image_donation} />
      <Container>
        {isLoading ? (
          <Loading height={100} width={100} />
        ) : (
          <menu className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {campaignData?.map((item, index) => {
              const percentDonation = Math.round((item?.current_donation / 2000000) * 100);
              return (
                <article key={index} className="card max-w-300 !rounded-2xl">
                  <Image src={item?.image} className="w-full rounded-lg h-72" description={item?.title} />
                  <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex gap-1">
                        {item?.categories?.map((category, categoryId) => (
                          <p className="text-xs font-bold" key={categoryId}>
                            {category}
                            {item?.categories?.length > 1 && categoryId - 1 ? "," : ""}
                          </p>
                        ))}
                      </div>
                      <h1 className="font-semibold text-primary-1 line-clamp-2">{item?.title}</h1>
                    </div>
                  </div>
                  <div className="relative flex items-center w-full gap-2">
                    <ProgressBar progress={percentDonation} target_donation={item?.target_donation} current_donation={item?.current_donation} />
                  </div>
                  <Link className="mx-auto cursor-pointer w-max" aria-label="navigate" to={`/donate/${item?.id}`}>
                    <Button intent="outline" size="small" className="px-4 mt-2 rounded-lg" ariaLabel={`donate-${item?.title}`}>
                      Donate Now
                    </Button>
                  </Link>
                </article>
              );
            })}
          </menu>
        )}
      </Container>
    </section>
  );
};

export default DonateSection;
{
  /* <menu className="mt-24 space-y-10 text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Our Payment Methods</h1>
          <div className="grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-5 place-items-center">
            {iconPayment.map((item, index) => (
              <Icon key={index} src={item} size="large" />
            ))}
          </div>
        </menu> */
}
