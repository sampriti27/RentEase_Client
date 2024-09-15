import React, { useState } from "react";
import { Label, Input } from "../shared/form";
import Button from "../shared/buttons/Button";
import { AuthUser, LoginUserData } from "../../types";
import { useMutation } from "react-query";
import { loginUser } from "../../http";
import { AxiosResponse } from "axios";
import { enqueueSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { setAuthData } from "../../store/slices/userSlice";
import { closeAuthModal } from "../../store/slices/modalSlice";
import { useNavigate } from "react-router-dom";

interface Props {
  setAuth: React.Dispatch<React.SetStateAction<string>>;
}
const Login: React.FC<Props> = ({ setAuth }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { redirect } = useSelector((state:any) => state.modal);
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
    onSuccess: (data: AxiosResponse<LoginUserData>) => {
      enqueueSnackbar(data.data.message, {
        variant: "success",
      });
      console.log(data.data);

      // Correctly dispatch the user data to the Redux store
      const userData = data.data.user;
      dispatch(
        setAuthData({
          isAuth: true,
          isUserActivated: userData.userActivated as boolean,
          userData: userData,
          role: userData.role as string,
        })
      );

      localStorage.setItem(
        "access_token",
        JSON.stringify(data.data.accessToken)
      );
      localStorage.setItem(
        "refresh_token",
        JSON.stringify(data.data.refreshToken)
      );

      // Clear the input fields and reset form state
      setLoginData({
        userName: "",
        password: "",
      });

      dispatch(closeAuthModal());
      navigate(redirect);
    },
    onError: (error: any) => {
      enqueueSnackbar(
        error?.response?.data?.access_denied_reason || "Login failed",
        {
          variant: "error",
        }
      );
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
            label="Username"
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
