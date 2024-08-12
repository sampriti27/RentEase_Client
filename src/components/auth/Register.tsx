import React from "react";
import { Input } from "../shared/form";
import Button from "../shared/buttons/Button";
import TermsCondition from "../shared/form/TermsCondition";

interface Props {
  setAuth: React.Dispatch<React.SetStateAction<string>>;
}

const Register: React.FC<Props> = ({ setAuth }) => {
  return (
    <>
      <div className="w-full">
        <Input type="text" label="Full Name" />

        <Input type="email" label="Email ID" />

        <Input type="text" label="Username" />

        <Input type="password" label="Password" />

        <div>
          <h3 className="text-sky-950 font-medium">Are You Landlord ?</h3>
          <div className="w-1/2 flex gap-2 items center mt-4">
            <Button text="Yes" />
            <Button text="No" />
          </div>
          <TermsCondition />
        </div>
        <div className="mt-8 mb-4">
          <Button text="Creat Account" isDark={true} />
          <p className="text-xs mt-2 ml-2">
            Already Registered?{" "}
            <span
              className="text-sky-500 cursor-pointer hover:underline underline-offset-2"
              onClick={() => setAuth("login")}
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
