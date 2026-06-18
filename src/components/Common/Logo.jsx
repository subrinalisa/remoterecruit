import LogoImg from "@/assets/img/logo.svg";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src={LogoImg}
        className="w-full max-w-17 md:max-w-full"
        alt="Remote Recruit"
      />
    </Link>
  );
};

export default Logo;
