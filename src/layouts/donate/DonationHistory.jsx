import { image_iflta } from "../../assets";
import Container from "../../components/container";
import Image from "../../components/image";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDateAndTime } from "../../utils/formatDate";

const DonationHistory = ({ dataDonation }) => {
  return (
    <Container className="space-y-8 max-w-container-2">
      <h1 className="text-2xl font-bold text-center uppercase text-primary-1">donation history</h1>
      {dataDonation?.map((item, index) => {
        return (
          <div key={index} className="donation_card_history">
            <div className="flex flex-col items-center gap-4 sm:gap-8 sm:flex-row">
              <Image
                src={item?.campaign?.image || image_iflta}
                description={item?.campaign?.title}
                className="flex-shrink-0 w-full h-full rounded-2xl sm:w-44 sm:h-28"
              />
              <div className="w-full space-y-4 sm:w-max">
                <span className="flex gap-4 text-xs">
                  <p className="text-gray-400">Donation ID</p>
                  <p className="font-medium">{item?.donation?.donation_id}</p>
                </span>
                <h1 className="font-medium md:text-2xl">{item?.campaign?.title}</h1>
              </div>
            </div>
            <div className="w-full mt-4 space-y-1 sm:w-max text-start sm:mt-0 sm:text-center">
              <span className="flex gap-4 text-sm">
                <p className="text-gray-400">Payment Method:</p>
                <p className="font-medium">{item?.donation?.payment_method}</p>
              </span>
              <h1 className="text-3xl font-semibold text-primary-1">Rp. {formatCurrency(item?.donation?.donation_amount)}</h1>
              <p className="text-sm text-gray-400">{formatDateAndTime(item?.donation?.donation_time)}</p>
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default DonationHistory;
