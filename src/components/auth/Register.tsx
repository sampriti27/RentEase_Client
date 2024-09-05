import React, { useState } from "react";
import Input from "../shared/form/Input";
import Button from "../shared/buttons/Button";
import TermsCondition from "../shared/form/TermsCondition";
import { APIResponse, RegisterUser, User } from "../../types";
import { useSnackbar } from "notistack";
import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { registerUser } from "../../http";

interface Props {
  setAuth: React.Dispatch<React.SetStateAction<string>>;
}

const Register: React.FC<Props> = ({ setAuth }) => {
  const [registerData, setRegisterData] = useState<RegisterUser>({
    fullName: "",
    email: "",
    username: "",
    password: "",
    role: "",
  });

  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAccepted(e.target.checked);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleRoleSelection = (role: string) => {
    setRegisterData({
      ...registerData,
      role: role,
    });
    setSelectedRole(role);
  };

  const registerMutation = useMutation({
    mutationFn: (data: RegisterUser) => registerUser(data),
    onSuccess: (data: AxiosResponse<APIResponse<User>>) => {
      enqueueSnackbar(data.data.message, {
        variant: "success",
      });
      console.log(data.data);
      // Clear the input fields and reset form state
      setRegisterData({
        fullName: "",
        email: "",
        username: "",
        password: "",
        role: "",
      });
      setSelectedRole(null);
      setTermsAccepted(false);
      setAuth("login");
    },
    onError: (error: any) => {
      enqueueSnackbar(error?.response?.data?.message || "Registration failed", {
        variant: "error",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!termsAccepted) {
      enqueueSnackbar(
        "Please agree to the terms and conditions before proceeding.",
        { variant: "error" }
      );
      return;
    }

    // Trigger mutation for form submission
    registerMutation.mutate(registerData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-full">
          <Input
            type="text"
            name="fullName"
            label="Full Name"
            value={registerData.fullName}
            onChange={handleInputChange}
          />

          <Input
            type="email"
            name="email"
            label="Email ID"
            value={registerData.email}
            onChange={handleInputChange}
          />

          <Input
            type="text"
            name="username"
            label="username"
            value={registerData.username}
            onChange={handleInputChange}
          />

          <Input
            type="password"
            name="password"
            label="Password"
            value={registerData.password}
            onChange={handleInputChange}
          />

          <div>
            <h3 className="text-sky-950 font-medium">Are You Landlord?</h3>
            <div className="w-1/2 flex gap-2 items-center mt-4">
              <Button
                text="Yes"
                isSelected={selectedRole === "Landlord"}
                onClick={() => handleRoleSelection("Landlord")}
              />
              <Button
                text="No"
                isSelected={selectedRole === "Tenant"}
                onClick={() => handleRoleSelection("Tenant")}
              />
            </div>
            <TermsCondition
              termsAccepted={termsAccepted}
              onTermsChange={handleTermsChange}
            />
          </div>

          <div className="mt-8 mb-4">
            <Button
              text="Create Account"
              isDark={true}
              type="submit"
              loading={registerMutation.isLoading}
            />
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
      </form>
    </>
  );
};

export default Register;
