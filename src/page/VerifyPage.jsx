import { useEffect } from "react";

import { useNavigate, useSearchParams } from "react-router-dom";

import { useResendEmail } from "../features/authentication";

import { message } from "../assets/icons";
import Background from "../components/background";
import { Button, Links } from "../components/button";
import { Icon } from "../components/icon";
import Loading from "../components/loader";

const VerifyPage = () => {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("mail");

  const navigate = useNavigate();

  const { mutate, isPending } = useResendEmail();

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({
      email: query,
    });
  };

  useEffect(() => {
    if (!query) {
      navigate("*");
    }
  }, [navigate, query]);

  return (
    <Background>
      <div className="bg-light-1 rounded-2xl w-full max-w-xl text-center z-1 space-y-6 py-8 px-16">
        <Icon src={message} size="logo" className="mx-auto" />
        <h1 className="text-3xl uppercase font-bold">Verify Your Email Address</h1>
        <p className="text-sm">In order to register, you need to verify your email address. Please verify by clicking the button below</p>
        {isPending ? (
          <Loading width={50} height={50} />
        ) : (
          <>
            <Button onClick={handleSubmit} intent="secondary" className="mx-auto">
              Verify Email Address
            </Button>
            <Links to="/login" intent="secondary">
              Login
            </Links>
          </>
        )}
      </div>
    </Background>
  );
};

export default VerifyPage;
