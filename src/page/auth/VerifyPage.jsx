import { useEffect } from "react";

import { useResendEmail } from "../../features/authentication";

import { useNavigate, useSearchParams } from "react-router-dom";

import { ArrowLeft } from "@phosphor-icons/react";

import AuthBackgroundLayout from "../../layouts/authentication";

import { Button } from "../../components/button";
import Icon from "../../components/icon";

import { message } from "../../assets/icons";

const VerifyPage = () => {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("mail");

  const navigate = useNavigate();

  const { mutate } = useResendEmail();

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ email: query });
  };

  useEffect(() => {
    if (!query) {
      navigate("*");
    }
  }, [navigate, query]);

  return (
    <AuthBackgroundLayout>
      <div className="w-full max-w-2xl p-8 space-y-6 text-center bg-light-1 rounded-2xl z-1">
        <Icon src={message} size="logo" className="mx-auto" description="verification-message" />
        <h1 className="mb-2 text-2xl font-bold uppercase">Account Confirmation</h1>
        <p className="text-sm">
          An email with your account confirmation link has been sent to your email:<strong>{query}</strong>
        </p>
        <p className="text-sm !mt-0">
          If you don`t receive email.{" "}
          <button onClick={handleSubmit} className="underline duration-300 text-primary-1 hover:text-primary-2">
            click here to resend
          </button>
        </p>
        <Button onClick={() => (window.location.href = "/login")} intent="secondary" className="mx-auto">
          <ArrowLeft className="me-1" size={16} /> Login
        </Button>
      </div>
    </AuthBackgroundLayout>
  );
};

export default VerifyPage;
