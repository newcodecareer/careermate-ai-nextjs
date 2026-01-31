import React from "react";
import Field from "./components/Field/Field";
import Button from "./components/Button";
import LoginLink from "./components/LoginLink";

const Form = () => {
  return (
    <form className="pt-45 justify-items-center ">
      <div className="min-w-max">
        <h1 className="font-bold text-4xl">Create Your Account</h1>
        <p className="text-sm text-gray-700 mt-3 mb-5">
          Join CareerMate AI and start your smart career journey
        </p>
        <div className="w-full space-y-6 mb-3">
          <Field label="Full Name" placeholder="Your full name" />
          <Field label="Email" placeholder="Your email" />
          <Field label="Password" placeholder="Create a password" />
          <div className="pt-6">
            <Button>Create Account</Button>
          </div>
        </div>
        <LoginLink />
      </div>
    </form>
  );
};

export default Form;
