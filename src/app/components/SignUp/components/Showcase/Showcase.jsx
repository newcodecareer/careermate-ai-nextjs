import React from "react";
import Advantages from "./components/Advantages";
import UserReview from "./components/UserReview";
import SubscribeLink from "./components/SubscribeLink";
import backgroundImage from "./assets/background@2x.png";
import Image from "next/image";

const Showcase = () => {
  return (
    <div className="flex-1">
    <Image src={backgroundImage} alt=""/>
      <Advantages />
      <UserReview />
      <SubscribeLink />
    </div>
  );
};

export default Showcase;
