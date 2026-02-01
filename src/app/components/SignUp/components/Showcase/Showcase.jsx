import React from "react";
import Advantages from "./components/Advantages";
import UserReview from "./components/UserReview";
import SubscribeLink from "./components/SubscribeLink";
import backgroundImage from "./assets/background@2x.png";
import Image from "next/image";

const Showcase = () => {
  return (
    <div className="flex-1 relative rounded-4xl overflow-hidden">
      <Image src={backgroundImage} alt="" fill className="object-cover -z-10" />
      <Advantages />
      <UserReview />
      <SubscribeLink />
    </div>
  );
};

export default Showcase;
