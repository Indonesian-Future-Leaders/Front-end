import { background_login_register } from "../../assets";
import { logo_text } from "../../assets/icons";
import Filter from "../../components/filter";
import Icon from "../../components/icon";
import Background from "../../components/background";

const AuthBackgroundLayout = ({ children }) => {
  return (
    <Background src={background_login_register} className="min-h-screen !bg-bottom !justify-center p-4 text-dark-1">
      <Icon src={logo_text} size="logo" className="absolute hidden z-1 left-8 top-8 md:block" description="IFL Malang" />
      <Filter intent="primary" />
      {children}
    </Background>
  );
};

export default AuthBackgroundLayout;
