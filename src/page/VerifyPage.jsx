import { message } from "../assets/icons";
import Background from "../components/background";
import { Button } from "../components/button";
import { Icon } from "../components/icon";

const VerifyPage = () => {
  return (
    <Background>
      <div className="bg-light-1 rounded-2xl w-full max-w-xl text-center z-1 space-y-6 py-8 px-16">
        <Icon src={message} size="logo" className="mx-auto" />
        <h1 className="text-3xl uppercase font-bold">Verify Your Email Address</h1>
        <p className="text-sm">In order to register, you need to verify your email address. Please verify by clicking the button below</p>
        <Button intent="secondary" className="mx-auto">
          Verify Email Address
        </Button>
      </div>
    </Background>
  );
};

export default VerifyPage;
