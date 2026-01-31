import Image from "next/image";
import logo from "./assets/logo@2x.png";

const Header = () => {
  return (
    <div className="fixed p-8">
      <Image src={logo} alt="career mate AI logo" className="w-46 h-6" />
    </div>
  );
};

export default Header;
