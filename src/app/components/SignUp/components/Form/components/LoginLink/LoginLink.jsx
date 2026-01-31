import Link from "next/link";
import React from "react";

const LoginLink = () => {
  return (
    <p>
      Already have an account?{" "}
      <Link href={"/login"}>
      <span className="text-blue-600">Log in</span>
      </Link>
    </p>
  );
};

export default LoginLink;
