import React from "react";

interface Props {
  label: string;
}
const Label: React.FC<Props> = ({ label }) => {
  return (
    <h3 className="text-gray-500  text-sm py-2">Please Enter your {label} </h3>
  );
};

export default Label;
