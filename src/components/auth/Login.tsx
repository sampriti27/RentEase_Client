import React, { useState } from "react";
import { Label, Input } from "../shared/form";
import Button from "../shared/buttons/Button";
import { APIResponse, AuthUser, LoginUserData } from "../../types";
import { useMutation } from "react-query";
import { loginUser } from "../../http";
import { AxiosResponse } from "axios";
import { enqueueSnackbar } from "notistack";

interface Props {
  setAuth: React.Dispatch<React.SetStateAction<string>>;
  setOpenAuthModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const Login: React.FC<Props> = ({ setAuth, setOpenAuthModal }) => {
  const [loginData, setLoginData] = useState<AuthUser>({
    userName: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const loginMutation = useMutation({
    mutationFn: (data: AuthUser) => loginUser(data),
    onSuccess: (data: AxiosResponse<APIResponse<LoginUserData>>) => {
      enqueueSnackbar(data.data.message, {
        variant: "success",
      });
      console.log(data.data);
      // Clear the input fields and reset form state
      setLoginData({
        userName: "",
        password: "",
      });
      setOpenAuthModal(false);
    },
    onError: (error: any) => {
      enqueueSnackbar(error?.response?.data?.message || "Login failed", {
        variant: "error",
      });
    },
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger mutation for form submission
    loginMutation.mutate(loginData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-full">
          <Label label="Email ID/Username" />
          <Input
            type="text"
            name="userName"
            label="username"
            value={loginData.userName}
            onChange={handleInputChange}
          />
          <Label label="Password" />
          <Input
            type="password"
            name="password"
            label="Password"
            value={loginData.password}
            onChange={handleInputChange}
          />
          <div className="mt-8 mb-4">
            <Button
              text="Login"
              isDark={true}
              type="submit"
              loading={loginMutation.isLoading}
            />
            <p className="text-xs mt-2 ml-2">
              Not Registered?{" "}
              <span
                className="text-sky-500 cursor-pointer hover:underline underline-offset-2"
                onClick={() => setAuth("register")}
              >
                Create an account
              </span>
            </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
