import React from "react";
import { Label, Input } from "../shared/form";
import Button from "../shared/buttons/Button";

const Login: React.FC = () => {
  return (
    <>
      <div className="w-full">
        <Label label="Email ID/Username" />
        <Input type="text" label="Email ID/Username" />
        <Label label="Password" />
        <Input type="password" label="Password" />
        <div className="mt-8 mb-4">
          <Button text="Login" isDark={true} />
          <p className="text-xs mt-2 ml-2">
            Not Registered?{" "}
            <span className="text-sky-700 cursor-pointer hover:underline underline-offset-2">
              Create an account
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
