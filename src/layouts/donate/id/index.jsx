import { Link } from "react-router-dom";

import { WarningCircle } from "@phosphor-icons/react";

import { user_heart } from "../../../assets/icons";

import Container from "../../../components/container";
import Image from "../../../components/image";
import Icon from "../../../components/icon";
import Label from "../../../components/label";
import ProgressBar from "../../../components/progressbar";
import { Button } from "../../../components/button";

import { formatCurrency } from "../../../utils/formatCurrency";
import { getTimeRemaining } from "../../../utils/formatDate";
import { image_iflta } from "../../../assets";

const SingleDonation = ({ singleDataCampaign, donators }) => {
  return (
    <Container className="space-y-8 text-dark-1">
      <div className="flex flex-col gap-14 md:flex-row">
        <div className="w-full h-full space-y-4 lg:max-w-xl">
          <Image
            src={singleDataCampaign?.image || image_iflta}
            className="w-full h-full rounded-xl max-h-96 lg:min-w-xl"
            description={singleDataCampaign?.title}
          />
          <div className="flex items-start justify-between pb-2 border-b-2 border-gray-300">
            <h1 className="text-lg font-semibold md:text-2xl">{singleDataCampaign?.title}</h1>
          </div>
        </div>
        <div className="p-1 space-y-4">
          <h1 className="text-2xl font-semibold">Fundraiser</h1>
          <div className="flex items-center gap-4 md:justify-between">
            <Icon src={user_heart} className="p-2 bg-gray-300 rounded-full" size="large" description="person heart" />
            <h1 className="text-sm font-semibold sm:text-lg">Indonesia Future Leaders Chapter Malang</h1>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-medium text-primary-1">Category :</h1>
            {singleDataCampaign?.categories?.map((item, index) => (
              <Label key={index} intent={item} text={item} className="!w-max" />
            ))}
          </div>
          <div className="px-4 py-8 space-y-4 text-center border rounded-lg shadow-lg">
            <div className="flex flex-wrap justify-center text-sm md:text-xl gap-y-0 gap-x-2 text-primary-1">
              <p className="font-medium">Rp. {formatCurrency(singleDataCampaign?.current_donation)}</p>
              <p className="text-gray-400">fund raised from</p>
              <p className="font-medium">Rp. {formatCurrency(singleDataCampaign?.target_donation)}</p>
            </div>
            <ProgressBar target={singleDataCampaign?.donation_collected} className="h-8" />
            <div className="flex justify-between text-sm text-gray-400 md:text-base !mt-2">
              <p>
                <strong className="text-primary-1">{donators || 0}</strong> Donators
              </p>
              <p>
                <strong className="text-primary-1">{getTimeRemaining(singleDataCampaign?.publish_date, singleDataCampaign?.end_date)}</strong> Days
                left
              </p>
            </div>
            <Link to={`/donate/${singleDataCampaign?.id}/payment`} className="block" aria-label="navigate-payment-donate">
              <Button className="!w-full" intent="secondary" ariaLabel="donate-now">
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 px-4 py-2 bg-yellow-100 rounded-lg">
        <i>
          <WarningCircle size={32} className="text-yellow-600" />
        </i>
        <p className="text-yellow-600">{singleDataCampaign?.note}</p>
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Background Story</h1>
        <p className="leading-7 line-clamp-5">{singleDataCampaign?.body}</p>
      </div>
    </Container>
  );
};

export default SingleDonation;
