import React from "react";
import Form from "./components/Form";
import Showcase from "./components/Showcase";

const SignUp = () => {
  return (
    <div className="flex *:flex-1 p-8 space-x-2">
      <Form />
      <Showcase />
    </div>
  );
};

export default SignUp;
