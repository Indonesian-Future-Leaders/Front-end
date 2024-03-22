import * as React from "react";

import { useParams } from "react-router-dom";

import { useGetCampaignById } from "../../features/campaign";

import { CaretLeft } from "@phosphor-icons/react";

import { background_program_project, image_iflta } from "../../assets";

import Background from "../../components/background";
import { Button } from "../../components/button";
import Container from "../../components/container";
import Image from "../../components/image";
import Loading from "../../components/loader";

// import { BCA, BNI, BRI, BSI, Mandiri } from "../../assets/icons";

const amounts = [5000, 10000, 15000, 20000, 25000, 50000, 100000];

const InputAmount = ({ value }) => {
  return (
    <input
      type="number"
      defaultValue={value}
      placeholder="Rp. 0"
      className="w-full p-8 text-3xl font-semibold text-center border-2 border-gray-200 outline-none rounded-xl"
      min="0"
      required
    />
  );
};

const InputIdentity = ({ name, type, value, register, placeholder, disabled }) => {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm font-semibold text-primary-1">
        {name}
      </label>
      <input
        type={type}
        {...register(name)}
        id={name}
        className="bg-gray-200 border border-gray-300 text-dark-1 text-sm rounded-lg focus:ring-primary-1 focus:border-primary-1 block w-full p-2.5 outline-none"
        placeholder={placeholder}
        autoComplete="off"
        defaultValue={value}
        required
        disabled={disabled}
      />
    </div>
  );
};

const PaymentDonate = ({ register, dataProfile, handleSubmit, mutate, isPending }) => {
  const [amount, setAmount] = React.useState(null);
  const [isAnonymous, setAnonymous] = React.useState(false);

  const { id } = useParams();

  const { data: singleData } = useGetCampaignById(id);

  const onSubmit = (fieldValue) => {
    const { Name, Email, Message } = fieldValue;
    const nameCondition = Name || dataProfile?.name;
    const emailCondition = Email || dataProfile?.email;

    if (isAnonymous) {
      const body = { id, name: "anonymous", email: "anonymous@gmail.com", donation_message: Message, donation_amount: amount };
      mutate(body);
      return;
    }

    const body = { id, name: nameCondition, email: emailCondition, donation_message: Message, donation_amount: amount };
    mutate(body);
  };

  React.useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = process.env.REACT_APP_PUBLIC_CLIENT;

    const script = document.createElement("script");
    script.src = snapScript;
    script.type = "text/javascript";
    script.setAttribute("data-client-key", clientKey);

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Background src={background_program_project} className="text-dark-1">
      <Container className="max-w-screen-sm py-8 space-y-8 text-justify border rounded-md shadow-md bg-light-1">
        <Button>
          <CaretLeft size={24} /> Return to Campaign
        </Button>
        <div className="flex flex-col justify-between gap-4 px-8 sm:flex-row">
          <Image
            src={singleData?.image || image_iflta}
            className="flex-shrink-0 w-full h-60 sm:h-40 sm:w-60 rounded-xl"
            description={singleData?.title}
          />
          <div className="flex flex-col justify-center gap-4">
            <p className="md:text-lg">
              You`re donating <strong>{singleData?.title}</strong>
            </p>
            <p className="md:text-lg">
              The fund will benefit <strong>{singleData?.receiver}</strong>
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="px-8 space-y-4">
          <InputIdentity name="Name" placeholder="john" register={register} type="text" value={dataProfile?.name} disabled={isAnonymous} />
          <InputIdentity
            name="Email"
            placeholder="johndoe@gmail.com"
            register={register}
            type="email"
            value={dataProfile?.email}
            disabled={isAnonymous}
          />
          <InputIdentity name="Message" placeholder="input your message" register={register} type="text" />
          <div className="flex items-center">
            <input
              id="checked-checkbox"
              type="checkbox"
              onChange={(e) => setAnonymous(e.target.checked)}
              className="w-4 h-4 rounded cursor-pointer accent-primary-1"
            />
            <label htmlFor="checked-checkbox" className="text-sm font-medium cursor-pointer text-dark-1 ms-2">
              Donate as anonymous
            </label>
          </div>
          <div className="max-w-sm mx-auto space-y-4 text-center">
            <h1 className="text-gray-400">Enter the amount:</h1>
            <InputAmount value={amount} />
            <div className="flex flex-wrap justify-center gap-4">
              {amounts.map((item, index) => {
                return (
                  <Button
                    type="button"
                    ariaLabel="payment-amount"
                    onClick={() => setAmount(item)}
                    key={index}
                    intent="outline"
                    className="flex-1 rounded-lg"
                  >
                    {item}
                  </Button>
                );
              })}
            </div>
          </div>
          <Button type="submit" ariaLabel="submit-payment-donate" intent="secondary" className="!w-full max-w-sm mx-auto">
            Donate now
          </Button>
        </form>
        {isPending && <Loading height={100} width={100} className="m-4" />}
      </Container>
    </Background>
  );
};

export default PaymentDonate;
